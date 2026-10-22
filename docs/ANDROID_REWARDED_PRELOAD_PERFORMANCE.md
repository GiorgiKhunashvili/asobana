# Galaxy A07 rewarded-ad preloading — 2026-10-22

## Change

Rewarded ads no longer start preloading immediately on screen focus. The hint
hook waits 600 ms after the native stack transition ends; the victory hook waits
2,200 ms, allowing its 2.1-second logo entrance to finish. An initial route without
transition events uses the same grace period from mount. A transition in progress
blocks the timer; its completion restarts the grace period.

Blur, loss of eligibility, level changes, unmount and backgrounding cancel queued
work. Returning to the foreground starts a new grace period if the preload has
not run. An explicit watch press cancels the queued preload and immediately calls
the existing controller, which loads on demand. It also prevents a delayed extra
load after that watch. Only a press presents an ad, and only the existing SDK
reward/receipt path awards coins. Already-started SDK requests cannot be cancelled
by this timer; consent, banner behavior and reward persistence are unchanged.

The tradeoff is later automatic ad readiness, especially for the victory offer.
An early watch can still wait for the SDK/network, but does not wait for this timer.

## Method

Physical Samsung Galaxy A07, SM-A075F, Android 16, 720 × 1600, 90 Hz, USB.
Baseline rebuilt from `master` at `6538781`. All APKs used the isolated package
`ge.spilogames.asobana.perf`, ARM64, Java 17, release JS and `ASOBANA_LIVE_ADS=0`.
The real package and save were never accessed or changed.

The paired APKs temporarily enabled native debugging solely to restore a
repeatable SQLite fixture with `run-as`. Both variants used the same setting;
the final smoke test used a rebuilt, normal non-debuggable release APK. These
paired absolute times should not be compared directly with earlier ordinary
release measurements.

Each run force-stopped the perf app and restored its original save with only
level 2 marked incomplete and its last answer, ზონა (`word-3`), removed. Victory
runs used 180 coins, opened level 2, waited 10 seconds for startup/banner work,
solved the last word, and tapped Continue. Hint runs used zero coins, waited on
the journey screen for 10 seconds, then opened level 2 through its deep link.
Screenshots verified the unlocked screen, board and resulting victory/×2 offer.

Captured the categories from `artifacts/perf-tools/device-tap.sh` with a 32 MiB
`atrace` buffer. The victory capture included the final-word drag and six seconds
after Continue; hint captures included six seconds after the deep-link command.
Used `parse-trace.py` and `parse-rt.py`, plus summaries of all main-thread
`Choreographer#doFrame` slices. The early window is the first two seconds after
the command/tap; late is seconds two through six. Callback duration is not FPS.
Completed-frame p95 comes from reset **whole-run gfxinfo histograms**, not the
rolling 120-frame sample. Ad-request times use SDK logs aligned through the
trace's realtime clock-sync marker; no extra JS logging was added to either APK.

Ran baseline, candidate, then reinstalled baseline for another run of each path
so a warmed phone could not alone explain a gain. Small samples, network/ad
variation and rendering caches still limit the comparison.

## Matched results

| Path / run                   | Early main max (ms) | Late main max (ms) | Whole-run main p95 (ms) | Completed-frame p95 (ms) |
| ---------------------------- | ------------------: | -----------------: | ----------------------: | -----------------------: |
| Hint baseline 1              |              138.49 |              45.66 |                   19.40 |                       36 |
| Hint baseline 2              |              159.63 |              47.34 |                   19.42 |                       36 |
| Hint baseline reinstalled    |              168.62 |              39.80 |                   18.25 |                       38 |
| Hint candidate 1             |              131.40 |              39.10 |                   17.91 |                       34 |
| Hint candidate 2             |              127.02 |              41.28 |                   18.05 |                       34 |
| Victory baseline 1           |               58.61 |              31.71 |                   17.38 |                       38 |
| Victory baseline 2           |               78.63 |              26.03 |                   18.45 |                       40 |
| Victory baseline 3           |               67.26 |              23.90 |                   18.43 |                       40 |
| Victory baseline reinstalled |               48.80 |              24.44 |                   17.30 |                       38 |
| Victory candidate 1          |               55.47 |              24.54 |                   16.65 |                       38 |
| Victory candidate 2          |               70.27 |              24.48 |                   17.14 |                       38 |
| Victory candidate 3          |               72.68 |              29.57 |                   16.64 |                       38 |

Low-coin entry's median peak main callback fell from 159.63 to 129.21 ms (about
19%). Its completed-frame p95 fell from 36–38 to 34 ms. The remaining 127–131 ms
entry spike means this is a partial improvement, not smooth frame pacing yet.
One candidate run still had an 83.44 ms AdWorker lock wait around banner startup;
the other had 74.48 ms. Moving the rewarded request does not remove banner costs.

Victory's worst callback did **not** consistently improve: baseline 48.80–78.63
versus candidate 55.47–72.68 ms. Whole-run main p95 was slightly lower, and no
victory-only run had a callback over 100 ms, including the later preload window.
The reliable improvement is scheduling and avoiding unused work: the rewarded
SDK request moved from 0.36–0.45 seconds after Continue to 2.85–2.89 seconds.
The earlier multi-second missing-native-view failure did not recur; its fix
remains the separate Reanimated patch in `26c6475`.

## Functional checks and remaining work

- Continued to level 3 about 1.4 seconds after the victory tap: **zero new SDK ad
  requests** in the capture. Screenshot confirmed level 3 and 200 coins. This
  path still had a 177.09 ms main callback drawing the next board; it is a
  separate remaining issue, not concealed by the ad cancellation result.
- Pressed ×2 at about the same early point: the SDK request started at 1.79 s,
  before automatic preloading would run, and the Google **Test Ad** appeared.
  Presenting the full-screen ad itself caused a 455.41 ms main callback and
  421.79 ms WebView draw. This optimization does not remove full-screen SDK
  rendering costs. These functional runs are separate from the table above.
- Fourteen hook regression cases cover both offers: transition delay (including
  long transitions and cancelled back gestures), initial routes, blur, eligibility,
  level changes, unmount, background/foreground and an immediate explicit watch
  without a later duplicate preload. Twelve fail against the original hooks;
  all fourteen pass with the change. Existing controller tests retain reward,
  receipt, timeout and cancelled-presentation coverage.
- `npm run check` passed: 372 tests in 50 suites, typecheck, lint, all 500 levels
  solved and formatting. After making the navigation mocks stable, the affected
  three suites passed again (60 tests).

No store build, upload, version increment or commit. The local perf APK remains
installed. The final ordinary-release phone check and cleanup are recorded below.

## Final ordinary-release check

The final non-debuggable APK repeated the fresh level-2 completion successfully:
41.20 ms maximum main callback, 25.53 ms maximum in the later 2–6 s window,
36 ms whole-run completed-frame p95, and the rewarded request at 2.80 s. This
single smoke run is not included in the matched comparison above.

After remaining on victory, tapped Next with `device-tap.sh`: level 3 appeared
with 200 coins; the full trace's main callback maximum was 42.63 ms, with zero
callbacks above 100 ms. The tool's rolling completed-frame sample peaked at
66 ms. This later, warmed transition does not invalidate the earlier 177 ms
quick-next spike. Final logcat contained zero missing-view update errors and zero
fatal exceptions. No iOS-device performance claim is made.

Generated native projects, dependency Android build/C++ output, temporary APKs,
fixtures, traces, logs and screenshots were removed after this report. Simulator
shutdown was requested and emulator inventory checked; device apps/saves were
preserved. Final repository size: 3.5 GB.
