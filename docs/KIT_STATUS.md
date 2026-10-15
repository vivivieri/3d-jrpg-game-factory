# Factory kit status (Track A)

**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md)  
**Updated:** 2026-10-15 — after schema + validator kit land

## Track A milestones

| Milestone | Status | Notes |
|-----------|--------|-------|
| **A1** BOOT, board schema, output contract | **Done (this kit)** | [BOOT.md](./BOOT.md), [BOARD_SCHEMA.md](./BOARD_SCHEMA.md), expanded [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md) |
| **A2** Content schema v1 + validators | **Present; Schema GO pending** | [docs/schemas/](./schemas/), `tools/validate-content-pack/`, CI workflow — **Tech Lead Schema GO not stamped** |
| **A3** Clearance → design templates | Partial | Procedural leaf [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) |
| **A4** Art factory SOP + skills | Partial | [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md), `team-knowledge/skills/` |
| **A5** Handoff contract + smoke consumer | Partial | Schema includes `handoff.lock`; consumer checklist still matures with A5 |
| **A6** QA matrices | Partial | NON_ART §§11–12 |
| **A7** Locale + stream/live ops | Partial | Templates: L0 save, ratings matrix, telemetry schema |

## Validators

```bash
npm ci --prefix tools/validate-content-pack
npm run validate:pass    # fixtures/content-packs/pass/minimal-pack.yaml
node tools/validate-content-pack/validate.mjs path/to/pack.yaml
```

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

**Last full sync:** 2026-10-15 (HKT) — branch `cursor/doc-sync-kit-a1-a2-9e77`

| Area | Aligned |
|------|---------|
| [FACTORY_OVERVIEW.md](./FACTORY_OVERVIEW.md) | Pipeline + components include Dialogue/VO (`dlg.*`); Track A table (A1/A2/2b); open decisions §17; date 2026-10-15 |
| [team-knowledge/roles/*.md](./team-knowledge/roles/) | R&R + output contract vs Master Plan §5.2; Tech Lead → schemas + Schema GO gate |
| [team-knowledge/README.md](./team-knowledge/README.md) · [DISMISSAL.md](./team-knowledge/DISMISSAL.md) | Rebuild pointers → Master Plan + BOOT (not Overview-only) |
| [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md) | §2.1 leaf map + `schemas/` + `templates/` + validators |
| [mixamo-adobe-gate skill](./team-knowledge/skills/mixamo-adobe-gate/SKILL.md) | Generic coat path (no title-specific mesh IDs) |

**Residual (intentional):** Stephen decisions in §17; Schema GO / Design GO / Art GO unstamped; Tides archival mention in team-knowledge source line only.
