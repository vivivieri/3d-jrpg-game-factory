# Board schema — one live milestone per SKU

**Law:** Master Plan §6 rule 1 — only one live milestone / phase per SKU; only the board `issue_pack_ref` is live; never stamp every pack as live.

## Machine schema

- **JSON Schema:** [schemas/board.issue_pack.schema.json](./schemas/board.issue_pack.schema.json)

## Fields (summary)

| Field | Meaning |
|-------|---------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` (Master Plan §15) |
| `issue_pack_ref` | Single live pack pointer (path or id) for this SKU |
| `phase` | Industrial phase name (Concept → Live ops) |
| `status` | `GO` / `NO` / `IDLE` / `BLOCKED` only — no Soft CI / CONDITIONAL |
| `why` | Short reason when `status` is GO or NO |
| `paths` | Tip/doc/pack paths touched |
| `next` | One next action if any |
| `blocked_on` | `license` / `sign-in` / `Stephen` / empty (see [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md)) |

## Usage

1. Maintain **one board row (or document) per SKU** with exactly one `issue_pack_ref` marked live for craft.
2. When phase exit is **GO**, log output contract fields, update tip/hash, then advance `phase` — do not run parallel soft-ship tracks.
3. Validators and PM checks should **reject** multiple live `issue_pack_ref` values for the same `sku_id`.

Handoffs from board updates must still satisfy the full [output contract](./team-knowledge/OUTPUT_CONTRACT.md).
