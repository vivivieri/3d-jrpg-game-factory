# Factory kit status (Track A)

**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md)  
**Updated:** 2026-10-15 — Track A3–A7 template kit gap-fill

## Track A milestones

| Milestone | Status | Notes |
|-----------|--------|-------|
| **A1** BOOT, board schema, output contract | **Done (this kit)** | [BOOT.md](./BOOT.md), [BOARD_SCHEMA.md](./BOARD_SCHEMA.md), expanded [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md) |
| **A2** Content schema v1 + validators | **Present; Schema GO pending** | [docs/schemas/](./schemas/), `tools/validate-content-pack/`, CI workflow — **Tech Lead Schema GO not stamped** |
| **A3** Clearance → design templates | **Template kit landed** | Fillable kits: [templates/README.md](./templates/README.md) (clearance ledger, bible/beat, storyboard, `dlg.*`, MASTER_ASSET_LIST, combat/gates) + deepened ratings/L0/a11y/SLA shells |
| **A4** Art factory SOP + skills | Partial | [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md), `team-knowledge/skills/` |
| **A5** Handoff contract + smoke consumer | **Checklist landed** | [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md) — **Contract GO not stamped** |
| **A6** QA matrices | **Template kit landed** | [QA_MATRICES.md](./templates/QA_MATRICES.md) (task / phase / UAT / release / live) |
| **A7** Locale + stream/live ops | **Template kit landed** | [LOCALE_READINESS_CHECKLIST.md](./templates/LOCALE_READINESS_CHECKLIST.md), [STREAM_PACKAGING_CHECKLIST.md](./templates/STREAM_PACKAGING_CHECKLIST.md), [LIVE_OPS_HOTFIX_TALE_QUEUE.md](./templates/LIVE_OPS_HOTFIX_TALE_QUEUE.md) |

## Validators

```bash
npm ci --prefix tools/validate-content-pack
npm run validate:pass    # fixtures/content-packs/pass/minimal-pack.yaml
node tools/validate-content-pack/validate.mjs path/to/pack.yaml
```

Example-only stub (not CI): `fixtures/content-packs/example/design-pack-fields-stub.yaml`

## Stephen / Tech-only (still open)

| Decision | Status |
|----------|--------|
| Stream / store packaging targets | Undecided — Stephen |
| Git tip model (dual vs single) | Undecided — Tech Lead |
| Confirm Godot 4.x as first-SKU engine | Defaulted Godot; **not confirmed** |
| Merge Story + GD seats | Undecided |
| Keep AD and Audio separate | Undecided |
| Monetization | Default **premium-only** |
| First SKU country/tale pick | Out of scope for kit repo |

## Mouthpiece

- **Grok Bot** — product orchestration / chat latch  
- **Game Factory** (this repo agent) — idle-safe factory-kit docs, schemas, validators

## Doc sync log

**Last gap-fill:** 2026-10-15 (HKT) — branch `cursor/track-a3-a7-template-kits-ce3a`

| Area | Change |
|------|--------|
| [templates/](./templates/) | A3–A7 fillable kits + [README.md](./templates/README.md) index |
| Role briefs | Day-run checklists (Master Plan §5.2 + leaf SOP pointers) |
| [FACTORY_OVERVIEW.md](./FACTORY_OVERVIEW.md) · [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md) | Template index pointers |
| Example stub | `fixtures/content-packs/example/design-pack-fields-stub.yaml` |

**Prior sync:** 2026-10-15 — `cursor/doc-sync-kit-a1-a2-9e77` (Overview, roles, ART_FACTORY, mixamo generic path)

**Residual (intentional):** Stephen decisions in §17; Schema GO / Design GO / Art GO / Contract GO unstamped; A4 skills depth; Cursor PM hooks (A5+B4); automated QA suite wiring beyond matrices; Tides archival mention in team-knowledge source line only.
