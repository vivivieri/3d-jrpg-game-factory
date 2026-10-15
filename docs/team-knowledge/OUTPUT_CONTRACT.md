# Output contract (every handoff)

**Law:** [FACTORY_MASTER_PLAN.md](../FACTORY_MASTER_PLAN.md) §6 rule 5.  
**Routing:** Role or agent → **active mouthpiece** (Grok Bot for day-to-day product latch; Game Factory for factory-kit CAPAs in this repo) → Stephen when human gates apply.

Every handoff, gate exit, and board update must include the fields below. Incomplete handoffs are **rejected**.

## Required fields

| Field | Type | Meaning |
|-------|------|---------|
| `status` | enum | `GO` / `NO` / `IDLE` / `BLOCKED` only |
| `why` | string | One short reason — **required** when `status` is `GO` or `NO` |
| `paths` | string[] | Tip, doc, YAML/JSON pack, or asset paths touched |
| `next` | string | Single next action if any; omit or empty if none |
| `blocked_on` | enum | `license` / `sign-in` / `Stephen` / empty (no other values) |

## Status semantics

| Status | When to use |
|--------|-------------|
| **GO** | Phase or task exit met; logged `why`; tip/hash updated before next craft |
| **NO** | Exit not met; logged `why`; do not advance phase or start parallel soft-ship |
| **IDLE** | Factory or seat parked (e.g. game factory IDLE until handoff + Stephen restart) |
| **BLOCKED** | Cannot proceed; set `blocked_on` to the human gate type |

## Examples (valid)

```yaml
status: GO
why: "Design pack: 0 orphan frames; schema validates"
paths: ["content_packs/sku_xx_example_v0.1.0/pack.yaml", "docs/FACTORY_MASTER_PLAN.md"]
next: "Art factory concept pass on MASTER_ASSET_LIST"
blocked_on: ""
```

```yaml
status: BLOCKED
why: "Mixamo download requires Stephen Secure Form"
paths: ["team-knowledge/skills/mixamo-adobe-gate/SKILL.md"]
next: "Stephen 1:1 Secure Form"
blocked_on: sign-in
```

```yaml
status: IDLE
why: "Arts-before-dev; handoff not frozen"
paths: ["docs/FACTORY_MASTER_PLAN.md#38-game-factory--cursor-30"]
next: ""
blocked_on: ""
```

```yaml
status: NO
why: "Storyboard frame FRM_12 has empty systems[]"
paths: ["content_packs/.../pack.yaml"]
next: "Fix orphan frame and re-run validator"
blocked_on: ""
```

## Forbidden in outputs

| Forbidden | Use instead |
|-----------|-------------|
| **Soft CI** | `NO` or `BLOCKED` with explicit `why` |
| **CONDITIONAL** (as pass) | `NO` until full GO criteria met |
| **CONDITIONAL-as-PASS** | `NO` |
| Second live `issue_pack_ref` / dual-live packs | One live milestone per SKU (§6 rule 1) |
| Quiet craft that contradicts last latch | Update tip/hash; Grok Bot re-latches |
| Greybox-as-ship | Art `NO` until full GO |

## Tip / hash discipline

After any **GO** or **NO**:

1. Update tip and/or content hashes (`handoff.lock`, design/art pack hashes) **before** the next craft action.
2. Do not start downstream work on stale tips.
3. Board `issue_pack_ref` must reflect the single live pack for the SKU.

See Master Plan §2 tip latch and [BOOT.md](../BOOT.md).

## Board alignment

Board rows should use the same fields where applicable — see [BOARD_SCHEMA.md](../BOARD_SCHEMA.md) and [schemas/board.issue_pack.schema.json](../schemas/board.issue_pack.schema.json).
