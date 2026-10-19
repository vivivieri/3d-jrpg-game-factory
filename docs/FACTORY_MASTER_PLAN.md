# 3D JRPG Auto Game Factory — Master Plan (v1)

**Status:** Single SSOT industrial plan (future titles; not Tides of Urashima)  
**Product owner:** Stephen Chow  
**Orchestration mouthpiece:** Grok Bot (product latch) · **Factory-kit mouthpiece (this repo):** Game Factory (Cursor) — multi-title kit docs/schemas without inventing Stephen decisions  
**Audience:** Stephen + Grok Bot design/docs/art/QA team + Game Factory on `vivivieri/3d-jrpg-game-factory` + Cursor 3.0 PM game.dev factory  
**Updated:** 2026-10-19 (HKT) — §17 open decisions locked (Stephen authorized); Track A kit GOs stamped in [KIT_GO_LOG.md](KIT_GO_LOG.md); A4 skills + mid-stride plate template; prior 2026-10-15 A2/BOOT notes retained

---

## 1. Objectives

| # | Objective |
|---|-----------|
| 1 | Build a **3D JRPG game factory** that ships titles to **streaming platforms** for **multi-country** audiences. |
| 2 | Share **other countries’ traditional folktales / fairy tales** through playable stories. |
| 3 | Deliver **smooth storytelling** with player interaction (combat, gates, exploration, dialogue, etc.). |
| 4 | Keep **session length** appropriate to the tale — not artificially padded. |
| 5 | Run **near-full automation:** tale choice → length → storyboard → game design → combat → art → game.dev → QA → publish. |

**Constraint:** Game.dev automation runs in the **Cursor 3.0 PM factory**. The Grok Bot team owns design, docs, art factory orchestration, and QA orchestration — not engine implementation inside Cursor.

---

## 2. Pipeline / industrial phases

Strict sequential order. **One live milestone / phase only.** No parallel soft-ship tracks.

```
Clearance → Story → Storyboard / GD / Plan → Dialogue/VO scripts (dlg.* lock)
    → Art factory → Locale → Handoff pack → Game factory (Cursor 3.0) → QA → Publish → Live ops
```

Industrial framing (same pipeline, phase names for calendar/gates):

```
Concept → Pre-production → Art production → Game production → QA → Release → Live ops
```

| Phase | Pipeline steps | Purpose | Primary owners | Exit gate (GO/NO only) |
|-------|----------------|---------|----------------|------------------------|
| **Concept** | Clearance | Country/tale shortlist, audience, platform, length envelope; PD/cleared rights; ratings path; license ledger | Stephen, Story Lead, PM | Clearance / Concept pack GO |
| **Pre-production** | Story → Storyboard / GD / Plan → Dialogue/VO scripts | Story bible, beat sheet, storyboard, GD pillars, combat/gates, **`dlg.*` line packs (script lock)**, MASTER_ASSET_LIST, data model + handoff contract drafts | Story Lead, GD Lead, Tech Lead, PM | Design pack GO + Script pack GO |
| **Art production** | Art factory → Locale | 2D/3D/anim/VO/BGM/UI; locale text/VO/UI/fonts (after script lock); **full lock before any game.dev** | Art Factory Lead, Story Lead (VO script), PM | Art pack GO + Locale GO |
| **Game production** | Handoff → Cursor 3.0 | Frozen handoff consumed; playable SKU built | Tech Lead (contract), Cursor 3.0 PM factory | Build tip GO |
| **QA** | QA | Task-level + sprint/phase regression + real UAT (play/video) | QA Lead, PM | Phase QA GO |
| **Release** | Publish | Stream packaging, store listings, ratings, multi-country catalog | PM, Tech Lead | Release GO |
| **Live ops** | Live ops | Versioning, hotfix vs new-tale queue, audience metrics | PM, QA Lead, Stephen | Live health GO / next milestone open |

**Phase law:** Later phase does not start until prior exit is **GO** with logged reason. Soft CI, CONDITIONAL, and greybox-as-ship are forbidden as ship gates.

**Milestone latch:** Per SKU, only the board `issue_pack_ref` is live — never stamp every pack as live.

**Tip latch:** After any GO/NO, update tip/hash before the next craft; Grok Bot latches once (no quiet craft that contradicts the last latch).

### Component exits (detail)

| Step | Exit |
|------|------|
| Clearance | Clearance GO (human if paid license) |
| Story | Story bible + beat sheet GO |
| Storyboard / GD / Plan | Design pack GO (Design Lead) |
| Dialogue / VO scripts | Script pack GO — locked `dlg.*` keys + source locale (`Story Lead`) |
| Art factory | Locked art pack + reason log (full GO/NO only) |
| Locale | Locale GO for target countries |
| Handoff | Handoff pack hash / tip lock (YAML/JSON SSOT preferred) |
| Game factory | Playable build(s) |
| QA | Phase QA GO |
| Publish | Live catalog entry |
| Live ops | Stable live + next tale scheduled (optional) |

### 2.1 Leaf document map (procedural how-to; laws stay in this plan)

**Rule:** Leaf SOPs are **how-to only** — phase law, pillars, R&R, and hard rules remain **here** (§§2–7, §11, §14). [team-knowledge/STANDING_RULES.md](team-knowledge/STANDING_RULES.md) is a convenience mirror of §6 (+ pointers); cite leaves for craft steps; do not duplicate or contradict SSOT laws.

**Operating entry (day-one runbook — indexes leaves; not SSOT):** [FACTORY_OPERATING_SOP.md](FACTORY_OPERATING_SOP.md)

| Leaf | Path | Scope | Track A |
|------|------|-------|---------|
| **Factory non-art SOP** | [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) | Clearance → beats → storyboard → **§4 dialogue/VO scripts** → GD/combat → asset list → schema → locale → handoff → QA → publish → live → PM/Tech (§§0–19) | **A2**, **A3**, **A5**, **A6**, **A7** |
| **Art output policy** | [ART_OUTPUT_POLICY.md](ART_OUTPUT_POLICY.md) | Agent-enforceable bounds: must/must-not, budgets, env depth bands — all art tracks; **not** a GO stamp | **A4** |
| **AI art generation SOP** | [AI_ART_BEST_PRACTICES.md](AI_ART_BEST_PRACTICES.md) | All art/audio gen tracks: concept → env → props → UI → textures → 3D → anim → VFX → VO → BGM/SFX → storyboard stills → locale art (§§0–17) | **A4** (primary craft) |
| **Art factory index** | [ART_FACTORY_SOP.md](ART_FACTORY_SOP.md) | Thin index → policy + AI art SOP + `docs/team-knowledge/skills/` ×5; 3D pipeline order | **A4** |

**Track A → leaf pointers (single source per milestone):**

| Milestone | Procedural leaf |
|-----------|-----------------|
| A2 | [schemas/content-pack.schema.json](schemas/content-pack.schema.json) + `tools/validate-content-pack/` · procedural [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §8 |
| A3 | [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §§1–8 (clearance through dialogue/VO + design data) |
| A4 | [ART_FACTORY_SOP.md](ART_FACTORY_SOP.md) → [ART_OUTPUT_POLICY.md](ART_OUTPUT_POLICY.md) → [AI_ART_BEST_PRACTICES.md](AI_ART_BEST_PRACTICES.md) + skills |
| A5 | [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §10 handoff/tip lock |
| A6 | [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §§11–12 QA + publish packaging |
| A7 | [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §§9, 12–13 locale + publish + live ops |

---

## 3. Game design architecture

**Non-art procedural SOP:** [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) · **Art/audio procedural SOP:** [AI_ART_BEST_PRACTICES.md](AI_ART_BEST_PRACTICES.md) (indexed by [ART_FACTORY_SOP.md](ART_FACTORY_SOP.md)). See **§2.1** for the full map — laws stay in this plan.

### 3.1 Design pillars

| Pillar | Meaning | Factory implication |
|--------|---------|---------------------|
| **Tale fidelity** | Source remains recognizable across cultures | Story bible + beat sheet SSOT; no lore that contradicts cleared source |
| **Story-paced length** | Play time scales with beats, not grind | Content graph drives length; no padding systems |
| **Smooth storytelling + agency** | Narrative flow with meaningful actions at gates/combat/choices | Every beat maps to an interaction class |
| **Factory-repeatable** | Same pipeline ships N countries / N tales | YAML/JSON SSOT; versioned art packs; Cursor consumes contracts only |
| **Stream-native multi-country** | Discoverable; locale-ready | Locale packs, ratings path, short-session friendliness in preprod |

### 3.2 Experience layers (L0–L5)

| Layer | Name | Player-facing | Factory artifact |
|-------|------|---------------|------------------|
| **L0** | Platform / session | Launch, cloud/stream session, save, quit | Platform profile, session schema |
| **L1** | Presentation | Camera, UI chrome, VO/sfx timing, subtitle | Presentation bible, UI kit |
| **L2** | Exploration / space | Move, look, talk, examine, traverse | Scene graph, nav/POI data |
| **L3** | Narrative | Beats, dialogue, cutscenes, chapter gates | Beat sheet, dialogue tables, gate defs |
| **L4** | Challenge | Combat, puzzles, skill checks | Encounter tables, combat kits |
| **L5** | Progression / meta | Party growth, unlocks, endings, catalog return | Progression tables, ending graph |

**Rule:** Higher layers may depend on lower; L4/L5 never ship without L3 beat coverage.

### 3.3 Narrative architecture

```
Source tale (cleared) → Story bible → Beat sheet → Chapter graph → Gate nodes → Ending set
                              ↓
                     Storyboard frames (`INT_*`)
                              ↓
                     Dialogue/VO line packs (`dlg.*` lock)
                              ↓
                     Interaction binding (L2–L4)
```

| Element | Definition | Exit |
|---------|------------|------|
| **Source tale** | Traditional folktale/fairy tale of a target country; PD or cleared | Clearance GO |
| **Story bible** | Characters, themes, cultural notes, tone, do-not-distort list | Story GO |
| **Beat sheet** | Ordered beats with target duration bands | Length GO |
| **Chapter graph** | Linear spine + optional side beats; no grind padding | Structure GO |
| **Gate nodes** | Hard progress locks (story / combat / skill / locale) | Gate table GO |
| **Ending set** | Canonical ending(s) faithful to tale; optional variants if source supports | Ending GO |

**Length rule:** Target play minutes = f(beat count × beat weight). Adjust **beats**, not filler combat.

### 3.4 Interaction systems

| System ID | Layer | Player action | Fail / block | Success exit | Data keys (SSOT) |
|-----------|-------|---------------|--------------|--------------|------------------|
| `INT_MOVE` | L2 | Traverse scene | Soft block / soft lock UI | Reach POI / trigger | `scenes[].pois` |
| `INT_TALK` | L3 | Dialogue choice / advance | Missing locale string | Beat advance | `dialogue[]` |
| `INT_EXAMINE` | L2/L3 | Inspect object | Hint only | Flag / item / lore | `examine[]` |
| `INT_GATE` | L3 | Pass story/skill gate | Return to prep | Unlock next beat | `gates[]` |
| `INT_COMBAT` | L4 | Fight encounter | Retry / story-safe fail | Loot / beat advance | `encounters[]` |
| `INT_PUZZLE` | L4 | Solve environmental/logic | Hint budget | Flag / gate open | `puzzles[]` |
| `INT_MENU` | L1/L5 | Inventory, party, settings | N/A | Resume | `ui_flows[]` |
| `INT_STREAM` | L0 | Pause/resume/cloud save | Session error UX | Persist progress | `session[]` |

Every storyboard frame must cite ≥1 System ID. Orphan frames = NO.

### 3.5 Combat architecture

| Component | Spec |
|-----------|------|
| **Role** | Express tale conflict; not a length padder |
| **Pacing** | Encounter count from beat sheet combat tags |
| **Loop** | Select → Resolve → Feedback → Victory/Defeat branch |
| **Party** | Tale-faithful roles (attacker / support / defender as data — no fixed hero IDs) |
| **Encounter types** | Scripted story fight; optional side fight (beat-tagged only); tutorial fight |
| **Fail policy** | Story-safe retry or branch per beat; no soft-lock |
| **Balance inputs** | `combat_kits`, `enemy_defs`, `encounter_budget` (minutes + difficulty band) |
| **Presentation** | Locked art/anim/VFX/SFX from art pack only |

Combat does not invent characters or lore outside the story bible.

### 3.6 Content data model (YAML/JSON SSOT)

Prose explains; machines consume these files.

```yaml
# Illustrative shape — not a live SKU
sku:
  id: "sku_<country>_<tale_slug>_v<semver>"
  country: "<ISO>"
  tale_source: "<canonical name>"
  clearance: "PD|licensed"
  target_play_minutes: { min: 0, max: 0 }
  markets: ["<store/stream targets>"]

pillars: ["tale_fidelity", "story_paced_length", "smooth_story_agency", "factory_repeatable", "stream_multi_country"]

beats:
  - id: "B001"
    chapter: 1
    weight: 1.0
    systems: ["INT_TALK", "INT_GATE"]
    art_refs: ["storyboard/B001"]
    locale_keys: ["dlg.B001.*"]

gates:
  - id: "G_CH1_END"
    type: "story|combat|skill|locale"
    requires: ["B001"]
    unlocks: ["B002"]

encounters:
  - id: "E_CH1_BOSS"
    beat: "B00N"
    kit: "kit_standard_jrpg"
    budget_minutes: 3

scenes:
  - id: "SCN_01"
    pois: [{ id: "POI_A", systems: ["INT_EXAMINE"] }]

progression:
  endings: ["END_CANON"]

handoff:
  art_pack_hash: "<sha>"
  design_pack_hash: "<sha>"
  schema_version: "1.0.0"
```

**Rules:** Cursor 3.0 reads SSOT + locked art only. Schema version bumps require Tech Lead GO.

### 3.7 Art & audio

| Track | Deliverables | Lock rule |
|-------|--------------|-----------|
| **2D** | Concept, UI, icons, storyboard frames | Art GO before handoff |
| **3D** | Characters, props, environments, LODs | Art GO before handoff |
| **Animation** | Locomotion, combat, cinematic stubs | Art GO before handoff |
| **VFX** | Combat/impact/environment | Art GO before handoff |
| **VO** | Locked `dlg.*` script ([NON_ART §4](FACTORY_NON_ART_BEST_PRACTICES.md)) → recorded/locale packs | Script pack GO → Locale + Art GO |
| **BGM/SFX** | Theme, stingers, UI, combat bank | Art GO |
| **Locale art** | Fonts, layout, culture-safe variants | Locale GO |

Placeholders are internal art-factory tools only — never ship gates.

**Image gen:** draft-only under Art Factory Lead GO — not locked ship art without AD eyes-on.

**3D character pipeline (factory order):** text/concept brief → 2D draft (direction GO) → AI mesh draft (Tripo-class; credit-aware) → **remesh / retopo / UV before rig** → prerig check → rig → retarget presets (`idle`, `walk`, …) → Blender (real meters, apply transforms, weight peel, **cloth/coat proximity**, LODs) → export **GLB** → Godot **mid-stride** plates (walk + idle at 25/50/75%, front + side) → [game-ready checklist](team-knowledge/skills/game-ready-3d-guideline/SKILL.md) → **Art Lead GO/NO + why**.

| Guard | Rule |
|-------|------|
| Remesh timing | **Never remesh after rig** — destroys bones, weights, bindings |
| Ship tier | Never ship concept mesh, gait-reference mesh, or greybox as field hero |
| Live path | One live asset path per hero/prop; alternates stay **concept-only** |
| Locked identity | Prefer Blender polish on the locked ship mesh over new AI spend when visual identity is fixed |
| Concept ≠ ship | Never tip-import or field-ship concept or gait-reference binaries |
| AI 3D | Draft until game-ready checklist + plates + Art Lead GO |
| External anim/audio HQ | Mixamo / Adobe / Freesound full WAV → human Secure Form only (§4.1, §14) |

**Art/audio bounds + how-to:** [ART_FACTORY_SOP.md](ART_FACTORY_SOP.md) → [ART_OUTPUT_POLICY.md](ART_OUTPUT_POLICY.md) (agent bounds) → [AI_ART_BEST_PRACTICES.md](AI_ART_BEST_PRACTICES.md) + `team-knowledge/skills/` (`ai3d-to-godot-pipeline`, `game-ready-3d-guideline`, `coat-hero-anim-polish`, `mixamo-adobe-gate`, `freesound-full-wav-1to1`). **Non-art how-to:** [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) (includes §4 dialogue/VO scripts). Full milestone map: **§2.1**.

### 3.8 Game factory — Cursor 3.0

| Item | Spec |
|------|------|
| **Where** | Cursor 3.0 PM-automated game.dev factory (separate from Grok design/art/QA) |
| **Start policy** | **IDLE by default** — runs only when Stephen authorizes factory restart after handoff freeze (arts-before-dev) |
| **Inputs** | Frozen handoff: design pack + art pack + YAML/JSON SSOT + schema version |
| **Outputs** | Playable builds, logs, tip hashes |
| **Must not** | Invent story, art, combat lore, or change beat length without new Design GO |
| **Grok team role** | Author/maintain contracts, review build vs design, orchestrate QA — not write game.dev inside Cursor |
| **Implementer how-to (kit)** | [GAME_DEV_BEST_PRACTICES.md](GAME_DEV_BEST_PRACTICES.md) + [templates/GAME_DEV_SCORECARD.md](templates/GAME_DEV_SCORECARD.md) — procedural leaf; **Build tip GO not stamped in kit** |

### 3.9 QA levels

| Level | Scope | Evidence | Gate |
|-------|-------|----------|------|
| **Task** | Single asset/system ticket | Checklist + artifact | Task GO |
| **Sprint / phase regression** | Integration across L0–L5 | Automated + manual suite | Phase GO |
| **UAT** | Real play or recorded video through beat path | Playthrough evidence (no paper greens) | UAT GO |
| **Release** | Stream packaging, locale, ratings, soft-lock hunt | Release checklist | Release GO |
| **Live** | Crash/session/locale health | Telemetry + triage | Live health |

### 3.10 Multi-country & streaming

| Concern | Requirement |
|---------|-------------|
| **Tale selection** | One primary country tale per SKU; cultural notes in bible |
| **Locale** | Text/VO/UI/fonts per market; missing locale = gate NO |
| **Ratings** | PEGI/ESRB/market path started in Concept |
| **Streaming** | Short-session friendly chapters; cloud save; pause-safe combat |
| **Catalog** | Store metadata template per country; discoverability keywords from tale |
| **Compliance** | Human-only paid license / legal approvals |

---

## 4. Technical stack (right tool, right area)

Industrial defaults for a multi-title factory. Map **one primary tool family per area**. Tech Lead confirms before first SKU freeze. Not title-specific hero/content IDs.

### 4.1 Area → tools

| Area | Primary tools | Must not use for |
|------|---------------|------------------|
| **1. Story / narrative** | Docs + YAML beat/`dlg.*` dialogue SSOT; [NON_ART §§1–4](FACTORY_NON_ART_BEST_PRACTICES.md); research + PD clearance | Engine / game.dev |
| **2. Game design / data** | YAML/JSON schemas + validators; spreadsheet optional (tables → export YAML) | Live engine authoring as SSOT |
| **3. Art 2D** | Concept/UI (Figma or equivalent for UI SSOT); image gen **draft only** under AD GO | Locked ship art without AD GO; gen as sole final |
| **4. Art 3D / anim** | Concept/text → 2D draft → AI mesh (Tripo-class) → **remesh/retopo/UV before rig** → Blender weights/LODs/cloth proximity → GLB → mid-stride Godot plates → Art Lead GO/NO+why; [ART_FACTORY_SOP.md](ART_FACTORY_SOP.md) + `team-knowledge/skills/*`; Mixamo/Adobe **only** Stephen 1:1 Secure Form if used | Remesh **after** rig; dual live paths; concept/gait-ref as field hero; unattended paid Mixamo/Adobe; HQ-preview as full WAV |
| **5. Audio** | VO (ElevenLabs-class or recorded) + BGM/SFX library + **license ledger**; DAW/mix optional; Freesound-style HQ→full WAV needs **human login** | Unlicensed banks; bot-owned paid logins |
| **6. Game engine** | **Godot 4.x 3D** (**CONFIRMED** first-SKU engine): short JRPG + stream-friendly (light footprint, open license, fast iterate, handoff→build clarity) | Cursor inventing design/art; second parallel engine tip |
| **7. Game.dev automation** | Cursor 3.0 PM factory; CI for schema/asset refs; **dual tip locked** (design/art packs tip vs Cursor build tip — arts-before-dev) | Design/art/lore invention inside Cursor |
| **8. QA** | Automated schema/task checks + **real runtime UAT** (Godot play / video) | Paper greens as ship evidence |
| **9. Locale** | String tables + VO slots per market | Locale GO with missing critical strings/VO |
| **10. Stream / publish** | Packaging checklist ready; **platform names deferred to B0 Clearance** (Stephen names targets at Clearance) | Undefined perf / packaging without owner |
| **11. Orchestration** | Grok Bot team for design/art/QA; **humans** for paid license / sign-in | Agents on paid license or Secure Form logins |

**3D path law:** Single live path only (AI mesh draft → remesh/retopo/UV **before** rig → Blender polish → GLB → plates → GO). Abandon dual live paths; fix jacketed cloth / coat proximity in weights — do not maintain a second “live” mesh variant.

**Anim evidence law:** Locomotion GO requires mid-stride walk + idle plates in-engine — not bind-pose or A-pose stand-ins.

**Cursor law:** Cursor 3.0 agents implement **against frozen handoff only**.

### 4.2 Decision defaults

| Decision | Default |
|----------|---------|
| Engine | **CONFIRMED** Godot 4.x 3D (first-SKU) |
| 3D / anim pipeline | Single path → game-ready GLB |
| Image gen | Draft under AD GO only |
| Mixamo / Adobe / Freesound HQ download | Human Secure Form / login only |
| Monetization | **LOCKED** premium-only until Stephen reopens |
| Git tip model | **LOCKED** dual tip (design/art packs tip vs Cursor build tip) |
| Perf budget | Defined once per SKU class at Design/Tech GO |

### 4.3 Open decisions (stack)

**Locked in §17** (2026-10-19): engine, monetization, git dual tip, Story/GD seats separate, AD/Audio separate. **Still open:** stream **platform names** (deferred to B0 Clearance — checklist only until Stephen names targets); first SKU country/tale pick (Stephen).

---

## 5. Team structure & R&R

### 5.1 Structure

```
Stephen Chow (Product Owner)
    ├── Grok Bot (orchestration mouthpiece / agent lead)
    │     ├── Story Lead
    │     ├── Game Design Lead
    │     ├── Art Factory Lead
    │     ├── Tech Lead (contracts / schema / handoff)
    │     └── QA Lead
    ├── PM / Factory Lead (milestones, gates, cross-factory)
    └── Cursor 3.0 PM game.dev factory (consumes handoff only)
```

**Rooms:** Art Factory (Story + GD + Art) · Manufactory (PM + Tech + QA)  
**Game-dev agents** live in Cursor factory, not in chat craft loops.

**Communication:** Day-to-day **product** talk is **Stephen ↔ Grok Bot**; role agents report through Grok Bot for that latch. **Factory-kit** work in this repo (schemas, validators, idle-safe doc CAPAs) routes **Stephen ↔ Game Factory** on PRs; roles still do not open parallel truths. **STOP** parks entire team craft/CAPA until Stephen lifts.

### 5.2 Full R&R

| Role | Owns | Does | Does **not** own |
|------|------|------|------------------|
| **Stephen Chow** | Product vision, country/tale final pick, paid license & legal, Release GO, Live priority, STOP / restart factories | Sets objectives; approves clearance & spend; opens/closes milestones | Day-to-day craft; inventing unapproved lore; Cursor engine coding |
| **Grok Bot** | Orchestration, docs coherence, agent routing, single latch; block dual truths | Coordinates Story/GD/Art/QA; drafts plans; enforces rules in outputs | Paid license decisions; quiet conflicting craft; Cursor game.dev implementation |
| **Story Lead** | PD clearance log, story bible, beats, length, cultural fidelity, VO script truth | Selects/adapts cleared tales; maps length to beats; flags distortion risk | Engine code; combat balance numbers; art GO; game.dev |
| **Game Design Lead** | Pillars, L0–L5 binding, interaction table, combat/gates, MASTER_ASSET_LIST, plan, progression | Binds beats→systems; encounter/gate design; length integrity | Final tale pick; artistic GO; Cursor implementation; legal |
| **Art Factory Lead** | 2D/3D/anim/VFX/VO-pipeline/BGM packs; GO/NO + why; MASTER_ASSET_LIST fulfillment | Produces & locks art packs; reason-logs artistic GO/NO | Story canon changes; schema design; starting game factory |
| **PM / Factory Lead** | Board, milestone calendar, gate hygiene, Track A/B/C status, PM automation, Cursor handoff scheduling | One-live-milestone enforcement; cross-team blockers; release checklist; **idle-safe** doc/rules sync after PM+Tech PASS without re-asking Stephen | Creative canon; starting game.dev alone; unpaid legal override |
| **Tech Lead** | Engine constraints, SSOT schema, validators, handoff contract, tip/hash discipline | Schema versioning; Cursor contract clarity; build consumption rules | Artistic GO; story text; Stephen’s license calls |
| **QA Lead** | Task + phase regression; real UAT; evidence standards | Runs/records suites; blocks paper greens; live health triage signal | Inventing scope; changing design to “pass” tests |
| **Cursor 3.0 PM factory** | Game.dev automation from frozen handoff | Implements playable builds per contract | Story/art invention; opening new milestones; legal |

### 5.3 Automation handoff summary

| Stage | Automated drafting | Human / Stephen gate | Factory consumer |
|-------|--------------------|----------------------|------------------|
| Tale choose / length | Grok Story | Clearance + pick | — |
| Storyboard / GD / combat | Grok Story + GD | Design pack GO | — |
| Art / audio / locale | Art factory agents + Lead | Art / Locale GO | — |
| Game.dev | — | Handoff freeze | **Cursor 3.0 PM factory** |
| QA orchestration | Grok QA Lead agents | UAT / Release GO | Build under test |
| Publish / live | PM checklists | Stephen Release GO | Stream platforms |

---

## 6. Hard operating rules

| # | Rule | Enforcement |
|---|------|-------------|
| 1 | **One live milestone / sprint / phase** per SKU — only board `issue_pack_ref` is live; never stamp every pack as live | PM blocks parallel ship tracks |
| 2 | **One authority chain** — BOOT order wins; indexes only point at it; after GO/NO update tip/hash before next craft | Grok Bot latch; no dual truths |
| 3 | **Arts-before-dev** — game factory IDLE until art + handoff lock; Stephen authorizes Cursor restart | No Cursor consumption until Art pack GO |
| 4 | **Full GO/NO only** — Soft CI / CONDITIONAL / greybox-as-ship forbidden as exit gates | Phase law |
| 5 | **Output contract** every handoff: `status · why · paths · next · blocked_on` (+ versioned artifacts / hash/tip); field defs in [OUTPUT_CONTRACT.md](team-knowledge/OUTPUT_CONTRACT.md) | Reject incomplete exits; forbidden outputs per contract |
| 6 | **Human-only gates** — paid license, sign-in, factory restart / STOP, ratings submissions | Stephen (or designated human counsel) |
| 7 | **SSOT over prose** — Cursor reads YAML/JSON + locked packs; prose is explanatory | Tech Lead schema GO |
| 8 | **Length from story** — adjust beats, not grind, when duration misses band | GD Lead |
| 9 | **Factory split** — Grok = design/docs/art/QA orchestration; Cursor 3.0 = game.dev automation | Contract boundary |
| 10 | **Real UAT** — play or video evidence; paper greens = NO | QA Lead |
| 11 | **No orphan content** — every storyboard frame cites System ID(s) | Design pack GO |
| 12 | **Cite leaf docs**, not TOC hops; one tool matrix; no dual ship paths | Docs coherence |
| 13 | **Artistic why on every gate** — Art, Audio, and Design GO/NO log a short **why** | Art Factory Lead / QA Lead |
| 14 | **MASTER_ASSET_LIST ceiling** — at Design GO the list is scope ceiling; no ship assets invented outside it | GD Lead + Art Factory Lead |

---

## 7. Implementation tracks (aligned to kit steps)

Overview kit steps → tracks:

| Kit step | Track / milestone |
|----------|-------------------|
| 1. Factory kit — BOOT, R&R card, board schema, output contract | **A1** |
| 2. Story kit — folktale intake + PD checklist + length → beats → storyboard | **A3** (templates) + **B0–B1** |
| 2b. Dialogue / VO script kit — `dlg.*` line packs → script lock | **A3** §4 + **B2½** |
| 3. Design kit — combat/gates + asset list + schema | **A3** §§5–8, **A2** + **B2** |
| 4. Art factory runbook — lock pack + reason log | **A4** ([ART_FACTORY](ART_FACTORY_SOP.md) → [ART_OUTPUT_POLICY](ART_OUTPUT_POLICY.md) → [AI_ART](AI_ART_BEST_PRACTICES.md)) + **B3** |
| 5. Locale + handoff pack schema | **A7**, **A5**, **A2** + Locale GO |
| 6. Cursor 3.0 game factory hooks (PM automation) | **A5** + **B4** |
| 7. QA task + phase regression suite | **A6** + **B5** |
| 8. Publish + live ops runbook | **A7** + **B6** → **Track C** |

### Track A — Factory kit (reusable)

| Milestone | Deliverable | Exit |
|-----------|-------------|------|
| A1 | This document + phase/R&R/rules adopted | Kit baseline GO |
| A2 | Content schema `v1` (YAML/JSON) + validators — [schemas/](schemas/) + [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §8 | **Schema GO** ([KIT_GO_LOG.md](KIT_GO_LOG.md)) |
| A3 | Clearance → story → storyboard → **dialogue/VO scripts** → GD/combat → MASTER_ASSET_LIST — [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §§1–8 | **Template GO** ([KIT_GO_LOG.md](KIT_GO_LOG.md)) |
| A4 | [ART_FACTORY_SOP.md](ART_FACTORY_SOP.md) → [ART_OUTPUT_POLICY.md](ART_OUTPUT_POLICY.md) + [AI_ART_BEST_PRACTICES.md](AI_ART_BEST_PRACTICES.md) + `team-knowledge/skills/` ×5 + [MID_STRIDE_PLATE_CAMERA.md](templates/MID_STRIDE_PLATE_CAMERA.md) | **Art SOP GO** ([KIT_GO_LOG.md](KIT_GO_LOG.md)) |
| A5 | Cursor 3.0 handoff contract + smoke consumer checklist — [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §10 handoff/tip lock | **Contract GO** ([KIT_GO_LOG.md](KIT_GO_LOG.md)) |
| A6 | QA matrices (task / phase / UAT / release) — [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §§11–12 — **kit only, not SKU Phase QA GO** | **QA kit GO** ([KIT_GO_LOG.md](KIT_GO_LOG.md)) |
| A7 | Multi-country locale + stream/live ops checklist — [FACTORY_NON_ART_BEST_PRACTICES.md](FACTORY_NON_ART_BEST_PRACTICES.md) §§9, 12–13 | **Locale/stream kit GO** ([KIT_GO_LOG.md](KIT_GO_LOG.md)) |

### Track B — First SKU (prove the factory)

| Milestone | Deliverable | Exit |
|-----------|-------------|------|
| B0 | Clearance + country/tale pick (Stephen) | Clearance GO |
| B1 | Story bible + beat sheet + length band | Story GO |
| B2 | Storyboard + GD + combat/gates + SSOT fill | Design pack GO |
| B2½ | Dialogue / VO scripts (`dlg.*` lock) | Script pack GO (Story Lead) |
| B3 | Full art/audio/locale lock (VO batch after B2½) | Art pack GO + Locale GO |
| B4 | Handoff freeze → Cursor 3.0 build | Build tip GO |
| B5 | Task + phase QA + UAT playthrough | QA GO |
| B6 | Stream release for target markets | Release GO |

### Track C — Scale (N SKUs)

| Milestone | Deliverable | Exit |
|-----------|-------------|------|
| C1 | Parallel tale shortlist queue (cleared only) | Queue GO |
| C2 | Shared combat kits / UI kit / scene templates reuse | Reuse GO |
| C3 | Locale pipeline automation (string/VO slots) | Locale scale GO |
| C4 | Metrics loop: completion, drop-off by beat, country CTR | Live learning GO |
| C5 | Factory SLAs: days Concept→Release by SKU class | SLA GO |

**Dependency:** Track B uses Track A kit. Track C does not start until B6 Release GO (or Stephen explicitly opens a second SKU after B5 with written exception — still one live milestone **per SKU**).

---

## 8. Success metrics

| Metric | Target intent | Measured at |
|--------|---------------|-------------|
| **Tale recognition** | Players can name/recognize source country tale post-play (survey/UGC) | Live |
| **Story-paced completion** | Median completion within target play band; low “padded” abandon reason | Live + UAT |
| **Interaction coverage** | ≥95% beats bound to systems; 0 orphan frames at Design GO | Preprod |
| **Factory cycle time** | Concept→Release within SLA class (Track C) | Scale |
| **Art→build defect rate** | Defects from missing/unlocked art trending down SKU-over-SKU | QA |
| **Locale readiness** | 0 critical missing strings/VO for target markets at Release GO | Release |
| **Stream health** | Session start success, crash-free rate, pause/resume integrity | Live |
| **Automation ratio** | Increasing share of storyboard/GD/art tickets auto-drafted & validated | Track A/C |

---

## 9. Non-goals

- Not a live-service grind MMO or infinite battle pass.
- Not artificially long playtime via repetitive combat.
- Not Western-only or single-market exclusivity by default.
- Not Grok Bot writing Cursor 3.0 engine/game.dev implementation.
- Not shipping on placeholder/greybox art.
- Not unsupervised paid licensing or rights assumptions.
- Not paid commission / alternate vendor “Plan B” paths unless Stephen explicitly opens them.
- Not open-world scope creep beyond tale-faithful spaces.
- Not Tides of Urashima content, hero IDs, or SKU coupling in this baseline.
- Not engine-specific code in this plan.
- Not current Tides tip/docs restructure (separate STOP / latch).

---

## 10. Content schema v1

**Machine artifacts:** [schemas/content-pack.schema.json](schemas/content-pack.schema.json) (composes tale, beats, gates, scenes, encounters, dialogue, progression, storyboard, `handoff.lock`). Validators: `tools/validate-content-pack/` (see root `README.md`). **Track A2 Schema GO** stamped in [KIT_GO_LOG.md](KIT_GO_LOG.md) (2026-10-19); per-SKU schema bumps still need Tech Lead GO on `schema_version`.

Illustrative YAML below — **no live SKU data**. Machines consume the JSON Schema shape; prose elsewhere explains.

```yaml
# schema_version: "1.0.0"
tale:
  sku_id: "sku_<country>_<tale_slug>_v<semver>"
  country: "<ISO>"
  source_name: "<canonical tale>"
  clearance: "PD|licensed"
  target_play_minutes: { min: 0, max: 0 }
  markets: ["<stream/store>"]

beats:
  - id: "B001"
    chapter: 1
    weight: 1.0
    systems: ["INT_TALK", "INT_GATE"]
    scene: "SCN_01"
    art_refs: ["storyboard/B001"]
    dialogue_refs: ["dlg.B001.*"]
    locale_keys: ["dlg.B001.*"]

gates:
  - id: "G_CH1_END"
    type: "story|combat|skill|locale"
    requires: ["B001"]
    unlocks: ["B002"]

scenes:
  - id: "SCN_01"
    pois: [{ id: "POI_A", systems: ["INT_EXAMINE"] }]

encounters:
  - id: "E_CH1_BOSS"
    beat: "B00N"
    kit: "kit_standard_jrpg"
    budget_minutes: 3

dialogue:
  - key: "dlg.B001.open"
    speaker: "<role_id>"
    lines: ["<locale_key>"]

handoff.lock:
  art_pack_hash: "<sha>"
  design_pack_hash: "<sha>"
  schema_version: "1.0.0"
  tip: "<git tip or content tip id>"
  locked_at: "<ISO8601>"
```

**Rules:** Cursor 3.0 reads SSOT + locked art only. Schema bumps need Tech Lead GO. See also §3.6.

---

## 11. Definition of Done per phase

| Phase | DoD checklist (all required for GO) |
|-------|-------------------------------------|
| **Concept** | Country/tale shortlist logged; clearance PD or licensed path; ratings path started; license ledger row; length envelope; Concept pack GO logged |
| **Preprod** | Story bible + beat sheet GO; storyboard frames cite System IDs; GD pillars + gates/encounters filled; **`dlg.*` script pack GO**; MASTER_ASSET_LIST draft frozen as **scope ceiling** (no unlisted ship assets); schema draft; Design pack GO |
| **Art** | 2D/3D/anim/VFX/VO/BGM packs complete; locale text/VO/UI/fonts for target markets; reason-logged Art pack GO + Locale GO; **full lock before game.dev** |
| **Game prod** | Handoff.lock present (hashes + schema_version); Cursor consumes frozen pack only; playable build tip; Build tip GO |
| **QA** | Task + phase regression green; real UAT play/video through beat path; 0 orphan frames; soft-lock hunt done; Phase QA GO |
| **Release** | Stream packaging; store listings; ratings filed; locale critical = 0; Release GO (Stephen) |
| **Live** | Telemetry live; crash/session health within band; hotfix vs new-tale queue clear; Live health GO |

---

## 12. Risk register

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| **Clearance** (rights/PD fail late) | M | H | Clearance GO before Preprod; human license ledger; no tale invent |
| **Art slip** (pack incomplete at lock) | M | H | Arts-before-dev; full GO/NO only; no greybox ship |
| **Stream cert** (packaging/perf reject) | M | H | Perf budget at Design/Tech GO; Stephen owns platform target |
| **Locale gap** (critical string/VO miss) | M | H | Locale GO blocks Release; string/VO slot checklist |
| **Dual-path** (two live asset or tip truths) | L | H | Single 3D path; one live milestone; one authority chain |
| **Soft CI drift** (CONDITIONAL as ship gate) | M | H | Phase law: Soft CI / CONDITIONAL / greybox-as-ship forbidden |

---

## 13. First-SKU acceptance criteria

Measurable bars for **Release GO** (Track B6). Paper greens = NO.

| Criterion | Pass bar |
|-----------|----------|
| **Completion band** | Median UAT completion within SKU `target_play_minutes` min–max |
| **Orphan frames** | **0** storyboard frames without System ID at Design GO and at Release |
| **Locale critical** | **0** missing critical strings/VO for target markets |
| **UAT evidence** | Real play **or** recorded video through primary beat path required |
| **Handoff lock** | `handoff.lock` hashes match shipped art/design packs |
| **Crash / soft-lock** | No known soft-lock on primary path; crash-free UAT session |

---

## 14. Security / secrets

| Rule | Spec |
|------|------|
| **Paid API keys** | Humans hold and rotate; agents never store or own paid keys |
| **Secure Form / paid logins** | Mixamo, Adobe, Freesound HQ, store consoles — **human login only**; agents never own these sessions |
| **License ledger** | Every paid/cleared asset logged (source, scope, expiry, owner); human maintains |
| **Handoff secrets** | No credentials in YAML/JSON SSOT or art packs |
| **Factory restart / STOP** | Stephen (or designated human) only |
| **Mixamo / Adobe** | Animation download/login = Stephen **1:1 Secure Form** only; no group-room workaround |
| **Freesound full WAV** | HQ preview GO does not substitute for full WAV — human login; do not tip-import preview as full WAV |
| **Plan B commissions** | Paid commission / alternate vendor paths stay **off** unless Stephen explicitly opens them |

---

## 15. Asset naming + folder convention

| Token | Pattern | Example |
|-------|---------|---------|
| SKU | `sku_<country>_<tale_slug>_v<semver>` | `sku_jp_example_v0.1.0` |
| Beat | `B###` | `B001` |
| Scene | `SCN_##` | `SCN_01` |
| Encounter | `E_<chapter>_<role>` | `E_CH1_BOSS` |
| Gate | `G_<scope>` | `G_CH1_END` |
| Dialogue key | `dlg.<beat>.*` | `dlg.B001.open` |

**Art pack layout (sketch):**

```
art_packs/<sku_id>/
  2d/          # UI, icons, storyboard
  3d/          # characters, props, envs → GLB
  anim/        # locomotion, combat, cinematics
  vfx/
  audio/       # bgm, sfx, vo/<locale>
  locale/      # fonts, layout variants
  MANIFEST.yaml
```

No title-specific hero IDs in baseline names.

---

## 16. Telemetry events

Event envelope schema: [schemas/telemetry.events.schema.json](schemas/telemetry.events.schema.json) (store/SDK wiring **TBD**).

- `session_start`
- `beat_enter`
- `gate_fail`
- `combat_end`
- `ending`
- `crash`

---

## 17. Open decisions

| Decision | Status |
|----------|--------|
| **Engine** — Godot 4.x 3D as first-SKU | **CONFIRMED** (2026-10-19) |
| **Git tip** — dual tip vs single tip (design packs vs Cursor builds) | **LOCKED** dual tip (design/art packs tip vs Cursor build tip) — matches arts-before-dev |
| **Stream packaging** — platform targets | **DEFERRED** to first-SKU **B0 Clearance** — [STREAM_PACKAGING_CHECKLIST.md](templates/STREAM_PACKAGING_CHECKLIST.md) ready; Stephen names platforms at Clearance (no invented platform names in kit) |
| **Monetization** — premium-only vs later IAP | **LOCKED** premium-only until Stephen reopens |
| Merge Story + GD into one seat? | **NO** — keep Story Lead and GD Lead separate (§5 R&R) |
| Keep AD and Audio separate under Art Factory Lead? | **YES** — keep art-director + audio-mix role briefs separate |
| First SKU country / tale pick | **Open** — Stephen (Track B0) |

Kit-level GO evidence: [KIT_GO_LOG.md](KIT_GO_LOG.md).

---

## 18. Document control

| Field | Value |
|-------|-------|
| Path | `docs/FACTORY_MASTER_PLAN.md` |
| Version | v1 |
| **Updated** | 2026-10-19 (HKT) — §17 locks; Track A kit GO log; A4 skills depth + mid-stride plate template |
| **Supersedes** | `JRPG_AUTO_FACTORY_V0.md` (aka Overview / FACTORY_OVERVIEW) and `IMPLEMENTATION_PLAN_AND_GD_ARCHITECTURE.md` — this file is the **single SSOT plan** |
| Change control | PM + Tech Lead propose; Stephen approves objective/rule changes |
| Next kit action | **Track B0** Clearance (Stephen: country/tale + stream platform names); SKU GOs in [KIT_GO_LOG.md](KIT_GO_LOG.md) **BLOCKED** section — no Build tip / Phase QA / UAT / Release stamp without live SKU |

---

*End of Master Plan v1.*
