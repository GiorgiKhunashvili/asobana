# Galaxy A07 banner rendering isolation — 2026-10-23

## Scope

This is a rendering-only follow-up to the withdrawn
[banner lifecycle experiment](ANDROID_BANNER_PERFORMANCE.md). The owner requires
preserving ad requests, SDK refresh and ad visibility duration.

The only runtime change wraps the private `Banner` component in React `memo`.
The root shared banner still updates its outer view's opacity and pointer events
immediately. Parent renders with identical ad props no longer descend into the
SDK component. Its own state, native events and SDK refresh still operate;
[React documents this distinction](https://react.dev/reference/react/memo).
No custom comparison, native patch or ad cache was added.

The 800 ms first-mount timer, 30-second navigation keep-alive, immediate native
unmount in the background and immediate remount on a short foreground return
are unchanged. The parent lifecycle and visibility code is byte-identical to
`03edc96`. Consent, units, request options, G rating, refresh configuration,
placeholder handling, footer geometry and rewarded behavior are unchanged.
No SDK `load`, pause or resume calls were added. SDK refresh remains independent
of this React optimization; Google's [banner guide](https://developers.google.com/admob/android/banner)
states that configured automatic refresh occurs only while the banner is visible.

The regression test counts SDK-component renders across an unrelated parent
render, hiding and showing the footer. All three cause no additional SDK renders
in the candidate, while opacity changes immediately and load/failure callbacks
still update the placeholder. Without memoization the test fails at the first
parent update (three renders instead of two). Separate lifecycle tests retain
fresh mounts/initialization on foreground return and recreation after expiry.
These tests verify rendering and lifecycle behavior, not revenue.

## Physical-device comparison

Samsung Galaxy A07 (SM-A075F), Android 16, USB serial `R8YL606WYEA`, adaptive
60/90 Hz, woken and unlocked before captures. Rebuilt baseline source `03edc96`
and the memo-only candidate as ordinary non-debuggable, non-profileable ARM64
release APKs using Java 17 and `ASOBANA_LIVE_ADS=0`. Both use only
`ge.spilogames.asobana.perf`; no production-app operation or data reset.
Manifest, packaged demo-ad config and native architecture were checked.
No debug/probe timing enters the results.

The save had advanced since the previous experiment: level 5, 86 coins, bonus
2/10, with კუჭი and კაუჭი solved. Comparison runs use navigation only. Level 4's
already-completed victory screen does not offer a new completion reward.

Each fixed sequence force-stops only the perf package, launches the journey,
waits eight seconds, deep-links to level 5, then tests Home/return after five
seconds, the in-app Back button to the journey, a short return, and Next from
reopened level 4 victory. The short journey absence includes the six-second
hide capture plus one second and capture overhead, staying below 30 seconds.
The expiry case explicitly opens and verifies the journey, waits 35 seconds,
then taps level 5. One preliminary expiry attempt used Back into another
stacked gameplay screen and is excluded, as is the initial exploratory sequence.

Captures use the existing perf tools' atrace categories and 32 MiB buffer, with
a six-second post-action window. `parse-trace.py` and `parse-rt.py` support
attribution; the summary also matches exact WebView draw slices by process ID
when Android omits the RenderThread name. Frame p95 is the reset `gfxinfo`
histogram, not a main-thread callback duration or the rolling 120-frame sample.
SDK request counts use the demo SDK's `Use RequestConfiguration.Builder` log
lines, not paid-impression telemetry. All device actions target the explicit
perf package and USB serial.

## Results

Order: baseline 1 → memo 1 → reinstalled baseline 2 → reinstalled memo 2.
Both builds were unchanged between installations. The expiry case has one valid
sample per build, obtained after memo 1 and baseline 2 respectively.

| Path                    | Build/run  | Completed-frame p95 (ms) | Main callback max (ms) | WebView draw max (ms) | SDK requests | gfxinfo frame count |
| ----------------------- | ---------- | -----------------------: | ---------------------: | --------------------: | -----------: | ------------------: |
| First creation          | Baseline 1 |                       40 |                  49.04 |                 27.91 |            1 |                 912 |
| First creation          | Memo 1     |                       38 |                  55.01 |                 30.28 |            1 |                 924 |
| First creation          | Baseline 2 |                       36 |                  28.54 |                 27.51 |            1 |                 942 |
| First creation          | Memo 2     |                       34 |                  30.73 |                 26.08 |            1 |                 956 |
| Background return (5 s) | Baseline 1 |                       48 |                  36.25 |                 11.14 |            1 |                  19 |
| Background return (5 s) | Memo 1     |                       65 |                  43.43 |                 20.55 |            1 |                  17 |
| Background return (5 s) | Baseline 2 |                       61 |                  37.18 |                 20.77 |            1 |                  17 |
| Background return (5 s) | Memo 2     |                       53 |                  38.60 |                 17.84 |            1 |                  19 |
| Hide on journey         | Baseline 1 |                       36 |                  32.06 |                  2.29 |            0 |                1302 |
| Hide on journey         | Memo 1     |                       38 |                  30.58 |                  2.54 |            0 |                1298 |
| Hide on journey         | Baseline 2 |                       36 |                  28.45 |                  0.97 |            0 |                1258 |
| Hide on journey         | Memo 2     |                       36 |                  32.42 |                  0.00 |            0 |                1310 |
| Journey return (<30 s)  | Baseline 1 |                       42 |                  28.10 |                 11.45 |            0 |                 236 |
| Journey return (<30 s)  | Memo 1     |                       42 |                  27.88 |                 11.44 |            0 |                 214 |
| Journey return (<30 s)  | Baseline 2 |                       32 |                  39.73 |                 10.56 |            0 |                 246 |
| Journey return (<30 s)  | Memo 2     |                       34 |                  29.92 |                 12.69 |            0 |                 238 |
| Victory → Next          | Baseline 1 |                       40 |                  34.46 |                 20.44 |            0 |                  88 |
| Victory → Next          | Memo 1     |                       57 |                  37.88 |                 10.59 |            0 |                  80 |
| Victory → Next          | Baseline 2 |                       65 |                  44.91 |                 10.31 |            0 |                  76 |
| Victory → Next          | Memo 2     |                       69 |                  40.13 |                 11.18 |            0 |                  80 |
| Journey return (>35 s)  | Baseline   |                       46 |                  31.08 |                 14.64 |            1 |                 236 |
| Journey return (>35 s)  | Memo       |                       44 |                  33.18 |                 11.84 |            1 |                 254 |

The matched runs preserve **five observed SDK requests per build**: two first
creations, two short background returns, and one post-expiry creation. In-app
hiding, short journey returns and Next produce zero additional requests in both.
This confirms the sampled request opportunities; it is not a paid-impression or
revenue measurement, nor an exhaustive test of every SDK refresh circumstance.

**No consistent completed-frame or main-thread improvement was established.**
Short-return p95 was 48/61 ms at baseline versus 65/53 ms with memoization;
Next was 40/65 versus 57/69 ms. Those candidate tails are not an improvement.
Main callback maxima overlap and also move independently from frame p95.
The supported benefit is eliminating redundant React subtree work, verified by
the regression test; no FPS, startup-speed or WebView-speedup claim is made.

The exploratory baseline reproduced a 26.79 ms `WebViewFunctor::drawGl` inside
a roughly 37 ms RenderThread draw. Its separate 31 ms main-thread peak included
board drawing or waiting for rendering, so it cannot all be assigned to ads.
First-creation WebView peaks in the matched runs remain 26–30 ms. This tiny React
change does not fix that SDK/GPU bottleneck.

Limitations: two samples per main path, one expiry sample, adaptive display rate,
uncontrolled thermal state, GC and different demo creatives. Short-return
histograms have only 17–19 reported frames. Frame counts are `gfxinfo`'s reported
counts, not display FPS. Initial exploratory and invalid-navigation samples are
excluded rather than combined with the fixed sequence. No iOS device benchmark,
live impression telemetry or revenue comparison was performed. Ad lifetime is
unchanged, so this introduces no background WebView retention or new reuse policy.

## Verification and cleanup

`npm run check` passed: **380 tests in 51 suites**, typecheck, lint, all 500 levels
solved and formatting. The rendering regression fails without the memo boundary;
all six banner cases pass with it. Source comparison verified the shared banner's
lifecycle/visibility code is identical to `03edc96`. The prior Reanimated guard,
wheel cache, icon assets and rewarded preload changes remain untouched.

Screenshots confirm the same footer geometry and visible Google Test Ads. Final
state remains level 5, 86 coins, bonus 2/10 and the same two solved words. No paid
hint, reward or new solved word was applied. Captured logs show no fatal exception
or missing-view error. The memo-only normal-release demo APK is installed, replacing
the withdrawn reuse experiment. Production saves and tester IPA/AAB are untouched.
Build hashes are recorded in [TESTFLIGHT.md](TESTFLIGHT.md). After reviewing the
results, the owner authorized committing the rendering change, docs and tests
directly to master and pushing, with no new builds. No EAS/store build or upload.

Cleanup completed: stopped the Gradle daemon, removed generated `mobile/android`
and the 26 dependency Android build/C++ directories (`mobile/ios` was absent),
and deleted the task APKs, traces, screenshots, logs and harness after summarizing.
Existing perf utilities and current tester IPA/AAB are preserved. Shut down all
simulators, quit Simulator, and confirmed ADB lists only the physical A07 with
no emulator processes. Final repository size: **3.4 GB**.
