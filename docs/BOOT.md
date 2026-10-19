# BOOT — authority chain (3D JRPG game factory kit)

This repo is the **multi-title factory kit** (`vivivieri/3d-jrpg-game-factory`). It holds laws, schemas, validators, and procedural leaves — not live SKU game code.

## BOOT order (one authority chain)

Read and obey in this order. **Lower items never override higher items.**

| Order | Authority | Path | Role |
|------:|-----------|------|------|
| 1 | **Master Plan (SSOT laws)** | [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) | Phases, R&R, hard rules §6, tracks, open decisions |
| 2 | **BOOT** | This file | How to navigate authority; no new laws |
| 3 | **Output contract** | [team-knowledge/OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md) | Required handoff fields (Master Plan §6 rule 5) |
| 4 | **Standing rules (mirror)** | [team-knowledge/STANDING_RULES.md](./team-knowledge/STANDING_RULES.md) | Convenience mirror of §6 (+ pointers); Master Plan wins on conflict |
| 5 | **Leaf SOPs (how-to only)** | [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md), [FACTORY_OPERATING_SOP.md](./FACTORY_OPERATING_SOP.md), [ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md) (art bounds), [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md), [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md), [GAME_DEV_BEST_PRACTICES.md](./GAME_DEV_BEST_PRACTICES.md), [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md), [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md), `team-knowledge/skills/*` | Craft steps; cite Master Plan for gates |
| 6 | **Indexes / maps (pointers only)** | [FACTORY_OVERVIEW.md](./FACTORY_OVERVIEW.md), [FACTORY_OPERATING_SOP.md](./FACTORY_OPERATING_SOP.md), [TEAM_KNOWLEDGE_INDEX.md](./TEAM_KNOWLEDGE_INDEX.md), [team-knowledge/README.md](./team-knowledge/README.md), [KIT_STATUS.md](./KIT_STATUS.md), [KIT_GO_LOG.md](./KIT_GO_LOG.md) | Short maps; do not restate laws |

**Rule:** Indexes and README files **point** at the Master Plan. They are not a second law book.

## Latch and tips

After any **GO/NO**, update tip/hash before the next craft (Master Plan §2 tip latch, §6 rules 2 and 5). **Grok Bot** latches product orchestration in chat; factory-kit doc/schema CAPAs in this repo follow the same output contract.

## Mouthpiece routing (who Stephen talks to)

| Work | Primary mouthpiece | Scope |
|------|-------------------|--------|
| Day-to-day product latch, role orchestration in chat | **Grok Bot** | Design/art/QA orchestration, single latch |
| Multi-title factory kit in this repo (schemas, validators, idle-safe docs) | **Game Factory** (Cursor Cloud Agent on this repo) | Track A kit craft without inventing Stephen decisions |

Role agents still report through the **active mouthpiece** for their thread (Grok Bot for product craft; Game Factory for factory-kit PRs in this repo).

## Game factory IDLE

Cursor 3.0 PM game.dev stays **IDLE** until art + handoff lock and Stephen authorizes restart (Master Plan §3.8, §6 rule 3). This repo supplies contracts validators consume; it does not host engine implementation.

## Related

- **Track A kit GO evidence** (not SKU Build/Release GO): [KIT_GO_LOG.md](./KIT_GO_LOG.md) · status: [KIT_STATUS.md](./KIT_STATUS.md)
- **Day-one operating runbook** (which leaf/template per phase — not SSOT laws): [FACTORY_OPERATING_SOP.md](./FACTORY_OPERATING_SOP.md)
- Board one-live-milestone shape: [schemas/board.issue_pack.schema.json](./schemas/board.issue_pack.schema.json) · [BOARD_SCHEMA.md](./BOARD_SCHEMA.md)
- Content pack SSOT: [schemas/content-pack.schema.json](./schemas/content-pack.schema.json) · run `npm run validate` (see root [README.md](../README.md))
