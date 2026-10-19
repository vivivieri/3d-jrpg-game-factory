---
name: Game-ready 3D guideline
description: >-
  Use when building, reviewing, or accepting any realtime 3D character or prop
  for Godot 4.x — topology, scale, UVs, rig, export, env depth bands, and AD GO/NO bar.
---
# Game-ready 3D guideline

A model is **game-ready** when the engine imports and uses it without surgery: real-world scale, applied transforms, correct pivot, poly budget matched to camera distance, clean UVs, expected materials, and — if animated — skeleton deformation without shred at mid-stride.

## When to use

- **Authoring** — before exporting any ship-tier GLB from Blender (or accepting vendor mesh).
- **Review** — Art Lead or QA L1 art pass before locomotion GO or art pack lock request.
- **Environment blocks** — modular kits and dressed scenes (pair with **ART-QA-ENV-004**).

## Preconditions

- Asset listed on [MASTER_ASSET_LIST.md](../../../templates/MASTER_ASSET_LIST.md).
- [ART_OUTPUT_POLICY.md](../../../ART_OUTPUT_POLICY.md) role budget selected (hero / NPC / prop / env module).
- For characters: rig exists only **after** retopo/UV; plates captured per [MID_STRIDE_PLATE_CAMERA.md](../../../templates/MID_STRIDE_PLATE_CAMERA.md).

## Ordered steps (checklist execution)

### A. Character / prop (skinned or static)

1. **Scale & pivot** — 1 unit = 1 m; hero ≈ 1.7 m; character origin at feet; prop pivot at base/hinge/root.
2. **Transforms** — Apply location, rotation, scale before export.
3. **Topology** — Quad-dominant; loops at shoulders, elbows, knees, hips, neck; **no n-gons on deform joints**.
4. **Budget** — Tris within [ART_OUTPUT_POLICY](../../../ART_OUTPUT_POLICY.md) table for role; LODs for repeated/distant props.
5. **UVs** — Non-overlapping (except intentional mirror); consistent texel density; mip padding.
6. **Materials** — Readable albedo; ORM/normal flags verified on Godot reimport.
7. **Rig & weights** (if animated) — Full motion range tested; **cloth/coat proximity** on layered costumes (`coat-hero-anim-polish`).
8. **Clips** — Named `idle`, `walk`, …; evidence is **mid-stride**, not A-pose.
9. **Export** — GLB preferred; verify at **gameplay** camera distance in Godot.
10. **Scorecard** — Fill [ART_QA_SCORECARD.md](../../../templates/ART_QA_SCORECARD.md) rows for asset id.

### B. Environment depth bands (when populating a scene)

1. Read [ART_OUTPUT_POLICY.md](../../../ART_OUTPUT_POLICY.md) §3 — **short / mid / long** fill rules.
2. Place hero-scale props in **short** band; mid structures in **mid**; silhouettes/skyline in **long**.
3. Capture **ART-QA-ENV-004** evidence: `.../qa/ART-QA-ENV-004_<date>_band_short.png`, `_band_mid.png`, `_band_long.png`.
4. Cross-check populate case **ART-QA-ENV-002** — no empty mid/far band on ship path.

## Expected outputs + evidence

| Artifact | Evidence path |
|----------|----------------|
| Ship GLB | `art_packs/<sku_id>/3d/` or `props/` |
| Godot import screenshot | `.../qa/ART-QA-3D-*_<date>_import.png` |
| Mid-stride plates | `.../qa/plates/<asset_id>/` |
| Env depth bands | `.../qa/ART-QA-ENV-004_*` |

## Pass / fail criteria

| Result | Criteria |
|--------|----------|
| **PASS (ready for AD GO/NO request)** | All critical ART-QA rows for asset type PASS; stride plates valid; env bands filled when scene gate applies; no policy must-not violations. |
| **FAIL (NO)** | Wrong scale/unapplied transforms; remesh-after-rig history; dense AI mush without retopo; overlapping deform clips; T-pose-only anim evidence; bare mid/long env band (**ART-QA-ENV-004** fail); greybox/concept mesh labeled ship. |

**Artistic GO/NO + why** is owned by Art Factory Lead — this skill does not self-stamp GO.

## Must-not

- Soft CI / CONDITIONAL / placeholder-as-GO.
- Shipping concept, gait-reference, or greybox as field hero.
- Assets invented outside MASTER_ASSET_LIST.
- Remesh **after** skin bind.
- Using HQ Freesound preview as full WAV (see `freesound-full-wav-1to1`).

## Human gates

- Mixamo/Adobe/Freesound full download — Stephen 1:1 only.
- Paid 3D/API spend — human approval on credits.

## Pointers

- Pipeline order: `ai3d-to-godot-pipeline`.
- Master Plan §3.7, §4.1 area 4.
- [ART_QA_BEST_PRACTICES.md](../../../ART_QA_BEST_PRACTICES.md) §3.2 (**ART-QA-ENV-004**), §4 anim cases.

## AD eyes-on (before GO/NO + why)

- Scale + pivot in engine
- Silhouette / proportions vs style DNA
- Deform at major joints (if animated)
- Mid-stride walk + idle plates (both views)
- Cloth / coat proximity through stride
- UVs / albedo at game camera
- Clip set complete for role
- **Why** logged with GO or NO
