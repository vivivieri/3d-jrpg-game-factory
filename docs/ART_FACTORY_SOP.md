# Art factory SOP (leaf index)

**Status:** Thin index for Track **A4** — gates and laws live in [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (§3.7, §4.1 area 4, §19). **Generation how-to (every art track):** [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) · procedural 3D/anim/audio detail also in skill leaf docs below.

**Product owner:** Stephen Chow · **Artistic GO/NO + why:** Art Factory Lead (Art Director seat)

---

## Industrial AI generation SOP (all tracks)

**[AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md)** — factory-wide leaf for concept, env kits, props, UI, textures, 3D characters, animation, VFX, VO, BGM/SFX, storyboard, and locale art: spec → staged gen → cleanup → engine test → GO/NO + provenance. Use it alongside the seed skills for track-specific depth.

---

## Seed skills (prior manufactory → generic factory)

Use these as the **seed SOP** until title-specific runbooks exist. Full text: `docs/team-knowledge/skills/<folder>/SKILL.md`.

| Folder | Purpose |
|--------|---------|
| `ai3d-to-godot-pipeline` | Text/concept → AI mesh (Tripo-class) → remesh/retopo/UV **before** rig → Blender weights/LODs → GLB → Godot plates → Art Lead GO/NO+why |
| `game-ready-3d-guideline` | Realtime character/prop bar: scale, topology, UVs, rig, export, AD eyes-on checklist |
| `coat-hero-anim-polish` | **Lesson (generic):** jacketed cloth / coat proximity anim failures — fix in Blender weights; **one** live mesh path; concept/gait refs stay concept-only |
| `mixamo-adobe-gate` | Mixamo / Adobe animation download — **Stephen 1:1 Secure Form only**; no room workaround |
| `freesound-full-wav-1to1` | Freesound original full WAV — **Stephen 1:1**; never tip HQ-preview as full WAV |

---

## 3D character pipeline (factory order)

```
Text / concept brief → 2D draft (AD GO on direction)
    → AI mesh draft (Tripo-class; credit-aware)
    → remesh / retopo / UV (BEFORE rig — mandatory)
    → prerig check → rig → retarget presets (idle, walk, …)
    → Blender: meters, apply transforms, weight peel, cloth proximity, LODs
    → export GLB
    → Godot mid-stride plates (walk + idle @ 25/50/75%, front + side)
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
| Mixamo / Adobe | Human Secure Form (Stephen 1:1) only when standing rules allow |
| Freesound full WAV | Human login 1:1 only; HQ preview ≠ full WAV for tip-import |

---

## GO/NO reason log (Art pack)

Every artistic exit uses the factory **output contract**: `status · why · paths · next · blocked_on` (see Master Plan §6 rule 5 and §19).

Animation GO requires **mid-stride** walk and idle plates — not bind-pose or A-pose stand-ins.

---

## Related SSOT

| Doc | Role |
|-----|------|
| [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) | Industrial AI generation SOP — all art/audio tracks |
| [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) §3.7, §4.1, §19 | Laws + promoted lessons |
| [team-knowledge/README.md](./team-knowledge/README.md) | Archived source detail for skills above |
