# Accessibility baseline (factory checklist)

**Not a legal compliance claim** — minimum factory bar for multi-country stream SKUs. Expand per market counsel and platform requirements.

## Checklist

| Area | Baseline |
|------|----------|
| Subtitles | On by default for voiced dialogue; readable contrast |
| Text scale | UI supports at least one larger text step where engine UI allows |
| Color | Avoid sole reliance on red/green for critical gameplay state; document known gaps |
| Input | Remappable controls where platform and engine support it |
| Audio | Separate sliders or mix groups for VO / SFX / BGM when applicable |
| Motion | Note any camera shake / flash; provide reduce option if implemented |
| Pause | L0 pause-safe expectations — see [L0_SESSION_SAVE_POLICY.md](./L0_SESSION_SAVE_POLICY.md) |

## Evidence at QA

- Real UAT or video through primary beat path (Master Plan §6 rule 10)
- Output contract on accessibility GO/NO: `status · why · paths · next · blocked_on`

## Forbidden

- Paper greens without runtime evidence
- Claiming WCAG / legal compliance without counsel review
