# Art QA Best Practices — executable test kit (Track A4)

**Status:** Procedural leaf — **not** a GO stamp. Laws remain in [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (§2, §3.7, §6, §14).  
**Scope:** Task-level and **art-pack roll-up** QA before **Art pack GO** (and per-asset gates inside art production).  
**Policy bounds:** [ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md) (agent must/must-not; map in policy §12) · **Craft SOP:** [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) · **Index:** [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md)  
**General QA (phase / UAT / release):** [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) §11 + [templates/QA_MATRICES.md](./templates/QA_MATRICES.md) — art fills **Level 1 Task** rows only; phase regression and UAT stay **NON_ART**.

---

## 1. Scope and gate relationship

| Layer | Owner | Kit | Exit |
|-------|-------|-----|------|
| **Art task QA** | Art craft + QA spot-check | This document + [templates/ART_QA_SCORECARD.md](./templates/ART_QA_SCORECARD.md) | Per-asset / per-track GO/NO + why |
| **Art pack roll-up** | Art Factory Lead | Pack scorecard (§6) | Art pack GO — **any Critical fail blocks** |
| **Phase / UAT / Release** | QA Lead | NON_ART §11, QA matrices | Phase QA GO, UAT GO, Release checklist |

**Rule:** Paper greens, spreadsheet PASS without artifacts, editor-only mocks sold as “engine proof,” Soft CI, CONDITIONAL, and greybox-as-ship are **forbidden** as art GO evidence (aligned with AI_ART §0, §7, §13.7).

**Output contract (every art QA exit):** `status · why · paths · next · blocked_on` — [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md).

---

## 2. Evidence standards

| Evidence type | Required for | Not sufficient alone |
|---------------|--------------|----------------------|
| **Engine viewport / plate** | 3D, anim, env populate, VFX in scene | DCC turntable only |
| **Mid-stride plates** | Locomotion / combat anim GO | T-pose, A-pose, bind-pose stand-in |
| **Audio listen** (DAW or in-engine bus) | VO, BGM, SFX | Waveform screenshot without listen log |
| **Grid / hotbar screenshot** | UI icons | Single icon at source resolution only |
| **Import inspector + in-scene** | GLB / Godot path | Blender-only view |
| **LICENSE.json row** | Any asset entering handoff tree | Verbal “it’s CC0” |

**Artifact path pattern (per case):**

```
content/<SKU>/art/<track>/<asset_slug>/qa/<CASE_ID>_<YYYYMMDD>_<short_label>.<ext>
```

Examples: `.../qa/ART-QA-ANIM-003_20261015_walk_midstride_side.png`, `.../qa/ART-QA-VO-002_20261015_line_B001_listen.txt` (listen log: tester, timestamp HKT, pass/fail, notes).

**Severity (roll-up law):**

| Severity | Meaning | Pack roll-up |
|----------|---------|--------------|
| **Critical** | Ship blocker, legal, or mid-stride / remesh-after-rig class | **Fail pack** until fixed + retest |
| **Major** | Visible at gameplay camera or breaks interact/collision | Fail asset track; pack blocked if on MASTER_ASSET_LIST critical path |
| **Minor** | Fix before handoff preferred; documented waiver only with Art Lead + why | Does not alone block if logged |

---

## 3. Test-case library

Execute cases as written; mark **N/A** only with `why` in scorecard. Full fillable tables: [templates/ART_QA_TEST_CASES.md](./templates/ART_QA_TEST_CASES.md).

### 3.1 Concept / 2D sheets (`ART-QA-2D-*`)

#### ART-QA-2D-001 — Silhouette vs brief

| Field | Content |
|-------|---------|
| **Precondition** | Style lock board exists; asset on MASTER_ASSET_LIST; brief lists silhouette class + camera priority. |
| **Steps** | 1. Export sheet at gameplay thumbnail size (~128px height). 2. Squint test vs brief silhouette class. 3. Compare to golden set for same family. |
| **Expected** | Readable silhouette; no identity drift vs DNA block (≥3/4 anchors). |
| **Evidence** | `.../qa/ART-QA-2D-001_<date>_silhouette_thumb.png` |
| **Pass/Fail** | Pass = match; Fail = wrong class or drift |
| **Severity** | Major |

#### ART-QA-2D-002 — Turnaround consistency

| Field | Content |
|-------|---------|
| **Precondition** | Front / ¾ / side / back panels on one anchor sheet. |
| **Steps** | 1. Overlay proportions (head height, shoulder width) across views. 2. Check outfit/hair continuity. 3. Confirm neutral A- or T-pose for 3D-bound sheets. |
| **Expected** | Proportions consistent; no back-view invention contradicting front. |
| **Evidence** | `.../qa/ART-QA-2D-002_<date>_turnaround_overlay.png` |
| **Pass/Fail** | Pass = consistent; Fail = panel mismatch |
| **Severity** | Critical (if sheet feeds image-to-3D) |

#### ART-QA-2D-003 — Legal / watermark / IP

| Field | Content |
|-------|---------|
| **Precondition** | Sheet candidate for lock. |
| **Steps** | 1. Visual scan for watermarks, stock marks, readable third-party logos. 2. Check likeness policy (no celebrity). 3. Log provenance refs in manifest. |
| **Expected** | Clean sheet; provenance row started. |
| **Evidence** | `.../qa/ART-QA-2D-003_<date>_clean_scan.png` + `LICENSE.json` draft |
| **Pass/Fail** | Pass = clean + ledger started |
| **Severity** | Critical |

#### ART-QA-2D-004 — Storyboard panel identity

| Field | Content |
|-------|---------|
| **Precondition** | Beat-linked panel; character refs attached per AI_ART §11. |
| **Steps** | 1. Compare cast to locked sheets for same beat. 2. Thumbnail emotional read test. 3. Continuity check (costume, time of day, held props). |
| **Expected** | Identity stable; intent readable at thumbnail. |
| **Evidence** | `.../qa/ART-QA-2D-004_<date>_beat_<beat_id>_panel.png` |
| **Pass/Fail** | Pass = stable + readable |
| **Severity** | Major |

---

### 3.2 Environment (`ART-QA-ENV-*`)

#### ART-QA-ENV-001 — Scale vs player capsule

| Field | Content |
|-------|---------|
| **Precondition** | Modular piece or kit in Godot with 1 m reference / player capsule visible. |
| **Steps** | 1. Place asset beside capsule. 2. Walk camera to gameplay FOV/height. 3. Capture viewport. |
| **Expected** | Doorways, steps, props within brief scale band; no house-sized clutter or coin-sized architecture. |
| **Evidence** | `.../qa/ART-QA-ENV-001_<date>_scale_capsule.png` |
| **Pass/Fail** | Pass = in band |
| **Severity** | Major |

#### ART-QA-ENV-002 — Populated scene (not empty viewport)

| Field | Content |
|-------|---------|
| **Precondition** | Area dress pass complete per master plate. |
| **Steps** | 1. Load populated scene at target density. 2. Gameplay camera path along critical traverse. 3. Capture 3+ frames along path. |
| **Expected** | Style match to golden set; no empty “Art GO” viewport. |
| **Evidence** | `.../qa/ART-QA-ENV-002_<date>_populate_path_<n>.png` |
| **Pass/Fail** | Pass = dressed + on-style |
| **Severity** | Major |

#### ART-QA-ENV-003 — Collision / nav sanity

| Field | Content |
|-------|---------|
| **Precondition** | Walkable area flagged gameplay-critical in brief. |
| **Steps** | 1. Enable collision debug or physics test body. 2. Traverse POI chain. 3. Note holes, invisible walls, snags. |
| **Expected** | Critical path traversable; no blocker snags without design intent. |
| **Evidence** | `.../qa/ART-QA-ENV-003_<date>_collision_notes.md` + optional debug capture |
| **Pass/Fail** | Pass = path clean |
| **Severity** | Critical (gameplay-critical areas) |

#### ART-QA-ENV-004 — Short / mid / long depth bands

| Field | Content |
|-------|---------|
| **Precondition** | Dressed area or vista candidate for art GO; gameplay camera height/FOV set per brief; [ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md) §3 applies. |
| **Steps** | 1. Capture **short** band: floor/ground + near interactables along walk path (collision-true). 2. Capture **mid** band: modular architecture / street walls / kit modules with readable landmark silhouette. 3. Capture **long** band: skyline / parallax / impostors / plates — far dressing without full 3D hero cost. 4. Label each capture in filename or companion notes. |
| **Expected** | All three bands populated — **no empty mid, no empty far, no undressed walkable floor plane** as ship evidence. |
| **Evidence** | `.../qa/ART-QA-ENV-004_<date>_band_short.png`, `_band_mid.png`, `_band_long.png` (or one annotated composite with band callouts) |
| **Pass/Fail** | Fail = missing band or floor-only short band |
| **Severity** | **Critical** (area / pack populated-scene gates) |

---

### 3.3 Props (`ART-QA-PROP-*`)

#### ART-QA-PROP-001 — Pivot and origin

| Field | Content |
|-------|---------|
| **Precondition** | GLB in Godot inherited scene. |
| **Steps** | 1. Inspect origin at floor/center per brief. 2. Place on grid; verify rest orientation. 3. Screenshot with axis gizmo. |
| **Expected** | Bottom-center or brief-defined pivot; transforms applied. |
| **Evidence** | `.../qa/ART-QA-PROP-001_<date>_pivot.png` |
| **Pass/Fail** | Pass = correct pivot |
| **Severity** | Major |

#### ART-QA-PROP-002 — Interactable collision

| Field | Content |
|-------|---------|
| **Precondition** | Interactable prop; collision policy defined. |
| **Steps** | 1. Verify convex/primitive collision — not raw high-poly. 2. Test pickup/highlight/interact hook if wired. 3. Capture interact moment. |
| **Expected** | Stable collision; highlight readable. |
| **Evidence** | `.../qa/ART-QA-PROP-002_<date>_interact.png` |
| **Pass/Fail** | Pass = interact works |
| **Severity** | Critical (quest/key interactables) |

#### ART-QA-PROP-003 — LOD0 tri budget

| Field | Content |
|-------|---------|
| **Precondition** | Profile class assigned (scatter / interactable / hero prop). |
| **Steps** | 1. Count tris in DCC or Godot import stats. 2. Compare to AI_ART §3 table for class. 3. Log count in scorecard. |
| **Expected** | Within profile band or waived with Art Lead why. |
| **Evidence** | `.../qa/ART-QA-PROP-003_<date>_tri_count.txt` |
| **Pass/Fail** | Pass = in band or waived |
| **Severity** | Major |

---

### 3.4 UI / icons (`ART-QA-UI-*`)

#### ART-QA-UI-001 — 32px hotbar readability

| Field | Content |
|-------|---------|
| **Precondition** | Icon exported at production settings; mipmaps off. |
| **Steps** | 1. Composite icon at 32×32 on game HUD background. 2. Solid-black silhouette test. 3. Capture grid of full category batch. |
| **Expected** | Silhouette readable; no muddy micro-detail. |
| **Evidence** | `.../qa/ART-QA-UI-001_<date>_32px_grid.png` |
| **Pass/Fail** | Pass = readable |
| **Severity** | Major |

#### ART-QA-UI-002 — Family coherence

| Field | Content |
|-------|---------|
| **Precondition** | Anchor batch + category expansion complete. |
| **Steps** | 1. Lay out 48px grid for one category. 2. Compare outline weight, light direction, padding to anchors. |
| **Expected** | Coherent family; rarity in frames not baked into art. |
| **Evidence** | `.../qa/ART-QA-UI-002_<date>_48px_family.png` |
| **Pass/Fail** | Pass = coherent |
| **Severity** | Major |

#### ART-QA-UI-003 — No baked text in icon art

| Field | Content |
|-------|---------|
| **Precondition** | Icon set for localization-safe HUD. |
| **Steps** | 1. Scan all icons for letters/numbers. 2. Confirm pipeline naming only in filenames. |
| **Expected** | No readable glyphs in art. |
| **Evidence** | `.../qa/ART-QA-UI-003_<date>_text_scan.png` |
| **Pass/Fail** | Pass = no baked text |
| **Severity** | Major |

---

### 3.5 Textures / PBR (`ART-QA-TEX-*`)

#### ART-QA-TEX-001 — Albedo lighting-free

| Field | Content |
|-------|---------|
| **Precondition** | Base color map on production UVs. |
| **Steps** | 1. Flat-view albedo in engine neutral lighting. 2. Check for baked shadows/highlights. 3. Seam spot-check in UV editor capture. |
| **Expected** | No baked lighting in albedo; acceptable seams. |
| **Evidence** | `.../qa/ART-QA-TEX-001_<date>_albedo_flat.png` |
| **Pass/Fail** | Pass = lighting-free |
| **Severity** | Major |

#### ART-QA-TEX-002 — ORM channel order

| Field | Content |
|-------|---------|
| **Precondition** | ORM or separate R/M maps exported for Godot/glTF. |
| **Steps** | 1. Verify **R=AO, G=Roughness, B=Metallic** in import. 2. Toggle channels in inspector. 3. Screenshot material preview. |
| **Expected** | Channels match convention; normal Y+ OpenGL unless documented invert. |
| **Evidence** | `.../qa/ART-QA-TEX-002_<date>_orm_channels.png` |
| **Pass/Fail** | Pass = correct packing |
| **Severity** | Major |

#### ART-QA-TEX-003 — Texel density spot

| Field | Content |
|-------|---------|
| **Precondition** | Asset beside family in same biome. |
| **Steps** | 1. Apply checker or TD overlay. 2. Compare hero vs scatter on same camera shot. |
| **Expected** | No single asset screaming resolution mismatch at gameplay distance. |
| **Evidence** | `.../qa/ART-QA-TEX-003_<date>_texel_checker.png` |
| **Pass/Fail** | Pass = coherent |
| **Severity** | Minor |

---

### 3.6 3D characters (`ART-QA-3D-*`)

#### ART-QA-3D-001 — Sheet silhouette match (gameplay camera)

| Field | Content |
|-------|---------|
| **Precondition** | Approved 2D sheet locked; production mesh in engine. |
| **Steps** | 1. Frame character at JRPG gameplay distance. 2. Side-by-side or overlay vs sheet silhouette. |
| **Expected** | Silhouette matches approved sheet at gameplay camera. |
| **Evidence** | `.../qa/ART-QA-3D-001_<date>_silhouette_game.png` |
| **Pass/Fail** | Pass = match |
| **Severity** | Major |

#### ART-QA-3D-010 — Remesh-before-rig audit

| Field | Content |
|-------|---------|
| **Precondition** | Rig present; production mesh frozen. |
| **Steps** | 1. Confirm git/DCC history: retopo/UV **before** bind (manifest note). 2. Verify no remesh op after weights. 3. Art Lead attestation in scorecard if history unclear. |
| **Expected** | Remesh-before-rig law satisfied (AI_ART §13.6). |
| **Evidence** | `.../qa/ART-QA-3D-010_<date>_pipeline_order.md` |
| **Pass/Fail** | Fail = remesh after rig |
| **Severity** | **Critical** |

#### ART-QA-3D-011 — Scale metres +Y applied transforms

| Field | Content |
|-------|---------|
| **Precondition** | GLB export settings documented. |
| **Steps** | 1. Import to Godot; check height vs capsule. 2. Verify applied scale/rotation in DCC export checklist. |
| **Expected** | Metres, +Y up, no 100× scale surprise. |
| **Evidence** | `.../qa/ART-QA-3D-011_<date>_scale_import.png` |
| **Pass/Fail** | Pass = correct |
| **Severity** | Major |

#### ART-QA-3D-012 — Topology / manifold pre-bind

| Field | Content |
|-------|---------|
| **Precondition** | Mesh pre-rig; wireframe capture available. |
| **Steps** | 1. Run manifold/non-manifold report. 2. Shoulder/elbow/knee loop spot check. 3. Save wire turntable frame. |
| **Expected** | Manifold for bind; joint loops present for deformation. |
| **Evidence** | `.../qa/ART-QA-3D-012_<date>_wire_topo.png` |
| **Pass/Fail** | Pass = clean enough to bind |
| **Severity** | Major |

#### ART-QA-3D-013 — UV stability

| Field | Content |
|-------|---------|
| **Precondition** | UVs locked before texture pass. |
| **Steps** | 1. UV layout screenshot. 2. Stretch heat map. 3. Confirm no re-unwrap after bake without rebake. |
| **Expected** | Stable UVs; acceptable stretch on visible areas. |
| **Evidence** | `.../qa/ART-QA-3D-013_<date>_uv_layout.png` |
| **Pass/Fail** | Pass = stable |
| **Severity** | Major |

#### ART-QA-3D-014 — Cloth/coat separation (proximity)

| Field | Content |
|-------|---------|
| **Precondition** | Character with coat/cloak/hair volume per brief. |
| **Steps** | 1. Section view or wireframe for body vs coat shells. 2. Confirm gap/thickness before bind. 3. Note skill: `coat-hero-anim-polish` if polish pass needed. |
| **Expected** | No fused coat/body single shell causing candy-wrapper risk. |
| **Evidence** | `.../qa/ART-QA-3D-014_<date>_coat_section.png` |
| **Pass/Fail** | Fail = fused shells |
| **Severity** | Critical (coated heroes) |

#### ART-QA-3D-015 — Not concept mesh as ship

| Field | Content |
|-------|---------|
| **Precondition** | One live ship path per character (ART_FACTORY_SOP hard guard). |
| **Steps** | 1. Compare file path labels: `prod/` vs `concept/` / `gait_ref/`. 2. Confirm MASTER_ASSET_LIST points to ship GLB only. |
| **Expected** | Ship tier is game-ready mesh, not exploration or gait-reference mesh. |
| **Evidence** | `.../qa/ART-QA-3D-015_<date>_ship_path_audit.md` |
| **Pass/Fail** | Fail = concept mesh tagged ship |
| **Severity** | **Critical** |

---

### 3.7 Animation (`ART-QA-ANIM-*`)

#### ART-QA-ANIM-001 — Mid-stride walk plate (mandatory)

| Field | Content |
|-------|---------|
| **Precondition** | Walk loop in engine; gameplay or ortho side camera locked. |
| **Steps** | 1. Scrub to ~25%, 50%, 75% stride (not contact only). 2. Capture **side** mid-stride frame. 3. Capture **front** mid-stride frame. |
| **Expected** | Silhouette readable; limbs not collapsed; coat/hair follow. |
| **Evidence** | `.../plates/ART-QA-ANIM-001_<date>_walk_midstride_side.png` (+ front) |
| **Pass/Fail** | Fail = missing mid-stride or T-pose substitute |
| **Severity** | **Critical** |

#### ART-QA-ANIM-002 — Mid-stride idle plate (mandatory)

| Field | Content |
|-------|---------|
| **Precondition** | Idle loop in engine. |
| **Steps** | 1. Capture mid-breath or mid-weight-shift frame (not bind pose). 2. Check armor/cloth clip at frame. |
| **Expected** | Living idle; no bind-pose stand-in. |
| **Evidence** | `.../plates/ART-QA-ANIM-002_<date>_idle_mid.png` |
| **Pass/Fail** | Pass = mid-stride idle evidence |
| **Severity** | **Critical** |

#### ART-QA-ANIM-003 — Foot skate / root motion policy

| Field | Content |
|-------|---------|
| **Precondition** | SKU root-motion policy frozen. |
| **Steps** | 1. Play loop on flat ground. 2. Mark foot sliding frames. 3. Confirm in-place vs root motion matches policy. |
| **Expected** | Skate within brief tolerance; policy consistent. |
| **Evidence** | `.../qa/ART-QA-ANIM-003_<date>_foot_skate.mp4` or numbered stills |
| **Pass/Fail** | Pass = within tolerance |
| **Severity** | Major |

#### ART-QA-ANIM-004 — Combat apex frame

| Field | Content |
|-------|---------|
| **Precondition** | Combat clip on production rig. |
| **Steps** | 1. Identify apex frame per anim brief. 2. Capture plate at apex with hit window marked. 3. Optional sync note for VFX/SFX. |
| **Expected** | Readable pose at apex; sync metadata logged. |
| **Evidence** | `.../plates/ART-QA-ANIM-004_<date>_attack_apex.png` |
| **Pass/Fail** | Pass = apex documented |
| **Severity** | Major (combat-critical clips) |

---

### 3.8 VFX (`ART-QA-VFX-*`)

#### ART-QA-VFX-001 — Spritesheet grid math

| Field | Content |
|-------|---------|
| **Precondition** | Flipbook/spritesheet imported. |
| **Steps** | 1. Verify power-of-two, row-major order, FPS metadata. 2. Step through frames in engine. |
| **Expected** | No frame pop or wrong order; pivot stable. |
| **Evidence** | `.../qa/ART-QA-VFX-001_<date>_sheet_step.png` |
| **Pass/Fail** | Pass = grid correct |
| **Severity** | Major |

#### ART-QA-VFX-002 — Alpha on light and dark BG

| Field | Content |
|-------|---------|
| **Precondition** | Effect placed in test scene. |
| **Steps** | 1. Capture on dark BG. 2. Capture on bright BG. 3. Check fringe/premultiply. |
| **Expected** | No dark halos; readable on both. |
| **Evidence** | `.../qa/ART-QA-VFX-002_<date>_alpha_light_dark.png` |
| **Pass/Fail** | Pass = clean alpha |
| **Severity** | Major |

#### ART-QA-VFX-003 — Combat overdraw spot

| Field | Content |
|-------|---------|
| **Precondition** | Worst-case combat camera setup. |
| **Steps** | 1. Trigger effect at scale used in combat. 2. Note fill/overdraw concern (profiler screenshot if available). |
| **Expected** | No full-screen opaque stack without approval. |
| **Evidence** | `.../qa/ART-QA-VFX-003_<date>_combat_view.png` |
| **Pass/Fail** | Pass = within budget |
| **Severity** | Major |

---

### 3.9 VO (`ART-QA-VO-*`)

#### ART-QA-VO-001 — Voice bible identity

| Field | Content |
|-------|---------|
| **Precondition** | Locked voice ID + settings per character. |
| **Steps** | 1. A/B new line against reference pack. 2. Log listen result (tester, HKT, pass/fail). |
| **Expected** | Same character perceptual identity. |
| **Evidence** | `.../qa/ART-QA-VO-001_<date>_identity_listen.txt` + stem path |
| **Pass/Fail** | Pass = identity match |
| **Severity** | Major |

#### ART-QA-VO-002 — Line technical (heads/tails/loudness)

| Field | Content |
|-------|---------|
| **Precondition** | Batch normalized per audio design doc. |
| **Steps** | 1. Check clipped starts/ends. 2. LUFS/loudness spot vs cast target. 3. Name pronunciation checklist for locale names. |
| **Expected** | Clean edits; loudness in band; names acceptable. |
| **Evidence** | `.../qa/ART-QA-VO-002_<date>_tech_listen.txt` |
| **Pass/Fail** | Pass = technical clean |
| **Severity** | Major |

---

### 3.10 BGM / SFX (`ART-QA-SFX-*`, `ART-QA-BGM-*`)

#### ART-QA-BGM-001 — Loop seam

| Field | Content |
|-------|---------|
| **Precondition** | Loop exported for area/combat bed. |
| **Steps** | 1. Listen to 2+ loop cycles in engine bus. 2. Note click/pop at seam. |
| **Expected** | Seam inaudible or documented fix. |
| **Evidence** | `.../qa/ART-QA-BGM-001_<date>_loop_listen.txt` |
| **Pass/Fail** | Pass = seamless |
| **Severity** | Major |

#### ART-QA-SFX-001 — Not preview-as-ship (Freesound class)

| Field | Content |
|-------|---------|
| **Precondition** | Library SFX with external license. |
| **Steps** | 1. Confirm file is **original full download** (WAV/FLAC), not HQ preview MP3. 2. Secure Form completed if Freesound. 3. LICENSE row matches. |
| **Expected** | Full-quality file; license commercial-OK; no BY-NC. |
| **Evidence** | `.../qa/ART-QA-SFX-001_<date>_file_hash.txt` + `LICENSE.json` |
| **Pass/Fail** | Fail = preview or BY-NC |
| **Severity** | **Critical** |

#### ART-QA-SFX-002 — Ducking vs VO

| Field | Content |
|-------|---------|
| **Precondition** | Buses wired in test scene. |
| **Steps** | 1. Play VO line with BGM/SFX. 2. Listen for ducking clarity. |
| **Expected** | VO intelligible per mix policy. |
| **Evidence** | `.../qa/ART-QA-SFX-002_<date>_duck_listen.txt` |
| **Pass/Fail** | Pass = intelligible |
| **Severity** | Major |

---

### 3.11 Locale art (`ART-QA-LOCALE-*`)

#### ART-QA-LOCALE-001 — UI expansion pseudo-loc

| Field | Content |
|-------|---------|
| **Precondition** | Pseudo-loc or longest locale strings loaded. |
| **Steps** | 1. Screenshot critical HUD screens at 130–180% expansion. 2. Note clipping/overflow. |
| **Expected** | No critical clip on primary actions. |
| **Evidence** | `.../qa/ART-QA-LOCALE-001_<date>_pseudo_loc_<screen>.png` |
| **Pass/Fail** | Pass = no critical clip |
| **Severity** | Major |

#### ART-QA-LOCALE-002 — No baked text in world textures

| Field | Content |
|-------|---------|
| **Precondition** | Env textures/signage in locale track. |
| **Steps** | 1. Review albedo for readable language. 2. Confirm signage blank or engine UI overlay path. |
| **Expected** | Text in UI layer, not baked English in albedo. |
| **Evidence** | `.../qa/ART-QA-LOCALE-002_<date>_signage_review.png` |
| **Pass/Fail** | Fail = baked text |
| **Severity** | Major |

#### ART-QA-LOCALE-003 — Font embedding license

| Field | Content |
|-------|---------|
| **Precondition** | Font files in repo or pack. |
| **Steps** | 1. Verify redistribution/embedding allowed. 2. Log license row. 3. SC/TC/JP/KR stack spot if applicable. |
| **Expected** | Game-embed OK; locale-appropriate glyphs. |
| **Evidence** | `.../qa/ART-QA-LOCALE-003_<date>_font_license.md` |
| **Pass/Fail** | Fail = license missing |
| **Severity** | Critical |

---

### 3.12 Godot GLB import (`ART-QA-GLB-*`)

#### ART-QA-GLB-001 — Import checklist (inherited scene)

| Field | Content |
|-------|---------|
| **Precondition** | GLB in `export/`; AI_ART §13.12. |
| **Steps** | 1. Reimport; verify materials extract if needed. 2. Normal map flag + ORM. 3. Use inherited scene; reimport does not wipe gameplay children. |
| **Expected** | Stable import path documented. |
| **Evidence** | `.../qa/ART-QA-GLB-001_<date>_import_inspector.png` |
| **Pass/Fail** | Pass = checklist green |
| **Severity** | Major |

#### ART-QA-GLB-002 — No fake LOD nodes in GLB

| Field | Content |
|-------|---------|
| **Precondition** | Exported GLB. |
| **Steps** | 1. Inspect scene tree for `_LOD1` mesh nodes. 2. Confirm LOD strategy matches Godot auto-LOD or visibility ranges — not extra meshes as fake LODs. |
| **Expected** | No spurious LOD mesh nodes (AI_ART §3, §13.4). |
| **Evidence** | `.../qa/ART-QA-GLB-002_<date>_scene_tree.png` |
| **Pass/Fail** | Fail = fake LOD meshes packed |
| **Severity** | Major |

#### ART-QA-GLB-003 — Collision from budgeted mesh

| Field | Content |
|-------|---------|
| **Precondition** | Collision suffix or advanced import configured. |
| **Steps** | 1. Confirm collision source is simplified mesh. 2. Visualize collision shapes in engine. |
| **Expected** | Collision not sourced from million-tri render mesh. |
| **Evidence** | `.../qa/ART-QA-GLB-003_<date>_collision.png` |
| **Pass/Fail** | Pass = simplified collision |
| **Severity** | Major |

---

### 3.13 License ledger (`ART-QA-LICENSE-*`)

#### ART-QA-LICENSE-001 — Row before handoff inclusion

| Field | Content |
|-------|---------|
| **Precondition** | Asset slated for art pack / handoff tree. |
| **Steps** | 1. Open `LICENSE.json` (or pack ledger). 2. Verify tool, plan tier, date, hash, commercial OK, reviewer. 3. Cross-check MASTER_ASSET_LIST entry. |
| **Expected** | Complete row; no missing provenance. |
| **Evidence** | `.../LICENSE.json` + `.../qa/ART-QA-LICENSE-001_<date>_ledger_audit.md` |
| **Pass/Fail** | Fail = missing row |
| **Severity** | **Critical** |

#### ART-QA-LICENSE-002 — Mixamo / Adobe Secure Form (when used)

| Field | Content |
|-------|---------|
| **Precondition** | Mixamo rig or animation in pack. |
| **Steps** | 1. Confirm human Secure Form on file. 2. Confirm embed-not-redistribute policy acknowledged. 3. No ML-training use. |
| **Expected** | Form complete; terms acknowledged (skill: `mixamo-adobe-gate`). |
| **Evidence** | `.../qa/ART-QA-LICENSE-002_<date>_secure_form_ref.md` |
| **Pass/Fail** | Fail = no form |
| **Severity** | **Critical** |

---

### 3.14 Art pack roll-up (`ART-QA-PACK-*`)

#### ART-QA-PACK-001 — MASTER_ASSET_LIST coverage

| Field | Content |
|-------|---------|
| **Precondition** | Pack candidate for Art pack GO. |
| **Steps** | 1. For each MASTER_ASSET_LIST art row, link scorecard + critical cases executed. 2. Flag any open Critical/Major on critical path. |
| **Expected** | 100% list coverage or explicit N/A with why. |
| **Evidence** | `content/<SKU>/art/qa/ART-QA-PACK-001_<date>_mal_coverage.md` |
| **Pass/Fail** | Fail = missing assets |
| **Severity** | **Critical** |

#### ART-QA-PACK-002 — Populated scene Art Lead plate

| Field | Content |
|-------|---------|
| **Precondition** | AI_ART §14 step 16 — populated scene; [ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md) §3 depth bands. |
| **Steps** | 1. Load representative chapter scene at ship density. 2. Gameplay camera + perf note. 3. Style cohesion vs golden set. 4. Confirm ART-QA-ENV-004 pass on same scene (short/mid/long). |
| **Expected** | Real populated scene evidence — not greybox-as-ship; depth bands present. |
| **Evidence** | `content/<SKU>/art/qa/ART-QA-PACK-002_<date>_populated_scene.png` |
| **Pass/Fail** | Fail = empty/greybox gate |
| **Severity** | **Critical** |

#### ART-QA-PACK-003 — License ledger audit (pack)

| Field | Content |
|-------|---------|
| **Precondition** | All pack assets frozen. |
| **Steps** | 1. Run ledger completeness pass (ART-QA-LICENSE-001 per asset or sample audit with hash list). 2. Log exceptions. |
| **Expected** | No asset without row entering handoff. |
| **Evidence** | `content/<SKU>/art/qa/ART-QA-PACK-003_<date>_ledger_pack_audit.md` |
| **Pass/Fail** | Fail = holes in ledger |
| **Severity** | **Critical** |

#### ART-QA-PACK-004 — No Soft CI / paper green

| Field | Content |
|-------|---------|
| **Precondition** | Art pack GO request submitted. |
| **Steps** | 1. Review all attached evidence paths resolve to real files. 2. Reject any task marked PASS without artifact. 3. Reject greybox/concept as ship substitutes. |
| **Expected** | Every PASS row has path; mid-stride law satisfied for anims. |
| **Evidence** | `content/<SKU>/art/qa/ART-QA-PACK-004_<date>_evidence_integrity.md` |
| **Pass/Fail** | Fail = paper green |
| **Severity** | **Critical** |

---

## 4. Mapping: AI_ART / skills → ART-QA IDs

| AI_ART § | Topic | Primary ART-QA IDs | Skill (seed) |
|----------|-------|-------------------|--------------|
| §1 | Concept / 2D sheets | ART-QA-2D-001 … 003 | — |
| §2 | Environment | ART-QA-ENV-001 … 004 | `game-ready-3d-guideline` |
| [ART_OUTPUT_POLICY](./ART_OUTPUT_POLICY.md) §3 | Env depth bands | ART-QA-ENV-004 | — |
| [ART_OUTPUT_POLICY](./ART_OUTPUT_POLICY.md) §2 | Budget starting bands | ART-QA-PROP-003, 3D-*, GLB-002, PACK-002 | — |
| §3 | Props | ART-QA-PROP-001 … 003 | `game-ready-3d-guideline` |
| §4 | UI / icons | ART-QA-UI-001 … 003 | — |
| §5 | Textures / PBR | ART-QA-TEX-001 … 003 | — |
| §6 | 3D characters | ART-QA-3D-001, 010–015 | `ai3d-to-godot-pipeline`, `game-ready-3d-guideline` |
| §7 | Animation | ART-QA-ANIM-001 … 004 | `coat-hero-anim-polish`, `mixamo-adobe-gate` |
| §8 | VFX | ART-QA-VFX-001 … 003 | — |
| §9 | VO | ART-QA-VO-001 … 002 | — |
| §10 | BGM / SFX | ART-QA-BGM-001, ART-QA-SFX-001 … 002 | `freesound-full-wav-1to1` |
| §11 | Storyboard stills | ART-QA-2D-004 | — |
| §12 | Locale art | ART-QA-LOCALE-001 … 003 | — |
| §13.12 | Godot GLB import | ART-QA-GLB-001 … 003 | `ai3d-to-godot-pipeline` |
| §13.5 / §13.10 | License / Secure Form | ART-QA-LICENSE-001 … 002 | `mixamo-adobe-gate`, `freesound-full-wav-1to1` |
| §14 step 16–17 | Pack exit | ART-QA-PACK-001 … 004 | — |

---

## 5. Art-pack scorecard (fillable)

Copy per SKU: [templates/ART_QA_SCORECARD.md](./templates/ART_QA_SCORECARD.md).

**Roll-up rules:**

1. Execute all cases mapped to assets on MASTER_ASSET_LIST (use §4 table).  
2. **Any Critical fail → Art pack NO** until retest passes.  
3. Art Factory Lead signs **GO/NO + why** on roll-up — does not replace Stephen product gates.  
4. Attach scorecard path in art pack output contract `paths`.

---

## 6. Avoid list (art QA)

| Avoid | Why | Case anchor |
|-------|-----|-------------|
| T-pose-only anim approval | Factory mid-stride law | ART-QA-ANIM-001, 002 |
| Concept / gait / greybox mesh as ship | ART_FACTORY_SOP hard guard | ART-QA-3D-015, PACK-002 |
| Remesh after rig | Destroys weights | ART-QA-3D-010 |
| Soft CI / CONDITIONAL / spreadsheet PASS without files | NON_ART §11 + §0 | ART-QA-PACK-004 |
| Freesound HQ preview as full WAV | License + quality | ART-QA-SFX-001 |
| DCC-only turntable as anim GO | Engine plates required | ART-QA-ANIM-001 |
| Fake `_LOD#` meshes inside GLB | Godot import trap | ART-QA-GLB-002 |
| Baking rarity or text into icons/textures | Loc + combinatorics | ART-QA-UI-003, LOCALE-002 |
| Mixamo without Secure Form | Human gate | ART-QA-LICENSE-002 |
| Shipping without LICENSE row | Master Plan art law | ART-QA-LICENSE-001 |
| Empty mid/far env band or bare floor | ART_OUTPUT_POLICY §3 depth law | ART-QA-ENV-004 |

---

## 7. Residual / open (factory owners)

- Art Lead **plate camera templates** (resolution, lighting, gameplay FOV) — still open in [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) §17.  
- Numeric poly/texel per platform tier — profile per SKU; cases use AI_ART starting bands.  
- Secure Form template file paths — attach when Stephen/Tech publishes internal forms.

---

**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) · **Track A4:** [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md)
