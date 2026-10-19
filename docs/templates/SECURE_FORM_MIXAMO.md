# Secure Form — Mixamo / Adobe animation (fillable kit)

**Track:** A4 art factory · **Not a GO stamp** — human attestation before Mixamo/Adobe downloads enter `main`.  
**Laws:** [FACTORY_MASTER_PLAN.md](../FACTORY_MASTER_PLAN.md) §4.1, §14 · [ART_OUTPUT_POLICY.md](../ART_OUTPUT_POLICY.md) POL-G-103 · [AI_ART_BEST_PRACTICES.md](../AI_ART_BEST_PRACTICES.md) §13.10  
**Skill:** [mixamo-adobe-gate](../team-knowledge/skills/mixamo-adobe-gate/SKILL.md) — **Stephen 1:1 only**; never from group room or agent session.

---

## Preconditions

- [ ] Ship mesh meets Mixamo auto-rig constraints (scale, T-pose/A-pose, no fused coat shells blocking rig).
- [ ] Art Lead has **NO** on using concept/gait-reference mesh as rig source — live ship mesh only.
- [ ] Mixamo/Adobe is the agreed path (not a workaround for unfixed coat weights).
- [ ] Escalation is **1:1 DM** with Stephen — URLs / clip names listed below before login.

---

## Steps (human — Stephen or designated counsel)

| Step | Action |
|------|--------|
| 1 | Open Mixamo/Adobe in **private 1:1** session (no shared agent browser, no group chat device code). |
| 2 | Confirm **account type** allows commercial game embed per current Adobe/Mixamo terms. |
| 3 | For each clip: download FBX/GLB to agreed scratch folder; record filename + Mixamo character preset used. |
| 4 | Complete checkboxes in **Attestation** below; save signed copy to evidence path. |
| 5 | Notify art seat with `status · why · paths · next · blocked_on` — agents may import only after attestation on disk. |

---

## Attestation (checkboxes — all required for PASS)

| # | Statement | Pass ☐ |
|---|-----------|--------|
| A1 | Account eligibility verified for **commercial** game use (not edu/personal-only if terms forbid ship). | |
| A2 | Assets will be **embedded in shipped game** — raw Mixamo files **not** redistributed as standalone downloads. | |
| A3 | **AI/ML training ban** on Mixamo content acknowledged ([Mixamo additional terms](https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Mixamo-Addl-Terms-en_US-20210623.pdf)). | |
| A4 | Mesh met auto-rig constraints at upload; no post-download “fix” by swapping alternate Mixamo body without AD review. | |
| A5 | Secure Form completed in **1:1** — not group room, not Cloud Agent login. | |

### Clip manifest

| mixamo_url_or_id | clip_name | character_preset | download_path (scratch) | imported_to_sku_path |
|------------------|-----------|------------------|-------------------------|----------------------|
| | | | | |

---

## Expected outcome

- Signed attestation file on disk under evidence path.
- Downloads match manifest; `LICENSE.json` / ledger row updated per [license-asset.schema.json](../schemas/license-asset.schema.json).
- ART-QA-LICENSE-002 evidence path populated when Mixamo used.

---

## Evidence path

```
content/<sku_id>/clearance/secure_forms/MIXAMO_<YYYYMMDD>_<initials>.md
```

Attach export receipt screenshot (optional) under:

```
content/<sku_id>/clearance/secure_forms/evidence/MIXAMO_<YYYYMMDD>/
```

---

## Pass / Fail

| Result | Bar |
|--------|-----|
| **PASS** | All attestation boxes checked; manifest complete; 1:1 discipline; ledger row `commercial_ok: true` with human reviewer. |
| **FAIL** | Any unchecked box; agent attempted login; group-room Secure Form; raw redistribution planned; training use; tip-import before attestation on disk. |

**Exit line:** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Related

- [SECURE_FORM_FREESOUND.md](./SECURE_FORM_FREESOUND.md) · [SECURE_FORM_TTS_CONSENT.md](./SECURE_FORM_TTS_CONSENT.md)
- [CLEARANCE_PD_LICENSE_LEDGER.md](./CLEARANCE_PD_LICENSE_LEDGER.md) · [schemas/license-ledger.schema.json](../schemas/license-ledger.schema.json)
