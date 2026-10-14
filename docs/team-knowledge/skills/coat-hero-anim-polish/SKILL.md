---
name: Coat hero anim polish
description: >-
  Use when polishing a jacketed / coat hero character until walk/idle animation
  PASSES — Blender weights, Godot mid-stride plates, one live mesh path;
  concept and gait-reference meshes stay concept-only.
---
# Jacketed character anim polish (coat / cloth proximity)

## Standing rules
- **One live ship mesh** per character — polish weights and clips on that mesh until walk/idle **PASS**.
- Alternate meshes (e.g. no-jacket, gait-reference) = **concept-only** — never tip-replace or field-ship as the hero binary.
- External Mixamo/Adobe coat paths are **off** unless Stephen 1:1 Secure Form (see `mixamo-adobe-gate`). Soft CI forbid. Game factory **IDLE** until Stephen restarts after handoff policy. Plan B commission paths stay **off** unless Stephen opens them.
- Artistic GO/NO + **why** owned by Art Factory Lead (+ Design co-sign on identity). Do not self-claim GO.

## Pipeline (solid craft)
1. Inventory clips (walk/idle names, lengths, joint count) on the locked ship GLB.
2. List fail modes: cloth shred, hip fin (pinky-weight trap), scale drift, missing clips, fused mesh.
3. Prefer **Blender** (MCP or CLI) for weight cleanup and clip retarget — not unpaid login workarounds.
4. If AI mesh tools are connected: rig-check → retarget presets only after Art Lead credit sync; log credits.
5. Export polished scratch under a dated `demos/<sku>_coat_polish_<date>/` path.
6. Godot **mid-stride** plates: idle + walk at 25/50/75%, front + side; Art Lead eyes-on → GO/NO + why.
7. No tip-import until Art Lead GO and factory handoff policy allows.

## Do not
- Promote concept or gait-reference meshes as ship hero.
- Remesh after rig; use AI Animate before presets; Soft CI as PASS.
- Dual-live a second mesh “variant” instead of fixing cloth proximity in Blender weights.

## Related
- Master Plan §3.7 / §4.1 (remesh-before-rig, mid-stride plates, one live path)
- `game-ready-3d-guideline`, `ai3d-to-godot-pipeline`
