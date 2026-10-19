---
name: Mixamo Adobe gate
description: >-
  OFF FACTORY PATH — archived human gate if Stephen explicitly reopens Mixamo.
  Agents must not use Mixamo for skeleton, rig, or animation. Factory path = Tripo only.
---
# Mixamo / Adobe gate (OFF PATH — Stephen reopen only)

> **Not the factory skeleton/rig path.** Factory automation uses **Tripo only** (rig, animate, retarget). Do **not** recommend Mixamo as default, fallback, or parallel ship path.

## Agent rule (default)

- **STOP** — Do not open mixamo.com, upload meshes for auto-rig, or download clips.
- Use `ai3d-to-godot-pipeline` + Tripo tooling + `coat-hero-anim-polish` on the single live ship mesh.

## When this skill applies (rare)

Only after Stephen **explicitly reopens** the Mixamo gate for a SKU and requests human login:

- Counsel documents an exception outside Tripo retarget scope.
- Any step requires **Adobe account login**, device code, or [SECURE_FORM_MIXAMO.md](../../../templates/SECURE_FORM_MIXAMO.md).

## Preconditions (human)

- Written Stephen approval that Mixamo gate is open for this SKU (not group-room verbal OK alone).
- Clip list prepared if animation downloads are in scope.
- Jacketed cloth failures **not** solved by promoting a second mesh — Tripo + Blender weight polish first.

## Ordered steps (agent stops at human boundary)

1. **Document gap** — Why Tripo/Blender path cannot satisfy scope; `asset_id`, MASTER_ASSET_LIST row.
2. **Escalate 1:1** — Stephen only; **never** Secure Form in group room or Cloud Agent browser.
3. **Human login** — Stephen runs sign-in / Secure Form; downloads to agreed scratch folder.
4. **Import & retarget** — Log shred fails as NO; same live ship skeleton.
5. **Plates** — Godot mid-stride set per [MID_STRIDE_PLATE_CAMERA.md](../../../templates/MID_STRIDE_PLATE_CAMERA.md).
6. **AD GO/NO** — Art Lead stamps with why; no tip-import until GO.

## Expected outputs + evidence

| Output | Path |
|--------|------|
| Gate log | `.../qa/mixamo_gate_<date>.md` (Stephen reopen ack, clip ids if any) |
| Plates | `art_packs/<sku_id>/qa/plates/<asset_id>/` |

## Pass / fail

| **PASS (human gate complete)** | Stephen reopen recorded; 1:1 login; plates PASS; license row in LICENSE.json/MANIFEST. |
| **NO / STOP** | Agent attempted Mixamo rig; group-room Secure Form; coat fix via alternate body; tip-import before AD GO. |

## Must-not (hard stop)

- Any agent use of Mixamo **without** Stephen reopen + 1:1 human login.
- Use Mixamo to swap a **second live mesh** for coat problems.
- Mark Soft CI or HQ preview substitutes as full clip GO.

## Pointers

- Master Plan §14 · [AI_ART §13.10](../../../AI_ART_BEST_PRACTICES.md) Mixamo footnote
- `ai3d-to-godot-pipeline` — factory path
- `coat-hero-anim-polish` — first-line cloth fix
