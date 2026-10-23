# Samsung crossword cell rendering — 2026-10-23

## Change and scope

Second item in the owner's stepwise performance pass, after
[hidden journey updates](ANDROID_HIDDEN_JOURNEY_PERFORMANCE.md). Baseline is
`6348d4b` plus the pending save-validation and hidden-journey changes. Both sides
include those changes and all earlier wheel, icon, Reanimated and ad fixes.

`selectGameplay` produces fresh cell objects after game updates. Passing those
objects to a memoized `Cell` made all cells render again, including cells whose
contents were unchanged. `CrosswordBoard` now passes the primitive values the
cell displays: ID, position, status and letter. React's normal shallow comparison
can skip unchanged cells. The unused victory delay is also held at zero when
there is no celebration; a new word's reveal length previously changed that prop
on every cell. During a celebration, its original delay calculation still runs.

No custom comparator, cross-call game cache, engine or save changes. Cell keys,
geometry, accessibility labels, entrance, hint gilding, repeated-word reminders,
wave timing and styling remain the same. Word membership stays in the gameplay
model for event presentation; the individual cell does not consume it.
Ad requests, refresh, visibility, consent, placement and rewarded behavior are
unchanged. This task makes no earnings guarantee or revenue measurement claim.

## Physical Samsung experiment

Samsung Galaxy A07 (SM-A075F), Android 16, USB `R8YL606WYEA`, woken and unlocked.
Only the isolated `ge.spilogames.asobana.perf` was installed/launched. Initial
state was level 7, ბაღი visible, 69 coins and bonus 3/10. The real app and its
progress were not accessed or modified. No data clearing or save restoration.

All four APK variants use Java 17, ARM64, `ASOBANA_LIVE_ADS=0` and non-debuggable,
non-profileable release settings. Package, manifest, ARM64-only libraries and
packaged `liveAds: false` were verified. APK hashes are in
[TESTFLIGHT.md](TESTFLIGHT.md). Two are ordinary releases; the other two carry
matching temporary diagnostic hooks and are compared only to each other.

The diagnostic wrapper replaces only the board's displayed fixture, retaining
the surrounding gameplay screen and demo banner. It uses level 7's actual
15-cell geometry and ბაღი's four cells. It never dispatches game commands,
changes the game store, calls the repository or writes the database. Starting
seven seconds after board mount, eight cycles run six steps 900 ms apart:

1. Fresh objects with all cells still locked.
2. Reveal the four-letter word, with the normal stagger.
3. Fresh objects with the same revealed cells and reveal timing.
4. Remind the player of that four-letter word.
5. Reveal the remaining cells and celebrate the board.
6. Reset only the local displayed fixture to locked cells.

Each step counts cell component function calls. A timer immediately before
`setState` and the wrapper's subsequent layout effect measure update-to-React-
commit wall time. This includes scheduling and JS reconciliation/native-update
submission; it is **not** pure render CPU time, screen presentation time, database
latency or end-to-end word recognition. Native animation and GPU work can
continue after that layout effect. Each run has 48 updates, eight of each kind.
Cold-launch order is baseline 1 → candidate 1 → candidate 2 → baseline 2.

## Matched diagnostic results

Eight observations per phase per run. Table entries are medians in milliseconds
from update request to the React layout effect, with run order shown explicitly.

| Phase                            | Cell renders before → after | Baseline 1 | Candidate 1 | Candidate 2 | Baseline 2 |
| -------------------------------- | --------------------------- | ---------: | ----------: | ----------: | ---------: |
| Unchanged locked board           | 15 → 0                      |       9.43 |        2.04 |        2.26 |       8.70 |
| Four-letter word reveal          | 15 → 4                      |      27.85 |       20.30 |       20.27 |      23.85 |
| Unchanged revealed board         | 15 → 0                      |      11.56 |        2.18 |        2.18 |      11.36 |
| Reminder with fresh cell objects | 15 → 4                      |      13.18 |        9.36 |        9.75 |      15.48 |
| Remaining cells + celebration    | 15 → 15                     |      43.29 |       40.32 |       41.32 |      46.80 |
| Local fixture reset              | 15 → 15                     |      15.71 |       15.74 |       15.89 |      15.73 |

Across the 16 observations per phase and variant, pooled median word-reveal
commit time is **24.82 → 20.30 ms (18.2% lower)**; unchanged revealed-board
updates are **11.54 → 2.18 ms (81.1% lower)**. The four-letter reveal executes
**73.3% fewer cell renders**. All-cell resets have essentially the same median,
as expected. Celebration still renders every cell; its timing difference is
not attributed to a reduction in cell count.

This is a median improvement, not a worst-case guarantee: the maximum observed
word-reveal commit was 34.07 ms in the baseline and 44.19 ms in the candidate.
The candidate's first reveal in each cold run was its slowest. Warm-up, allocation
and scheduling remain relevant. Baseline reinstallation restores 15 renders and
higher medians, supporting attribution to the prop change.

The reminder fixture deliberately creates fresh cell objects. Real duplicate-word
commands can retain the same game/cell identities and already benefit from the
old memoization; the synthetic reminder gain must not be applied to every actual
duplicate submission. Likewise, changing a previously revealed cell's animation
props can still rerender that cell. The guarantee is that unchanged visual and
animation props no longer rerender solely because the selector made a new object.

## Separate ordinary-release captures

The rebuilt ordinary baseline and final ordinary candidate each cold-started on
the journey, waited six seconds, opened level 7, and waited eight seconds.
Five repeated gestures spelling the already-found ბაღი followed, using the same
coordinates and input sequence. Each capture resets `gfxinfo`, starts the
existing perf tools' atrace categories with a 32 MiB buffer, and collects three
seconds after finger-up. No screen recording or JS timing hooks. All five
baseline captures precede the probe experiments; all five candidate captures
follow them. This ordinary comparison is not interleaved ABBA.

| Capture | Baseline completed-frame p95 (ms) | Candidate completed-frame p95 (ms) | Baseline maximum main callback (ms) | Candidate maximum main callback (ms) |
| ------- | --------------------------------: | ---------------------------------: | ----------------------------------: | -----------------------------------: |
| 1       |                                34 |                                 36 |                               29.81 |                                26.83 |
| 2       |                                34 |                                 31 |                               25.67 |                                30.89 |
| 3       |                                32 |                                 31 |                               24.09 |                                31.47 |
| 4       |                                34 |                                 32 |                               27.99 |                                24.70 |
| 5       |                                36 |                                 34 |                               39.38 |                                27.82 |

Completed-frame p95 uses Android's reset whole-run histogram, which includes
app/ad rendering; it is not the duration of a JS update or main-thread callback.
Reported frame counts are 834–892 per baseline capture and 830–902 per candidate
capture. Maximum main callbacks are top-level atrace slices on the app's main
thread. Median per-capture frame p95 is 34 → 32 ms, while median per-capture
maximum main callback is 27.99 → 27.82 ms. The ranges overlap substantially;
these small, sequential samples do **not** establish an FPS improvement.

Maximum ad WebView draw slices span 4.79–7.23 ms before and 5.05–7.66 ms after.
Demo creatives varied. This is a compatibility/control check of repeated-word
feedback, not the fresh-cell-object reveal isolated by the diagnostic fixture.
It neither proves a faster real correct-word response nor benchmarks ad revenue.

After the captures, the ordinary candidate accepted the previously unsolved ბუღი,
revealing its three remaining cells and preserving the shared ბ crossing and
previous ბაღი. Coins stayed at 69 and the bonus meter at 3/10. A force-stop,
relaunch and reopening level 7 preserved both words and those amounts. No hint
or rewarded ad was used. All probe code was removed before this ordinary build.

## Correctness and limitations

Five new rendering tests cover fresh selector identities, unchanged cells,
word-only updates and reveal staggering, shared crossing visibility, hint
gilding, repeated reminder tokens without spurious restarts, all-cell victory
waves, and changes to size, accent, position and accessibility text. Four tests
fail against the old component and pass with the change; the all-cell celebration
case passes on both. Mocked animation tests verify scheduling, not actual GPU
animation rendering. Native behavior is checked separately on the Samsung.

The probe uses a controlled UI fixture rather than a real saved word command.
It isolates redundant rendering but does not establish how much of an older
phone's reported 2–3-second delay this accounts for. One device, small samples,
GC, native animation overlap, demo-ad/network activity and thermal differences
limit timing conclusions. No FPS gain is inferred from fewer React renders.

`npm run check` passed: TypeScript, ESLint, **423 tests in 55 suites**, validation
and solving of all 500 levels, and formatting. Final measurement-document edits
were formatted and checked separately. No content changes, commits, pushes,
EAS/store builds or uploads. Existing pending save and hidden-journey changes
remain available for review.

Generated native projects, dependency Android build/C++ directories and summarized
probe source/APKs/traces/logs were removed after verification. Gradle was stopped,
all simulators shut down and Simulator quit; no Android emulator was connected.
Perf utilities and current tester IPA/AAB were retained. Final repository size:
3.4 GB.
