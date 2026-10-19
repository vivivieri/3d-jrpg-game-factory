#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { createAjv, die, ok } from "./lib-ajv.mjs";

const TOOL = "validate-license";

function semanticLedger(ledger) {
  const errors = [];
  const ids = new Set();
  for (const asset of ledger.assets || []) {
    if (ids.has(asset.asset_id)) {
      errors.push(`duplicate asset_id: ${asset.asset_id}`);
    }
    ids.add(asset.asset_id);
    if (asset.sku_id !== ledger.sku_id) {
      errors.push(`asset ${asset.asset_id} sku_id must match ledger sku_id`);
    }
    if (asset.commercial_ok !== true) {
      errors.push(`asset ${asset.asset_id} commercial_ok must be true for ship ledger`);
    }
  }
  return errors;
}

function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error(`Usage: ${TOOL} <path-to-ledger.json|LICENSE.json>`);
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
  const isLedger = Array.isArray(doc.assets);
  const schemaId = isLedger
    ? "https://vivivieri.github.io/3d-jrpg-game-factory/schemas/license-ledger.schema.json"
    : "https://vivivieri.github.io/3d-jrpg-game-factory/schemas/license-asset.schema.json";

  const validate = ajv.getSchema(schemaId);
  if (!validate) {
    die(TOOL, [`schema not loaded: ${schemaId}`]);
  }

  const errors = [];
  if (!validate(doc)) {
    for (const err of validate.errors || []) {
      errors.push(`${err.instancePath || "/"} ${err.message}`);
    }
  }
  if (isLedger) {
    errors.push(...semanticLedger(doc));
  } else if (doc.commercial_ok !== true) {
    errors.push("commercial_ok must be true for ship candidate LICENSE.json");
  }

  if (errors.length) {
    die(TOOL, errors);
  }
  ok(TOOL, `PASS ${abs}`);
}

main();
