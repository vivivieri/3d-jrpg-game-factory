# Stream / store packaging checklist (fillable kit)

**Phase:** Release · Publish (Master Plan §3.9 Release, NON_ART §12)  
**Owners:** PM, Tech Lead · **Release GO:** Stephen (human platform controls)  
**Platform targets:** _TBD (Stephen)_ — checklist is **platform-agnostic**; fill rows for chosen stream/store APIs when decided.

Do **not** treat any single store (e.g. Steam) as factory-required until Stephen picks targets.

## SKU header

| Field | Value |
|-------|-------|
| `sku_id` | `sku_<country>_<tale_slug>_v<semver>` |
| Candidate build / tip | |
| Target markets | _TBD_ |
| Chosen platform(s) | _TBD (Stephen)_ |
| Monetization | Default premium-only until Stephen states otherwise |

## Perf / session (frozen at Design/Tech GO)

| item | frozen value | candidate build meets? |
|------|--------------|------------------------|
| Target play session shape | chapter-sized | |
| Pause-safe combat | per L0 policy | |
| Cloud save / resume | implementation TBD | |
| Build size / perf budget | TBD | |

## Store presence (per platform — duplicate section as needed)

| item | locale A | locale B | notes |
|------|----------|----------|-------|
| Product title | | | |
| Short description | | | tale-faithful; no false features |
| Long description | | | |
| Capsule / key art | | | Art pack GO assets only |
| Discoverability keywords | | | from bible promise |
| Age rating display | | | per ratings path |
| Pricing | | | Stephen |
| Release date window | | | buffer for review |

## Ratings / content disclosure

| item | pass |
|------|------|
| [RATINGS_CONTENT_MATRIX.md](./RATINGS_CONTENT_MATRIX.md) complete | |
| Survey answers match build (violence, language, fear, …) | |
| Ratings path started in Concept (not first week of Release) | |
| Generative-AI disclosure if players consume AI content | per platform rules |

## Build upload / certification (platform-specific — TBD)

| platform name (fill when known) | upload id | review status | blocker |
|---------------------------------|-----------|---------------|---------|
| _TBD_ | | | |

Reference links (examples only — not factory mandates):

- Store partner docs may include content surveys and release wizards; verify against **chosen** platform.

## Release QA cross-links

| doc | complete? |
|-----|-------------|
| [QA_MATRICES.md](./QA_MATRICES.md) Level 4 | |
| [LOCALE_READINESS_CHECKLIST.md](./LOCALE_READINESS_CHECKLIST.md) | |
| [L0_SESSION_SAVE_POLICY.md](./L0_SESSION_SAVE_POLICY.md) | |

## Release GO

| Field | Value |
|-------|-------|
| Stephen Release GO | _not stamped_ |
| Output contract logged | |

## Forbidden

- Store copy promising features absent from build  
- Under-disclosing mature or AI-generated content  
- Inventing required platform as SSOT

## References

- Master Plan §3.10 · §17 (stream **platform names** deferred to B0 Clearance — checklist ready)  
- [FACTORY_NON_ART_BEST_PRACTICES.md](../FACTORY_NON_ART_BEST_PRACTICES.md) §12
