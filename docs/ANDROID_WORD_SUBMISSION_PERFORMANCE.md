# Android correct-word latency — 2026-10-23

## Scope and finding

The owner reports a 2–3 second delay after **every correct word on an older
Android phone**. Its model, app version and campaign progress are not yet known.
This investigation uses the connected Samsung Galaxy A07 (SM-A075F), Android 16,
USB serial `R8YL606WYEA`. It identifies unnecessary work in the submission path;
it does **not** reproduce or establish the complete cause of that older phone's
2–3 second delay.

A submitted word is matched against the current board, not the full dictionary.
Correct words change progress and wait for a durable save before the store
publishes the result. The gameplay screen and the mounted journey screen then
recompute campaign information. Previously `selectLevels` called `isUnlocked`
for each of 500 levels; each call found the level and allocated/scanned its
predecessor list. Chapter selection scanned the resulting list repeatedly.
Gameplay's continue target, journey rows and postcards repeat these calculations.

The focused change makes unlock calculation one forward pass over the completed
prefix and chapter totals one aggregation by chapter ID. Return values, order,
unlock rules and postcard eligibility stay the same. There is no persistent cache
or change to store subscriptions, saving, word recognition or animation scheduling.
All ad code, requests, refresh, visibility, consent, footer geometry and rewarded
behavior are unchanged. Existing native-view, wheel, icon and rewarded-preload
fixes remain intact.

## Diagnostic measurements — not normal-release frame timings

Baseline: `e658ad0`. Candidate: that runtime plus the selector change. Two matching
local release **probes** temporarily added stage timers and a synthetic benchmark.
Both used Hermes, ARM64, Java 17, demo ads (`ASOBANA_LIVE_ADS=0`), package
`ge.spilogames.asobana.perf`, and non-debuggable/non-profileable manifests.
Their extra JavaScript makes them diagnostic variants, not ordinary releases.
Do not compare their timings with uninstrumented frame or callback measurements.

Each probe runs seven repetitions per synchronous stage at levels 5, 250 and 500,
with all earlier levels completed, followed by five saves to a separate scratch
SQLite database. The scratch database is closed and deleted afterward; synthetic
progress never replaces the player's save. The selector group calls `selectLevels`,
`selectChapters` and `selectPostcards` once each, as the journey does. There is a
50 ms yield between groups. One launch per variant, baseline followed by candidate;
these are small samples on one phone, not population statistics.

| Median stage duration (ms)       | Level | Baseline probe | Candidate probe |
| -------------------------------- | ----: | -------------: | --------------: |
| Word transition                  |     5 |           0.18 |            0.53 |
| Word transition                  |   250 |           0.72 |            0.39 |
| Word transition                  |   500 |           0.48 |            0.44 |
| Level selector                   |     5 |          16.80 |            0.53 |
| Level selector                   |   250 |          33.43 |            0.21 |
| Level selector                   |   500 |          40.28 |            0.21 |
| Journey selector group           |     5 |          83.45 |            1.46 |
| Journey selector group           |   250 |         130.55 |            1.89 |
| Journey selector group           |   500 |         144.56 |            1.78 |
| Full snapshot validation         |     5 |           1.37 |            1.37 |
| Full snapshot validation         |   250 |          50.58 |           51.87 |
| Full snapshot validation         |   500 |         127.53 |          128.08 |
| SQLite save including validation |     5 |          37.39 |           40.25 |
| SQLite save including validation |   250 |          90.71 |           88.90 |
| SQLite save including validation |   500 |         153.09 |          160.69 |

The unchanged save and matching stages help isolate the selector improvement.
The full journey data calculation at launch measured 109.25 → 9.53 ms, including
work outside these selectors. A baseline-probe real correct word (`ჭკუა`, level 5)
measured 0.35 ms transition, 48.16 ms saving, 107.54 ms journey calculation and
268.52 ms from dispatch to the first post-save gameplay layout effect. These
numbers overlap: the latter includes intervening rendering and scheduling, and
is not physical pixel latency or a native main-thread callback. There is no
matched candidate real-word probe, so no before/after end-to-end claim.

## Ordinary release checks

All temporary instrumentation was removed before rebuilding ordinary baseline
and candidate APKs. Manifest, ARM64 libraries and packaged `liveAds: false` were
verified for all four APKs. Only the perf package was installed; the production
package and its progress were never targeted or reset. The phone was woken and
unlocked for measurements. No emulator was used.

An initial ordinary-release recording accepted `ჭია` at level 5. The recording
shows about 0.6 seconds between the released wheel selection and visible board
reveal, sampled at 100 ms; it is a single observation with recording overhead,
not the reported 2–3 second failure. The associated trace had no multi-second
native main-thread callback. JavaScript delay can exist without such a callback.

Two identical already-found-word gestures per ordinary build exercise selection,
duplicate feedback and rendering on the same level without changing the save.
Captures use the existing atrace categories with a 32 MiB buffer, reset `gfxinfo`,
and identical six-second screen recording. These are **duplicate-word controls**,
not a measurement of correct-word saving. Recording and background journey
animation affect the sampled frame population. Frame percentiles are the reset
`gfxinfo` histogram; callback maxima are separately parsed top-level main-thread
trace slices. Neither is the time to recognize a word.

| Ordinary variant/run | Completed-frame p95 (ms) | Main callback max (ms) | WebView draw max (ms) | Frame count |
| -------------------- | -----------------------: | ---------------------: | --------------------: | ----------: |
| Baseline 1           |                       22 |                  26.89 |                  3.82 |         908 |
| Baseline 2           |                       23 |                  22.76 |                  7.38 |         902 |
| Candidate 1          |                       22 |                  24.41 |                  5.37 |         904 |
| Candidate 2          |                       22 |                  29.60 |                  4.80 |         894 |

These controls show no consistent native callback improvement; **no FPS
improvement is claimed**. The demonstrated gain is less synchronous JavaScript
campaign work, measured separately with matched probes. Neither these demo ads
nor these timings establish an earnings guarantee.

At the start, the perf save showed level 5, 86 coins and bonus 2/10, with კუჭი
and კაუჭი solved. After the initial ჭია capture, a later inspection showed 66
coins and one additional revealed cell; the source of that intervening hint was
not established. Subsequent baseline-probe ჭკუა and ordinary-candidate ჭუკი
submissions finished the board. The candidate awarded exactly 20 coins (66 → 86),
showed the earned Tbilisi postcard, and retained 86 coins and level 6 unlocked
after force-stop/relaunch. Bonus remained 2/10. No rewarded ad was watched.

## Regression coverage and remaining work

Ten selector regression cases cover early/middle/final campaign prefixes,
completion gaps, replaying an earlier board, chapter identity/order, empty
chapters and postcard totals. A deterministic work-count guard permits at most
2,000 progress lookups for level plus chapter selection at 499 completed levels:
the previous implementation performs 250,500 and fails; the candidate performs
1,000. This tests scaling without unreliable wall-clock assertions.

TypeScript, ESLint, all 390 tests in 52 suites, and validation/solving of all
500 levels passed through `npm run check`. Its first formatting gate caught this
report while it was being edited; the report was formatted and the formatting
gate rerun separately. No content or generator code changed.

The next evidence-based target is full snapshot validation, especially its
repeated level/prefix scans in long saves. Any optimization must retain corruption
checks, sequential commits, revision conflicts, atomic rewarded receipts and
failure recovery. Do not publish success before persistence merely to hide slow
storage. Further candidates are avoiding journey computation while covered and
limiting crossword cell renders, measured separately. None requires changing ad
requests, refresh or exposure. Confirming the reported 2–3 seconds still requires
the affected phone/build and its progress state.

Probe source, scratch data, APKs, traces and recordings are temporary and removed
after this summary. Existing perf utilities and current tester IPA/AAB are kept.
