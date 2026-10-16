# Game QA test cases — execution checklist

**Full preconditions, steps, expected results:** [GAME_QA_BEST_PRACTICES.md](../GAME_QA_BEST_PRACTICES.md) §3 · **Workability bar:** §2.1  
**Scorecard:** [GAME_QA_SCORECARD.md](./GAME_QA_SCORECARD.md) · **Day-run:** [FACTORY_OPERATING_SOP.md](../FACTORY_OPERATING_SOP.md) §3

Mark each row: **P**ass · **F**ail · **N/A** (requires `why` in scorecard).  
Evidence path pattern:

`content/<SKU>/qa/<layer>/GAME-QA-<AREA>-###_<YYYYMMDD>_<label>.<ext>`

**UAT rows:** `.png` or `.mp4` from `build_ref` required — matrix-only PASS = **Fail** (paper green).

---

## Schema / pack (`npm run validate:pass` / `validate.mjs`)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-SCH-001 | validate:pass on locked pack | Critical | | |
| GAME-QA-SCH-002 | Pack shape vs content-pack.schema | Critical | | |
| GAME-QA-SCH-003 | Cross-ref beat/scene/encounter | Critical | | |
| GAME-QA-SCH-004 | Storyboard orphan frames | Major | | |
| GAME-QA-SCH-005 | dlg.* lock presence | Critical | | |
| GAME-QA-SCH-006 | sku_id + semver | Major | | |
| GAME-QA-SCH-007 | Gate reachability (data) | Critical | | |
| GAME-QA-SCH-008 | Art manifest hash fail loud | Critical | | |

---

## Handoff smoke (HANDOFF_SMOKE_CONSUMER)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-HOFF-001 | handoff.lock required fields | Critical | | |
| GAME-QA-HOFF-002 | Hash recompute match | Critical | | |
| GAME-QA-HOFF-003 | schema_version lock parity | Critical | | |
| GAME-QA-HOFF-004 | Start beat resolves | Critical | | |
| GAME-QA-HOFF-005 | Start scene resolves | Major | | |
| GAME-QA-HOFF-006 | No Soft CI at intake | Critical | | |

---

## Load / start (`build_ref` required)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-LOAD-001 | Tale loads in runtime | Critical | | |
| GAME-QA-LOAD-002 | B001 reachable | Critical | | |
| GAME-QA-LOAD-003 | Cold start smoke | Minor | | |
| GAME-QA-LOAD-004 | Missing asset fail loud | Major | | |

---

## Narrative / beat path

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-NAR-001 | Spine beat sequence | Critical | | |
| GAME-QA-NAR-002 | dlg.* text match | Major | | |
| GAME-QA-NAR-003 | VO plays for dlg.* | Major | | |
| GAME-QA-NAR-004 | Funded endings only | Critical | | |
| GAME-QA-NAR-005 | Branch stub discipline | Minor | | |
| GAME-QA-NAR-006 | Scene transition integrity | Major | | |

---

## Combat / gates

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-CMB-001 | Fail → story-safe retry | Critical | | |
| GAME-QA-CMB-002 | No mandatory grind | Major | | |
| GAME-QA-CMB-003 | Soft-lock hunt | Critical | | |
| GAME-QA-CMB-004 | Gate objective clarity | Minor | | |
| GAME-QA-CMB-005 | Encounter teardown | Major | | |

---

## Session / L0 (L0_SESSION_SAVE_POLICY)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-SES-001 | Pause / resume mid-beat | Major | | |
| GAME-QA-SES-002 | Save / load checkpoint | Major | | |
| GAME-QA-SES-003 | Session / chapter end | Minor | | |
| GAME-QA-SES-004 | Suspend / resume | Major | | |

---

## Locale critical (LOCALE_READINESS_CHECKLIST)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-LOC-001 | 0 missing critical keys | Critical | | |
| GAME-QA-LOC-002 | Critical VO per locale | Critical | | |
| GAME-QA-LOC-003 | No raw dlg.* on screen | Major | | |
| GAME-QA-LOC-004 | Font tofu spot | Major | | |
| GAME-QA-LOC-005 | Locale switch mid-session | Minor | | |

---

## Accessibility (ACCESSIBILITY_BASELINE)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-A11Y-001 | HUD/dialog contrast spot | Major | | |
| GAME-QA-A11Y-002 | Menu focus order | Major | | |
| GAME-QA-A11Y-003 | Subtitles in combat | Minor | | |
| GAME-QA-A11Y-004 | Flash / photosensitivity spot | Major | | |

---

## UAT (runtime video / viewport — no paper green)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-UAT-001 | Real build viewport | Critical | | |
| GAME-QA-UAT-002 | Primary beat path recording | Critical | | |
| GAME-QA-UAT-003 | Fail path in recording | Major | | |
| GAME-QA-UAT-004 | Dialogue on UAT path | Major | | |
| GAME-QA-UAT-005 | Combat budget on UAT path | Major | | |
| GAME-QA-UAT-006 | 0 open Critical defects | Critical | | |

---

## Release (STREAM_PACKAGING + RATINGS)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-REL-001 | Stream packaging checklist | Major | | |
| GAME-QA-REL-002 | Ratings matrix vs build | Critical | | |
| GAME-QA-REL-003 | Store/locale parity (TBD markets) | Major | | |
| GAME-QA-REL-004 | Perf vs budget | Major | | |
| GAME-QA-REL-005 | Disclosure alignment | Critical | | |

---

## Live (LIVE_OPS + telemetry schema)

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-LIVE-001 | Telemetry schema smoke | Major | | |
| GAME-QA-LIVE-002 | Session start signal | Major | | |
| GAME-QA-LIVE-003 | Crash-free band | Critical† | | |
| GAME-QA-LIVE-004 | Hotfix queue triage row | Minor | | |

†Critical when below L5 threshold band in [QA_MATRICES.md](./QA_MATRICES.md).

---

## Evidence integrity + pack roll-up

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| GAME-QA-EVD-001 | PASS paths exist on disk | Critical | | |
| GAME-QA-EVD-002 | No Soft CI / CONDITIONAL | Critical | | |
| GAME-QA-EVD-003 | Scorecard header complete | Major | | |
| GAME-QA-EVD-004 | Retest after Critical fix | Critical | | |
| GAME-QA-PACK-001 | L2 coverage | Critical | | |
| GAME-QA-PACK-002 | UAT bundle index | Critical | | |
| GAME-QA-PACK-003 | Release index | Major | | |
| GAME-QA-PACK-004 | No paper green (pack) | Critical | | |
