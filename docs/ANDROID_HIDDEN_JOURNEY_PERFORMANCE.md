# Samsung hidden journey updates — 2026-10-23

## First item in the next performance pass

The owner requested investigating the remaining candidates one at a time with
benchmarks. This item is **hidden journey-screen updates**. Crossword cell
rendering is the next candidate; the rest remain investigations, not promised
speedups. The unidentified older phone's full 2–3-second correct-word delay is
still not reproduced on this Samsung.

Baseline: `6348d4b` plus the pending save-validation optimization documented in
[ANDROID_SAVE_VALIDATION_PERFORMANCE.md](ANDROID_SAVE_VALIDATION_PERFORMANCE.md).
The save-validator source was compared byte-for-byte before and after this task
and is unchanged. Both sides retain all previous performance fixes.

The journey screen used to observe every committed `game` snapshot while covered
by gameplay, rebuilding its rows, chapter summaries, postcards and layout data.
It now uses `useFocusedGame`, a small `useSyncExternalStore` hook whose subscription
is disabled while the route is unfocused. The component remains mounted, retaining
scroll refs, sheet state and other local state. Refocusing reads the current game
snapshot during rendering; React's external-store consistency checks also handle
an update between rendering and resubscribing. There is no timer or backlog of
updates to replay. Unrelated parent/local renders may still read current data
while covered; this change removes store-driven hidden renders, not every possible
render of an unfocused screen.

Only this screen's observer changes. The game store still publishes normally,
saving and validation still run, and visible gameplay still receives every result.
No ad request, refresh, visibility, consent, footer or rewarded-ad behavior changes.
No native navigation freezing, unmounting or global subscription changes.

## Physical-device benchmark

Samsung Galaxy A07 (SM-A075F), Android 16, USB `R8YL606WYEA`, woken and unlocked.
Only `ge.spilogames.asobana.perf` was used. The save had advanced since the prior
task: level 6 completed, level 7 available, 66 coins and bonus 2/10. No data reset
or production-package operation. Existing progress is the fixture for both sides.

Two matching diagnostic APKs use Java 17, ARM64, `ASOBANA_LIVE_ADS=0`,
non-debuggable/non-profileable release native settings. They temporarily time the
same journey `useMemo` calculation. The candidate differs only in its focused
subscription. Both include the pending save-validation change.

For each run, cold-launch the journey, wait six seconds, then open level 7 using
the perf package's deep link. Six seconds after blur, the probe publishes 12
in-memory game snapshots, 250 ms apart. Each has **identical game facts** and a new
game/progress object identity, exercising the notification/render path used by
committed progress changes. It then restores the original game object. This
produces 13 notifications. It never calls dispatch or the repository and never
writes the player's database. It aborts rather than overwriting concurrent input.
The same update pattern and game facts are used in both variants. The original
snapshot restored at the end already matches the candidate's retained data, so
this identity-only experiment does not measure the cost of catching up changed
facts on refocus; correctness of that case is tested separately.

Order: baseline 1 → candidate 1 → candidate 2 → reinstalled baseline 2. Each run
returns to the journey after completion. Small samples, one phone, actual
wall-clock JavaScript timers including scheduling/GC effects. Rendering outside
the data calculation is not included. These are **matched probe measurements**,
not ordinary-release frame timings or end-to-end word acceptance timings.

| Run         | Hidden notifications | Hidden journey recalculations | Total data-calculation time (ms) | Median calculation (ms) | Maximum calculation (ms) |
| ----------- | -------------------: | ----------------------------: | -------------------------------: | ----------------------: | -----------------------: |
| Baseline 1  |                   13 |                            13 |                           195.63 |                   11.72 |                    33.36 |
| Candidate 1 |                   13 |                             0 |                                0 |                       — |                        — |
| Candidate 2 |                   13 |                             0 |                                0 |                       — |                        — |
| Baseline 2  |                   13 |                            13 |                           173.45 |                   11.35 |                    30.98 |

The candidate eliminates this redundant hidden data calculation: roughly
11–12 ms median work per notification in these baseline runs, or 173–196 ms
across each 13-update batch. This is not a claim that each correct word is
173–196 ms faster. No FPS or total word-response improvement is claimed.

## Ordinary release and correctness

All timing hooks and synthetic-update code were removed before building the final
ordinary candidate. Manifest, ARM64-only libraries and packaged `liveAds: false`
were checked for all three APKs. The ordinary candidate replaces the probe on the
phone. The installed real app, current tester IPA/AAB and their data are untouched.

The ordinary candidate accepted ბაღი on level 7 and the bonus ბუ. The bonus
raised the balance from 66 to 69 and the meter from 2/10 to 3/10. Returning to
the journey immediately showed 69 coins. Force-stop/relaunch and reopening the
board preserved the solved word, 69 coins and bonus 3/10. No hint or rewarded ad
was used, and all synthetic probe updates had been removed.

A separate ordinary-release correct-word capture used the existing atrace tools'
categories and 32 MiB buffer, reset `gfxinfo`, and three seconds after the gesture,
without screen recording. Completed-frame p95 was **36 ms** over 858 reported
frames; the largest top-level **main-thread callback was 27.52 ms**. These are
different metrics, and this one candidate capture has no matched ordinary
baseline. It is a functional smoke check, not evidence of a frame-rate gain or
an end-to-end latency comparison.

Five focused-subscription tests cover zero renders for 12 hidden game updates,
catching up to the newest balance/current level, retained local state, immediate
visible updates, ignoring unrelated busy changes, initialization while hidden,
an update during refocus, and unsubscribe/remount cleanup without listener leaks.
The journey presentation test fixture gained the external-store methods used by
the new hook. Existing presentation and ad lifecycle tests remain in the full gate.

`npm run check` passed: TypeScript, ESLint, **418 tests in 54 suites**,
validation/solving of all 500 levels, and formatting. No content changed.

No commit, push, app-version change, EAS/store build or upload. Generated native
projects, dependency Android build/C++ output, probe source, APKs and summarized
logs are removed at completion. Existing perf utilities and tester IPA/AAB remain.
