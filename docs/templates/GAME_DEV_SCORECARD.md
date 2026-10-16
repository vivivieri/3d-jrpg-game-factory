# Game dev scorecard (copy per SKU / build tip)

**Executable cases:** [GAME_DEV_BEST_PRACTICES.md](../GAME_DEV_BEST_PRACTICES.md) · **Checklist:** [GAME_DEV_TEST_CASES.md](./GAME_DEV_TEST_CASES.md) · **Day-run:** [FACTORY_OPERATING_SOP.md](../FACTORY_OPERATING_SOP.md) Appendix B  
**Downstream QA:** [GAME_QA_BEST_PRACTICES.md](../GAME_QA_BEST_PRACTICES.md) on same `build_ref`  
**Output contract:** `status · why · paths · next · blocked_on` — [OUTPUT_CONTRACT.md](../team-knowledge/OUTPUT_CONTRACT.md)

**Workability:** No PASS without evidence file on disk. N/A requires `why`. Any **Critical** Fail → pack roll-up **NO** until retest (GAME-DEV-EVD-004).

---

## Pack header (required before any PASS)

| Field | Value |
|-------|-------|
| SKU (`sku_id`) | |
| Locked `pack_path` (YAML on disk) | |
| `schema_version` | |
| `handoff.lock.tip` | |
| `godot_project_ref` (path or commit in Cursor factory) | |
| `build_ref` (exported player path or CI artifact URL — **required before BLD-006 PASS**) | |
| Engine note | Godot 4.x **defaulted — not confirmed** (Master Plan §17) |
| Implementer(s) | |
| Date (HKT) | |
| Stephen factory open ref (AUTH-001) | |

---

## Authorization (`GAME-DEV-AUTH-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | N/A why (if N/A) |
|---------|----------|-------------------|---------------|------------------|
| GAME-DEV-AUTH-001 | Critical | | | |
| GAME-DEV-AUTH-002 | Critical | | | |
| GAME-DEV-AUTH-003 | Critical | | | |
| GAME-DEV-AUTH-004 | Major | | | |
| GAME-DEV-AUTH-005 | Critical | | | |

**AUTH exit:** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Intake (`GAME-DEV-INTAKE-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | N/A why (if N/A) |
|---------|----------|-------------------|---------------|------------------|
| GAME-DEV-INTAKE-001 | Critical | | | |
| GAME-DEV-INTAKE-002 | Critical | | | |
| GAME-DEV-INTAKE-003 | Critical | | | |
| GAME-DEV-INTAKE-004 | Critical | | | |
| GAME-DEV-INTAKE-005 | Critical | | | |
| GAME-DEV-INTAKE-006 | Major | | | |
| GAME-DEV-INTAKE-007 | Critical | | | |
| GAME-DEV-INTAKE-008 | Critical | | | |

**Intake exit:** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Import (`GAME-DEV-IMP-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-IMP-001 | Critical | | | |
| GAME-DEV-IMP-002 | Critical | | | |
| GAME-DEV-IMP-003 | Critical | | | |
| GAME-DEV-IMP-004 | Major | | | |
| GAME-DEV-IMP-005 | Major | | | |
| GAME-DEV-IMP-006 | Major | | | |

---

## Scenes (`GAME-DEV-SCN-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-SCN-001 | Critical | | | |
| GAME-DEV-SCN-002 | Major | | | |
| GAME-DEV-SCN-003 | Critical | | | |
| GAME-DEV-SCN-004 | Critical | | | |
| GAME-DEV-SCN-005 | Major | | | |
| GAME-DEV-SCN-006 | Major | | | |

---

## Dialogue (`GAME-DEV-DLG-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-DLG-001 | Critical | | | |
| GAME-DEV-DLG-002 | Major | | | |
| GAME-DEV-DLG-003 | Major | | | |
| GAME-DEV-DLG-004 | Critical | | | |
| GAME-DEV-DLG-005 | Major | | | |

---

## Interactions (`GAME-DEV-INT-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-INT-001 | Critical | | | |
| GAME-DEV-INT-002 | Major | | | |
| GAME-DEV-INT-003 | Critical | | | |
| GAME-DEV-INT-004 | Major | | | |
| GAME-DEV-INT-005 | Critical | | | |

---

## Combat (`GAME-DEV-CMB-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-CMB-001 | Critical | | | |
| GAME-DEV-CMB-002 | Critical | | | |
| GAME-DEV-CMB-003 | Major | | | |
| GAME-DEV-CMB-004 | Critical | | | |
| GAME-DEV-CMB-005 | Major | | | |

---

## Session / L0 (`GAME-DEV-SES-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-SES-001 | Major | | | |
| GAME-DEV-SES-002 | Major | | | |
| GAME-DEV-SES-003 | Critical | | | |
| GAME-DEV-SES-004 | Major | | | |

---

## Locale (`GAME-DEV-LOC-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-LOC-001 | Critical | | | |
| GAME-DEV-LOC-002 | Major | | | |
| GAME-DEV-LOC-003 | Critical | | | |
| GAME-DEV-LOC-004 | Major | | | |
| GAME-DEV-LOC-005 | Critical | | | |

---

## Build / tip (`GAME-DEV-BLD-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-BLD-001 | Critical | | | |
| GAME-DEV-BLD-002 | Critical | | | |
| GAME-DEV-BLD-003 | Critical | | | |
| GAME-DEV-BLD-004 | Critical | | | |
| GAME-DEV-BLD-005 | Major | | | |
| GAME-DEV-BLD-006 | Critical | | | |

---

## PM hooks (`GAME-DEV-PM-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-PM-001 | Critical | | | |
| GAME-DEV-PM-002 | Critical | | | |
| GAME-DEV-PM-003 | Major | | | |
| GAME-DEV-PM-004 | Major | | | |
| GAME-DEV-PM-005 | Major | | | |

---

## Evidence integrity (`GAME-DEV-EVD-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-EVD-001 | Critical | | | |
| GAME-DEV-EVD-002 | Critical | | | |
| GAME-DEV-EVD-003 | Major | | | |
| GAME-DEV-EVD-004 | Critical | | | |
| GAME-DEV-EVD-005 | Critical | | | |

---

## Pack roll-up (`GAME-DEV-PACK-*`)

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-DEV-PACK-001 | Critical | | | |
| GAME-DEV-PACK-002 | Major | | | |

---

## Build tip roll-up (human gate **not** stamped here)

| Result | Value |
|--------|-------|
| Implementer pack | `GO` / `NO` |
| why | |
| paths (scorecard + build log + `build_ref`) | |
| next | GAME_QA L1/L2 on `build_ref` |
| blocked_on | |

**Build tip GO** remains human (Master Plan B4) — this scorecard is evidence only.
