# Art Output Policy — agent-enforceable bounds (Track A4)

> **Status:** Procedural leaf — **not** a GO stamp. Factory stays **IDLE** (no `game.dev`) until Stephen authorizes restart after handoff lock.  
> **Scope:** Factory-wide **hard bounds** on what AI agents and art automation may **emit** as shippable “real game” art — **all tracks** (2D, env, props, UI, textures, 3D, anim, VFX, VO, BGM/SFX, locale).  
> **Research date:** 2026-10-19 (HKT). URLs in §13 were fetched during authoring unless marked *unverified*.

---

## Layer model (read order)

| Layer | Document | Role |
|-------|----------|------|
| **Policy** (this leaf) | `ART_OUTPUT_POLICY.md` | Hard bounds: must / must-not / caps / mandatory bands — **agent-enforceable** |
| **Best practices** | [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) | Craft how-to (ceiling) |
| **QA** | [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) | Executable pass/fail cases + evidence |

**Agents:** read **Policy** first for bounds, **AI_ART** for craft, **ART_QA** for proof. Policy does **not** replace best practices or QA.

---

## 0. Purpose & precedence

| Rule | Detail |
|------|--------|
| **SSOT laws win** | [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) §§2–7, §6, §14 override all leaves. |
| **Policy vs craft** | On conflict, this policy wins over AI_ART “nice-to-haves” and exploratory tips. |
| **Policy vs QA** | QA cases **prove** policy; if a policy rule has no case, add/extend ART-QA before claiming pack GO. |
| **Forbidden as GO** | Soft CI, CONDITIONAL, placeholders, greybox-as-ship, paper greens, spreadsheet PASS without artifacts (Master Plan §6; ART_QA PACK-004). |
| **Not in scope** | Inventing Schema GO, Contract GO, Art SOP GO, Build tip GO, Phase/UAT/Release GO stamps. |

Industrial grounding: production **art bibles** function as spec + budgets, not mood-board dumps ([SpecBase art bible pattern](https://specbase.net/docs/library/art_bible/)); technical art enforces **per-class budgets before production** ([vectorize-io technical-artist role](https://github.com/vectorize-io/self-driving-agents/blob/main/game-development/core/technical-artist.md)).

---

## 1. Agent binding rules (global)

### Must

| ID | Rule |
|----|------|
| **POL-G-001** | Emit only assets on [MASTER_ASSET_LIST.md](./templates/MASTER_ASSET_LIST.md) or an **explicit brief scope** row — no free-invent heroes, props, or areas. |
| **POL-G-002** | Every ship candidate: `LICENSE.json` (or pack ledger row) **before** handoff tree import; provenance + commercial OK path documented ([license-asset.schema.json](./schemas/license-asset.schema.json), [license-ledger.schema.json](./schemas/license-ledger.schema.json)). |
| **POL-G-003** | **Remesh / retopo / UV before rig**; mid-stride plates for locomotion GO; **no concept mesh / gait ref / greybox** as field ship tier. |
| **POL-G-004** | Prefer **kit reuse, retexture, local Blender polish** over unbounded full regen when identity is locked (credit-aware; AI_ART §13.11). |
| **POL-G-005** | Numeric bands in this policy and AI_ART §13.3 are **starting bands** — SKU may tighten after platform profile; **never silently exceed** without Art Lead waiver + `why` in scorecard. |
| **POL-G-006** | Full **GO** or **NO** only — no CONDITIONAL ship paths. |

### Must-not

| ID | Rule |
|----|------|
| **POL-G-101** | Ship raw AI LOD0 without topology/UV gate; remesh **after** skin bind. |
| **POL-G-102** | Pack fake `_LOD#` meshes inside GLB — use Godot mesh LOD / visibility ranges ([mesh LOD](https://docs.godotengine.org/en/latest/tutorials/3d/mesh_lod.html), [visibility ranges](https://docs.godotengine.org/en/stable/tutorials/3d/visibility_ranges.html)). |
| **POL-G-103** | Use Freesound preview / BY-NC clips, or Mixamo/Adobe downloads without human Secure Form when required (AI_ART §13.10; templates [SECURE_FORM_MIXAMO.md](./templates/SECURE_FORM_MIXAMO.md), [SECURE_FORM_FREESOUND.md](./templates/SECURE_FORM_FREESOUND.md)). |
| **POL-G-104** | Bake English UI text, rarity tiers, or platform glyphs into world albedo or icon art. |
| **POL-G-105** | Claim area or pack art GO with **empty mid band, empty far band, or undressed walkable floor** (§3). |

---

## 2. Budget policy (all asset classes)

**Label:** All numbers = **starting bands — profile per SKU platform tier** (freeze in AI_ART §17 open list after profiling). Count LOD0 in DCC or Godot import stats; budget materials/draw-call **intent** in populated scenes, not single-turntable heroes.

### 2.1 Characters & creatures

| Class | LOD0 tris (start) | Texture (start) | Materials intent | Notes |
|-------|-------------------|-----------------|------------------|-------|
| Hero / party | 20k–40k | 2K body (+ hair if split) | ≤4 unique in view | Silhouette readable at JRPG gameplay camera |
| Key NPC | 15k–30k | 1–2K | Share skin/hair families with cast | |
| Crowd NPC | 5k–12k | 1K atlas shared | **Instancing / atlas** mandatory | No unique 30k crowds |
| Elite enemy | 15k–35k | 1–2K | VFX socket budget separate | |
| Trash / swarm enemy | 3k–10k | 1K shared | Batch materials | |

*Illustrative Godot-oriented tables:* [project_meridian art-prd](https://github.com/kwilliams312/project_meridian/blob/main/docs/prd/art-prd.md) — adapt metrics; do not copy title IDs.

### 2.2 Environment & landmarks

| Class | LOD0 tris (start) | Texture (start) | Notes |
|-------|-------------------|-----------------|-------|
| Modular kit piece | 10k–20k | 1–2K trim/atlas | Grid-aligned; shared families |
| Landmark (hero architecture) | 30k–80k total authored | 2K hero trim | LOD0 budgeted; far cost via impostor/plate |
| Scatter dressing | 2k–8k | 1K | **Instanced** — not unique heavy meshes per rock |
| Walkable floor / street | Per modular band | Trim coherent | Short-band mandatory (§3) |

### 2.3 Props

| Class | LOD0 tris (start) | Texture | Collision |
|-------|-------------------|---------|-----------|
| Scatter | 5k–10k | 1K | Optional simple |
| Interactable | 8k–20k | 1–2K | **Simplified** convex/primitive — not render mesh |
| Hero prop | 20k–30k | 2K | As interactable |

### 2.4 UI / icons

| Rule | Bound |
|------|-------|
| Anchor batch | 5–8 icons **before** category expansion (AI_ART §4) |
| Hotbar test | Readable at **32px**; family grid at **48px** |
| Atlas | Single export settings; **mipmaps off**; 2–4px padding |
| Text / rarity | **Frames only** — not baked into icon pixels |

### 2.5 VFX

| Rule | Starting band |
|------|----------------|
| Screen-fill particles | Avoid full-screen alpha stacks; cap simultaneous heavy layers per effect family |
| Overdraw | Prefer mesh cards + limited alpha; no “still image” sold as loop VFX |
| Palette | Alpha tested on **light and dark** gameplay backgrounds |

### 2.6 Audio

| Track | Format / policy |
|-------|-----------------|
| VO | Locked `dlg.*` only; voice bible; cache generations; consent on clone |
| BGM | Loop-safe; loudness target band (mix) — see EBU R128 practice for integrated loudness targets ([EBU R128](https://tech.ebu.ch/docs/r/r128.pdf)) |
| SFX | Full WAV from licensed source; **license ledger row** before import; no preview substitutes |

---

## 3. Environment — depth-band policy (mandatory)

Any **dressed playable area** or **vista** claimed as art GO must show **short + mid + long** content classes in engine evidence (not DCC alone).

| Band | Camera distance intent | Required content class |
|------|------------------------|-------------------------|
| **Short (near)** | Immediate play space — floors, interactables, cover | **Ground/floor readable detail** + collision-true props; walkable surfaces **not** empty planes |
| **Mid** | Readable architecture — street walls, kit modules | Modular kit pieces; **landmark silhouette** readable |
| **Long (far)** | Skyline / horizon / depth | Parallax / impostors / billboards / 2D plates — **without** full 3D hero cost (AI_ART §2, §13.4) |

**Policy:** All three bands **present** in populated-scene evidence for area / Art pack GO. **Empty mid** or **empty far** = **NO**. Floor/ground is part of **short** band, not optional.

**Modular kit rules (agent-enforceable):**

| Rule | Detail |
|------|--------|
| Grid / pivot | Base-center pivots; consistent module scale; snap to factory grid |
| Materials | Shared families per biome — not one-off PBR per instance |
| Density | Prefer **instances** over unique high-poly duplicates ([modular env practice](https://dev.epicgames.com/documentation/en-us/unreal-engine/modular-environments-in-unreal-engine); academic modular kit literature: [Statham et al. DIVA](https://uu.diva-portal.org/smash/get/diva2:1642436/FULLTEXT01.pdf)) |
| Legacy ref | UDK modular workflow remains an industrial citation — *kit fetch returned HTTP 403 during research:* [Epic UDK ModularEnvironmentCreation](https://docs.unrealengine.com/udk/Three/ModularEnvironmentCreation.html) |

**QA:** ART-QA-ENV-004 (depth bands) + ENV-002 (populate) + PACK-002.

---

## 4. Characters / animation policy bounds

| Must | Must-not |
|------|----------|
| Ship path: sheet GO → remesh → UV → rig → GLB | Concept / exploration mesh as ship |
| **Mid-stride** walk + idle plates @ 25/50/75% (front + side) for anim GO | T-pose / bind-pose as anim GO |
| Coat/cloth **separate** or gap before bind | Fused shell shipped as hero |
| Mixamo only after **Secure Form** when policy applies | Training/export violations per Adobe terms |

---

## 5. Props / interactables

- Class budgets per §2.3; interactables require **POL-G-002** ledger row.
- Collision from **budgeted** simplified mesh; open shells / floaters = **NO** for ship.
- Pivot bottom-center unless brief defines otherwise (ART-QA-PROP-001).

---

## 6. UI / icons / HUD

- **POL-G-001** scope list before batch gen.
- Anchor batch → category expansion only (§2.4).
- No baked text, numbers, or rarity in icon pixels.

---

## 7. Textures / materials

- Albedo **lighting-free**; ORM **R=AO, G=Roughness, B=Metallic**.
- Texel density coherent within material family; **no blanket 4K** on scatter.
- NPR/cel paths documented — do not force broken PBR.

---

## 8. VFX

- Respect §2.5 overdraw/fill caps; loop must be motion — not static flipbook posing as FX.
- Test on representative combat + env lighting.

---

## 9. VO / BGM / SFX

- VO after `dlg.*` lock; cache keys; no ship without listen evidence.
- BGM/SFX: ledger complete; loudness checked against mix band (R128-aligned targets).
- Freesound: full WAV, CC0/CC-BY commercial only; [SECURE_FORM_FREESOUND.md](./templates/SECURE_FORM_FREESOUND.md) when standing rules require. TTS clone: [SECURE_FORM_TTS_CONSENT.md](./templates/SECURE_FORM_TTS_CONSENT.md).

---

## 10. Locale art

- No baked English (or any ship language) in world albedo — engine text layer.
- Font embedding license on file before ship.
- Culture-safe brief **before** locale-specific gen (AI_ART §12).

---

## 11. Scene / pack exit policy

Before Art pack GO request:

| Check | Requirement |
|-------|-------------|
| MAL | 100% MASTER_ASSET_LIST art rows covered or N/A + why (PACK-001) |
| Populated scene | Real dress density — not greybox (PACK-002) |
| Depth bands | ENV-004 pass on representative chapter/area scenes |
| Ledger | PACK-003 — no holes |
| Evidence integrity | PACK-004 — paths resolve; mid-stride law for anims |
| Output contract | `status · why · paths · next · blocked_on` |

---

## 12. Mapping to ART-QA IDs

| Policy rule | ART-QA case |
|-------------|-------------|
| POL-G-001 / MAL scope | ART-QA-PACK-001 |
| POL-G-002 / ledger | ART-QA-LICENSE-001, PACK-003 |
| POL-G-003 remesh / concept | ART-QA-3D-010, 3D-015 |
| POL-G-003 mid-stride | ART-QA-ANIM-001, 002 |
| POL-G-102 fake LOD | ART-QA-GLB-002 |
| POL-G-105 / §3 depth bands | **ART-QA-ENV-004** |
| §3 populate + style | ART-QA-ENV-002 |
| §2.3 prop budgets | ART-QA-PROP-003 |
| §2.4 UI | ART-QA-UI-001 … 003 |
| §7 textures | ART-QA-TEX-001 … 003 |
| §9 SFX license | ART-QA-SFX-001, LICENSE-002 |
| §10 locale | ART-QA-LOCALE-001 … 003 |
| §11 pack exit | ART-QA-PACK-001 … 004 |
| Soft CI forbidden | ART-QA-PACK-004 |

Full case text: [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) §3 · checklist: [templates/ART_QA_TEST_CASES.md](./templates/ART_QA_TEST_CASES.md).

---

## 13. Citation index

| URL | Used for |
|-----|----------|
| https://specbase.net/docs/library/art_bible/ | Art bible as production spec + budgets |
| https://github.com/vectorize-io/self-driving-agents/blob/main/game-development/core/technical-artist.md | TA budget enforcement pattern |
| https://github.com/kwilliams312/project_meridian/blob/main/docs/prd/art-prd.md | Illustrative Godot budget tables (starting bands) |
| https://uu.diva-portal.org/smash/get/diva2:1642436/FULLTEXT01.pdf | Modular kit / art-fatigue academic reference |
| https://dev.epicgames.com/documentation/en-us/unreal-engine/modular-environments-in-unreal-engine | Modular environment workflow |
| https://docs.unrealengine.com/udk/Three/ModularEnvironmentCreation.html | Legacy modular citation (*HTTP 403 on automated fetch — cite only*) |
| https://docs.godotengine.org/en/latest/tutorials/3d/mesh_lod.html | Godot mesh LOD |
| https://docs.godotengine.org/en/stable/tutorials/3d/visibility_ranges.html | Visibility ranges / HLOD-style swaps |
| https://tech.ebu.ch/docs/r/r128.pdf | Loudness targeting practice (audio mix band) |
| https://www.gdcvault.com/play/1020703/Art-Bible-Creating-a-Style | Art bible / style lock industry talk |
| [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) | Craft ceiling + §13.3 starting bands |
| [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) | Executable proof |
| [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md) | Pipeline order + guards |
| [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) | SSOT laws |

---

## 14. Open / Stephen

- [x] **Art SOP GO (kit)** — stamped [KIT_GO_LOG.md](./KIT_GO_LOG.md) A4; index [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md).  
- [x] Plate camera templates — [MID_STRIDE_PLATE_CAMERA.md](./templates/MID_STRIDE_PLATE_CAMERA.md) (AI_ART §17).  
- [ ] Numeric freeze per platform tier after profiling — §2 starting bands.  
- [x] Secure Form fillable shells — [SECURE_FORM_MIXAMO.md](./templates/SECURE_FORM_MIXAMO.md), [SECURE_FORM_FREESOUND.md](./templates/SECURE_FORM_FREESOUND.md), [SECURE_FORM_TTS_CONSENT.md](./templates/SECURE_FORM_TTS_CONSENT.md) (AI_ART §13.10 / §17).

---

**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (§3.7, §4.1, §6, §14) · **Track A4 index:** [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md)

*Living factory leaf at `docs/ART_OUTPUT_POLICY.md` — update citation dates when industrial links are re-verified.*
