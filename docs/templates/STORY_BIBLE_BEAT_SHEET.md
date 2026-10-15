# Story bible + beat sheet (fillable kit)

**Phase:** Pre-production · Story (Master Plan §3.3)  
**Owner:** Story Lead · **Co-sign:** GD Lead on length band  
**Schema:** Beat rows must validate against [beat.schema.json](../schemas/beat.schema.json) when in content pack YAML.

## SKU header

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Cleared source tale | |
| `clearance` | `PD` \| `licensed` |
| `target_play_minutes` | `{ min: , max: }` |
| Narrative promise (one sentence) | |

## Story bible

### Characters / roles (generic role IDs only — no title-specific hero IDs)

| role_id | Role in tale | Player-facing? | Tone notes | Do-not-distort |
|---------|--------------|----------------|------------|----------------|
| role_protagonist | | | | |
| role_antagonist | | | | |
| role_narrator | | | | |

### Themes, tone, cultural notes

| Themes | Tone | Cultural notes | Ending set (canonical) |
|--------|------|----------------|------------------------|
| | | | |

### Structural anchors

| Anchor | Beat id(s) | Proof in gameplay |
|--------|------------|-------------------|
| Beginning disruption | | |
| Midpoint / turn | | |
| Ending proof-of-change | | |

## Beat sheet (minimum columns per NON_ART §2)

Copy rows into content pack `beats:` or maintain sheet export with these columns:

`id | chapter | weight | description | systems[] | scene | duration_band_min | emotional_tone | prerequisites | consequences | locale_keys`

| id | chapter | weight | description (condition change) | systems[] | scene | duration_band_min | emotional_tone | prerequisites | consequences | locale_keys |
|----|---------|--------|--------------------------------|-------------|-------|-------------------|----------------|---------------|--------------|-------------|
| B001 | 1 | 1.0 | | INT_TALK, INT_GATE | SCN_01 | | | | | dlg.B001.* |
| B002 | 1 | 1.0 | | | | | | | | |

### Length band check

| Sum of `duration_band_min` | Inside SKU `target_play_minutes`? | Adjust beats (not grind)? |
|------------------------------|-----------------------------------|---------------------------|
| | | |

### Intensity / rest plan

| Beat range | Pressure / relief | Set piece? |
|------------|-------------------|------------|
| | | |

## Story GO checklist

| Check | Pass |
|-------|------|
| Narrative promise is one clear sentence | |
| Every `B###` changes ≥1 player-facing condition | |
| No contradiction of clearance / do-not-distort | |
| Ending(s) tale-faithful | |
| Major beats map to player verbs (talk / examine / gate / combat / puzzle / move) | |
| No full dialogue authoring before beat + systems lock (use [DIALOGUE_VO_LINE_PACK.md](./DIALOGUE_VO_LINE_PACK.md) after lock) | |

**Story GO:** _not stamped in kit repo_

## References

- [FACTORY_NON_ART_BEST_PRACTICES.md](../FACTORY_NON_ART_BEST_PRACTICES.md) §2  
- [STORYBOARD_FRAME_INDEX.md](./STORYBOARD_FRAME_INDEX.md) (next step)
