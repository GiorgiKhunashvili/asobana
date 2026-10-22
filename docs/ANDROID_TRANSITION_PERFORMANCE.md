# Galaxy A07 transition stall — 2026-10-22

## Finding and fix

The reproduced long stall is an Android Reanimated 4.5.1 / React Native 0.86
mounting bug. During navigation, `ScreenFragment.dispatchTransitionProgressEvent`
re-enters Reanimated while Android is drawing the screen. Buffered animated
props still contain tags for views that have been removed. The RN 0.86 reflection
path calls `MountingManager.updatePropsSynchronously` without checking whether
the tag exists. Each missing tag throws `RetryableMountingLayerException`, wrapped
in `InvocationTargetException`; Reanimated prints the entire stack on the UI
thread, repeatedly during the transition.

The observed errors and code path match
[upstream issue #10280](https://github.com/software-mansion/react-native-reanimated/issues/10280)
and the merged [fix #10435](https://github.com/software-mansion/react-native-reanimated/pull/10435).
The fix is backported to the Expo-pinned 4.5.1 dependency with `patch-package`:
check `getViewExists` before the reflective update, skip missing tags, preserve
processing for subsequent tags, and log unexpected exceptions concisely. Props
remain in the registry for the normal commit hook. No ads, animations, navigation,
colors, economy, content, or save behavior change. iOS is unaffected.

## Physical-device measurements

Samsung Galaxy A07 SM-A075F, Android 16, ARM64, 720 × 1600, USB ADB,
90 Hz display. Baseline source: `master` at `04a9ba3`. Only the separate package
`ge.spilogames.asobana.perf` was installed or operated on. The real app's data was
never cleared, read, or modified. These are local Gradle release-JS test APKs,
with `ASOBANA_LIVE_ADS=0`, not EAS/store builds or emulator measurements.

The initial ordinary release APK reproduced a **365.87 ms** main-thread frame
on level 2's automatic victory transition, with **477** failed native updates.
Its view-recording portion alone took **361.36 ms**. A final standard
non-debuggable release perf APK, with normal hint preloading restored and only
the native patch, repeated the automatic transition with a **30.77 ms** worst
main-thread frame, **23.25 ms** view recording, and **zero** missing-view errors.
This release-mode pair is separate from the repeatable manual measurements below.
The subsequent victory-to-next-level tap had a 48 ms worst main-thread frame
and 82 ms worst completed frame, with zero missing-view errors.

For repeatable manual Continue measurements, both baseline and patched APKs
used the same temporary `debuggable true` native setting with release JS. This
allowed `run-as` access solely to the perf app's SQLite file. Each run restored
level 2 with four solved words, 220 coins, and one word (`ზონა`) left; completed
the word; then used `device-tap.sh 353 944` to press Continue. No debugger was
attached. The altered native build directory is removed after testing.

| Run        | Worst main-thread frame | Worst view recording | Main-thread frames >100 ms | Failed native updates |
| ---------- | ----------------------: | -------------------: | -------------------------: | --------------------: |
| Baseline 1 |             1,063.90 ms |          1,021.54 ms |                          2 |                   807 |
| Baseline 2 |               866.75 ms |            837.42 ms |                          2 |                   638 |
| Patched 1  |                80.03 ms |             51.88 ms |                          0 |                     0 |
| Patched 2  |                79.37 ms |             53.39 ms |                          0 |                     0 |
| Patched 3  |                78.93 ms |             44.48 ms |                          0 |                     0 |

The mean of the per-run worst main-thread frames fell from 965.33 ms to
79.44 ms (**91.8%**). This is a small repeated reproduction, not a population
benchmark or a guarantee of 90 fps. Brief frame drops remain.

Timings above come from complete `atrace` slices parsed by `parse-trace.py` and
`parse-rt.py`, not from the last 120 frames returned by `dumpsys gfxinfo`. The
three-second tool wait let that rolling buffer overwrite the long stall:
Baseline 2's frame-stat snapshot misleadingly reported a 26 ms maximum while
the retained trace showed 867 ms. Keep the trace when reproducing this issue.

## Suspect assessment

- **Rewarded-ad preloading:** not necessary to remove the reproduced long
  victory stall. Both rewarded hooks and their preload timings remained
  unchanged in the three passing patched runs. Ads still have measurable costs:
  the initial level-entry trace contained a 50.8 ms banner WebView draw and a
  114 ms completed frame. A separate zero-coin entry run with the fix retained
  a 172 ms main-thread frame / 201 ms completed frame, with zero stale-tag errors.
  A temporary control disabled only automatic hint preloading on the same fixture:
  it still had a 135 ms main-thread frame / 160 ms completed frame (27 ms of banner
  WebView drawing). This single pair does not isolate all timing variability or
  establish a precise hint-ad penalty; the smaller hitch exists without hint
  preloading. The control was reverted before the final build.
- **VictoryLogo and entering animations:** the full Skia emblem and all entering
  animations remained enabled in every patched victory run. Their normal work
  contributes to the remaining frame time, but the repeated missing-view
  exception/logging path explains the large excess. Removing the logo was not
  required.
- **Root Stack background:** its purple `contentStyle` is a fallback visible
  before a screen draws; changing that color would not remove the measured
  main-thread block. No background/color change was made. Exact blank-screen
  duration was not measured separately from the trace's blocked frame.

## Regression and validation

`npm run test:native` compiles the installed dependency's actual Kotlin
reflection/update methods into a JVM harness with fake mounting/log boundaries.
The original code failed with 200 stale-tag calls. The backport passes missing
and mounted tags in one batch, unmount/remount, failure isolation, concise
logging, optional-method fallback, and the older RN branch. This test belongs
at the native boundary; a mocked React component test cannot reproduce the
reflection/logging failure. See `patches/README.md` for the toolchain requirement.

The patch was also reapplied successfully to a restored pristine `NativeProxy.kt`
through the root `postinstall`, then the native test passed again.

`npm run check` passed: TypeScript, ESLint, 358 tests in 49 suites, all 500 levels
validated and solved, and Prettier. No commit, push, store build, or upload was
performed. Raw profiling traces and temporary APKs are removed after their
results are recorded here, per the repository cleanup policy.

## Cleanup

Removed `mobile/android`, any `mobile/ios` output, and generated Android
`build` / `.cxx` directories under `node_modules`. Shut down all iOS simulators
and quit Simulator; ADB listed no Android emulator. Kept the newest existing
IPA/AAB and the reusable `artifacts/perf-tools` scripts. Temporary test APKs,
perf-only database copies, traces and logs were deleted after summarizing them.
Final repository size: **3.5 GB** (`du -sh .`).
