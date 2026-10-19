---
name: Mixamo Adobe gate
description: >-
  Human-only gate when Mixamo / Adobe animation download or account login is required —
  Stephen 1:1 Secure Form; stop rules for agents.
---
# Mixamo / Adobe gate (human Secure Form only)

Factory default for jacketed locomotion: **Tripo Studio presets + Blender weight polish** on the single live ship mesh (`coat-hero-anim-polish`). Mixamo is **exception path** — not the default coat fix.

## When to use

- Studio/Blender cannot supply required clip set and AD documents gap.
- Stephen agrees Mixamo retarget is lower risk than in-house retarget for **non-coat** or approved exception.
- Any step requires **Adobe account login**, device code, or Secure Form.

## Preconditions

- Clip list and URLs prepared (exact Mixamo character preset + animation names).
- Ship mesh meets Mixamo auto-rig constraints ([AI_ART §13.10](../../../AI_ART_BEST_PRACTICES.md)).
- Jacketed cloth failures **not** solved by promoting a second mesh — try weight polish first.

## Ordered steps (agent stops at human boundary)

1. **Document gap** — Which clips, why Studio/Blender path failed, SKU `asset_id`, MASTER_ASSET_LIST row.
2. **Credit/legal** — Note Mixamo ToS: no ML training on downloads; commercial embed rules ([AI_ART citations](../../../AI_ART_BEST_PRACTICES.md)).
3. **Escalate 1:1** — Message Stephen with exact Mixamo URLs / clip names; **never** start Secure Form in group room or shared agent session.
4. **Human login** — Stephen runs sign-in / Secure Form in **1:1 DM only**; downloads FBX/GLB to agreed scratch folder.
5. **Import & retarget** — Prefer Studio Animate over broken A↔T pose remap; log shred fails as NO.
6. **Plates** — Godot mid-stride set per [MID_STRIDE_PLATE_CAMERA.md](../../../templates/MID_STRIDE_PLATE_CAMERA.md).
7. **AD GO/NO** — Art Lead stamps with why; no tip-import until GO.

## Expected outputs + evidence

| Output | Path |
|--------|------|
| Downloaded clips | `demos/<sku_id>/mixamo_import_<date>/` (scratch until AD merge) |
| Gate log | `.../qa/mixamo_gate_<date>.md` (who logged in, clip ids, NO ML training ack) |
| Plates | `art_packs/<sku_id>/qa/plates/<asset_id>/` |

## Pass / fail

| **PASS (human gate complete)** | Stephen 1:1 login recorded; clips imported without shred on ship rig; plates PASS; license row in LICENSE.json/MANIFEST. |
| **NO / STOP** | Agent attempted login; group-room Secure Form; coat fix via alternate Mixamo body; POSE remap shred accepted as PASS; tip-import before AD GO. |

## Must-not (hard stop)

- Start Secure Form / device code from Cloud Agent, group chat, or unattended browser.
- Use Mixamo to swap a **second live mesh** for coat problems.
- Mark Soft CI or HQ preview substitutes as full clip GO.
- Paid Adobe spend without Stephen approval.

## Pointers

- Master Plan §14 · [AI_ART §13.10](../../../AI_ART_BEST_PRACTICES.md)
- `ai3d-to-godot-pipeline` — default path before Mixamo
- `coat-hero-anim-polish` — first-line cloth fix
