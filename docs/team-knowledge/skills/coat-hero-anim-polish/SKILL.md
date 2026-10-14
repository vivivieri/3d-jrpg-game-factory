---
name: Coat hero anim polish
description: >-
  Use when polishing Tripo coat hero 782d88aa (or any jacketed Urashima) until
  walk/idle animation PASSES — Blender weights, Godot plates, no-jacket
  concept-only, Mixamo abandoned.
---
# Coat hero anim polish

## Standing rules
- Ship/field target = Tripo coat `782d88aa` textured+anim. Polish until walk/idle **PASS**.
- No-jacket (`17dbc264` / `tripo_nojacket_walk_anim`) = **concept / gait reference only** — never tip-replace or field-mesh ship binary.
- Mixamo Adobe coat path = **abandoned** for movement. Soft CI forbid. Factory IDLE until Stephen restarts game.dev. Plan B commission **never**.
- Artistic GO/NO+why owned by Art Director (+ Design co-sign). Do not claim GO yourself.

## Canonical scratch paths
- Textured+anim: `/workspace/hero_test/ai3d/tripo_coat_782d88aa_textured_walk_idle.glb`
- Idle finfix clay: `/workspace/hero_test/ai3d/tripo_coat_782d88aa_idle_finfix.glb`
- Plates: `/workspace/hero_test/project/renders_godot_coat_plates/`
- Field demo: `/workspace/demos/urashima_field_mesh_2026-10-13/`
- Lessons: tip `docs/design/art/FACTORY_ART_LESSONS.md` + `hero_presentation/HERO_SHIP_PROVENANCE_*`

## Pipeline (solid craft)
1. Inventory clips (walk/idle names, lengths, joint count) on the coat GLB.
2. List fail modes: cloth shred, hip fin (pinky-weight trap), scale ≠ 1.7 m, missing clips, fused mesh.
3. Prefer **Blender MCP** / Blender 4.3+ CLI for weight cleanup and clip retarget — not Mixamo login workarounds.
4. If Tripo MCP is connected: use rig-check → retarget presets only after AD+Design credit sync; log credits.
5. Export polished scratch under `/workspace/demos/hero_coat_polish_<date>/`.
6. Godot plates: idle+walk at 25/50/75%, 8 m + bust + hip. AD eyes-on → GO/NO+why.
7. No tip-import until AD GO + Factory policy allows.

## Do not
- Promote no-jacket as ship hero.
- Retopo rigged meshes; AI Animate before Presets; Soft CI as PASS.
