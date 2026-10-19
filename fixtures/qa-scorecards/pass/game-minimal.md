---
scorecard_kind: game_qa
sku_id: sku_xx_placeholder_v1.0.0
date_hkt: 2026-10-19
---

# Game QA scorecard (fixture)

## Pack header (required before any PASS)

| Field | Value |
|-------|-------|
| `build_ref` | /tmp/fixture-build/player.exe |

## L1 — Schema / handoff task block

| Case ID | Evidence path |
|---------|---------------|
| GAME-QA-SCH-001 | content/sku_xx_placeholder_v1.0.0/qa/game/sch001 |

## L2 — Phase regression block

| Case ID | Evidence path |
|---------|---------------|
| GAME-QA-LOAD-001 | content/sku_xx_placeholder_v1.0.0/qa/game/load001 |

## Evidence integrity + pack roll-up

| Case ID | Pass / Fail | Evidence path | Notes |
|---------|-------------|---------------|-------|
| GAME-QA-EVD-001 | Pass | content/sku_xx_placeholder_v1.0.0/qa/game/evd001 | |
| GAME-QA-EVD-004 | Pass | content/sku_xx_placeholder_v1.0.0/qa/game/evd004 | |
| GAME-QA-PACK-004 | Pass | content/sku_xx_placeholder_v1.0.0/qa/game/pack004 | |

## Sign-off log

| Role | Name | Date (HKT) | Decision | Why (one line) |
|------|------|------------|----------|----------------|
| QA Lead | | 2026-10-19 | NO | fixture only |
