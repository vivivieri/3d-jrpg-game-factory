---
name: Jacketed cloth anim polish
description: >-
  Use when a character wears a jacket, coat, or layered cloth and walk/idle
  clips show proximity or weight failures — fix on the single live ship mesh in
  Blender; alternate meshes stay concept-only.
---
# Jacketed cloth / coat-proximity animation (generic)

Applies to any SKU character with **outer layers** (jacket, coat, tabard, cape hem) where cloth intersects the body during locomotion. No title-specific mesh IDs — use the locked **ship GLB** for that SKU.

## Standing rules

- **One live ship mesh** per character — polish weights and clips on that mesh until walk/idle **PASS**.
- Alternate meshes (undressed, blockout, gait-reference, “no-jacket” variant) are **concept-only** — never tip-replace or field-ship as the playable binary.
- External Mixamo/Adobe paths are **off** unless Stephen 1:1 Secure Form (see `mixamo-adobe-gate`). Soft CI forbidden. Game factory **IDLE** until Stephen restarts after handoff policy.
- Artistic GO/NO + **why** owned by Art Factory Lead. Do not self-claim GO.

## Typical fail modes

| Symptom | Likely cause | Fix direction |
|---------|--------------|---------------|
| Cloth shredded at armpit/hip | Stray weights on outer shell | Weight peel in Blender; limit influence to plausible bones |
| Jacket “sticks” inside torso | No proximity separation in bind | Repaint weights; slight offset shell if art-approved |
| Popping at stride phase | Bad retarget or missing mid-stride test | Retarget on locked rig; verify 25/50/75% walk plates |
| Dual live variants | Second mesh promoted as “fix” | Abandon second path; fix weights on ship mesh only |

## Pipeline (solid craft)

1. Inventory clips (walk/idle names, lengths, joint count) on the **locked ship GLB**.
2. List fail modes from the table above on the actual silhouette.
3. Prefer **Blender** (MCP or CLI) for weight cleanup and clip retarget — not unpaid login workarounds.
4. If AI mesh tools are connected: rig-check → retarget presets only after Art Lead credit sync; log credits.
5. Export polish scratch under `demos/<sku_id>_jacket_polish_<date>/` (generic path; no hero UUIDs).
6. Godot **mid-stride** plates: idle + walk at 25/50/75%, front + side; Art Lead eyes-on → GO/NO + why.
7. No tip-import until Art Lead GO and factory handoff policy allows.

## Do not

- Promote concept, blockout, or gait-reference meshes as ship character.
- Remesh after rig; use Soft CI as PASS.
- Maintain a second “live” mesh variant instead of fixing cloth proximity in Blender weights.

## Related

- Master Plan §3.7 / §4.1 (remesh-before-rig, mid-stride plates, one live path)
- `game-ready-3d-guideline`, `ai3d-to-godot-pipeline`
