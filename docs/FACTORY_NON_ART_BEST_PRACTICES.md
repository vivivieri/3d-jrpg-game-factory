# Factory Non-Art Best Practices (industrial, factory-wide)

**Status:** Factory leaf SOP — how to run **non-art** tracks (clearance → story → design → data → locale → handoff → QA → publish → live) with AI-assisted craft, then bring them to ship quality  
**SSOT laws:** [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) (§2–§7, §10–§16) · [team-knowledge/STANDING_RULES.md](./team-knowledge/STANDING_RULES.md) · [team-knowledge/OUTPUT_CONTRACT.md](./team-knowledge/OUTPUT_CONTRACT.md)  
**Companion leaf:** [AI_ART_BEST_PRACTICES.md](./AI_ART_BEST_PRACTICES.md) (art/audio craft)  
**Audience:** Story / GD / Tech / QA / PM via Grok Bot · Product owner Stephen Chow  
**Engine default:** Godot 4.x · **Game.dev:** Cursor 3.0 PM factory consumes **frozen handoff only**  
**Updated:** 2026-10-14 (HKT)

**Core industrial rule:** AI accelerates *drafts* (beat sheets, schemas, test matrices, locale stubs). Shipping still needs brief → draft → validate → human GO/NO + why → tip/hash lock. Measure **accepted/shipped** packs and **real UAT evidence**, not document volume or paper greens.

---

## 0. Cross-cutting factory laws (every non-art track)

### 0.1 Output contract (every handoff)

After any GO/NO, update tip/hash before the next craft; Grok Bot latches once (Master Plan §2 tip latch, §6 rule 2).

Every exit from a person, agent, or gate must carry:

| Field | Values / meaning |
|-------|------------------|
| `status` | `GO` / `NO` / `IDLE` / `BLOCKED` |
| `why` | One short reason (required for GO/NO) |
| `paths` | Tip / doc / YAML / pack paths touched |
| `next` | Single next action if any |
| `blocked_on` | Only `license` / `sign-in` / `Stephen` / empty |

Incomplete exits are rejected. Soft CI, CONDITIONAL-as-PASS, and inventing a second live pack are forbidden in outputs.

### 0.2 Soft CI forbid

**Soft CI / CONDITIONAL / greybox-as-ship are never ship gates.** Phase law: later phase does not start until prior exit is **GO** with logged reason. “Looks mostly ready” is `NO` or `BLOCKED`, not a grey pass.

### 0.3 Arts-before-dev

Game factory stays **IDLE** until Art pack GO + Locale GO + handoff freeze. Cursor 3.0 must not consume unlocked art, invented lore, or mutable design prose. Placeholders are internal art-factory tools only — never ship gates.

### 0.4 Mouthpiece routing

Day-to-day **product** craft and role reports route **Stephen ↔ Grok Bot**. Factory-kit CAPAs in `vivivieri/3d-jrpg-game-factory` route **Stephen ↔ Game Factory** on PRs. Roles do not open parallel truths with Stephen. Paid license, Secure Form / paid sign-in, STOP / factory restart, and Release GO are **human-only** (Stephen or designated counsel).

### 0.5 Paid license = human-only

Agents draft ledgers, cite sources, and flag gaps. They never purchase, sign, or assume commercial rights. License ledger rows that say `licensed` require Stephen attestation before Concept GO and before any art spend. Paid commission / alternate vendor **Plan B** paths stay **off** unless Stephen explicitly opens them (Master Plan §9, §14).

### 0.6 ID vocabulary (align Master Plan; do not reinvent)

| Token | Pattern | Use |
|-------|---------|-----|
| SKU | `sku_<country>_<tale_slug>_v<semver>` | Title instance |
| Beat | `B###` | Narrative beat |
| Scene | `SCN_##` | Playable space |
| Encounter | `E_<chapter>_<role>` | Combat instance |
| Gate | `G_<scope>` | Progress lock |
| System | `INT_*` | Interaction binding |
| Dialogue | `dlg.<beat>.*` | Locale / VO keys |

Generic factory language only — no title-specific hero IDs in baseline kits.

### 0.7 AI-assisted tips (universal)

- Draft from **SSOT fields**, not free prose first.  
- Always emit IDs (`B###`, `INT_*`, locale keys) in the same pass as narrative text.  
- Run validators before asking for human GO.  
- Prefer “fail loud” reports over silent defaults.  
- Never treat an LLM summary of a license as clearance.

---

## 1. Clearance / tale selection / PD-license ledger

### Workflow

1. **Market brief** — target countries, stream/store path, length envelope (min–max play minutes), ratings path started.  
2. **Tale shortlist** — traditional folktale/fairy tale candidates; one primary tale per SKU.  
3. **Source capture** — canonical name, earliest publication / collection citation, jurisdiction notes, preferred PD text/edition.  
4. **Rights triage** — `PD` vs `licensed` vs `blocked`. Record *which version* is free (original elements only; later adaptations stay protected).  
5. **Trademark / brand scan** — PD story ≠ free to use famous studio look, logo, or trade dress.  
6. **License ledger row** — source, status, evidence path, expiry, owner (human), commercial scope, markets.  
7. **Cultural notes stub** — do-not-distort list seed for story bible.  
8. **Concept pack GO** — Stephen on paid/licensed; Story Lead on PD dossier completeness.

### AI-assisted tips

- Draft ledger rows and comparison tables from public catalogs; **never** auto-mark `PD` without a dated first-publication claim + human check.  
- Flag “famous adaptation risk” (film costume, theme park look, branded title treatment) as separate from copyright status.  
- Keep jurisdiction columns (US vs UK vs other) — PD in one market is not universal.

### QC / gates

| Check | Pass |
|-------|------|
| Ledger row exists | Every shortlisted tale |
| Evidence | Edition / date / URL or archive cite on tip |
| Version purity | Adaptation notes exclude later-protected traits |
| Paid path | Stephen attestation if not PD |
| Ratings path | Started in Concept (not deferred to Release) |

### Common fails

- Using a modern retelling as if it were the PD source.  
- Confusing trademark / trade dress with copyright expiry.  
- Starting art or VO before Clearance GO.  
- Agent “confirming” commercial rights from a blog summary.

### Human-only gates

- Paid license purchase / negotiation.  
- Final country/tale pick (Stephen).  
- Any Secure Form legal portal.

### Sources (fetched)

- Public domain characters: copyright vs trademark (Legal Moves, 2026): https://legalmoveslawfirm.com/public-domain-characters/

---

## 2. Story bible / beat sheet / story-paced length

### Workflow

1. **Narrative promise** — one sentence: player role, objective, obstacle, emotional pressure.  
2. **Story bible** — characters/roles (generic IDs), themes, tone, cultural notes, do-not-distort list, ending set.  
3. **Structural anchors** — beginning disruption, midpoint/turning point, ending proof-of-change.  
4. **Beat sheet** — ordered `B###` rows; each beat **changes a condition** (information, access, relationship, resource, objective).  
5. **Length band** — `target_play_minutes {min,max}` = f(beat count × weight). Adjust **beats**, never grind pads.  
6. **Intensity / rest plan** — alternate pressure and relief; mark set pieces vs connective tissue.  
7. **Playable conversion** — every major beat maps to a player verb (talk / examine / gate / combat / puzzle / move).  
8. **Story GO** — Story Lead; length band signed by GD Lead co-sign.

### Beat sheet minimum columns

`id | chapter | weight | description | systems[] | scene | duration_band_min | emotional_tone | prerequisites | consequences | locale_keys`

### AI-assisted tips

- Generate 10–20 major beats first; densify only after anchors lock.  
- Reject information-only beats (“player learns X”) unless X changes what the player can **do**.  
- Ask the model to output YAML matching schema stubs, not Markdown-only lore essays.  
- Run a “cutscenes removed” test: would remaining gameplay still tell the tale?

### QC / gates

| Check | Pass |
|-------|------|
| Promise | One clear sentence |
| Condition change | Every `B###` changes ≥1 player-facing condition |
| Length | Sum of duration bands inside SKU envelope |
| Fidelity | No contradiction of cleared source / do-not-distort |
| Ending | Canonical ending(s) tale-faithful |

### Common fails

- Lore-first bible with no playable objective.  
- Padding length with combat minutes instead of cutting or merging beats.  
- Branch soup that production cannot afford (unfunded endings).  
- Writing full dialogue before beat/systems lock.

### Human-only gates

- Distortion / cultural sensitivity calls that Story Lead escalates to Stephen.  
- Scope cuts that drop a country’s mandatory tale elements.

### Sources (fetched)

- How to write a game story (Broken Build Studios): https://brokenbuildstudios.com/how-to-write-a-game-story-a-practical-guide/  
- Level Design Book — Pacing: https://book.leveldesignbook.com/process/preproduction/pacing  

---

## 3. Storyboard (frames cite System IDs; orphan ban)

### Workflow

1. Pull locked beat sheet + scene list (`SCN_##`).  
2. One **frame set per beat** (or per beat segment if weight > 1).  
3. Each frame records: `frame_id`, `beat`, `scene`, **`systems: [INT_*]`**, camera/intent, player verb, success/fail exit, art_refs, locale/VO cues.  
4. Bind interaction: no frame without ≥1 System ID from Master Plan table (`INT_MOVE`, `INT_TALK`, `INT_EXAMINE`, `INT_GATE`, `INT_COMBAT`, `INT_PUZZLE`, `INT_MENU`, `INT_STREAM`, …).  
5. **Orphan ban** — validator fails any frame with empty `systems`.  
6. Export storyboard index into design pack + MASTER_ASSET_LIST seeds.  
7. Design pack GO requires 0 orphans.

### AI-assisted tips

- Prompt: “For each beat, propose frames; every frame must cite INT_* and a fail/success exit.”  
- Auto-list frames missing systems, scenes, or locale keys before human review.  
- Prefer sparse readable frames over cinematic novels; production cost lives in unique set pieces.

### QC / gates

| Check | Pass |
|-------|------|
| Orphans | **0** frames without System ID |
| Beat coverage | Every `B###` has ≥1 frame |
| Scene refs | `SCN_##` exists in scene graph |
| Art seed | Frame art_refs land on MASTER_ASSET_LIST |

### Common fails

- Pretty frames with no player verb.  
- Combat frames inventing enemies outside bible.  
- Cutting System IDs “to clean the board.”  
- Using storyboard as ship 2D art without Art GO.

### Human-only gates

- Design Lead GO on interaction binding integrity.  
- Cultural depiction calls flagged from frames.

### Sources (fetched)

- Level Design Book — Pacing (beat sheet / flowchart / intensity plot): https://book.leveldesignbook.com/process/preproduction/pacing  
- Broken Build — beat → playable objective: https://brokenbuildstudios.com/how-to-write-a-game-story-a-practical-guide/  

---

## 4. Dialogue / VO script generation (beat → dlg.* → revise → lock)

Industrial JRPG pattern: beat sheet → dialogue/VO line packs keyed to systems → revise → lock → feed locale/VO. **Not** a Hollywood screenplay pipeline; screenplay prose is never SSOT.

### Workflow

1. **Inputs** — locked beat sheet (`B###` rows); storyboard frames with `INT_*` (especially `INT_TALK` / choice verbs); speaker **roles** from story bible (generic role IDs only — no title-specific hero IDs).  
2. **Scope** — one **line pack** per beat or beat segment; output is structured dialogue SSOT, not a free Markdown novel.  
3. **Author rows** — YAML/JSON (or sheet export) with per-line fields below; keys use `dlg.<beat>.*` (e.g. `dlg.B001.open`).  
4. **AI draft** — model proposes lines from beat description + frame cues; must emit keys, speakers, and `systems[]` in schema shape.  
5. **Human revise** — Story craft edits text, `max_length`, branch edges, tone; run validators on missing `frame_ref` / beat links.  
6. **Script pack GO** — Story Lead **GO/NO + why** on the line pack (per beat, chapter roll-up, or PM-scheduled batch).  
7. **Lock keys** — freeze `dlg.*` IDs and **source-locale** `text` before VO batch recording and before translation / locale expand (see §9 Locale).  
8. **Handoff** — locked rows in design pack + locale seed; beat rows cite `dialogue_refs: ["dlg.B###.*"]` where applicable.

### Per-line minimum fields

`key | speaker | text | max_length | context | frame_ref | vo_slot_id | branch_edges | systems[]`

| Field | Meaning |
|-------|---------|
| `key` | Stable `dlg.<beat>.*` locale/VO ID |
| `speaker` | Bible role ID (not invented cast) |
| `text` | Source locale string (ship language for the SKU) |
| `max_length` | UI/VO budget (chars or seconds policy per SKU) |
| `context` | Beat/situation note for translators & VO direction |
| `frame_ref` | Storyboard frame id tying line to `INT_*` moment |
| `vo_slot_id` | 1:1 with key for batch VO pipeline |
| `branch_edges` | Choice ids → next beat/key if `INT_TALK` branches |
| `systems[]` | `INT_*` this line satisfies (must match frame) |

### Branch / choice budget

- Only branches that map to **funded endings** on the locked beat sheet.  
- Every fail/choice exit must match storyboard success/fail exits — no soft-lock branches.  
- Unfunded “what if” dialogue is cut at beat sheet, not in line packs.

### Bans (hard)

- Writing full dialogue before beat + systems lock.  
- Inventing characters or speakers outside story bible roles.  
- Soft-locking failed branches without story-safe prep/retry in beat/frame SSOT.  
- Renaming `dlg.*` keys after script lock without migration script + Locale re-QA.

### AI-assisted tips

- Prompt with beat YAML + frame list; require one output row per voiced/UI line, not prose scenes.  
- Auto-flag lines missing `frame_ref`, `systems[]`, or `max_length`.  
- Draft branch_edges only where beat sheet lists funded consequences.  
- Never substitute Fountain/Celtx screenplay exports as SSOT — convert to `dlg.*` rows or reject.

### QC / gates

| Check | Pass |
|-------|------|
| Beat lock | Line pack cites only **locked** `B###` |
| Key shape | All keys match `dlg.<beat>.*` |
| Frame bind | Every line has `frame_ref` + matching `systems[]` |
| Speaker | Every `speaker` resolves to bible role |
| Branch budget | Choices ⊆ funded endings / beat consequences |
| Lock discipline | No key renames post-lock without migration |
| GO | Story Lead script pack GO + why logged |

### Common fails

- Screenplay-first drafting that never lands in `dlg.*` tables.  
- VO recorded against draft keys that change during translation.  
- Choice trees wider than beat sheet can pay for.  
- `INT_TALK` lines with empty `branch_edges` on mandatory choices.  
- Cursor or agents “polishing” locked text without new Script GO.

### Human-only gates

- Story Lead **script pack GO** (line pack acceptance).  
- Cultural/voice casting disputes escalated to Stephen when they affect clearance or ratings.

---

## 5. Game design pillars / L0–L5 / interaction binding

### Workflow

1. Restate factory pillars for the SKU: tale fidelity · story-paced length · smooth story + agency · factory-repeatable · stream multi-country.  
2. Map content to **L0–L5** (platform → presentation → exploration → narrative → challenge → progression).  
3. Fill interaction binding table: every beat → systems; L4/L5 never ship without L3 beat coverage.  
4. Author gate defs (`G_*`): type `story|combat|skill|locale`, requires/unlocks.  
5. Progression / endings graph — finite; optional variants only if source supports.  
6. Perf / session constraints for stream (pause-safe combat, chapter-sized sessions).  
7. Design pack GO (Design Lead) with Tech Lead schema co-sign on data shape.

### AI-assisted tips

- Generate binding matrices from beat sheet YAML; humans judge *meaning*, machines catch missing INT_*.  
- When a pillar cannot reject an idea, the pillar text is too vague — rewrite until it can say NO.

### QC / gates

| Check | Pass |
|-------|------|
| Pillars | Specific enough to reject scope creep |
| Layer rule | No L4/L5 without L3 coverage |
| Binding | ≥95% beats bound; 0 orphan frames |
| Stream | Session/pause notes present for combat-heavy beats |

### Common fails

- Pillars that fit everything.  
- Challenge systems (L4) inventing lore.  
- Menu/meta (L5) shipping before narrative spine.  
- GD prose as SSOT instead of YAML.

### Human-only gates

- Design pack GO.  
- Opening exceptions to one-live-milestone (Stephen).

---

## 6. Combat / gates / encounter budget (not grind pad)

### Workflow

1. Tag beats that need `INT_COMBAT` or combat-class `INT_GATE`.  
2. Author **encounter budget** per fight: `budget_minutes`, difficulty band, kit id, beat link.  
3. Prefer **canonical first-clear path** that reaches chapter power targets **without mandatory grinding**.  
4. Optional repeats: explicit anti-exploit reward scaling; never count optional grind toward authored length.  
5. Fail policy: story-safe retry / branch; no soft-lock.  
6. Teach → test → twist for new combat verbs across the chapter.  
7. Density over duration: fast feedback, frequent new content, minimal filler.

### Industrial defaults

- Encounter **count and minutes** come from beat tags, not from “RPG expectations.”  
- Unique loot / key items: first clear only.  
- Repeat XP/currency: diminishing returns with a floor for optional play.  
- Speed multipliers (if any): affect presentation of **repeats** only — never first-clear rewards or story timing.  
- Visible enemies / player agency preferred over invisible random spam unless kit explicitly designs otherwise.

### AI-assisted tips

- From beat sheet, propose encounter table rows; reject any row without `beat` + `budget_minutes`.  
- Simulate sum of combat budgets vs length envelope; flag when combat share exceeds design policy (SKU-specific cap).  
- Generate teach/test/twist notes per new kit verb.

### QC / gates

| Check | Pass |
|-------|------|
| Beat link | Every `E_*` cites a `B###` |
| Budget sum | Inside chapter/SKU combat minute policy |
| Grind | No required grind to hit level targets on canonical path |
| Soft-lock | Fail paths return to prep or story-safe retry |
| Lore | No characters/enemies outside bible |

### Common fails

- Using combat to inflate playtime.  
- Random encounter charts that ignore beat pacing.  
- Heal-bot trivial loops with no decision pressure.  
- Counting optional grind minutes in `target_play_minutes`.

### Human-only gates

- Design Lead GO on encounter budget.  
- Difficulty philosophy exceptions (Stephen if monetization-linked).

### Sources (fetched)

- JRPG advancement / first-clear XP budget pattern: https://raw.githubusercontent.com/patrickdugan/JRPG/main/docs/13-advancement-and-runtime-pacing.md  
- Zeboyd — density over filler grind: https://www.gamedeveloper.com/design/the-zeboyd-games-approach-to-jrpg-design  
- Level Design Book — teach/test/twist & intensity: https://book.leveldesignbook.com/process/preproduction/pacing  

---

## 7. MASTER_ASSET_LIST / content graph

### Workflow

1. Seed from storyboard frames + scenes + encounters + UI flows.  
2. One row per ship asset need: `asset_id`, type, role (explore/draft/**ship**), beat/scene refs, format, owner, status, art_pack path, license note.  
3. Build **content graph**: beat → scene → POI → systems → assets → locale keys → encounters.  
4. Mark reuse (shared combat kit, UI kit, modular env) vs unique set pieces.  
5. Freeze list at Design pack GO as *scope ceiling*; Art factory fulfills, does not invent unlisted ship assets.  
6. Diff list at Art pack GO — every ship row `GO` with why or explicitly cut with Design GO.

### AI-assisted tips

- Extract candidate assets from frames automatically; humans merge duplicates and cut vanity rows.  
- Graph lint: asset with no beat/scene edge = orphan candidate.  
- Prefer kit parts over one-off “whole city” rows (align art leaf).

### QC / gates

| Check | Pass |
|-------|------|
| Coverage | Every ship frame art_ref resolves |
| Orphans | No ship asset without graph edge |
| Cuts | Removals logged with Design why |
| License | Non-PD audio/fonts flagged for ledger |

### Common fails

- Open-world sprawl asset lists.  
- Art inventing heroes not on list.  
- List diverging from YAML SSOT (two truths).

### Human-only gates

- Scope cut that drops tale-critical identity assets (Story + Stephen if cultural).

---

## 8. Data model / schema / validators (YAML/JSON SSOT)

**On-disk schemas (Track A2):** [schemas/content-pack.schema.json](./schemas/content-pack.schema.json) and composed leaf schemas under [schemas/](./schemas/). CLI: `tools/validate-content-pack/` (root `README.md`). **Tech Lead Schema GO** still required — do not stamp Schema GO from validators alone.

### Workflow

1. Author **schema_version** (semver) + JSON Schema (draft 2020-12 recommended) for tale, beats, gates, scenes, encounters, dialogue, progression, handoff.lock — use repo schemas as baseline.  
2. Humans/agents edit **YAML/JSON SSOT**; Markdown is explanatory only.  
3. Validators in layers:  
   - **Shape** — required fields, types, ranges  
   - **Local semantics** — unique IDs, reachable start nodes, positive budgets  
   - **Cross-refs** — beat↔scene↔encounter↔locale↔asset  
   - **Runtime vocabulary** — `INT_*`, effect/condition names implemented by build contract  
4. Package related defs as one **validation unit** (content pack); fail atomically — no partial apply.  
5. CI: validate whole graph on change, not only the touched file.  
6. Migrations: explicit scripts when IDs/meaning change; schema validation ≠ save migration.

### Illustrative shape (not a live SKU)

```yaml
schema_version: "1.0.0"
tale:
  sku_id: "sku_<country>_<tale_slug>_v<semver>"
  clearance: "PD|licensed"
  target_play_minutes: { min: 0, max: 0 }
beats:
  - id: "B001"
    systems: ["INT_TALK", "INT_GATE"]
    scene: "SCN_01"
gates:
  - id: "G_CH1_END"
    type: "story"
    requires: ["B001"]
    unlocks: ["B002"]
encounters:
  - id: "E_CH1_BOSS"
    beat: "B00N"
    budget_minutes: 3
handoff.lock:
  art_pack_hash: "<sha>"
  design_pack_hash: "<sha>"
  schema_version: "1.0.0"
  tip: "<tip id>"
```

### AI-assisted tips

- Generate instance YAML from templates; always run Ajv/equivalent before GO.  
- Ask models to propose *validators* (duplicate ID, orphan frame, missing locale) as code or checklists.  
- Keep precise issue reports (path + severity); ban single “invalid content” blobs.

### QC / gates

| Check | Pass |
|-------|------|
| Schema GO | Tech Lead on version |
| Atomic pack | Errors block handoff |
| Prose drift | No Cursor reliance on Markdown over YAML |
| Secrets | No credentials in SSOT |

### Common fails

- Editing derived JSON by hand while YAML remains stale.  
- Valid shape, broken graph edges.  
- Hot-updating live defs without atomic validate.  
- Bumping schema without migration notes.

### Human-only gates

- Schema major bumps (Tech Lead GO; Stephen if platform contract changes).

### Sources (fetched)

- Validate RPG content graph (Overworld Engine): https://overworldengine.com/en/typescript-rpg-content-validation  
- JSON Schema specification: https://json-schema.org/specification  

---

## 9. Locale (strings / VO slots / fonts) multi-country

### Workflow

0. **Script lock first** — source-locale `dlg.*` line packs **locked** (Story Lead script pack GO; see §4) before VO batch recording and before translation / locale expand.  
1. **i18n architecture early** — all player-facing text as data (`dlg.*`, UI keys); no hard-coded strings in Cursor outputs.  
2. Stable string IDs; value edits without key renames.  
3. Metadata per string: speaker, max_length, context, screenshot/frame ref.  
4. **VO slots** — one slot per voiced line ID; locale pack `audio/vo/<locale>/`; lock voice IDs before batch.  
5. **Fonts** — Unicode/CJK/RTL plan; fallback fonts; UI expansion 20–35% for many EU languages.  
6. Glossary / termbase for tale names and UI verbs.  
7. Pseudo-localization pass before human LQA.  
8. Linguistic QA in build (overflow, placeholders, tone) + functional locale QA.  
9. **Locale GO** — 0 critical missing strings/VO for target markets.

### AI-assisted tips

- Draft glossary + pseudo-loc; humans own ship translation quality for launch markets.  
- MT may seed; post-edit + LQA required for narrative/VO.  
- Generate expansion stress strings for UI kit tests.

### QC / gates

| Check | Pass |
|-------|------|
| Critical coverage | 0 missing critical keys/VO |
| Placeholder parity | Tokens match source |
| Fonts | No tofu on target scripts |
| LQA | In-build, not spreadsheet-only |

### Common fails

- English-first UI that cannot reflow.  
- Concatenated sentences that break grammar.  
- Locale GO with “we'll patch VO later” on critical path.  
- Renaming keys and orphaning translations.

### Human-only gates

- Paid TMS / studio contracts.  
- Cultural adaptation disputes escalated to Stephen.

### Sources (fetched)

- Efficient localization pipeline (Pangea): https://www.pangea.global/blog/how-to-build-an-efficient-localization-pipeline-for-multilingual-games/  
- Game localization developer guide (Translated): https://translated.com/resources/game-localization-developer-guide  

---

## 10. Handoff pack / tip lock / Cursor contract

### Workflow

1. Assemble **design pack** (bible, beats, storyboard index, GD tables) + **art pack** (MANIFEST) + **locale packs** + **YAML/JSON SSOT**.  
2. Run full validators + orphan/locale critical checks.  
3. Write `handoff.lock`: `art_pack_hash`, `design_pack_hash`, `schema_version`, `tip`, `locked_at`.  
4. Output contract exit: `status: GO`, why, paths, next=`Cursor build`, blocked_on empty.  
5. PM schedules Cursor 3.0 consumption; game factory leaves IDLE only on Stephen restart / explicit open.  
6. Cursor implements **against frozen handoff only** — no story/art/lore invention; no beat length changes without new Design GO.  
7. Build tip GO when playable build matches lock hashes.

### Cursor contract (must / must not)

| Must | Must not |
|------|----------|
| Read SSOT + locked packs | Invent beats, characters, combat lore |
| Respect schema_version | Edit handoff hashes quietly |
| Emit build logs + tip id | Treat greybox as ship |
| Fail on missing asset refs | Open new milestones |

### AI-assisted tips

- Generate smoke consumer checklists from schema (load tale, resolve B001, spawn SCN_01, missing hash → fail).  
- Diff proposed Cursor changes against lock; any content mutation → NO.

### QC / gates

| Check | Pass |
|-------|------|
| Lock present | All hash fields non-empty |
| Hash match | Shipped packs match lock |
| IDLE law | No Cursor start before Art+Locale+lock |
| Output contract | Complete fields |

### Common fails

- “Soft lock” while art still iterating.  
- Cursor rewriting dialogue for “fit.”  
- Dual tips claiming both live without Tech policy.

### Human-only gates

- Stephen: START / STOP / restart game factory.  
- Tech Lead: tip model (dual vs single) decision.

---

## 11. QA (task / phase / real UAT — no paper greens)

### Workflow

1. **Task QA** — every factory task has a test case (or N/A + why); evidence artifact required.  
2. **Phase / regression** — L0–L5 suite: schema, load, beat path smoke, combat fail/retry, locale critical, soft-lock hunt.  
3. **UAT** — real Godot (or ship) play **or** recorded **runtime** video through primary beat path; acceptance criteria from DoD.  
4. Evidence pack: build/tip id, timestamp (HKT), tester, pass/fail per criterion, defect links.  
5. Phase QA GO only with real evidence; paper greens = **NO**.  
6. Release QA adds packaging, ratings disclosure accuracy, store/locale parity.

### Evidence standards (non-negotiable)

- Viewport from real build/branch/scene — not slides, editor mocks, or spliced stills sold as play.  
- UAT prerequisites: critical defects closed, UAT env ready, criteria defined, owners scheduled.  
- Prefer failing loud over false green.

### AI-assisted tips

- Draft matrices from beat/gate tables; humans execute or review recordings.  
- Auto-flag checklist rows that lack artifact paths.  
- Summarize defect clusters; do not auto-close without retest evidence.

### QC / gates

| Level | Evidence | Gate |
|-------|----------|------|
| Task | Checklist + artifact | Task GO |
| Phase | Automated + manual suite | Phase GO |
| UAT | Play/video runtime | UAT GO |
| Release | Packaging + locale + soft-lock | Release checklist |

### Common fails

- Spreadsheet PASS with no recording.  
- Testing design docs instead of builds.  
- Changing design to make a bad test “pass.”  
- Skipping fail-path / retry cases.

### Human-only gates

- UAT / Release GO sign-off path to Stephen for ship.  
- Accepting known severity exceptions (Stephen).

### Sources (fetched)

- UAT process & evidence practices (Panaya): https://www.panaya.com/blog/what-is-uat-testing/  

---

## 12. Publish / stream packaging / ratings (high-level)

### Workflow

1. Confirm platform targets (Stephen) and perf budget frozen at Design/Tech GO.  
2. Store presence checklist: page, capsules, description, locale store strings, discoverability keywords from tale.  
3. **Ratings / content survey** — honest mature content disclosure; start path in Concept, complete before review.  
4. If shipping generative AI content players consume, disclose per platform rules (pre-generated vs live-generated).  
5. Upload near-final build; store review before or per platform order; expect multi-business-day review buffers.  
6. Release GO (Stephen) — human presses platform release controls.  
7. Post-release: monitor session start, crash, locale health.

### High-level packaging notes

- Stream-native: chapter-sized sessions, cloud save / pause-safe combat, low soft-lock tolerance.  
- Premium-only default until Stephen states otherwise.  
- Physical/ESRB-PEGI certificates may differ from digital questionnaire paths — verify per store.

### AI-assisted tips

- Draft store copy from bible + beat promise; humans approve claims vs build.  
- Checklist generators from platform docs; never fabricate ratings answers.

### QC / gates

| Check | Pass |
|-------|------|
| Disclosure | Content survey matches build |
| Locale store | Target markets complete |
| Perf | Within frozen budget |
| Release GO | Stephen |

### Common fails

- Under-disclosing mature or AI content.  
- Store promises features absent from build.  
- Waiting until Release week to start ratings.

### Human-only gates

- Stephen Release GO / pricing / discounts permissions.  
- Legal responses to IP complaints.

### Sources (fetched)

- Steam Content Survey: https://partner.steamgames.com/doc/gettingstarted/contentsurvey  
- Steam Release Process: https://partner.steamgames.com/doc/store/releasing  

*Unverified without fetch:* other stream platforms’ exact cert steps — treat as TBD per Stephen platform pick.

---

## 13. Live ops / telemetry / hotfix vs new-tale queue

### Workflow

1. Ship with telemetry minimum: `session_start`, `beat_enter`, `gate_fail`, `combat_end`, `ending`, `crash` (extend per Tech schema).  
2. Live health bands: crash-free rate, session start success, pause/resume integrity, locale error rate.  
3. Triage: severity → hotfix queue vs next-tale queue vs known-issue accept.  
4. **Hotfix** — patch within same schema major when possible; re-validate content pack; smoke + targeted UAT.  
5. **New-tale queue** — only cleared tales; one live milestone **per SKU**; do not parallel soft-ship.  
6. Metrics loop: drop-off by beat, completion vs length band, country CTR — feed Track C learning.  
7. Live health GO before opening next factory milestone.

### AI-assisted tips

- Summarize telemetry anomalies with beat IDs; propose CAPA drafts.  
- Never auto-ship content hotfixes without QA evidence.

### QC / gates

| Check | Pass |
|-------|------|
| Telemetry live | Events flowing |
| Queue hygiene | Hotfix vs tale separation clear |
| Schema | Hotfix respects version policy |

### Common fails

- Using live ops to add grind pads for “retention.”  
- Mixing new-tale content into emergency hotfix without Design GO.  
- Ignoring gate_fail spikes as “player skill.”

### Human-only gates

- Stephen live priority / STOP.  
- Paid live services contracts.

---

## 14. PM / one-live-milestone / CAPA / STOP-IDLE

### Workflow

1. **One live milestone / phase / sprint per SKU** — board `issue_pack_ref` is the only live pack.  
2. Phase calendar mirrors Master Plan: Concept → Preprod → Art → Game → QA → Release → Live.  
3. Gate hygiene: collect output contracts; reject Soft CI.  
4. **IDLE default** for game factory; idle-safe docs/rules sync may proceed after PM+Tech PASS without re-asking Stephen.  
5. **STOP means STOP** — entire team parks craft/CAPA execution until Stephen lifts.  
6. **CAPA** when gates, prompts, tools, or process drift:  
   - Identify (triage: correction vs full CAPA)  
   - Investigate (root cause; not self-investigation only)  
   - Plan (correction / corrective / preventive lines + owners + dates)  
   - Implement  
   - Verify effectiveness (independent of implementer)  
   - Close (distinct approver)  
7. Cross-factory blockers escalate through Grok Bot to Stephen when `blocked_on` is license/sign-in/Stephen.

### AI-assisted tips

- Draft CAPA records from incident templates; humans own investigate/close segregation.  
- Board bots may enforce one-live-milestone labels; they must not invent a second live pack.

### QC / gates

| Check | Pass |
|-------|------|
| Single live ref | Exactly one per SKU |
| CAPA roles | Investigator ≠ sole closer; implementer ≠ sole verifier |
| STOP | No quiet craft during STOP |

### Common fails

- Parallel “shadow” milestones.  
- CAPA closed by the same person who implemented without effectiveness check.  
- Treating IDLE as permission to start Cursor.

### Human-only gates

- Stephen STOP / lift / restart.  
- Management approval on CAPAs with spend or license impact.

### Sources (fetched)

- CAPA six-stage workflow (CASRAI): https://casrai.org/guides/capa-process-steps  

---

## 15. Tech Lead contracts / schema versioning

### Workflow

1. Own engine constraints (Godot 4.x default), SSOT schema, validators, handoff contract, tip/hash discipline.  
2. **Semver policy:**  
   - PATCH — docs/clarifications, no instance break  
   - MINOR — additive optional fields with defaults  
   - MAJOR — renames, required new fields, semantic meaning changes → migrations + Tech Lead GO  
3. Dual vs single git tip — Tech Lead chooses; document; forbid dual *truths* even if dual tips.  
4. Consumer contract for Cursor: input paths, required hashes, failure modes, smoke checklist.  
5. Perf budget freeze per SKU class.  
6. Security: no secrets in packs; paid keys human-held.

### AI-assisted tips

- Generate migration skeletons and contract diffs; require human review on MAJOR.  
- Add CI jobs that fail on schema_version mismatch vs handoff.lock.

### QC / gates

| Check | Pass |
|-------|------|
| Version on every pack | Present + matching validators |
| Migration | Required for breaking changes |
| Contract GO | Before first SKU freeze |
| Tip policy | Written and followed |

### Common fails

- Silent field meaning changes.  
- Validators only on happy-path samples.  
- Cursor “helpfully” extending schema without Tech GO.

### Human-only gates

- Tech Lead schema GO.  
- Stephen on platform/engine default overturn.

### Sources (fetched)

- Content pack validation & versioning practices: https://overworldengine.com/en/typescript-rpg-content-validation  
- JSON Schema: https://json-schema.org/specification  

---

## 16. Recommended Concept → Release order (one SKU)

Aligns Master Plan Track B; arts-before-dev enforced.

```
B0  Clearance + country/tale pick (Stephen)     → Clearance GO
B1  Story bible + beat sheet + length band       → Story GO
B2  Storyboard + pillars/L0–L5 + combat/gates
    + MASTER_ASSET_LIST + SSOT fill              → Design pack GO
B2½ Dialogue / VO scripts (`dlg.*` lock)         → Script pack GO (Story Lead)
B3  Art/audio factory + locale packs             → Art pack GO + Locale GO
    (see AI_ART_BEST_PRACTICES.md for art order)
B4  Handoff.lock freeze → Cursor 3.0 build       → Build tip GO
B5  Task + phase QA + real UAT                   → Phase QA GO
B6  Stream packaging + ratings + listings        → Release GO (Stephen)
→   Live ops health + hotfix/tale queue          → Live health GO
```

**Dependency law:** Do not start B4 before B3 full lock. Do not start B3 **VO batch** or locale expand before **B2½** script pack GO. Do not start B3 art spend before B0 Clearance GO. Track C (N SKUs) waits for B6 or Stephen written exception — still one live milestone per SKU.

---

## 17. Avoid list (non-art factory)

- Soft CI / CONDITIONAL / greybox-as-ship gates  
- Paper greens / checklist theater without runtime evidence  
- Grind pads to hit a playtime vanity metric  
- Orphan storyboard frames (no `INT_*`)  
- Cursor inventing story, art, or beat length  
- Dual live milestones or dual ship truths  
- Agent-owned paid licenses / Secure Form logins  
- Locale GO with critical string/VO gaps  
- YAML/JSON and prose disagreeing (prose winning)  
- Partial content hot-apply without atomic validate  
- Open-world scope beyond tale-faithful spaces  
- Measuring success by documents generated or tickets closed  
- Quiet craft during STOP  
- Title-specific hero IDs in baseline kit templates  
- Hollywood screenplay / Fountain prose as dialogue SSOT (use `dlg.*` line packs)  

---

## 18. Sources (fetched / consulted 2026-10-14)

Industrial synthesis; vendor blogs are guidance, not product endorsement. **Factory laws in Master Plan + Standing Rules always win.**

### Fetched (cite-able)

- https://brokenbuildstudios.com/how-to-write-a-game-story-a-practical-guide/  
- https://book.leveldesignbook.com/process/preproduction/pacing  
- https://raw.githubusercontent.com/patrickdugan/JRPG/main/docs/13-advancement-and-runtime-pacing.md  
- https://www.gamedeveloper.com/design/the-zeboyd-games-approach-to-jrpg-design  
- https://legalmoveslawfirm.com/public-domain-characters/  
- https://www.pangea.global/blog/how-to-build-an-efficient-localization-pipeline-for-multilingual-games/  
- https://translated.com/resources/game-localization-developer-guide  
- https://www.panaya.com/blog/what-is-uat-testing/  
- https://partner.steamgames.com/doc/gettingstarted/contentsurvey  
- https://partner.steamgames.com/doc/store/releasing  
- https://casrai.org/guides/capa-process-steps  
- https://overworldengine.com/en/typescript-rpg-content-validation  
- https://json-schema.org/specification  

### Unverified (search hit only — do not treat as fetched authority)

- Steamworks review-process timing nuances beyond release doc summary  
- Non-Steam stream platform packaging checklists (await Stephen platform pick)  
- ESRB/PEGI physical vs IARC digital edge cases per territory  
- Internal GitHub beat-template gists mirrored in search results  

### Internal factory SSOT

- `FACTORY_MASTER_PLAN.md`  
- `team-knowledge/STANDING_RULES.md`  
- `team-knowledge/OUTPUT_CONTRACT.md`  
- `AI_ART_BEST_PRACTICES.md`  

---

## 19. Document control

| Field | Value |
|-------|-------|
| Path | `docs/FACTORY_NON_ART_BEST_PRACTICES.md` |
| Version | v1.1 |
| Updated | 2026-10-14 (HKT) — §4 dialogue/VO script track; §9 script-lock before VO/translation; §16 B2½ |
| Links from | FACTORY_MASTER_PLAN (Track A how-to leaf) · Standing Rules |
| Change control | PM + Tech Lead + relevant Lead propose; Stephen for policy/spend/STOP |
| Companion | AI_ART_BEST_PRACTICES.md (art tracks) |

*End of Factory Non-Art Best Practices.*
