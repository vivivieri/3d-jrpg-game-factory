# Secure Form — TTS / voice clone consent (fillable kit)

**Track:** A4 VO / audio · **Not a GO stamp** — rights documentation before cloned or synthetic voice ships.  
**Laws:** [FACTORY_MASTER_PLAN.md](../FACTORY_MASTER_PLAN.md) §14 · [ART_OUTPUT_POLICY.md](../ART_OUTPUT_POLICY.md) §9 · [AI_ART_BEST_PRACTICES.md](../AI_ART_BEST_PRACTICES.md) §13.10  
**Scope:** ElevenLabs-class TTS, voice clone, or likeness-derived VO for any `dlg.*` line in a ship candidate.

---

## Preconditions

- [ ] Dialogue keys **locked** (`dlg.*` — no VO gen on draft keys).
- [ ] Voice bible defines cast lanes (narrator, party, NPC) — no celebrity likeness without counsel.
- [ ] Provider plan at download time allows **commercial** game use (paid tier if required).
- [ ] If voice clone: **consent form signed** by rights holder before first generation cached for ship.

---

## Steps (human + audio seat)

| Step | Action |
|------|--------|
| 1 | Identify voice lane (synthetic stock vs clone vs actor record). |
| 2 | For **clone / likeness**: collect signed consent (fields below); store PDF/scan on evidence path. |
| 3 | Record provider, plan tier, voice_id, and cache key policy in ledger. |
| 4 | Generate/cache only after consent on disk; log generations per SKU dashboard (AI_ART §13.11). |
| 5 | Complete attestation; link `LICENSE.json` on VO pack folder. |

---

## Attestation (checkboxes — all required for PASS)

| # | Statement | Pass ☐ |
|---|-----------|--------|
| T1 | **Consent / rights** documentation on file for clone or recognizable likeness. | |
| T2 | No ship VO using **unlicensed** third-party voice likeness. | |
| T3 | Provider **commercial** terms verified at time of download/generation. | |
| T4 | Steam/platform **disclosure** requirements noted if provider requires (no invented platform rules — flag for PM). | |
| T5 | Cache keys logged; no reuse of consent-limited voice across SKUs without re-review. | |

### Consent record (clone / likeness — fill when applicable)

| Field | Value |
|-------|-------|
| Rights holder legal name | |
| Relationship (actor, employee, licensee) | |
| Consent scope (SKU id, languages, term) | |
| Consent doc path (signed) | |
| Provider + voice_id | |
| Human reviewer (Stephen or counsel) | |
| Review date (HKT) | |

### VO manifest (per ship batch)

| dlg_key | voice_lane | cache_key | wav_path | ledger_asset_id |
|---------|------------|-----------|----------|-----------------|
| | | | | |

---

## Expected outcome

- Consent scan + ledger row before any clone VO in build tree.
- Listen evidence per ART-QA VO cases; no ship without attestation path.

---

## Evidence path

```
content/<sku_id>/clearance/secure_forms/TTS_CONSENT_<YYYYMMDD>_<voice_lane>.md
content/<sku_id>/clearance/secure_forms/evidence/TTS_CONSENT_<YYYYMMDD>/signed_consent.pdf
content/<sku_id>/audio/vo/<locale>/
```

---

## Pass / Fail

| Result | Bar |
|--------|-----|
| **PASS** | T1–T5 satisfied; consent on disk for clones; commercial terms; manifest complete. |
| **FAIL** | Clone without consent; draft dialogue keys; missing ledger; agent-owned paid login. |

**Exit line:** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Related

- [DIALOGUE_VO_LINE_PACK.md](./DIALOGUE_VO_LINE_PACK.md)
- [SECURE_FORM_MIXAMO.md](./SECURE_FORM_MIXAMO.md) · [SECURE_FORM_FREESOUND.md](./SECURE_FORM_FREESOUND.md)
