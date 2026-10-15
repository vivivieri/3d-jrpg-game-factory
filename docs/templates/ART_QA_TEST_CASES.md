# Art QA test cases — execution checklist

**Full preconditions, steps, expected results:** [ART_QA_BEST_PRACTICES.md](../ART_QA_BEST_PRACTICES.md) §3.  
**Scorecard:** [ART_QA_SCORECARD.md](./ART_QA_SCORECARD.md)

Mark each row: **P**ass · **F**ail · **N/A** (requires why in scorecard). Evidence path column uses factory pattern:

`content/<SKU>/art/<track>/<asset_slug>/qa/<CASE_ID>_<YYYYMMDD>_<label>.<ext>`

---

## 2D / storyboard

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-2D-001 | Silhouette vs brief | Major | | |
| ART-QA-2D-002 | Turnaround consistency | Critical* | | |
| ART-QA-2D-003 | Legal / watermark / IP | Critical | | |
| ART-QA-2D-004 | Storyboard panel identity | Major | | |

\*Critical when sheet feeds image-to-3D.

---

## Environment

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-ENV-001 | Scale vs player capsule | Major | | |
| ART-QA-ENV-002 | Populated scene | Major | | |
| ART-QA-ENV-003 | Collision / nav sanity | Critical† | | |

†Critical on gameplay-critical areas.

---

## Props

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-PROP-001 | Pivot and origin | Major | | |
| ART-QA-PROP-002 | Interactable collision | Critical‡ | | |
| ART-QA-PROP-003 | LOD0 tri budget | Major | | |

‡Critical for quest/key interactables.

---

## UI

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-UI-001 | 32px hotbar readability | Major | | |
| ART-QA-UI-002 | Family coherence | Major | | |
| ART-QA-UI-003 | No baked text in icon art | Major | | |

---

## Textures / PBR

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-TEX-001 | Albedo lighting-free | Major | | |
| ART-QA-TEX-002 | ORM channel order | Major | | |
| ART-QA-TEX-003 | Texel density spot | Minor | | |

---

## 3D characters

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-3D-001 | Sheet silhouette @ gameplay cam | Major | | |
| ART-QA-3D-010 | Remesh-before-rig audit | **Critical** | | |
| ART-QA-3D-011 | Scale metres +Y / transforms | Major | | |
| ART-QA-3D-012 | Topology / manifold pre-bind | Major | | |
| ART-QA-3D-013 | UV stability | Major | | |
| ART-QA-3D-014 | Cloth/coat separation | Critical§ | | |
| ART-QA-3D-015 | Not concept mesh as ship | **Critical** | | |

§Critical for coated heroes.

---

## Animation

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-ANIM-001 | Mid-stride walk plate | **Critical** | | |
| ART-QA-ANIM-002 | Mid-stride idle plate | **Critical** | | |
| ART-QA-ANIM-003 | Foot skate / root motion | Major | | |
| ART-QA-ANIM-004 | Combat apex frame | Major | | |

---

## VFX

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-VFX-001 | Spritesheet grid math | Major | | |
| ART-QA-VFX-002 | Alpha light/dark BG | Major | | |
| ART-QA-VFX-003 | Combat overdraw spot | Major | | |

---

## VO

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-VO-001 | Voice bible identity | Major | | |
| ART-QA-VO-002 | Line technical | Major | | |

---

## BGM / SFX

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-BGM-001 | Loop seam | Major | | |
| ART-QA-SFX-001 | Not preview-as-ship | **Critical** | | |
| ART-QA-SFX-002 | Ducking vs VO | Major | | |

---

## Locale art

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-LOCALE-001 | UI expansion pseudo-loc | Major | | |
| ART-QA-LOCALE-002 | No baked text in world textures | Major | | |
| ART-QA-LOCALE-003 | Font embedding license | Critical | | |

---

## Godot GLB

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-GLB-001 | Import checklist | Major | | |
| ART-QA-GLB-002 | No fake LOD nodes in GLB | Major | | |
| ART-QA-GLB-003 | Collision from budgeted mesh | Major | | |

---

## License

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-LICENSE-001 | Row before handoff | **Critical** | | |
| ART-QA-LICENSE-002 | Mixamo Secure Form | **Critical** | | |

---

## Pack roll-up

| ID | Title | Sev | P/F/N | Evidence path |
|----|-------|-----|-------|---------------|
| ART-QA-PACK-001 | MAL coverage | **Critical** | | |
| ART-QA-PACK-002 | Populated scene plate | **Critical** | | |
| ART-QA-PACK-003 | License ledger audit | **Critical** | | |
| ART-QA-PACK-004 | No Soft CI / paper green | **Critical** | | |
