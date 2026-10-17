# First-time tutorial — 2026-10-17

`tutorial.yaml` needs a save that has not seen the tutorial. On 2026-10-17 it
passed on the isolated **GeoWords Journey QA** simulator (iPhone 17, iOS 26.5,
Expo Go 57.0.9) with Metro serving this checkout on port 8092:

```sh
maestro --device SIMULATOR_UUID test --test-output-dir artifacts/tutorial/maestro \
  -e PORT=8092 mobile/e2e/tutorial.yaml
```

The save was a fresh `initialState` written into that simulator's
`geowords.db` (as a TEXT payload; a BLOB fails to load with a JSON parse
error). The flow opened level 1 from the path. It stepped through all four
coach marks and finished. After a cold restart, level 1 opened without the
tutorial. Settings' "სწავლების ჩვენება" showed it again, and skip closed it.
Screenshots of each step are in the git-ignored `artifacts/tutorial/`
(`tutorial-0-path` to `tutorial-6-settings`).

Before that, the same simulator still held its revision-10 QA save (level 5,
230 coins, 10 bonus finds). On launch it upgraded to revision 13. Level 5's
board opened without the tutorial, because the save has progress. Settings then
showed step 1 over level 5 (`migrated-*.png`). That check was a one-off flow
and is not committed. The QA save was put back afterwards. The steps' VoiceOver
labels were matched through the accessibility tree; VoiceOver itself, Android
and smaller phones were not run. Expo Go's blue developer-tools button is
visible in the screenshots.

# Navigation change — 2026-10-17

The home screen is gone: the app opens on the journey path. Flows that tapped
`home-continue` now tap `path-current`, the path's next-level coin. Only the
navigation steps changed; the stale flows below still assert old words and counts.

On 2026-10-17, `wide-screenshot.yaml` (pointed at Metro on port 8090, with a
leading `stopApp`) passed on the isolated **GeoWords UI iPhone 17** simulator
(iOS 26.5, Expo Go) with a save at level 18: it found `path-current`, opened
level 18 and asserted its title and 0/5 progress. The tabs, locked-level notes,
floating continue button, victory's return to the path and the coins page were
checked by hand on the same simulator. No native build or Android run.

# Journey feature checks — content revision 10

On 2026-10-16, an isolated iPhone 17 / iOS 26.5 / Expo Go 57.0.9 ran the native
journey flow at `artifacts/journey-v10/journey.yaml`. The test save was generated
through the engine: four completed boards and nine bonus finds, positioned at
level 5. No personal simulator saves were changed.

The flow submitted the tenth bonus, verified a free letter hint, consumed it,
completed the chapter through the letter keypad, opened the earned postcard,
returned home and verified the album contained one card. All assertions passed.
Screenshots and command logs are under
`artifacts/journey-v10/native-journey/2026-10-16_005132/journey/`.
A final reopen check verified the saved free hint. The corrected untruncated
badge is captured in `artifacts/journey-v10/free-hint-final.png`.
The initial Expo onboarding attempts are separate setup logs, not passing checks.
Expo Go's blue developer-tools button is visible in these test screenshots and
is not part of the shipped interface. Native Android and smaller-phone screenshots
were not run for revision 10; layout constraints and engine/storage coverage are
validated separately in the automated suites.

Historical flows below remain as their original revision's evidence.

# Native flow status — content revision 6

`wide-screenshot.yaml` targets the current UI and revision 6. It uses accessibility
IDs rather than wheel coordinates. Run on an isolated iPhone 17 with Expo Go SDK
57, first-launch instructions dismissed, Metro at `exp://127.0.0.1:8086`, and a
validated test save positioned at the requested unsolved level. Levels 1, 22 and
50 each have five answers. Example:

```sh
maestro --device SIMULATOR_UUID test --test-output-dir artifacts/wide-v6/maestro-22 \
  -e LEVEL_NUMBER=22 \
  -e SCREENSHOT=iphone17-level-22 mobile/e2e/wide-screenshot.yaml
```

Recorded on 2026-10-15 using an isolated **iPhone 17 / iOS 26.5 / Expo Go 57.0.9**
simulator (1206×2622 pixels). Expo Go's Tools button was disabled for clean captures.
The current screenshot flow passed for levels 1, 22 and 50. Final images:

- `artifacts/wide-v6/iphone17-level-01.png`
- `artifacts/wide-v6/iphone17-level-22.png`
- `artifacts/wide-v6/iphone17-level-50.png`

These are local test artifacts (git-ignored). Maestro command logs are under
`artifacts/wide-v6/maestro-01`, `maestro-22`, and `maestro-50`; the clean level-22
recapture after disabling the Tools button is under `artifacts/wide-v6/clean-22`.

The screenshot fixture completes earlier levels through the game engine and saves
an untouched current board. It is test setup, not evidence of a 50-level native
playthrough. Never replace a personal simulator's save with these fixtures.

The following **12 historical flows remain stale** and are not revision-6 release
checks. They remain intact as historical scenarios, not silently relabeled as
passing current tests. Android flows have not been rerun for this revision.

| Stale file               | Obsolete assumptions                                               |
| ------------------------ | ------------------------------------------------------------------ |
| `startup.yaml`           | Prototype 0/2 answers, old screen copy and home coin label         |
| `drag.yaml`              | Original two-answer board and old wheel swipe coordinates          |
| `answer-feedback.yaml`   | Original მე/ემ answers, 1/2 count and wheel/tap order              |
| `family-partial.yaml`    | Original family board, wheel tile IDs and bonus/progress counts    |
| `restart.yaml`           | Family partial fixture, 113/138 coins, old headings and tile order |
| `chapter-gesture.yaml`   | Prototype level-3 answers, progress and wheel gesture positions    |
| `finish-pack.yaml`       | Four-level prototype ending, answers and accumulated coins         |
| `beta-upgrade.yaml`      | Four-level prototype save at 191 coins upgrading to the old beta   |
| `android-drag.yaml`      | Original answers and Android wheel swipe coordinates               |
| `android-duplicate.yaml` | Prototype duplicate answer, tile order and progress text           |
| `android-finish.yaml`    | Original four-level ending, target order and rewards               |
| `android-restart.yaml`   | Original partial-save fixture and old answer/coin assertions       |

Migration coverage for revisions 1–5, unsupported-save retention, rollback,
completion rewards and close/reopen is in Jest with SQLite. This is separate from
native gesture coverage and does not make the historical flows current.
