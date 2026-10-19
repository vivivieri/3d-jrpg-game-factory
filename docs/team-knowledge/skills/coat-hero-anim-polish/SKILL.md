---
name: Jacketed cloth anim polish
description: >-
  Cloth/coat proximity polish for any jacketed character on the single live ship mesh —
  Blender weights and retarget; mid-stride plates; no title-specific hero IDs.
---
# Jacketed cloth / coat-proximity animation (generic)

Use for **any SKU character** with outer layers (jacket, coat, tabard, cape hem) where walk/idle clips show intersection, shredding, or weight bleed. Applies to the **locked ship GLB** for that `asset_id` — not alternate meshes.

## When to use

- Walk/idle plates fail at 25/50/75% on side view (armpit, hip, lapel clip).
- QA cites coat/body fusion or **ART-QA-ANIM-*** fail with proximity symptoms.
- After retarget from Studio presets — before requesting locomotion GO.

## Preconditions

- **One live ship mesh** per character — no second mesh promoted as “the fix.”
- Rig already bound; **do not remesh** after rig (rebind invalidates this workflow).
- Mixamo path **off** unless Stephen completed `mixamo-adobe-gate` for this SKU.
- Game factory **IDLE** — polish is art-pack work only.

## Ordered steps

1. **Inventory** — List clips (`idle`, `walk`, lengths), joint count, ship GLB SHA on [MASTER_ASSET_LIST](../../../templates/MASTER_ASSET_LIST.md) row.
2. **Symptom map** — Match fail mode table below; record frame % where fail is worst.
3. **Blender weight pass** — Peel stray influences on outer shell; limit to plausible bones; repaint coat vs body (volume bind for overlapping thin geo per [AI_ART §13.8](../../../AI_ART_BEST_PRACTICES.md)).
4. **Retarget tune** — If popping is retarget issue, fix on **same** skeleton; no skeleton swap via alternate mesh.
5. **Optional AI tools** — Rig-check/retarget presets only **after** Art Lead credit sync; log credits.
6. **Export scratch** — `demos/<sku_id>_cloth_polish_<date>/ship_polish.glb` until AD accepts merge to `art_packs/`.
7. **Godot plates** — Re-capture full grid per [MID_STRIDE_PLATE_CAMERA.md](../../../templates/MID_STRIDE_PLATE_CAMERA.md).
8. **Scorecard** — Update [ART_QA_SCORECARD.md](../../../templates/ART_QA_SCORECARD.md) anim rows.
9. **AD request** — Output contract with GO/NO recommendation; **AD owns stamp**.

## Fail modes → fix direction

| Symptom | Likely cause | Fix direction |
|---------|--------------|---------------|
| Cloth shredded at armpit/hip | Stray weights on outer shell | Weight peel; bone influence cap |
| Jacket inside torso | No proximity separation at bind | Repaint; approved slight shell offset |
| Popping at stride phase | Bad retarget | Retarget on locked rig; re-plate 50% side |
| Dual live variants | Second mesh as “fix” | Abandon alternate; fix ship mesh only |
| Mixamo coat swap | External clip on wrong topology | Prefer Blender polish; Mixamo only via 1:1 gate |

## Expected outputs + evidence

| Output | Path |
|--------|------|
| Polished ship GLB | `art_packs/<sku_id>/3d/<asset_id>.glb` |
| Before/after plates | `.../qa/plates/<asset_id>/` (+ optional `wireframe/` ) |
| Weight change log | `.../qa/<asset_id>_cloth_polish_notes.md` |

## Pass / fail

| **PASS** | Side-view walk 25/50/75% shows no persistent body intersection; idle stable; same ship mesh path; AD-ready evidence pack. |
| **NO** | Still clips through torso at 50% side; second mesh introduced; bind-pose evidence only; Soft CI marked pass. |

## Must-not

- Promote concept, blockout, or gait-reference meshes to ship.
- Remesh after rig to “fix” cloth (use weights/retarget).
- Tip-import before Art Lead GO.
- Title-specific hero IDs as factory requirements.

## Pointers

- Master Plan §3.7 / §4.1 — one live path, mid-stride law.
- `ai3d-to-godot-pipeline`, `game-ready-3d-guideline`, `mixamo-adobe-gate`.
- [ART_OUTPUT_POLICY](../../../ART_OUTPUT_POLICY.md) — hero poly budget still applies after polish.
