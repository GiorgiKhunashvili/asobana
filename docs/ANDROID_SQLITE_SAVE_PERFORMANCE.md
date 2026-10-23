# Samsung SQLite save overhead — 2026-10-23

## Change and safety contract

The baseline is `6348d4b` plus the pending save-validation, hidden-journey and
crossword-rendering improvements. The preceding serialization/copying experiment
was rejected; its runtime candidate is not included.

Normal saves previously validated the entire snapshot, opened a new native
SQLite connection through Expo's `withExclusiveTransactionAsync`, began a
transaction, read the current revision, serialized and upserted the snapshot,
committed, then closed that connection. The app's original connection remained
open throughout. Expo's installed `SQLiteDatabase.ts` confirms this lifecycle.

The candidate still validates into an owned snapshot and serializes it once.
It combines the revision comparison and upsert into **one conditional SQL
statement**, using the repository's persistent connection. A missing row accepts
only expected revision zero; an existing row accepts only its current revision.
`RETURNING revision` reports that statement's success; it avoids relying on
connection-wide `sqlite3_changes()` when other statements might run. No returned
row produces the existing `StaleSaveError`.

SQLite supplies an implicit atomic write transaction for the statement. Expo's
`getFirstAsync` finalizes its statement before resolving, so the existing store
queue still waits for durable save completion before publishing progress and
success feedback. The repository opens its persistent handle with
`useNewConnection: true` so another repository or unrelated transaction cannot
share Expo's cached native handle. The existing store queue serializes its writes.
This does not add a connection per save or a new connection pool.

Multi-statement reward claims, receipt deduplication, content migrations and
loads retain their existing exclusive transactions. Database schema/version,
file name, validation rules, owned copies, save frequency, error handling and
save-before-publish ordering are unchanged. There is no delayed or skipped save,
optimistic progress update, weaker durability setting or progress-check cache.
All ad requests, refresh, visibility, consent and reward presentation behavior
are unchanged.

SQLite references: [implicit transactions and statement completion](https://www.sqlite.org/lang_transaction.html),
[conditional INSERT/SELECT UPSERT and statement rollback](https://www.sqlite.org/lang_upsert.html).
The device checks below supplement these semantics and the real-SQLite tests;
they are not a guarantee against every possible storage or hardware failure.

## Measurement method

Physical Samsung Galaxy A07 (SM-A075F), Android 16, USB `R8YL606WYEA`, woken and
unlocked. Only `ge.spilogames.asobana.perf` is installed/operated. The ordinary
baseline was pulled from the device and verified against the preceding task's
APK hash: `af112f9b22ca94863178014303a224fffa5b79bccfeec767aac28d78d2949a40`.
Its save showed level 7, ბაღი and ბუღი solved, 69 coins and bonus 3/10.

A temporary paired probe bundles the exact before/after repository code with the
same current validator and surrounding game. It uses a separately named scratch
SQLite database, never `asobana.db`, and never publishes fixtures to the store.
Both variants run on the same persistent scratch connection and WAL database;
the baseline's exclusive transactions create their usual separate connections.
The gameplay screen and demo banner remain mounted. No ad work is suppressed.

Fixtures complete the prior prefix and submit the first required word on levels
7, 250 and 500, retaining paid-hint history, a revealed cell, bonus credit and a
doubled reward. Each fixture is validated and its canonical JSON captured outside
the timer. Each launch warms each repository once per fixture, then runs
before → after → after → before blocks of eight complete saves: 16 samples per
variant/fixture/launch. Every measured write is followed by an untimed exact
payload/revision assertion. A 60 ms yield separates writes. Two cold launches
repeat the procedure.

Whole-save elapsed time includes unchanged validation, serialization, native
calls, SQLite work and scheduling. Baseline stage timers separate connection
creation plus BEGIN, revision read plus serialization/write, and COMMIT plus
connection close. Candidate statement time includes its native calls and implicit
transaction. These grouped timings do not isolate pure SQLite CPU or filesystem
latency, and independently sampled medians must not be added.

All APKs use Java 17, ARM64, `ASOBANA_LIVE_ADS=0`, ordinary release build settings
(non-debuggable/non-profileable). The diagnostic APK adds timing/fixture code,
so its measurements compare **only the matched probe variants**, not ordinary
release timings. Package, ABI, manifest and embedded demo-ad configuration are
verified. Build hashes are recorded in [TESTFLIGHT.md](TESTFLIGHT.md).

## Results

Both launches completed all 96 measured writes and scratch-database cleanup;
all **192 payload/revision comparisons** passed. SQLite on the phone reports
**3.50.3**, WAL and `synchronous=2` (FULL) on both connection types. The persistent
connection has the existing migration-configured `busy_timeout=5000`; Expo's
fresh exclusive connections report zero. No PRAGMA was changed. The candidate
therefore uses the already-configured five-second lock wait when another writer
holds the database; it does not make lock contention disappear. Timed samples
had no intentional competing writer.

Median complete-save elapsed times, milliseconds (16 samples per cell):

| Run | Fixture   | Before |  After |
| --- | --------- | -----: | -----: |
| 1   | Level 7   | 46.998 | 29.972 |
| 2   | Level 7   | 54.651 | 30.283 |
| 1   | Level 250 | 65.778 | 48.328 |
| 2   | Level 250 | 69.637 | 47.915 |
| 1   | Level 500 | 84.282 | 66.714 |
| 2   | Level 500 | 87.998 | 67.080 |

Pooled medians (32 samples per variant/fixture):

| Fixture   | Before (ms) | After (ms) | Reduction |
| --------- | ----------: | ---------: | --------: |
| Level 7   |      50.831 |     30.105 |     40.8% |
| Level 250 |      67.864 |     47.983 |     29.3% |
| Level 500 |      86.652 |     66.958 |     22.7% |

Grouped native-path medians, milliseconds:

| Run | Level | Before: open + BEGIN | Before: read + serialize + write | Before: COMMIT + close | After: conditional statement |
| --- | ----: | -------------------: | -------------------------------: | ---------------------: | ---------------------------: |
| 1   |     7 |                7.102 |                           17.484 |                 13.912 |                       19.013 |
| 2   |     7 |                8.257 |                           22.502 |                 14.469 |                       19.014 |
| 1   |   250 |                3.112 |                           15.810 |                 13.008 |                       13.524 |
| 2   |   250 |                3.301 |                           18.118 |                 12.711 |                       13.546 |
| 1   |   500 |                2.938 |                           20.297 |                 13.257 |                       15.638 |
| 2   |   500 |                3.061 |                           19.690 |                 12.939 |                       15.724 |

These results support removing per-save connection/transaction round trips as a
useful improvement: complete saves improve in every fixture in both launches,
by roughly 17–24 ms within each run. The candidate statement still includes an
atomic transaction and commit. The stage categories are not identical: baseline
serialization occurs in its work stage, while candidate serialization occurs
before its statement stage. Whole-save measurements include serialization in
both cases and are the performance comparison to use.

The candidate is retained. This is a small paired experiment on one phone, not a
population estimate, cold-first-save guarantee or proof that the unidentified
older phone's 2–3-second delay is fixed. Synthetic late-campaign saves contain a
completed prefix; they do not represent every possible save history. Background
scheduling, demo ads and thermal conditions may affect elapsed time. Full
validation remains a significant part of large saves.

**These are asynchronous save-completion timings, not Android frame durations or
main-thread callback durations.** No frame/FPS or main-thread callback improvement
is claimed from this experiment. Ordinary release is used for the functional
save/restart check, not compared numerically with the instrumented probe.

## Regression coverage

Five new real-SQLite tests cover missing-row initialization, stale/future
revision rejection, competing independent connections, failed INSERT and UPDATE
rollback/retry, and stale saves after an earned reward without erasing receipts
or recrediting duplicate claims. The host adapter uses synchronous native calls;
its competing-writer test is not evidence of simultaneous native threads.
The device probe separately raced two independent Expo connections eight times
per launch. All **16 races** produced exactly one successful writer and one
`StaleSaveError`; the other connection immediately read the winning payload and
revision. Both launches also verified failed UPDATE preservation, rollback of a
reward receipt when the snapshot UPDATE fails, successful retry paid once,
stale-save rejection after a reward, duplicate-claim protection and exact
close/reopen persistence. All checks passed before the scratch database was
closed and successfully deleted.

The earlier pending-save mutation test now pauses both supported database entry
points so it continues to check caller-owned nested data isolation. Existing
corrupt-save, historical migration, serialization, reward rollback/deduplication,
store queuing and publication tests remain in the full check.

## Final verification and cleanup

All temporary probe modules and the startup hook were removed before building
the ordinary candidate. Its installed APK hash was verified after replacement.
On that ordinary build, level 7 initially retained the same two solved words,
69 coins and bonus 3/10. A real gesture solved **აბი**; after force-stopping and
cold-reopening the perf app, **ბაღი, ბუღი and აბი** remained solved, with the
balance and bonus count unchanged. The demo banner remained visible. This is a
functional persistence check, not a timed before/after interaction comparison.
The real application and its progress were never touched.

`npm run check` passed TypeScript, ESLint, **431 tests in 57 suites**, all 500
content solves/validation and formatting. Documentation was formatted again
after the final results were added. No commit, push, EAS/store build or upload.
The current tester IPA/AAB and all earlier performance fixes are preserved.

Gradle was stopped, all iOS simulators shut down and Simulator quit. The device
inventory contained only the physical Samsung; no Android emulator was running.
Generated native projects, dependency Android build/C++ folders and summarized
experiment intermediates were removed. Existing perf utilities remain. Final
repository size is **3.4 GB**, down from 6.5 GB before cleanup.
