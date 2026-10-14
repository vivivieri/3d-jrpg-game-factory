# Output contract (every role → Grok Bot → Stephen)

Every handoff must include:

| Field | Meaning |
|-------|---------|
| `status` | `GO` / `NO` / `IDLE` / `BLOCKED` |
| `why` | One short reason (required for GO/NO) |
| `paths` | Tip/doc/asset paths touched |
| `next` | Single next action if any |
| `blocked_on` | Only `license` / `sign-in` / `Stephen` / empty |

Forbidden in outputs: Soft CI, CONDITIONAL-as-PASS, inventing a second live pack, quiet craft that contradicts the last latch.
