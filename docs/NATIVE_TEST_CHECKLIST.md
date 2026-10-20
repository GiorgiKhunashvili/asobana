# Native verification checklist

Use a development build for AdMob ads; compatible SDK 57 Expo Go supports gameplay
with an unavailable-ad message. Keep runtime test results
separate from Jest mocks and static bundle exports. Record platform/runtime, steps,
expected result and screenshot/log evidence in `CODEX_STATUS.md`.

## AdMob demo ads

No AdMob account is needed for this test configuration. Google supplies the
[demo ad units](https://developers.google.com/admob/ios/test-ads) and sample app
IDs in the [iOS](https://developers.google.com/admob/ios/quick-start) and
[Android](https://developers.google.com/admob/android/quick-start) setup guides.
The demo earns in-game coins but produces no advertising revenue.

The installed native integration is `react-native-google-mobile-ads` 17.3.1.
It cannot run in Expo Go. From the repository root:

```sh
npm ci
npm run ios
# Or npm run android with the Android SDK/emulator available.
```

These commands create/build a local development client. Local iOS simulator
testing needs Xcode but does not require AdMob registration or a paid Apple
Developer membership. A physical iPhone build requires the appropriate signing.
An EAS `development` profile is also configured; no EAS build or TestFlight
upload is implied by this implementation.

Verify on the native development build:

1. Open the coins screen. Wait for the ad to load; it must not open automatically.
2. Tap “ნახე რეკლამა · +75 მონეტა”. Confirm Google's test-ad label, complete its
   reward action, and dismiss. The balance increases by exactly 75 after saving.
3. Restart the app. The same balance and prior progress must remain. Watch a
   second ad: it can earn a separate 75-coin reward.
4. Close an ad before earning its reward. No coins are added. Repeated presses
   while loading/showing/saving must not present multiple ads.
5. In an isolated test save, spend below the displayed hint cost. The affected
   button keeps its hint icon and its price pill turns gold, reading `▶ +75` with a
   coin, with one brief bounce. Press it: the ad opens from gameplay without a coins-page
   detour or another watch press. If loading, wait or cancel. Leaving the board
   or backgrounding during that wait must prevent a later presentation. Returning
   after earning does not auto-buy a hint; another explicit hint press buys it at
   the displayed price. With 30 coins only the 50-coin hint should offer an ad.
6. A free bonus letter hint works at zero coins without opening the ad offer.
7. Test offline/no-fill and a failed presentation. The screen permits returning
   to gameplay and retrying later. No completion or progression depends on ads.
8. A failed save shows a save-only retry. It must reuse the earned claim and
   must not ask the player to watch another ad. Automated SQLite tests inject
   this failure and prove both the coin update and receipt roll back together.
9. Finish a level on the board. The victory screen shows the `+20` reward with a
   gold `▶ ×2` pill beside it; no ad opens by itself and "შემდეგი დონე" stays
   the primary button. Press the pill and complete the demo ad: the reward reads
   `+40`, the pill becomes `✓ ×2`, and the balance rises by exactly 20 more.
   Closing the ad early adds nothing. Restart, reopen that finished level from
   the path and continue to its victory screen: no `×2` offer appears. Press the
   pill while the ad is still loading, then tap "შემდეგი დონე": no ad may appear
   later on the next board.

10. On gameplay, confirm the 320×50 banner says **Test mode** below the wheel.
    Check a 375×667 iPhone SE and a larger iPhone: both hints and the whole wheel
    must remain reachable, with a divider and gap above the banner. Buy each hint
    and enter a word with the banner visible. Navigate away and background the
    app; the banner must unmount. Loading/failure must not move the controls.
    Coach marks and a showing hint rewarded ad suppress the banner while retaining
    its footer space. Expo Go/web show a quiet fallback, not a native-module crash.

Banner verification on 2026-10-20: Google test banners rendered on the iPhone 17
and 375×667 iPhone SE simulators. Both hint purchases worked on both sizes
(200 → 180 → 130 coins); tap-word entry worked on the iPhone 17 and wheel dragging
worked on the SE. Leaving gameplay removed the banner. Screenshots are in
`artifacts/banner-test-2026-10-20/`. Typecheck, lint, formatting, all 327 tests
across 42 suites, and an iOS Metro export passed. This was simulator testing,
not a physical-device test or TestFlight upload.

The demo-only adapter requests non-personalized ads, sets the maximum content
rating to G, and does not ask for tracking permission or collect targeting data.
It is not a production consent implementation. Before live ads, create an
[AdMob account](https://admob.google.com/), register each platform, configure
rewarded units, implement required consent/privacy choices and disclosures, and
review age/audience settings. Replace the sample app IDs and test units only as
part of that rollout. Do not publish this demo configuration as live monetization.

The older smoke flows below target historical prototype boards and Expo Go;
they are not the acceptance test for native AdMob behavior.

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
before store distribution. The current build includes demo rewarded ads; live
monetization and payments remain unconfigured.

## Recorded smoke-flow sequence

With a fresh, isolated GeoWords save on the tested iPhone 17 Pro:
`startup.yaml` → `drag.yaml` → `answer-feedback.yaml` → `family-partial.yaml` →
`restart.yaml` → `chapter-gesture.yaml` → `finish-pack.yaml`.

For the tested Pixel 10 Pro emulator:
`startup.yaml` → `android-drag.yaml` → `android-duplicate.yaml` →
`android-finish.yaml` (which runs `android-restart.yaml`).

The flows address controls by `testID` (`home-continue`, `input-mode`,
`tap-tile-<tileId>`, `tap-submit`, `hint-cell`, `victory-next`, …) and read results
from accessible labels such as `200 მონეტა`, `1/2 სიტყვა · ბონუსი 0` and the word
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
