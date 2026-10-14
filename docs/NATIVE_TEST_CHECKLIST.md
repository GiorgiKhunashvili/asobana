# Native verification checklist

Use a development build or compatible SDK 57 Expo Go. Keep runtime test results
separate from Jest mocks and static bundle exports. Record platform/runtime, steps,
expected result and screenshot/log evidence in `CODEX_STATUS.md`.

## Core acceptance

- Fresh launch displays Georgian text and opens the first unlocked level.
- Drag from მ → ზ → ე and release: მზე appears across the crossword.
- Drag მ → ე and release: მე appears down, level completes, coins increase once.
- Before completion, repeat a found word: duplicate feedback and no extra reward.
- Drag an invalid permutation: gentle rejection and unchanged progress.
- Touch outside letters, select only one, or cancel: no word submission.
- Shuffle preserves each tile ID/letter and clears the active path.
- Next level unlocks; future levels/chapters and malformed deep links stay guarded.
- On level 2, repeated დ/მ/ა letters use distinct tiles without reuse.
- Bonus მადა credits 3 coins once before completion.
- Cell/word hints deduct displayed cost and survive restart; unavailable hints disable.
- Force-close/reopen: exact coins, current level, hints, word/cell/bonus progress restore.
- Settings toggles survive restart. Sound off silences tones; haptics off suppresses effects.
- Solve all four levels; final victory has no broken next-level action.

## Native smoke flows

`mobile/e2e/startup.yaml` opens Expo Go via local Metro and checks the initial
home/game UI. It expects a fresh GeoWords database, not a cleared Expo Go app.
Never clear all Expo Go data to reset one project's save.

```sh
# Terminal 1
cd mobile
NODE_OPTIONS=--dns-result-order=ipv4first npx expo start --localhost --ios
# Terminal 2 (Maestro must be installed)
maestro --device YOUR_SIMULATOR_UDID test mobile/e2e/startup.yaml
```

Additional smoke flows may use screen-specific coordinates and must name their
tested device/layout. They are not substitutes for hardware interaction testing.
Testers can replay completed levels only to view them; repeat fresh-start checks
in an isolated development build/database without deleting unrelated app data.

## Production readiness beyond Milestone A

Check small phones and tablets, large text/VoiceOver/TalkBack, rotation restrictions,
background/foreground and multi-touch cancellation, fast swipes, frame timing and
memory on iOS/Android hardware. Verify release-build cold startup in airplane mode;
Expo Go's dev server connection is not an offline startup test. Run a signed native
build, migration tests with previously shipped data and dependency advisory review
before store distribution. The prototype ships no payment or ad services.

## Recorded smoke-flow sequence

With a fresh, isolated GeoWords save on the tested iPhone 17 Pro:
`startup.yaml` → `drag.yaml` → `answer-feedback.yaml` → `family-partial.yaml` →
`restart.yaml` → `chapter-gesture.yaml` → `finish-pack.yaml`.

For the tested Pixel 10 Pro emulator:
`startup.yaml` → `android-drag.yaml` → `android-duplicate.yaml` →
`android-finish.yaml` (which runs `android-restart.yaml`).

The flows address controls by `testID` (`home-continue`, `input-mode`,
`tap-tile-<tileId>`, `tap-submit`, `hint-cell`, `victory-next`, …) and read results
from accessible labels such as `100 მონეტა`, `1/2 სიტყვა · ბონუსი 0` and the word
strip's `მე, უკვე ნაპოვნია`. A completed level hands off to the victory screen on
its own, so flows wait for `victory-title` instead of tapping a button. On fresh
Expo Go installs the startup/restart flows accept the system "Open" prompt and
dismiss Expo Go's developer-menu intro; on a never-used simulator, accept the first
prompt by hand once. The iOS sequence passed on an iPhone 17 simulator (same
402x874 pt viewport as the 17 Pro) after the presentation redesign. Android swipe
coordinates were re-measured from the redesigned screen but the Android flows have
not been re-run since the redesign.
Coordinates are specific to those portrait viewports. iOS Expo Go opens Home
on cold launch; Android Expo Go may restore the active route directly, which the
Android restart flow accepts and verifies. Both must restore authoritative SQLite
progress. Native reports and screenshots are under ignored `artifacts/maestro-*`.
No flow clears app data. Re-running a sequence requires a fresh test save; do not
run it against player progress or delete other Expo Go projects' data.
