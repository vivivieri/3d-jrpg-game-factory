# Game dev test cases — execution checklist

**Full preconditions, steps, expected results:** [GAME_DEV_BEST_PRACTICES.md](../GAME_DEV_BEST_PRACTICES.md) §3 · **Workability bar:** §2.1  
**Scorecard:** [GAME_DEV_SCORECARD.md](./GAME_DEV_SCORECARD.md) · **Day-run:** [FACTORY_OPERATING_SOP.md](../FACTORY_OPERATING_SOP.md) Appendix B  
**Pre-requisite smoke:** [HANDOFF_SMOKE_CONSUMER.md](./HANDOFF_SMOKE_CONSUMER.md) (before AUTH/INTAKE)

Mark each row: **P**ass · **F**ail · **N/A** (requires `why` in scorecard).  
Evidence path pattern:

`content/<SKU>/dev/<layer>/GAME-DEV-<AREA>-###_<YYYYMMDD>_<label>.<ext>`

**Build rows:** exported `build_ref` required for BLD-006 — editor-only = **Fail** (EVD-005).

---

## Authorization

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-AUTH-001 | Stephen factory open logged | Critical | | |
| GAME-DEV-AUTH-002 | Art + Locale GO on record | Critical | | |
| GAME-DEV-AUTH-003 | SKU matches issue_pack_ref | Critical | | |
| GAME-DEV-AUTH-004 | Session open output contract | Major | | |
| GAME-DEV-AUTH-005 | No dual live tips | Critical | | |

---

## Intake (post-smoke)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-INTAKE-001 | Handoff smoke GO cited | Critical | | |
| GAME-DEV-INTAKE-002 | handoff.lock required fields | Critical | | |
| GAME-DEV-INTAKE-003 | Design pack hash match | Critical | | |
| GAME-DEV-INTAKE-004 | Art pack hash match | Critical | | |
| GAME-DEV-INTAKE-005 | schema_version parity | Critical | | |
| GAME-DEV-INTAKE-006 | tip in scorecard header | Major | | |
| GAME-DEV-INTAKE-007 | pack_path equals board ref | Critical | | |
| GAME-DEV-INTAKE-008 | validate.mjs on frozen pack | Critical | | |

---

## Import art/audio

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-IMP-001 | MANIFEST-only import | Critical | | |
| GAME-DEV-IMP-002 | Missing ref fail loud | Critical | | |
| GAME-DEV-IMP-003 | Asset hash spot check | Critical | | |
| GAME-DEV-IMP-004 | No greybox on spine | Major | | |
| GAME-DEV-IMP-005 | Audio bus map | Major | | |
| GAME-DEV-IMP-006 | LICENSE audit | Major | | |

---

## Scenes

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-SCN-001 | SCN_* per pack index | Critical | | |
| GAME-DEV-SCN-002 | POI bind | Major | | |
| GAME-DEV-SCN-003 | Storyboard systems bound | Critical | | |
| GAME-DEV-SCN-004 | Start scene reachable | Critical | | |
| GAME-DEV-SCN-005 | Scene transitions from pack | Major | | |
| GAME-DEV-SCN-006 | No orphan frames in build | Major | | |

---

## Dialogue / VO

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-DLG-001 | dlg.* keys from pack | Critical | | |
| GAME-DEV-DLG-002 | No hard-coded player strings | Major | | |
| GAME-DEV-DLG-003 | VO paths from pack | Major | | |
| GAME-DEV-DLG-004 | No line rewrite vs lock | Critical | | |
| GAME-DEV-DLG-005 | Locale API in dialogue UI | Major | | |

---

## Interactions

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-INT-001 | INT_* bindings | Critical | | |
| GAME-DEV-INT-002 | Collision layers | Major | | |
| GAME-DEV-INT-003 | Trigger → beat advance | Critical | | |
| GAME-DEV-INT-004 | Gate interactions | Major | | |
| GAME-DEV-INT-005 | No invented interactables | Critical | | |

---

## Combat / gates

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-CMB-001 | Encounter YAML SSOT | Critical | | |
| GAME-DEV-CMB-002 | Story-safe retry | Critical | | |
| GAME-DEV-CMB-003 | Gate objectives from pack | Major | | |
| GAME-DEV-CMB-004 | No invented balance | Critical | | |
| GAME-DEV-CMB-005 | Encounter teardown | Major | | |

---

## Session / L0

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-SES-001 | Pause per L0 policy | Major | | |
| GAME-DEV-SES-002 | Save path policy | Major | | |
| GAME-DEV-SES-003 | Resume from save | Critical | | |
| GAME-DEV-SES-004 | Save fail loud | Major | | |

---

## Locale

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-LOC-001 | Locale key import | Critical | | |
| GAME-DEV-LOC-002 | Fonts from locale pack | Major | | |
| GAME-DEV-LOC-003 | No raw keys in UI | Critical | | |
| GAME-DEV-LOC-004 | Pseudo-loc off in candidate | Major | | |
| GAME-DEV-LOC-005 | Critical VO locale parity | Critical | | |

---

## Build / tip

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-BLD-001 | Godot export documented | Critical | | |
| GAME-DEV-BLD-002 | tip in build metadata | Critical | | |
| GAME-DEV-BLD-003 | build_ref in scorecard | Critical | | |
| GAME-DEV-BLD-004 | Lock hashes in build log | Critical | | |
| GAME-DEV-BLD-005 | Build log under dev/ | Major | | |
| GAME-DEV-BLD-006 | Exported player boot smoke | Critical | | |

---

## PM hooks

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-PM-001 | Schedule after smoke GO | Critical | | |
| GAME-DEV-PM-002 | One issue_pack_ref | Critical | | |
| GAME-DEV-PM-003 | Output contract every exit | Major | | |
| GAME-DEV-PM-004 | Scorecard copy per build | Major | | |
| GAME-DEV-PM-005 | Handoff to GAME_QA | Major | | |

---

## Evidence / pack

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-DEV-EVD-001 | Artifact paths resolve | Critical | | |
| GAME-DEV-EVD-002 | No Soft CI | Critical | | |
| GAME-DEV-EVD-003 | Header complete | Major | | |
| GAME-DEV-EVD-004 | Retest after Critical | Critical | | |
| GAME-DEV-EVD-005 | No editor greybox ship | Critical | | |
| GAME-DEV-PACK-001 | Suite coverage | Critical | | |
| GAME-DEV-PACK-002 | QA-ready bundle | Major | | |
