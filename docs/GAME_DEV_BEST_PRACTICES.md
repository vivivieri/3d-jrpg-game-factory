# Game Dev Best Practices — executable implementer kit (Track A5 + B4)

**Status:** Procedural leaf — **not** a GO stamp. Laws remain in [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (§3.8, §6, B4).  
**Scope:** Cursor 3.0 PM **game.dev** implementer path — import locked packs, assemble Godot-oriented scenes/systems, emit playable **build tip** evidence. **After** handoff smoke GO and Stephen factory open.  
**Engine:** **CONFIRMED** Godot 4.x 3D (first-SKU) — Master Plan [§17](./FACTORY_MASTER_PLAN.md#17-open-decisions); cases are Godot-oriented.  
**Craft law:** [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) §10 handoff/Cursor contract — this leaf **cites** §10; does not replace it.  
**Intake smoke (before this kit):** [templates/HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md) — GAME_DEV starts **after** smoke GO, not instead of it.  
**Test the build (downstream):** [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) — GAME_DEV = how to build; GAME_QA = how to test `build_ref`.

---

## 1. Scope and gate relationship

| Layer | Owner | Kit | Exit |
|-------|-------|-----|------|
| **Handoff smoke** | Tech / PM | HANDOFF_SMOKE_CONSUMER + GAME-QA-HOFF-* | **Track A5 Contract GO (kit)** in [KIT_GO_LOG.md](./KIT_GO_LOG.md); per-SKU smoke GO still human |
| **Authorization** | Stephen + PM | §3.1 GAME-DEV-AUTH-* | Factory **open** logged — not a GO stamp |
| **Implementer intake** | Tech / Cursor | §3.2 GAME-DEV-INTAKE-* | Frozen pack re-verified on disk |
| **Import + assemble** | Cursor game.dev | §3.3–3.8 IMP/SCN/DLG/INT/CMB | Scene/system bindings vs SSOT |
| **L0 / locale bind** | Cursor game.dev | §3.9–3.10 SES/LOC | Policy + locale pack wired |
| **Build tip** | Tech / Cursor | §3.11 GAME-DEV-BLD-* | Playable `build_ref` + logs — **Build tip GO = human** |
| **PM hooks** | PM | §3.12 GAME-DEV-PM-* | Schedule + one `issue_pack_ref` |
| **Evidence integrity** | Tech / PM | §3.13 GAME-DEV-EVD-* | No paper greens before QA handoff |

**Rule:** Paper greens, spreadsheet PASS without artifacts, editor-only greybox sold as ship, **Soft CI**, **CONDITIONAL**, and Cursor-invented beats/lore/combat/art are **forbidden** (NON_ART §10, Master Plan §6).

**Output contract (every game.dev exit):** `status · why · paths · next · blocked_on` — [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md).

---

## 2. Evidence standards

| Evidence type | Required for | Not sufficient alone |
|---------------|--------------|----------------------|
| **Validator log** on frozen `pack_path` | Intake + import gate | Verbal “pack looked fine” |
| **`handoff.lock` hash audit** | INTAKE-* | Lock present but hashes not recomputed |
| **Import manifest diff** | IMP-* | Manual drag-drop without manifest rows |
| **Godot export log** | BLD-* | Editor Play without export |
| **`build_ref` path** | BLD-006, QA handoff | Scene tree screenshot only |
| **Locale in-build spot** | LOC-* | Spreadsheet key list |

**Artifact path pattern (per case):**

```
content/<SKU>/dev/<layer>/GAME-DEV-<AREA>-###_<YYYYMMDD>_<short_label>.<ext>
```

`<layer>` examples: `auth`, `intake`, `import`, `scene`, `dialogue`, `interact`, `combat`, `session`, `locale`, `build`, `pm`, `evidence`.  
Examples: `.../dev/intake/GAME-DEV-INTAKE-002_20261016_hash_audit.md`, `.../dev/build/GAME-DEV-BLD-004_20261016_export.log`.

**Severity (roll-up law):**

| Severity | Meaning | Build roll-up |
|----------|---------|---------------|
| **Critical** | Wrong pack, hash fraud class, invented content, missing spine asset, no fail-loud on bad ref | **Fail** until fixed + retest |
| **Major** | Wrong POI/bind, locale critical path broken, combat table drift | Fail area; blocks tip handoff if on spine |
| **Minor** | Non-spine polish, documented waiver | Does not alone block if logged |

---

## 2.1 Workability bar (Stephen)

This kit is **executable today**, not theory.

| Rule | Enforcement |
|------|-------------|
| **No case without an evidence artifact path** | Every GAME-DEV row ends with a path under `content/<SKU>/dev/...`; matrix PASS alone = **paper green** → Fail (GAME-DEV-EVD-001). |
| **N/A only with why** | Log one-line `why` on [GAME_DEV_SCORECARD.md](./templates/GAME_DEV_SCORECARD.md); unscoped N/A is **NO**. |
| **Critical fail blocks roll-up** | Any Critical Fail → build pack **NO** until GAME-DEV-EVD-004 retest passes. |
| **Full GO/NO only** | Soft CI, CONDITIONAL, and “ensure good code” sign-off are **forbidden**. |
| **Runnable steps** | Each case names a **repo command**, a **Godot/Cursor agent action**, or a **file check** on frozen inputs — never vague “implement properly.” |
| **Frozen handoff only** | No beat/lore/combat/art invention; no quiet `handoff.lock` edits (NON_ART §10). |

### Repo command crib (copy per run)

```bash
# Once per machine / after package.json change
npm ci --prefix tools/validate-content-pack

# CI fixture (validators healthy — run before PRs in this kit repo)
npm run validate:pass

# Locked SKU pack (replace path)
node tools/validate-content-pack/validate.mjs path/to/content-pack.yaml
# Expect stdout: validate-content-pack: PASS <abs-path>

# handoff.lock inside pack YAML — docs/schemas/handoff-lock.schema.json
# Hash recompute (replace blob paths; compare lowercase hex to handoff.lock.*_hash)
sha256sum path/to/design_pack_blob | awk '{print $1}'
sha256sum path/to/art_pack_manifest_or_archive | awk '{print $1}'

# Evidence must exist before scorecard PASS
test -f "content/<SKU>/dev/intake/GAME-DEV-INTAKE-008_<YYYYMMDD>_validate_pass.log"

# Optional: prove validate:fail fixture still fails
npm run validate:fail; test $? -eq 1
```

**Godot project (Cursor factory repo):** This **kit repo** does not host the engine tree. Record `godot_project_ref` (path or commit) in the scorecard header. Export commands in BLD-* assume **Godot 4.x** CLI on the implementer machine (first-SKU engine **CONFIRMED** per §17).

**Build logs:** Write export/CI logs under `content/<SKU>/dev/build/` and point QA at `build_ref` for [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) L2+.

Day-run order: [FACTORY_OPERATING_SOP.md](./FACTORY_OPERATING_SOP.md) Appendix B (Game dev).

---

## 3. Test-case library

Execute cases as written; mark **N/A** only with `why` in scorecard. Fillable checklist: [templates/GAME_DEV_TEST_CASES.md](./templates/GAME_DEV_TEST_CASES.md).

**Step law:** Preconditions name frozen inputs (`pack_path`, `handoff.lock` fields, `tip`, art MANIFEST path). Steps are numbered. “Expected” is observable. If automation is not wired yet, perform the manual action and still write the artifact — never substitute Soft CI.

### 3.1 Authorization / IDLE (`GAME-DEV-AUTH-*`)

#### GAME-DEV-AUTH-001 — Stephen factory open logged

| Field | Content |
|-------|---------|
| **Precondition** | Handoff smoke GO on record; game factory was IDLE. |
| **Steps** | 1. Confirm board/PM log contains Stephen **restart** or explicit **open** for Cursor game.dev (chat or ticket id). 2. Copy excerpt (no secrets) into evidence. 3. If only PM “please start” without Stephen open → **Fail** (arts-before-dev bypass). |
| **Expected** | Written authorization reference exists before any import branch work. |
| **Evidence** | `content/<SKU>/dev/auth/GAME-DEV-AUTH-001_<date>_factory_open.md` |
| **Pass/Fail** | Pass = open logged |
| **Severity** | **Critical** |

#### GAME-DEV-AUTH-002 — Art pack GO + Locale GO on record

| Field | Content |
|-------|---------|
| **Precondition** | SKU `issue_pack_ref` on board. |
| **Steps** | 1. Open Art pack GO + Locale GO reason logs (paths from PM handoff). 2. Verify dates precede Cursor start. 3. Paste `paths` from output contract into evidence. |
| **Expected** | Both GO logs exist; arts-before-dev satisfied. |
| **Evidence** | `.../GAME-DEV-AUTH-002_<date>_art_locale_go.md` |
| **Pass/Fail** | Pass = both GO paths cited |
| **Severity** | **Critical** |

#### GAME-DEV-AUTH-003 — No implementer work on wrong SKU

| Field | Content |
|-------|---------|
| **Precondition** | Board `issue_pack_ref` frozen. |
| **Steps** | 1. Read `sku_id` from locked `pack_path`. 2. Compare to board `issue_pack_ref.sku_id`. 3. Mismatch → stop and **Fail**. |
| **Expected** | Single live SKU for implementer session. |
| **Evidence** | `.../GAME-DEV-AUTH-003_<date>_sku_match.md` |
| **Pass/Fail** | Pass = ids match |
| **Severity** | **Critical** |

#### GAME-DEV-AUTH-004 — Session open output contract

| Field | Content |
|-------|---------|
| **Precondition** | Cursor agent or Tech session starting implementer pass. |
| **Steps** | 1. Emit output contract with `status`, `why`, `paths` (pack_path, tip), `next`, `blocked_on`. 2. Save message body to evidence. |
| **Expected** | All five fields non-empty (use `none` for empty blocked_on). |
| **Evidence** | `.../GAME-DEV-AUTH-004_<date>_session_open.md` |
| **Pass/Fail** | Pass = complete contract |
| **Severity** | Major |

#### GAME-DEV-AUTH-005 — No dual live tips without Tech policy

| Field | Content |
|-------|---------|
| **Precondition** | Git tip model **LOCKED** dual tip (design/art packs tip vs Cursor build tip — Master Plan §17). |
| **Steps** | 1. List active tips/branches claiming ship for same SKU on the **build** side. 2. If >1 build tip without Tech Lead written policy → **Fail**. 3. Record build tip id from `handoff.lock.tip` only; design/art pack tip may differ by policy. |
| **Expected** | One Cursor **build** tip per SKU unless Tech documents exception; dual tip model documented. |
| **Evidence** | `.../GAME-DEV-AUTH-005_<date>_tip_singular.md` |
| **Pass/Fail** | Fail = dual tips |
| **Severity** | **Critical** |

---

### 3.2 Post-smoke intake (`GAME-DEV-INTAKE-*`)

**Smoke checklist:** [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md) — do not duplicate; re-verify on implementer machine.

#### GAME-DEV-INTAKE-001 — Handoff smoke GO cited

| Field | Content |
|-------|---------|
| **Precondition** | HANDOFF_SMOKE_CONSUMER rows executed by Tech/QA. |
| **Steps** | 1. Link smoke exit output contract (`status: GO`). 2. Attach path to completed smoke log or GAME-QA-HOFF scorecard. 3. No smoke GO → do not run IMP-* . |
| **Expected** | Smoke GO path on disk before intake. |
| **Evidence** | `content/<SKU>/dev/intake/GAME-DEV-INTAKE-001_<date>_smoke_go_ref.md` |
| **Pass/Fail** | Pass = GO ref linked |
| **Severity** | **Critical** |

#### GAME-DEV-INTAKE-002 — `handoff.lock` required fields

| Field | Content |
|-------|---------|
| **Precondition** | Frozen pack YAML contains `handoff.lock`. |
| **Steps** | 1. Validate against [handoff-lock.schema.json](./schemas/handoff-lock.schema.json) (or grep fields). 2. Confirm `art_pack_hash`, `design_pack_hash`, `schema_version`, `tip`, `locked_at` non-empty. |
| **Expected** | All required fields present. |
| **Evidence** | `.../GAME-DEV-INTAKE-002_<date>_lock_fields.md` |
| **Pass/Fail** | Pass = all fields |
| **Severity** | **Critical** |

#### GAME-DEV-INTAKE-003 — Design pack hash match

| Field | Content |
|-------|---------|
| **Precondition** | Design pack blob path documented in handoff `paths`. |
| **Steps** | 1. `sha256sum <design_blob>` → lowercase hex. 2. Compare to `handoff.lock.design_pack_hash`. 3. Log both values in evidence. |
| **Expected** | Exact match. |
| **Evidence** | `.../GAME-DEV-INTAKE-003_<date>_design_hash.md` |
| **Pass/Fail** | Fail = mismatch |
| **Severity** | **Critical** |

#### GAME-DEV-INTAKE-004 — Art pack hash match

| Field | Content |
|-------|---------|
| **Precondition** | Art MANIFEST or archive path in handoff. |
| **Steps** | 1. `sha256sum` per Tech handoff doc (same blob smoke used). 2. Compare to `handoff.lock.art_pack_hash`. |
| **Expected** | Exact match. |
| **Evidence** | `.../GAME-DEV-INTAKE-004_<date>_art_hash.md` |
| **Pass/Fail** | Fail = mismatch |
| **Severity** | **Critical** |

#### GAME-DEV-INTAKE-005 — `schema_version` lock parity

| Field | Content |
|-------|---------|
| **Precondition** | Pack root `schema_version` set. |
| **Steps** | 1. Read pack `schema_version`. 2. Compare to `handoff.lock.schema_version`. 3. Mismatch → **Fail** (do not bump in Cursor). |
| **Expected** | Equal semver strings. |
| **Evidence** | `.../GAME-DEV-INTAKE-005_<date>_schema_parity.md` |
| **Pass/Fail** | Pass = equal |
| **Severity** | **Critical** |

#### GAME-DEV-INTAKE-006 — `tip` id recorded in scorecard

| Field | Content |
|-------|---------|
| **Precondition** | [GAME_DEV_SCORECARD.md](./templates/GAME_DEV_SCORECARD.md) copied to SKU folder. |
| **Steps** | 1. Copy `handoff.lock.tip` into scorecard header. 2. Screenshot or paste header row to evidence. |
| **Expected** | Tip id matches lock. |
| **Evidence** | `.../GAME-DEV-INTAKE-006_<date>_tip_header.md` |
| **Pass/Fail** | Pass = tip filled |
| **Severity** | Major |

#### GAME-DEV-INTAKE-007 — `pack_path` equals board ref

| Field | Content |
|-------|---------|
| **Precondition** | Board `issue_pack_ref.pack_path` set. |
| **Steps** | 1. `realpath` pack file. 2. Compare to board path. 3. Document if symlinked. |
| **Expected** | Same frozen file Tech smoked. |
| **Evidence** | `.../GAME-DEV-INTAKE-007_<date>_pack_path.md` |
| **Pass/Fail** | Pass = same path |
| **Severity** | **Critical** |

#### GAME-DEV-INTAKE-008 — Validator pass on frozen pack

| Field | Content |
|-------|---------|
| **Precondition** | `npm ci` under `tools/validate-content-pack`. |
| **Steps** | 1. `node tools/validate-content-pack/validate.mjs <pack_path>` 2. Exit 0; stdout contains `validate-content-pack: PASS`. 3. Save full log. |
| **Expected** | Machine pass on locked pack. |
| **Evidence** | `.../GAME-DEV-INTAKE-008_<date>_validate_pass.log` |
| **Pass/Fail** | Pass = exit 0 |
| **Severity** | **Critical** |

---

### 3.3 Art/audio import (`GAME-DEV-IMP-*`)

#### GAME-DEV-IMP-001 — Import only MANIFEST-listed assets

| Field | Content |
|-------|---------|
| **Precondition** | Art pack MANIFEST frozen; Godot project ready. |
| **Steps** | 1. Parse MANIFEST ids/paths from handoff. 2. Run import script or Cursor step list: every shipped texture/mesh/audio maps 1:1 to MANIFEST row. 3. Log imported count vs MANIFEST count. |
| **Expected** | 100% MANIFEST rows imported; no extra ship assets. |
| **Evidence** | `content/<SKU>/dev/import/GAME-DEV-IMP-001_<date>_manifest_import.log` |
| **Pass/Fail** | Fail = orphan or missing row |
| **Severity** | **Critical** |

#### GAME-DEV-IMP-002 — Missing ref fails loud

| Field | Content |
|-------|---------|
| **Precondition** | Deliberate or accidental bad path in test branch **or** spot-check one MANIFEST entry. |
| **Steps** | 1. Point import at missing file. 2. Confirm build/import aborts with explicit error (no silent fallback cube). 3. Capture stderr/log. |
| **Expected** | Hard fail; no silent substitute. |
| **Evidence** | `.../GAME-DEV-IMP-002_<date>_missing_ref_fail.log` |
| **Pass/Fail** | Pass = fail loud |
| **Severity** | **Critical** |

#### GAME-DEV-IMP-003 — Pack art hash refs match files on disk

| Field | Content |
|-------|---------|
| **Precondition** | Pack lists per-asset hashes (if present) per validator rules. |
| **Steps** | 1. Run `validate.mjs` on pack. 2. Grep log for hash mismatch lines — must be **0**. 3. For first N spine assets, spot `sha256sum` imported file vs pack ref. |
| **Expected** | Validator clean; spot checks match. |
| **Evidence** | `.../GAME-DEV-IMP-003_<date>_asset_hash_spot.md` |
| **Pass/Fail** | Fail = mismatch |
| **Severity** | **Critical** |

#### GAME-DEV-IMP-004 — No placeholder “greybox ship” textures

| Field | Content |
|-------|---------|
| **Precondition** | Spine scene list from pack. |
| **Steps** | 1. Open Godot imported spine materials for `SCN_*` start scene. 2. Confirm albedo/mesh sources resolve to MANIFEST ship paths (not builtin placeholder). 3. List any `res://` temp paths — must be **0** on spine. |
| **Expected** | Ship art paths only on spine. |
| **Evidence** | `.../GAME-DEV-IMP-004_<date>_no_greybox_spine.md` |
| **Pass/Fail** | Fail = greybox on spine |
| **Severity** | Major |

#### GAME-DEV-IMP-005 — Audio buses from MANIFEST

| Field | Content |
|-------|---------|
| **Precondition** | BGM/SFX rows in MANIFEST. |
| **Steps** | 1. Import WAV/OGG per MANIFEST. 2. Wire default bus map (BGM/SFX/VO) in Godot project settings or autoload doc. 3. Log bus → file mapping. |
| **Expected** | Every MANIFEST audio row reachable in project. |
| **Evidence** | `.../GAME-DEV-IMP-005_<date>_audio_bus_map.md` |
| **Pass/Fail** | Pass = map complete |
| **Severity** | Major |

#### GAME-DEV-IMP-006 — LICENSE.json / source tags respected

| Field | Content |
|-------|---------|
| **Precondition** | Art pack includes LICENSE or per-row license field. |
| **Steps** | 1. For each imported external asset, verify license tag matches [MASTER_ASSET_LIST.md](./templates/MASTER_ASSET_LIST.md) row. 2. No uncredited `ai_generated` ship without row. |
| **Expected** | Import log includes license id per asset. |
| **Evidence** | `.../GAME-DEV-IMP-006_<date>_license_audit.md` |
| **Pass/Fail** | Fail = untagged ship asset |
| **Severity** | Major |

---

### 3.4 Scenes (`GAME-DEV-SCN-*`)

#### GAME-DEV-SCN-001 — `SCN_*` scenes exist per pack index

| Field | Content |
|-------|---------|
| **Precondition** | `scenes:` in content pack. |
| **Steps** | 1. List `scene_id` from pack. 2. For each, confirm Godot scene file `scenes/<scene_id>.tscn` (or project convention) exists. 3. Log missing ids. |
| **Expected** | 1:1 pack scene ids → Godot scenes. |
| **Evidence** | `content/<SKU>/dev/scene/GAME-DEV-SCN-001_<date>_scene_index.md` |
| **Pass/Fail** | Fail = missing SCN |
| **Severity** | **Critical** |

#### GAME-DEV-SCN-002 — POI nodes bind pack coordinates/ids

| Field | Content |
|-------|---------|
| **Precondition** | Scene POI table in pack or storyboard index. |
| **Steps** | 1. For start scene, enumerate POI ids in pack. 2. In Godot scene tree, verify node groups or metadata `poi_id` match. 3. Document orphans. |
| **Expected** | 0 orphan POIs on spine scene. |
| **Evidence** | `.../GAME-DEV-SCN-002_<date>_poi_bind.md` |
| **Pass/Fail** | Fail = orphan POI |
| **Severity** | Major |

#### GAME-DEV-SCN-003 — Storyboard `systems` bound

| Field | Content |
|-------|---------|
| **Precondition** | Storyboard frame index linked in pack. |
| **Steps** | 1. Run `validate.mjs`; confirm 0 orphan storyboard frames (same as smoke step 4). 2. Map each frame `systems` entry to scene script signal or autoload. 3. List unbound systems. |
| **Expected** | 0 orphan frames; spine systems wired. |
| **Evidence** | `.../GAME-DEV-SCN-003_<date>_systems_bind.md` |
| **Pass/Fail** | Fail = orphan/unbound spine system |
| **Severity** | **Critical** |

#### GAME-DEV-SCN-004 — Start beat scene reachable in data + scene graph

| Field | Content |
|-------|---------|
| **Precondition** | Documented start beat `B001` (or pack default). |
| **Steps** | 1. Resolve beat → scene id from pack (smoke step 3). 2. Confirm Godot boot autoload loads that scene id without edit-time-only hooks. |
| **Expected** | Start scene id matches pack. |
| **Evidence** | `.../GAME-DEV-SCN-004_<date>_start_scene.md` |
| **Pass/Fail** | Pass = match |
| **Severity** | **Critical** |

#### GAME-DEV-SCN-005 — Scene transition table from pack

| Field | Content |
|-------|---------|
| **Precondition** | Beat/scene transition refs in pack. |
| **Steps** | 1. Export transition pairs (from_scene, to_scene) from YAML. 2. Verify Godot transition handler uses same ids (no invented scenes). 3. Diff unexpected pairs. |
| **Expected** | Transitions ⊆ pack refs. |
| **Evidence** | `.../GAME-DEV-SCN-005_<date>_transitions.md` |
| **Pass/Fail** | Fail = invented transition |
| **Severity** | Major |

#### GAME-DEV-SCN-006 — No orphan frames in build manifest

| Field | Content |
|-------|---------|
| **Precondition** | Export PCK or scene list from Godot. |
| **Steps** | 1. List storyboard frame ids referenced in build. 2. Compare to pack frame index — extras without pack ref → **Fail**. |
| **Expected** | No orphan frame assets in ship candidate. |
| **Evidence** | `.../GAME-DEV-SCN-006_<date>_frame_manifest.md` |
| **Pass/Fail** | Fail = orphan frame in build |
| **Severity** | Major |

---

### 3.5 Dialogue / VO (`GAME-DEV-DLG-*`)

#### GAME-DEV-DLG-001 — Bind `dlg.*` keys from pack only

| Field | Content |
|-------|---------|
| **Precondition** | [DIALOGUE_VO_LINE_PACK.md](./templates/DIALOGUE_VO_LINE_PACK.md) locked in pack. |
| **Steps** | 1. List `dlg.*` keys on spine path from pack. 2. Grep Godot dialogue resource/scripts for hard-coded line text on spine — must be **0**. 3. All lines load via key lookup. |
| **Expected** | Keys resolve; no parallel text SSOT in code. |
| **Evidence** | `content/<SKU>/dev/dialogue/GAME-DEV-DLG-001_<date>_dlg_keys.md` |
| **Pass/Fail** | Fail = hard-coded spine line |
| **Severity** | **Critical** |

#### GAME-DEV-DLG-002 — No hard-coded player-facing strings

| Field | Content |
|-------|---------|
| **Precondition** | Locale pack present. |
| **Steps** | 1. Run project string scan (grep UI labels in `*.tscn` / scripts). 2. Allow engine debug only; player HUD/buttons must use locale keys. 3. Log violations. |
| **Expected** | 0 raw English player strings on spine HUD. |
| **Evidence** | `.../GAME-DEV-DLG-002_<date>_no_raw_strings.md` |
| **Pass/Fail** | Fail = raw string on spine UI |
| **Severity** | Major |

#### GAME-DEV-DLG-003 — VO file paths from pack

| Field | Content |
|-------|---------|
| **Precondition** | Voiced `dlg.*` rows list audio paths. |
| **Steps** | 1. For each voiced spine line, confirm imported audio path matches pack. 2. Play one line in exported build → log file path + timestamp. |
| **Expected** | Path parity; audio plays. |
| **Evidence** | `.../GAME-DEV-DLG-003_<date>_vo_path_spot.log` |
| **Pass/Fail** | Fail = wrong/missing VO |
| **Severity** | Major |

#### GAME-DEV-DLG-004 — No Cursor rewrite of locked lines

| Field | Content |
|-------|---------|
| **Precondition** | Git diff since `handoff.lock.locked_at`. |
| **Steps** | 1. Diff dialogue YAML/JSON in **kit pack** — must be empty (Cursor must not edit pack). 2. Diff game repo dialogue data against pack export — text must match byte-for-byte or keyed indirection only. |
| **Expected** | No line text edits vs lock. |
| **Evidence** | `.../GAME-DEV-DLG-004_<date>_dlg_diff.md` |
| **Pass/Fail** | Fail = rewritten line |
| **Severity** | **Critical** |

#### GAME-DEV-DLG-005 — Dialogue UI uses localization API

| Field | Content |
|-------|---------|
| **Precondition** | Godot localization CSV/PO from locale pack. |
| **Steps** | 1. Confirm `tr()` / locale server loads keys from locale pack import. 2. Switch test locale; one spine line changes per pack translation. |
| **Expected** | In-build locale switch works for sample line. |
| **Evidence** | `.../GAME-DEV-DLG-005_<date>_locale_ui.png` |
| **Pass/Fail** | Pass = switch observed |
| **Severity** | Major |

---

### 3.6 Interactions (`GAME-DEV-INT-*`)

#### GAME-DEV-INT-001 — `INT_*` bindings from design pack

| Field | Content |
|-------|---------|
| **Precondition** | Interaction table in pack (ids prefixed `INT_` or documented convention). |
| **Steps** | 1. List interaction ids from pack. 2. Map each to Area3D/InteractionBody node or signal in scene. 3. Unmapped pack ids → **Fail**. |
| **Expected** | All pack interactions bound. |
| **Evidence** | `content/<SKU>/dev/interact/GAME-DEV-INT-001_<date>_int_map.md` |
| **Pass/Fail** | Fail = missing binding |
| **Severity** | **Critical** |

#### GAME-DEV-INT-002 — Collision layers match GD table

| Field | Content |
|-------|---------|
| **Precondition** | [COMBAT_GATES_ENCOUNTER_BUDGET.md](./templates/COMBAT_GATES_ENCOUNTER_BUDGET.md) collision plan in pack metadata. |
| **Steps** | 1. Read layer/mask from pack or GD doc. 2. Verify Godot project layer names match. 3. Log mismatches. |
| **Expected** | Player/interactable layers match SSOT. |
| **Evidence** | `.../GAME-DEV-INT-002_<date>_layers.md` |
| **Pass/Fail** | Fail = layer drift |
| **Severity** | Major |

#### GAME-DEV-INT-003 — Trigger → beat advance

| Field | Content |
|-------|---------|
| **Precondition** | Beat graph in pack. |
| **Steps** | 1. Identify first gate trigger interaction on spine. 2. In exported build, perform interaction; confirm beat state advances per pack (log beat id). |
| **Expected** | Beat id matches pack transition table. |
| **Evidence** | `.../GAME-DEV-INT-003_<date>_beat_advance.log` |
| **Pass/Fail** | Fail = wrong beat |
| **Severity** | **Critical** |

#### GAME-DEV-INT-004 — Gate interactions wired

| Field | Content |
|-------|---------|
| **Precondition** | Gate definitions in pack. |
| **Steps** | 1. List gate ids. 2. Confirm each gate has interaction or combat entry per pack type. 3. No invented gate ids in scenes. |
| **Expected** | Gates ⊆ pack. |
| **Evidence** | `.../GAME-DEV-INT-004_<date>_gates.md` |
| **Pass/Fail** | Fail = invented gate |
| **Severity** | Major |

#### GAME-DEV-INT-005 — No invented interactables

| Field | Content |
|-------|---------|
| **Precondition** | Scene audit. |
| **Steps** | 1. Enumerate interactable nodes in spine scenes. 2. Diff against pack interaction list — extras → **Fail** unless marked `dev_only` and excluded from export. |
| **Expected** | 0 ship interactables absent from pack. |
| **Evidence** | `.../GAME-DEV-INT-005_<date>_no_invented.md` |
| **Pass/Fail** | Fail = invented interactable |
| **Severity** | **Critical** |

---

### 3.7 Combat / gates (`GAME-DEV-CMB-*`)

#### GAME-DEV-CMB-001 — Load encounter tables from YAML

| Field | Content |
|-------|---------|
| **Precondition** | Encounters in content pack. |
| **Steps** | 1. Parse encounter ids/stats from pack (not spreadsheets in Cursor). 2. Confirm game data loader reads same file paths as handoff. 3. Log loader path + checksum. |
| **Expected** | Single SSOT loader; no duplicate balance tables in code. |
| **Evidence** | `content/<SKU>/dev/combat/GAME-DEV-CMB-001_<date>_encounter_load.md` |
| **Pass/Fail** | Pass = SSOT loader |
| **Severity** | **Critical** |

#### GAME-DEV-CMB-002 — Fail → story-safe retry wired

| Field | Content |
|-------|---------|
| **Precondition** | Pack defines fail/retry law (NON_ART §5). |
| **Steps** | 1. Implement defeat handler per pack flag. 2. In build, lose once; confirm retry entry point matches pack (checkpoint id in log). |
| **Expected** | No hard game-over on mandated retry path. |
| **Evidence** | `.../GAME-DEV-CMB-002_<date>_retry.log` |
| **Pass/Fail** | Fail = wrong retry |
| **Severity** | **Critical** |

#### GAME-DEV-CMB-003 — Gate objectives from pack only

| Field | Content |
|-------|---------|
| **Precondition** | Gate objective strings/ids in pack. |
| **Steps** | 1. Compare HUD objective text keys to pack. 2. No new objectives in code comments/strings. |
| **Expected** | Objectives ⊆ pack. |
| **Evidence** | `.../GAME-DEV-CMB-003_<date>_objectives.md` |
| **Pass/Fail** | Fail = invented objective |
| **Severity** | Major |

#### GAME-DEV-CMB-004 — No invented balance numbers

| Field | Content |
|-------|---------|
| **Precondition** | Git diff on combat scripts/data. |
| **Steps** | 1. Grep for numeric literals in combat damage formulas. 2. Allow only indirection from pack tables or documented constants file copied from pack. 3. List violations. |
| **Expected** | Stats trace to pack encounter rows. |
| **Evidence** | `.../GAME-DEV-CMB-004_<date>_balance_audit.md` |
| **Pass/Fail** | Fail = orphan numbers |
| **Severity** | **Critical** |

#### GAME-DEV-CMB-005 — Encounter teardown cleans state

| Field | Content |
|-------|---------|
| **Precondition** | Combat scene instanced from pack encounter. |
| **Steps** | 1. Win encounter in build. 2. Confirm scene pop, input mode, and music bus reset per design doc. 3. Log state flags before/after. |
| **Expected** | No stuck combat UI/input. |
| **Evidence** | `.../GAME-DEV-CMB-005_<date>_teardown.log` |
| **Pass/Fail** | Fail = stuck state |
| **Severity** | Major |

---

### 3.8 Session / L0 (`GAME-DEV-SES-*`)

Per [L0_SESSION_SAVE_POLICY.md](./templates/L0_SESSION_SAVE_POLICY.md) — SDK details **TBD**; bind what the template requires without inventing platform SDK answers.

#### GAME-DEV-SES-001 — Pause menu per L0 policy

| Field | Content |
|-------|---------|
| **Precondition** | L0 policy copied for SKU. |
| **Steps** | 1. Open policy §pause. 2. Verify Godot pause tree (`get_tree().paused` or policy pattern) matches required behaviors. 3. Capture pause screenshot from export. |
| **Expected** | Pause behavior matches policy checklist rows marked ship. |
| **Evidence** | `content/<SKU>/dev/session/GAME-DEV-SES-001_<date>_pause.png` |
| **Pass/Fail** | Fail = policy mismatch |
| **Severity** | Major |

#### GAME-DEV-SES-002 — Save path and slot policy

| Field | Content |
|-------|---------|
| **Precondition** | L0 policy save section. |
| **Steps** | 1. Document `user://` or policy path for saves. 2. Save once; confirm file exists at documented path. 3. Log path + size. |
| **Expected** | Save file at policy path. |
| **Evidence** | `.../GAME-DEV-SES-002_<date>_save_path.md` |
| **Pass/Fail** | Pass = file exists |
| **Severity** | Major |

#### GAME-DEV-SES-003 — Resume from save

| Field | Content |
|-------|---------|
| **Precondition** | SES-002 pass. |
| **Steps** | 1. Quit exported build. 2. Relaunch; load save. 3. Confirm beat/scene id matches pre-quit log. |
| **Expected** | State restores per pack fields saved. |
| **Evidence** | `.../GAME-DEV-SES-003_<date>_resume.log` |
| **Pass/Fail** | Fail = corrupt/wrong state |
| **Severity** | **Critical** |

#### GAME-DEV-SES-004 — No silent save corruption

| Field | Content |
|-------|---------|
| **Precondition** | Save after spine milestone. |
| **Steps** | 1. If load fails, confirm UI error (not blank screen). 2. Capture error dialog or log line. |
| **Expected** | Fail loud on corrupt save. |
| **Evidence** | `.../GAME-DEV-SES-004_<date>_save_fail_loud.log` |
| **Pass/Fail** | Pass = loud fail |
| **Severity** | Major |

---

### 3.9 Locale (`GAME-DEV-LOC-*`)

#### GAME-DEV-LOC-001 — Import locale pack keys

| Field | Content |
|-------|---------|
| **Precondition** | Locale GO pack paths in handoff. |
| **Steps** | 1. Import translation files to Godot locale. 2. Count keys vs locale pack manifest. 3. Log missing keys (critical path). |
| **Expected** | 0 missing critical keys on spine. |
| **Evidence** | `content/<SKU>/dev/locale/GAME-DEV-LOC-001_<date>_key_import.md` |
| **Pass/Fail** | Fail = missing critical key |
| **Severity** | **Critical** |

#### GAME-DEV-LOC-002 — Fonts from locale pack

| Field | Content |
|-------|---------|
| **Precondition** | Font files listed in locale pack. |
| **Steps** | 1. Import fonts per pack. 2. Assign theme default font. 3. Screenshot spine UI with target script sample (per market checklist). |
| **Expected** | No tofu on sample string from pack. |
| **Evidence** | `.../GAME-DEV-LOC-002_<date>_font_spot.png` |
| **Pass/Fail** | Fail = tofu/missing font |
| **Severity** | Major |

#### GAME-DEV-LOC-003 — No raw locale keys visible in UI

| Field | Content |
|-------|---------|
| **Precondition** | Exported build default locale. |
| **Steps** | 1. Walk spine HUD; grep screen for `dlg.` or `ui.` key patterns visible to player. 2. Must be **0** visible raw keys. |
| **Expected** | Translated strings shown. |
| **Evidence** | `.../GAME-DEV-LOC-003_<date>_no_raw_keys.png` |
| **Pass/Fail** | Fail = raw key visible |
| **Severity** | **Critical** |

#### GAME-DEV-LOC-004 — Pseudo-loc disabled in candidate build

| Field | Content |
|-------|---------|
| **Precondition** | Pseudo-loc used in dev optional. |
| **Steps** | 1. Confirm export preset disables pseudo-loc flag. 2. Build metadata notes `pseudo_loc=off`. |
| **Expected** | Candidate build uses real locale tables. |
| **Evidence** | `.../GAME-DEV-LOC-004_<date>_pseudo_off.md` |
| **Pass/Fail** | Fail = pseudo on in candidate |
| **Severity** | Major |

#### GAME-DEV-LOC-005 — Critical VO locale parity

| Field | Content |
|-------|---------|
| **Precondition** | Critical VO list from [LOCALE_READINESS_CHECKLIST.md](./templates/LOCALE_READINESS_CHECKLIST.md). |
| **Steps** | 1. For each critical VO row, verify imported file exists for target locale. 2. Log missing — any → **Fail**. |
| **Expected** | Critical VO files present per locale GO markets. |
| **Evidence** | `.../GAME-DEV-LOC-005_<date>_vo_locale.md` |
| **Pass/Fail** | Fail = missing critical VO |
| **Severity** | **Critical** |

---

### 3.10 Build / tip (`GAME-DEV-BLD-*`)

#### GAME-DEV-BLD-001 — Godot export preset documented

| Field | Content |
|-------|---------|
| **Precondition** | Godot 4.x CLI available (first-SKU engine **CONFIRMED**). |
| **Steps** | 1. Record `export_presets.cfg` name used. 2. Run headless export command (document exact CLI). 3. Save command + exit code in log. |
| **Expected** | Export exits 0. |
| **Evidence** | `content/<SKU>/dev/build/GAME-DEV-BLD-001_<date>_export_cmd.log` |
| **Pass/Fail** | Pass = exit 0 |
| **Severity** | **Critical** |

#### GAME-DEV-BLD-002 — `tip` id embedded in build metadata

| Field | Content |
|-------|---------|
| **Precondition** | `handoff.lock.tip` known. |
| **Steps** | 1. Write tip to build metadata file or version string per project convention. 2. Read back from artifact; compare to lock. |
| **Expected** | Tip matches lock. |
| **Evidence** | `.../GAME-DEV-BLD-002_<date>_tip_meta.md` |
| **Pass/Fail** | Fail = tip drift |
| **Severity** | **Critical** |

#### GAME-DEV-BLD-003 — `build_ref` recorded in scorecard

| Field | Content |
|-------|---------|
| **Precondition** | Export artifact path or CI URL. |
| **Steps** | 1. Copy absolute path or URL to GAME_DEV scorecard `build_ref`. 2. `test -f` or `curl -I` sanity check. |
| **Expected** | `build_ref` resolvable. |
| **Evidence** | `.../GAME-DEV-BLD-003_<date>_build_ref.md` |
| **Pass/Fail** | Pass = resolvable |
| **Severity** | **Critical** |

#### GAME-DEV-BLD-004 — Lock hashes echoed in build log

| Field | Content |
|-------|---------|
| **Precondition** | Build script emits provenance block. |
| **Steps** | 1. Ensure build log prints `design_pack_hash` and `art_pack_hash` from lock. 2. Compare logged values to `handoff.lock`. |
| **Expected** | Logged hashes match lock. |
| **Evidence** | `.../GAME-DEV-BLD-004_<date>_hash_echo.log` |
| **Pass/Fail** | Fail = mismatch |
| **Severity** | **Critical** |

#### GAME-DEV-BLD-005 — Build log stored under dev evidence tree

| Field | Content |
|-------|---------|
| **Precondition** | Export completed. |
| **Steps** | 1. Copy full export/CI log to `content/<SKU>/dev/build/`. 2. Link path in output contract `paths`. |
| **Expected** | Log on disk; not chat-only. |
| **Evidence** | `.../GAME-DEV-BLD-005_<date>_full_build.log` |
| **Pass/Fail** | Pass = file exists |
| **Severity** | Major |

#### GAME-DEV-BLD-006 — Playable boot smoke (exported player)

| Field | Content |
|-------|---------|
| **Precondition** | `build_ref` from BLD-003. |
| **Steps** | 1. Launch exported player (not editor-only). 2. Reach start scene within policy timeout. 3. Capture screenshot + elapsed seconds. |
| **Expected** | Boot to start scene without crash. |
| **Evidence** | `.../GAME-DEV-BLD-006_<date>_boot.png` |
| **Pass/Fail** | Fail = crash/timeout |
| **Severity** | **Critical** |

---

### 3.11 PM automation hooks (`GAME-DEV-PM-*`)

#### GAME-DEV-PM-001 — Schedule only after smoke GO

| Field | Content |
|-------|---------|
| **Precondition** | PM calendar / automation queue. |
| **Steps** | 1. Verify Cursor job created **after** HANDOFF smoke GO timestamp. 2. Log ticket ids. |
| **Expected** | No scheduled build before smoke GO. |
| **Evidence** | `content/<SKU>/dev/pm/GAME-DEV-PM-001_<date>_schedule.md` |
| **Pass/Fail** | Fail = early schedule |
| **Severity** | **Critical** |

#### GAME-DEV-PM-002 — One live `issue_pack_ref`

| Field | Content |
|-------|---------|
| **Precondition** | [BOARD_SCHEMA.md](./BOARD_SCHEMA.md). |
| **Steps** | 1. Read board JSON/YAML. 2. Confirm single active pack ref for SKU. 3. Paste `issue_pack_ref` block to evidence. |
| **Expected** | One live milestone. |
| **Evidence** | `.../GAME-DEV-PM-002_<date>_board_ref.md` |
| **Pass/Fail** | Fail = dual refs |
| **Severity** | **Critical** |

#### GAME-DEV-PM-003 — Output contract on every agent exit

| Field | Content |
|-------|---------|
| **Precondition** | Cursor PM automation session ends. |
| **Steps** | 1. Collect each exit message. 2. Validate five fields per [OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md). 3. List any incomplete exits → **Fail**. |
| **Expected** | 100% complete contracts. |
| **Evidence** | `.../GAME-DEV-PM-003_<date>_exits.md` |
| **Pass/Fail** | Fail = incomplete |
| **Severity** | Major |

#### GAME-DEV-PM-004 — GAME_DEV scorecard copied per build

| Field | Content |
|-------|---------|
| **Precondition** | New `build_ref`. |
| **Steps** | 1. Copy [GAME_DEV_SCORECARD.md](./templates/GAME_DEV_SCORECARD.md) to `content/<SKU>/dev/GAME_DEV_SCORECARD_<date>.md`. 2. Fill header before marking PASS rows. |
| **Expected** | Scorecard path exists for build. |
| **Evidence** | Path noted in `.../GAME-DEV-PM-004_<date>_scorecard_path.md` |
| **Pass/Fail** | Pass = copy exists |
| **Severity** | Major |

#### GAME-DEV-PM-005 — Handoff to GAME_QA with `build_ref`

| Field | Content |
|-------|---------|
| **Precondition** | BLD-006 pass. |
| **Steps** | 1. Open GAME_QA scorecard; paste same `build_ref`, `tip`, `schema_version`. 2. Emit output contract `next=QA L1/L2 per GAME_QA`. |
| **Expected** | QA can run LOAD-* without re-asking paths. |
| **Evidence** | `.../GAME-DEV-PM-005_<date>_qa_handoff.md` |
| **Pass/Fail** | Pass = QA header filled |
| **Severity** | Major |

---

### 3.12 Evidence integrity (`GAME-DEV-EVD-*`)

#### GAME-DEV-EVD-001 — Artifact paths resolve

| Field | Content |
|-------|---------|
| **Precondition** | GAME_DEV scorecard with PASS rows. |
| **Steps** | 1. For each PASS, `test -f` evidence path. 2. List missing — any → **Fail**. |
| **Expected** | 100% resolution. |
| **Evidence** | `content/<SKU>/dev/evidence/GAME-DEV-EVD-001_<date>_path_audit.md` |
| **Pass/Fail** | Fail = paper green |
| **Severity** | **Critical** |

#### GAME-DEV-EVD-002 — No Soft CI / CONDITIONAL

| Field | Content |
|-------|---------|
| **Precondition** | Build roll-up review. |
| **Steps** | 1. Scan scorecard for forbidden terms. 2. Reject as PASS if found. |
| **Expected** | GO/NO only. |
| **Evidence** | `.../GAME-DEV-EVD-002_<date>_no_soft_ci.md` |
| **Pass/Fail** | Fail = Soft CI |
| **Severity** | **Critical** |

#### GAME-DEV-EVD-003 — Scorecard header complete

| Field | Content |
|-------|---------|
| **Precondition** | Any PASS row. |
| **Steps** | 1. Verify `sku_id`, `pack_path`, `tip`, `schema_version`, `build_ref`, tester, HKT filled. |
| **Expected** | All header fields present. |
| **Evidence** | `.../GAME-DEV-EVD-003_<date>_header.md` |
| **Pass/Fail** | Pass = complete |
| **Severity** | Major |

#### GAME-DEV-EVD-004 — Retest after Critical fix

| Field | Content |
|-------|---------|
| **Precondition** | Critical defect fixed in game repo. |
| **Steps** | 1. Re-run mapped GAME-DEV cases. 2. New evidence dated after fix. |
| **Expected** | No close without retest. |
| **Evidence** | `.../GAME-DEV-EVD-004_<date>_retest.md` |
| **Pass/Fail** | Fail = no retest |
| **Severity** | **Critical** |

#### GAME-DEV-EVD-005 — No editor-only greybox as ship evidence

| Field | Content |
|-------|---------|
| **Precondition** | BLD-006 evidence review. |
| **Steps** | 1. Confirm boot screenshot from **exported** player path in `build_ref`. 2. Editor-only capture → **Fail**. |
| **Expected** | Export-based proof. |
| **Evidence** | `.../GAME-DEV-EVD-005_<date>_export_only.md` |
| **Pass/Fail** | Fail = editor mock |
| **Severity** | **Critical** |

---

### 3.13 Build pack roll-up (`GAME-DEV-PACK-*`)

#### GAME-DEV-PACK-001 — Implementer suite coverage

| Field | Content |
|-------|---------|
| **Precondition** | Build tip candidate ready. |
| **Steps** | 1. Execute all groups AUTH→BLD or mark N/A with why. 2. Summarize pass/fail by prefix in evidence. |
| **Expected** | All prefixes covered. |
| **Evidence** | `content/<SKU>/dev/evidence/GAME-DEV-PACK-001_<date>_coverage.md` |
| **Pass/Fail** | Fail = missing group |
| **Severity** | **Critical** |

#### GAME-DEV-PACK-002 — QA-ready handoff bundle

| Field | Content |
|-------|---------|
| **Precondition** | PACK-001 pass; no Critical open. |
| **Steps** | 1. Index paths: scorecard, build log, `build_ref`, lock audit. 2. Link GAME_QA L1 entry point. |
| **Expected** | QA bundle complete — **not** Phase QA GO. |
| **Evidence** | `.../GAME-DEV-PACK-002_<date>_qa_bundle.md` |
| **Pass/Fail** | Fail = missing handoff artifact |
| **Severity** | Major |

---

## 4. Mapping: NON_ART §10 / Master Plan §3.8 / HANDOFF_SMOKE → GAME-DEV IDs

| Source | Topic | Primary GAME-DEV IDs |
|--------|-------|----------------------|
| NON_ART §10 | IDLE / Cursor contract | AUTH-001…005, DLG-004, INT-005, CMB-004 |
| NON_ART §10 | Hash / lock | INTAKE-002…005, BLD-004 |
| HANDOFF_SMOKE | Pre-Cursor smoke | INTAKE-001, INTAKE-008 (re-verify) |
| Master Plan §3.8 | Inputs/outputs | INTAKE-*, BLD-*, PM-005 |
| Master Plan B4 | Handoff → build | PACK-001, PACK-002, BLD-006 |
| L0_SESSION_SAVE_POLICY | Session law | SES-001…004 |
| LOCALE_READINESS | Locale bind | LOC-001…005 |
| GAME_QA (downstream) | Test build | PM-005 → GAME-QA-LOAD-* |

---

## 5. SKU / build scorecard (fillable)

Copy per SKU / build: [templates/GAME_DEV_SCORECARD.md](./templates/GAME_DEV_SCORECARD.md).

**Roll-up rules:**

1. Execute cases in §3 for the target build tip.  
2. **Any Critical fail → build pack NO** until EVD-004 retest passes.  
3. Tech/PM signs **GO/NO + why** on roll-up — does **not** replace per-SKU Build tip GO, handoff smoke GO, or `schema_version` bump GO (Track A kit GOs: [KIT_GO_LOG.md](./KIT_GO_LOG.md)).  
4. Attach scorecard path in output contract `paths`.  
5. After PACK-002, open [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) on the same `build_ref`.

---

## 6. Related documents

| Document | Role |
|----------|------|
| [FACTORY_NON_ART_BEST_PRACTICES.md](./FACTORY_NON_ART_BEST_PRACTICES.md) §10 | Handoff law |
| [HANDOFF_SMOKE_CONSUMER.md](./templates/HANDOFF_SMOKE_CONSUMER.md) | Pre-implementer smoke |
| [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) | Test the build |
| [FACTORY_OPERATING_SOP.md](./FACTORY_OPERATING_SOP.md) | Pipeline + Appendix B |
| [KIT_STATUS.md](./KIT_STATUS.md) | Landed vs unstamped GO |
