# Mid-stride plate camera template (locomotion evidence)

**Track:** A4 art factory · **Not a GO stamp** — evidence layout for Art Lead GO/NO on locomotion.  
**Laws:** [FACTORY_MASTER_PLAN.md](../FACTORY_MASTER_PLAN.md) §3.7, §4.1 (anim evidence law) · [AI_ART_BEST_PRACTICES.md](../AI_ART_BEST_PRACTICES.md) §13.7  
**Skills:** `docs/team-knowledge/skills/ai3d-to-godot-pipeline`, `game-ready-3d-guideline`, `coat-hero-anim-polish` (cloth/coat proximity)

---

## When to use

- Before requesting **locomotion GO** on any rigged character (hero, NPC, enemy) in a SKU art pack.
- After GLB import in **Godot 4.x** (or ship engine) on the **single live ship mesh** — not concept/gait-reference meshes.

## Preconditions

- Remesh/retopo/UV completed **before** rig (never remesh after bind).
- Clips present at minimum: `idle`, `walk` (or SKU-named equivalents documented in polish report).
- Gameplay camera FOV and character scale verified (1 unit = 1 m; feet at origin).

---

## Camera setup (gameplay distance)

| Setting | Default | Notes |
|---------|---------|-------|
| **Distance** | 3.5–5.0 m from character root (feet) | Match chapter gameplay camera; record exact value in report |
| **Height** | 1.2–1.6 m eye-level toward chest/head | Slight downward tilt OK for JRPG over-shoulder |
| **FOV** | Match ship project (e.g. 60–75° vertical) | Lock FOV in evidence filename metadata |
| **Background** | Neutral mid-gray or approved greybox | No busy BG that hides silhouette errors |
| **Lighting** | Single key + fill; no baked shadow cheat on albedo | Consistent across all plates in set |

**Orthographic optional:** Side ortho at same stride phases for QA archive — not a substitute for gameplay camera plates.

---

## Required capture grid

For **each** locomotion clip (`idle`, `walk`):

| Phase | Walk frame | Idle frame | Views |
|-------|------------|------------|-------|
| 25% clip progress | Mid-stride (plant approaching) | Micro-weight shift | **Front** + **Side** (90°) |
| 50% clip progress | Mid-stride (passing) | Neutral breathe | Front + Side |
| 75% clip progress | Mid-stride (trail / push-off) | Secondary idle pose | Front + Side |

**Minimum file count:** 2 clips × 3 phases × 2 views = **12** PNG (or MP4 loop + contact sheet). Add `run` / `attack` per [AI_ART](../AI_ART_BEST_PRACTICES.md) §13.7 when those clips ship in the same gate.

### Pass bar (GO evidence)

- Silhouette readable at gameplay distance; no limb collapse or coat shredding at hips/armpits.
- Walk shows **plant/trail** — not frozen A-pose or bind-pose stand-in.
- Cloth/coat layers: no persistent body intersection through full stride (see `coat-hero-anim-polish` skill).
- Clip names and frame numbers logged in polish report.

### Fail bar (NO)

- T-pose / turntable-only / bind-pose “walk”
- Single front beauty shot with no side stride proof
- Concept or gait-reference mesh instead of ship GLB

---

## Evidence folder layout

Under SKU art pack (generic paths):

```
art_packs/<sku_id>/qa/plates/<asset_id>/
  README.md                 # camera distance, FOV, clip names, Godot version, ship GLB SHA
  walk_25_front.png
  walk_25_side.png
  walk_50_front.png
  walk_50_side.png
  walk_75_front.png
  walk_75_side.png
  idle_25_front.png
  idle_25_side.png
  idle_50_front.png
  idle_50_side.png
  idle_75_front.png
  idle_75_side.png
  optional/                 # ortho, wireframe, coat close-ups
```

Map files to **ART-QA-ANIM-*** cases in [ART_QA_BEST_PRACTICES.md](../ART_QA_BEST_PRACTICES.md) when filling [ART_QA_SCORECARD.md](./ART_QA_SCORECARD.md).

---

## Output contract snippet

```
status: GO|NO
why: <stride readable | coat fail at 50% side | etc.>
paths: art_packs/<sku_id>/qa/plates/<asset_id>/
next: <weight fix in Blender | retarget | AD re-review>
blocked_on: <none | Mixamo 1:1 | Stephen>
```

---

## Related

- [KIT_GO_LOG.md](../KIT_GO_LOG.md) — A4 Art SOP GO evidence includes this template
- [ART_OUTPUT_POLICY.md](../ART_OUTPUT_POLICY.md) — poly/tex budgets; env depth bands are separate (ART-QA-ENV-004)
