# Samsung word feedback and crossword drawing — 2026-10-23

## Scope and decisions

This continues the earlier correct-word investigation, rather than redoing it.
Baseline **`bbe7965`** already includes the selector, snapshot validation,
SQLite connection/transaction, hidden-journey and crossword memoization fixes.
See [the original word investigation](ANDROID_WORD_SUBMISSION_PERFORMANCE.md),
[SQLite measurements](ANDROID_SQLITE_SAVE_PERFORMANCE.md) and
[cell rendering measurements](ANDROID_CROSSWORD_RENDERING_PERFORMANCE.md).
The earlier serialization/copying candidate remains rejected.

Two questions were investigated: what remains between release and visible word
feedback, and whether native crossword animation/drawing can be improved.

**Retained:** remove `GameplayScreen`'s subscription to the save-busy flag and its
unused visual prop. The flag was consumed only by the hint press handler, but
changing it rerendered the gameplay layout, wheel and controls before/after saves.
The handler now reads `gameStore.getState().busy` when pressed. It still ignores
hint presses while busy and becomes usable when saving finishes. Word submissions
remain enabled and queued. Actual game, event and error updates still render.

**Rejected:** enabling `renderToHardwareTextureAndroid` on each revealed cell's
enamel group. Its initial apparent gain did not repeat. No crossword cache,
removed animation, shorter delay, style change or altered animation mechanism is
retained. The animation-off variant below is only an attribution control.

All save validation, copies, revision checks, atomic writes, reward receipts,
save frequency and save-before-success ordering remain unchanged. No ad request,
refresh, visibility, consent, footer, rewarded presentation or revenue behavior
is intentionally changed. The busy guard still covers both paid/free hints and
explicit low-coin ad-watch presses. Ad lifecycle code is untouched.

## Device and builds

Physical Samsung Galaxy A07 (SM-A075F), Android 16, USB `R8YL606WYEA`, woken and
unlocked. Only `ge.spilogames.asobana.perf` was operated; no production save access,
data clearing or save replacement. An existing emulator was shut down before
measurements; all device commands explicitly selected the Samsung.

The installed ordinary baseline was pulled and verified as the final SQLite
candidate, SHA-256 `505914d1e453434e33e69c421f5db186d76d76d94d5fd1f206ba79a2915ada0f`.
Its save showed level 7, ბაღი, ბუღი and აბი solved, 69 coins and bonus 3/10.
All local APKs use Java 17, ARM64, `ASOBANA_LIVE_ADS=0`, non-debuggable and
non-profileable release settings. Package, ABI, manifest and embedded demo-ad
configuration were checked. Hashes are in [TESTFLIGHT.md](TESTFLIGHT.md).

Diagnostic APKs add timing calls and temporary UI fixtures. Their timings are
not compared numerically with ordinary-release timings. No EAS/store builds or
uploads. Existing tester IPA/AAB remain unchanged.

## 1. Remaining word-submission path

The first diagnostic APK times the real release callback, queued transition,
save and first gameplay layout effect. UI-to-JS handoff uses the difference
between `Date.now()` readings; JS stages use `performance.now()`. The screen's
next JS animation-frame callback is also logged. Neither callback is physical
screen presentation. No stage bypasses the real store or repository.

One real, previously unsolved **ღია** was submitted on level 7. Its middle ი was
already visible from აბი; two cells were newly revealed. A nine-second Android
screen recording and atrace accompanied this observation, so recording overhead
is included. This is a diagnostic observation, not a statistically matched
before/after interaction benchmark.

| Stage                                                           | Elapsed/duration (ms) |
| --------------------------------------------------------------- | --------------------: |
| UI release callback → RN callback, millisecond clock resolution |                     0 |
| Dispatch → queued action begins                                 |                14.376 |
| Word transition, including correct-word checks                  |                 3.206 |
| Complete durable save                                           |                35.301 |
| RN release callback → store publishes committed result          |                53.078 |
| RN release callback → gameplay React layout effect              |               106.993 |
| RN release callback → subsequent JS animation-frame callback    |               194.215 |

These intervals overlap; do not sum the table. Zero handoff means below the
clock's resolution, not zero execution cost. The word-matching result agrees
with the earlier finding that matching the current board is not a multi-second
dictionary search. Saving and rendering still take time, but the reported
2–3-second delay did not reproduce here.

The recording was inspected at approximately 100 ms intervals. Its selection
cord was present at 1.8 s and gone at 1.9 s; the first new cell was visibly
appearing at 2.1 s and both new letters were readable by 2.3 s. That gives rough
visual intervals of **0.2–0.3 s to first reveal** and **0.4–0.5 s to both letters**
relative to selection disappearance. This is not a hardware finger-up timestamp,
sub-frame measurement or an end-to-end improvement claim. The preserved spring,
75 ms cell stagger and flash continue after letters appear. Coins and bonus
credit stayed at 69 and 3/10; the new word persisted.

### New finding: busy-only gameplay renders

Code inspection connected part of the queued-action delay to an unnecessary
screen subscription: `busy` changes have no visible representation in gameplay.
The wheel deliberately stays enabled during saves. Only the hint callback needs
to inspect busy state. Removing the subscription avoids rendering solely because
saving started or ended, without publishing any result earlier.

A second paired diagnostic APK compares the original subscription and a selector
that stays constant while the handler reads busy at press time. It uses the same
mounted gameplay screen, actual saved game and demo banner. Six seconds after
entry, it changes only the transient `busy` field true/false 12 times, with
180 ms between changes. No command, database write or game-state mutation occurs;
game identity is asserted unchanged. The fixture restores busy to false.
Gameplay layout render/commit counts and update-to-layout elapsed time are logged.

Cold-launch order: before 1 → after 1 → after 2 → before 2. All four runs completed.

| Run      | Busy updates | Gameplay layout renders | Median update → layout (ms) |
| -------- | -----------: | ----------------------: | --------------------------: |
| Before 1 |           24 |                      24 |                      16.040 |
| After 1  |           24 |                       0 |          No gameplay commit |
| After 2  |           24 |                       0 |          No gameplay commit |
| Before 2 |           24 |                      24 |                      14.218 |

All **48 baseline renders are avoided across the two candidate runs**. Pooled
baseline median is 15.430 ms per unnecessary update. Busy=true medians are
15.396 / 13.015 ms; busy=false medians are 18.814 / 15.710 ms. These are elapsed
update-to-commit measurements, not pure CPU time. Zero renders must not be
reported as zero total application work: store notifications still occur.

The controlled toggles separate busy updates from real saved-game updates.
React may batch those updates during actual play, so **do not multiply these
medians by two and claim that amount saved per word**. No matched fresh-word
before/after pixel-latency percentage is claimed. The demonstrated benefit is
removing the otherwise unnecessary busy-only gameplay renders.

## 2. Crossword animation and native drawing

Three ordinary-release duplicate-word controls preceded the probes, each spelling
already-solved ბაღი on level 7, using the same gesture and a three-second window
after finger-up. No recording or JS hooks in these controls. Existing perf-tool
atrace categories and gfxinfo were used, with explicit perf package/device.

| Ordinary control | Completed-frame p95 (ms) | Maximum main callback (ms) | Main view-recording p95 (ms) |
| ---------------- | -----------------------: | -------------------------: | ---------------------------: |
| 1                |                       34 |                     30.681 |                        0.392 |
| 2                |                       36 |                     36.643 |                        0.351 |
| 3                |                       34 |                     26.369 |                        0.423 |

The dominant sampled slow traversal waits in `postAndWait`; it is not expensive
main-thread recording of crossword display lists. RenderThread drawing, buffer
waits and ad WebView work remain part of screen cost. These controls exercise
reminders, not fresh correct-word saving.

### Paired drawing fixtures

The first diagnostic APK contains exact baseline board code, the cache candidate
and a baseline copy with board animations disabled. Only the board's displayed
fixture changes; the real game store, save, wheel, header and banner stay intact.
It uses level 7's 15 cells. At 1.5 s it reveals ბაღი's four cells, at 3.5 s it
reminds those cells, and at 5.5 s it reveals the remainder and runs the normal
celebration. Capture lasts nine seconds. No screen recording accompanies these
comparisons. The static control skips entry, flash, reminder and celebration
animations while applying the same final letters and colors.

Order: before 1 → cache 1 → static 1 → cache 2 → before 2 → static 2 → before 3 →
cache 3 → cache 4 → before 4. Each trial uses a diagnostic query on the same route;
Android activity pause/resume and normal banner activity can occur around that
intent. Phase-specific trace windows start at logged fixture updates, mapped
from wall time to the trace's boot clock using device clock/uptime readings.
Clock sampling and scheduling add uncertainty near window boundaries.

| Variant/run | Whole-capture completed-frame p95 (ms) | Maximum main callback (ms) | Reveal-window RenderThread drawing p95 (ms) |
| ----------- | -------------------------------------: | -------------------------: | ------------------------------------------: |
| Before 1    |                                     42 |                    132.324 |                                      10.174 |
| Cache 1     |                                     28 |                     31.536 |                                       8.347 |
| Cache 2     |                                     32 |                     28.274 |                                      10.528 |
| Before 2    |                                     30 |                     24.108 |                                       9.631 |
| Before 3    |                                     31 |                     26.114 |                                       9.318 |
| Cache 3     |                                     32 |                     33.778 |                                      10.118 |
| Cache 4     |                                     34 |                     35.982 |                                      11.621 |
| Before 4    |                                     32 |                     28.361 |                                      10.372 |

Median per-capture frame p95 is **31.5 ms baseline versus 32 ms cached**. The
cache's strong first comparison disappears when the baseline is repeated; later
cached drawing costs are often higher. The first baseline's 132 ms callback
contains about 124 ms waiting in `postAndWait`, concurrent with a roughly 128 ms
RenderThread Drawing slice. It is kept in the results, not discarded. It did not
recur at that size in later baseline runs, so it cannot be credited to caching.

The animation-off controls reduce main `doFrame` p95 to 1.490 / 1.569 ms and have
no recorded drawing in the reminder windows. This confirms that animation drives
continuous frame work. Their completed-frame histograms have a very different
population (mostly mount/reveal/other app draws); their 65 / 48 ms p95 values
must not be interpreted as worse animation FPS or compared as equal workloads.
Removing animations would change presentation and is not retained.

Whole-process memory snapshots after the trials span 359.0–387.9 MiB PSS for
baseline and 369.1–388.8 MiB for cache; graphics memory spans 44.9–54.5 versus
42.5–59.9 MiB. These include varying ad/native caches and are not an isolated
measurement of cell texture allocation. With no repeatable speed improvement,
there is no justification for adding per-cell texture caching. No extra cache
or background work is retained.

**Frame timings, main-thread callback durations and JS commit timings are separate
metrics throughout this report. No FPS gain is claimed.** One Samsung, a small
sample, warm-up, demo creatives, scheduling, GPU/thermal variation and different
real-word cell counts limit generalization. Establishing the original older
phone's 2–3-second failure still requires that device/build/progress context.

## Regression coverage and final verification

Four new tests use real Zustand subscriptions and the gameplay screen, with
native/rendering boundaries mocked. They verify:

- Busy-only changes do not render the board/wheel, while hint handlers read the
  current guard without a rerender.
- Hints mounted while busy become usable after the save finishes.
- Low-coin ad offers still ignore presses while busy and require a fresh explicit
  watch press after saving; no automatic presentation or paid hint dispatch.
- Words still reach dispatch while busy; committed progress and save errors
  still render immediately through their existing subscriptions.

The render regression fails on the exact baseline (two board renders where one
is expected); all four pass on the candidate. Existing store/save, ad lifecycle,
reward and animation tests remain in the full gate.

All diagnostic hooks, fixture components and both rejected drawing variants
were removed before the final ordinary release build. The installed candidate's
hash was pulled and verified. The actual runtime diff is confined to
`GameplayScreen.tsx`; engine, repository, store, crossword and ad sources match
the baseline.

The ordinary candidate retained all four solved words and the 69-coin balance.
A real gesture submitted **ბღუჯა**, completing level 7 with the existing reveal
and celebration, awarding exactly 20 coins (69 → 89), and displaying the normal
optional ×2 offer. No ad was watched and no hint bought. After force-stop and
relaunch, the completed board, all five words, 89 coins and bonus 3/10 remained.
Level 8 opened normally and retained those amounts through a further cold
restart. Its board is untouched. The production app was never targeted.

The final completion trace, including the move to victory, reports **36 ms
completed-frame p95** and **50.132 ms maximum main callback**. These are separate
metrics from one functional smoke run; this completion differs from the earlier
duplicate-word controls and is not a matched performance comparison. The final
React Native/AndroidRuntime log contains no logged error or fatal exception.

`npm run check` passed TypeScript, ESLint, **435 tests in 58 suites**, validation
and solving of all 500 levels, and formatting. Final documentation additions were
formatted and checked separately. No commit or push.

Gradle was stopped, all iOS simulators shut down and Simulator quit. The emulator
found at the start was shut down; final inventory contained only the physical
Samsung. Generated native projects, dependency Android build/C++ output and
summarized APKs, probes, traces, recordings and logs were removed. Perf utilities
and current tester IPA/AAB were preserved. Final repository size is **3.4 GB**, down from 7.4 GB
before cleanup.
