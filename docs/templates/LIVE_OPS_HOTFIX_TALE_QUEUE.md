# Live ops — hotfix vs new-tale queue (fillable kit)

**Phase:** Live ops (Master Plan §2, NON_ART §13)  
**Owners:** PM, QA Lead · **Metrics:** Tech schema [telemetry.events.schema.json](../schemas/telemetry.events.schema.json)

## SKU header

| Field | Value |
|-------|-------|
| Live `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Live build / tip | |
| `schema_version` in production | |
| Live health GO date | |

## Telemetry minimum (extend per Tech)

| event | emitting? | dashboard link |
|-------|-----------|----------------|
| `session_start` | | |
| `beat_enter` | | |
| `gate_fail` | | |
| `combat_end` | | |
| `ending` | | |
| `crash` | | |

## Live health bands (thresholds TBD with Tech)

| signal | green | yellow | red | current | owner |
|--------|-------|--------|-----|---------|-------|
| Crash-free rate | TBD | TBD | TBD | | QA |
| Session start success | TBD | TBD | TBD | | Tech |
| Pause/resume integrity | TBD | TBD | TBD | | QA |
| Locale error rate | TBD | TBD | TBD | | PM |

## Triage queue

| incident_id | severity | beat/locale area | hotfix? | new-tale? | known-issue accept? | owner | status |
|-------------|----------|------------------|---------|-----------|---------------------|-------|--------|
| | | | | | | | |

### Hotfix path (same SKU, same schema major when possible)

| step | done? |
|------|-------|
| Root cause + CAPA draft | |
| Content pack re-validate (`validate.mjs`) | |
| Targeted smoke + [HANDOFF_SMOKE_CONSUMER.md](./HANDOFF_SMOKE_CONSUMER.md) | |
| Targeted UAT evidence (play/video) | |
| QA Lead sign-off on evidence | |
| Stephen authorized deploy? | |

### New-tale queue (factory pipeline)

| queue rank | `sku_id` candidate | clearance status | milestone live? | blocked_on |
|------------|-------------------|------------------|-----------------|------------|
| | | | **one live milestone per SKU** | |

**Rule:** Do not parallel soft-ship tracks — prior SKU live health GO before opening next factory milestone (unless Stephen written exception).

## Metrics loop (Track C learning)

| metric | insight | action |
|--------|---------|--------|
| Drop-off by beat | | |
| Completion vs length band | | |
| Country CTR (if available) | | |

## Live health GO

| check | pass |
|-------|------|
| Crash/session/locale within bands | |
| No open sev-1 without hotfix or accept | |
| Next tale queue ordered with Clearance rows | |

**Live health GO:** _not stamped in kit repo_

## References

- [FACTORY_NON_ART_BEST_PRACTICES.md](../FACTORY_NON_ART_BEST_PRACTICES.md) §13  
- Master Plan §6 — one live milestone
