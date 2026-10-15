# Locale readiness checklist (fillable kit)

**Phase:** Art production · Locale (Master Plan §3.10, NON_ART §9)  
**Owners:** Story Lead (script lock), PM (markets), Art/Audio (VO slots)  
**Prerequisite:** **Script pack GO** — source-locale `dlg.*` locked before VO batch and translation.

## SKU header

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Source locale | |
| Target locales (markets) | _list per Stephen market pick — TBD until set_ |
| Script lock tip / date | |

## Critical strings (player-facing)

| locale | critical UI keys complete? | critical `dlg.*` complete? | missing count | blocker? |
|--------|----------------------------|----------------------------|---------------|----------|
| source | | | 0 required | |
| | | | | |

### String metadata parity (per NON_ART §9)

| check | pass |
|-------|------|
| Stable keys — no renames post-lock without migration | |
| `max_length` / context on narrative keys | |
| Placeholder tokens match source (`{name}`, etc.) | |
| Pseudo-loc pass completed before human LQA | |
| Glossary / termbase for tale names + UI verbs | |

## VO slots

| locale | voiced lines count | slots recorded | files in `audio/vo/<locale>/` | critical gaps |
|--------|-------------------|----------------|----------------------------------|---------------|
| source | | | | 0 required |
| | | | | |

| check | pass |
|-------|------|
| `vo_slot_id` 1:1 with `dlg.*` key | |
| Voice IDs locked before batch | |
| No “patch VO later” on critical path | |

## Fonts / scripts

| script (Latin/CJK/RTL/…) | primary font | fallback | tofu test in build | UI expansion headroom (20–35% EU) |
|--------------------------|--------------|----------|--------------------|---------------------------------|
| | | | | |

## LQA in build (not spreadsheet-only)

| test | pass |
|------|------|
| Overflow / truncation on dialogue UI | |
| Subtitle timing vs VO | |
| Locale switch without soft-lock | |
| Store metadata strings if applicable | _platform TBD_ |

## Locale GO checklist

| # | Check | Pass |
|---|-------|------|
| 1 | Script pack GO recorded | |
| 2 | **0** missing **critical** strings for launch locales | |
| 3 | **0** missing **critical** VO for launch locales | |
| 4 | Fonts render target scripts | |
| 5 | Evidence artifact (build + locale) linked in output contract | |

**Locale GO:** _not stamped in kit repo_

## References

- [DIALOGUE_VO_LINE_PACK.md](./DIALOGUE_VO_LINE_PACK.md)  
- [ACCESSIBILITY_BASELINE.md](./ACCESSIBILITY_BASELINE.md) (subtitles)
