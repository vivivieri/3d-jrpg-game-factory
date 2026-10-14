---
name: Game-ready 3D guideline
description: >-
  Use when building, reviewing, or accepting any realtime 3D character or prop
  for a game engine (Godot/Unity/Unreal) — topology, scale, UVs, rig, export,
  and what to avoid before artistic GO/NO.
---
# Game-ready 3D guideline

A model is **game-ready** when the engine can import and use it without surgery: real-world scale, applied transforms, correct pivot, poly budget matched to camera distance, clean UVs, expected materials, and — if it moves — a skeleton that deforms without shred.

## Do
1. **Scale & pivot** — 1 unit = 1 m. Hero ≈ 1.7 m. Character origin at feet. Prop pivot at base/hinge/root.
2. **Transforms** — Apply/freeze location, rotation, scale before export.
3. **Topology** — Quad-dominant; edge loops at shoulders, elbows, knees, hips, neck, fingers. Even density. Triangles OK in engine; **n-gons bad at deform joints**.
4. **Budget** — Tris match role and camera distance; use LODs for distant/repeated props.
5. **UVs** — Non-overlapping unless intentional mirror; consistent texel density; mip padding; lightmap UV only if baking.
6. **Materials** — Sensible splits. NPR still needs readable albedo and clean UVs.
7. **Rig & weights** — Compatible skeleton; test full motion range (walk plant/trail, not bind pose only); fix cloth/coat proximity.
8. **Clips** — Clear names (`idle`, `walk`, …). Mid-stride plates must show real gait, not frozen A-pose.
9. **Export** — Prefer GLB/GLTF for Godot; verify in-engine at game-camera distance.
10. **Judgment** — Full artistic GO/NO + why only — no Soft CI, CONDITIONAL, or placeholder-as-GO.

## Avoid
- Wrong scale / unapplied transforms / floating pivots
- Dense AI mush with no retopo **before** rig
- Remeshing **after** rig (destroys bones/weights/bindings)
- Overlapping deformable parts that clip in motion
- A-pose “walk” plates with no plant/trail stride
- Shipping concept/reference meshes as ship/field heroes
- Soft CI / greybox / placeholder marked GO
- Assets invent outside the master list

## AD eyes-on (before GO/NO+why)
- Scale + pivot in engine
- Silhouette / proportions vs theme
- Deform at major joints (if animated)
- Mid-stride walk + idle plates
- Cloth / coat proximity
- UVs / albedo at game camera
- Clip set complete for role
- Why logged with GO or NO

## When generating with AI (image/text→3D)
Treat output as draft: generate → retopo/low-poly if needed → UV/texture → **then** prerig → rig → retarget → plates → GO/NO. Never remesh after rig.
