# Galaxy A07 board-entry drawing — 2026-10-22

## Finding and change

A significant part of the first board draw was rasterizing the small SVG control
and coin icons on the Android main thread. A sampled Java-method probe pointed to
`SvgView.onDraw` / `drawOutput` / `drawChildren`; an icon-disabled control then
reduced first-draw recording from 36–38 ms to 19–20 ms with the crossword, wheel,
background and ads still present. That control was removed.

The final change pre-renders eight common gameplay icons and the 12 pt / 20 pt
coins into transparent PNGs at 1×, 2×, 3× and 4× density. Android uses native
images for those controls, with no image fade; monochrome icons retain their
requested tint, including alpha. Images reuse the existing vector paths, palette
and coin geometry. The 12 pt coin has its own assets to preserve the original
minimum one-point stroke. Icons over 32 pt, custom strokes, other icons and other
coin sizes retain SVG. iOS retains SVG throughout. Touch targets, accessibility,
wheel/board animation and game behavior are unchanged.

The vector paths and coin geometry are shared with the generator. Palette values
moved to a pure module and remain re-exported from the same theme API. This lets
the generator use the actual colors without loading the mobile content catalog.
The 40 PNGs total **40,169 bytes** before APK compression. Their largest-density
pixel buffers together are about 0.53 MiB, excluding image-cache overhead; a device
normally selects one appropriate density. No full-screen texture was added.

Regenerate with `node --import tsx scripts/build-gameplay-icons.ts`, making `sharp`
available on the Node module path, as for `build-branding.cjs`. This run used
sharp 0.35.5. The generated manifest fingerprints the source files and PNG bytes;
tests reject stale or missing assets. A second generation was byte-identical for
all 40 PNGs, the manifest and the TypeScript asset registry.

## Measurement method

Physical Samsung Galaxy A07 (SM-A075F), Android 16, 720 × 1600, 90 Hz, USB.
Rebuilt `master` at `54101da` after committing/pushing the rewarded-preload change.
All timed APKs used ordinary **non-debuggable release** settings, ARM64, Java 17,
`ASOBANA_LIVE_ADS=0`, and the separate package `ge.spilogames.asobana.perf`.
No real-app data was accessed, changed or cleared. No store build/upload.

A temporary probe APK added only `<profileable android:shell="true"/>` to the
generated native manifest. Android `am profile start --sampling 1000` captured
Java stacks. The method-trace decoder followed the
[Android ART trace format](https://android.googlesource.com/platform/art/+/002aca7141e7baf488b02f330b307f059c47a84d/tools/dmtracedump/tracedump.cc).
Sampling perturbs timing, so **none of the probe's durations enter the results**.
Shell profiling was removed before the control/candidate measurements.

Each run force-stopped the perf app, woke/unlocked the phone, opened the journey,
and waited eight seconds. The entry path deep-linked to untouched level 3 with
200 coins and no hint-ad preload. The quick-next path opened completed level 2's
victory screen and tapped Next shortly afterward, during its entrance. This
reopened victory has no fresh ×2 offer; it isolates board entry. No save fixture
or native debugging was needed. Gameplay verification that changed the perf save
was performed only after the timing comparisons.

Traces used the categories and 32 MiB buffer from
`artifacts/perf-tools/device-tap.sh`, with a four-second post-action window.
Inspected using `parse-trace.py`, `parse-rt.py` and summaries over all main-thread
`Choreographer#doFrame` callbacks. The first-draw metric is the main thread's
`Record View#draw()` slice for the newly opened board. Whole-run completed-frame
p95 comes from reset `gfxinfo` histograms, not its rolling 120-frame sample.
Screenshots confirmed the expected unlocked screens and artwork.

Baseline → icon-disabled control → candidate → reinstalled baseline → reinstalled
candidate. Four baseline and four candidate entry samples, two each for quick
Next, plus a final confirmation. Reinstalling the baseline restored its higher
first-draw cost, supporting the change rather than a simple warm-up effect.
Network, buffer allocation, GC and thermal variability still limit small samples.

**Baseline correction:** the earlier report's 127–177 ms board-entry observations
used temporary native debugging for save fixtures. This ordinary-release baseline
has 46–55 ms whole-trace maximum callbacks for the entry path. Do not compare those
earlier debug-enabled numbers directly with this optimization's results.

## Results

| Run                                       | First board draw recording (ms) | Whole-trace main callback max (ms) | Completed-frame p95 (ms) |
| ----------------------------------------- | ------------------------------: | ---------------------------------: | -----------------------: |
| Baseline entry 1                          |                           36.33 |                              46.39 |                       28 |
| Baseline entry 2                          |                           37.96 |                              55.03 |                       34 |
| Baseline reinstalled, entry 1             |                           37.67 |                              48.04 |                       36 |
| Baseline reinstalled, entry 2             |                           36.69 |                              46.58 |                       32 |
| Candidate entry 1                         |                           20.80 |                              34.50 |                       34 |
| Candidate entry 2                         |                           41.94 |                              48.56 |                       31 |
| Candidate entry 3                         |                           19.36 |                              28.63 |                       30 |
| Candidate entry 4                         |                           18.17 |                              58.00 |                       32 |
| Baseline quick Next                       |                           29.13 |                              50.73 |                       53 |
| Baseline reinstalled, quick Next          |                           32.00 |                              48.11 |                       53 |
| Candidate quick Next 1                    |                           23.46 |                              57.98 |                       48 |
| Candidate quick Next 2                    |                           20.10 |                              51.42 |                       57 |
| Candidate reinstalled, confirmation entry |                           19.44 |                              29.95 |                       32 |

The four-run entry median fell from **37.18 ms to 20.08 ms**, about **46% less
first-draw recording work**. Quick Next's two-run median fell from 30.57 to
21.78 ms, about 29%. Candidate entry 2 remains in the table: its slower draw
included buffer allocation and a runtime checkpoint. The final confirmation is
reported separately from the four-run median.

This is not a 46% FPS gain or a guarantee of smooth navigation. Whole-trace worst
callbacks and completed-frame p95 overlap. Candidate entry 4 had an earlier
58 ms animation callback despite only 18 ms of first-draw recording. Later banner
work also remained visible: approximately 26–40 ms WebView draws and occasional
50–58 ms main callbacks. The earlier shader-compilation spike did not reproduce
at the same magnitude in these runs; this change does not claim to fix it.

## Verification

- Final phone screenshots preserve the icon artwork, colors, transparency and
  coin sizes. Verified switching to tap mode, selecting/submitting **დაფა**, back
  to swipe mode, submitting **რაფა**, buying one letter hint and shuffling.
  The perf app correctly shows two solved words and 180 coins after the 20-coin
  hint. Only the isolated app's progress advanced. The real app is untouched.
- The six regression tests cover the Android image path, tint/size/accessibility,
  vector fallbacks and iOS, the two coin sizes, all density files and generated
  source/asset fingerprints. The two image-path cases fail with the original
  SVG components; all six pass with the candidate.
- `npm run check` passed: **378 tests in 51 suites**, typecheck, lint, all 500
  levels solved and formatting. After removing an unused import, lint and
  typecheck passed again without warnings; the six icon tests passed again.
- Final source was rebuilt and installed as an ordinary release perf APK.
  No production version change, EAS build or upload. No iOS-device
  performance claim. Temporary profiling configuration is absent from final builds.

The owner subsequently authorized committing this optimization directly to master
and pushing it. Cleanup and final log checks are recorded below.

## Final checks and cleanup

The final log contained zero missing-native-view update errors and zero fatal
exceptions. The post-change shuffle worked; its rolling 120-frame sample had a
53 ms maximum completed frame and no frames over 100 ms. This is a functional
check, not a new shuffle benchmark. Extracted vector definitions and every palette
value were also compared with `54101da` and matched exactly.

Removed the on-device method trace and all task APKs, traces, logs and screenshots
after summarizing them. Removed generated `mobile/android`, `mobile/ios`, and
Android build/C++ folders under dependencies. Shut down simulators, quit Simulator
and checked the emulator inventory; installed apps and saves were preserved.
Final repository size: **3.5 GB**. Existing tester IPA/AAB files and the original
performance utilities remain. The optimized perf app is installed on the phone.
