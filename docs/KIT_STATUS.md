# Factory kit status (Track A)

**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md)  
**Kit GO evidence:** [KIT_GO_LOG.md](./KIT_GO_LOG.md)  
**Updated:** 2026-10-19 (HKT) — Secure Forms, license/telemetry/QA validators; §17 locks; A2–A7 kit GO stamped

## Track A milestones

| Milestone | Status | Notes |
|-----------|--------|-------|
| **A1** BOOT, board schema, output contract | **Done (this kit)** | [BOOT.md](./BOOT.md), [BOARD_SCHEMA.md](./BOARD_SCHEMA.md), [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md) |
| **A2** Content schema v1 + validators | **Schema GO (kit)** | Evidence: [KIT_GO_LOG.md](./KIT_GO_LOG.md) · `docs/schemas/`, `tools/validate-content-pack/`, CI, `npm run validate:pass` |
| **A3** Clearance → design templates | **Template GO (kit)** | [templates/README.md](./templates/README.md) + clearance→design kits |
| **A4** Art factory SOP + skills | **Art SOP GO (kit)** | [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md), [ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md), [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md), [ART_QA_*](./ART_QA_BEST_PRACTICES.md), skills ×5, [MID_STRIDE_PLATE_CAMERA.md](./templates/MID_STRIDE_PLATE_CAMERA.md) |
| **A5** Handoff contract + smoke consumer + GAME_DEV leaf | **Contract GO (kit)** | [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md), [handoff-lock.schema.json](./schemas/handoff-lock.schema.json), [GAME_DEV_BEST_PRACTICES.md](./GAME_DEV_BEST_PRACTICES.md) |
| **A6** QA matrices + GAME_QA + ART_QA kits | **QA kit GO (kit)** — *not SKU Phase QA GO* | [QA_MATRICES.md](./templates/QA_MATRICES.md), [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md), [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) |
| **Operating** Whole-factory SOP | **Landed** | [FACTORY_OPERATING_SOP.md](./FACTORY_OPERATING_SOP.md) |
| **A7** Locale + stream/live ops | **Locale-stream kit GO (kit)** | Checklists landed; **platform names deferred** to B0 Clearance (Stephen) |

## Validators

```bash
npm ci --prefix tools/validate-content-pack
npm ci --prefix tools/validate-factory-kits
npm run validate:pass    # fixtures/content-packs/pass/minimal-pack.yaml
node tools/validate-content-pack/validate.mjs path/to/pack.yaml
npm run test:factory-kits   # license ledger, telemetry envelopes, QA scorecard shape
```

Example-only stub (not CI): `fixtures/content-packs/example/design-pack-fields-stub.yaml`

## Still open (Stephen / first SKU)

| Decision / gate | Status |
|-----------------|--------|
| Stream / store **platform names** | **Deferred** to B0 Clearance — [STREAM_PACKAGING_CHECKLIST.md](./templates/STREAM_PACKAGING_CHECKLIST.md) ready |
| First SKU country/tale pick | Stephen — Track B0 |
| Design / Script / Art / Locale pack GO | **BLOCKED** — live SKU ([KIT_GO_LOG.md](./KIT_GO_LOG.md)) |
| Build tip GO, Phase QA GO (SKU), UAT GO, Release GO | **BLOCKED** — no live SKU / human gates ([KIT_GO_LOG.md](./KIT_GO_LOG.md)) |

## Mouthpiece

- **Grok Bot** — product orchestration / chat latch  
- **Game Factory** (this repo agent) — idle-safe factory-kit docs, schemas, validators

## Doc sync log

**This PR:** 2026-10-19 (HKT) — branch `cursor/idle-safe-kit-enhancements-2921` (Secure Forms, license-ledger + telemetry emit leaf + QA scorecard CI)

**Prior gap-fill:** 2026-10-16 (HKT) — GAME_DEV + Operating SOP; 2026-10-15 — A3–A7 template kits + art QA

**Residual (intentional):** SKU/runtime GOs unstamped; numeric poly tier tables per platform (AI_ART §17); telemetry **store/SDK** destination (§16 — emit contract landed).
