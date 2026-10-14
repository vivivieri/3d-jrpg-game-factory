# 3D JRPG Auto Game Factory — Master Plan (v1)

**Status:** Single SSOT industrial plan (future titles; not Tides of Urashima)  
**Product owner:** Stephen Chow  
**Orchestration mouthpiece:** Grok Bot  
**Audience:** Stephen + Grok Bot design/docs/art/QA team + Cursor 3.0 PM game.dev factory  
**Updated:** 2026-10-14 (HKT)

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
Clearance → Story → Storyboard / GD / Plan → Art factory → Locale
    → Handoff pack → Game factory (Cursor 3.0) → QA → Publish → Live ops
```

Industrial framing (same pipeline, phase names for calendar/gates):

```
Concept → Pre-production → Art production → Game production → QA → Release → Live ops
```

| Phase | Pipeline steps | Purpose | Primary owners | Exit gate (GO/NO only) |
|-------|----------------|---------|----------------|------------------------|
| **Concept** | Clearance | Country/tale shortlist, audience, platform, length envelope; PD/cleared rights; ratings path; license ledger | Stephen, Story Lead, PM | Clearance / Concept pack GO |
| **Pre-production** | Story → Storyboard / GD / Plan | Story bible, beat sheet, storyboard, GD pillars, combat/gates, MASTER_ASSET_LIST, data model + handoff contract drafts | Story Lead, GD Lead, Tech Lead, PM | Design pack GO |
| **Art production** | Art factory → Locale | 2D/3D/anim/VO/BGM/UI; locale text/VO/UI/fonts; **full lock before any game.dev** | Art Factory Lead, Story Lead (VO script), PM | Art pack GO + Locale GO |
| **Game production** | Handoff → Cursor 3.0 | Frozen handoff consumed; playable SKU built | Tech Lead (contract), Cursor 3.0 PM factory | Build tip GO |
| **QA** | QA | Task-level + sprint/phase regression + real UAT (play/video) | QA Lead, PM | Phase QA GO |
| **Release** | Publish | Stream packaging, store listings, ratings, multi-country catalog | PM, Tech Lead | Release GO |
| **Live ops** | Live ops | Versioning, hotfix vs new-tale queue, audience metrics | PM, QA Lead, Stephen | Live health GO / next milestone open |

**Phase law:** Later phase does not start until prior exit is **GO** with logged reason. Soft CI, CONDITIONAL, and greybox-as-ship are forbidden as ship gates.

### Component exits (detail)

| Step | Exit |
|------|------|
| Clearance | Clearance GO (human if paid license) |
| Story | Story bible + beat sheet GO |
| Storyboard / GD / Plan | Design pack GO (Design Lead) |
| Art factory | Locked art pack + reason log (full GO/NO only) |
| Locale | Locale GO for target countries |
| Handoff | Handoff pack hash / tip lock (YAML/JSON SSOT preferred) |
| Game factory | Playable build(s) |
| QA | Phase QA GO |
| Publish | Live catalog entry |
| Live ops | Stable live + next tale scheduled (optional) |

---

## 3. Game design architecture

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
                     Storyboard frames
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
| **VO** | Cleared script → recorded/locale packs | Locale + Art GO |
| **BGM/SFX** | Theme, stingers, UI, combat bank | Art GO |
| **Locale art** | Fonts, layout, culture-safe variants | Locale GO |

Placeholders are internal art-factory tools only — never ship gates.

### 3.8 Game factory — Cursor 3.0

| Item | Spec |
|------|------|
| **Where** | Cursor 3.0 PM-automated game.dev factory (separate from Grok design/art/QA) |
| **Inputs** | Frozen handoff: design pack + art pack + YAML/JSON SSOT + schema version |
| **Outputs** | Playable builds, logs, tip hashes |
| **Must not** | Invent story, art, combat lore, or change beat length without new Design GO |
| **Grok team role** | Author/maintain contracts, review build vs design, orchestrate QA — not write game.dev inside Cursor |

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

## 4. Team structure & R&R

### 4.1 Structure

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

### 4.2 Full R&R

| Role | Owns | Does | Does **not** own |
|------|------|------|------------------|
| **Stephen Chow** | Product vision, country/tale final pick, paid license & legal, Release GO, Live priority, STOP / restart factories | Sets objectives; approves clearance & spend; opens/closes milestones | Day-to-day craft; inventing unapproved lore; Cursor engine coding |
| **Grok Bot** | Orchestration, docs coherence, agent routing, single latch; block dual truths | Coordinates Story/GD/Art/QA; drafts plans; enforces rules in outputs | Paid license decisions; quiet conflicting craft; Cursor game.dev implementation |
| **Story Lead** | PD clearance log, story bible, beats, length, cultural fidelity, VO script truth | Selects/adapts cleared tales; maps length to beats; flags distortion risk | Engine code; combat balance numbers; art GO; game.dev |
| **Game Design Lead** | Pillars, L0–L5 binding, interaction table, combat/gates, MASTER_ASSET_LIST, plan, progression | Binds beats→systems; encounter/gate design; length integrity | Final tale pick; artistic GO; Cursor implementation; legal |
| **Art Factory Lead** | 2D/3D/anim/VFX/VO-pipeline/BGM packs; GO/NO + why; MASTER_ASSET_LIST fulfillment | Produces & locks art packs; reason-logs artistic GO/NO | Story canon changes; schema design; starting game factory |
| **PM / Factory Lead** | Board, milestone calendar, gate hygiene, Track A/B/C status, PM automation, Cursor handoff scheduling | One-live-milestone enforcement; cross-team blockers; release checklist | Creative canon; starting game.dev alone; unpaid legal override |
| **Tech Lead** | Engine constraints, SSOT schema, validators, handoff contract, tip/hash discipline | Schema versioning; Cursor contract clarity; build consumption rules | Artistic GO; story text; Stephen’s license calls |
| **QA Lead** | Task + phase regression; real UAT; evidence standards | Runs/records suites; blocks paper greens; live health triage signal | Inventing scope; changing design to “pass” tests |
| **Cursor 3.0 PM factory** | Game.dev automation from frozen handoff | Implements playable builds per contract | Story/art invention; opening new milestones; legal |

### 4.3 Automation handoff summary

| Stage | Automated drafting | Human / Stephen gate | Factory consumer |
|-------|--------------------|----------------------|------------------|
| Tale choose / length | Grok Story | Clearance + pick | — |
| Storyboard / GD / combat | Grok Story + GD | Design pack GO | — |
| Art / audio / locale | Art factory agents + Lead | Art / Locale GO | — |
| Game.dev | — | Handoff freeze | **Cursor 3.0 PM factory** |
| QA orchestration | Grok QA Lead agents | UAT / Release GO | Build under test |
| Publish / live | PM checklists | Stephen Release GO | Stream platforms |

---

## 5. Hard operating rules

| # | Rule | Enforcement |
|---|------|-------------|
| 1 | **One live milestone / sprint / phase** per SKU — only board `issue_pack_ref` is live | PM blocks parallel ship tracks |
| 2 | **One authority chain** — BOOT order wins; indexes only point at it | Grok Bot latch; no dual truths |
| 3 | **Arts-before-dev** — game factory IDLE until art + handoff lock | No Cursor consumption until Art pack GO |
| 4 | **Full GO/NO only** — Soft CI / CONDITIONAL / greybox-as-ship forbidden as exit gates | Phase law |
| 5 | **Output contract** every handoff: `status · why · paths · next · blocked_on` (+ versioned artifacts / hash/tip) | Reject incomplete exits |
| 6 | **Human-only gates** — paid license, sign-in, factory restart / STOP, ratings submissions | Stephen (or designated human counsel) |
| 7 | **SSOT over prose** — Cursor reads YAML/JSON + locked packs; prose is explanatory | Tech Lead schema GO |
| 8 | **Length from story** — adjust beats, not grind, when duration misses band | GD Lead |
| 9 | **Factory split** — Grok = design/docs/art/QA orchestration; Cursor 3.0 = game.dev automation | Contract boundary |
| 10 | **Real UAT** — play or video evidence; paper greens = NO | QA Lead |
| 11 | **No orphan content** — every storyboard frame cites System ID(s) | Design pack GO |
| 12 | **Cite leaf docs**, not TOC hops; one tool matrix; no dual ship paths | Docs coherence |

---

## 6. Implementation tracks (aligned to kit steps)

Overview kit steps → tracks:

| Kit step | Track / milestone |
|----------|-------------------|
| 1. Factory kit — BOOT, R&R card, board schema, output contract | **A1** |
| 2. Story kit — folktale intake + PD checklist + length → beats → storyboard | **A3** (templates) + **B0–B1** |
| 3. Design kit — combat/gates + asset list | **A3** + **B2** |
| 4. Art factory runbook — lock pack + reason log | **A4** + **B3** |
| 5. Locale + handoff pack schema | **A2**, **A5**, **A7** + Locale GO |
| 6. Cursor 3.0 game factory hooks (PM automation) | **A5** + **B4** |
| 7. QA task + phase regression suite | **A6** + **B5** |
| 8. Publish + live ops runbook | **A7** + **B6** → **Track C** |

### Track A — Factory kit (reusable)

| Milestone | Deliverable | Exit |
|-----------|-------------|------|
| A1 | This document + phase/R&R/rules adopted | Kit baseline GO |
| A2 | Content schema `v1` (YAML/JSON) + validators | Schema GO |
| A3 | Storyboard → MASTER_ASSET_LIST → handoff pack templates | Template GO |
| A4 | Art factory SOP (2D/3D/anim/VO/BGM) + GO/NO reason log format | Art SOP GO |
| A5 | Cursor 3.0 handoff contract + smoke consumer checklist | Contract GO |
| A6 | QA matrices (task / phase / UAT / release) | QA kit GO |
| A7 | Multi-country locale + stream packaging checklist | Locale/stream kit GO |

### Track B — First SKU (prove the factory)

| Milestone | Deliverable | Exit |
|-----------|-------------|------|
| B0 | Clearance + country/tale pick (Stephen) | Clearance GO |
| B1 | Story bible + beat sheet + length band | Story GO |
| B2 | Storyboard + GD + combat/gates + SSOT fill | Design pack GO |
| B3 | Full art/audio/locale lock | Art pack GO |
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

## 7. Success metrics

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

## 8. Non-goals

- Not a live-service grind MMO or infinite battle pass.
- Not artificially long playtime via repetitive combat.
- Not Western-only or single-market exclusivity by default.
- Not Grok Bot writing Cursor 3.0 engine/game.dev implementation.
- Not shipping on placeholder/greybox art.
- Not unsupervised paid licensing or rights assumptions.
- Not open-world scope creep beyond tale-faithful spaces.
- Not Tides of Urashima content, hero IDs, or SKU coupling in this baseline.
- Not engine-specific code in this plan.
- Not current Tides tip/docs restructure (separate STOP / latch).

---

## 9. Open decisions

- Merge Story + GD into one seat?
- Keep AD and Audio separate under Art Factory Lead?
- Monetization: premium-only vs later IAP (**default: premium-only until stated**)

---

## 10. Document control

| Field | Value |
|-------|-------|
| Path | `/workspace/factory-kit/FACTORY_MASTER_PLAN.md` |
| Version | v1 |
| **Supersedes** | `JRPG_AUTO_FACTORY_V0.md` (aka Overview / FACTORY_OVERVIEW) and `IMPLEMENTATION_PLAN_AND_GD_ARCHITECTURE.md` — this file is the **single SSOT plan** |
| Change control | PM + Tech Lead propose; Stephen approves objective/rule changes |
| Next kit action | Track A2 — content schema `v1` + validators |

---

*End of Master Plan v1.*
