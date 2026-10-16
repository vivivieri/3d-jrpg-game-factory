# Game QA Best Practices — executable test kit (Track A6)

**Status:** Procedural leaf — **not** a GO stamp. Laws remain in [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (§3.9, §6, §14).  
**Scope:** Non-art **task QA** (schema, handoff smoke, systems tickets) plus **phase regression**, **UAT**, **release**, and **live** evidence cases — SKU / build roll-up before Phase QA GO request, UAT, and Release QA (human Stephen gates stay unstamped here).  
**Craft SOP (design / tech):** [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) · **Matrices shell:** [templates/QA_MATRICES.md](./templates/QA_MATRICES.md)  
**Art L1 task QA:** [ART_QA_BEST_PRACTICES.md](./ART_QA_BEST_PRACTICES.md) — art/audio rows on MASTER_ASSET_LIST only; this kit does **not** replace ART-QA cases.  
**Implementer (upstream):** [GAME_DEV_BEST_PRACTICES.md](./GAME_DEV_BEST_PRACTICES.md) — build tip evidence; this kit tests `build_ref` after GAME_DEV handoff.

---

## 1. Scope and gate relationship

| Layer | Owner | Kit | Exit |
|-------|-------|-----|------|
| **Art task QA (L1)** | Art craft + QA spot-check | ART_QA + [templates/ART_QA_SCORECARD.md](./templates/ART_QA_SCORECARD.md) | Per-asset GO/NO + why |
| **Non-art task QA (L1)** | Tech / Design / QA | This document §3 (SCH, HOFF, …) + task rows in QA matrices | Task GO/NO + artifact |
| **Phase regression (L2)** | QA Lead | §3 + [templates/GAME_QA_SCORECARD.md](./templates/GAME_QA_SCORECARD.md) L2 block | Suite pass — **Phase QA GO not stamped in kit** |
| **UAT (L3)** | QA Lead + PM | §3 UAT cases + QA matrices L3 | Play/video evidence — **UAT GO not stamped in kit** |
| **Release (L4)** | QA Lead + PM | §3 REL + checklists | Release checklist — **Release GO = Stephen** |
| **Live (L5)** | QA Lead + PM | §3 LIVE + [LIVE_OPS_HOTFIX_TALE_QUEUE.md](./templates/LIVE_OPS_HOTFIX_TALE_QUEUE.md) | Triage rows — not a ship gate |

**Rule:** Paper greens, spreadsheet PASS without artifacts, editor-only mocks sold as “runtime proof,” **Soft CI**, **CONDITIONAL**, slide-deck viewports, and design-doc-only “testing” are **forbidden** as game QA GO evidence (aligned with NON_ART §11, Master Plan §6 rule 10).

**Output contract (every game QA exit):** `status · why · paths · next · blocked_on` — [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md).

---

## 2. Evidence standards

| Evidence type | Required for | Not sufficient alone |
|---------------|--------------|----------------------|
| **Real build viewport** (ship or candidate branch) | UAT, combat, session, a11y spot, locale in-build | Editor mock, greybox-as-ship, spliced stills |
| **Runtime video** (full session, uncut critical path) | UAT when live play not archived | Trailer cut, sped-up montage without fail path |
| **Validator log + locked pack path** | Schema / pack L1–L2 | Verbal “validate looked fine” |
| **`handoff.lock` + hash audit** | Handoff smoke | Lock file present but hashes not recomputed |
| **Listen / UI capture in build** | Critical locale VO/UI | Spreadsheet key list without in-build spot |
| **Packaging / ratings artifact** | Release L4 | Checklist tick without attached export or matrix row |

**Artifact path pattern (per case):**

```
content/<SKU>/qa/<layer>/<CASE_ID>_<YYYYMMDD>_<short_label>.<ext>
```

`<layer>` examples: `schema`, `handoff`, `phase`, `uat`, `release`, `live`, `evidence`.  
Examples: `.../qa/phase/GAME-QA-LOAD-001_20261016_tale_boot.png`, `.../qa/uat/GAME-QA-UAT-002_20261016_spine_runtime.mp4`, `.../qa/schema/GAME-QA-SCH-001_20261016_validate_pass.log`.

**Severity (roll-up law):**

| Severity | Meaning | SKU / phase roll-up |
|----------|---------|---------------------|
| **Critical** | Ship blocker, data corruption, soft-lock on canonical path, hash/evidence fraud class | **Fail phase pack** until fixed + retest |
| **Major** | Breaks primary beat path, combat fail/retry law, critical locale, or release disclosure mismatch | Fail area; phase blocked if on spine or release path |
| **Minor** | Polish, non-spine branch, documented waiver with QA Lead + why | Does not alone block if logged |

---

## 2.1 Workability bar (Stephen)

This kit is **executable today**, not theory.

| Rule | Enforcement |
|------|-------------|
| **No case without an evidence artifact path** | Every GAME-QA row ends with a path under `content/<SKU>/qa/...`; spreadsheet PASS alone = **paper green** → Fail (GAME-QA-EVD-001). |
| **N/A only with why** | Log one-line `why` on [GAME_QA_SCORECARD.md](./templates/GAME_QA_SCORECARD.md); unscoped N/A is **NO**. |
| **Critical fail blocks roll-up** | Any Critical Fail → phase/UAT pack **NO** until GAME-QA-EVD-004 retest passes. |
| **Full GO/NO only** | Soft CI, CONDITIONAL, and “verify properly” sign-off are **forbidden**. |
| **Runnable steps** | Each case uses numbered steps that name a **repo command**, a **template checklist row**, or a **player action** on `build_ref` — never vague “ensure quality.” |

**UAT / play:** Evidence must be a **real build viewport** (`.png`) or **runtime video** (`.mp4`) from `build_ref` (exported player or CI artifact). Godot editor-only capture, slide decks, and matrix PASS without files are **automatic Fail** (GAME-QA-UAT-001, GAME-QA-EVD-001).

### Repo command crib (copy per run)

```bash
# Once per machine / after package.json change
npm ci --prefix tools/validate-content-pack

# CI fixture (smoke that validators work)
npm run validate:pass

# Locked SKU pack (replace path)
node tools/validate-content-pack/validate.mjs path/to/content-pack.yaml
# Expect stdout: validate-content-pack: PASS <abs-path>
# Any stderr line starting with "  - " → Fail; save log as SCH-001 evidence

# Optional: prove validate:fail fixture still fails (regression sanity)
npm run validate:fail; test $? -eq 1

# handoff.lock field patterns (inside pack YAML) — see docs/schemas/handoff-lock.schema.json
# Hash recompute (replace blob paths; compare lowercase hex to handoff.lock.*_hash)
sha256sum path/to/design_pack_blob | awk '{print $1}'
sha256sum path/to/art_pack_blob    | awk '{print $1}'

# Evidence path must exist before scorecard PASS
test -f "content/<SKU>/qa/schema/GAME-QA-SCH-001_<YYYYMMDD>_validate_pass.log"
```

**Runtime (`build_ref`):** This repo has no embedded Godot project. Tech/Cursor supplies the **candidate player** path or CI download URL; record it in the scorecard header before LOAD / NAR / CMB / UAT cases. No `build_ref` → runtime cases are **NO** (not silent PASS).

Day-run order: [FACTORY_OPERATING_SOP.md](./FACTORY_OPERATING_SOP.md) Appendix A (Game QA).

---

## 3. Test-case library

Execute cases as written; mark **N/A** only with `why` in scorecard. Fillable checklist: [templates/GAME_QA_TEST_CASES.md](./templates/GAME_QA_TEST_CASES.md).

**Step law:** Preconditions name inputs on disk (`pack_path`, `build_ref`, template file). Steps are numbered actions. “Expected” is observable (exit code, line in log, pixel on screen). If a step cannot be automated yet, perform the manual action and still write the artifact file — never substitute Soft CI.

### 3.1 Schema / content pack (`GAME-QA-SCH-*`)

#### GAME-QA-SCH-001 — `validate:pass` on locked pack

| Field | Content |
|-------|---------|
| **Precondition** | Content pack YAML/JSON frozen for SKU; `npm ci` done under `tools/validate-content-pack`. |
| **Steps** | 1. `cd` repo root; run `npm ci --prefix tools/validate-content-pack`. 2. Run `node tools/validate-content-pack/validate.mjs <locked-pack>` (or `npm run validate:pass` to sanity-check CI fixture). 3. `echo $?` must be `0`; stdout must contain `validate-content-pack: PASS`. 4. Redirect full output to evidence log; note `schema_version` from pack YAML. |
| **Expected** | Exit 0; no schema errors on locked pack. |
| **Evidence** | `content/<SKU>/qa/schema/GAME-QA-SCH-001_<date>_validate_pass.log` |
| **Pass/Fail** | Pass = exit 0 |
| **Severity** | **Critical** |

#### GAME-QA-SCH-002 — Pack shape vs `content-pack.schema.json`

| Field | Content |
|-------|---------|
| **Precondition** | Schema v1 published in [docs/schemas/](./schemas/). |
| **Steps** | 1. Run `node tools/validate-content-pack/validate.mjs <locked-pack>`. 2. If Ajv shape fails, stderr lists `instancePath` lines — copy into evidence. 3. Open `docs/schemas/content-pack.schema.json`; confirm pack has `schema_version`, `tale`, `beats`, `scenes` keys present in YAML. 4. Pass only when step 1 exit 0. |
| **Expected** | Pack conforms; no undeclared required omissions. |
| **Evidence** | `.../GAME-QA-SCH-002_<date>_shape_notes.md` |
| **Pass/Fail** | Pass = conformant |
| **Severity** | **Critical** |

#### GAME-QA-SCH-003 — Cross-ref beat ↔ scene ↔ encounter

| Field | Content |
|-------|---------|
| **Precondition** | Locked beat sheet and scene index. |
| **Steps** | 1. Run `node tools/validate-content-pack/validate.mjs <locked-pack>`. 2. Search log for `references missing` (beat/scene/encounter/gate). 3. If any line appears, Fail and paste first 10 lines into evidence. 4. Pass only when validator exits 0 with no semantic xref errors. |
| **Expected** | 0 dangling refs on locked spine. |
| **Evidence** | `.../GAME-QA-SCH-003_<date>_xref_audit.md` |
| **Pass/Fail** | Pass = 0 dangling on spine |
| **Severity** | **Critical** |

#### GAME-QA-SCH-004 — Storyboard orphan frames (`systems` empty)

| Field | Content |
|-------|---------|
| **Precondition** | Storyboard frame index linked to pack. |
| **Steps** | 1. Run `node tools/validate-content-pack/validate.mjs <locked-pack>`. 2. Grep log for `orphan storyboard frame`. 3. Count matches — must be **0**. 4. Cross-check [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md) row “Storyboard orphan lint”. |
| **Expected** | **0** orphan frames. |
| **Evidence** | `.../GAME-QA-SCH-004_<date>_orphan_lint.txt` |
| **Pass/Fail** | Pass = 0 orphans |
| **Severity** | Major |

#### GAME-QA-SCH-005 — `dlg.*` lock presence (voiced path)

| Field | Content |
|-------|---------|
| **Precondition** | Dialogue pack locked; voiced beats listed in pack. |
| **Steps** | 1. From locked [DIALOGUE_VO_LINE_PACK.md](./templates/DIALOGUE_VO_LINE_PACK.md), list required `dlg.*` keys for voiced spine beats. 2. Run `rg '^  - key:' <locked-pack>` (or open YAML `dialogue:`) and build key set. 3. For each required key, `rg -F "<key>" <locked-pack>` must hit. 4. Run validator; duplicate keys fail as `duplicate dialogue key`. |
| **Expected** | All locked `dlg.*` for voiced spine present exactly once. |
| **Evidence** | `.../GAME-QA-SCH-005_<date>_dlg_lock_audit.md` |
| **Pass/Fail** | Pass = complete lock |
| **Severity** | **Critical** |

#### GAME-QA-SCH-006 — `sku_id` and semver consistency

| Field | Content |
|-------|---------|
| **Precondition** | Board `issue_pack_ref` lists SKU. |
| **Steps** | 1. Compare pack `sku_id` to board ref pattern `sku_*`. 2. Verify `schema_version` semver parseable. |
| **Expected** | IDs match live sprint ref; semver valid. |
| **Evidence** | `.../GAME-QA-SCH-006_<date>_sku_match.md` |
| **Pass/Fail** | Pass = match |
| **Severity** | Major |

#### GAME-QA-SCH-007 — Gate reachability (data-layer)

| Field | Content |
|-------|---------|
| **Precondition** | Combat/gates table frozen. |
| **Steps** | 1. Walk start beat → first gate on paper/data graph. 2. Verify no dead-end without fail/retry hook in data. |
| **Expected** | Canonical start → first gate reachable in pack data. |
| **Evidence** | `.../GAME-QA-SCH-007_<date>_gate_reach.md` |
| **Pass/Fail** | Pass = reachable |
| **Severity** | **Critical** |

#### GAME-QA-SCH-008 — Art manifest hash refs (fail loud)

| Field | Content |
|-------|---------|
| **Precondition** | Pack references art manifest / hashes. |
| **Steps** | 1. For each required manifest ref, verify hash present. 2. Attempt resolve — **no silent substitute**. |
| **Expected** | Missing hash → explicit fail in log. |
| **Evidence** | `.../GAME-QA-SCH-008_<date>_manifest_audit.md` |
| **Pass/Fail** | Pass = all refs or documented N/A with why |
| **Severity** | **Critical** |

---

### 3.2 Handoff smoke (`GAME-QA-HOFF-*`)

Align with [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md).

#### GAME-QA-HOFF-001 — `handoff.lock` required fields

| Field | Content |
|-------|---------|
| **Precondition** | `handoff.lock` on disk; [handoff-lock.schema.json](./schemas/handoff-lock.schema.json) available. |
| **Steps** | 1. Validate JSON shape against schema. 2. Check `art_pack_hash`, `design_pack_hash`, `schema_version`, `tip`, `locked_at`. |
| **Expected** | All required fields present and typed correctly. |
| **Evidence** | `content/<SKU>/qa/handoff/GAME-QA-HOFF-001_<date>_lock_shape.json` (redacted copy) + validation log |
| **Pass/Fail** | Pass = schema valid |
| **Severity** | **Critical** |

#### GAME-QA-HOFF-002 — Hash recompute match

| Field | Content |
|-------|---------|
| **Precondition** | Shipped art + design pack bytes frozen. |
| **Steps** | 1. Read `handoff.lock.art_pack_hash` and `design_pack_hash` from locked pack YAML. 2. On the **same byte blobs** that were hashed at lock time, run `sha256sum <art_blob>` and `sha256sum <design_blob>`. 3. Compare `awk '{print $1}'` output to lock fields (lowercase hex, 64 chars). 4. On mismatch, Fail — do not edit lock in place; return to pack owner. |
| **Expected** | Exact match — **hash mismatch → FAIL** (no quiet lock edits). |
| **Evidence** | `.../GAME-QA-HOFF-002_<date>_hash_audit.md` |
| **Pass/Fail** | Pass = match |
| **Severity** | **Critical** |

#### GAME-QA-HOFF-003 — `schema_version` lock parity

| Field | Content |
|-------|---------|
| **Precondition** | Content pack and lock co-located. |
| **Steps** | 1. Read pack `schema_version`. 2. Compare to `handoff.lock.schema_version`. |
| **Expected** | Equal semver. |
| **Evidence** | `.../GAME-QA-HOFF-003_<date>_version_parity.txt` |
| **Pass/Fail** | Pass = equal |
| **Severity** | **Critical** |

#### GAME-QA-HOFF-004 — Start beat `B001` (or documented start) resolves

| Field | Content |
|-------|---------|
| **Precondition** | Start beat documented in pack README or beat sheet. |
| **Steps** | 1. Resolve start beat id. 2. Verify beat exists; systems non-empty. |
| **Expected** | Start beat loads in data smoke. |
| **Evidence** | `.../GAME-QA-HOFF-004_<date>_start_beat.md` |
| **Pass/Fail** | Pass = resolves |
| **Severity** | **Critical** |

#### GAME-QA-HOFF-005 — Start scene (e.g. `SCN_01`) resolves

| Field | Content |
|-------|---------|
| **Precondition** | Start beat maps to scene. |
| **Steps** | 1. Resolve scene for start beat. 2. Verify scene in `scenes:`; POIs valid. |
| **Expected** | Scene + POIs valid. |
| **Evidence** | `.../GAME-QA-HOFF-005_<date>_start_scene.md` |
| **Pass/Fail** | Pass = valid |
| **Severity** | Major |

#### GAME-QA-HOFF-006 — No Soft CI / greybox-as-ship at intake

| Field | Content |
|-------|---------|
| **Precondition** | Handoff smoke run scheduled. |
| **Steps** | 1. Reject CONDITIONAL / Soft CI labels on intake checklist. 2. Reject greybox evidence in art GO attachments. |
| **Expected** | Full GO/NO only on preconditions table. |
| **Evidence** | `.../GAME-QA-HOFF-006_<date>_intake_integrity.md` |
| **Pass/Fail** | Fail = Soft CI or greybox accepted |
| **Severity** | **Critical** |

---

### 3.3 Load / start path (`GAME-QA-LOAD-*`)

#### GAME-QA-LOAD-001 — Tale / SKU loads in runtime

| Field | Content |
|-------|---------|
| **Precondition** | Runnable build at logged tip id; handoff smoke data pass. |
| **Steps** | 1. Fill scorecard `build_ref` (exported player path or CI artifact URL) and `tip` from `handoff.lock.tip`. 2. Launch `build_ref`; start tale matching `tale.sku_id` from locked pack. 3. Wait until first interactive frame (menu or in-world). 4. Capture screenshot **or** ≥10s `.mp4` — not Godot editor viewport for UAT-bound packs. 5. Name file per evidence path below. |
| **Expected** | Tale loads without crash to playable entry. |
| **Evidence** | `content/<SKU>/qa/phase/GAME-QA-LOAD-001_<date>_tale_boot.png` or `.mp4` |
| **Pass/Fail** | Pass = loads |
| **Severity** | **Critical** |

#### GAME-QA-LOAD-002 — `B001` reachable in runtime

| Field | Content |
|-------|---------|
| **Precondition** | LOAD-001 pass. |
| **Steps** | 1. Start new session / chapter. 2. Reach start beat gameplay state. 3. Capture viewport at beat entry. |
| **Expected** | Start beat reachable without cheat/debug skip. |
| **Evidence** | `.../GAME-QA-LOAD-002_<date>_B001_reachable.png` |
| **Pass/Fail** | Pass = reachable |
| **Severity** | **Critical** |

#### GAME-QA-LOAD-003 — Cold start timing (smoke band)

| Field | Content |
|-------|---------|
| **Precondition** | Perf budget frozen at Design/Tech GO (numeric band TBD per SKU). |
| **Steps** | 1. Cold launch ×3. 2. Note time to interactive menu. 3. Compare to frozen budget or log “budget TBD”. |
| **Expected** | Within frozen budget or explicitly logged waiver. |
| **Evidence** | `.../GAME-QA-LOAD-003_<date>_cold_start.txt` |
| **Pass/Fail** | Pass = in band or waived with why |
| **Severity** | Minor |

#### GAME-QA-LOAD-004 — Missing asset fail loud

| Field | Content |
|-------|---------|
| **Precondition** | Test build with intentional missing ref **or** audit log from negative test fixture. |
| **Steps** | 1. Verify engine surfaces error (not silent fallback) for missing critical ref. 2. Capture log or on-screen error. |
| **Expected** | Fail loud — no silent substitute mesh/text. |
| **Evidence** | `.../GAME-QA-LOAD-004_<date>_missing_ref.log` |
| **Pass/Fail** | Pass = loud fail |
| **Severity** | Major |

---

### 3.4 Beat path / narrative (`GAME-QA-NAR-*`)

#### GAME-QA-NAR-001 — Spine beat sequence (data + runtime)

| Field | Content |
|-------|---------|
| **Precondition** | Locked spine beat list in QA matrices L3. |
| **Steps** | 1. Play or video through listed spine beats in order. 2. Tick each beat id reached. |
| **Expected** | All listed spine beats reached without skip. |
| **Evidence** | `.../GAME-QA-NAR-001_<date>_spine_checklist.md` + runtime capture |
| **Pass/Fail** | Pass = full spine |
| **Severity** | **Critical** |

#### GAME-QA-NAR-002 — Dialogue `dlg.*` text match

| Field | Content |
|-------|---------|
| **Precondition** | Locked dialogue pack. |
| **Steps** | 1. At sampled spine lines, compare on-screen/subtitle text to locked `dlg.*`. 2. Log mismatches with key ids only. |
| **Expected** | Exact match for sampled keys (minimum: start + first gate + pre-ending). |
| **Evidence** | `.../GAME-QA-NAR-002_<date>_dlg_match.md` + capture |
| **Pass/Fail** | Pass = match |
| **Severity** | Major |

#### GAME-QA-NAR-003 — Voiced line plays for locked `dlg.*`

| Field | Content |
|-------|---------|
| **Precondition** | VO assets in build for sampled lines. |
| **Steps** | 1. Trigger voiced lines on spine samples. 2. Confirm audio bus plays (not placeholder beep). 3. Listen log: tester, HKT, pass/fail. |
| **Expected** | VO plays for locked keys on spine samples. |
| **Evidence** | `.../GAME-QA-NAR-003_<date>_vo_listen.txt` |
| **Pass/Fail** | Pass = VO present |
| **Severity** | Major |

#### GAME-QA-NAR-004 — Funded endings only

| Field | Content |
|-------|---------|
| **Precondition** | Ending budget / funded endings listed in design pack. |
| **Steps** | 1. Reach canonical ending milestone in UAT path. 2. Verify only funded endings exposed (no stub “TO BE CONTINUED” gate as ship). |
| **Expected** | Ending matches funded set. |
| **Evidence** | `.../GAME-QA-NAR-004_<date>_ending_capture.png` or `.mp4` |
| **Pass/Fail** | Pass = funded ending |
| **Severity** | **Critical** |

#### GAME-QA-NAR-005 — Branch stub discipline

| Field | Content |
|-------|---------|
| **Precondition** | Non-spine branches marked in beat sheet. |
| **Steps** | 1. Spot-check optional branches for crash/hang. 2. Log if branch is explicitly out of UAT scope. |
| **Expected** | No crash on optional branches; out-of-scope marked N/A with why. |
| **Evidence** | `.../GAME-QA-NAR-005_<date>_branch_notes.md` |
| **Pass/Fail** | Pass = no crash or scoped N/A |
| **Severity** | Minor |

#### GAME-QA-NAR-006 — Scene transition integrity

| Field | Content |
|-------|---------|
| **Precondition** | Spine includes scene changes. |
| **Steps** | 1. Cross each scene transition on spine. 2. Verify loading screen / fade completes; no black hang. |
| **Expected** | Transitions complete < hang threshold (SKU perf budget). |
| **Evidence** | `.../GAME-QA-NAR-006_<date>_transitions.mp4` |
| **Pass/Fail** | Pass = clean transitions |
| **Severity** | Major |

---

### 3.5 Combat / gates (`GAME-QA-CMB-*`)

#### GAME-QA-CMB-001 — Fail → story-safe retry

| Field | Content |
|-------|---------|
| **Precondition** | First mandatory combat or gate on spine. |
| **Steps** | 1. Intentionally fail encounter. 2. Verify retry / story-safe loop (not hard game-over without recovery). 3. Capture fail and retry UI. |
| **Expected** | Fail path returns player to narrative-safe state per design pack. |
| **Evidence** | `content/<SKU>/qa/phase/GAME-QA-CMB-001_<date>_fail_retry.mp4` |
| **Pass/Fail** | Pass = story-safe retry |
| **Severity** | **Critical** |

#### GAME-QA-CMB-002 — No mandatory grind to progress

| Field | Content |
|-------|---------|
| **Precondition** | Encounter budget doc frozen. |
| **Steps** | 1. Progress spine without optional farming loops. 2. Count required combats to next beat. |
| **Expected** | Within encounter budget; no forced grind gate. |
| **Evidence** | `.../GAME-QA-CMB-002_<date>_grind_audit.md` |
| **Pass/Fail** | Pass = within budget |
| **Severity** | Major |

#### GAME-QA-CMB-003 — Soft-lock hunt (canonical path)

| Field | Content |
|-------|---------|
| **Precondition** | Phase regression window; known good save optional. |
| **Steps** | 1. Walk canonical path 60+ minutes equivalent or full chapter scope. 2. Note stuck states (UI modal, invisible wall, unskippable dialog). |
| **Expected** | 0 soft-locks on canonical path. |
| **Evidence** | `.../GAME-QA-CMB-003_<date>_softlock_hunt.md` |
| **Pass/Fail** | Pass = 0 soft-locks |
| **Severity** | **Critical** |

#### GAME-QA-CMB-004 — Gate win condition clarity

| Field | Content |
|-------|---------|
| **Precondition** | First gate on spine. |
| **Steps** | 1. Enter gate cold. 2. Verify objective readable without external doc. |
| **Expected** | Player can infer win condition from in-build cues. |
| **Evidence** | `.../GAME-QA-CMB-004_<date>_gate_ui.png` |
| **Pass/Fail** | Pass = clear objective |
| **Severity** | Minor |

#### GAME-QA-CMB-005 — Encounter teardown (no input lock)

| Field | Content |
|-------|---------|
| **Precondition** | Combat encounter completes. |
| **Steps** | 1. Win encounter. 2. Verify input restored; no permanent pause lock. |
| **Expected** | Control returns after encounter end. |
| **Evidence** | `.../GAME-QA-CMB-005_<date>_teardown.mp4` |
| **Pass/Fail** | Pass = input restored |
| **Severity** | Major |

---

### 3.6 Session / L0 (`GAME-QA-SES-*`)

Per [L0_SESSION_SAVE_POLICY.md](./templates/L0_SESSION_SAVE_POLICY.md).

#### GAME-QA-SES-001 — Pause / resume mid-beat

| Field | Content |
|-------|---------|
| **Precondition** | Build supports platform pause. |
| **Steps** | 1. Open [L0_SESSION_SAVE_POLICY.md](./templates/L0_SESSION_SAVE_POLICY.md); locate pause/resume requirement row. 2. Mid-spine on `build_ref`, trigger platform pause (or documented pause binding). 3. Wait ≥30s; resume. 4. Capture 15s `.mp4` showing no duplicate beat triggers and playable state restored. |
| **Expected** | Resume without corruption or duplicate triggers. |
| **Evidence** | `content/<SKU>/qa/phase/GAME-QA-SES-001_<date>_pause_resume.mp4` |
| **Pass/Fail** | Pass = clean resume |
| **Severity** | Major |

#### GAME-QA-SES-002 — Save / load checkpoint (if wired)

| Field | Content |
|-------|---------|
| **Precondition** | Save policy declares checkpoint behavior. |
| **Steps** | 1. Save at mid-spine. 2. Kill app; reload. 3. Verify beat/progress restored. |
| **Expected** | Matches L0 policy — or N/A if save not wired with why. |
| **Evidence** | `.../GAME-QA-SES-002_<date>_save_load.mp4` |
| **Pass/Fail** | Pass = policy met or N/A documented |
| **Severity** | Major |

#### GAME-QA-SES-003 — Session end / chapter boundary

| Field | Content |
|-------|---------|
| **Precondition** | Chapter milestone defined. |
| **Steps** | 1. Complete chapter boundary. 2. Verify return to safe hub or title per policy. |
| **Expected** | Clean session end without hang. |
| **Evidence** | `.../GAME-QA-SES-003_<date>_chapter_end.png` |
| **Pass/Fail** | Pass = clean end |
| **Severity** | Minor |

#### GAME-QA-SES-004 — Background / suspend (platform)

| Field | Content |
|-------|---------|
| **Precondition** | Target platform supports suspend. |
| **Steps** | 1. Suspend app during dialog. 2. Resume. 3. Check dialog state machine. |
| **Expected** | No stuck dialog; audio bus sane. |
| **Evidence** | `.../GAME-QA-SES-004_<date>_suspend.mp4` |
| **Pass/Fail** | Pass = recoverable |
| **Severity** | Major |

---

### 3.7 Locale critical (`GAME-QA-LOC-*`)

#### GAME-QA-LOC-001 — Zero missing critical keys (in-build)

| Field | Content |
|-------|---------|
| **Precondition** | Critical locale list frozen per [LOCALE_READINESS_CHECKLIST.md](./templates/LOCALE_READINESS_CHECKLIST.md). |
| **Steps** | 1. Run build in each critical locale. 2. Walk spine samples; log missing key warnings/errors. |
| **Expected** | **0** missing critical keys in UI/subtitles on spine samples. |
| **Evidence** | `content/<SKU>/qa/phase/GAME-QA-LOC-001_<date>_critical_keys.md` |
| **Pass/Fail** | Pass = 0 missing |
| **Severity** | **Critical** |

#### GAME-QA-LOC-002 — Critical VO present per locale

| Field | Content |
|-------|---------|
| **Precondition** | VO manifest per locale. |
| **Steps** | 1. Sample spine `dlg.*` per critical locale. 2. Confirm audio plays or documented text-only fallback. |
| **Expected** | No silent fallback for voiced-critical lines without waiver. |
| **Evidence** | `.../GAME-QA-LOC-002_<date>_vo_locale_listen.txt` |
| **Pass/Fail** | Pass = VO or approved fallback |
| **Severity** | **Critical** |

#### GAME-QA-LOC-003 — Placeholder parity (no raw keys visible)

| Field | Content |
|-------|---------|
| **Precondition** | Build candidate for ship locales. |
| **Steps** | 1. Scan UI for `dlg.*` / `LOC_*` raw keys on screen. 2. Capture violations. |
| **Expected** | No raw localization keys visible to player on spine path. |
| **Evidence** | `.../GAME-QA-LOC-003_<date>_placeholder_scan.png` |
| **Pass/Fail** | Pass = no raw keys |
| **Severity** | Major |

#### GAME-QA-LOC-004 — Font tofu / missing glyph

| Field | Content |
|-------|---------|
| **Precondition** | CJK or extended charset locales in scope. |
| **Steps** | 1. Open dialog with full charset sample lines. 2. Visual scan for tofu boxes. |
| **Expected** | Readable glyphs for critical locales. |
| **Evidence** | `.../GAME-QA-LOC-004_<date>_font_tofu.png` |
| **Pass/Fail** | Pass = no tofu on samples |
| **Severity** | Major |

#### GAME-QA-LOC-005 — Locale switch mid-session (if supported)

| Field | Content |
|-------|---------|
| **Precondition** | In-build locale switch enabled. |
| **Steps** | 1. Switch locale mid-dialog. 2. Verify text refreshes; no crash. |
| **Expected** | Safe switch or N/A with why. |
| **Evidence** | `.../GAME-QA-LOC-005_<date>_locale_switch.mp4` |
| **Pass/Fail** | Pass = safe or N/A |
| **Severity** | Minor |

---

### 3.8 Accessibility (`GAME-QA-A11Y-*`)

Spot checks per [ACCESSIBILITY_BASELINE.md](./templates/ACCESSIBILITY_BASELINE.md) — evidence **in-build**, not checklist-only.

#### GAME-QA-A11Y-001 — Text size / contrast spot (HUD + dialog)

| Field | Content |
|-------|---------|
| **Precondition** | Baseline documents minimum sizes/contrast targets. |
| **Steps** | 1. Open [ACCESSIBILITY_BASELINE.md](./templates/ACCESSIBILITY_BASELINE.md); list row IDs marked for in-build spot (contrast/size). 2. On `build_ref`, screenshot default HUD and one dialog line. 3. In evidence `.md`, cite each baseline row ID with Pass/Fail and screenshot filename. |
| **Expected** | Meets baseline or logged defect with severity. |
| **Evidence** | `content/<SKU>/qa/phase/GAME-QA-A11Y-001_<date>_contrast.png` |
| **Pass/Fail** | Pass = meets baseline |
| **Severity** | Major |

#### GAME-QA-A11Y-002 — Focus / navigation order (menus)

| Field | Content |
|-------|---------|
| **Precondition** | Controller or keyboard nav wired. |
| **Steps** | 1. Navigate main menu and pause menu via focus order. 2. Note traps or unreachable items. |
| **Expected** | Reachable settings and resume without mouse-only dead ends. |
| **Evidence** | `.../GAME-QA-A11Y-002_<date>_focus_nav.mp4` |
| **Pass/Fail** | Pass = no traps |
| **Severity** | Major |

#### GAME-QA-A11Y-003 — Subtitle legibility during combat

| Field | Content |
|-------|---------|
| **Precondition** | Subtitles enabled. |
| **Steps** | 1. Trigger dialog during combat VFX. 2. Verify subtitle readability. |
| **Expected** | Subtitles readable against busy background (baseline). |
| **Evidence** | `.../GAME-QA-A11Y-003_<date>_subtitles_combat.png` |
| **Pass/Fail** | Pass = readable |
| **Severity** | Minor |

#### GAME-QA-A11Y-004 — Photosensitivity / flash spot (if applicable)

| Field | Content |
|-------|---------|
| **Precondition** | VFX list includes strobing effects. |
| **Steps** | 1. Review flagged effects in build. 2. Compare to baseline flash guidance. |
| **Expected** | No unreviewed rapid flash on spine without waiver. |
| **Evidence** | `.../GAME-QA-A11Y-004_<date>_flash_review.md` |
| **Pass/Fail** | Pass = reviewed |
| **Severity** | Major |

---

### 3.9 UAT (`GAME-QA-UAT-*`)

#### GAME-QA-UAT-001 — Real build viewport (not editor mock)

| Field | Content |
|-------|---------|
| **Precondition** | UAT build id logged in QA matrices header. |
| **Steps** | 1. Open scorecard header: `build_ref` must name player binary/artifact (not docs-only). 2. List `content/<SKU>/qa/uat/` — at least one `.png` or `.mp4` must exist before UAT PASS. 3. If only spreadsheet/matrix PASS with no files → mark **Fail** (paper green); cite GAME-QA-EVD-001. 4. Screenshot file properties or first video frame must show runtime HUD (not slide/editor chrome). |
| **Expected** | Evidence from ship/candidate player build. |
| **Evidence** | `content/<SKU>/qa/uat/GAME-QA-UAT-001_<date>_build_proof.txt` |
| **Pass/Fail** | Fail = editor mock |
| **Severity** | **Critical** |

#### GAME-QA-UAT-002 — Primary beat path play or runtime video

| Field | Content |
|-------|---------|
| **Precondition** | UAT scope beats listed in matrices L3. |
| **Steps** | 1. Record full primary path play **or** uncut runtime video. 2. Index timestamps to beat ids. |
| **Expected** | Complete primary path without debug skip. |
| **Evidence** | `.../GAME-QA-UAT-002_<date>_primary_path.mp4` |
| **Pass/Fail** | Pass = complete path |
| **Severity** | **Critical** |

#### GAME-QA-UAT-003 — Fail path exercised

| Field | Content |
|-------|---------|
| **Precondition** | UAT-002 in progress or complete. |
| **Steps** | 1. Include at least one combat/gate fail and retry in recording. 2. Mark timestamp. |
| **Expected** | Fail path visible in evidence — not happy-path only. |
| **Evidence** | `.../GAME-QA-UAT-003_<date>_fail_path_clip.mp4` |
| **Pass/Fail** | Pass = fail shown |
| **Severity** | Major |

#### GAME-QA-UAT-004 — Dialogue fidelity on UAT path

| Field | Content |
|-------|---------|
| **Precondition** | Locked `dlg.*` for UAT beats. |
| **Steps** | 1. On UAT recording, spot-check dialog against script for all UAT beats. |
| **Expected** | Match locked script. |
| **Evidence** | `.../GAME-QA-UAT-004_<date>_dlg_uat_audit.md` |
| **Pass/Fail** | Pass = match |
| **Severity** | Major |

#### GAME-QA-UAT-005 — Combat budget on UAT path

| Field | Content |
|-------|---------|
| **Precondition** | Encounter budget doc. |
| **Steps** | 1. Count mandatory fights on UAT path from recording. 2. Compare to budget. |
| **Expected** | No surprise mandatory grind. |
| **Evidence** | `.../GAME-QA-UAT-005_<date>_encounter_count.md` |
| **Pass/Fail** | Pass = within budget |
| **Severity** | Major |

#### GAME-QA-UAT-006 — UAT defect closure gate

| Field | Content |
|-------|---------|
| **Precondition** | Open Critical/Major defects logged. |
| **Steps** | 1. List open defects by severity. 2. Verify Critical = 0 for UAT submission. |
| **Expected** | No open Critical defects at UAT pack submit. |
| **Evidence** | `.../GAME-QA-UAT-006_<date>_defect_gate.md` |
| **Pass/Fail** | Fail = open Critical |
| **Severity** | **Critical** |

---

### 3.10 Release (`GAME-QA-REL-*`)

Platforms / markets **TBD** — do not invent store names; use checklist placeholders.

#### GAME-QA-REL-001 — [STREAM_PACKAGING_CHECKLIST.md](./templates/STREAM_PACKAGING_CHECKLIST.md) complete

| Field | Content |
|-------|---------|
| **Precondition** | Release candidate build frozen. |
| **Steps** | 1. Copy [STREAM_PACKAGING_CHECKLIST.md](./templates/STREAM_PACKAGING_CHECKLIST.md) to `content/<SKU>/qa/release/STREAM_PACKAGING_<date>.md`. 2. Fill every row (Pass/Fail + evidence path per row). 3. Save filled copy as REL-001 evidence — no empty path cells on Pass rows. |
| **Expected** | All required rows filled or N/A with why. |
| **Evidence** | `content/<SKU>/qa/release/GAME-QA-REL-001_<date>_stream_packaging.pdf` or `.md` |
| **Pass/Fail** | Pass = complete checklist |
| **Severity** | Major |

#### GAME-QA-REL-002 — [RATINGS_CONTENT_MATRIX.md](./templates/RATINGS_CONTENT_MATRIX.md) vs build

| Field | Content |
|-------|---------|
| **Precondition** | Ratings matrix started in concept; updated for RC. |
| **Steps** | 1. For each disclosed category, verify matching content in RC build. 2. Log under-disclosure risks. |
| **Expected** | Matrix honestly matches build (no under-disclosure). |
| **Evidence** | `.../GAME-QA-REL-002_<date>_ratings_matrix_audit.md` |
| **Pass/Fail** | Fail = mismatch |
| **Severity** | **Critical** |

#### GAME-QA-REL-003 — Store strings / locale parity (targets TBD)

| Field | Content |
|-------|---------|
| **Precondition** | Target markets list from Stephen (may be empty in kit). |
| **Steps** | 1. For each declared market locale, verify store string pack placeholder row exists. 2. Cross-check in-build locale against store metadata sample. |
| **Expected** | Parity for declared markets — or explicit TBD logged. |
| **Evidence** | `.../GAME-QA-REL-003_<date>_store_locale_parity.md` |
| **Pass/Fail** | Pass = parity or TBD documented |
| **Severity** | Major |

#### GAME-QA-REL-004 — Perf within frozen budget

| Field | Content |
|-------|---------|
| **Precondition** | Perf budget document for SKU. |
| **Steps** | 1. Run agreed perf scene/profile on RC. 2. Log FPS / frame time vs budget. |
| **Expected** | Within frozen budget or waiver with Tech Lead why. |
| **Evidence** | `.../GAME-QA-REL-004_<date>_perf_log.txt` |
| **Pass/Fail** | Pass = in budget or waived |
| **Severity** | Major |

#### GAME-QA-REL-005 — AI-generated / mature content disclosure

| Field | Content |
|-------|---------|
| **Precondition** | Platform disclosure rules collected (high-level NON_ART §12). |
| **Steps** | 1. Verify generative-AI and mature flags in matrix match store questionnaire drafts. 2. No fabricated answers. |
| **Expected** | Disclosures align with build facts. |
| **Evidence** | `.../GAME-QA-REL-005_<date>_disclosure_align.md` |
| **Pass/Fail** | Pass = aligned |
| **Severity** | **Critical** |

---

### 3.11 Live (`GAME-QA-LIVE-*`)

#### GAME-QA-LIVE-001 — Telemetry schema smoke

| Field | Content |
|-------|---------|
| **Precondition** | [telemetry.events.schema.json](./schemas/telemetry.events.schema.json) wired in staging. |
| **Steps** | 1. Emit sample session events. 2. Validate against schema. |
| **Expected** | Events validate; required fields present. |
| **Evidence** | `content/<SKU>/qa/live/GAME-QA-LIVE-001_<date>_telemetry_sample.json` |
| **Pass/Fail** | Pass = valid events |
| **Severity** | Major |

#### GAME-QA-LIVE-002 — Session start success signal

| Field | Content |
|-------|---------|
| **Precondition** | Live dashboard or log access (threshold **TBD**). |
| **Steps** | 1. Record session start success rate for window. 2. Compare to band in QA matrices L5. |
| **Expected** | Within band or triage row opened. |
| **Evidence** | `.../GAME-QA-LIVE-002_<date>_session_start.md` |
| **Pass/Fail** | Pass = in band or triaged |
| **Severity** | Major |

#### GAME-QA-LIVE-003 — Crash-free sessions band

| Field | Content |
|-------|---------|
| **Precondition** | Crash reporting enabled. |
| **Steps** | 1. Pull crash-free rate for 24h window. 2. Log vs threshold TBD. |
| **Expected** | Within band or hotfix queue row. |
| **Evidence** | `.../GAME-QA-LIVE-003_<date>_crash_free.md` |
| **Pass/Fail** | Pass = in band or triaged |
| **Severity** | **Critical** (if below band) |

#### GAME-QA-LIVE-004 — [LIVE_OPS_HOTFIX_TALE_QUEUE.md](./templates/LIVE_OPS_HOTFIX_TALE_QUEUE.md) triage row

| Field | Content |
|-------|---------|
| **Precondition** | Anomaly detected (locale errors, beat drop-off). |
| **Steps** | 1. Open triage row with signal, severity, owner. 2. Link evidence paths. |
| **Expected** | Row complete per template — not verbal Slack-only triage. |
| **Evidence** | `.../GAME-QA-LIVE-004_<date>_triage_row.md` |
| **Pass/Fail** | Pass = row filed |
| **Severity** | Minor |

---

### 3.12 Evidence integrity (`GAME-QA-EVD-*`)

#### GAME-QA-EVD-001 — Artifact path resolves on disk

| Field | Content |
|-------|---------|
| **Precondition** | Scorecard submitted with PASS rows. |
| **Steps** | 1. Export PASS rows from [GAME_QA_SCORECARD.md](./templates/GAME_QA_SCORECARD.md). 2. For each `evidence path`, run `test -f "<path>"` (or `test -e` for directories). 3. List any missing paths in audit file — **one missing → Fail** (paper green). |
| **Expected** | 100% path resolution for PASS rows. |
| **Evidence** | `content/<SKU>/qa/evidence/GAME-QA-EVD-001_<date>_path_audit.md` |
| **Pass/Fail** | Fail = paper green |
| **Severity** | **Critical** |

#### GAME-QA-EVD-002 — No Soft CI / CONDITIONAL as PASS

| Field | Content |
|-------|---------|
| **Precondition** | Phase or UAT pack review. |
| **Steps** | 1. Scan scorecard and matrices for CONDITIONAL / Soft CI language. 2. Reject as PASS. |
| **Expected** | Full **GO/NO** only. |
| **Evidence** | `.../GAME-QA-EVD-002_<date>_no_soft_ci.md` |
| **Pass/Fail** | Fail = Soft CI accepted |
| **Severity** | **Critical** |

#### GAME-QA-EVD-003 — Build/tip header complete

| Field | Content |
|-------|---------|
| **Precondition** | Any L2+ evidence pack. |
| **Steps** | 1. Verify QA matrices header: `sku_id`, build/tip, `schema_version`, tester, HKT. |
| **Expected** | All header fields filled. |
| **Evidence** | `.../GAME-QA-EVD-003_<date>_header.png` (screenshot of filled header) |
| **Pass/Fail** | Pass = complete header |
| **Severity** | Major |

#### GAME-QA-EVD-004 — Retest after Critical fix

| Field | Content |
|-------|---------|
| **Precondition** | Critical defect fixed. |
| **Steps** | 1. Re-run mapped GAME-QA cases for fix area. 2. Attach new evidence dated after fix. |
| **Expected** | No close without retest artifact. |
| **Evidence** | `.../GAME-QA-EVD-004_<date>_retest_log.md` |
| **Pass/Fail** | Fail = closed without retest |
| **Severity** | **Critical** |

---

### 3.13 SKU evidence pack roll-up (`GAME-QA-PACK-*`)

#### GAME-QA-PACK-001 — L2 phase suite coverage

| Field | Content |
|-------|---------|
| **Precondition** | Phase regression scheduled. |
| **Steps** | 1. Execute all L2-mapped cases in §4 for SKU. 2. Summarize pass/fail counts by area. |
| **Expected** | All L2 areas covered or N/A with why. |
| **Evidence** | `content/<SKU>/qa/phase/GAME-QA-PACK-001_<date>_L2_coverage.md` |
| **Pass/Fail** | Fail = missing L2 area |
| **Severity** | **Critical** |

#### GAME-QA-PACK-002 — UAT evidence bundle

| Field | Content |
|-------|---------|
| **Precondition** | UAT cases complete. |
| **Steps** | 1. Bundle UAT-001…006 paths in scorecard. 2. Verify primary video plays. |
| **Expected** | Complete UAT bundle linked. |
| **Evidence** | `.../GAME-QA-PACK-002_<date>_uat_index.md` |
| **Pass/Fail** | Fail = incomplete UAT |
| **Severity** | **Critical** |

#### GAME-QA-PACK-003 — Release checklist attachment

| Field | Content |
|-------|---------|
| **Precondition** | Release QA started. |
| **Steps** | 1. Attach REL-001…005 artifacts. 2. Cross-link ratings matrix. |
| **Expected** | Release rows evidence-backed. |
| **Evidence** | `.../GAME-QA-PACK-003_<date>_release_index.md` |
| **Pass/Fail** | Fail = tick-only release |
| **Severity** | Major |

#### GAME-QA-PACK-004 — No paper green (pack)

| Field | Content |
|-------|---------|
| **Precondition** | Phase QA GO **request** (not stamp) submitted. |
| **Steps** | 1. Run EVD-001…002 on full pack. 2. QA Lead signs roll-up GO/NO. |
| **Expected** | Every PASS has file; no Soft CI. |
| **Evidence** | `.../GAME-QA-PACK-004_<date>_integrity.md` |
| **Pass/Fail** | Fail = paper green |
| **Severity** | **Critical** |

---

## 4. Mapping: NON_ART §11 / Master Plan §3.9 / QA_MATRICES → GAME-QA IDs

| Source | Topic | Primary GAME-QA IDs |
|--------|-------|---------------------|
| NON_ART §11 workflow step 1 | Task QA | SCH-001…008, HOFF-001…006 (L1 tasks) |
| NON_ART §11 step 2 | Phase regression | LOAD-*, CMB-*, SES-*, LOC-*, A11Y-*, SCH-001, PACK-001 |
| NON_ART §11 step 3 | UAT | UAT-001…006, NAR-001…004, PACK-002 |
| NON_ART §11 step 6 | Release QA | REL-001…005, PACK-003 |
| NON_ART §12 | Publish / disclosure | REL-002, REL-005 |
| Master Plan §3.9 | Task gate | SCH-*, HOFF-* |
| Master Plan §3.9 | Phase gate | PACK-001, CMB-003, EVD-* |
| Master Plan §3.9 | UAT gate | UAT-*, NAR-* |
| QA_MATRICES L1 | Non-art task rows | SCH-*, HOFF-* |
| QA_MATRICES L1 | Art rows | **ART-QA** (not this kit) |
| QA_MATRICES L2 | Phase table rows | See §4.1 |
| QA_MATRICES L3 | UAT criteria | UAT-*, NAR-* |
| QA_MATRICES L4 | Release checks | REL-* |
| QA_MATRICES L5 | Live signals | LIVE-* |
| HANDOFF_SMOKE | Consumer smoke | HOFF-*, SCH-004…008 |

### 4.1 QA_MATRICES L2 row → case IDs

| QA_MATRICES L2 area | GAME-QA IDs |
|---------------------|-------------|
| Schema / pack | SCH-001, SCH-002, SCH-003 |
| Load | LOAD-001, LOAD-002 |
| Combat | CMB-001, CMB-002, CMB-005 |
| Locale critical | LOC-001, LOC-002, LOC-003 |
| Session | SES-001, SES-002, SES-004 |
| Soft-lock hunt | CMB-003 |
| Accessibility spot | A11Y-001, A11Y-002 |

---

## 5. SKU / phase scorecard (fillable)

Copy per SKU / build: [templates/GAME_QA_SCORECARD.md](./templates/GAME_QA_SCORECARD.md).

**Roll-up rules:**

1. Execute cases mapped in §4 for the target layer (L1 task, L2 phase, L3 UAT, L4 release, L5 live).  
2. **Any Critical fail → phase/UAT pack NO** until retest passes (EVD-004).  
3. QA Lead signs **GO/NO + why** on roll-up — does **not** replace Stephen UAT/Release GO or Tech Lead Schema GO.  
4. Attach scorecard path in output contract `paths`.  
5. Art L1 remains on ART_QA scorecard — do not merge art task evidence into game pack without both scorecards linked.

---

## 6. Avoid list (game QA)

| Avoid | Why | Case anchor |
|-------|-----|-------------|
| Spreadsheet PASS without files | Paper green | EVD-001, PACK-004 |
| Soft CI / CONDITIONAL | Master Plan §6 | EVD-002, HOFF-006 |
| Editor mock as UAT | NON_ART §11 | UAT-001 |
| Happy-path-only UAT | Skips fail law | UAT-003, CMB-001 |
| Testing design docs not builds | False integration confidence | LOAD-001, UAT-002 |
| Changing design to pass bad test | QA ethics | Escalate — NON_ART §11 |
| Quiet `handoff.lock` hash edits | Integrity | HOFF-002 |
| Greybox / placeholder as ship | Arts-before-dev | HOFF-006 |
| Raw `dlg.*` on screen | Locale critical | LOC-003 |
| Invented store platforms | Stephen scope | REL-003 (TBD only) |
| Auto-close defects without retest | Live incident risk | EVD-004 |
| Art task PASS without ART_QA paths | Wrong kit | ART_QA PACK-004 |

---

## 7. Residual / open (factory owners)

- **Schema GO**, **Phase QA GO**, **UAT GO**, **Release GO** — human gates; not stamped in this kit.  
- Stephen §17 decisions (platform targets, markets, git tip model) — remain **TBD**; cases use placeholders.  
- Numeric perf / telemetry thresholds — set per SKU in QA matrices L5; cases log **TBD** until frozen.  
- Automated QA suite wiring beyond matrices — Tech Lead; `validate:pass` is CI today, runtime suite **partial**.  
- SDK-specific session save — see L0 policy; SES cases may be N/A until wired.

---

**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) · **Track A6:** [templates/QA_MATRICES.md](./templates/QA_MATRICES.md)
