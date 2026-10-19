# AI Art Best Practices — 3D JRPG / Narrative Game Factory SOP

> **Policy bounds (agents read first):** [ART_OUTPUT_POLICY.md](./ART_OUTPUT_POLICY.md) — hard must/must-not, budgets, env depth bands. **This document** = craft how-to (ceiling), not policy caps.  
> **Companion leaf:** [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) (clearance → design → data → locale → handoff → QA → publish → live).

> **Status:** Research outline ready for factory adoption (Godot 4.x GLB pipeline).  
> **Scope:** Multi-title auto-factory; AI-assisted first passes + human Secure Form gates. Soft CI / placeholders are **forbidden** as ship gates.  
> **Language:** Generic factory terms only (no title-specific hero IDs).  
> **Research date:** 2026-10-14 (HKT). Citations are URLs actually fetched during research; where uncertain, marked *unverified*.

---

## 0. Factory principles (read first)

1. **AI generates; humans ship.** Measure *accepted, shipped assets*, not generations (Tripo studio pipeline guide).
2. **Topology gate before rig.** Remesh / retopo / UV **before** skinning. Never remesh after weights exist.
3. **Image-to-3D after design lock; text-to-3D for exploration only.**
4. **Preserve three files per asset:** approved 2D reference, untouched AI source mesh, generation provenance record.
5. **Mid-stride plates are anim GO evidence** — still T-poses and turntables are not enough.
6. **Credit-aware generation:** track API spend per SKU; prefer retexture / local fix over full regenerate; when visual identity is locked, prefer **Blender polish on the ship mesh** over new AI spend.
7. **Legal ledger before build inclusion.** No asset enters `main` without license/provenance row.
8. **Artistic GO/NO + why** on every gate — mid-stride plates and real engine evidence where applicable; no paper greens.

**Executable art QA test cases** (IDs, steps, scorecard, pack roll-up): [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) + [templates/ART_QA_TEST_CASES.md](./templates/ART_QA_TEST_CASES.md). Craft QC gates in §§1–12 below align with those cases; phase/UAT matrices stay in [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) §11.

### Existing factory spine (characters / props)

```
text/concept → 2D draft (style-locked) → Art Lead GO
→ AI mesh (Tripo-class) → remesh/retopo/UV → bake maps
→ Blender (rig/weights/export) → GLB → Godot import
→ mid-stride plates → Art Lead GO/NO
```

Soft placeholders and “CI green with grey cubes” do **not** count as GO.

---

## 1. Concept / character 2D (hero, NPC, enemy)

### Workflow steps
1. **Brief:** role (hero / party NPC / crowd NPC / elite enemy / trash enemy), silhouette class, palette, camera distance priority, culture constraints.
2. **Style lock board:** 6–12 golden refs (silhouette, face language, costume density, line weight, lighting). Freeze before batch gen.
3. **Character DNA block:** face hooks, hair, outfit canon, prohibited drift (keep in prompt header every run).
4. **Anchor sheet:** front / ¾ / side / back, neutral A- or T-pose, clean studio background, even lighting.
5. **Variant pass:** expression sheet, outfit variants, damage/armor tiers — always with sheet as identity ref.
6. **Art Lead GO** on sheet before any image-to-3D.

### AI tool classes
| Class | Examples (illustrative) | Factory use |
|-------|-------------------------|-------------|
| Ideation / hero splash | Midjourney (V6 `--cref`/`--cw`, V7 `--oref`/`--ow`, `--sref`) | Fast exploration; not sole production consistency |
| Production consistency | SDXL / Flux + IP-Adapter / InstantID / ControlNet; optional LoRA after 15–30 approved views | Batch sheets, poses, outfit variants |
| Cleanup / composite | Raster editor + local inpaint | Specularity cleanup, text removal, seam fixes |

*LoRA is optional, not mandatory.* Prefer style refs + IP sheets first; train LoRA only when drift persists across many scenes.

### Prompts / refs tips
- Lock DNA; vary only scene/action/camera tokens.
- Signature silhouette element (hat shape, scarf, weapon outline) as identity hook.
- Clean white/grey BG for sheets that feed image-to-3D.
- Separate identity (`--cref`/`--oref` / IP-Adapter) from style (`--sref` / style LoRA).
- Seeds help repeatability but **do not store appearance** (Midjourney seeds docs via consistency guides).

### QC gates
- Squint / thumbnail silhouette match to brief.
- Face + hair + outfit anchors match DNA (≥3/4).
- Turnaround proportions consistent across views.
- No watermark, no baked UI text, no third-party IP likeness.
- Sheet approved before 3D spend.

### Common fails
- Single hero splash used as sole 3D ref → bad back/side geometry.
- Outfit drift between sheet panels.
- Dynamic pose locked early → auto-rig fails later.
- Over-detailed faces that collapse at JRPG gameplay camera.

### Human-only gates
- Hero / story-critical NPC identity lock (final face/costume).
- Culture / religious / sensitive motif review.
- Legal likeness / celebrity / third-party IP check.
- Art Lead GO on locked sheet.

**Sources:** https://skywork.ai/blog/how-to-consistent-characters-ai-scenes-prompt-patterns-2025/ · https://aitoolsguidebook.com/en/articles/ai-fantasy-character-design-tutorial/

---

## 2. Environment / area / street / world / background (2D plates + 3D env)

### Workflow steps
1. **Master scene plate:** layout, lighting direction, scale language, palette (one approved master).
2. **Kit breakdown:** crop/redraw single-object refs with clean BG (buildings, props, landmarks).
3. **2D plates:** skyboxes, parallax BG, billboard flats for distant streets (where full 3D is waste).
4. **3D generation:** single-image for distant dressing; multi-view for landmarks / walkable architecture.
5. **Modular kit assembly in Blender:** normalize scale, pivots at base center, grid snap, shared materials.
6. **Godot scene dress + light test** at gameplay FOV / camera height.
7. **Art Lead GO** with populated scene evidence (not empty viewport).

### AI tool classes
- 2D plate gen: Midjourney / SD / Flux with style refs.
- 3D env props: Tripo / Meshy (volume); Rodin for hero landmark detail bases.
- Parametric kits (optional): Sloyd-class for clean low-poly families.
- Terrain / native engine: Godot terrain / CSG / hand modular kits for gameplay-critical collision.

### Prompts / refs tips
- Shared “biome family” prompt: stone hue, wear, dirt, ornament density, realism level.
- Master plate first; never free-prompt each building in isolation.
- Orthographic / clear silhouette refs beat cinematic photos for reconstruction.

### QC gates
- Scale vs 1 m cube / player capsule.
- Walkable collision accuracy; no invisible walls / holes.
- Texel density coherent across kit.
- Style match when viewed beside golden set.
- Draw-call / overdraw check in populated scene.

### Common fails
- Beautiful turntable prop that is house-sized or coin-sized on import.
- Fused materials (albedo + lighting baked) blocking re-tint.
- Topology debt on modular pieces that need LODs / lightmaps.
- Generating hundreds of variants → review backlog larger than the task.

### Human-only gates
- Landmark / story locations art direction.
- Navigation mesh / gameplay critical path collision.
- Cultural architecture accuracy for named real-world-inspired regions.

**Sources:** https://www.tripo3d.ai/blog/ai-3d-asset-pipeline-for-game-studios · https://customuse.com/learn/best-ai-3d-tools-for-game-developers · https://www.strayspark.studio/blog/blender-to-game-engine-pipeline-2026

---

## 3. Props / interactables

### Workflow steps
1. Brief: interactable vs dressing; grip/socket needs; rarity; destroy states.
2. Silhouette batch (text-to-3D OK for exploration).
3. Lock concept → image-to-3D from clean orthographic ref.
4. Remesh to budget → UV → bake PBR → origin bottom-center.
5. Collision: convex / primitives for dynamic; never raw million-tri mesh.
6. Godot import as inherited scene; test pickup / interact / highlight.

### AI tool classes
- Meshy / Tripo: fast props & weapons.
- Rodin: high-detail hero prop source → bake down.
- Sloyd-class: near-ready low-poly parametric props.
- AI retexture on locked mesh for variants (do not regenerate geometry for paint changes).

### Prompts / refs tips
- “Game-ready,” clear silhouette, no hands holding object unless socketed later.
- Shared material language with environment family.
- Freeze mesh/UVs before generating skin variants.

### QC gates
| Class | Starting tri budget (Godot-oriented starting points — profile!) |
|-------|------------------------------------------------------------------|
| Scatter prop | ~5k–10k |
| Interactable / weapon | ~8k–20k |
| Hero prop | ~20k–30k |

- Pivot, scale, collision, highlight mesh, LOD0 budget before import.
- Godot auto-LOD does **not** fix a dense LOD0.

### Common fails
- Open shells / floaters (hundreds of pieces).
- Remesh destroying thin handles / blades.
- Shipping `_LOD1` meshes inside GLB (Godot treats them as extra nodes, not LODs).

### Human-only gates
- Quest / story key items.
- First-person or close-camera weapons (if any).
- Physics-critical interactables (doors, bridges).

**Sources:** https://www.strayspark.studio/blog/meshy-tripo-to-godot-4-gltf-lod-normal-maps · https://www.tripo3d.ai/blog/how-to-use-ai-3d-models-in-godot · https://customuse.com/learn/best-ai-3d-tools-for-game-developers

---

## 4. UI / icons / HUD

### Workflow steps
1. Spreadsheet of every item / skill / status / system glyph (scope list first).
2. Anchor batch: 5–8 icons defining outline weight, light direction, angle, palette.
3. Expand **by category** (all potions, then all weapons) against the same style ref.
4. Audit full grid at **48px** and **32px**.
5. Export one setting for whole set; import with UI (not world) texture settings.
6. Rarity in **frames**, never baked into art.

### AI tool classes
- Batch icon gen with style reference (MJ `--sref`, Flux/SD with IP/style refs).
- Vector / Figma rebuild for HUD chrome that must scale.
- Engine: Godot atlas / Theme; mipmaps off for UI sprites.

### Prompts / refs tips
- Shared style prefix + transparent BG + diagonal 30–45° object angle.
- No numbers/letters in icon art (localization + readability).
- 8–10% padding; silhouette-first test (solid black).
- Author painted icons at 256–512; test at hotbar size.

### QC gates
- Readable at 32px hotbar.
- Family coherence in 48px grid.
- Transparent PNG; atlas padding 2–4px; mipmaps **off**; pixel art → Point filter, no block compression.
- Naming: `icon_item_potion_health.png` (pipeline names).

### Common fails
- Detail that dies at 32px.
- Rarity baked into art → combinatorial explosion.
- Extending set cold months later without re-feeding anchors.
- World-import settings soft-blurring UI.

### Human-only gates
- Final HUD layout / accessibility contrast.
- Brand / logo marks.
- Controller prompt glyphs (platform cert).

**Sources:** https://icora.io/blog/how-to-make-game-icons

---

## 5. Textures / materials / PBR or NPR albedo

### Workflow steps
1. Lock production mesh + UVs first.
2. Generate coordinated map set: Base Color, Normal, Roughness, Metallic, AO (or ORM pack).
3. Local inpaint / repaint failed regions — do not full-regen approved sets.
4. Pack ORM: **R=AO, G=Roughness, B=Metallic** (Godot / glTF convention).
5. Normals: OpenGL Y+ for Godot; Invert Y on import if DirectX source.
6. NPR / toon: separate albedo-only or custom shader path; do not force full PBR onto cel pipeline.
7. Engine test under game lighting beside golden materials.

### AI tool classes
- Vendor AI texturing (Tripo / Meshy / Hyper3D texture passes).
- Substance / ArmorPaint / Material Maker for hero polish & procedural.
- Blender bake high→low after remesh.

### Prompts / refs tips
- Family style prompt: palette, wear, edge, dirt, ornament, realism.
- Albedo **without** baked lighting/shadows.
- Resolution by screen importance: scatter 1K; hero 2K; avoid blanket 4K.

### QC gates
- No lighting baked into albedo.
- Seam check; stretch display in UV editor.
- Texel density consistency (checker / TD tools).
- Normal orientation; ORM channel order.
- Memory budget vs camera distance.

### Common fails
- Texturing before final remesh (invalidates UVs).
- Meshy default `enable_pbr` off → flat roughness/metal on import (*verify current defaults on each vendor*).
- 4K everywhere → VRAM blowout.

### Human-only gates
- Hero skin / face texture final.
- Decals with readable language / sigils (culture review).
- Trademarked pattern avoidance.

**Sources:** https://www.tripo3d.ai/blog/ai-3d-asset-pipeline-for-game-studios · https://www.strayspark.studio/blog/meshy-tripo-to-godot-4-gltf-lod-normal-maps · https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/available_formats.html

---

## 6. 3D characters (text→2D→3D and image→3D)

### Workflow steps
1. Approved 2D turnaround (A/T-pose preferred).
2. **Image-to-3D** (multi-view when available) from sheet — not from action splash alone.
3. Preserve high-detail **source** mesh.
4. **Remesh / Smart Mesh / quad remesh** to character budget; joint loops for shoulders/elbows/knees.
5. UV unwrap (stable) → bake normals/AO/albedo from source.
6. Separate thin cloth / hair / coat as needed for weights.
7. Rig only on frozen production mesh.
8. Export GLB (mesh + PBR + skeleton) → Godot → mid-stride plates.

### AI tool classes
| Role | Tool class notes |
|------|------------------|
| Fast / stylized | Tripo (strong for stylized / JRPG-adjacent per 2026 comparisons) |
| General props→chars | Meshy |
| Hero surface detail source | Rodin / Hyper3D (expect retopo + bake) |
| DCC cleanup | Blender + QuadriFlow / Instant Meshes / Q Remeshify / RetopoFlow |
| Auto-rig first pass | Vendor auto-rig or Mixamo (humanoid only) — expect re-skin to studio standard |

### Prompts / refs tips
- Clean BG, even light, readable silhouette, minimal occlusion.
- Neutral pose for generation; regenerate pose rather than binding a dynamic mesh.
- Cloth/coat: prompt or sculpt clear separation from body volume (proximity fails).

### QC gates
- Silhouette vs approved sheet at gameplay camera.
- Poly budget (profile): many docs cite ~5k–20k props; characters often higher — MeshPrep Godot preset example **~30k hero** as *starting point*, not law.
- Manifold / no interior faces before bind.
- Transforms applied; metres; +Y up.
- Extreme pose test before anim GO.

### Common fails — **cloth / coat proximity**
- Coat fused to torso → shoulders tear / candy-wrapper.
- Large hair / wings / weapons welded → Mixamo / auto-rig refuse or misplace bones (Adobe Mixamo FAQ).
- Remesh after skinning → weights destroyed.
- Auto-rig “success” ≠ production deformation.

### Human-only gates
- Hero / romance / story-critical characters final mesh & face.
- Weight painting on shoulders, cloth, fingers.
- Bone naming / hierarchy matching animation library.

**Law: remesh-before-rig. Never remesh after.**

**Sources:** https://www.tripo3d.ai/blog/retopo-an-ai-character-model-for-animation · https://www.tripo3d.ai/blog/how-to-use-ai-3d-models-in-godot · https://assethub.io/blog/skinning-weights-ai-3d-characters · https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html · https://www.strayspark.studio/blog/generative-3d-tools-comparison-meshy-rodin-tripo-csm-2026

---

## 7. Animation / locomotion / combat clips

### Workflow steps
1. Confirm production mesh + weights passed extreme pose QA.
2. Skeleton standard locked (studio humanoid or retarget map).
3. Source clips: mocap / library (e.g. Mixamo) / AI motion / hand keyframe.
4. Retarget → AnimationPlayer / AnimationTree in Godot.
5. **Mid-stride plate evidence:** walk/run mid-frame, attack apex, hit-react — orthographic or fixed gameplay camera.
6. Art Lead anim GO/NO on plates + short loop video.
7. Combat: root motion vs in-place policy frozen per SKU.

### AI tool classes
- Auto-rig + library motion (Mixamo, vendor animation libraries, text-to-motion tools).
- Retargeter addons (Blender) / Godot AnimationTree.
- Hand polish for combat snappiness (JRPG often needs held frames / pose readability).

### Prompts / refs tips (motion tools)
- Specify loop vs one-shot, root motion, style (snappy JRPG vs naturalistic).
- Match foot contact to capsule radius / slope tolerance.

### QC gates
- Mid-stride plates: silhouette readable; no limb collapse; coat/hair follow.
- Foot skate check; idle breathing not clipping armor.
- Clip naming + length metadata for state machine.
- Skinned mesh auto-LOD in Godot: disable if broken (docs note occasional skinning LOD issues).

### Common fails
- Approving T-pose only.
- Mixamo on non-humanoid / floating parts / extra props in file.
- Re-uploading weight-fixed FBX to Mixamo losing armature recognition (*community reports* — prefer retarget in DCC).
- Using Mixamo content to train AI/ML — **prohibited** by Mixamo Additional Terms (2021).

### Human-only gates — **Secure Form**
- Mixamo / Adobe: human verifies account eligibility, commercial embed rules (characters/anims royalty-free for games when **embedded**; do not redistribute standalone Mixamo files), AI/ML training ban.
- Hero combat strings final timing.
- Hitbox / hurtbox sync with frames.

**Sources:** https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html · https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Mixamo-Addl-Terms-en_US-20210623.pdf · https://assethub.io/blog/skinning-weights-ai-3d-characters · https://www.meshy.ai/tutorials/how-to-use-mixamo-with-meshy

---

## 8. VFX (combat, environment)

### Workflow steps
1. Effect brief: moment (onset → peak → decay → tail), loop vs one-shot, palette, camera distance.
2. Choose path: **spritesheet** (baked) vs **GPUParticles** (interactive / collision / camera-dependent).
3. AI agent / sheet gen → QA contact sheet → export power-of-two cells, row-major, known FPS, stable pivot.
4. Import: additive for fire/glow; disable loop on impacts.
5. In-engine timing vs animation apex; overdraw check.

### AI tool classes
- AI particle / spritesheet generators (editable particle graphs preferred over flat video).
- Hand particle graphs in Godot for hero skill FX.
- Flipbook baking from DCC sims for unique magics.

### Prompts / refs tips
- Name the *game moment*, style, duration, loop policy — not just “fire”.
- JRPG readability: high contrast silhouettes over photoreal smoke.

### QC gates
- Alpha on light **and** dark BG; no dark fringes.
- Grid math / frame order / loop continuity.
- Fill-rate / overdraw at combat camera.
- Colorblind-safe team/enemy tint.

### Common fails
- Single still used as “VFX”.
- Soft black edges from wrong premultiplied alpha.
- Baking interactive FX that should be particles.

### Human-only gates
- Signature ultimate / story spell looks.
- Screen-shake / flash epilepsy safety limits.

**Sources:** https://particlefx.studio/guides/ai-vfx-generator · https://www.framesprite.com/guides/game-vfx-sprite-sheet-generator

---

## 9. VO / dialogue (TTS classes)

### Workflow steps
1. Voice bible: one locked voice ID per character; audition 4–6 candidates; freeze settings.
2. Reference pack: neutral, emotional, short dialogue samples.
3. Batch by scene; normalize loudness; consistent EQ.
4. Cache by hash of (text, voice, model, format, settings) — never rebill identical lines.
5. Split long text on sentence boundaries within model char limits.
6. QC pass vs references; store stems + metadata.

### AI tool classes (ElevenLabs-oriented; swap vendors with same discipline)
| Model class | Use |
|-------------|-----|
| Flash / low-latency | Bulk, interactive agents |
| Multilingual high-fidelity | Stable narration / dialogue |
| Expressive / max emotion | Peak story lines (higher cost / lower char cap — verify current limits) |

Integration modes: batch offline (factory default), HTTP stream (preview), WebSocket (live agents).

### Prompts / refs tips
- Normalize numbers/dates/currency in text before API.
- SSML / audio tags where supported for emotion; keep per-character style sheet.
- Lock stability vs expressiveness per role (higher stability for system VO).

### QC gates
- Identity match to voice bible.
- No clipped starts/ends; breath noise policy.
- Locale pronunciation (names, place names) checklist.
- Loudness target consistent across cast.

### Common fails
- Different voice settings per take → character drift.
- Regenerating cached lines (API spend waste).
- Exceeding concurrency → 429 storms without backoff/jitter.

### Human-only gates
- Hero / major NPC final performances.
- Trailer / marketing VO.
- Real-person likeness / voice clone consent & legal.

**Sources:** https://elevenlabs.io/blog/text-to-speech-api-integration · https://elevenlabs.io/blog/eleven-v3-audio-tags-bringing-multi-character-dialogue-to-life

---

## 10. BGM / SFX / stingers

### Workflow steps
1. Audio design doc: themes per area/boss, stinger map, interactive layers.
2. Generate or source → edit in DAW → export game formats (Ogg/Wav per engine policy).
3. SFX: prefer designed one-shots; layer AI beds carefully.
4. **License ledger row before import.**
5. Implement buses (BGM / SFX / UI / VO) and ducking.

### AI tool classes
- Music gen (Suno / Udio / ElevenLabs Music — **verify commercial terms current**; free tiers often non-commercial).
- SFX gen tools + library sources (Freesound with license filter).
- DAW human arrange for interactive/adaptive scores.

### Prompts / refs tips
- BPM, key, instrumentation, loopability, “no vocals” if needed.
- Export seamless loops; mark loop points in metadata.

### QC gates
- Loop seam silent / matched.
- Loudness vs VO ducking.
- No copyrighted sample fingerprints in trailer cuts.
- Provenance: tool, plan tier at download time, date, hash.

### Common fails
- Shipping free-tier generations without commercial rights (*terms change — re-check before each SKU*).
- Using Freesound **preview** MP3 instead of original download.
- CC-BY-NC in commercial build.
- Missing attribution list for CC-BY.

### Human-only gates — **Secure Form**
- **Freesound:** human downloads original (WAV/FLAC/etc.) from sound page while logged in; records license (CC0 / CC-BY / reject BY-NC); attributes CC-BY in credits; respects Gen AI training prefs if redistributing training sets (factory uses sounds as assets, not for training).
- Final boss theme / title theme musical identity.
- Adaptive music state machine design.

**Sources:** https://freesound.org/help/faq/ · (Suno commercial guides — *re-verify live terms before ship*; e.g. community writeups 2025–2026)

---

## 11. Storyboard / cinematic stills

### Workflow steps
1. Script beat sheet → shot list (camera, action, FG/MG/BG, emotion).
2. Style bible + character sheets attached to every panel.
3. Generate panels with identity+style refs; lock staging before polish.
4. Optional ControlNet (OpenPose / Canny / depth) for action clarity.
5. Composite, letterbox, annotate (dialogue, SFX, duration).
6. Director / narrative GO → drives animatic / in-engine cutscene.

### AI tool classes
- Still gen with cref/oref/sref or IP-Adapter.
- SD ControlNet for pose/composition lock.
- Video tools (Runway-class) only after still boards approved — higher drift risk.

### Prompts / refs tips
- Shot-first prompts: angle, lens, action, lighting, palette, aspect (16:9 / 21:9).
- Reuse same character ref per panel; freeze DNA.
- Prefer still boards over generative video for factory continuity.

### QC gates
- Character identity stable across beat.
- Continuity (costume, time of day, props).
- Readable emotional intent at thumbnail.
- No accidental third-party IP.

### Common fails
- Style-only refs without identity → cast drift.
- Over-reliance on video gen for production boards.
- Skipping annotations → ambiguous handoff to anim/cinematics.

### Human-only gates
- Story spoilers / tone for major beats.
- Cultural sensitivity in depicted rituals/events.
- Final cinematic art direction.

**Sources:** https://skywork.ai/blog/how-to-consistent-characters-ai-scenes-prompt-patterns-2025/ · https://nat.io/blog/storyboarding-controlnet-dynamic-composition · https://astorie.ai/how-to/create-storyboard-frames/midjourney

---

## 12. Locale art (fonts, culture-safe variants)

### Workflow steps
1. Locale matrix: languages, plural rules, text expansion %, forbidden symbols.
2. Font stack: Latin + CJK (+ others) with fallbacks; subset static UI labels; dynamic atlas for unknown glyphs.
3. Per-locale glyph forms (SC / TC / JP / KR distinctions).
4. Culture-safe art variants: gestures, colors, religious symbols, maps, flags — flagged in brief **before** gen.
5. Pseudo-loc pass on UI; screenshot QA per locale.
6. Credits / attribution strings localizable.

### AI tool classes
- Gen for locale-specific decals / posters **only after** culture brief.
- Do **not** auto-translate baked text inside textures — keep text in UI layer.
- Font tools / engine DynamicFont / TextServer (Godot).

### Prompts / refs tips
- Explicit “no readable Latin gibberish” on env posters if UI will overlay.
- Generate empty signage boards; localize in engine.

### QC gates
- No clipping at 130–180% text expansion (typical Western→German etc.).
- CJK vertical/line-break rules where required.
- Icon set free of culture-hostile gestures.
- Font license allows game redistribution & embedding.

### Common fails
- Baking English into albedo.
- One “CJK font” for all East Asian locales.
- Ignoring expansion → UI reflow bugs late.

### Human-only gates
- Native speaker / cultural consultant on sensitive content.
- Legal name / place romanization standards.
- Age-rating imagery per territory.

**Sources:** CJK localization industry guides (e.g. search syntheses on per-locale fonts / fallbacks) — *factory should attach preferred internal loc bible; web guides vary by engine.*

---

## 13. Cross-cutting industrial practices

**QA execution:** Map each gate below to [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) §4 (AI_ART § → ART-QA ID table). Fill [templates/ART_QA_SCORECARD.md](./templates/ART_QA_SCORECARD.md) per SKU before Art pack GO request.

### 13.1 Reference boards / style locks
- Golden set per SKU + per biome/family before mass generation.
- Prompt templates + negative prompts versioned in repo.
- Review new assets **beside** family, never alone.

### 13.2 Consistency toolkit (without mandating LoRA)
1. Character / material DNA docs.
2. IP sheets / turnarounds.
3. Style refs (`--sref` / IP-Adapter style).
4. Seeds where available (weak alone).
5. Optional LoRA after 15–30 approved images if drift persists.
6. Manifest: model ID, params, refs, seed, date.

### 13.3 Poly / texel budgets (JRPG camera distances)
JRPG cameras are often mid-distance; silhouettes & readable materials beat micro-detail.

| Asset | LOD0 tris (start; profile) | Tex |
|-------|----------------------------|-----|
| Scatter prop | 5k–10k | 1K |
| Interactable | 8k–20k | 1–2K |
| Environment modular | ~10k–20k | 1–2K atlas/trim |
| Hero character | ~20k–40k (genre-dependent) | 2K |
| Crowd NPC | lower; share materials | 1K atlas |

Sources note MeshPrep Godot preset examples 10k/30k/20k prop/hero/env and Tripo “5k–20k props starting range” — **always profile populated scenes**.

### 13.4 LOD strategy (Godot 4.x)
- Budget **LOD0** in Blender first.
- Prefer Godot **auto mesh LOD** on import (meshoptimizer); do not pack `_LOD#` meshes into GLB as fake LODs.
- Artist-authored distance swaps → **visibility ranges** (HLOD).
- Disable auto-LOD per mesh if skinned LOD breaks.
- Impostors / 2D plates for far streets.

**Sources:** https://www.strayspark.studio/blog/meshy-tripo-to-godot-4-gltf-lod-normal-maps · Godot importing docs.

### 13.5 Naming / versioning / credit-license ledger
Suggested pattern:
```
SKU/Track/Family/SM_Family_Asset_vMajor.Minor/
  src_ref/          # approved 2D
  src_ai/           # untouched generator output + prompt JSON
  prod/             # remeshed, UV, maps
  export/           # GLB
  plates/           # mid-stride / turntable evidence
  qa/               # scorecard
  LICENSE.json      # tool, plan, dates, refs, reviewer, commercial OK — schema: schemas/license-asset.schema.json
```
Suffixes: `_SK`, `_COL`, `_BC`, `_N`, `_ORM`. Metadata: category, biome, tris, tex mem, AI-assisted flag, approval state.

### 13.6 Remesh-before-rig law
Order: source → cleanup → **retopo** → **UV** → bake → **then** rig/weights → anim.  
Remeshing after bind invalidates weights; joint creasing is often missing loops, not paint.

### 13.7 Mid-stride plate evidence
Required for anim GO: mid-walk, mid-run, attack apex, land/recover — under gameplay camera + optional ortho. Soft CI screenshots of idle T-pose = NO-GO.

**Factory template (camera distances, 25/50/75% walk+idle, front+side, folder layout):** [templates/MID_STRIDE_PLATE_CAMERA.md](./templates/MID_STRIDE_PLATE_CAMERA.md) · skills: `ai3d-to-godot-pipeline`, `game-ready-3d-guideline`, `coat-hero-anim-polish`.

### 13.8 Cloth / coat proximity fails
- Detect fused shells early (turntable wire + section).
- Separate meshes or add thickness / gap before bind.
- Explicit weights for thin geo; volume bind methods for overlapping parts.
- Mixamo: large clothing/hair may fail auto-rigger — simplify or studio-rig.

### 13.9 When NOT to use AI
- Final identity lock for primary cast (may use AI for exploration only).
- Legal: trademarks, celebrity likeness, competitor IP style cloning.
- Culture-sacred symbols without consultant.
- Training datasets from Mixamo / restricted libraries.
- Gameplay-critical modular kits needing exact metrics (cover, door clearances) — prefer hand modular.
- Anything where provenance cannot be recorded.

### 13.10 Human Secure Form gates
Factory policy: a named human must complete a Secure Form before these enter `main`:

| Source | Human verifies | Fillable kit |
|--------|----------------|--------------|
| Mixamo / Adobe | Account type allowed; assets embedded not redistributed raw; AI/ML training ban acknowledged; mesh meets Mixamo auto-rig constraints | [SECURE_FORM_MIXAMO.md](./templates/SECURE_FORM_MIXAMO.md) |
| Other Adobe libs | Current product-specific terms | _(product-specific — counsel)_ |
| Freesound | Original full-quality download (not preview); license CC0/CC-BY only for commercial; attribution filed; BY-NC rejected | [SECURE_FORM_FREESOUND.md](./templates/SECURE_FORM_FREESOUND.md) |
| TTS voice clone | Consent / rights documentation | [SECURE_FORM_TTS_CONSENT.md](./templates/SECURE_FORM_TTS_CONSENT.md) |
| Paid music AI | Paid-plan commercial rights at time of download; Steam/disclosure rules | _(ledger row + counsel)_ |

### 13.11 Credit-aware generation (API spend)
- Metric: `(tool $ + artist h + reject cost) / shipped assets`.
- Prefer: retexture, local sculpt, weight fix → over full re-gen.
- Batch size caps; AD selection before mass gen.
- Cache TTS; log 3D credit burn per SKU dashboard.
- Sandbox new model versions before production cutover.

### 13.12 Godot GLB import checklist
- Format: **GLB** recommended; OBJ lacks skin/anim/UV2/PBR.
- Metres, +Y up, applied transforms, backface culling enabled in Blender when appropriate.
- Extract materials if edits needed; verify normal map flag & ORM.
- Collision via suffixes (`-col`, `-convcol`, …) or Advanced Import Settings — from **budgeted** mesh.
- Inherited scenes so reimport does not wipe setup.

**Sources:** https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/available_formats.html · https://www.tripo3d.ai/blog/how-to-use-ai-3d-models-in-godot

---

## 14. Recommended factory order — single SKU art pack

1. **Style lock & DNA** (global + cast + biome)  
2. **Narrative beat / shot list** (drives scope)  
3. **Concept sheets** — heroes → key NPCs → enemies → crowd  
4. **Master environment plates** + kit list  
5. **UI icon anchor batch** + HUD wire  
6. **3D blockout** modular env (greybox OK for layout only — not ship gate)  
7. **Props interactables** (gameplay) then dressing  
8. **Character 3D** (image-to-3D → remesh → UV → textures)  
9. **Rig + weights** → extreme pose QA  
10. **Locomotion library** → mid-stride plates → anim GO  
11. **Combat clips + VFX + SFX** synced  
12. **VO** after dialogue lock; cache aggressively  
13. **BGM / stingers**  
14. **Cinematic stills / storyboards** for set pieces  
15. **Locale art & fonts**  
16. **Populated scene Art Lead GO** (performance + style)  
17. **License ledger audit** → ship  

Parallelize 5–7 and 11–13 after character locks where staffing allows; do not parallelize remesh past rig.

---

## 15. Short “avoid” lists

### Avoid (pipeline)
- Shipping raw AI meshes as LOD0  
- Remeshing after skinning  
- Text-to-3D as final for heroes  
- Soft CI placeholders as GO  
- Fake LOD meshes inside GLB for Godot  
- Baking rarity/text into icons/textures  
- Approving anim from T-pose alone  

### Avoid (quality)
- Coat/body fused shells  
- Albedo with baked shadows  
- Inconsistent family wear/palette  
- 4K textures on scatter  
- Overdraw-heavy full-screen VFX  

### Avoid (legal / process)
- Undocumented prompts/refs  
- Free-tier music in commercial builds without confirming rights  
- Freesound previews / BY-NC  
- Mixamo content for ML training  
- Celebrity / sacred motif gens without review  

---

## 16. Citation index (fetched)

| URL | Used for |
|-----|----------|
| https://www.tripo3d.ai/blog/ai-3d-asset-pipeline-for-game-studios | End-to-end AI studio pipeline, governance, texturing, QA |
| https://www.tripo3d.ai/blog/how-to-use-ai-3d-models-in-godot | Godot GLB workflow, budgets, rig notes |
| https://www.tripo3d.ai/blog/retopo-an-ai-character-model-for-animation | Remesh/retopo before anim |
| https://www.strayspark.studio/blog/blender-to-game-engine-pipeline-2026 | Blender cleanup, retopo, UV, LOD, bake |
| https://www.strayspark.studio/blog/meshy-tripo-to-godot-4-gltf-lod-normal-maps | Godot auto-LOD, ORM, normals, budgets |
| https://www.strayspark.studio/blog/generative-3d-tools-comparison-meshy-rodin-tripo-csm-2026 | Tool roles 2026 |
| https://customuse.com/learn/best-ai-3d-tools-for-game-developers | Tool choice by pipeline stage |
| https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/importing_3d_scenes/available_formats.html | Official glTF/GLB recommendation |
| https://assethub.io/blog/skinning-weights-ai-3d-characters | Weights, topology-before-paint |
| https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html | Mixamo commercial use & rig constraints |
| https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Mixamo-Addl-Terms-en_US-20210623.pdf | Mixamo AI/ML restriction |
| https://icora.io/blog/how-to-make-game-icons | Icon/HUD industrial practices |
| https://skywork.ai/blog/how-to-consistent-characters-ai-scenes-prompt-patterns-2025 | 2D consistency patterns |
| https://elevenlabs.io/blog/text-to-speech-api-integration | TTS production integration |
| https://freesound.org/help/faq/ | Freesound licenses & original downloads |
| https://particlefx.studio/guides/ai-vfx-generator | AI VFX / particle approach |

*Not fetched successfully (do not treat as verified detail):* some third-party storyboard hosts and alternate Freesound beta FAQ mirrors returned errors during research.

---

## 17. Open items for factory owners

- [ ] Freeze numeric poly/texel tables per SKU platform tier after profiling.  
- [x] Attach internal Secure Form templates (Mixamo, Freesound, TTS consent) — [templates/README.md](./templates/README.md) § Secure Forms (2026-10-19).  
- [ ] Quarterly re-audit vendor ToS (music AI & 3D APIs change).  
- [x] Wire license ledger schema — [license-ledger.schema.json](./schemas/license-ledger.schema.json), [license-asset.schema.json](./schemas/license-asset.schema.json); `npm run validate:license:pass` (not a full asset DB product).  
- [x] Define Art Lead plate templates (resolution, camera, lighting) — [MID_STRIDE_PLATE_CAMERA.md](./templates/MID_STRIDE_PLATE_CAMERA.md) (2026-10-19).  

---

**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (§3.7, §4.1, §6, §14) · **Track A4 index:** [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md)

*Living factory leaf at `docs/AI_ART_BEST_PRACTICES.md` — update citation dates on each quarterly tool review.*
