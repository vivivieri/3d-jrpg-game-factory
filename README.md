# 3D JRPG game factory (kit repo)

Multi-title **factory kit** for future 3D JRPG folktale SKUs — laws, schemas, validators, and procedural docs. **Not** live game engine code and **not** coupled to any single title.

## Start here

| Doc | Purpose |
|-----|---------|
| [docs/FACTORY_MASTER_PLAN.md](docs/FACTORY_MASTER_PLAN.md) | **SSOT laws** — phases, R&R, rules, tracks |
| [docs/BOOT.md](docs/BOOT.md) | Authority chain / BOOT order |
| [docs/KIT_STATUS.md](docs/KIT_STATUS.md) | Track A done vs pending |
| [docs/KIT_GO_LOG.md](docs/KIT_GO_LOG.md) | Track A kit GO evidence (stamps vs SKU-blocked gates) |
| [docs/FACTORY_OVERVIEW.md](docs/FACTORY_OVERVIEW.md) | Short map (points at Master Plan) |
| [docs/FACTORY_OPERATING_SOP.md](docs/FACTORY_OPERATING_SOP.md) | Day-run: which leaf/template per phase |

## Leaf how-to map

- Non-art: [docs/FACTORY_NON_ART_BEST_PRACTICES.md](docs/FACTORY_NON_ART_BEST_PRACTICES.md) · operating runbook [docs/FACTORY_OPERATING_SOP.md](docs/FACTORY_OPERATING_SOP.md)
- Game implementer: [docs/GAME_DEV_BEST_PRACTICES.md](docs/GAME_DEV_BEST_PRACTICES.md) · game QA [docs/GAME_QA_BEST_PRACTICES.md](docs/GAME_QA_BEST_PRACTICES.md)
- Art/audio:
  - Policy bounds: [docs/ART_OUTPUT_POLICY.md](docs/ART_OUTPUT_POLICY.md)
  - Craft: [docs/AI_ART_BEST_PRACTICES.md](docs/AI_ART_BEST_PRACTICES.md) · index [docs/ART_FACTORY_SOP.md](docs/ART_FACTORY_SOP.md)
  - Proof: [docs/ART_QA_BEST_PRACTICES.md](docs/ART_QA_BEST_PRACTICES.md)
- Team knowledge: [docs/team-knowledge/](docs/team-knowledge/)

## Content schema & validators (Track A2)

Machine schemas: [docs/schemas/](docs/schemas/) (content pack root: `content-pack.schema.json`). Kit **Schema GO** stamped — see [docs/KIT_GO_LOG.md](docs/KIT_GO_LOG.md) (A2 row); SKU design/art/locale pack GOs remain in the log **BLOCKED** section.

```bash
npm ci --prefix tools/validate-content-pack
npm ci --prefix tools/validate-factory-kits
npm run validate:pass
npm run test:factory-kits
node tools/validate-content-pack/validate.mjs path/to/your-pack.yaml
```

- **Pass fixture:** `fixtures/content-packs/pass/minimal-pack.yaml`
- **Fail fixture:** `fixtures/content-packs/fail/orphan-and-handoff.yaml` (orphan frame + bad `handoff.lock`)

CI runs the same checks on pull requests (`.github/workflows/validate-content-pack.yml`).

## Mouthpiece routing

- **Grok Bot** — day-to-day product orchestration and chat latch
- **Game Factory** (Cursor agent on this repo) — factory-kit docs, schemas, idle-safe CAPAs

## Still undecided (do not assume)

Aligned with Master Plan [§17](docs/FACTORY_MASTER_PLAN.md#17-open-decisions):

- **Engine:** **CONFIRMED** Godot 4.x 3D (first-SKU)
- **Monetization:** **LOCKED** premium-only until Stephen reopens
- **Git tip:** **LOCKED** dual tip (design/art packs vs Cursor build tip)
- **Stream packaging:** **DEFERRED** to first-SKU B0 Clearance — [STREAM_PACKAGING_CHECKLIST](docs/templates/STREAM_PACKAGING_CHECKLIST.md) ready; Stephen names platforms at Clearance (no platform names in kit)
- **Story + GD merge:** **NO** — keep Story Lead and GD Lead separate
- **AD vs Audio:** **YES** — separate role briefs under Art Factory Lead
- **First SKU country / tale pick:** **Open** — Stephen (Track B0)

Kit-level GO evidence: [docs/KIT_GO_LOG.md](docs/KIT_GO_LOG.md).
