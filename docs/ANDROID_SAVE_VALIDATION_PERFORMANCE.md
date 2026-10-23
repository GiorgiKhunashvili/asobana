# Samsung save-validation performance — 2026-10-23

## Scope and implementation

Baseline is `6348d4b`, including the campaign-selector optimization. This follow-up
changes only `mobile/src/storage/snapshot.ts`. It preserves full validation on
both reads and writes; no previously validated progress is trusted or cached.

- Index the pack's levels once per validation call instead of searching the
  entire array for each saved level.
- Calculate each word's cell IDs once per saved board and reuse them for cell
  membership, visibility and completion checks. The validator no longer builds
  and sorts a renderable crossword grid that it does not use.
- Check the completed campaign prefix in one pass instead of searching and
  allocating preceding-level arrays for every saved level. Continue checking
  progress after a gap; preserve the original current-level error precedence.

Every prior validation rule remains: schema/pack/revision, known levels, typed and
unique word/cell/bonus IDs, eligibility, hint bounds including historical credits,
word/cell consistency, completion, sequential unlocks, coins, bonus accounting,
settings, tutorial state, legacy postcards and doubled rewards. Parsed output
still owns new progress arrays. The database repository, revision checks,
transactions, migration behavior, rewarded receipts, store queue and
save-before-publish ordering are unchanged. No optimistic display or delayed save.

Ad requests, SDK refresh, visibility, consent, footer and rewarded presentation
code are unchanged. The prior banner, native-view, wheel, icon and rewarded
preload performance fixes remain in place.

## Paired measurements on the physical Samsung

Samsung Galaxy A07 (SM-A075F), Android 16, serial `R8YL606WYEA`, woken and unlocked.
All device commands explicitly target the USB serial and only
`ge.spilogames.asobana.perf`. No emulator, production-app operation or save reset.
The perf save started with level 6 unlocked, 86 coins, bonus 2/10 and the Tbilisi
postcard earned. This is not the unidentified older phone that reportedly takes
2–3 seconds on every correct word; that complete symptom remains unconfirmed.

A temporary **diagnostic release probe** bundles the exact baseline parser and
repository alongside the candidate. The baseline repository differs from the
production repository only in its parser import. It runs both implementations
in the same Hermes process and uses a separate scratch SQLite database, never
the player's database. The candidate repository's SQL, transaction and revision
code is byte-identical to master. Synthetic fixtures complete all prior levels
and submit the first required word on levels 6, 250 and 500.

For each fixture, blocks run baseline → candidate → candidate → baseline. Each
block times five full validations and three complete repository saves, with a
100 ms yield between operations. Every parsed result is compared with the
baseline's exact serialized output outside the timer. After every save, raw SQL
checks the stored payload and revision. The scratch connection is closed and its
database deleted at completion. Two cold launches ran the same probe: per row,
10 validation samples and six complete-save samples per implementation per launch.
No scratch progress enters the player save.

Both built APKs use Java 17, ARM64, `ASOBANA_LIVE_ADS=0`, and ordinary release
native settings (non-debuggable and non-profileable). However, the probe contains
extra JavaScript and timing calls: its results below are **probe-to-probe stage
measurements**, not ordinary-release frame timings or end-to-end word latency.
Elapsed timers include scheduling/GC effects; SQLite times also include validation,
serialization, native calls and transaction overhead. Do not add these columns.

Median durations:

| Run | Level | Validation baseline (ms) | Validation candidate (ms) | Complete save baseline (ms) | Complete save candidate (ms) |
| --- | ----: | -----------------------: | ------------------------: | --------------------------: | ---------------------------: |
| 1   |     6 |                     2.64 |                      5.30 |                       36.71 |                        34.02 |
| 1   |   250 |                    52.02 |                     19.02 |                       88.45 |                        52.37 |
| 1   |   500 |                   130.71 |                     31.57 |                      156.15 |                        76.90 |
| 2   |     6 |                     5.81 |                      5.80 |                       42.35 |                        35.76 |
| 2   |   250 |                    51.98 |                     19.50 |                       93.14 |                        59.38 |
| 2   |   500 |                   128.87 |                     32.92 |                      170.79 |                        77.53 |

Early-game validation is only a few milliseconds and its small-sample timings
are noisy; no reliable early-game validation speedup is claimed. The consistent
improvement is in longer saves. These results do not prove that the full reported
2–3-second delay is fixed, and do not imply an FPS improvement.

## Ordinary release verification

The baseline already installed on the phone was the previous task's ordinary
selector candidate, whose runtime matches `6348d4b`. Its installed APK SHA-256
was verified as `cec20d9ba8f6f2ab82e463fe9c59c1d861ee17c6ba9d1f02ede1f479b0d0ce12`.
After the paired experiment all probe source and startup hooks were removed, and
the final candidate was rebuilt and installed as an ordinary release. Both new
APKs' manifests, ARM64-only libraries and packaged `liveAds: false` were checked.

The baseline accepted რუჯი on level 6. The ordinary candidate's gameplay and
persistence check is recorded below. Captures use the existing atrace categories
and 32 MiB buffer, reset `gfxinfo`, a four-letter swipe and a three-second
post-gesture window, without screen recording. These different words advance the
same board; they are functional smoke tests, **not matched end-to-end latency
measurements**. Frame percentiles and main-thread callback durations are reported
separately, and neither measures the JavaScript validation duration.

| Ordinary build / word | Completed-frame p95 (ms) | Main callback max (ms) | WebView draw max (ms) | Frame count |
| --------------------- | -----------------------: | ---------------------: | --------------------: | ----------: |
| Baseline / რუჯი       |                       34 |                  28.42 |                  8.31 |         810 |
| Candidate / ჯორი      |                       36 |                  32.83 |                  5.94 |         834 |

These single, different-word captures do not demonstrate a frame improvement.
The demonstrated gain is the paired validation and complete-save timing above.
The candidate revealed ჯორი correctly; coins remained 86 and bonus progress
remained 2/10. Both რუჯი and ჯორი, the 86-coin balance and bonus
2/10 remained after force-stop/relaunch and reopening level 6. The Tbilisi
postcard and earlier progress remained available; no hint or rewarded ad was used.

## Validation and limitations

There are 23 new regression cases covering long saves with paid hints, balances,
bonus credits, settings, tutorial state, old postcards and doubled rewards;
unknown/duplicate IDs; word/cell/completion consistency; hint bounds; all forms of
locked progress; missing/current level IDs; replay after completion; progress
beyond a gap; and rejection without overwriting the previous durable save.
Mutating a nested input array after one successful parse is rejected on the next
parse and cannot alter the earlier parsed output.

A deterministic work-count guard checks level-ID accesses on a 499-completed-level
save: baseline 375,749 versus candidate 1,500, below the 3,000-access limit.
A separate temporary differential experiment compared exact normalized output or
error text for **880 valid/corrupted fixtures**, spanning early through completed
campaigns, and found no differences. The full historical migration, store-failure,
SQLite revision/rollback and atomic rewarded-receipt suites remain required.

`npm run check` passed TypeScript, ESLint, all **413 tests in 53 suites**, and
validation/solving of all 500 levels. Its final formatting gate caught the new
test file after an assertion-text edit; it was formatted and the formatting
gate rerun successfully. No content or generator code changed.

Only the validator implementation, tests and documentation are retained. Temporary
probe copies, scratch data, APKs, logs and traces are removed after summarizing.
Generated native projects and dependency Android build/C++ output are removed;
existing perf tools and current tester IPA/AAB artifacts are preserved. No commit,
push, EAS/store build, upload or app-version change was made for this task.
