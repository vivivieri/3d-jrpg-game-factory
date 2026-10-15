# 3D JRPG Auto Game Factory — High-Level Plan (v0)

**Status:** Draft for future titles (not Tides of Urashima)  
**Product orchestration mouthpiece:** Grok Bot (day-to-day latch)  
**Factory-kit craft (this repo):** Game Factory (Cursor Cloud Agent) — schemas, validators, idle-safe docs  
**Audience:** Stephen + Grok Bot team + Game Factory on kit PRs  
**Updated:** 2026-10-14

**Note:** [Master Plan v1](FACTORY_MASTER_PLAN.md) at `docs/FACTORY_MASTER_PLAN.md` is now the **single SSOT plan** for the factory. This Overview remains a short map; use the Master Plan for phases, R&R, rules, and tracks.

---

## Objective

1. Build a **3D JRPG game factory** that ships titles to **streaming platforms** for **multi-country** audiences.
2. Share **other countries’ traditional folktales / fairy tales** through playable stories.
3. Deliver **smooth storytelling** with player interaction (combat, gates, exploration, etc.).
4. Keep **session length** appropriate to the tale (not artificially long).
5. Run **near-full automation**: tale choice → length → storyboard → game design → combat → art → game.dev → QA → publish.

---

## Pipeline (strict order)

```
Clearance → Story → Storyboard / GD / Plan → Art factory → Locale
    → Handoff pack → Game factory (Cursor 3.0) → QA → Publish → Live ops
```

**Hard rule:** Game factory does not start until Art factory lock (full GO/NO). One live phase only.

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

### 4. Art factory
- 2D, 3D, movement animation, script presentation, VO, BGM
- **All art finished first** — full GO/NO only (no Soft CI / CONDITIONAL / greybox-as-ship)
- Every artistic GO/NO logs **why**  
**Exit:** Locked art pack + reason log

### 5. Locale pack
- Text / VO / UI / fonts per market  
**Exit:** Locale GO for target countries

### 6. Handoff contract
- Frozen art + design + data tables the **Cursor 3.0 game factory** may read
- Machine-readable SSOT (YAML/JSON) preferred over prose-only  
**Exit:** Handoff pack hash / tip lock

### 7. Game factory
- Separate factory: **Cursor 3.0 AI agents** under PM automation
- Consumes handoff pack only; does not invent art or story  
**Exit:** Playable build(s)

### 8. QA
- **Task-level** checks
- **Sprint / phase regression** to catch integration breaks
- Real UAT (real game run / video — no paper greens)  
**Exit:** Phase QA GO

### 9. Publish
- Stream platform packaging, multi-country store listing  
**Exit:** Live catalog entry

### 10. Live ops
- Versioning, hotfix vs new-tale queue  
**Exit:** Stable live + next tale scheduled (optional)

---

## Team structure (future)

| Seat | Owns | Does not own |
|------|------|----------------|
| **Stephen** | Tale/country pick, markets, paid licenses, STOP / restart factories | Day-to-day craft |
| **Grok Bot** | Product mouthpiece; single latch; block dual truths | Quiet conflicting craft |
| **Game Factory** | Factory-kit craft in this repo (schemas, validators, docs) | Product latch; engine code |
| **Story Lead** | PD clearance log, story bible, beats, length | Engine code, art GO |
| **Game Design Lead** | Systems, combat/gates, MASTER_ASSET_LIST, plan | Artistic GO |
| **Art Factory Lead** | 2D/3D/anim + VO/BGM; GO/NO + why | Starting game factory |
| **PM / Factory Lead** | Board, PM automation, Cursor handoff | Starting game.dev alone |
| **Tech Lead** | Engine constraints, gates game factory may consume | Artistic GO |
| **QA Lead** | Task + phase regression; real UAT | Inventing scope |

**Rooms:** Art Factory (Story + GD + Art) · Manufactory (PM + Tech + QA)  
**Game-dev agents** live in Cursor factory, not in chat craft loops.

---

## R&R and operating rules

- **One live sprint / phase** — only board `issue_pack_ref` is live
- **One authority chain** — BOOT order wins; indexes only point at it
- **Arts-before-dev** — game factory IDLE until art + handoff lock
- **Full GO/NO only** — Soft CI / CONDITIONAL forbidden
- **Output contract** every handoff: `status · why · paths · next · blocked_on`
- **Human-only gates:** paid license, sign-in, factory restart / STOP
- **Cite leaf docs**, not TOC hops; one tool matrix; no dual ship paths

---

## Phased build of the factory kit itself

1. Factory kit — BOOT, R&R card, board schema, output contract  
2. Story kit — folktale intake + PD checklist + length → beats → storyboard  
3. Design kit — combat/gates + asset list  
4. Art factory runbook — lock pack + reason log  
5. Locale + handoff pack schema  
6. Cursor 3.0 game factory hooks (PM automation)  
7. QA task + phase regression suite  
8. Publish + live ops runbook  

---

## Out of scope for this doc

- Current Tides of Urashima tip/docs restructure (separate STOP / latch)
- Engine-specific code

---

## Open decisions

- Merge Story + GD into one seat?  
- Keep AD and Audio separate under Art Factory Lead?  
- Monetization: premium-only vs later IAP (default: premium-only until stated)

Team knowledge pack: [docs/team-knowledge/README.md](team-knowledge/README.md)
