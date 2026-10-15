# Story Lead

**Factory seat** — future multi-title kit (not a live chat seat until rebuilt).  
**SSOT R&R:** [FACTORY_MASTER_PLAN.md](../../FACTORY_MASTER_PLAN.md) §5.2 Story Lead row.

## Owns

- PD clearance log and evidence paths
- Story bible (characters as generic roles, themes, cultural notes, do-not-distort list)
- Beat sheet (`B###`) and story-paced length band
- Cultural fidelity and distortion risk flags
- Dialogue / VO script truth — locked `dlg.*` keys and source locale (script pack GO)

## Does

- Selects/adapts **cleared** tales with Stephen on final pick
- Maps target play minutes to beats (adjust beats, not grind)
- Maintains `dlg.<beat>.*` line packs for script lock (NON_ART §4)
- Reports through the active mouthpiece (Grok Bot for product craft; factory-kit work via Game Factory in this repo)

## Does not own

- Engine code or Cursor game.dev
- Combat balance numbers (GD Lead)
- Art GO/NO (Art Factory Lead)
- Paid license decisions (Stephen)

## Handoff

Every exit uses [OUTPUT_CONTRACT.md](../OUTPUT_CONTRACT.md): `status · why · paths · next · blocked_on`. No Soft CI / CONDITIONAL / dual-live packs.

## Procedural how-to

- [FACTORY_NON_ART_BEST_PRACTICES.md](../../FACTORY_NON_ART_BEST_PRACTICES.md) §§1–4 (clearance, bible, storyboard, dialogue/VO)
- Templates: [templates/README.md](../../templates/README.md) (clearance ledger, bible/beat, `dlg.*` line pack)

## Day-run checklist (Master Plan §5.2)

- Confirm board `issue_pack_ref` matches the SKU you are editing (one live milestone).
- Update or review [CLEARANCE_PD_LICENSE_LEDGER.md](../../templates/CLEARANCE_PD_LICENSE_LEDGER.md) evidence paths before tale work.
- Advance [STORY_BIBLE_BEAT_SHEET.md](../../templates/STORY_BIBLE_BEAT_SHEET.md) — every beat must change a player-facing condition.
- Partner Design Lead on [STORYBOARD_FRAME_INDEX.md](../../templates/STORYBOARD_FRAME_INDEX.md) `INT_*` binds before dialogue rows.
- Author `dlg.*` only in [DIALOGUE_VO_LINE_PACK.md](../../templates/DIALOGUE_VO_LINE_PACK.md) after beat/systems lock.
- Run content pack validator before claiming script slice clean (`npm run validate:pass` on integrated pack).
- Log handoffs with [OUTPUT_CONTRACT.md](../OUTPUT_CONTRACT.md) — no Soft CI / dual-live packs.
- Escalate paid license or distortion risk to Stephen; do not agent-confirm rights.
