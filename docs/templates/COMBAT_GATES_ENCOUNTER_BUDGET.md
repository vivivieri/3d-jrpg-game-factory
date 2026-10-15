# Combat / gates / encounter budget (fillable kit)

**Phase:** Pre-production · GD / challenge layer (Master Plan §3.4–§3.5, NON_ART §§5–6)  
**Owners:** Design Lead · **Co-sign:** Tech Lead on data shape in content pack  
**Schemas:** [gate.schema.json](../schemas/gate.schema.json) · [encounter.schema.json](../schemas/encounter.schema.json)

Combat expresses tale conflict — **not** a length padder. Encounter count and minutes come from beat tags.

## SKU header

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Combat minute policy (SKU cap) | _fill at Design_ |
| `target_play_minutes` | `{ min: , max: }` |

## Gate table (`gates:` in content pack)

| id | type `story\|combat\|skill\|locale` | requires (beats/flags) | unlocks | fail_policy | notes |
|----|-------------------------------------|------------------------|---------|-------------|-------|
| G_CH1_END | story | B001 | B002 | return to prep | |

## Encounter budget table (`encounters:`)

| id | beat | kit id | budget_minutes | difficulty_band | encounter_type | enemies (bible roles only) | fail_policy | first_clear_only_loot |
|----|------|--------|----------------|-----------------|----------------|----------------------------|-------------|----------------------|
| E_CH1_TUTORIAL | B002 | kit_standard_jrpg | 3 | easy | tutorial | | story-safe retry | yes |

### Budget roll-up

| Chapter | Sum combat minutes | % of SKU max play | Inside policy? |
|---------|-------------------|---------------------|----------------|
| 1 | | | |

### Beat combat tags (from beat sheet)

| beat | needs INT_COMBAT? | encounter id(s) | teach/test/twist note |
|------|-------------------|-----------------|----------------------|
| B002 | yes | E_CH1_TUTORIAL | teach basic loop |

## Industrial defaults checklist

| Rule | Applied? |
|------|----------|
| Canonical first-clear path without mandatory grinding | |
| Optional repeat rewards use diminishing returns | |
| Speed multipliers affect repeats only (if any) | |
| No random encounter spam unless kit explicitly designs it | |
| Enemies/characters only from story bible roles | |

## Design GO checklist

| Check | Pass |
|-------|------|
| Every `E_*` cites a `B###` | |
| Sum combat budgets inside SKU policy | |
| No required grind for canonical path | |
| Fail paths → prep or story-safe retry (no soft-lock) | |
| L4/L5 not planned without L3 beat coverage | |

**Design GO:** _not stamped in kit repo_

## References

- [STORY_BIBLE_BEAT_SHEET.md](./STORY_BIBLE_BEAT_SHEET.md)  
- [FACTORY_NON_ART_BEST_PRACTICES.md](../FACTORY_NON_ART_BEST_PRACTICES.md) §§5–6
