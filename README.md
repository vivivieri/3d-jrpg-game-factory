# 3D JRPG game factory (kit repo)

Multi-title **factory kit** for future 3D JRPG folktale SKUs — laws, schemas, validators, and procedural docs. **Not** live game engine code and **not** coupled to any single title.

## Start here

| Doc | Purpose |
|-----|---------|
| [docs/FACTORY_MASTER_PLAN.md](docs/FACTORY_MASTER_PLAN.md) | **SSOT laws** — phases, R&R, rules, tracks |
| [docs/BOOT.md](docs/BOOT.md) | Authority chain / BOOT order |
| [docs/KIT_STATUS.md](docs/KIT_STATUS.md) | Track A done vs pending |
| [docs/FACTORY_OVERVIEW.md](docs/FACTORY_OVERVIEW.md) | Short map (points at Master Plan) |

## Leaf how-to map

- Non-art: [docs/FACTORY_NON_ART_BEST_PRACTICES.md](docs/FACTORY_NON_ART_BEST_PRACTICES.md)
- Art/audio: [docs/AI_ART_BEST_PRACTICES.md](docs/AI_ART_BEST_PRACTICES.md) · index [docs/ART_FACTORY_SOP.md](docs/ART_FACTORY_SOP.md)
- Team knowledge: [docs/team-knowledge/](docs/team-knowledge/)

## Content schema & validators (Track A2)

Machine schemas: [docs/schemas/](docs/schemas/) (content pack root: `content-pack.schema.json`).

```bash
npm ci --prefix tools/validate-content-pack
npm run validate:pass
node tools/validate-content-pack/validate.mjs path/to/your-pack.yaml
```

- **Pass fixture:** `fixtures/content-packs/pass/minimal-pack.yaml`
- **Fail fixture:** `fixtures/content-packs/fail/orphan-and-handoff.yaml` (orphan frame + bad `handoff.lock`)

CI runs the same checks on pull requests (`.github/workflows/validate-content-pack.yml`).

**Schema GO** still requires Tech Lead sign-off — validators present ≠ Schema GO stamped.

## Mouthpiece routing

- **Grok Bot** — day-to-day product orchestration and chat latch
- **Game Factory** (Cursor agent on this repo) — factory-kit docs, schemas, idle-safe CAPAs

## Still undecided (do not assume)

- Stream / store packaging targets (Stephen)
- Git tip model: dual vs single (Tech Lead)
- Godot 4.x as first-SKU engine — **defaulted**, not confirmed
- Merge Story + GD seats; AD vs Audio split
- Monetization — default **premium-only**
- First SKU country/tale pick — out of scope for this repo
