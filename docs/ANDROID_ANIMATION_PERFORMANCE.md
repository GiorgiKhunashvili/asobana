# Galaxy A07 animation rendering — 2026-10-22

## Change

The letter wheel's static plate, rings and radial-gradient shadow now share one
bounded Android hardware texture. Moving letters and the swipe canvas remain
outside it, so their animation does not invalidate the cached artwork. The plate
is also memoized by diameter to avoid rebuilding its React tree during word input.
The cache uses about **1.27 MiB** on the A07, as reported by `dumpsys gfxinfo`.
It belongs to the native view and is released with it. Padding preserves the
shadow; colors, touch geometry, springs, reduced-motion behavior, victory effects
and ad behavior remain unchanged.

This is a modest reduction in rendering overhead, not another fix for the long
navigation hang. That fix is already in `26c6475`; see
[the transition investigation](ANDROID_TRANSITION_PERFORMANCE.md).

## Measurements

Physical Samsung Galaxy A07 (SM-A075F), Android 16, 720 × 1600, 90 Hz, USB ADB.
Rebuilt `master` at `26c6475` before profiling. All builds used release JS,
normal non-debuggable native release configuration, ARM64, Java 17,
`ASOBANA_LIVE_ADS=0` and the separate package `ge.spilogames.asobana.perf`.
The real app's data was neither accessed nor changed.

Each shuffle run tapped the level-2 hub five times, 1.5 seconds apart, with the
normal demo banner loaded. Captured `atrace` with the categories in
`artifacts/perf-tools/device-tap.sh`; inspected it with `parse-trace.py` and
`parse-rt.py`, plus a summary over every main-thread `Choreographer#doFrame`.
GPU and completed-frame percentiles below come from the reset **whole-run
histograms** in `dumpsys gfxinfo`, not its rolling 120-frame sample.

| Run                     | Completed frame p50 / p95 (ms) | GPU p50 / p95 (ms) | Main-thread callback p95 / max (ms) |
| ----------------------- | ------------------------------ | ------------------ | ----------------------------------- |
| Baseline 1              | 22 / 36                        | 7 / 12             | 19.51 / 28.77                       |
| Baseline 2              | 21 / 34                        | 6 / 12             | 18.51 / 25.50                       |
| Baseline reinstalled, 1 | 20 / 34                        | 6 / 10             | 18.07 / 25.18                       |
| Baseline reinstalled, 2 | 19 / 32                        | 7 / 12             | 15.52 / 32.92                       |
| Final, 2                | 19 / 34                        | 6 / 10             | 19.42 / 27.04                       |
| Final, 3                | 21 / 36                        | 6 / 10             | 19.73 / 28.16                       |

The final build's GPU p95 was **10 ms**, versus **10–12 ms** in the baseline
(median baseline p95: 12 ms). Earlier plate-cache controls measured 5 ms GPU p50
and 8–9 ms p95. The final paired results are more conservative: they support a
small GPU saving, but **do not establish an overall FPS or worst-frame
improvement**. Buffer waits and the banner's WebView rendering still contribute
variable frame times. The final first run is excluded: the pre-run screenshot
showed the display asleep, so it included wakeup and fewer rendered frames.

Controls that were removed:

- Transform-only shuffle: less view-recording work, but no consistent total-frame
  improvement; preserved the original spring/layout implementation.
- No swipe canvas: comparable frame costs, so kept the canvas and its gesture line.
- Cached full-screen background, alone or with the plate: no consistent extra
  benefit sufficient to justify the additional texture memory.

The victory logo stayed enabled throughout. Two baseline reopens of completed
level 1 had worst main-thread callbacks of 28.40 and 21.94 ms. Those runs isolate
the logo/entering effects from fresh rewarded-ad loading; they do not prove that
all completion paths are equally cheap.

## Functional verification

Played all five words of level 2 on the final build: მზა, ზომა, მონა, ზმნა, ზონა.
Verified the board reveals, completion wave, +20 coins, victory logo and ×2 offer.
The final-word-through-victory trace had a 45.46 ms worst main-thread callback,
no callbacks over 100 ms, and no `synchronouslyUpdateUIProps failed` messages.
This includes drawing the final word and its celebration, not just navigation.

The subsequent victory-to-level-3 tap also worked. It had a 66.69 ms worst
main-thread callback and a 118 ms worst completed frame. The trace includes a
44.9 ms GPU shader compilation/cache miss and a later 20.1 ms banner WebView
draw. Those remaining spikes are not fixed by this change. An earlier attempt
while the phone had returned to its lock screen is excluded.

The drawing-cost regression asserts that the cached layer is bounded to the
plate/shadow and excludes the letters and shuffle control. It fails on the
original component and passes on the final component. `npm run check` passed:
358 tests in 49 suites, typecheck, lint, all 500 level solutions and formatting.
The final Android appearance was checked on phone screenshots. No iOS-device
performance claim is made.

No store build, upload or version increment. The final perf APK remains installed
for testing. Intermediate APKs, traces, screenshots and logs are removed after
this summary; generated native projects and dependency build folders are removed
under the repository cleanup rules.
