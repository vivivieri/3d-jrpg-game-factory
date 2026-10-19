#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { createAjv, die, ok } from "./lib-ajv.mjs";

const TOOL = "validate-telemetry";
const FORBIDDEN_PII_KEYS = new Set([
  "email",
  "player_name",
  "user_name",
  "ip_address",
  "ip",
  "gps",
  "lat",
  "lon",
  "advertising_id",
  "device_serial"
]);

function collectKeys(obj, prefix = "") {
  const keys = [];
  if (!obj || typeof obj !== "object") return keys;
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    keys.push(p);
    if (v && typeof v === "object" && !Array.isArray(v)) {
      keys.push(...collectKeys(v, p));
    }
  }
  return keys;
}

function piiCheck(doc) {
  const errors = [];
  for (const key of collectKeys(doc)) {
    const leaf = key.split(".").pop();
    if (FORBIDDEN_PII_KEYS.has(leaf)) {
      errors.push(`forbidden PII key: ${key}`);
    }
  }
  return errors;
}

function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error(`Usage: ${TOOL} <path-to-event.json>`);
    process.exit(2);
  }
  const abs = path.resolve(filePath);
  if (!fs.existsSync(abs)) {
    console.error(`File not found: ${abs}`);
    process.exit(2);
  }

  let doc;
  try {
    doc = JSON.parse(fs.readFileSync(abs, "utf8"));
  } catch (e) {
    die(TOOL, [`JSON parse error: ${e.message}`]);
  }

  const ajv = createAjv();
  const validate = ajv.getSchema(
    "https://vivivieri.github.io/3d-jrpg-game-factory/schemas/telemetry.events.schema.json"
  );
  if (!validate) {
    die(TOOL, ["telemetry.events.schema.json not loaded"]);
  }

  const errors = [];
  if (!validate(doc)) {
    for (const err of validate.errors || []) {
      errors.push(`${err.instancePath || "/"} ${err.message}`);
    }
  }
  errors.push(...piiCheck(doc));

  if (errors.length) {
    die(TOOL, errors);
  }
  ok(TOOL, `PASS ${abs}`);
}

main();
