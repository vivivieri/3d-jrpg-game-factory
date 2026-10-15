# Storyboard frame index (fillable kit)

**Phase:** Pre-production · Storyboard / GD (Master Plan §3.3–§3.4)  
**Owners:** Design Lead (interaction binding), Story Lead (narrative cues)  
**Schema:** [storyboard-frame.schema.json](../schemas/storyboard-frame.schema.json)  
**Hard rule:** Every frame cites ≥1 `INT_*` System ID — **orphan ban** (validator fails empty `systems`).

## Allowed System IDs (Master Plan §3.4)

`INT_MOVE` · `INT_TALK` · `INT_EXAMINE` · `INT_GATE` · `INT_COMBAT` · `INT_PUZZLE` · `INT_MENU` · `INT_STREAM`

## SKU header

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Locked beat sheet tip / path | |
| Scene graph path (`scenes:` in content pack) | |

## Frame index

Minimum fields per frame: `frame_id | beat | scene | systems[] | camera_intent | player_verb | success_exit | fail_exit | art_refs | locale_vo_cues`

| frame_id | beat | scene | **systems[]** (required) | camera_intent | player_verb | success_exit | fail_exit | art_refs | locale_vo_cues |
|----------|------|-------|--------------------------|---------------|-------------|--------------|-----------|----------|----------------|
| FRM_B001_A | B001 | SCN_01 | INT_TALK | | Talk to role | Advance beat | Hint only | storyboard/B001 | dlg.B001.* |
| FRM_B002_A | B002 | SCN_01 | INT_COMBAT | | Combat | Victory branch | Story-safe retry | storyboard/B002 | |

### Orphan lint (must be zero at Design GO)

| frame_id | systems empty? | scene missing? | beat missing? | Action |
|----------|----------------|----------------|---------------|--------|
| | | | | |

### Beat coverage (every `B###` has ≥1 frame)

| beat id | frame count | Covered? |
|---------|-------------|----------|
| B001 | | |
| B002 | | |

## Design pack GO checklist

| Check | Pass |
|-------|------|
| **0** orphan frames (no `INT_*`) | |
| Every beat has ≥1 frame | |
| Every `scene` exists in scene graph | |
| `art_refs` seed [MASTER_ASSET_LIST.md](./MASTER_ASSET_LIST.md) | |
| Combat frames use enemies/roles from story bible only | |
| No Soft CI / greybox frames counted as ship art | |

**Design pack GO:** _not stamped in kit repo_

## References

- [FACTORY_NON_ART_BEST_PRACTICES.md](../FACTORY_NON_ART_BEST_PRACTICES.md) §3  
- [DIALOGUE_VO_LINE_PACK.md](./DIALOGUE_VO_LINE_PACK.md) (`frame_ref` bind)
