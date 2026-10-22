# Galaxy A07 banner lifecycle — 2026-10-22

## Decision — 2026-10-23

**Withdrawn; not shipping.** The owner made protecting ad revenue the priority.
The experiment reduced ad requests and added 800 ms without a visible banner on
foreground return. Demo creatives cannot establish the effect on paid impressions
or revenue. The modest performance results do not justify that uncertainty.
`GameBannerAd.tsx` was restored byte-for-byte to `03edc96`, preserving existing
request/presentation behavior and all earlier performance fixes. Regression
coverage checks immediate fresh mounting on repeated foreground returns.

A subsequent [rendering-only follow-up](ANDROID_BANNER_RENDERING_PERFORMANCE.md)
adds memoization while preserving that baseline lifecycle. It replaces the
withdrawn demo installation and contains no reuse or return-delay experiment.

The measurements below describe the withdrawn candidates, not current source.
“Final” in the tables means the last experimental variant. At withdrawal time it remained installed
only in the isolated demo-ad perf package; no production/tester build was changed.
There was no new APK build or perf/production app operation for this withdrawal.
After restoration, `npm run check` passed: **379 tests in 51 suites**, typecheck,
lint, all 500 levels solved and formatting. Generated native/dependency build
folders remain absent, all simulators/emulators are shut down, and the repository
measures **3.4 GB**. Current tester IPA/AAB artifacts are preserved.

## Experimental change (withdrawn)

The withdrawn candidate applies the existing 30-second banner keep-alive to **absence of
foreground demand**, including short background trips. A retained banner is
hidden with `display: none`, excluded from accessibility and cannot intercept
input. Returning before expiry reuses it; a longer absence releases it. A
wall-clock check on foreground return expires it even when Android suspended
JavaScript timers. If the process is frozen, destruction may wait until JS runs
again; this is not a native background timer or a strict background-memory cap.

New creation still waits 800 ms. After an Android background return, even a
retained banner stays hidden for the same 800 ms settling period. This moves its
redraw out of the Activity resume transition without issuing a new ad request.
Ordinary in-app navigation can still show the retained banner immediately. Backgrounding cancels that startup timer, and
returning starts a fresh grace period if a banner must be created. Returning to a
screen that does not request a banner cannot start a new one. Consent initialization
resolving after demand disappears cannot mount a native ad behind the hidden
footer. An existing SDK request is not cancelled by hiding its view.

iOS still unmounts its native banner on backgrounding; the new foreground-demand
and timeout safeguards also apply there. No iOS device-performance claim is made.
The root still hosts exactly one shared banner. Consent initialization, G-rated
configuration, non-personalized requests, ad units, the 76 pt footer, wheel and
hint touch targets, saves and rewarded-ad controllers are unchanged. The prior
Reanimated guard, cached wheel plate, deferred rewarded preload and Android icon
assets remain intact.

The tradeoff is retaining one banner during a short background absence and
showing an empty reserved footer for 800 ms on return, in exchange for avoiding
its destruction, reconstruction and ad request. SDK automatic refresh
is still allowed. Google's [banner guide](https://developers.google.com/admob/android/banner)
states that automatic refresh occurs only while a banner is visible. This test
uses Google demo creatives, not mediation or live inventory.

## Attribution and measurement

Physical Samsung Galaxy A07, SM-A075F, serial `R8YL606WYEA`, Android 16,
720 × 1600, USB. The normal adaptive display switched between 60 and 90 Hz;
its settings were not changed. The phone was woken and unlocked. Clean `master`
`03edc96` was rebuilt as the baseline. Every measured APK was ordinary,
non-debuggable, non-profileable release, ARM64, Java 17, `ASOBANA_LIVE_ADS=0`,
package `ge.spilogames.asobana.perf`. Installs used `adb install -r`; no data clear,
fixture restoration or production-app operation was used.

The starting perf save had advanced since the previous report: level 4 was open
with 166 coins and bonus progress 2/10. Level 3 was fully solved. Screenshots
verified those facts; the prior report's level-3 partial board and 180 coins were
not the current state. These tests navigated without buying hints, solving words
or changing the balance. Private SQLite paid-hint records were not extracted
from the non-debuggable app.

An exploratory release capture reproduced a **26.26 ms RenderThread
`WebViewFunctor::drawGl`** slice during first banner creation. A short background
return issued a new SDK request and reached a **62.55 ms main-thread callback**.
That callback contained about 50 ms of traversal, including 23.5 ms of window
relayout; it was not a 62.55 ms banner draw. A later first-entry baseline peak
of 47.54 ms included 27 ms of animation and 18.6 ms of board draw recording.
Consequently the entire callback cannot be attributed to banner creation.

A temporary logging-only release probe distinguished React mount/unmount events
from native reloads. It showed that `am start` deep links briefly send AppState
through background/active. Baseline destroys the banner, then immediately
recreates it even when the destination has no banner request. A real in-app Next
tap did not do this. **No probe timings enter the results.** Probe logging was
removed before building the candidate.

Traces use the existing `artifacts/perf-tools/device-tap.sh` categories and
32 MiB atrace buffer, with a six-second post-action window (12 seconds for
background activity). A task harness hardcodes the perf package and USB serial;
`parse-trace.py` and `parse-rt.py` inspect nested slices. The summary also matches
WebView draw slices by process ID: Android sometimes prints RenderThread's name
as `<...>`, which the original name-only RenderThread lookup misses.

Each cold sequence force-stops only the perf package, launches the journey and
waits eight seconds. First entry taps level 4. Short background returns use Home,
five seconds away, then the perf Activity. Next taps the actual button on reopened
level 3's victory screen; a deep link sets up that screen two seconds beforehand.
This is a navigation test without a fresh earned-reward offer or rewarded preload.
Journey returns explicitly set up and verify the journey, wait 10 or 35 seconds,
then tap level 4. Two preliminary Back-button return samples were discarded
because Back could reveal another gameplay screen; their timings are not used.

Completed-frame p95 comes from reset whole-run `gfxinfo` histograms, not the
rolling 120-frame list. Main-callback and WebView draw durations come from atrace
and are reported separately. Callback counts can exceed drawn-frame counts because
callbacks need not draw. No FPS percentage is inferred. SDK requests are counted
from `Use RequestConfiguration.Builder` log lines in these demo runs, with WebView
identities checked against the view logs. Those logs are evidence for these runs,
not a general-purpose production impression counter.

## Results

An initial immediate-reuse candidate eliminated requests but increased the four
short-return completed-frame p95 samples from **42–57 ms** to **65–85 ms**.
It was rejected. The final candidate retains the ad while adding the foreground
settling period described above; its measurements are separate below.

Baseline A → immediate-reuse experiment → reinstalled baseline B → repeated
immediate-reuse experiment → final A → reinstalled final B. All entries below
are normal release. The final source was unchanged between A and B.

| Run                                     | Main callback max (ms) | RenderThread WebView draw max (ms) | Completed-frame p95 (ms) | Drawn frames | New SDK requests |
| --------------------------------------- | ---------------------: | ---------------------------------: | -----------------------: | -----------: | ---------------: |
| Baseline A: first                       |                  47.54 |                              22.94 |                       32 |          256 |                1 |
| Baseline B: first                       |                  30.71 |                              25.16 |                       29 |          260 |                1 |
| Final A: first                          |                  57.62 |                              27.16 |                       29 |          260 |                1 |
| Final B: first                          |                  28.19 |                              20.97 |                       36 |          248 |                1 |
| Baseline A: short return 1              |                  33.58 |                              11.73 |                       42 |           65 |                1 |
| Baseline A: short return 2              |                  37.04 |                              12.58 |                       48 |           19 |                1 |
| Baseline B: short return 1              |                  37.54 |                              22.74 |                       48 |           65 |                1 |
| Baseline B: short return 2              |                  39.30 |                              12.67 |                       57 |           19 |                1 |
| Final A: short return 1                 |                  39.91 |                              11.92 |                       40 |           59 |                0 |
| Final A: short return 2                 |                  40.15 |                              12.27 |                       48 |           11 |                0 |
| Final B: short return 1                 |                  35.53 |                              10.63 |                       40 |           59 |                0 |
| Final B: short return 2                 |                  43.75 |                              12.78 |                       57 |           11 |                0 |
| Baseline: Next 1                        |                  29.44 |                              12.17 |                       42 |          112 |                0 |
| Baseline: Next 2                        |                  28.39 |                              18.01 |                       48 |          110 |                0 |
| Final: Next 1                           |                  26.72 |                              13.66 |                       53 |          116 |                0 |
| Final: Next 2                           |                  23.94 |                              12.88 |                       53 |          112 |                0 |
| Baseline: journey return after 10 s     |                  47.43 |                              10.63 |                       36 |          230 |                0 |
| Final: journey return after 10 s        |                  36.21 |                              21.30 |                       44 |          234 |                1 |
| Baseline: journey return after 35 s     |                  22.09 |                              22.04 |                       27 |          262 |                1 |
| Final: journey return after 35 s        |                  22.63 |                              18.12 |                       38 |          242 |                1 |
| Baseline: background return after >35 s |                  37.50 |                              15.04 |                       57 |           19 |                1 |
| Final: background return after >35 s    |                  39.31 |                              18.96 |                       61 |           17 |                1 |

Across four matched short background returns, baseline made **four new ad
requests**, versus **zero** in the final candidate. Each final sequence kept the
same logged native WebView identity across both returns. Completed-frame p95
was **42–57 ms baseline versus 40–57 ms final**. Main callback maxima were
**33.58–39.30 ms versus 35.53–43.75 ms**: they did **not** improve. The final
candidate avoids recreation without the immediate-reuse experiment's larger
frame tails, but these samples do not establish a general latency or FPS gain.

First creation still makes one request and incurs WebView drawing. Its delay is
unchanged and there is no first-creation speedup claim. The two final Next runs
had lower peak main callbacks but **worse completed-frame p95 (53 ms versus
42/48 ms)**. Next already reused the banner at baseline; this is not evidence of
a navigation improvement. Network/creative variation, adaptive refresh, GPU
buffers, GC, thermal state and small samples limit comparisons; some return
histograms contain only 11–19 drawn frames. Thermal state was not controlled.

Both variants recreate after the 35-second journey absence. After a long
background absence, the final banner uses its 800 ms creation grace rather than
baseline's immediate remount. During the final 10-second journey return, logs
first show the existing WebView, then one new request and another WebView around
70 seconds after the initial load. This is consistent with SDK automatic refresh
on becoming visible; it is not counted as a request saved, and the logs alone do
not prove the internal SDK trigger. Reuse does not disable refresh.

## Memory and background activity

For the stable-screen check, each variant cold-started level 4, completed two
short background returns, then stayed on Home. No growing navigation stack was
used. Process PSS snapshots (KiB, not Java heap alone):

| Snapshot                               | Baseline B | Final B |
| -------------------------------------- | ---------: | ------: |
| Foreground before Home                 |     367638 |  360461 |
| After the 12-second background capture |     360888 |  354427 |
| After >35 seconds in background        |     360086 |  353579 |

No extra process-PSS growth was observed in this bounded comparison. This is not
a measured per-banner allocation or a leak-proof endurance test. Both processes
still reported three WebView objects even after the timeout: SDK caches and
objects awaiting GC make that count unsuitable as proof of live-banner ownership.
The timeout tests and the fresh request/identity after a long return verify the
lifetime boundary. More memory may remain resident while JS is frozen.

The two final 12-second background traces recorded **zero WebView draw slices,
zero SDK requests and zero completed app frames**, as did baseline. Main-thread
Choreographer callbacks continued: baseline's stable-screen sample had 311
callbacks totaling 307.09 ms of wall duration, versus 286 totaling 294.57 ms in
final. Peak callback durations were 2.42 and 1.71 ms respectively. These are not
CPU-time or battery measurements, and neither app was fully idle. The no-frame
`gfxinfo` histogram's 4950 ms sentinel is excluded from frame results.

## Verification and cleanup

Before withdrawal, the 13 experimental banner tests covered native mount reuse, hidden input/accessibility, iOS
unmounting, foreground-only startup, cancellation, pending consent, lease expiry,
suspended timers, a shared navigation/background deadline and timer cleanup.
Five failed against the original component; all 13 passed with the candidate.
Those candidate-specific expectations were removed with the implementation.
`npm run check` passed: **387 tests in 51 suites**, typecheck, lint, all 500 levels
solved and formatting.

The final phone check kept level 4, 166 coins and bonus progress 2/10. Shuffle
worked with the same footer geometry and a visible Google Test Ad. The helper
was invoked with `ANDROID_SERIAL=R8YL606WYEA` and explicitly
`PKG=ge.spilogames.asobana.perf`. Its rolling 120-frame smoke sample peaked at
50 ms with no frames above 100 ms; this is not an additional benchmark. Final
perf-process logs contained no fatal exception or missing-native-view error.
No new paid hint or reward was applied. The production app was untouched.

The experimental lifecycle implementation was never committed. The owner later
authorized committing its retained documentation with the rendering-only follow-up
and regression tests directly to master, then pushing. No EAS/store build or
upload was performed. Build variants are recorded in [TESTFLIGHT.md](TESTFLIGHT.md).

Cleanup completed: stopped the Gradle daemons; removed generated `mobile/android`
and `mobile/ios`, 26 dependency Android build/C++ directories, all task APKs,
probe sources, traces, logs and screenshots after summarizing them. Existing
`artifacts/perf-tools` utilities and the current tester IPA/AAB remain. Shut down
all simulators, quit Simulator and confirmed the ADB inventory contained only
the physical phone. No worktree was created. The final candidate was left
installed with its save intact, then replaced by the rendering-only follow-up. Final repository size: **3.5 GB**.
