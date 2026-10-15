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

| task_id | criterion | steps | expected | evidence artifact path | pass/fail | defect link |
|---------|-----------|-------|----------|------------------------|-----------|-------------|
| | | | | | | |

### Art / audio tasks (L1 kit — do not duplicate case text here)

For each **MASTER_ASSET_LIST** art row, execute cases from [ART_QA_TEST_CASES.md](./ART_QA_TEST_CASES.md) (full steps in [ART_QA_BEST_PRACTICES.md](../ART_QA_BEST_PRACTICES.md) §3) and roll up in [ART_QA_SCORECARD.md](./ART_QA_SCORECARD.md).

| asset_slug | track | ART-QA case IDs (see ART_QA §4 map) | scorecard path | pass/fail |
|------------|-------|-------------------------------------|----------------|-----------|
| | | | | |

**Art vs non-art:** Art L1 uses engine plates, mid-stride anim evidence, listen logs, and license rows. Phase, UAT, and release below stay **NON_ART** — art task QA does not substitute for Phase QA GO.

**Task GO:** checklist + artifact on disk — not verbal OK.

---

## Level 2 — Sprint / phase regression

**Scope:** Integration across L0–L5 (automated + manual).

| area | test case | L-layer | automated? | manual? | pass/fail | notes |
|------|-----------|---------|------------|---------|-----------|-------|
| Schema / pack | `npm run validate:pass` on locked pack | data | yes | | | |
| Load | Tale loads; start beat reachable | L2–L3 | | yes | | |
| Combat | Fail → story-safe retry | L4 | | yes | | |
| Locale critical | 0 missing critical keys/VO | L1/L3 | | yes | | |
| Session | Pause/resume per [L0_SESSION_SAVE_POLICY.md](./L0_SESSION_SAVE_POLICY.md) | L0 | | yes | | |
| Soft-lock hunt | No dead-end on canonical path | L2–L4 | | yes | | |
| Accessibility spot | [ACCESSIBILITY_BASELINE.md](./ACCESSIBILITY_BASELINE.md) spot checks | L1 | | yes | | |

**Phase QA GO:** suite pass + logged why — _not stamped in kit repo_

---

## Level 3 — UAT (real play / video)

**Scope:** Primary beat path through canonical ending or chapter milestone.

| criterion | acceptance bar | evidence type | path / URL | pass/fail |
|-----------|----------------|---------------|------------|-----------|
| Viewport | Real build branch — not editor mock or slide deck | play **or** video | | |
| Beat path | Covers locked spine beats listed below | play/video | | |
| Dialogue | `dlg.*` matches locked script | play/video | | |
| Combat budget | No mandatory grind to progress | play/video | | |
| Fail paths | At least one retry/fail case exercised | play/video | | |

### Spine beats under test

| beat ids | |
|----------|---|

**UAT GO:** _Stephen path for ship sign-off per factory policy — not stamped here_

---

## Level 4 — Release QA

**Scope:** Packaging, locale store parity, ratings disclosure (NON_ART §11–§12).

| check | evidence | pass/fail |
|-------|----------|-----------|
| [STREAM_PACKAGING_CHECKLIST.md](./STREAM_PACKAGING_CHECKLIST.md) complete | | |
| [RATINGS_CONTENT_MATRIX.md](./RATINGS_CONTENT_MATRIX.md) matches build | | |
| Store strings / locale parity for target markets | _markets TBD_ | |
| Perf within frozen Design/Tech budget | | |
| No under-disclosed mature / AI-generated content | | |

**Release GO:** human platform controls — Stephen

---

## Level 5 — Live health

**Scope:** Post-release telemetry + triage ([LIVE_OPS_HOTFIX_TALE_QUEUE.md](./LIVE_OPS_HOTFIX_TALE_QUEUE.md)).

| signal | threshold band | current | action |
|--------|----------------|---------|--------|
| Crash-free sessions | TBD | | |
| Session start success | TBD | | |
| Locale error rate | TBD | | |
| Beat drop-off anomalies | TBD | | |

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
- [schemas/telemetry.events.schema.json](../schemas/telemetry.events.schema.json)
