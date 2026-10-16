# QA matrices (fillable kit)

**Phase:** QA → Release (Master Plan §3.9, NON_ART §11)  
**Owner:** QA Lead · **Partner:** PM (gates), Tech Lead (schema/CI builds)  
**Hard rule:** Paper greens = **NO** — real play or **runtime** video required for UAT.

## SKU / build header (every evidence pack)

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Build / tip id | |
| `schema_version` | |
| Tester | |
| Timestamp (HKT) | |
| Environment | dev / staging / candidate |

---

## Level 1 — Task QA

**Scope:** Single asset or system ticket (Master Plan §3.9 Task).

### Non-art / schema tasks

Execute numbered cases from [GAME_QA_TEST_CASES.md](./GAME_QA_TEST_CASES.md) (steps in [GAME_QA_BEST_PRACTICES.md](../GAME_QA_BEST_PRACTICES.md) §3) and roll up in [GAME_QA_SCORECARD.md](./GAME_QA_SCORECARD.md). Day-run: [FACTORY_OPERATING_SOP.md](../FACTORY_OPERATING_SOP.md) §3.

| task_id | criterion | GAME-QA case IDs | evidence artifact path | pass/fail | defect link |
|---------|-----------|------------------|------------------------|-----------|-------------|
| | | SCH-*, HOFF-* | `content/<SKU>/qa/schema/...` | | |

### Art / audio tasks (L1 kit — do not duplicate case text here)

For each **MASTER_ASSET_LIST** art row, execute cases from [ART_QA_TEST_CASES.md](./ART_QA_TEST_CASES.md) (full steps in [ART_QA_BEST_PRACTICES.md](../ART_QA_BEST_PRACTICES.md) §3) and roll up in [ART_QA_SCORECARD.md](./ART_QA_SCORECARD.md).

| asset_slug | track | ART-QA case IDs (see ART_QA §4 map) | scorecard path | pass/fail |
|------------|-------|-------------------------------------|----------------|-----------|
| | | | | |

**Art vs non-art:** Art L1 uses engine plates, mid-stride anim evidence, listen logs, and license rows. Phase, UAT, and release below stay **NON_ART** — art task QA does not substitute for Phase QA GO.

**Task GO:** checklist + artifact on disk — not verbal OK.

---

## Level 2 — Sprint / phase regression

**Scope:** Integration across L0–L5 (automated + manual). **Executable kit:** [GAME_QA_BEST_PRACTICES.md](../GAME_QA_BEST_PRACTICES.md) §3 + [GAME_QA_SCORECARD.md](./GAME_QA_SCORECARD.md) L2 block · **Day-run:** [FACTORY_OPERATING_SOP.md](../FACTORY_OPERATING_SOP.md) §3.2.

| area | GAME-QA IDs | L-layer | automated? | manual? | pass/fail | notes |
|------|-------------|---------|------------|---------|-----------|-------|
| Schema / pack | SCH-001…008 | data | yes (`validate.mjs`) | | | |
| Handoff smoke | HOFF-001…006 | data | partial | yes | | [HANDOFF_SMOKE_CONSUMER.md](./HANDOFF_SMOKE_CONSUMER.md) |
| Load | LOAD-001…002 | L2–L3 | | yes (`build_ref`) | | |
| Combat | CMB-001…003 | L4 | | yes | | |
| Locale critical | LOC-001…003 | L1/L3 | | yes | | [LOCALE_READINESS_CHECKLIST.md](./LOCALE_READINESS_CHECKLIST.md) |
| Session | SES-001…002 | L0 | | yes | | [L0_SESSION_SAVE_POLICY.md](./L0_SESSION_SAVE_POLICY.md) |
| Soft-lock hunt | CMB-003 | L2–L4 | | yes | | |
| Accessibility spot | A11Y-001…002 | L1 | | yes | | [ACCESSIBILITY_BASELINE.md](./ACCESSIBILITY_BASELINE.md) |
| Narrative spine | NAR-001…004 | L2–L3 | | yes | | |

**Phase QA GO:** suite pass + logged why — _not stamped in kit repo_

---

## Level 3 — UAT (real play / video)

**Scope:** Primary beat path through canonical ending or chapter milestone. **Cases:** GAME-QA-UAT-001…006 · **Reject paper greens:** no `.png`/`.mp4` under `content/<SKU>/qa/uat/` = **Fail** (GAME-QA-UAT-001).

| criterion | GAME-QA ID | evidence type | path / URL | pass/fail |
|-----------|------------|---------------|------------|-----------|
| Viewport | UAT-001 | `.png` or `.mp4` from `build_ref` | | |
| Beat path | UAT-002, NAR-001 | play/video | | |
| Dialogue | UAT-004, NAR-002 | play/video | | |
| Combat budget | UAT-005, CMB-002 | play/video | | |
| Fail paths | UAT-003, CMB-001 | play/video | | |
| Defect gate | UAT-006 | checklist | | |

### Spine beats under test

| beat ids | |
|----------|---|

**UAT GO:** _Stephen path for ship sign-off per factory policy — not stamped here_

---

## Level 4 — Release QA

**Scope:** Packaging, locale store parity, ratings disclosure (NON_ART §11–§12). **Cases:** GAME-QA-REL-001…005 · **Day-run:** [FACTORY_OPERATING_SOP.md](../FACTORY_OPERATING_SOP.md) §3.4.

| check | GAME-QA ID | evidence path | pass/fail |
|-------|------------|---------------|-----------|
| [STREAM_PACKAGING_CHECKLIST.md](./STREAM_PACKAGING_CHECKLIST.md) complete | REL-001 | `content/<SKU>/qa/release/...` | |
| [RATINGS_CONTENT_MATRIX.md](./RATINGS_CONTENT_MATRIX.md) matches build | REL-002 | | |
| Store strings / locale parity for target markets | REL-003 | _markets TBD_ | |
| Perf within frozen Design/Tech budget | REL-004 | | |
| No under-disclosed mature / AI-generated content | REL-005 | | |

**Release GO:** human platform controls — Stephen

---

## Level 5 — Live health

**Scope:** Post-release telemetry + triage ([LIVE_OPS_HOTFIX_TALE_QUEUE.md](./LIVE_OPS_HOTFIX_TALE_QUEUE.md)). **Cases:** GAME-QA-LIVE-001…004.

| signal | GAME-QA ID | threshold band | current | action / triage row |
|--------|------------|----------------|---------|---------------------|
| Crash-free sessions | LIVE-003 | TBD | | |
| Session start success | LIVE-002 | TBD | | |
| Locale error rate | LIVE-004 | TBD | | |
| Beat drop-off anomalies | LIVE-004 | TBD | | |
| Telemetry shape | LIVE-001 | schema pass | | |

---

## Evidence standards (non-negotiable)

- Viewport from real build — not slides or spliced stills sold as play.  
- UAT prerequisites: critical defects closed, criteria defined, owners scheduled.  
- Prefer **fail loud** over false green.  
- Changing design to make a bad test pass = **NO** (QA Lead escalates).

## References

- Master Plan §3.9 · §6 rule 10  
- [HANDOFF_SMOKE_CONSUMER.md](./HANDOFF_SMOKE_CONSUMER.md) (pre-Cursor smoke)  
- [ART_QA_BEST_PRACTICES.md](../ART_QA_BEST_PRACTICES.md) · [ART_QA_SCORECARD.md](./ART_QA_SCORECARD.md) · [ART_QA_TEST_CASES.md](./ART_QA_TEST_CASES.md) (art L1 task QA)  
- [GAME_QA_BEST_PRACTICES.md](../GAME_QA_BEST_PRACTICES.md) · [GAME_QA_SCORECARD.md](./GAME_QA_SCORECARD.md) · [GAME_QA_TEST_CASES.md](./GAME_QA_TEST_CASES.md) (non-art L1 + L2–L5) · [FACTORY_OPERATING_SOP.md](../FACTORY_OPERATING_SOP.md) §3  
- [schemas/telemetry.events.schema.json](../schemas/telemetry.events.schema.json)
