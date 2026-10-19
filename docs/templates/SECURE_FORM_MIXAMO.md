# Secure Form — Mixamo / Adobe (OFF PATH — Stephen gate only)

> **Not the Game Factory skeleton/rig path.** Factory automation = **Tripo only** (rig, animate, retarget). Mixamo is **closed** unless Stephen explicitly reopens this gate. Agents must not use mixamo.com for auto-rig or animation.

**Track:** A4 art factory · **Not a GO stamp** — archived human attestation **only if** Stephen reopens Mixamo after Tripo path is ruled out.  
**Laws:** [FACTORY_MASTER_PLAN.md](../FACTORY_MASTER_PLAN.md) §4.1, §14 · [ART_OUTPUT_POLICY.md](../ART_OUTPUT_POLICY.md) POL-G-107 · [AI_ART_BEST_PRACTICES.md](../AI_ART_BEST_PRACTICES.md) §13.10 footnote  
**Skill:** [mixamo-adobe-gate](../team-knowledge/skills/mixamo-adobe-gate/SKILL.md) — **Stephen 1:1 only**; never from group room or agent session.

---

## Preconditions

- [ ] Stephen has **explicitly reopened** the Mixamo gate for this SKU (written ack in gate log).
- [ ] Tripo rig/animate/retarget + Blender polish documented as insufficient — not a coat-weight workaround.
- [ ] Art Lead has **NO** on using concept/gait-reference mesh as rig source — live ship mesh only.
- [ ] Escalation is **1:1 DM** with Stephen — URLs / clip names listed below before login (if clips are in scope).

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
| A0 | Stephen **reopen** of Mixamo gate recorded for this SKU (date + scope). | |
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
- ART-QA-LICENSE-002 evidence path populated **only when** Stephen reopened gate and Mixamo entered the pack.

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
| **FAIL** | Any unchecked box; agent attempted login without reopen; group-room Secure Form; raw redistribution planned; training use; tip-import before attestation on disk. |

**Exit line:** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Related

- [SECURE_FORM_FREESOUND.md](./SECURE_FORM_FREESOUND.md) · [SECURE_FORM_TTS_CONSENT.md](./SECURE_FORM_TTS_CONSENT.md)
- [CLEARANCE_PD_LICENSE_LEDGER.md](./CLEARANCE_PD_LICENSE_LEDGER.md) · [schemas/license-ledger.schema.json](../schemas/license-ledger.schema.json)
