# L0 session & save policy (factory default template)

**Layer:** L0 Platform / session (Master Plan §3.2)  
**Status:** Factory default — platform SDK wiring **TBD** (Stephen / Tech)  
**Output contract:** Any adoption GO must log `status · why · paths · next · blocked_on` per [OUTPUT_CONTRACT.md](../team-knowledge/OUTPUT_CONTRACT.md).

## Goals (stream-native JRPG SKUs)

| Concern | Factory default |
|---------|-----------------|
| Session length | Chapter-safe resume; player can quit mid-chapter without losing beat progress |
| Pause | Combat and cutscenes pause-safe where platform allows |
| Cloud save | Expect cloud/session resume for stream targets — **implementation TBD** |
| Offline | Define per SKU at Design/Tech GO if a market requires offline play |

## Per-SKU policy table (fill)

| Policy item | Choice | Notes |
|-------------|--------|-------|
| Save granularity | beat / gate / chapter checkpoint | |
| Primary checkpoint beat ids | | |
| Autosave: beat enter | on / off | |
| Autosave: gate pass | on / off | |
| Autosave: combat end | on / off | |
| Pause during dialogue | | platform TBD |
| Pause during combat | | platform TBD |
| Stream disconnect UX | | no soft-lock on resume |
| Offline play required? | yes / no / market-specific | Stephen markets TBD |
| Save blob schema version | ties to `schema_version` | Tech Lead |

## Checklist (fill per SKU)

- [ ] Save granularity defined (beat / gate / chapter checkpoint)
- [ ] Autosave triggers documented (beat enter, gate pass, combat end)
- [ ] Pause behavior during combat and dialogue documented
- [ ] Stream disconnect / resume UX specified (no soft-lock on resume)
- [ ] Save migration policy tied to `schema_version` bumps (Tech Lead)
- [ ] No credentials in save blobs or YAML SSOT
- [ ] `INT_STREAM` beat coverage noted in beat sheet / storyboard
- [ ] QA spot-check linked in [QA_MATRICES.md](./QA_MATRICES.md) phase regression

## Forbidden

- Soft CI / CONDITIONAL as ship gate for save readiness
- Shipping without a documented resume path for the primary beat spine

## References

- Master Plan §3.10 (streaming), §11 Game prod DoD  
- Telemetry baseline: [schemas/telemetry.events.schema.json](../schemas/telemetry.events.schema.json)
