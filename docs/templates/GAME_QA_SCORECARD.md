# Game QA scorecard (copy per SKU / build)

**Executable cases:** [GAME_QA_BEST_PRACTICES.md](../GAME_QA_BEST_PRACTICES.md) · **Checklist:** [GAME_QA_TEST_CASES.md](./GAME_QA_TEST_CASES.md) · **Day-run:** [FACTORY_OPERATING_SOP.md](../FACTORY_OPERATING_SOP.md) §3  
**Output contract:** `status · why · paths · next · blocked_on` — [OUTPUT_CONTRACT.md](../team-knowledge/OUTPUT_CONTRACT.md)

**Workability:** No PASS without evidence file on disk. N/A requires `why`. Any **Critical** Fail → pack roll-up **NO** until retest (GAME-QA-EVD-004).

---

## Pack header (required before any PASS)

| Field | Value |
|-------|-------|
| SKU (`sku_id`) | |
| Locked `pack_path` (YAML on disk) | |
| `schema_version` | |
| `handoff.lock.tip` | |
| `build_ref` (exported player path or CI artifact URL — **required for runtime/UAT**) | |
| Tester(s) | |
| Date (HKT) | |
| Environment | dev / staging / candidate |

---

## L1 — Schema / handoff task block

| Case ID | Severity | Pass / Fail / N/A | Evidence path | N/A why (if N/A) |
|---------|----------|-------------------|---------------|------------------|
| GAME-QA-SCH-001 | Critical | | | |
| GAME-QA-SCH-002 | Critical | | | |
| GAME-QA-SCH-003 | Critical | | | |
| GAME-QA-SCH-004 | Major | | | |
| GAME-QA-SCH-005 | Critical | | | |
| GAME-QA-SCH-006 | Major | | | |
| GAME-QA-SCH-007 | Critical | | | |
| GAME-QA-SCH-008 | Critical | | | |
| GAME-QA-HOFF-001 | Critical | | | |
| GAME-QA-HOFF-002 | Critical | | | |
| GAME-QA-HOFF-003 | Critical | | | |
| GAME-QA-HOFF-004 | Critical | | | |
| GAME-QA-HOFF-005 | Major | | | |
| GAME-QA-HOFF-006 | Critical | | | |

**L1 task exit:** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## L2 — Phase regression block

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes / defect link |
|---------|----------|-------------------|---------------|---------------------|
| GAME-QA-LOAD-001 | Critical | | | |
| GAME-QA-LOAD-002 | Critical | | | |
| GAME-QA-LOAD-003 | Minor | | | |
| GAME-QA-LOAD-004 | Major | | | |
| GAME-QA-CMB-001 | Critical | | | |
| GAME-QA-CMB-002 | Major | | | |
| GAME-QA-CMB-003 | Critical | | | |
| GAME-QA-CMB-004 | Minor | | | |
| GAME-QA-CMB-005 | Major | | | |
| GAME-QA-SES-001 | Major | | | |
| GAME-QA-SES-002 | Major | | | |
| GAME-QA-SES-003 | Minor | | | |
| GAME-QA-SES-004 | Major | | | |
| GAME-QA-LOC-001 | Critical | | | |
| GAME-QA-LOC-002 | Critical | | | |
| GAME-QA-LOC-003 | Major | | | |
| GAME-QA-LOC-004 | Major | | | |
| GAME-QA-LOC-005 | Minor | | | |
| GAME-QA-A11Y-001 | Major | | | |
| GAME-QA-A11Y-002 | Major | | | |
| GAME-QA-A11Y-003 | Minor | | | |
| GAME-QA-A11Y-004 | Major | | | |
| GAME-QA-NAR-001 | Critical | | | |
| GAME-QA-NAR-002 | Major | | | |
| GAME-QA-NAR-003 | Major | | | |
| GAME-QA-NAR-004 | Critical | | | |
| GAME-QA-NAR-005 | Minor | | | |
| GAME-QA-NAR-006 | Major | | | |

| Metric | Value |
|--------|-------|
| Total Critical fails (L2) | |
| Open Major on spine | |

**L2 phase exit (not Phase QA GO stamp):** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## L3 — UAT block (play or `.mp4` only — no spreadsheet-only PASS)

| Case ID | Severity | Pass / Fail / N/A | Evidence path (.png / .mp4) | Notes |
|---------|----------|-------------------|----------------------------|-------|
| GAME-QA-UAT-001 | Critical | | | |
| GAME-QA-UAT-002 | Critical | | | |
| GAME-QA-UAT-003 | Major | | | |
| GAME-QA-UAT-004 | Major | | | |
| GAME-QA-UAT-005 | Major | | | |
| GAME-QA-UAT-006 | Critical | | | |

**L3 UAT exit (not UAT GO stamp):** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## L4 — Release block

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-QA-REL-001 | Major | | | |
| GAME-QA-REL-002 | Critical | | | |
| GAME-QA-REL-003 | Major | | | |
| GAME-QA-REL-004 | Major | | | |
| GAME-QA-REL-005 | Critical | | | |

---

## L5 — Live block

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes |
|---------|----------|-------------------|---------------|-------|
| GAME-QA-LIVE-001 | Major | | | |
| GAME-QA-LIVE-002 | Major | | | |
| GAME-QA-LIVE-003 | Critical | | | |
| GAME-QA-LIVE-004 | Minor | | | |

---

## Evidence integrity + pack roll-up

| Case ID | Pass / Fail | Evidence path | Notes |
|---------|-------------|---------------|-------|
| GAME-QA-EVD-001 | | | All PASS paths exist |
| GAME-QA-EVD-002 | | | No Soft CI |
| GAME-QA-EVD-003 | | | Header complete |
| GAME-QA-EVD-004 | | | Retest after Critical fix |
| GAME-QA-PACK-001 | | | L2 coverage |
| GAME-QA-PACK-002 | | | UAT bundle |
| GAME-QA-PACK-003 | | | Release index |
| GAME-QA-PACK-004 | | | No paper green |

**QA Lead roll-up (not Stephen Release/Phase GO):** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Sign-off log

| Role | Name | Date (HKT) | Decision | Why (one line) |
|------|------|------------|----------|----------------|
| QA Lead | | | GO/NO | |
| PM (gate hygiene) | | | informed | |
