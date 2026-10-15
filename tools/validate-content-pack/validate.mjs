#!/usr/bin/env node
/**
 * Validate a factory content pack YAML file:
 * - JSON Schema (draft 2020-12) shape via Ajv
 * - Semantic graph checks (duplicate IDs, orphans, broken refs, handoff.lock)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCHEMA_DIR = path.resolve(__dirname, "../../docs/schemas");

function loadSchemas() {
  const files = fs
    .readdirSync(SCHEMA_DIR)
    .filter((f) => f.endsWith(".schema.json") || f === "common.defs.json");
  const schemas = {};
  for (const file of files) {
    const full = path.join(SCHEMA_DIR, file);
    const doc = JSON.parse(fs.readFileSync(full, "utf8"));
    schemas[doc.$id || file] = doc;
  }
  return Object.values(schemas);
}

function die(errors) {
  console.error("validate-content-pack: FAILED");
  for (const e of errors) {
    console.error(`  - ${e}`);
  }
  process.exit(1);
}

function ok(msg) {
  console.log(`validate-content-pack: ${msg}`);
}

function collectIds(items, field = "id") {
  const ids = [];
  for (const item of items || []) {
    if (item && item[field]) ids.push(item[field]);
  }
  return ids;
}

function findDuplicates(ids) {
  const seen = new Set();
  const dups = new Set();
  for (const id of ids) {
    if (seen.has(id)) dups.add(id);
    seen.add(id);
  }
  return [...dups];
}

function semanticChecks(pack) {
  const errors = [];

  const beatIds = new Set(collectIds(pack.beats));
  const sceneIds = new Set(collectIds(pack.scenes));
  const gateIds = new Set(collectIds(pack.gates));
  const encounterIds = new Set(collectIds(pack.encounters));

  const allBeatIds = collectIds(pack.beats);
  const dupBeats = findDuplicates(allBeatIds);
  if (dupBeats.length) errors.push(`duplicate beat id(s): ${dupBeats.join(", ")}`);

  const dupScenes = findDuplicates(collectIds(pack.scenes));
  if (dupScenes.length) errors.push(`duplicate scene id(s): ${dupScenes.join(", ")}`);

  const dupGates = findDuplicates(collectIds(pack.gates));
  if (dupGates.length) errors.push(`duplicate gate id(s): ${dupGates.join(", ")}`);

  const dupEnc = findDuplicates(collectIds(pack.encounters));
  if (dupEnc.length) errors.push(`duplicate encounter id(s): ${dupEnc.join(", ")}`);

  const dialogueKeys = (pack.dialogue || []).map((d) => d.key);
  const dupDlg = findDuplicates(dialogueKeys);
  if (dupDlg.length) errors.push(`duplicate dialogue key(s): ${dupDlg.join(", ")}`);

  for (const beat of pack.beats || []) {
    if (beat.scene && !sceneIds.has(beat.scene)) {
      errors.push(`beat ${beat.id} references missing scene ${beat.scene}`);
    }
  }

  for (const enc of pack.encounters || []) {
    if (!beatIds.has(enc.beat)) {
      errors.push(`encounter ${enc.id} references missing beat ${enc.beat}`);
    }
  }

  for (const gate of pack.gates || []) {
    for (const req of gate.requires || []) {
      if (!beatIds.has(req)) errors.push(`gate ${gate.id} requires missing beat ${req}`);
    }
    for (const un of gate.unlocks || []) {
      if (!beatIds.has(un)) errors.push(`gate ${gate.id} unlocks missing beat ${un}`);
    }
  }

  for (const frame of pack.storyboard || []) {
    if (!frame.systems || frame.systems.length === 0) {
      errors.push(`orphan storyboard frame ${frame.frame_id}: empty systems[]`);
    }
    if (!beatIds.has(frame.beat)) {
      errors.push(`storyboard frame ${frame.frame_id} references missing beat ${frame.beat}`);
    }
    if (!sceneIds.has(frame.scene)) {
      errors.push(`storyboard frame ${frame.frame_id} references missing scene ${frame.scene}`);
    }
  }

  const lock = pack["handoff.lock"];
  if (!lock) {
    errors.push("handoff.lock missing");
  } else {
    if (pack.schema_version && lock.schema_version !== pack.schema_version) {
      errors.push(
        `handoff.lock.schema_version (${lock.schema_version}) must match pack schema_version (${pack.schema_version})`
      );
    }
    for (const field of ["art_pack_hash", "design_pack_hash"]) {
      const v = lock[field];
      if (!v || typeof v !== "string" || !/^[a-f0-9]{64}$/.test(v)) {
        errors.push(`handoff.lock.${field} missing or not sha256 hex`);
      }
    }
    if (!lock.tip || !String(lock.tip).trim()) {
      errors.push("handoff.lock.tip missing");
    }
    if (!lock.locked_at) {
      errors.push("handoff.lock.locked_at missing");
    }
  }

  if (pack.tale?.sku_id && lock && pack.tale.sku_id) {
    // no-op placeholder for future sku consistency checks
  }

  return errors;
}

function main() {
  const packPath = process.argv[2];
  if (!packPath) {
    console.error("Usage: validate-content-pack <path-to-pack.yaml>");
    process.exit(2);
  }

  const abs = path.resolve(packPath);
  if (!fs.existsSync(abs)) {
    console.error(`File not found: ${abs}`);
    process.exit(2);
  }

  let pack;
  try {
    pack = YAML.parse(fs.readFileSync(abs, "utf8"));
  } catch (e) {
    die([`YAML parse error: ${e.message}`]);
  }

  const ajv = new Ajv2020({ allErrors: true, strict: false });
  addFormats(ajv);
  for (const schema of loadSchemas()) {
    ajv.addSchema(schema);
  }

  const validate = ajv.getSchema(
    "https://vivivieri.github.io/3d-jrpg-game-factory/schemas/content-pack.schema.json"
  );
  if (!validate) {
    die(["content-pack.schema.json not loaded"]);
  }

  const valid = validate(pack);
  const errors = [];

  if (!valid) {
    for (const err of validate.errors || []) {
      errors.push(`${err.instancePath || "/"} ${err.message}`);
    }
  }

  errors.push(...semanticChecks(pack));

  if (errors.length) {
    die(errors);
  }

  ok(`PASS ${abs}`);
}

main();
