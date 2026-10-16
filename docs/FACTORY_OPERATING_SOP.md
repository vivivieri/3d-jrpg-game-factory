# Factory operating SOP — day-run procedures (Track A)

**Status:** Procedural leaf — **not** a GO stamp. **Laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) · **Authority order:** [BOOT.md](./BOOT.md).

This file is **do-this-next** for factory kit work. It does not restate Master Plan gates (Schema GO, Phase QA GO, UAT GO, Release GO remain human / unstamped here).

---

## 1. Workability bar (all factory day-runs)

| Rule | Action |
|------|--------|
| No evidence path | Do not mark PASS — status **NO** + `blocked_on` |
| N/A | One-line `why` on the active scorecard/matrix |
| Critical fail | Blocks roll-up until retest artifact exists |
| Soft CI / CONDITIONAL | **Forbidden** — use **GO** or **NO** only |
| Output contract | Every exit: `status · why · paths · next · blocked_on` — [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md) |

---

## 2. Any role — start of session

1. Read [BOOT.md](./BOOT.md) order; confirm board `issue_pack_ref` matches the SKU you will touch.
2. Open [KIT_STATUS.md](./KIT_STATUS.md) — note which GO stamps are **not** stamped (do not invent them).
3. Pick the checklist for your work (templates index: [templates/README.md](./templates/README.md)).
4. Copy the fillable template into `content/<SKU>/...` (or team evidence drive); **do not** PASS in the repo template originals.

---

## 3. QA Lead — game QA day-run (Track A6)

**Open these files in order:**

| Step | Open | Do |
|------|------|-----|
| 1 | [templates/GAME_QA_SCORECARD.md](./templates/GAME_QA_SCORECARD.md) | Copy to `content/<SKU>/qa/GAME_QA_SCORECARD_<YYYYMMDD>.md`; fill header (`sku_id`, `pack_path`, `build_ref`, `tip`, `schema_version`, tester, HKT). |
| 2 | [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) §2.1 | Confirm workability bar; use repo command crib. |
| 3 | [templates/GAME_QA_TEST_CASES.md](./templates/GAME_QA_TEST_CASES.md) | Execute rows; log P/F/N + evidence path per case. |
| 4 | [templates/QA_MATRICES.md](./templates/QA_MATRICES.md) | Mirror L2–L5 summary; link scorecard path. |

### 3.1 L1 — Schema + handoff (machine + checklist)

```bash
cd <repo-root>
npm ci --prefix tools/validate-content-pack
node tools/validate-content-pack/validate.mjs <pack_path>
```

1. Run commands above; save log → `content/<SKU>/qa/schema/GAME-QA-SCH-001_<date>_validate_pass.log` (GAME-QA-SCH-001 … 008 per [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) §3.1).
2. Walk [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md) preconditions + smoke table; map rows to GAME-QA-HOFF-*.
3. Recompute hashes per GAME-QA-HOFF-002 (`sha256sum` vs `handoff.lock` in pack YAML).
4. Any validator stderr line → **NO**; do not start runtime suite.

### 3.2 L2 — Phase regression (build required)

**Precondition:** `build_ref` filled (exported player or CI artifact). No `build_ref` → LOAD/NAR/CMB/SES/LOC/A11Y runtime rows = **NO**.

1. Execute GAME-QA-LOAD-*, CMB-*, SES-* against [L0_SESSION_SAVE_POLICY.md](./templates/L0_SESSION_SAVE_POLICY.md).
2. Locale: [LOCALE_READINESS_CHECKLIST.md](./templates/LOCALE_READINESS_CHECKLIST.md) critical rows → GAME-QA-LOC-* with in-build captures.
3. Accessibility: [ACCESSIBILITY_BASELINE.md](./templates/ACCESSIBILITY_BASELINE.md) spot rows → GAME-QA-A11Y-* (screenshot/video in build).
4. Roll up GAME-QA-PACK-001 + GAME-QA-EVD-* on scorecard.

**Exit (not Phase QA GO stamp):** `GO` / `NO` · why · paths · next · blocked_on

### 3.3 L3 — UAT (play or runtime video only)

1. Re-run GAME-QA-UAT-001 first — reject paper greens (no `.png`/`.mp4` under `content/<SKU>/qa/uat/` = **NO**).
2. Record primary path (GAME-QA-UAT-002) and fail path clip (GAME-QA-UAT-003).
3. Fill QA_MATRICES L3 spine beat table + evidence URLs/paths.
4. GAME-QA-PACK-002 + UAT-006 (zero open Critical defects).

**Exit:** evidence bundle path — **UAT GO remains Stephen / unstamped in kit**

### 3.4 L4 — Release checks

1. Complete [STREAM_PACKAGING_CHECKLIST.md](./templates/STREAM_PACKAGING_CHECKLIST.md) → GAME-QA-REL-001.
2. Cross [RATINGS_CONTENT_MATRIX.md](./templates/RATINGS_CONTENT_MATRIX.md) vs RC build → GAME-QA-REL-002.
3. Store/locale parity placeholders only where markets TBD — do not invent platforms.
4. GAME-QA-PACK-003 on scorecard.

### 3.5 L5 — Live triage

1. When signals fire, add row to [LIVE_OPS_HOTFIX_TALE_QUEUE.md](./templates/LIVE_OPS_HOTFIX_TALE_QUEUE.md) → GAME-QA-LIVE-004.
2. Validate sample events against [telemetry.events.schema.json](./schemas/telemetry.events.schema.json) → GAME-QA-LIVE-001.

### 3.6 Art L1 (parallel — do not merge kits)

- Art rows: [ART_QA_TEST_CASES.md](./templates/ART_QA_TEST_CASES.md) + [ART_QA_SCORECARD.md](./templates/ART_QA_SCORECARD.md).
- Link both scorecard paths in QA_MATRICES L1.

---

## 4. Tech Lead — validator smoke (quick)

1. `npm run validate:pass` — must exit 0.
2. `npm run validate:fail` — must exit non-zero.
3. On schema change: run `node tools/validate-content-pack/validate.mjs` on affected fixture packs under `fixtures/content-packs/`.

---

## 5. PM — gate hygiene (quick)

1. Confirm single live `issue_pack_ref` on board.
2. Before requesting human gates, require linked scorecard paths (art + game) with GAME-QA-EVD-001 clean.
3. Do not accept CONDITIONAL / Soft CI language in handoffs.

---

## 6. References

| Topic | Leaf |
|-------|------|
| Game QA cases | [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) |
| Art QA cases | [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) |
| NON_ART laws | [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) §11 |
| Kit status | [KIT_STATUS.md](./KIT_STATUS.md) |
