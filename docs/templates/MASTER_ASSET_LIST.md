# MASTER_ASSET_LIST (fillable kit)

**Phase:** Pre-production · Design pack scope ceiling (Master Plan §3, NON_ART §7)  
**Owners:** Design Lead (scope), Art Factory Lead (fulfillment)  
**Rule:** List **freezes at Design GO** — art factory fulfills; does not invent unlisted **ship** assets.

## SKU header

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Design pack tip / path | |
| Content pack YAML path | |

## Asset rows

One row per ship need: `asset_id | type | role (explore/draft/ship) | beat/scene refs | format | owner | status | art_pack_path | license_note`

| asset_id | type (2d/3d/anim/vfx/ui/audio) | role | beat/scene refs | format | owner | status | art_pack_path | license_note |
|----------|----------------------------------|------|-----------------|--------|-------|--------|---------------|--------------|
| env_SCN_01_blockout | 3d | ship | SCN_01, B001 | glb | Art Factory | draft | | |
| chr_role_protagonist_ship | 3d | ship | bible role_protagonist | glb | Art Factory | draft | | |
| ui_dialogue_frame | ui | ship | INT_TALK | | Art Factory | draft | | |
| sfx_ui_confirm | audio | ship | INT_MENU | wav | Audio | draft | | PD or ledger row |

### Reuse vs unique set pieces

| Kit / shared asset | Reused across beats? | Notes |
|--------------------|----------------------|-------|
| kit_standard_jrpg | | combat presentation |
| | | |

## Content graph lint

| Check | Pass |
|-------|------|
| Every ship `art_ref` from storyboard resolves to a row | |
| No ship asset without beat/scene edge | |
| Non-PD audio/fonts flagged in [CLEARANCE_PD_LICENSE_LEDGER.md](./CLEARANCE_PD_LICENSE_LEDGER.md) | |
| Cuts logged with Design why (not silent drops) | |

## Design GO scope ceiling

| Metric | Value |
|--------|-------|
| Ship row count | |
| Unique character ship meshes | |
| Unique environment set pieces | |

At **Art pack GO**, diff this list — every ship row `GO` with why or explicitly cut with Design GO.

**Design GO / Art GO:** _not stamped in kit repo_

## References

- [STORYBOARD_FRAME_INDEX.md](./STORYBOARD_FRAME_INDEX.md)  
- [ART_FACTORY_SOP.md](../ART_FACTORY_SOP.md)  
- [schemas/storyboard-frame.schema.json](../schemas/storyboard-frame.schema.json)
