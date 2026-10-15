# Ratings & content matrix (blank template)

**Start in Concept** — ratings path must be started before Pre-production art spend (Master Plan §3.10, §11).

Fill this matrix per SKU. **Do not invent ratings outcomes** — checklist only until human counsel / store submissions complete.

## SKU header

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Target markets | _TBD (Stephen)_ |
| Ratings bodies | PEGI / ESRB / others _TBD_ |

## Content categories × markets

| Category | Description hints | Market A | Market B | Market C | Notes |
|----------|-------------------|----------|----------|----------|-------|
| Violence | Combat presentation, blood | | | | |
| Fear / horror | Tone, monsters | | | | |
| Language | Player-facing text / VO | | | | |
| Sex / nudity | Romance, wardrobe | | | | |
| Gambling | Mechanics | | | | |
| User-generated | If any | | | | |
| Cultural sensitivity | Tale fidelity / distortion risk | | | | |

## Concept-phase reminders

- [ ] License ledger row complete for tale and paid assets
- [ ] Stephen attestation if `clearance: licensed`
- [ ] No ship gate uses Soft CI / CONDITIONAL / greybox-as-ship

## Evidence & review log

| review_id | market | body (PEGI/ESRB/other TBD) | questionnaire status | build version tested | evidence_path | reviewer | date (HKT) |
|-----------|--------|----------------------------|----------------------|----------------------|---------------|----------|------------|
| | | | not started | | | | |

## Release crosswalk (fill before Release QA)

| Matrix row | Visible in build? | Store disclosure field | match? |
|------------|-------------------|------------------------|--------|
| Violence | | | |
| Fear / horror | | | |
| Language | | | |

## Concept → Release checklist

| Phase | Action | Done | Path |
|-------|--------|------|------|
| Concept | Matrix started; cultural sensitivity row reviewed | | |
| Pre-prod | Combat/dialogue tone aligned with violence/language rows | | |
| Art | Monster/wardrobe reviewed against fear/sex rows | | |
| QA | [QA_MATRICES.md](./QA_MATRICES.md) Level 4 disclosure check | | |
| Release | [STREAM_PACKAGING_CHECKLIST.md](./STREAM_PACKAGING_CHECKLIST.md) | | |

## Handoff

Log output contract fields when Concept pack reaches GO/NO: `status · why · paths · next · blocked_on` per [OUTPUT_CONTRACT.md](../team-knowledge/OUTPUT_CONTRACT.md).
