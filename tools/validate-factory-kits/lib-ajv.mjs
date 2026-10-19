import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const SCHEMA_DIR = path.resolve(__dirname, "../../docs/schemas");

export function loadSchemas() {
  const files = fs
    .readdirSync(SCHEMA_DIR)
    .filter((f) => f.endsWith(".schema.json") || f === "common.defs.json");
  const schemas = [];
  for (const file of files) {
    const full = path.join(SCHEMA_DIR, file);
    schemas.push(JSON.parse(fs.readFileSync(full, "utf8")));
  }
  return schemas;
}

export function createAjv() {
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  addFormats(ajv);
  for (const schema of loadSchemas()) {
    ajv.addSchema(schema);
  }
  return ajv;
}

export function die(tool, errors) {
  console.error(`${tool}: FAILED`);
  for (const e of errors) {
    console.error(`  - ${e}`);
  }
  process.exit(1);
}

export function ok(tool, msg) {
  console.log(`${tool}: ${msg}`);
}
