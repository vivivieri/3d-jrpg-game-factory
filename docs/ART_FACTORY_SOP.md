# Art factory SOP (leaf index)

**Status:** Thin index for Track **A4** — gates and laws live in [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (§3.7, §4.1 area 4, §6, §14). **Track A4 Art SOP GO (kit):** [KIT_GO_LOG.md](./KIT_GO_LOG.md).

**Read order (art/audio):** **Policy** → [ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md) → **Craft** → [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) (this index + skills below) → **Proof** → [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md).

**Product owner:** Stephen Chow · **Artistic GO/NO + why:** Art Factory Lead (Art Director seat)

---

## Art output policy + industrial AI generation SOP (all tracks)

| Leaf | Role |
|------|------|
| **[ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md)** | Agent-enforceable **bounds** (must/must-not, budgets, env short/mid/long bands) — **not** a GO stamp |
| **[AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md)** | Craft how-to for concept, env kits, props, UI, textures, 3D, animation, VFX, VO, BGM/SFX, storyboard, locale art |
| **[ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md)** | L1 art task QA + art pack roll-up (proof layer after craft) |

Read policy before generation; use AI_ART for staged gen → cleanup → engine test → GO/NO + provenance; prove with ART_QA cases/scorecard. Seed skills below add track depth.

---

## Seed skills (craft depth)

Use these as the **seed SOP** until title-specific runbooks exist. Full text: `docs/team-knowledge/skills/<folder>/SKILL.md`.

| Skill | Purpose |
|--------|---------|
| [ai3d-to-godot-pipeline](./team-knowledge/skills/ai3d-to-godot-pipeline/SKILL.md) | Text/concept → AI mesh (Tripo-class) → remesh/retopo/UV **before** rig → Blender weights/LODs → GLB → Godot plates → Art Lead GO/NO+why |
| [game-ready-3d-guideline](./team-knowledge/skills/game-ready-3d-guideline/SKILL.md) | Realtime character/prop bar: scale, topology, UVs, rig, export, AD eyes-on checklist |
| [coat-hero-anim-polish](./team-knowledge/skills/coat-hero-anim-polish/SKILL.md) | Jacketed cloth / coat-proximity anim — fix weights on **one** live ship mesh; [MID_STRIDE_PLATE_CAMERA.md](./templates/MID_STRIDE_PLATE_CAMERA.md) |
| [mixamo-adobe-gate](./team-knowledge/skills/mixamo-adobe-gate/SKILL.md) | Mixamo / Adobe animation download — **Stephen 1:1 Secure Form only**; no room workaround |
| [freesound-full-wav-1to1](./team-knowledge/skills/freesound-full-wav-1to1/SKILL.md) | Freesound original full WAV — **Stephen 1:1**; never tip HQ-preview as full WAV |

---

## 3D character pipeline (factory order)

```
Text / concept brief → 2D draft (AD GO on direction)
    → AI mesh draft (Tripo-class; credit-aware)
    → remesh / retopo / UV (BEFORE rig — mandatory)
    → prerig check → rig → retarget presets (idle, walk, …)
    → Blender: meters, apply transforms, weight peel, cloth proximity, LODs
    → export GLB
    → Godot mid-stride plates (walk + idle @ 25/50/75%, front + side) — [MID_STRIDE_PLATE_CAMERA.md](./templates/MID_STRIDE_PLATE_CAMERA.md)
    → game-ready checklist → Art Lead GO/NO + why
```

### Hard guards

| Guard | Rule |
|-------|------|
| Remesh timing | **Never remesh after rig** — destroys bones, weights, bindings |
| Ship tier | **Never** ship concept mesh, gait-reference mesh, or greybox as field hero |
| Live path | **One** live asset path per hero/prop; second meshes = concept-only labels |
| AI 3D | Draft until game-ready checklist + plates + **Art Lead GO** |
| Image gen | Draft-only under Art Lead GO — not locked ship art |
| Mixamo / Adobe | Human Secure Form (Stephen 1:1) — [SECURE_FORM_MIXAMO.md](./templates/SECURE_FORM_MIXAMO.md) |
| Freesound full WAV | Human login 1:1 — [SECURE_FORM_FREESOUND.md](./templates/SECURE_FORM_FREESOUND.md); HQ preview ≠ full WAV |
| TTS / voice clone | [SECURE_FORM_TTS_CONSENT.md](./templates/SECURE_FORM_TTS_CONSENT.md) before ship VO |

---

## GO/NO reason log (Art pack)

Every artistic exit uses the factory **output contract**: `status · why · paths · next · blocked_on` (Master Plan §6 rule 5; [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md)).

Animation GO requires **mid-stride** walk and idle plates — not bind-pose or A-pose stand-ins.

---

## Related SSOT

| Doc | Role |
|-----|------|
| [ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md) | Agent output bounds — all art/audio tracks |
| [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) | Industrial AI generation SOP — all art/audio tracks |
| [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) | Art/audio **task QA** — numbered test cases, evidence law, pack scorecard (L1; phase/UAT stays NON_ART) |
| [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) | Non-art tracks (story, GD, schema, locale, handoff, QA, publish, live ops, PM, Tech) |
| [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) §2.1, §3.7, §4.1, §6, §14 | Laws + leaf map + human-only gates |
| [schemas/](./schemas/) | Content pack + `storyboard-frame` / `dialogue` keys art refs must honor |
| [templates/README.md](./templates/README.md) | Track A3–A7 fillable kits + **ART_QA_*** scorecard/cases (A4); handoff smoke, QA matrices, locale/stream/live |
| `tools/validate-content-pack/` | Same validators CI runs — art handoff still needs Art pack GO |
| [team-knowledge/README.md](./team-knowledge/README.md) | Role briefs + skills inventory |
