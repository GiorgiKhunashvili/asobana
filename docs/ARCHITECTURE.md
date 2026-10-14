# GeoWords architecture

## Requirements baseline

The repository was empty on 2026-10-14. The requested
`GEOWORDS_PRODUCT_AND_ENGINEERING_SPEC.md` was not supplied. The pasted Principal
Mobile Game Engineer brief is the baseline; reconcile the separate spec when it
becomes available. No existing application or Claude presentation files existed.

## Boundaries

- `mobile/src/models`: versioned JSON and public engine/presentation types.
- `mobile/src/engine`: pure TypeScript validation, Unicode, rules, wheel geometry,
  state transitions and selectors. No React, platform imports, clocks or IO.
- `content`: source-of-truth reviewed vocabulary and versioned level packs.
- `mobile/src/content`: bundled content and startup validation.
- `mobile/src/storage`: SQLite migrations and atomic, validated saves.
- `mobile/src/state`: Zustand adapter; serialize commands, persist before publishing
  authoritative state, report errors without silently discarding player progress.
- `mobile/src/services`: optional platform effects driven by engine events.
- `mobile/app`: Expo Router routes; navigation never changes business rules.
- `mobile/src/components` and `screens`: replaceable temporary presentation.
- `puzzle-generator`: typed Python ingestion, validation, seeded layout/export.

Claude owns future theme, typography, visual components and presentation animations.
Codex owns input recognition and the engine/state/storage boundary. Use
`docs/INTEGRATION_CONTRACT.md` instead of reaching into engine internals.

## Decisions and risks

1. Offline bundled content and local SQLite only. No accounts, network calls or
   monetization SDKs in Milestone A.
2. All transitions return a new state plus transient presentation events. Coins,
   hints, completion reward and unlocking change together in one saved snapshot.
3. The database contains a versioned snapshot and a revision. An exclusive
   transaction and compare-and-swap protect against stale writers. UI commands
   are queued, and the UI publishes success only after the commit.
4. NFC, Unicode Georgian casing, strict modern Mkhedruli letters and code-point
   length. Tile IDs, not character values, identify repeated letters.
5. Selection geometry and rules run as worklets on the UI thread. Pointer/path
   shared values do not update Zustand or write storage. Release crosses to JS
   once. Presentation may subscribe to tile-entry events for haptics/preview.
6. Content is validated structurally and semantically before play. A small
   curated vocabulary avoids redistributing an unlicensed scraped dictionary.
   Linguistic review and generation are separate; generated exports are drafts.
7. Restart validation rejects corrupt/unsupported snapshots visibly, preserving
   the stored data. No automatic coin reset or destructive recovery.
8. Native Skia rendering, SQLite and gestures require device verification. Static
   exports and mocked tests alone do not establish 60 FPS or native correctness.

## Phases

See `DEVELOPMENT_PLAN.md`. Future services can consume events; they must not own
authoritative progression. New content must preserve stable level/word/tile IDs
and carry an explicit content revision. Snapshot migrations accompany changes.
