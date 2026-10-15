# Factory templates index (Track A)

**Laws:** [FACTORY_MASTER_PLAN.md](../FACTORY_MASTER_PLAN.md) · **Procedural SOP:** [FACTORY_NON_ART_BEST_PRACTICES.md](../FACTORY_NON_ART_BEST_PRACTICES.md)  
**Status:** Fillable kits — **no GO stamps** in this folder. Stephen-only decisions stay **TBD** where noted.

Use generic SKU language only: `sku_<country>_<tale_slug>_v<semver>`.

## Clearance → design (A3)

| Template | Master Plan phase / pipeline | Track A | NON_ART |
|----------|---------------------------|---------|---------|
| [CLEARANCE_PD_LICENSE_LEDGER.md](./CLEARANCE_PD_LICENSE_LEDGER.md) | Concept · Clearance | **A3** | §1 |
| [STORY_BIBLE_BEAT_SHEET.md](./STORY_BIBLE_BEAT_SHEET.md) | Pre-production · Story | **A3** | §2 |
| [STORYBOARD_FRAME_INDEX.md](./STORYBOARD_FRAME_INDEX.md) | Pre-production · Storyboard / GD | **A3** | §3 |
| [DIALOGUE_VO_LINE_PACK.md](./DIALOGUE_VO_LINE_PACK.md) | Pre-production · Dialogue/VO (`dlg.*` lock) | **A3** / B2½ | §4 |
| [MASTER_ASSET_LIST.md](./MASTER_ASSET_LIST.md) | Pre-production · scope ceiling | **A3** | §7 |
| [COMBAT_GATES_ENCOUNTER_BUDGET.md](./COMBAT_GATES_ENCOUNTER_BUDGET.md) | Pre-production · GD / combat | **A3** | §§5–6 |

## Concept / platform prep (A3 + A7)

| Template | Phase | Track A | Notes |
|----------|-------|---------|-------|
| [RATINGS_CONTENT_MATRIX.md](./RATINGS_CONTENT_MATRIX.md) | Concept → Release | **A3**, **A7** | Ratings bodies **TBD** |
| [L0_SESSION_SAVE_POLICY.md](./L0_SESSION_SAVE_POLICY.md) | L0 / stream-native | **A7** | SDK wiring **TBD** |
| [ACCESSIBILITY_BASELINE.md](./ACCESSIBILITY_BASELINE.md) | QA evidence bar | **A6**, **A7** | Not legal compliance |
| [SKU_COST_SLA.md](./SKU_COST_SLA.md) | Track C placeholder | **A3** | Numbers **TBD** |

## Handoff consumer (A5)

| Template | Phase | Track A | Schema |
|----------|-------|---------|--------|
| [HANDOFF_SMOKE_CONSUMER.md](./HANDOFF_SMOKE_CONSUMER.md) | Game production · Cursor 3.0 intake | **A5** | [handoff-lock.schema.json](../schemas/handoff-lock.schema.json) |

## QA (A6)

| Template | Phase | Track A | Master Plan |
|----------|-------|---------|-------------|
| [QA_MATRICES.md](./QA_MATRICES.md) | QA → Release | **A6** | §3.9 · NON_ART §11 |

## Locale + publish + live ops (A7)

| Template | Phase | Track A | NON_ART |
|----------|-------|---------|---------|
| [LOCALE_READINESS_CHECKLIST.md](./LOCALE_READINESS_CHECKLIST.md) | Art production · Locale | **A7** | §9 |
| [STREAM_PACKAGING_CHECKLIST.md](./STREAM_PACKAGING_CHECKLIST.md) | Release · Publish | **A7** | §12 |
| [LIVE_OPS_HOTFIX_TALE_QUEUE.md](./LIVE_OPS_HOTFIX_TALE_QUEUE.md) | Live ops | **A7** | §13 |

## Example stub (not a live SKU)

| Path | Purpose |
|------|---------|
| [../fixtures/content-packs/example/design-pack-fields-stub.yaml](../../fixtures/content-packs/example/design-pack-fields-stub.yaml) | Field examples for authors — **not** CI-validated |

Validators: `npm run validate:pass` (see [KIT_STATUS.md](../KIT_STATUS.md)).
