# Samsung save serialization and copying — 2026-10-23

## Decision: retain the existing runtime

The owner requested the next step in the performance pass: serialization and
copying, measured on the physical Samsung while preserving every progress check,
save and ad request/refresh/visibility behavior.

**No new runtime optimization is retained from this experiment.** The save path
already validates into an owned, normalized snapshot and serializes it once.
There is no JSON serialize/parse round trip to remove. The copied progress arrays
also isolate a pending asynchronous write from subsequent caller mutations and
exclude caller-supplied serialization hooks. Those protections remain intact.

An experimental candidate replaced `Object.entries(progressRaw)` with a keys
loop, avoiding a temporary key/value pair array per saved level. It accumulated
bonus counts and the legacy tutorial default during that same loop instead of
building later `Object.values` collections. It retained all validation, owned
output arrays, JSON serialization, SQL, transactions and revision checks.
Despite fewer temporary containers, its preparation timings did not improve
consistently. It was reverted byte-for-byte to the task's starting source.

The baseline is `6348d4b` plus the pending save-validation, hidden-journey and
crossword-rendering optimizations. All of those earlier changes are preserved.
The repository, store queue, save-before-publish ordering, migration behavior,
reward receipts and all ad behavior are unchanged by this task. Only new
regression tests and this experiment's documentation are retained.

## Device and method

Samsung Galaxy A07 (SM-A075F), Android 16, USB `R8YL606WYEA`, woken and unlocked.
Only `ge.spilogames.asobana.perf` was used; no emulator or production-app operation.
The initial ordinary APK hash matched the final crossword candidate exactly:
`af112f9b22ca94863178014303a224fffa5b79bccfeec767aac28d78d2949a40`.
The perf save showed level 7, ბაღი and ბუღი solved, 69 coins and bonus 3/10.

One temporary diagnostic APK contains both parsers and repository variants in
the same Hermes process. The baseline repository differs only in its parser
import; SQL and all persistence logic are identical. The APK uses Java 17,
ARM64, `ASOBANA_LIVE_ADS=0`, non-debuggable/non-profileable release settings.
Manifest, ARM64-only libraries, package and embedded `liveAds: false` were checked.
Its extra code/timing calls make these **matched diagnostic measurements**, not
ordinary-release timings. See [build variants](TESTFLIGHT.md).

The probe uses a separately named scratch SQLite database, never `asobana.db`.
Fixtures complete the prior campaign prefix and submit the first word on levels
7, 250 and 500. They include a 137-coin balance, paid-hint history, a revealed
cell, bonus credit and a doubled reward. Payload lengths are respectively
1,233, 35,739 and 71,239 JavaScript string code units; these are not byte counts.
No fixture is published to the player store or copied into the player's save.
The probe closes its scratch connection and attempts database deletion in a
`finally` block, including on failure.

Two cold launches each run the following for all three fixtures:

- **Serialization alone:** 12 batches of ten `JSON.stringify` calls on the same
  normalized snapshot. Report each batch's per-call time, then their median.
- **Copy-only diagnostic:** 12 batches of ten plain-object/array projections,
  copying the snapshot, progress records, three progress arrays, settings,
  bonus ledger and doubled rewards. This intentionally excludes validation and
  JSON work. It estimates the cost of these copies; it is not an alternative
  repository implementation or an exact attribution of every allocation/GC cost
  inside the real validator. Geometry, sets and other validation allocations
  are not included.
- **Preparation:** baseline → candidate → candidate → baseline blocks, each
  with eight full `parseSnapshot` + `JSON.stringify` calls. There are 16 samples
  per variant/fixture/launch. Every output is compared byte-for-byte with the
  original normalized JSON outside the timer.
- **Complete save:** four actual repository writes per block, eight samples per
  variant/fixture/launch. Includes full validation, serialization, native calls
  and the exclusive SQLite transaction. Every write is followed by a raw SQL
  payload/revision assertion outside the timer. All 96 writes across both
  launches passed. Scratch revisions continue through the alternating blocks.

There is a 40 ms yield between timed operations/batches. The surrounding ordinary
game screen and demo banner remain mounted; no ad behavior is suppressed. Timers
measure elapsed time, including scheduling and GC where encountered. The batched
copy/JSON measurements warm those operations and are not cold-call guarantees.
Do not add independently sampled medians or infer SQLite-only time by subtraction.

## Results

Median per-call stage times in milliseconds:

| Level | Copy-only run 1 | Copy-only run 2 | JSON run 1 | JSON run 2 |
| ----- | --------------: | --------------: | ---------: | ---------: |
| 7     |           0.237 |           0.229 |      0.290 |      0.285 |
| 250   |           0.964 |           0.969 |      2.057 |      1.977 |
| 500   |           1.034 |           1.066 |      1.903 |      2.079 |

Before/after medians for the **rejected** allocation candidate:

| Run | Level | Preparation before (ms) | Preparation after (ms) | Complete save before (ms) | Complete save after (ms) |
| --- | ----: | ----------------------: | ---------------------: | ------------------------: | -----------------------: |
| 1   |     7 |                   6.116 |                 10.393 |                    39.522 |                   56.888 |
| 2   |     7 |                  10.400 |                 10.351 |                    56.804 |                   44.811 |
| 1   |   250 |                  18.021 |                 18.215 |                    67.602 |                   66.610 |
| 2   |   250 |                  19.279 |                 19.780 |                    70.866 |                   63.195 |
| 1   |   500 |                  34.027 |                 33.723 |                    85.440 |                   72.888 |
| 2   |   500 |                  34.062 |                 34.441 |                    90.290 |                   87.820 |

Level-500 preparation improved by only 0.304 ms in one launch and worsened by
0.379 ms in the repeat. Level-250 preparation was slightly worse in both runs.
Whole-save medians vary much more; some candidate medians are lower, but the
early-game result reverses between runs and the late-game difference shrinks
substantially. This is insufficient evidence to attribute a reliable save-time
improvement to the allocation change. No performance gain is claimed or shipped.

The isolated JSON/copy costs are small on this Samsung. They do not reproduce or
explain the unidentified older phone's reported 2–3-second delay. That phone may
behave differently. SQLite connection/transaction overhead remains a separate
candidate for investigation; this experiment does not establish its exact cost.

No frame-timing or main-thread callback comparison was made for the rejected
candidate, and no FPS claim is made. The tables measure JavaScript preparation
and asynchronous save completion, not Android frames or main-thread callbacks.

## Safety coverage and restoration

Three retained regression tests verify:

1. A save paused before entering its transaction retains all validated values
   when the caller changes nested word/cell/bonus arrays, hint/completion flags,
   balances, settings, bonus accounting, postcards, doubled rewards and the
   progress map. A subsequent save of that corrupt input is validated anew and
   rejected without replacing the prior durable snapshot.
2. Root, record, array and metadata `toJSON` hooks and circular extra properties
   do not enter the serialized save; only normalized fields are written.
3. Legacy optional fields receive the existing tutorial/bonus defaults while
   preserving coins and paid-hint history through an actual SQLite save/load.

All three tests pass on the retained baseline. Existing historical migration,
corruption, revision-conflict, rollback, store-publication and atomic rewarded-
receipt tests remain in the full gate. A temporary differential check also
compared exact normalized output/error text for 384 valid/corrupt fixtures,
including reversed progress insertion order and early through complete campaigns;
there were no differences between the experimental and baseline parsers.

After measurements, all probe code was removed and the exact original ordinary
APK reinstalled over the perf package, retaining its data. No new ordinary APK,
EAS/store build, upload, version change, commit or push was needed. Current tester
IPA/AAB and the real application remain untouched.

The restored on-device APK hash was verified again. Reopening level 7 showed the
same two solved words, 69 coins and bonus 3/10; no gameplay action changed the
player save during the experiment. `npm run check` passed TypeScript, ESLint,
**426 tests in 56 suites**, all 500 content solves/validation and formatting.
Final documentation additions were formatted and checked separately.

Gradle was stopped, all iOS simulators shut down and Simulator quit. No Android
emulator was connected. Generated `mobile/android` / `mobile/ios`, dependency
Android build/C++ directories and summarized experiment intermediates were
removed. Existing perf utilities and current tester IPA/AAB remain. Final
repository size is **3.4 GB**.
