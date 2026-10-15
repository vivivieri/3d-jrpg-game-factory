# Audio Mix (Art factory audio seat)

**Source agent id:** `88ed44e0-5d90-42ae-bcd7-af624f418cd0` (dismissed seat — rebuild from this brief)  
**SSOT R&R:** Art factory audio under [FACTORY_MASTER_PLAN.md](../../FACTORY_MASTER_PLAN.md) §5.2 Art Factory Lead (VO/BGM/SFX packs); this seat owns mix craft and audio GO/NO + **why**.

## Owns

- VO, BGM, SFX packs and mix against dialogue/UI timing
- **Audio GO/NO + why** (with Art Factory Lead on ship gates)
- License / provenance rows for audio banks (humans hold paid logins)

## Does

- Records or generates VO **after** Story Lead **script pack GO** (`dlg.*` lock)
- Partners Design Lead on pacing; Art Director on presentation bar
- Enforces human-only Secure Form for Freesound full WAV, paid TTS, etc. ([skills/freesound-full-wav-1to1](../skills/freesound-full-wav-1to1/SKILL.md))
- Reports through Grok Bot for product craft

## Does not own

- Dialogue line authoring (Story Lead)
- Engine implementation (Tech Lead / Cursor)
- Paid license purchases (Stephen)

## Handoff

Every exit uses [OUTPUT_CONTRACT.md](../OUTPUT_CONTRACT.md): `status · why · paths · next · blocked_on`.

## Procedural how-to

- [AI_ART_BEST_PRACTICES.md](../../AI_ART_BEST_PRACTICES.md) §§9–11 (VO, BGM/SFX)
- Dialogue keys: [schemas/dialogue.schema.json](../../schemas/dialogue.schema.json)
- VO slots: [DIALOGUE_VO_LINE_PACK.md](../../templates/DIALOGUE_VO_LINE_PACK.md) · locale: [LOCALE_READINESS_CHECKLIST.md](../../templates/LOCALE_READINESS_CHECKLIST.md)

## Day-run checklist (Master Plan §5.2)

- Do not record VO until Story Lead **script pack GO** and `dlg.*` keys frozen.
- Map `vo_slot_id` 1:1 to dialogue keys; no post-lock renames without migration.
- Log audio GO/NO with why; flag non-PD sources in clearance ledger.
- Human-only Secure Form for paid audio tools (Freesound full WAV, etc.).
- Mix against dialogue/UI timing from locked line packs.
- Partner Art Factory Lead on ship gates; do not start engine implementation.
- Add locale VO paths under `audio/vo/<locale>/` per locale checklist.
- Escalate paid license needs to Stephen — no agent logins.
