---
name: AI3D to Godot pipeline
description: >-
  Use when converting Tripo or other AI image/text→3D drafts into Godot-ready
  scratch GLBs — remesh before rig, credit-aware retarget, plates, then AD GO/NO
  only.
---
# AI3D → Godot pipeline

Treat generative 3D as a **draft**. Game-ready rules still win (run [Game-ready 3D guideline](sand-workflow:game-ready-3d-guideline) before any artistic GO).

## Steps
1. Confirm mode: text / image / multiview — and whether this is a **new** asset or a locked ship id (never regenerate a locked hero identity).
2. Estimate Tripo credits; get explicit OK before non-trivial spend. Log Studio vs API pool separately.
3. Generate or fetch task → poll status → download GLB to `/workspace/demos/<pkg>/source/`.
4. If the asset deforms: remesh / smart-low-poly / UVs **before** animate. **Never remesh after rig** (kills bones/weights).
5. `animate_prerigcheck` → if riggable, `rig_model` (matching type) → `retarget_animation` for needed presets (`idle`, `walk`, …).
6. Blender craft: real meters, apply transforms, weight peel, split fused props, cloth proximity; SIP bake if needed.
7. Export `.glb`; Godot mid-stride plates (walk/idle 25/50/75 front+side); run game-ready checklist.
8. Log task_ids, credits, SHA in a polish report. AD owns GO/NO+why — do not claim GO; no tip-import until GO + policy.

## Guards
- No Soft CI / CONDITIONAL / placeholder-as-GO
- No shipping concept/gait-reference meshes as field heroes
- Prefer solid Blender polish on an existing ship mesh over new Tripo spends when identity is locked
- Mixamo only behind an explicit Adobe 1:1 gate when standing rules allow
