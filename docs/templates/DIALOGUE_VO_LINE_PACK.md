# Dialogue / VO line pack (`dlg.*`) (fillable kit)

**Phase:** Pre-production · Dialogue/VO scripts (Master Plan §2, §3.3)  
**Owner:** Story Lead · **Gate:** Script pack GO before VO batch and locale expand (NON_ART §4, §9)  
**Schema:** [dialogue.schema.json](../schemas/dialogue.schema.json) · Content pack key `dialogue:`

Industrial rule: **beat sheet + storyboard `INT_*` lock first** — not screenplay prose as SSOT.

## SKU header

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Source locale (ship language for SKU) | |
| Locked beat sheet ref | |
| Storyboard index ref | |

## Per-line minimum fields (NON_ART §4)

`key | speaker | text | max_length | context | frame_ref | vo_slot_id | branch_edges | systems[]`

| key | speaker (bible role_id) | text (source locale) | max_length | context | frame_ref | vo_slot_id | branch_edges | systems[] |
|-----|-------------------------|----------------------|------------|---------|-----------|------------|--------------|-------------|
| dlg.B001.open | role_narrator | | | Opening beat | FRM_B001_A | dlg.B001.open | | INT_TALK |
| dlg.B001.choice_a | role_protagonist | | | | FRM_B001_A | dlg.B001.choice_a | → dlg.B002.open | INT_TALK |

### Field meanings

| Field | Rule |
|-------|------|
| `key` | Stable `dlg.<beat>.*` — no renames after script lock without migration + Locale re-QA |
| `speaker` | Must resolve to story bible role — no invented cast |
| `frame_ref` | Must exist in [STORYBOARD_FRAME_INDEX.md](./STORYBOARD_FRAME_INDEX.md) |
| `systems[]` | Must match frame `systems[]` |
| `branch_edges` | Mandatory for branching `INT_TALK`; choices ⊆ funded endings on beat sheet |
| `vo_slot_id` | 1:1 with key for VO batch pipeline |

## Branch / choice budget

| Choice id | Funded consequence on beat sheet? | Soft-lock risk? | Cut or keep |
|-----------|-----------------------------------|-----------------|-------------|
| | | | |

## Script pack GO checklist

| Check | Pass |
|-------|------|
| Line pack cites only **locked** `B###` beats | |
| All keys match `dlg.<beat>.*` | |
| Every line has `frame_ref` + matching `systems[]` | |
| Every `speaker` resolves to bible role | |
| No screenplay/Fountain export as SSOT | |
| Validators clean on content pack slice | `npm run validate:pass` on integrated pack |

**Script pack GO:** _not stamped in kit repo_

## Handoff to locale / VO

- Freeze `dlg.*` IDs and source-locale `text` before recording.  
- Beat rows cite `dialogue_refs: ["dlg.B###.*"]` where applicable.

## References

- [FACTORY_NON_ART_BEST_PRACTICES.md](../FACTORY_NON_ART_BEST_PRACTICES.md) §4  
- [LOCALE_READINESS_CHECKLIST.md](./LOCALE_READINESS_CHECKLIST.md)
