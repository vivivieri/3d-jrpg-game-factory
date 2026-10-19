# Telemetry emit contract (Godot-oriented)

**Track:** A5 / A7 live baseline · **Not a GO stamp** — factory emit rules before store/SDK wiring.  
**Schema:** [schemas/telemetry.events.schema.json](./schemas/telemetry.events.schema.json)  
**Store / SDK destination:** **TBD** (Stephen / Tech) — this leaf defines **when** and **what** to emit, not where packets land.

**Factory status:** IDLE — no `game.dev` restart required to adopt this contract in kit docs.

---

## Events (Master Plan §16)

| `event` | When to emit (Godot) | Required fields (beyond envelope) |
|---------|----------------------|-----------------------------------|
| `session_start` | First frame after boot / resume into playable scene | `session_id`, `build_tip`, `locale` recommended |
| `beat_enter` | Player enters narrative beat boundary (scene load or beat trigger) | `beat_id` |
| `gate_fail` | Player fails a progression gate (skill/combat/story/locale) | `gate_id` |
| `combat_end` | Encounter resolves (win/loss/flee) | `encounter_id` |
| `ending` | Credits or ending branch reached | `ending_id` |
| `crash` | Uncaught error / assert path before quit | `session_id`; optional `payload` with `godot_version` |

**Envelope (all events):** `event`, `sku_id`, `occurred_at` (ISO-8601 UTC). See schema for optional fields.

---

## Godot integration sketch

Emit from a single autoload `TelemetryBus` (name illustrative) — **do not** block gameplay thread on network I/O.

```gdscript
# Pseudocode — ship project implements; kit validates JSON envelopes only.
func emit_beat_enter(beat_id: String) -> void:
    var envelope := {
        "event": "beat_enter",
        "sku_id": ProjectSettings.get_setting("factory/sku_id"),
        "occurred_at": Time.get_datetime_string_from_system(true),
        "session_id": _session_id,
        "beat_id": beat_id,
        "build_tip": _build_tip,
        "locale": TranslationServer.get_locale()
    }
    _queue.enqueue(envelope)
```

- Queue to disk or debug log in dev; wire to store SDK when Tech selects destination.
- Validate sample files with `npm run validate:telemetry:pass`.

---

## PII ban

**Never** include in `payload` or top-level fields:

- Player real names, emails, free-text chat, precise GPS, advertising IDs, IP addresses, device serials.
- Use opaque `session_id` (UUID) generated per launch.

Allowed in `payload`: engine build hash, Godot version, frame time stats **aggregated**, `ending_id` / `beat_id` factory ids.

---

## Fixture paths (CI)

| Kind | Path |
|------|------|
| Pass samples | `fixtures/telemetry/pass/*.json` |
| Fail samples | `fixtures/telemetry/fail/*.json` |
| Validator | `tools/validate-factory-kits/validate-telemetry.mjs` |

GAME-QA-LIVE-001 evidence pattern: `content/<SKU>/qa/live/GAME-QA-LIVE-001_<date>_telemetry_sample.json`

---

## Pass / Fail (kit validation)

| Result | Bar |
|--------|-----|
| **PASS** | JSON validates against `telemetry.events.schema.json`; event-conditional required fields present; no forbidden PII keys in fixtures. |
| **FAIL** | Schema error; missing `beat_id` on `beat_enter`; extra unknown top-level keys (`additionalProperties: false`). |

---

## Related

- [FACTORY_MASTER_PLAN.md](./FACTORY_MASTER_PLAN.md) §16
- [LIVE_OPS_HOTFIX_TALE_QUEUE.md](./templates/LIVE_OPS_HOTFIX_TALE_QUEUE.md)
- [GAME_QA_BEST_PRACTICES.md](./GAME_QA_BEST_PRACTICES.md) — GAME-QA-LIVE-001
