# Secure Form — Freesound full WAV (fillable kit)

**Track:** A4 / audio · **Not a GO stamp** — human attestation before Freesound originals enter `main`.  
**Laws:** [FACTORY_MASTER_PLAN.md](../FACTORY_MASTER_PLAN.md) §14 · [ART_OUTPUT_POLICY.md](../ART_OUTPUT_POLICY.md) POL-G-103, §9 · [AI_ART_BEST_PRACTICES.md](../AI_ART_BEST_PRACTICES.md) §13.10  
**Skill:** [freesound-full-wav-1to1](../team-knowledge/skills/freesound-full-wav-1to1/SKILL.md) — **Stephen 1:1**; HQ preview ≠ full WAV.

---

## Preconditions

- [ ] Sound ID and license page reviewed **before** download (not after import).
- [ ] SKU is **commercial** — only **CC0** or **CC-BY** accepted; **BY-NC** = automatic **NO**.
- [ ] Asset row exists on [MASTER_ASSET_LIST.md](./MASTER_ASSET_LIST.md) or brief scope.
- [ ] Human login scheduled 1:1 — agents do not own Freesound sessions.

---

## Steps (human)

| Step | Action |
|------|--------|
| 1 | Open Freesound asset page; screenshot license + file size (not preview player only). |
| 2 | Login 1:1; download **original** WAV (full quality) to `_full/` folder — never ship preview transcode as final. |
| 3 | If CC-BY: file attribution text in ledger + in-game credits stub path. |
| 4 | Complete attestation checkboxes; update `LICENSE.json` / pack ledger. |
| 5 | Run `npm run validate:license:pass` on ledger fixture pattern before handoff import. |

---

## Attestation (checkboxes — all required for PASS)

| # | Statement | Pass ☐ |
|---|-----------|--------|
| F1 | Downloaded **original full WAV** — not preview / not HQ stream rip. | |
| F2 | License is **CC0** or **CC-BY** suitable for **commercial** SKU. | |
| F3 | **BY-NC** (or incompatible) license **rejected** — asset not imported if NC. | |
| F4 | **Attribution** filed for CC-BY (credits path + ledger row). | |
| F5 | Secure Form / login completed **1:1** — not agent session. | |

### Asset manifest

| freesound_id | display_name | license (CC0/CC-BY) | file_sha256 | `_full/` path | credits_line |
|--------------|--------------|---------------------|-------------|---------------|--------------|
| | | | | | |

---

## Expected outcome

- Full WAV on disk under SKU audio tree; preview not referenced in ship candidate.
- Ledger row passes [license-asset.schema.json](../schemas/license-asset.schema.json).
- ART-QA-SFX-001 / LICENSE-002 evidence paths resolvable.

---

## Evidence path

```
content/<sku_id>/clearance/secure_forms/FREESOUND_<YYYYMMDD>_<sound_id>.md
content/<sku_id>/audio/sfx/_full/<sound_id>.wav
content/<sku_id>/clearance/secure_forms/evidence/FREESOUND_<YYYYMMDD>_<sound_id>/license_screenshot.png
```

---

## Pass / Fail

| Result | Bar |
|--------|-----|
| **PASS** | All F1–F5 checked; manifest + SHA256; commercial license; attribution if BY. |
| **FAIL** | Preview as ship; BY-NC; missing attribution; agent login; missing ledger row (POL-G-002). |

**Exit line:** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Related

- [SECURE_FORM_MIXAMO.md](./SECURE_FORM_MIXAMO.md) · [SECURE_FORM_TTS_CONSENT.md](./SECURE_FORM_TTS_CONSENT.md)
- [schemas/license-ledger.schema.json](../schemas/license-ledger.schema.json)
