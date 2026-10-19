# Track A kit GO evidence log

**Purpose:** Record **kit-level** GO/NO stamps for Track A factory milestones only — not SKU/runtime exits (Build tip, Phase QA, UAT, Release, Design/Art/Locale pack GO).  
**Authority:** Stephen Chow authorized Game Factory to stamp kit GOs with on-disk evidence (2026-10-19).  
**Laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) §6 rule 4 (full GO/NO only; no Soft CI / CONDITIONAL as ship gates).

Each row is a **kit exit** — evidence must exist in this repo before GO.

| Field | Meaning |
|-------|---------|
| **Gate** | Track A milestone or named kit gate |
| **GO/NO** | Full GO or NO only |
| **Why** | Short reason tied to evidence |
| **Evidence paths** | Repo paths agents can verify |
| **Date** | Stamp date (HKT) |
| **stamped_by** | Role or agent that recorded the stamp |

---

## Kit GO stamps (Track A)

| Gate | GO/NO | Why | Evidence paths | Date | stamped_by |
|------|-------|-----|----------------|------|------------|
| **A2 Schema GO** | **GO** | Content pack v1 JSON Schema composes tale/beats/gates/scenes/encounters/dialogue/progression/storyboard/handoff.lock; CLI validator + CI + pass/fail fixtures green | `docs/schemas/content-pack.schema.json`, `docs/schemas/*.schema.json`, `docs/schemas/common.defs.json`, `tools/validate-content-pack/`, `.github/workflows/validate-content-pack.yml`, `fixtures/content-packs/pass/`, `fixtures/content-packs/fail/`, root `package.json` (`validate:pass`) | 2026-10-19 | Game Factory (Stephen ask 2026-10-19) |
| **A3 Template GO** | **GO** | Fillable clearance→design kits indexed; dialogue `dlg.*`, MAL, combat/gates, ratings/L0/a11y/SLA shells present | `docs/templates/README.md`, `docs/templates/CLEARANCE_PD_LICENSE_LEDGER.md`, `STORY_BIBLE_BEAT_SHEET.md`, `STORYBOARD_FRAME_INDEX.md`, `DIALOGUE_VO_LINE_PACK.md`, `MASTER_ASSET_LIST.md`, `COMBAT_GATES_ENCOUNTER_BUDGET.md`, `RATINGS_CONTENT_MATRIX.md`, `L0_SESSION_SAVE_POLICY.md`, `ACCESSIBILITY_BASELINE.md`, `SKU_COST_SLA.md` (under `docs/templates/`) | 2026-10-19 | Game Factory |
| **A4 Art SOP GO** | **GO** | Art factory index + agent bounds + industrial AI SOP + art QA kit + five executable skills + mid-stride plate template | `docs/ART_FACTORY_SOP.md`, `docs/ART_OUTPUT_POLICY.md`, `docs/AI_ART_BEST_PRACTICES.md`, `docs/ART_QA_BEST_PRACTICES.md`, `docs/templates/ART_QA_*`, `docs/team-knowledge/skills/*/SKILL.md`, `docs/templates/MID_STRIDE_PLATE_CAMERA.md` | 2026-10-19 | Game Factory |
| **A5 Contract GO** | **GO** | Handoff lock schema + smoke consumer + output contract + Cursor implementer leaf/templates | `docs/schemas/handoff-lock.schema.json`, `docs/templates/HANDOFF_SMOKE_CONSUMER.md`, `docs/team-knowledge/OUTPUT_CONTRACT.md`, `docs/GAME_DEV_BEST_PRACTICES.md`, `docs/templates/GAME_DEV_*` | 2026-10-19 | Game Factory |
| **A6 QA kit GO** | **GO** | Phase/UAT/release **matrices** + executable GAME_QA + ART_QA kits (L1 art + L2–L5 game) — **not** Phase QA GO on a live SKU | `docs/templates/QA_MATRICES.md`, `docs/GAME_QA_BEST_PRACTICES.md`, `docs/templates/GAME_QA_*`, `docs/ART_QA_BEST_PRACTICES.md`, `docs/templates/ART_QA_*`, `docs/FACTORY_OPERATING_SOP.md` §3 | 2026-10-19 | Game Factory |
| **A7 Locale-stream kit GO** | **GO** | Locale readiness + stream packaging + live-ops checklists landed (platform names remain Stephen at B0 Clearance) | `docs/templates/LOCALE_READINESS_CHECKLIST.md`, `docs/templates/STREAM_PACKAGING_CHECKLIST.md`, `docs/templates/LIVE_OPS_HOTFIX_TALE_QUEUE.md`, `docs/FACTORY_NON_ART_BEST_PRACTICES.md` §§9, 12–13 | 2026-10-19 | Game Factory |

**Note:** **A6 QA kit GO** means the factory **QA playbook and templates** are ready. **Phase QA GO**, **UAT GO**, and **Release GO** for a SKU remain blocked until a live build and human gates (see below).

---

## BLOCKED — awaiting first SKU / human (not kit-stamped)

| Gate | Status | Pointer (checklist only — no GO invented) |
|------|--------|---------------------------------------------|
| Clearance GO | **BLOCKED** — Stephen + tale/country | `docs/templates/CLEARANCE_PD_LICENSE_LEDGER.md` |
| Design pack GO | **BLOCKED** — live SKU design | `docs/templates/STORYBOARD_FRAME_INDEX.md`, `docs/FACTORY_NON_ART_BEST_PRACTICES.md` §§3–8 |
| Script pack GO | **BLOCKED** — live `dlg.*` lock | `docs/templates/DIALOGUE_VO_LINE_PACK.md` |
| Art pack GO | **BLOCKED** — locked art per SKU | `docs/ART_QA_BEST_PRACTICES.md`, `docs/templates/ART_QA_SCORECARD.md` |
| Locale GO | **BLOCKED** — per-market strings/VO | `docs/templates/LOCALE_READINESS_CHECKLIST.md` |
| Build tip GO | **BLOCKED** — Cursor build + Stephen factory open | `docs/GAME_DEV_BEST_PRACTICES.md`, `docs/templates/GAME_DEV_SCORECARD.md` |
| Phase QA GO (SKU) | **BLOCKED** — runtime regression on ship build | `docs/templates/QA_MATRICES.md`, `docs/GAME_QA_BEST_PRACTICES.md` |
| UAT GO | **BLOCKED** — play/video on primary beat path | Master Plan §3.9, §13 |
| Release GO | **BLOCKED** — Stephen + stream targets named at Clearance | `docs/templates/STREAM_PACKAGING_CHECKLIST.md` |
| Stream packaging (platform names) | **DEFERRED** — Stephen names platforms at **B0 Clearance** | `docs/templates/STREAM_PACKAGING_CHECKLIST.md` (checklist ready) |

---

## Validator smoke (A2 evidence)

```bash
npm ci --prefix tools/validate-content-pack
npm run validate:pass
```

Last kit stamp run: **2026-10-19** — expect **PASS** on CI parity.
