---
scorecard_kind: art_qa
sku_id: sku_xx_template_v0.0.0
date_hkt: YYYY-MM-DD
---

# Art QA scorecard (copy per SKU / asset)

**Executable cases:** [ART_QA_BEST_PRACTICES.md](../ART_QA_BEST_PRACTICES.md) · **Checklist table:** [ART_QA_TEST_CASES.md](./ART_QA_TEST_CASES.md)  
**Output contract:** `status · why · paths · next · blocked_on` — [OUTPUT_CONTRACT.md](../team-knowledge/OUTPUT_CONTRACT.md)

---

## Pack header

| Field | Value |
|-------|-------|
| SKU | |
| Art pack version / hash | |
| MASTER_ASSET_LIST ref | |
| Tester(s) | |
| Date (HKT) | |
| Build / branch / scene ref (if any) | |

---

## Per-asset task rows

Duplicate one block per asset (or one row per asset in the summary table below).

### Asset: `<asset_slug>` — track: `<2D|ENV|PROP|UI|TEX|3D|ANIM|VFX|VO|BGM|SFX|LOCALE>`

| Case ID | Severity | Pass / Fail / N/A | Evidence path | Notes / defect link |
|---------|----------|-------------------|---------------|---------------------|
| | | | | |
| | | | | |

**Asset task exit:** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Per-asset summary table (optional roll-up view)

| Asset slug | Track | Critical fails | Major open | Asset GO/NO | Evidence folder |
|------------|-------|----------------|------------|-------------|-----------------|
| | | | | | |

---

## Pack roll-up (ART-QA-PACK-*)

| Case ID | Pass / Fail | Evidence path | Notes |
|---------|-------------|---------------|-------|
| ART-QA-PACK-001 | | | MAL coverage |
| ART-QA-PACK-002 | | | Populated scene |
| ART-QA-PACK-003 | | | Ledger audit |
| ART-QA-PACK-004 | | | No paper green |

| Metric | Value |
|--------|-------|
| Total Critical fails (pack) | |
| Total Major open (critical path) | |

**Art Factory Lead pack exit (not a Stephen GO stamp):** `GO` / `NO` · why: · paths: · next: · blocked_on:

---

## Sign-off log

| Role | Name | Date (HKT) | Decision | Why (one line) |
|------|------|------------|----------|----------------|
| Art craft owner | | | | |
| QA spot-check | | | | |
| Art Factory Lead | | | GO/NO | |
