# Factory operating SOP — single day-one runbook (Track A)

**Status:** Procedural leaf — **not** a GO stamp.  
**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (phases, R&R, §6 hard rules, §17 open decisions).  
**This document:** Tells an agent or human **which leaf to open next** at each pipeline phase. It does **not** add laws or stamp Schema GO, Art SOP GO, Contract GO, Phase QA GO, UAT GO, or Release GO.

---

## 1. Authority order

Obey [BOOT.md](./BOOT.md) — lower items never override higher items.

| Order | Authority | Role |
|------:|-----------|------|
| 1 | [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) | SSOT laws and gates |
| 2 | [BOOT.md](./BOOT.md) | Navigation / latch |
| 3 | [team-knowledge/OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md) | Handoff fields |
| 4 | Leaf SOPs (NON_ART, AI_ART, ART_FACTORY, ART_QA, GAME_QA, this file) | How-to only |
| 5 | Indexes ([FACTORY_OVERVIEW.md](./FACTORY_OVERVIEW.md), [KIT_STATUS.md](./KIT_STATUS.md), [templates/README.md](./templates/README.md)) | Pointers only |

**Operating entry:** Start here for day-one routing; cite Master Plan when a gate is in dispute.

---

## 2. Hard laws (short block — full text in Master Plan §6)

| Law | Operate as |
|-----|------------|
| **Arts-before-dev** | Cursor / `game.dev` stays **IDLE** until art pack GO + handoff lock + Stephen authorizes factory restart — no bypass |
| **Soft CI / CONDITIONAL** | **Forbidden** — only full **GO** or **NO** |
| **Output contract** | Every handoff: `status · why · paths · next · blocked_on` |
| **One live milestone** | Board `issue_pack_ref` only — no dual truths |
| **Human-only gates** | Paid license, sign-in, STOP/restart factories, Release GO — see §7 |
| **Paper greens** | PASS without artifact on disk = **NO** (ART_QA PACK-004, GAME_QA EVD-001) |
| **Workability** | No case without evidence path; N/A only with `why`; Critical fail blocks roll-up ([GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) §2.1) |

---

## 3. End-to-end pipeline (phase → leaf → templates → exit → owner)

Copy fillable templates from [templates/README.md](./templates/README.md) into `content/<SKU>/...` — never PASS in repo template originals.

| Phase | Inputs (must exist) | How-to leaf | Fillable templates | Exit gate (human stamp **not** in kit) | Owner |
|-------|---------------------|-------------|-------------------|----------------------------------------|-------|
| **Clearance** | Tale pick, PD status | [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) §1 | [CLEARANCE_PD_LICENSE_LEDGER.md](./templates/CLEARANCE_PD_LICENSE_LEDGER.md) | Clearance logged | Story Lead |
| **Story** | Cleared source, length band | NON_ART §2 | [STORY_BIBLE_BEAT_SHEET.md](./templates/STORY_BIBLE_BEAT_SHEET.md) | Beat sheet GO | Story Lead |
| **Storyboard / GD** | Locked beats | NON_ART §§3, 5–8 | [STORYBOARD_FRAME_INDEX.md](./templates/STORYBOARD_FRAME_INDEX.md), [COMBAT_GATES_ENCOUNTER_BUDGET.md](./templates/COMBAT_GATES_ENCOUNTER_BUDGET.md), [MASTER_ASSET_LIST.md](./templates/MASTER_ASSET_LIST.md) | Design data ready for schema | Game Design Lead |
| **Dialogue / VO lock** | Beats + cast | NON_ART §4 | [DIALOGUE_VO_LINE_PACK.md](./templates/DIALOGUE_VO_LINE_PACK.md) | `dlg.*` script lock | Story Lead |
| **Schema / content pack** | Design tables | NON_ART §8 · validators | `docs/schemas/content-pack.schema.json` · `npm run validate:pass` | **Schema GO** (Tech Lead) — **not stamped here** | Tech Lead |
| **Art factory** | MAL, briefs | [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md) → [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) | [MASTER_ASSET_LIST.md](./templates/MASTER_ASSET_LIST.md) (scope) | Art pack GO | Art Factory Lead |
| **Art task QA (L1)** | Per-asset evidence | [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) | [ART_QA_SCORECARD.md](./templates/ART_QA_SCORECARD.md), [ART_QA_TEST_CASES.md](./templates/ART_QA_TEST_CASES.md) | Per-track GO/NO | Art + QA spot-check |
| **Locale** | Locked `dlg.*`, art | NON_ART §9 | [LOCALE_READINESS_CHECKLIST.md](./templates/LOCALE_READINESS_CHECKLIST.md) | Locale GO | Art / Story |
| **Handoff pack** | Art GO + design YAML | NON_ART §10 | [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md) · `handoff.lock` in pack | **Contract GO** — **not stamped here** | Tech Lead / PM |
| **Cursor game.dev** | Frozen handoff + lock | Master Plan §3.8 · HANDOFF smoke | — (engine in Cursor factory) | Playable build / tip | PM + Tech |
| **QA task (L1 non-art)** | Locked pack | [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) §3.1–3.2 | [GAME_QA_SCORECARD.md](./templates/GAME_QA_SCORECARD.md) | Task GO/NO | QA Lead |
| **QA phase (L2)** | `build_ref` player | GAME_QA §3.3–3.8 · §9 below | [QA_MATRICES.md](./templates/QA_MATRICES.md) L2 | **Phase QA GO** — **not stamped here** | QA Lead |
| **UAT (L3)** | RC build | GAME_QA §3.9 · §9.3 | QA_MATRICES L3 | **UAT GO** (Stephen path) — **not stamped here** | QA Lead + PM |
| **Publish** | RC + disclosures | NON_ART §12 | [STREAM_PACKAGING_CHECKLIST.md](./templates/STREAM_PACKAGING_CHECKLIST.md), [RATINGS_CONTENT_MATRIX.md](./templates/RATINGS_CONTENT_MATRIX.md) | **Release GO** (Stephen) | PM |
| **Release QA (L4)** | Store targets TBD | GAME_QA §3.10 | GAME_QA scorecard L4 | Release checklist complete | QA Lead |
| **Live ops (L5)** | Live build | NON_ART §13 | [LIVE_OPS_HOTFIX_TALE_QUEUE.md](./templates/LIVE_OPS_HOTFIX_TALE_QUEUE.md) | Triage rows | PM + QA |

**Concept / platform prep (parallel):** [RATINGS_CONTENT_MATRIX.md](./templates/RATINGS_CONTENT_MATRIX.md), [L0_SESSION_SAVE_POLICY.md](./templates/L0_SESSION_SAVE_POLICY.md), [ACCESSIBILITY_BASELINE.md](./templates/ACCESSIBILITY_BASELINE.md), [SKU_COST_SLA.md](./templates/SKU_COST_SLA.md) — numbers/markets **TBD** where noted.

---

## 4. Art vs non-art split

| Track | Procedural leaves | QA kit | Do not use for |
|-------|-------------------|--------|----------------|
| **Art / audio craft** | [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) · index [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md) · skills `team-knowledge/skills/*` | [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) (L1 task + art pack roll-up) | Phase UAT, schema, handoff hash law |
| **Non-art craft** | [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) §§0–19 | [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) (L1 schema/handoff + L2–L5) | Mid-stride anim law, LICENSE.json art rows |
| **Matrices shell** | — | [QA_MATRICES.md](./templates/QA_MATRICES.md) links both kits | Case text (live in ART_QA / GAME_QA leaves) |

---

## 5. QA ladder

```
L1 Art task     → ART_QA cases + ART_QA_SCORECARD (per asset / pack roll-up)
L1 Non-art task → GAME-QA-SCH-* / HOFF-* + GAME_QA_SCORECARD L1
L2 Phase        → GAME-QA-LOAD/CMB/SES/LOC/A11Y/NAR-* + QA_MATRICES L2 + PACK-001
L3 UAT          → GAME-QA-UAT-* (.png/.mp4 from build_ref only) + QA_MATRICES L3
L4 Release      → GAME-QA-REL-* + STREAM_PACKAGING + RATINGS matrix
L5 Live         → GAME-QA-LIVE-* + LIVE_OPS queue
Integrity       → GAME-QA-EVD-* + PACK-004 (no paper greens)
```

Laws: [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) §11. **Day-run steps:** §9 below.

---

## 6. Track A kit map

| Need | Open |
|------|------|
| Milestone truth (landed vs partial vs GO pending) | [KIT_STATUS.md](./KIT_STATUS.md) |
| Fillable template index | [templates/README.md](./templates/README.md) |
| Validator smoke | `npm ci --prefix tools/validate-content-pack` then `npm run validate:pass` |
| Board / one-live-milestone | [BOARD_SCHEMA.md](./BOARD_SCHEMA.md) · `schemas/board.issue_pack.schema.json` |
| Short pipeline map (non-SSOT) | [FACTORY_OVERVIEW.md](./FACTORY_OVERVIEW.md) |

---

## 7. Human-only / Stephen-only (do not invent answers)

| Item | Status in kit |
|------|----------------|
| Tale / country pick, stream **platform targets** | Master Plan §17 — **TBD** |
| **Release GO** (platform release control) | Stephen |
| Factory **STOP** / **restart** `game.dev` | Stephen |
| Paid **license** / Secure Form (Mixamo, Freesound, etc.) | Stephen 1:1 |
| Sign-in / account flows on external tools | Human |
| **Schema GO**, **Contract GO**, **Art SOP GO**, **Phase QA GO**, **UAT GO** | Named owners — **not stamped in this repo** |
| Git **tip model** (dual vs single) | Tech Lead — **undecided** |
| Engine confirm (Godot 4.x default) | **Not confirmed** |
| Monetization | Default premium-only until Stephen states otherwise |
| Merge Story+GD / AD vs Audio seats | **Undecided** |

Full table: [KIT_STATUS.md](./KIT_STATUS.md) · Master Plan [§17](./FACTORY_MASTER_PLAN.md).

---

## 8. Day-run — role briefs

Open your seat brief before craft; exit with output contract.

| Seat | Brief |
|------|-------|
| Story Lead | [team-knowledge/roles/story-lead.md](./team-knowledge/roles/story-lead.md) |
| Game Design Lead | [team-knowledge/roles/design-lead.md](./team-knowledge/roles/design-lead.md) |
| Art Factory Lead / AD | [team-knowledge/roles/art-director.md](./team-knowledge/roles/art-director.md) |
| Audio | [team-knowledge/roles/audio-mix.md](./team-knowledge/roles/audio-mix.md) |
| PM / Factory Lead | [team-knowledge/roles/factory-pm.md](./team-knowledge/roles/factory-pm.md) |
| Tech Lead | [team-knowledge/roles/tech-lead.md](./team-knowledge/roles/tech-lead.md) |
| QA Lead | [team-knowledge/roles/qa-lead.md](./team-knowledge/roles/qa-lead.md) · **§9** |

Index: [team-knowledge/README.md](./team-knowledge/README.md) · R&R SSOT: Master Plan §5.2.

**Any role — session open (60 seconds):**

1. [BOOT.md](./BOOT.md) → confirm `issue_pack_ref` SKU.  
2. [KIT_STATUS.md](./KIT_STATUS.md) → do not invent unstamped GOs.  
3. This file §3 → find your phase row → open how-to leaf + copy template.  
4. Hand off with `status · why · paths · next · blocked_on`.

---

## 9. Avoid list

| Avoid | Why |
|-------|-----|
| Dual truths (two live packs / tips) | Master Plan §6 rule 2 |
| Paper greens / spreadsheet PASS without files | NON_ART §11 · GAME_QA EVD-001 |
| Soft CI / CONDITIONAL-as-PASS | Master Plan §6 |
| Inventing GO stamps in kit docs | Stephen / Tech / Art Lead human gates only |
| Cursor inventing beats, lore, combat, or art | Handoff + Cursor contract in HANDOFF_SMOKE |
| Quiet edit of `handoff.lock` hashes | GAME-QA-HOFF-002 |
| Greybox / editor mock as ship or UAT evidence | ART_QA / GAME_QA UAT-001 |
| Rewriting design to pass a bad test | QA Lead escalates — NON_ART §11 |
| TOC-only answers without opening leaf | BOOT: cite leaves |

---

## 10. Document control — major leaves

| Document | Purpose |
|----------|---------|
| [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) | SSOT laws |
| [BOOT.md](./BOOT.md) | Authority chain |
| **This file** | Day-one operating runbook |
| [FACTORY_OVERVIEW.md](./FACTORY_OVERVIEW.md) | Short map (not SSOT) |
| [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) | Non-art craft §§0–19 |
| [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) | Art/audio craft |
| [ART_FACTORY_SOP.md](./ART_FACTORY_SOP.md) | Art index + pipeline order |
| [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) | Art L1 QA cases |
| [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) | Game L1 + L2–L5 QA cases |
| [KIT_STATUS.md](./KIT_STATUS.md) | Track A landed vs partial |
| [templates/README.md](./templates/README.md) | Fillable kits A3–A7 |
| [BOARD_SCHEMA.md](./BOARD_SCHEMA.md) | Board shape |
| [team-knowledge/OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md) | Handoff fields |
| [team-knowledge/STANDING_RULES.md](./team-knowledge/STANDING_RULES.md) | §6 mirror |
| [schemas/](./schemas/) | Machine SSOT |
| `tools/validate-content-pack/` | Pack validator |

**Kit repo README:** [../README.md](../README.md)

---

## Appendix A — QA Lead day-run (Track A6 detail)

### A.1 Open order

| Step | File | Action |
|------|------|--------|
| 1 | [GAME_QA_SCORECARD.md](./templates/GAME_QA_SCORECARD.md) | Copy to `content/<SKU>/qa/GAME_QA_SCORECARD_<YYYYMMDD>.md`; fill header (`sku_id`, `pack_path`, `build_ref`, `tip`, `schema_version`, tester, HKT). |
| 2 | [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) §2.1 | Workability bar + command crib. |
| 3 | [GAME_QA_TEST_CASES.md](./templates/GAME_QA_TEST_CASES.md) | Execute rows; P/F/N + evidence path. |
| 4 | [QA_MATRICES.md](./templates/QA_MATRICES.md) | L2–L5 summary; link scorecard. |

### A.2 L1 — Schema + handoff

```bash
cd <repo-root>
npm ci --prefix tools/validate-content-pack
node tools/validate-content-pack/validate.mjs <pack_path>
```

1. Save log → `content/<SKU>/qa/schema/GAME-QA-SCH-001_<date>_validate_pass.log`.  
2. [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md) → GAME-QA-HOFF-*.  
3. `sha256sum` vs `handoff.lock` (HOFF-002).  
4. Validator stderr → **NO** before runtime.

### A.3 L2 — Phase (`build_ref` required)

No `build_ref` → runtime rows **NO**. Run LOAD/CMB/SES/LOC/A11Y/NAR per [L0_SESSION_SAVE_POLICY.md](./templates/L0_SESSION_SAVE_POLICY.md), [LOCALE_READINESS_CHECKLIST.md](./templates/LOCALE_READINESS_CHECKLIST.md), [ACCESSIBILITY_BASELINE.md](./templates/ACCESSIBILITY_BASELINE.md). Roll up PACK-001 + EVD-*.

**Exit:** `GO`/`NO` + why — not Phase QA GO stamp.

### A.4 L3 — UAT

UAT-001 first: require `.png`/`.mp4` under `content/<SKU>/qa/uat/`. UAT-002 primary path + UAT-003 fail path. PACK-002 + UAT-006 (zero open Critical).

### A.5 L4 — Release

[STREAM_PACKAGING_CHECKLIST.md](./templates/STREAM_PACKAGING_CHECKLIST.md) → REL-001. [RATINGS_CONTENT_MATRIX.md](./templates/RATINGS_CONTENT_MATRIX.md) → REL-002. PACK-003.

### A.6 L5 — Live

[LIVE_OPS_HOTFIX_TALE_QUEUE.md](./templates/LIVE_OPS_HOTFIX_TALE_QUEUE.md) → LIVE-004. [telemetry.events.schema.json](./schemas/telemetry.events.schema.json) → LIVE-001.

### A.7 Art L1 (parallel)

[ART_QA_TEST_CASES.md](./templates/ART_QA_TEST_CASES.md) + [ART_QA_SCORECARD.md](./templates/ART_QA_SCORECARD.md) — link both paths in QA_MATRICES L1.

### A.8 Tech / PM quick checks

- **Tech:** `npm run validate:pass`; `npm run validate:fail` must exit non-zero.  
- **PM:** Single `issue_pack_ref`; GAME-QA-EVD-001 clean before gate requests.
