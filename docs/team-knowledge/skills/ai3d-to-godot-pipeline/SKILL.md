---
name: AI3D to Godot pipeline
description: >-
  Use when converting Tripo or other AI image/text→3D drafts into Godot-ready
  ship GLBs — remesh before rig, single live path, GLB → mid-stride plates, then AD GO/NO only.
---
# AI3D → Godot pipeline

**Single live path:** AI mesh is **draft** until game-ready checklist + mid-stride plates + Art Lead GO/NO + why. No second “fix” mesh promoted to ship.

## When to use

- New character or prop entering **3D production** from text/image/multiview AI (Tripo-class or equivalent).
- Re-export after Blender polish on an **existing locked ship id** (no identity-regen spend without AD OK).
- Before any locomotion GO request on a rigged asset.

## Preconditions

- Row exists on [MASTER_ASSET_LIST.md](../../../templates/MASTER_ASSET_LIST.md) at ship tier.
- [ART_OUTPUT_POLICY.md](../../../ART_OUTPUT_POLICY.md) budgets reviewed for role (hero / NPC / prop).
- Credit estimate approved for non-trivial Tripo/API spend (log pool: Studio vs API).
- **Not** a post-rig remesh attempt — if rig exists, fix weights/retarget only (see `coat-hero-anim-polish`).

## Ordered steps (agent-executable)

1. **Brief & mode** — Record asset id, SKU, concept refs, and whether this is **new draft** or **locked ship polish**. If identity is locked, do not regenerate mesh; Blender-only path.
2. **Credit gate** — Estimate credits; get explicit OK; log task ids and burn in polish report.
3. **Generate / fetch** — Poll job → download GLB to scratch, e.g. `demos/<sku_id>/<asset_id>/source/ai_draft.glb` (no title-specific hero UUIDs in paths).
4. **Remesh / retopo / UV (mandatory before rig)** — Smart-low-poly, cleanup, UV unwrap. **STOP if rig already bound** — remesh after rig destroys bones/weights.
5. **Prerig check** — `animate_prerigcheck` or equivalent; if fail, return to step 4, not rig.
6. **Rig & retarget** — Match skeleton type; retarget presets minimum `idle`, `walk` (plus SKU combat set when in scope).
7. **Blender craft** — Real meters; apply transforms; weight peel; split fused props; **cloth/coat proximity** on jacketed characters; LODs per [ART_OUTPUT_POLICY](../../../ART_OUTPUT_POLICY.md).
8. **Export GLB** — Single ship binary path; concept/gait-reference exports stay under `concept_only/` subfolder.
9. **Godot import** — GLB import checklist: [AI_ART §13.12](../../../AI_ART_BEST_PRACTICES.md); gameplay camera per [MID_STRIDE_PLATE_CAMERA.md](../../../templates/MID_STRIDE_PLATE_CAMERA.md).
10. **Plates** — Walk + idle at 25/50/75%, front + side; optional run/attack per AI_ART §13.7.
11. **Game-ready checklist** — Run [game-ready-3d-guideline](../game-ready-3d-guideline/SKILL.md) pass/fail table.
12. **Report** — Task ids, credits, GLB SHA, plate paths, GO/NO recommendation (AD owns stamp).

## Expected outputs + evidence

| Output | Path pattern |
|--------|----------------|
| Ship GLB | `art_packs/<sku_id>/3d/<asset_id>.glb` |
| Polish report | `art_packs/<sku_id>/qa/<asset_id>_polish_report.md` |
| Mid-stride plates | `art_packs/<sku_id>/qa/plates/<asset_id>/` (see plate template) |
| License / AI flag | `art_packs/<sku_id>/LICENSE.json` or MANIFEST row |

## Pass / fail (GO / NO)

| **GO (kit craft complete — AD still stamps artistic GO)** | All: remesh-before-rig order respected; one live GLB; plates show real stride; game-ready checklist all critical rows PASS; provenance logged. |
| **NO** | Remesh after rig; dual live meshes; concept/gait-ref used for plates; bind-pose walk; missing idle/walk set; budget blow without AD waiver; Soft CI / placeholder marked pass. |

## Must-not / human gates

- **Mixamo / Adobe** — only after Stephen **1:1 Secure Form** (`mixamo-adobe-gate`); never from group room.
- **Paid API** — no unattended spend; humans hold keys.
- **Tip-import** — no field ship until Art Lead GO + factory handoff policy.
- **Game factory** — stays IDLE until art pack GO + Stephen restart (Master Plan §6 rule 3).

## Policy & QA pointers

- Budgets / env depth (props vs hero): [ART_OUTPUT_POLICY.md](../../../ART_OUTPUT_POLICY.md) §§2–3.
- AI craft stages: [AI_ART_BEST_PRACTICES.md](../../../AI_ART_BEST_PRACTICES.md) §§10–13.
- Art task cases: **ART-QA-3D-***, **ART-QA-ANIM-*** in [ART_QA_BEST_PRACTICES.md](../../../ART_QA_BEST_PRACTICES.md).
- Env populate (separate from character path): **ART-QA-ENV-004** depth bands when dressing scenes.

## Related skills

- [game-ready-3d-guideline](../game-ready-3d-guideline/SKILL.md) — acceptance bar before AD eyes-on.
- `coat-hero-anim-polish` — jacketed cloth weight fixes on ship mesh only.
