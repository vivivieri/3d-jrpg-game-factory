#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import YAML from "yaml";
import { die, ok } from "./lib-ajv.mjs";

const TOOL = "validate-qa-scorecard";

const ART_REQUIRED_SECTIONS = [
  "## Pack header",
  "## Pack roll-up (ART-QA-PACK-*)",
  "## Sign-off log"
];

const GAME_REQUIRED_SECTIONS = [
  "## Pack header (required before any PASS)",
  "## L1 — Schema / handoff task block",
  "## L2 — Phase regression block",
  "## Evidence integrity + pack roll-up",
  "## Sign-off log"
];

const ART_REQUIRED_CASE_IDS = [
  "ART-QA-PACK-001",
  "ART-QA-PACK-002",
  "ART-QA-PACK-003",
  "ART-QA-PACK-004"
];

const GAME_REQUIRED_CASE_IDS = [
  "GAME-QA-EVD-001",
  "GAME-QA-EVD-004",
  "GAME-QA-PACK-004"
];

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return { front: null, body: text };
  try {
    const front = YAML.parse(match[1]);
    const body = text.slice(match[0].length);
    return { front, body };
  } catch (e) {
    return { front: { __parseError: e.message }, body: text };
  }
}

function validateFrontmatter(front, errors, kind) {
  if (!front) {
    errors.push("missing YAML frontmatter (required: scorecard_kind, sku_id, date_hkt)");
    return;
  }
  if (front.__parseError) {
    errors.push(`frontmatter YAML parse error: ${front.__parseError}`);
    return;
  }
  if (front.scorecard_kind !== kind) {
    errors.push(`scorecard_kind must be "${kind}" (got ${front.scorecard_kind})`);
  }
  if (!front.sku_id || typeof front.sku_id !== "string") {
    errors.push("frontmatter sku_id required (string)");
  } else if (!/^sku_[a-z]{2}_[a-z0-9_]+_v\d+\.\d+\.\d+$/.test(front.sku_id)) {
    errors.push("frontmatter sku_id must match sku_<country>_<tale>_v<semver>");
  }
  if (!front.date_hkt || typeof front.date_hkt !== "string") {
    errors.push("frontmatter date_hkt required (string, HKT)");
  }
}

function validateSections(body, requiredSections, errors) {
  for (const section of requiredSections) {
    if (!body.includes(section)) {
      errors.push(`missing required section: ${section}`);
    }
  }
}

function validateCaseIds(body, ids, errors) {
  for (const id of ids) {
    if (!body.includes(id)) {
      errors.push(`missing required case id in body: ${id}`);
    }
  }
}

function main() {
  const args = process.argv.slice(2);
  let kind = null;
  let filePath = null;
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--kind" && args[i + 1]) {
      kind = args[++i];
    } else if (!filePath) {
      filePath = args[i];
    }
  }

  if (!filePath || !kind) {
    console.error(`Usage: ${TOOL} --kind art|game <path-to-scorecard.md>`);
    process.exit(2);
  }
  if (kind !== "art" && kind !== "game") {
    console.error("kind must be art or game");
    process.exit(2);
  }

  const abs = path.resolve(filePath);
  if (!fs.existsSync(abs)) {
    console.error(`File not found: ${abs}`);
    process.exit(2);
  }

  const text = fs.readFileSync(abs, "utf8");
  const { front, body } = parseFrontmatter(text);
  const errors = [];

  validateFrontmatter(front, errors, kind === "art" ? "art_qa" : "game_qa");

  if (kind === "art") {
    validateSections(body, ART_REQUIRED_SECTIONS, errors);
    validateCaseIds(body, ART_REQUIRED_CASE_IDS, errors);
    if (!body.includes("Evidence path") && !body.includes("| Evidence path |")) {
      errors.push("missing evidence path column in tables");
    }
  } else {
    validateSections(body, GAME_REQUIRED_SECTIONS, errors);
    validateCaseIds(body, GAME_REQUIRED_CASE_IDS, errors);
    if (!body.includes("build_ref")) {
      errors.push("missing build_ref in pack header section");
    }
  }

  if (errors.length) {
    die(TOOL, errors);
  }
  ok(TOOL, `PASS ${abs} (${kind})`);
}

main();
