# 3D JRPG Auto Game Factory — High-Level Plan (v0)

**Status:** Draft map for future titles (not Tides of Urashima) — **not** the SSOT plan  
**Owner mouthpiece:** Grok Bot (product) · Game Factory (this repo kit)  
**Audience:** Stephen + Grok Bot team + factory-kit agents  
**Updated:** 2026-10-15 (HKT)

**Note:** [Master Plan v1](FACTORY_MASTER_PLAN.md) at `docs/FACTORY_MASTER_PLAN.md` is the **single SSOT plan** for phases, R&R, rules, and tracks. This Overview is a short map only; [BOOT.md](BOOT.md) defines authority order. Track A status: [KIT_STATUS.md](KIT_STATUS.md).

---

## Objective

1. Build a **3D JRPG game factory** that ships titles to **streaming platforms** for **multi-country** audiences.
2. Share **other countries’ traditional folktales / fairy tales** through playable stories.
3. Deliver **smooth storytelling** with player interaction (combat, gates, exploration, dialogue, etc.).
4. Keep **session length** appropriate to the tale (not artificially long).
5. Run **near-full automation**: tale choice → length → storyboard → game design → combat → art → game.dev → QA → publish.

---

## Pipeline (strict order)

```
Clearance → Story → Storyboard / GD / Plan → Dialogue/VO scripts (dlg.* lock)
    → Art factory → Locale → Handoff pack → Game factory (Cursor 3.0) → QA → Publish → Live ops
```

**Hard rule:** Game factory does not start until Art factory lock (full GO/NO). One live phase only. Script pack GO (`dlg.*` lock) precedes VO batch and locale expand (Master Plan §2).

---

## Components

### 1. Clearance (legal gate)
- Folktale / fairy tale **public-domain or cleared** rights
- Ratings path (PEGI / ESRB / market equivalents)
- License ledger for any paid assets or VO tools  
**Exit:** Clearance GO (human if paid license)

### 2. Story
- Source: traditional folktale / fairy tale of a target country
- Reason logged: why non-licensed / PD-safe
- Target play length derived from the tale  
**Exit:** Story bible + beat sheet GO

### 3. Storyboard, game design, implementation plan
- AI agents (Grok Bot team) draft storyboard, systems, combat/gates, interaction beats
- MASTER_ASSET_LIST from storyboard
- Implementation plan for factories  
**Exit:** Design pack GO (Design Lead)

### 4. Dialogue / VO scripts
- Beat-scoped **`dlg.*` line packs** (YAML/JSON SSOT — not screenplay prose)
- Source-locale text locked before VO recording and translation  
**Exit:** Script pack GO (Story Lead)

### 5. Art factory
- 2D, 3D, movement animation, script presentation, VO, BGM
- **All art finished first** — full GO/NO only (no Soft CI / CONDITIONAL / greybox-as-ship)
- Every artistic GO/NO logs **why**  
**Exit:** Locked art pack + reason log

### 6. Locale pack
- Text / VO / UI / fonts per market (after script lock)  
**Exit:** Locale GO for target countries

### 7. Handoff contract
- Frozen art + design + data tables the **Cursor 3.0 game factory** may read
- Machine-readable SSOT (YAML/JSON) preferred over prose-only  
**Exit:** Handoff pack hash / tip lock

### 8. Game factory
- Separate factory: **Cursor 3.0 AI agents** under PM automation
- Consumes handoff pack only; does not invent art or story  
**Exit:** Playable build(s)

### 9. QA
- **Task-level** checks
- **Sprint / phase regression** to catch integration breaks
- Real UAT (real game run / video — no paper greens)  
**Exit:** Phase QA GO

### 10. Publish
- Stream platform packaging, multi-country store listing  
**Exit:** Live catalog entry

### 11. Live ops
- Versioning, hotfix vs new-tale queue  
**Exit:** Stable live + next tale scheduled (optional)

---

## Team structure (future)

| Seat | Owns | Does not own |
|------|------|----------------|
| **Stephen** | Tale/country pick, markets, paid licenses, STOP / restart factories | Day-to-day craft |
| **Grok Bot** | Product mouthpiece; single latch; block dual truths | Quiet conflicting craft |
| **Story Lead** | PD clearance log, story bible, beats, length, **`dlg.*` script lock** | Engine code, art GO |
| **Game Design Lead** | Systems, combat/gates, MASTER_ASSET_LIST, plan | Artistic GO |
| **Art Factory Lead** | 2D/3D/anim + VO/BGM; GO/NO + why | Starting game factory |
| **PM / Factory Lead** | Board, PM automation, Cursor handoff | Starting game.dev alone |
| **Tech Lead** | Engine constraints, **schemas/validators**, handoff contract | Artistic GO |
| **QA Lead** | Task + phase regression; real UAT | Inventing scope |

**Rooms:** Art Factory (Story + GD + Art) · Manufactory (PM + Tech + QA)  
**Game-dev agents** live in Cursor factory, not in chat craft loops.

Full R&R: Master Plan [§5.2](FACTORY_MASTER_PLAN.md#52-full-rr).

---

## R&R and operating rules

- **One live sprint / phase** — only board `issue_pack_ref` is live
- **One authority chain** — [BOOT](BOOT.md) order wins; indexes only point at it
- **Arts-before-dev** — game factory IDLE until art + handoff lock
- **Full GO/NO only** — Soft CI / CONDITIONAL forbidden
- **Output contract** every handoff: `status · why · paths · next · blocked_on`
- **Human-only gates:** paid license, sign-in, factory restart / STOP
- **Cite leaf docs**, not TOC hops; one tool matrix; no dual ship paths

---

## Phased build of the factory kit itself (Track A)

| Step | Track | Status (see [KIT_STATUS.md](KIT_STATUS.md)) |
|------|-------|-----------------------------------------------|
| 1. Factory kit — BOOT, R&R, board schema, output contract | **A1** | Done (this repo) |
| 2. Content schema v1 + validators | **A2** | Present; **Schema GO pending** (Tech Lead) |
| 3. Story kit — folktale intake + PD + length → beats → storyboard | **A3** | Partial |
| 3b. Dialogue / VO script kit — `dlg.*` line packs → script lock | **A3** §4 + **B2½** | Partial (NON_ART §4) |
| 4. Design kit — combat/gates + asset list + schema consumption | **A3** §§5–8, **A2** | Partial |
| 5. Art factory runbook — lock pack + reason log | **A4** | Partial |
| 6. Locale + handoff pack schema | **A5**, **A7**, **A2** | Partial |
| 7. Cursor 3.0 game factory hooks (PM automation) | **A5** + **B4** | Partial |
| 8. QA task + phase regression suite | **A6** | Partial |
| 9. Publish + live ops runbook | **A7** | Partial |

Schemas: [docs/schemas/](schemas/) · validators: `tools/validate-content-pack/` (root [README.md](../README.md)).  
Fillable kits: [docs/templates/README.md](templates/README.md) (Track A3–A7 — **GO stamps not in templates**).

---

## Out of scope for this doc

- Current Tides of Urashima tip/docs restructure (separate STOP / latch)
- Engine-specific code

---

## Open decisions

Aligned with Master Plan [§17](FACTORY_MASTER_PLAN.md#17-open-decisions) — do not assume Stephen has decided:

| Decision | Status |
|----------|--------|
| **Engine** — confirm Godot 4.x 3D as first-SKU (vs alternate) | Defaulted Godot; **not confirmed** |
| **Git tip** — dual tip vs single tip (design packs vs Cursor builds) | **Undecided** — Tech Lead |
| **Stream packaging** — platform targets | **Undecided** — Stephen |
| **Monetization** — premium-only vs later IAP | Default **premium-only** until Stephen states otherwise |
| Merge Story + GD into one seat? | Undecided |
| Keep AD and Audio separate under Art Factory Lead? | Undecided |
| First SKU country/tale pick | Out of scope for kit repo |

Team knowledge pack: [docs/team-knowledge/README.md](team-knowledge/README.md)
