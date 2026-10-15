# Accessibility baseline (factory checklist)

**Not a legal compliance claim** — minimum factory bar for multi-country stream SKUs. Expand per market counsel and platform requirements.

## Per-SKU fillable matrix

| Area | Baseline | SKU implementation | known gap | owner |
|------|----------|-------------------|-----------|-------|
| Subtitles | On by default for voiced dialogue; readable contrast | | | |
| Text scale | ≥1 larger UI step where engine allows | | | |
| Color | No sole red/green for critical state | | | |
| Input | Remap where platform + engine support | | | |
| Audio | VO / SFX / BGM separate where applicable | | | |
| Motion | Shake/flash documented; reduce if implemented | | | |
| Pause | L0 pause-safe — [L0_SESSION_SAVE_POLICY.md](./L0_SESSION_SAVE_POLICY.md) | | | |

## Evidence at QA (required — no paper green)

| test | build/tip | evidence path (play or video) | pass/fail | date (HKT) |
|------|-----------|---------------------------------|-----------|------------|
| Subtitle legibility on primary beat path | | | | |
| Text scale step exercised | | | | |
| Critical combat/state readable without color-only cue | | | | |

- Real UAT or video through primary beat path (Master Plan §6 rule 10)
- Output contract on accessibility review: `status · why · paths · next · blocked_on`

## Forbidden

- Paper greens without runtime evidence
- Claiming WCAG / legal compliance without counsel review
