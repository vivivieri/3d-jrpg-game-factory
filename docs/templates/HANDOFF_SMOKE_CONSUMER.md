# Handoff smoke consumer checklist (Cursor 3.0 / Tech)

**Phase:** Game production · frozen pack intake (Master Plan §3.8, NON_ART §10)  
**Audience:** Tech Lead, Cursor 3.0 PM factory, QA regression  
**Track A5 Contract GO (kit):** stamped in [KIT_GO_LOG.md](../KIT_GO_LOG.md) — this checklist does not replace **per-SKU** human handoff / smoke GO.

## Preconditions (must be true before smoke)

| # | Check | Pass |
|---|-------|------|
| 1 | Art pack **full GO** + Locale GO logged (arts-before-dev) | |
| 2 | Design pack + YAML/JSON content pack on disk | |
| 3 | `handoff.lock` present and matches shipped pack hashes | |
| 4 | Game factory **authorized** (Stephen restart / explicit open) — not IDLE bypass | |
| 5 | No Soft CI / CONDITIONAL / greybox-as-ship treated as pass | |

## `handoff.lock` schema (required fields)

Validate shape against [handoff-lock.schema.json](../schemas/handoff-lock.schema.json):

| Field | Rule | Pass |
|-------|------|------|
| `art_pack_hash` | 64-char lowercase SHA-256 hex | |
| `design_pack_hash` | 64-char lowercase SHA-256 hex | |
| `schema_version` | Semver matching content pack | |
| `tip` | Non-empty tip id | |
| `locked_at` | ISO-8601 date-time | |

**Hash mismatch → FAIL** (do not quietly edit locks).

## Content pack smoke (machine + manual)

Run validators first:

```bash
npm ci --prefix tools/validate-content-pack
node tools/validate-content-pack/validate.mjs path/to/content-pack.yaml
```

| # | Smoke step | Expected | Pass |
|---|------------|----------|------|
| 1 | Load tale / `sku_id` from pack | Parses; matches board `issue_pack_ref` for SKU | |
| 2 | Resolve beat `B001` (or documented start beat) | Beat exists; systems non-empty | |
| 3 | Resolve scene for start beat (e.g. `SCN_01`) | Scene in `scenes:`; POIs valid | |
| 4 | Storyboard orphan lint | **0** frames with empty `systems` | |
| 5 | Cross-refs | beat ↔ scene ↔ encounter ↔ `dlg.*` consistent | |
| 6 | Missing art hash / manifest ref | **Fail loud** — no silent substitute | |
| 7 | `schema_version` match | Pack version == `handoff.lock.schema_version` | |
| 8 | Dialogue keys | Locked `dlg.*` present for voiced path | |
| 9 | Gate reachability | Start → first gate path not deadlocked in data | |

## Output contract on smoke exit

Log per [OUTPUT_CONTRACT.md](../team-knowledge/OUTPUT_CONTRACT.md):

`status · why · paths · next · blocked_on`

| Outcome | status | Typical next |
|---------|--------|--------------|
| All smokes pass | GO | Schedule Cursor build against frozen tip |
| Validator or hash fail | NO | Return to pack owner; do not start Cursor |
| Partial pack | NO | Atomic validate — no partial apply |

## Cursor contract reminders (must / must not)

| Must | Must not |
|------|----------|
| Read SSOT + locked packs only | Invent beats, characters, combat lore |
| Respect `schema_version` | Edit `handoff.lock` hashes quietly |
| Emit build logs + tip id | Treat greybox as ship |
| Fail on missing asset refs | Open new milestones without GO |

## References

- [FACTORY_NON_ART_BEST_PRACTICES.md](../FACTORY_NON_ART_BEST_PRACTICES.md) §10  
- Fixture pass example: [fixtures/content-packs/pass/minimal-pack.yaml](../../fixtures/content-packs/pass/minimal-pack.yaml)  
- **Git tip model:** **LOCKED** dual tip (design/art packs vs Cursor build tip) — Master Plan §17; record `handoff.lock.tip` for build side only
