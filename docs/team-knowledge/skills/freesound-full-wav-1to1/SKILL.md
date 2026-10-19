---
name: Freesound full WAV 1to1
description: >-
  Human-only gate when tip-import needs Freesound original full WAV — HQ preview is not
  ship-quality evidence; Stephen 1:1 login only.
---
# Freesound full WAV (Stephen 1:1)

HQ preview on Freesound **≠** original full WAV for ship/tip-import. Agents must not tip-import preview bytes as final SFX.

## When to use

- Scratch or HQ-preview SFX has Audio Mix direction GO (+ AD theme co-sign) but **full WAV** requires Freesound login.
- License requires original download (CC0 / CC-BY commercial-safe); BY-NC rejected.

## Preconditions

- Sound id, license, and attribution text documented.
- Drop path agreed, e.g. `art_packs/<sku_id>/audio/sfx/<stem>/_full/`.
- [AI_ART §13.10](../../../AI_ART_BEST_PRACTICES.md) Freesound row satisfied for commercial SKU.

## Ordered steps

1. **Verify preview ≠ full** — Confirm current artifact is preview-only; log bit depth / duration mismatch if known.
2. **License row** — CC0 or CC-BY with attribution fields ready for [CLEARANCE_PD_LICENSE_LEDGER](../../../templates/CLEARANCE_PD_LICENSE_LEDGER.md) / audio MANIFEST.
3. **Escalate 1:1** — Grok Bot or Game Factory messages Stephen **only in 1:1** with Freesound URL + sound id.
4. **Human download** — Stephen: Secure Form / login → download **original WAV** to `_full/` folder.
5. **Audio Mix re-slice** — Normalize, trim, loudness per SKU bank; update credits in MANIFEST.
6. **Re-validate GO** — Audio Mix + AD co-sign still KEEP before tip-import.
7. **Evidence** — Log gate completion in `.../qa/freesound_full_<sound_id>_<date>.md`.

## Expected outputs + evidence

| Output | Path |
|--------|------|
| Full WAV | `art_packs/<sku_id>/audio/sfx/<stem>/_full/<sound_id>.wav` |
| Attribution snippet | MANIFEST or LICENSE.json row |
| Gate log | `.../qa/freesound_full_*.md` |

## Pass / fail

| **PASS** | Full WAV on disk; license allows commercial; attribution filed; no preview file renamed as full. |
| **NO** | HQ preview tipped as full; BY-NC asset; agent login attempt; room-chat Secure Form; missing attribution. |

## Must-not

- Soft CI — “preview is good enough for ship.”
- Bot-owned Freesound sessions or stored passwords.
- Parallel “no-login alt” that degrades quality without full GO/NO + why from Audio + AD.

## Human gates

- **Stephen 1:1 only** for login and download.
- Paid music AI or other libraries — separate human approval per [AI_ART §13.10](../../../AI_ART_BEST_PRACTICES.md).

## Pointers

- Master Plan §14 Freesound row
- Secure Form discipline matches other human 1:1 gates (Master Plan §14)
- [ART_QA_BEST_PRACTICES.md](../../../ART_QA_BEST_PRACTICES.md) audio cases (task L1)
