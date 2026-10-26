# Asobana TestFlight

## Violet splash tester release — 2026-10-23

Built locally from `master` at `75013a1` (clean tree, pushed), which adds the
violet launch splash, loading view and screen-transition background (`0b0ef0e`)
and the store listing kit (docs and scripts only). Both builds use `beta`,
`ASOBANA_LIVE_ADS=0`; the owner selected **Play internal testing with demo ads**.
Neither artifact is intended for public release with live ads.

- **iOS 0.1.0 (7):** uploaded to App Store Connect app `6825282360` through EAS
  submission `d8d9ffa4-0fd4-4847-860e-fb28e6819ac9`; Apple accepted the binary
  for processing (processing result not checked here).
  File: `artifacts/asobana-ios-beta-violet-splash.ipa`, **57,006,933 bytes**.
  SHA-256: `504361594c8692100679bdfdb7b4336169a014dc998883be645a6dea38a4a8f6`.
- **Android 0.1.0 / versionCode 9:** signed AAB for the owner's Play internal
  testing upload; no Google Play submission was made. File:
  `artifacts/asobana-android-beta-0.1.0-violet-splash.aab`, **152,724,564 bytes**.
  SHA-256: `9cac012319dfdb09e72131f504538371a204a26988ffdb1ab013a1948f297a34`.

Verification: the iOS signature verifies, `get-task-allow` is false and the
bundle ID and AdMob app ID are the release ones. The AAB passes `jarsigner -verify`
with the same upload certificate as versionCode 8. Both embedded configs have
`extra.liveAds: false` and the splash background `#120C24`; Android's splash
image is `mark-splash.png`. The splash change itself was checked in an iOS Release
simulator build before commit; `npm run check` passed for that commit. These
store artifacts were not installed on a device.

## Performance tester release — 2026-10-23

Built locally from `master` at `bbe7965` plus the uncommitted gameplay busy
subscription change and its four regression tests. Both builds use `beta`,
`ASOBANA_LIVE_ADS=0`, the existing `ge.spilogames.asobana` identifiers and signing
credentials. The owner explicitly selected **Play testing with demo ads**.
Neither artifact is intended for public release with live ads.

- **iOS 0.1.0 (6):** uploaded successfully to App Store Connect app `6825282360`
  through EAS submission `b028dd5c-214b-4115-afa2-d6f8f756f810`. App Store Connect
  confirms `VALID` and `IN_BETA_TESTING`; external state is
  `READY_FOR_BETA_SUBMISSION` (no external beta review submitted).
  File: `artifacts/asobana-0.1.0-beta-performance.ipa`, **57,005,888 bytes**.
  SHA-256: `d22ad8de2854ada8cd183a96326b6d1d40fa63d8ea7a5fc5191a068cecb61c80`.
- **Android 0.1.0 / versionCode 8:** signed AAB for the owner's Play testing
  upload; no Google Play submission was made. File:
  `artifacts/asobana-android-beta-0.1.0-performance.aab`, **152,721,097 bytes**.
  SHA-256: `8b835dfb0c68cb4ef9d5626d4b6b1ec34bbe7b5eae5b88e45d8e72283d18bf3e`.

Verification: iOS signature verification passed, `get-task-allow` is false,
minimum iOS is 16.4 and the embedded Hermes bundle is present. Android targets
SDK 36, minimum SDK 24, contains ARM64, ARMv7, x86 and x86_64 libraries and has
no debuggable/profileable manifest opt-in. All 1,992 non-META-INF AAB entries
passed signature/digest verification; its signing certificate matches the prior
AAB. Both embedded configs have `extra.liveAds: false` and the correct AdMob app
IDs. Both build copies include the latest gameplay source; Android's install log
confirms the existing Reanimated patch applied.

The immediately preceding preflight passed `npm run check`: 435 tests in 58
suites, TypeScript, ESLint, all 500 level solves and formatting. No application
source changed for packaging. Includes the prior board-entry, rewarded-preload,
banner-render, word-selector, save-validation, SQLite, hidden-journey and
crossword improvements, plus the nonvisual busy-subscription fix. No new changes
to ad requests, refresh, visibility, save validation or save ordering. These store
artifacts were not installed on a device; the preceding ordinary-release Samsung
verification and benchmark limitations remain in the linked performance reports.
No git commit/push or public store release was performed.

Cleanup: both EAS temporary workspaces were removed automatically; no generated
`mobile/android`, `mobile/ios` or dependency Android build/`.cxx` folders remain.
Gradle is stopped, all simulators are shut down and no Android emulator is
running. Removed the superseded IPA after build 6 uploaded, verification extracts
and summarized build logs. Retained the previous tester AAB until its successor
is uploaded by the owner. Perf utilities remain. Final repository size: **3.6 GB**.

## USB word feedback and drawing — 2026-10-23 (perf APKs only, no upload)

Baseline is committed `bbe7965`. All variants use `ge.spilogames.asobana.perf`,
Java 17, ARM64, `ASOBANA_LIVE_ADS=0`, version 0.1.0 / local versionCode 1 and
non-debuggable/non-profileable release settings. Manifest, ABI and embedded
Google demo-ad configuration were verified.

| Variant                                         | APK SHA-256                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| Existing ordinary baseline, pulled and verified | `505914d1e453434e33e69c421f5db186d76d76d94d5fd1f206ba79a2915ada0f` |
| Word-stage / paired drawing diagnostic          | `b97198d94d84fa897d088b79ab2fa128086e051967db442d276683346fa3e183` |
| Paired busy-render diagnostic                   | `5b1ea7b3380b041e05e1ce7ee1a24716fbd2da9f96ef91b047bceedbece4c761` |
| Ordinary candidate, all probes removed          | `a7bb77d676cf250eaf0367d2c5c8b7030452e387dc97d855b6a53bf2c2800fd9` |

The retained change removes gameplay's nonvisual busy subscription; hint presses
read the current busy state directly. Saves, progress checks and all ad behavior
remain unchanged. Per-cell texture caching did not improve drawing consistently
and was rejected. The animation-off control is not retained. Diagnostic timings
are compared only within matched probes, never against ordinary release. The
final ordinary candidate replaces all probes on the physical Samsung.
See [measurements and limitations](ANDROID_WORD_FEEDBACK_PERFORMANCE.md).
No production-package operation, EAS/store build/upload, version change, commit
or push. Current tester IPA/AAB and earlier fixes are preserved.

## USB SQLite save overhead — 2026-10-23 (perf APKs only, no upload)

Baseline is `6348d4b` plus pending save-validation, hidden-journey and crossword
changes. The preceding serialization candidate remains rejected. Only the
side-by-side `ge.spilogames.asobana.perf` package is used on the physical Samsung.
All variants use Java 17, ARM64, `ASOBANA_LIVE_ADS=0`, version 0.1.0 / local
versionCode 1, non-debuggable/non-profileable release settings and demo ads.

| Variant                                         | APK SHA-256                                                        |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| Existing ordinary baseline, pulled and verified | `af112f9b22ca94863178014303a224fffa5b79bccfeec767aac28d78d2949a40` |
| Paired diagnostic probe                         | `7af47c4b773540333069e8e3a238eb5552fb7880f3e336b3033672de373fb453` |
| Ordinary candidate, probe removed               | `505914d1e453434e33e69c421f5db186d76d76d94d5fd1f206ba79a2915ada0f` |

The probe compares old/new repository saves in its own scratch database. Timings
are compared only within that matched probe, never against ordinary release.
Normal saves retain all validation and use one atomic conditional revision/write
statement on a private persistent connection. Multi-step reward/migration
transactions and all ad behavior are unchanged. See
[measurements, safety checks and limitations](ANDROID_SQLITE_SAVE_PERFORMANCE.md).
The ordinary candidate replaces the probe for final gameplay save/restart
verification. No store build/upload, version change, production-app operation,
commit or push. Current tester IPA/AAB and prior performance work are preserved.

## USB save serialization/copying — 2026-10-23 (rejected experiment, no upload)

Baseline is `6348d4b` plus the pending save-validation, hidden-journey and
crossword-rendering changes. The installed ordinary baseline was pulled and its
hash verified against the previous task; it was restored after the experiment.
One new local diagnostic APK uses Java 17, ARM64, `ASOBANA_LIVE_ADS=0`, version
0.1.0 / local versionCode 1 and package `ge.spilogames.asobana.perf`.
Both APKs are non-debuggable/non-profileable and contain demo-ad configuration.

- Ordinary baseline/restored APK: `af112f9b22ca94863178014303a224fffa5b79bccfeec767aac28d78d2949a40`.
- Paired diagnostic APK: `91f5a9801451680773d212f2b2f79d5ed24703b07fbd9078c6ef7981d1de73f4`.

The probe contains both baseline and candidate parsers/repositories, with matched
measurements in a separate scratch database. It never replaces player progress
with a synthetic fixture. The allocation candidate did not consistently improve
save preparation and was reverted; **no runtime optimization from this task is
retained**. New save-safety tests and documentation remain. See
[measurements and limitations](ANDROID_SAVE_SERIALIZATION_PERFORMANCE.md).
No new ordinary release, store build/upload, production-app operation, commit or
push. Current tester IPA/AAB and prior performance changes are preserved.

## USB crossword rendering — 2026-10-23 (perf APKs only, no upload)

Source baseline is `6348d4b` plus the pending save-validation and hidden-journey
changes. Four local APKs use `ge.spilogames.asobana.perf`, version 0.1.0 / local
versionCode 1, Java 17, ARM64 and `ASOBANA_LIVE_ADS=0`. All manifests are
non-debuggable/non-profileable; embedded ad configuration is demo-only.

| Variant         | APK SHA-256                                                        |
| --------------- | ------------------------------------------------------------------ |
| baseline-probe  | `1d4463c8a316420d1e01a492ed105954dc1ec157ece203a8aa1d8faf08f1c346` |
| baseline        | `69b76d8956ed3aba9168c9d02e996f0b7885709c9bf38ca7846b1886d2cdb9ed` |
| candidate-probe | `5395fc3d9d677509f91b5f5155ad63954e6bc31e4f18ec0f6ce4889e1914beea` |
| candidate       | `af112f9b22ca94863178014303a224fffa5b79bccfeec767aac28d78d2949a40` |

The two probes use matching temporary cell-render counters and local board
fixtures without touching saved progress. Their JS commit timings are compared
only with each other. Ordinary baseline/candidate APKs contain no instrumentation
and are measured separately with atrace/gfxinfo. The ordinary candidate replaces
the probe on the Samsung. See [measurements and limitations](ANDROID_CROSSWORD_RENDERING_PERFORMANCE.md).
No ad behavior, production package, current tester IPA/AAB, version number or
store upload changes. No commit or push. Generated native output and summarized
experiment intermediates are removed at completion.

## USB hidden-journey profiling — 2026-10-23 (perf APKs only, no upload)

Baseline is `6348d4b` plus the still-uncommitted save-validation optimization.
All three local APKs use `ge.spilogames.asobana.perf`, version 0.1.0 / local
versionCode 1, Java 17, ARM64 and `ASOBANA_LIVE_ADS=0`. Manifests are
non-debuggable/non-profileable and packaged ad configuration is demo-only.

- Baseline probe: `79d208913f6689542e0103e2580f1d38d71158c497c6515c3e778c26e79432a8`.
- Focused-subscription probe: `d5efd687a06ec3f226e51eecdcf19742e2908bd73ebc181779a02eedd9d28457`.
- Final ordinary candidate: `cfd41f8f838fcce5bd147ead5993316a175a9618a2477f04a132ebf9258c4b2d`.

The probes time journey calculations during controlled in-memory identity updates;
they never write the save. Their timings are compared only with each other.
The final ordinary candidate has all instrumentation removed and replaces the
probe on the physical Samsung. Only the journey observer changes in this step;
prior save work, ads and earlier fixes are preserved. See
[hidden-journey measurements and limitations](ANDROID_HIDDEN_JOURNEY_PERFORMANCE.md).
No store build/upload, production package operation, commit or push. Generated
native output and summarized intermediates are removed; tester IPA/AAB retained.

## USB save-validation profiling — 2026-10-23 (perf APKs only, no upload)

Source baseline `6348d4b` includes the prior selector optimization. The installed
ordinary baseline was reused after verifying its APK hash matched the previous
selector candidate. Two new local APKs use version 0.1.0 / local versionCode 1,
`ge.spilogames.asobana.perf`, Java 17, ARM64 and `ASOBANA_LIVE_ADS=0`.
Both are non-debuggable/non-profileable and contain demo-ad configuration.

- Paired comparison probe: `b290e952b3f6859b20d6c660bf907f22d4d90b97d8044ec0896f66cc5ea6533c`.
  Contains the exact old parser/repository and candidate; alternates them against
  a scratch database, with timing and equality checks. Diagnostic timings only.
- Ordinary final candidate: `9d3f632967a260d303cfeeb5ed04a98ca02d94f99525130173e2a0e1275b1f0f`.
  All instrumentation removed. Only the save-validator implementation changes.

[Samsung measurements, correctness checks and limitations](ANDROID_SAVE_VALIDATION_PERFORMANCE.md)
record two paired probe launches and separate ordinary-release gameplay checks.
The ordinary candidate replaces the probe on the phone. No production package,
ad behavior, tester IPA/AAB, app version, EAS/store build or upload changes.
No commit or push. Generated native output and summarized experiments are removed
at completion; existing perf utilities are retained.

## USB word-submission profiling — 2026-10-23 (perf APKs only, no upload)

Four local ARM64 release variants used Java 17, `ASOBANA_LIVE_ADS=0`, version
0.1.0 / local versionCode 1 and package `ge.spilogames.asobana.perf`. All manifests
were non-debuggable/non-profileable and contained demo-ad configuration. The first
two have temporary JavaScript timing instrumentation and a synthetic scratch-DB
benchmark; their measurements are diagnostic only. The last two contain no probes.

| Variant                             | APK SHA-256                                                        |
| ----------------------------------- | ------------------------------------------------------------------ |
| `e658ad0` selector baseline probe   | `5b67440abf5ba17ca26d46affc5a02caae88e839f4799f87852ec28a8a3a9144` |
| Single-pass selector probe          | `854954875062088e6784d77b09954302aee2560ed145de53ff814e7e777b4098` |
| Ordinary `e658ad0` runtime baseline | `092f46bb7993b91f28424d58093504c2c7a21a4db5a250cbfad812491ddbab41` |
| Ordinary selector candidate         | `cec20d9ba8f6f2ab82e463fe9c59c1d861ee17c6ba9d1f02ede1f479b0d0ce12` |

The final ordinary candidate replaces the probe on the physical Samsung A07.
Only campaign selector algorithms change; ads, saves and existing performance
fixes remain intact. See [word-submission measurements and limitations](ANDROID_WORD_SUBMISSION_PERFORMANCE.md).
No EAS/store build, upload, version increment or production-app operation. The
owner subsequently authorized committing the selector change, docs and tests
directly to master and pushing, with no new builds. Current tester IPA/AAB
artifacts remain unchanged. Generated native build output and summarized
experiment intermediates were removed; the final repository size was 3.4 GB.

## USB banner render isolation — 2026-10-23 (perf APKs only, no upload)

Built the `03edc96` runtime baseline and a candidate that only memoizes the private
banner React subtree. Request, visibility, background teardown and refresh behavior
are unchanged. Both use `ge.spilogames.asobana.perf`, version 0.1.0 / local
versionCode 1, ARM64, Java 17, `ASOBANA_LIVE_ADS=0`, ordinary non-debuggable,
non-profileable release. No timing probes or store builds were used.

- Baseline APK SHA-256: `b8cab8116635f3f4c1052046f52d6cc15a6cdb93d4e7b599557335f3d1695e85`.
- Memo-only APK SHA-256: `9e855735b091641d1999dd40430545004c570bf6d4c60dc73f23d17b2daa3fc1`.
- Physical Samsung A07 comparison and limitations:
  [ANDROID_BANNER_RENDERING_PERFORMANCE.md](ANDROID_BANNER_RENDERING_PERFORMANCE.md).

The memo-only demo perf build replaces the withdrawn reuse candidate on the
phone. The save remains intact. The owner subsequently authorized committing
the rendering change, docs and tests directly to master and pushing, with no new
builds. No version increment or upload; production package and tester IPA/AAB
are untouched.

The banner-reuse experiment below was **withdrawn on 2026-10-23** to preserve
existing ad opportunities. Banner lifecycle behavior was restored to `03edc96`; the later memo-only
rendering change above preserves it.
Demo-ad performance tests did not establish revenue neutrality. No replacement
APK was built at withdrawal time; the later rendering-only comparison above
replaced that demo installation. Production and tester artifacts are unchanged.

## USB banner lifecycle profiling — 2026-10-22 (perf APKs only, no upload)

Rebuilt clean `master` at `03edc96` as the baseline, then built the bounded
Android banner-reuse candidate locally for the physical Samsung Galaxy A07.
Both use `ge.spilogames.asobana.perf`, version 0.1.0 / local versionCode 1,
ARM64, Java 17 and `ASOBANA_LIVE_ADS=0`. Both are ordinary non-debuggable,
non-profileable release APKs; merged manifests and the packaged demo-ad switch
were checked. The production package, app configuration, tester IPA/AAB and
production progress were preserved.

A separate temporary release probe logged only banner mounts and AppState to
attribute deep-link recreation. Its timings were excluded, and its logging was
removed before the candidate build. Baseline and candidate were reinstalled for
a reverse comparison without clearing the perf save. No EAS/store build, upload,
version increment, commit or push was performed.

- Baseline APK SHA-256: `1f2f67c1e1d7a9b9cc8c1d9efcc29307afd1d142a16b1c58737868947e1cf3a1`.
- Immediate-reuse experiment APK SHA-256: `5763623e2902610bf78a579f2995875f8223c192ecafb4494c044f3187414416`. Rejected after worse resume-frame tails.
- Final candidate APK SHA-256: `01bf67642c0892b85ac5175c1a8850e3f8fd80ac0b480c8c48f74fe0b6b316ef`. Retains the banner but waits 800 ms after foregrounding before showing it.
- Measurements, attribution, memory/background checks and limitations:
  [ANDROID_BANNER_PERFORMANCE.md](ANDROID_BANNER_PERFORMANCE.md).

That final candidate remained installed until the memo-only follow-up above. Task APKs, probe source,
traces and other intermediates were removed after summarizing; generated native
projects and dependency Android build/C++ output were also removed.

## USB board-entry profiling — 2026-10-22 (perf APKs only, no upload)

Committed/pushed the prior rewarded-preload work as `54101da`, then rebuilt it
as the baseline. Tested on the Samsung Galaxy A07 with the isolated package
`ge.spilogames.asobana.perf`, version 0.1.0 / local versionCode 1, ARM64, Java 17
and `ASOBANA_LIVE_ADS=0`. All timed builds used normal non-debuggable release
settings. A separate temporary shell-profileable probe was used only for Java
method attribution and was removed before subsequent builds.

Build variants: baseline; shell-profileable probe; temporary icon-disabled
control; pre-rendered-icon candidate; final source cleanup. Reinstalled baseline
and candidate for reverse comparisons. The final release perf APK remains on the
phone; real app data and existing IPA/AAB tester artifacts are untouched.

Median first-board draw recording fell from 37.18 to 20.08 ms (46%); whole-frame
results remain variable. `npm run check` passed (378 tests, 51 suites, 500 levels
solved). See [the board-entry report](ANDROID_BOARD_ENTRY_PERFORMANCE.md) for
all samples, the correction to earlier debug-enabled measurements, functional
checks and limitations. No store version increment or upload. Temporary builds,
traces and native build folders are removed after recording results.

## USB rewarded-preload profiling — 2026-10-22 (perf APKs only, no upload)

Rebuilt `master` at `6538781`, then tested deferred rewarded preloading on the
Samsung Galaxy A07 using `ge.spilogames.asobana.perf`, version 0.1.0 / local
versionCode 1, ARM64, Java 17 and `ASOBANA_LIVE_ADS=0`. Paired baseline/candidate
builds used release JS with temporary native debugging for repeatable perf-only
save fixtures. Reinstalled the baseline for reverse comparisons, then rebuilt
the candidate with ordinary non-debuggable release settings for the final check.
No EAS/store version change or upload; existing IPA/AAB files remain.

Low-coin entry peaked at 138–169 ms before and 127–131 ms after. Victory's peak
callback did not consistently improve, but its ad request moved past the entrance
animations and was skipped entirely when continuing quickly. An early explicit
watch still opened a demo ad. Remaining board and full-screen-ad spikes are
recorded in [the full report](ANDROID_REWARDED_PRELOAD_PERFORMANCE.md).
`npm run check` passed (372 tests, 50 suites, all 500 levels solved). Temporary
APKs, traces and native build folders are removed after recording the results.

## USB animation profiling — 2026-10-22 (perf APKs only, no upload)

Rebuilt `master` at `26c6475`, then compared local Gradle release APKs on the
Samsung Galaxy A07 using `ge.spilogames.asobana.perf`, version 0.1.0 / local
versionCode 1, ARM64, Java 17 and `ASOBANA_LIVE_ADS=0`. All used the normal
non-debuggable release configuration. No EAS/store version change or upload.

Builds covered the baseline; transform-only shuffle; cached wheel plate;
a temporary canvas-disabled control; cached background; combined caches;
a rebuilt baseline; plate cache with memoization; and the final simplified
plate-cache wrapper. Only the bounded wheel cache and memoization remain.
The final perf app was used to solve level 2 and verify its victory screen.
The real app and progress were untouched; existing IPA/AAB artifacts remain.

`npm run check` passed (358 tests, 49 suites, 500 levels solved). Full results,
including the limited GPU improvement and variable frame times, are recorded in
[the animation report](ANDROID_ANIMATION_PERFORMANCE.md). Temporary builds,
traces and generated native directories are removed after profiling.

## USB transition diagnostics — 2026-10-22 (perf APKs only, no upload)

Local Gradle test APKs were built from `master` at `04a9ba3`, then with the
uncommitted Reanimated Android mounting guard. All used the separate package
`ge.spilogames.asobana.perf`, version 0.1.0 / local versionCode 1, ARM64 and
`ASOBANA_LIVE_ADS=0` (demo ad units). No EAS version was incremented, and no
IPA, AAB, TestFlight or Play upload was made. Existing tester artifacts stay.

Variants: ordinary release baseline; baseline and patched release-JS builds
with temporary native debugging enabled for repeatable perf-save fixtures;
a temporary control without automatic hint-ad preloading; and a final ordinary
release perf APK with normal ad behavior and only the native guard. The first
Java 25 build attempt failed at CMake configuration; successful builds used the
installed Java 17 toolchain. The real app and its progress were untouched.

The native regression test reproduces missing-view updates before the patch
and passes after it. Root `npm run check` passed (358 tests in 49 suites, all
500 levels solved). Full measurement methodology, results, remaining frame
costs and cleanup are in [the phone report](ANDROID_TRANSITION_PERFORMANCE.md).
Temporary APKs, traces and native build directories are removed at task end.

## Shared banner beta — 2026-10-22 (uploaded, Apple processing)

**Asobana 0.1.0 (5)**, built locally with the `beta` profile (real AdMob app
IDs, demo ad units) from `master` at `abe58d9`. Android versionCode 7 was built
from the same commit for Play internal testing. Non-interactive `eas submit`
uploaded it to App Store Connect app `6825282360` (submission
`b3d4f4c5-fefd-4dbb-bd7b-4c1e072004d7`); Apple's processing was not confirmed when
this was written.

New since build 4: one shared ad banner, created after the first level's
transition and reused across levels and the victory screen. On a Samsung Galaxy
A07 the old per-level banner cost a ~134 ms web-view first draw during
transitions and ad-SDK lock waits of up to 117 ms on taps; the first
journey-to-level tap went from six frames over 100 ms to one.

- IPA check: Asobana 0.1.0 (5), bundle `ge.spilogames.asobana`,
  `GADApplicationIdentifier` `ca-app-pub-8935292332039677~8334673550`, embedded
  `extra.liveAds` false; the Hermes bundle contains the shared banner. Size:
  56,968,176 bytes; SHA-256:
  `3a6e6e015b038fab8893e16cae3483f9122d41067d939c95598584a3be109fef`.
- Preflight: root check (358 app tests in 49 suites, all 500 levels solved,
  TypeScript/ESLint/formatting) passed. Measured on the A07 with a side-by-side
  release build; this IPA has not been installed on an iOS device or simulator.
- Evidence (git-ignored): `artifacts/asobana-0.1.0-beta-banner.ipa`,
  `artifacts/asobana-ios-beta-banner.log`,
  `artifacts/asobana-ios-beta-banner-submit.log`.

## Smoother screens beta — 2026-10-22 (uploaded, Apple processing)

**Asobana 0.1.0 (4)**, built locally with the `beta` profile (real AdMob app
IDs, demo ad units) from branch `live-ads-android-performance` at `06472eb`.
Android versionCode 6 was built from the same commit for Play internal testing.
Non-interactive `eas submit` uploaded it to App Store Connect app `6825282360`
(submission `4056a56f-4a23-44fb-ada6-ef3e586af6e9`); Apple's processing was not
confirmed when this was written.

New since build 3:

- a correct word no longer flashes the previous word's red "not here" while it
  saves; the strip keeps the submitted word until its own result arrives;
- the wheel accepts the next word while the previous one is saving;
- backdrops and the wheel plate draw with native gradients, borders and a
  repeating lattice tile instead of full-screen SVG, which Android rasterized in
  software as each screen opened (worst "გაგრძელება" transition frames on an
  emulator 59–117 ms → 46–54 ms).

- IPA check: Asobana 0.1.0 (4), bundle `ge.spilogames.asobana`,
  `GADApplicationIdentifier` `ca-app-pub-8935292332039677~8334673550`, embedded
  `extra.liveAds` false; the Hermes bundle contains the native gradients and the
  lattice tile. Size: 56,965,596 bytes; SHA-256:
  `6205fd140b31e004300b0cc8c09092cda59397575a4ccfe9a525061c732d13dc`.
- Preflight: root check (357 app tests in 49 suites, all 500 levels solved,
  TypeScript/ESLint/formatting) passed. Android release builds were exercised on
  an emulator; this IPA has not been installed on an iOS device or simulator.
- Evidence (git-ignored): `artifacts/asobana-0.1.0-beta-smooth.ipa`,
  `artifacts/asobana-ios-beta-smooth.log`,
  `artifacts/asobana-ios-beta-smooth-submit.log`.

## Live-ads, Android and performance beta — 2026-10-22 (uploaded, Apple processing)

**Asobana 0.1.0 (3)**, built locally with Xcode 26.6 / iOS 26.5 SDK
(`eas build --local --profile beta`) from branch
`live-ads-android-performance` at `284ac1a`. TestFlight builds use the new
`beta` profile: the owner's real AdMob app ID with Google's demo ad units, so
testers can tap ads without risking the AdMob account. Only a `production`
build serves live ads. Non-interactive `eas submit` uploaded it to App Store
Connect app `6825282360` (submission `712ef18f-1cdd-4f6a-82e4-8893c7933772`);
Apple's processing was not confirmed when this was written.

New since build 2:

- live AdMob setup behind the build profile, Google's UMP consent flow before
  any ad loads, and a Settings entry to change consent where required;
- the rewarded ad pays 50 coins instead of 75;
- launch no longer re-runs the 500-level release gates or parses 28 historical
  packs (first frame 3.2 s → 0.37 s on an Android emulator);
- icons, coins, backdrops, the wheel plate and postcard stamps draw with SVG
  instead of separate Skia canvases (game screen 11 Android texture layers → 1);
- the Android-only fixes (tab bar crash, splash circle) are in the shared code
  but do not change iOS behaviour.

- IPA check: Asobana 0.1.0 (3), bundle `ge.spilogames.asobana`,
  `GADApplicationIdentifier` `ca-app-pub-8935292332039677~8334673550`, embedded
  `extra.liveAds` false, Hermes bundle includes `react-native-svg` and revision 29. Size: 56,960,237 bytes; SHA-256:
  `24473f5ab4d950d85c48a46785566d7238395d0054013e74c8a8e2d676efc934`.
- Preflight: root check (353 app tests in 48 suites, all 500 levels solved,
  TypeScript/ESLint/formatting) passed. Android release builds were exercised on
  an emulator; this IPA has not been installed on an iOS device or simulator.
- Evidence (git-ignored): `artifacts/asobana-0.1.0-beta-2026-10-22.ipa`,
  `artifacts/asobana-ios-beta-2026-10-22.log`,
  `artifacts/asobana-ios-beta-2026-10-22-submit.log`.

## Revision 29 beta — 2026-10-21 (uploaded, Apple processing)

**Asobana 0.1.0 (2)** is the first upload to the new App Store Connect app
**`6825282360`** (bundle `ge.spilogames.asobana`). It was built locally with
Xcode 26.6 (`eas build --local`, no Expo cloud build credits) from master
`e2bbd70`. EAS remote build numbers are per bundle ID: a first attempt, blocked
before compiling because the new bundle ID had no credentials yet, reserved
number 1, so this is build 2.

The non-interactive `eas submit` could not link an App Store Connect API key to
the new app ("cannot be set up in --non-interactive mode"). The owner then ran
`eas submit` interactively from `mobile/`, reused the team's existing API key and
reported the submission done. Apple's processing was not confirmed when this was
written.

New since build 13 (old record):

- content revision 29: all 500 levels rebuilt under today's rules (5/6/7 tiles,
  at most five rows, 36 pt iPhone SE cells) with 2,318 approved words; 1,954
  distinct required words, 21.84% repeated slots, minimum gap 75;
- 31 new stops at levels 346–500 (France 12, Switzerland 4, Germany 10,
  Austria 5) with paintings, postcards, owner-approved captions and facts;
- revisions 27 and 28 (Portugal and Morocco) and the separated test banner,
  which were not in build 13 either.

Because this is a new app record, testers install it separately and start with
a fresh save; the old GeoWords record keeps builds 1–13.

- IPA check: Asobana 0.1.0 (2), bundle `ge.spilogames.asobana`, iOS 16.4
  minimum, `GADApplicationIdentifier` set to Google's sample iOS app ID (demo
  ads only), 200 scene JPEGs; the Hermes bundle contains revision 29 (level
  `ka-500`, the new stop IDs). Size: 56,065,720 bytes; SHA-256:
  `635f30ea5aa120091b13ae2106b878fff7032cb63ccb3e63bd0197ec4be27f88`.
- Preflight: root check (345 app tests in 45 suites, all 500 levels solved,
  TypeScript/ESLint/formatting), generator checks (166 tests, Ruff, formatting,
  Mypy) and `expo export --platform ios` passed. This IPA has not been installed
  on a device.
- Evidence (git-ignored): `artifacts/asobana-2026-10-21-rev29.ipa`,
  `artifacts/asobana-2026-10-21-rev29-build.log`,
  `artifacts/asobana-2026-10-21-rev29-submit.log` (the failed non-interactive
  attempt).

## Bundle ID change — 2026-10-20 (done 2026-10-21)

Done on 2026-10-21: the owner set up the production credentials (new App Store
provisioning profile, existing distribution certificate) and created the App
Store Connect app `6825282360`, now `submit.production.ios.ascAppId` in
`mobile/eas.json`. The original notes follow.

The owner moved the app to **`ge.spilogames.asobana`** (iOS bundle ID and
Android package; URL scheme `asobana`). Apple does not let an App Store app
change its bundle ID, so the next build needs a **new App Store Connect app
record**. Builds 0.1.0 (1)–(13) below stay under the old record `6822637685`
(`dev.geowords.prototype`); testers install the new app separately and start
with a fresh save. The Expo project (`geowords`, same project ID) and the
internal content-pack ID are unchanged.

Before the next upload, the owner (signed in to Apple) needs to:

1. let EAS register the new bundle ID and create its App Store provisioning
   profile, e.g. by running once, interactively from `mobile/`:
   `npx eas-cli@latest credentials --platform ios` (production profile);
2. create the App Store Connect app for `ge.spilogames.asobana` (Apps → + →
   New App), then put its Apple ID in `mobile/eas.json` as
   `submit.production.ios.ascAppId` (the old value was removed so no build of
   the new ID is sent to the old record).

After that, the local build and EAS Submit commands are unchanged.

## Rewarded demo ads beta — 2026-10-19 (uploaded, Apple processing)

**Asobana 0.1.0 (13)** was built locally with Xcode 26.6 and uploaded to App
Store Connect at the owner's request. **No Expo cloud build credits were used:**
`eas build --local` ran the native build on this Mac and EAS Submit uploaded the
signed IPA. Build numbering advanced from 12 to 13. EAS Submit reported the upload
complete; Apple's processing was not confirmed when this was written.

New since build 12, all from the working tree (uncommitted changes included):

- content revision 26: 295 levels rebuilt on 1,720 approved required words
  (owner replacement review, expansion batches 06 and 07); saves from revisions
  1–25 migrate;
- the owner-approved economy: 200 starting coins, 20 per level, 20 per letter
  hint, 50 per word hint (existing balances kept);
- optional Google AdMob **demo** rewarded ads: +75 coins on the coins screen and
  on unaffordable hint buttons (gold `▶ +75` pill);
- the optional `▶ ×2` ad on the level-complete screen (+20 once per level).

Ads use Google's sample app ID and `TestIds.REWARDED` only, so testers see
"Test mode" ads; there is no ATT prompt, consent flow or live ad unit.

- [Submission](https://expo.dev/accounts/gkhunashvili/projects/geowords/submissions/ee2c02ab-a183-46c1-85d3-3e13d8e5795d).
- [TestFlight](https://appstoreconnect.apple.com/apps/6822637685/testflight/ios).
- IPA check: Asobana 0.1.0 (13), bundle `dev.geowords.prototype`, iOS 16.4
  minimum, `SplashScreen` launch storyboard, `GADApplicationIdentifier` set to
  Google's sample iOS app ID, `GoogleMobileAdsResources.bundle`, no tracking
  usage description, 118 scene JPEGs; the embedded Hermes bundle contains the
  level-doubling code. Size: 41,813,636 bytes; SHA-256:
  `799df991a359aa08136c8995a2a539bacb73c361d2d903768fbeddf2682d6e3f`.
- Expo doctor exited non-zero during the build (the known SDK patch-version
  warning); it did not stop the build.
- Preflight: root check (324 app tests in 41 suites, all 295 levels solved,
  TypeScript/ESLint/formatting) and generator checks (146 tests, Ruff, formatting,
  Mypy) passed. The production build itself bundled the JS; no separate
  `expo export` was run. Demo ads and the ×2 offer were tried in the development
  build on an iPhone 17 simulator; this IPA has not been installed on a device.
- Evidence (git-ignored): `artifacts/asobana-2026-10-19-ads.ipa`,
  `artifacts/asobana-2026-10-19-local-build.log`,
  `artifacts/asobana-2026-10-19-submit.log`.

## Spain campaign beta — 2026-10-18 (uploaded, Apple processing)

**Asobana 0.1.0 (12)** was built locally with Xcode 26.6 and successfully uploaded
to App Store Connect at the owner's explicit request. **No Expo cloud build credits
were used.** `eas build --local` orchestrated the native build on this Mac; the
existing credentials service supplied signing and EAS Submit uploaded the signed
IPA. Build numbering advanced from 11 to 12. The upload completed successfully;
Apple's completed processing was not yet confirmed at the final status check.
The status endpoint still listed build 11 as the latest available internal build.

This release includes content revision 23: **295 levels / 59 journey stops**, the
new Malta, Tunisia and Spain destinations and artwork, the latest approved singular
vocabulary, repetition optimizations and the owner-selected branding. All existing
save identifiers are preserved; migration supports content revisions 1–22.
Existing uncommitted project changes were included and preserved.

- [TestFlight](https://appstoreconnect.apple.com/apps/6822637685/testflight/ios).
- [Submission](https://expo.dev/accounts/gkhunashvili/projects/geowords/submissions/d3bb208f-001e-431f-8c96-a6b1ce98262a).
- Verified 312 source/content/asset files against the isolated build copy. Only
  temporary package run scripts changed during native prebuild; gameplay, content,
  vocabulary and artwork matched. All workspace source hashes remained unchanged.
- IPA inspection confirmed Asobana, version 0.1.0 (12), bundle
  `dev.geowords.prototype`, iOS 16.4 minimum, the launch storyboard, embedded
  offline Hermes bundle, 118 scene JPEGs and four Georgian fonts. All 22 new-country
  JPEGs match their source assets exactly. No microphone/background-audio keys.
- IPA size: **39,715,005 bytes**; SHA-256:
  `7a30dd8823e7236893ec25f92ac4883c1131a5f27778bca4eb9d68530b6b11a8`.
- Preflight passed: root check with 264 app tests, all 295 levels solved,
  TypeScript/ESLint/formatting; 140 generator tests, Ruff and Mypy; iOS export.
  This release has not been installed or playtested on a physical device.
- Local evidence (git-ignored): `artifacts/asobana-v23.ipa`,
  `artifacts/testflight-v23-local-build.log`, `artifacts/testflight-v23-submit.log`,
  `artifacts/testflight-v23-source-checks.json`, `artifacts/testflight-v23-ipa-info.json`
  and `artifacts/apple-testflight-v23-status.json`.

## Branding update — 2026-10-17

The product name is **Asobana** (**ასობანა** in the Georgian interface).
The source app display name and home-screen title have been updated. Existing
Expo project, bundle, URL scheme, content-pack and SQLite identifiers remain
stable for updates and saved progress. The root workspace Expo configuration
belongs to a separate project; releases continue to run from `mobile/`.

The owner-selected concept 01 connected A is now the source app icon and home
emblem. The brand kit includes SVG masters, transparent PNG symbols and wordmarks,
plus single-colour variants. Icon validation confirmed 1024 × 1024 RGB with no
alpha; the PNG branding exports retain transparency. Small-size previews were
visually checked at 96, 64, 48 and 32 px. The checks below also passed after logo
integration, with the new icon included in the iOS export.

Validation passed: resolved Expo configuration reports `Asobana`; TypeScript,
ESLint, formatting, all 14 presentation tests and an iOS bundle export passed.
No native build, device test or TestFlight upload was performed. Installed copies
need a new native build to show the updated app name under the icon.
The App Store Connect record's temporary name also needs a separate metadata
update; the release records below retain their historical names.

## Tutorial beta — 2026-10-17 (uploaded, Apple processing)

**Version 0.1.0 (11)** was built locally from master `90b33d7` and uploaded to
App Store Connect on 2026-10-17 at the owner's request. EAS Submit reported the
upload complete; Apple's processing status was not confirmed when this was
written. The build ran on this Mac like build 10, so it used no Expo cloud build
credits. The upload went through EAS Submit with the App Store Connect key held on EAS.

New since build 10, all from master:

- the player's place is kept and levels are named by their stop (`00cf4bf`);
- postcard captions for the 38 new stops (`318a491`);
- the app opens on the journey path with one bottom bar (`0e2a6ca`);
- place facts and the perforated postcard stamp (`1b81277`);
- the first-time tutorial and Settings "როგორ ვითამაშოთ" (`90b33d7`).

- [Submission](https://expo.dev/accounts/gkhunashvili/projects/geowords/submissions/3bc4882a-c9bf-4da4-a4de-14819eb3c954).
- [TestFlight](https://appstoreconnect.apple.com/apps/6822637685/testflight/ios).
- Remote build number incremented from 10 to 11. Xcode 26.6. Expo doctor
  flagged four Expo packages one patch behind SDK 57 (`expo`, `expo-constants`,
  `expo-linking`, `expo-router`); this warning doesn't stop the build, and the
  packages were left as they were.
- IPA check: display name Asobana, 0.1.0 (11), bundle `dev.geowords.prototype`,
  iOS 16.4 minimum, `SplashScreen` launch storyboard, embedded Hermes bundle
  (contains the tutorial and place-fact code), 96 scene JPEGs, four Georgian
  fonts. Size: 35,713,945 bytes.
- Evidence (git-ignored): `artifacts/asobana-0.1.0-11.ipa`,
  `artifacts/asobana-11-local-build.log`, `artifacts/asobana-11-submit.log`.
- Preflight on `90b33d7`: root check (198 app tests, all 240 level solves,
  type/lint/format) and an iOS export passed. Generator tests were not rerun
  (no content or generator change). The tutorial passed in Expo Go on an iPhone
  17 simulator; this native build has not yet been installed on a device.

## Journey beta — 2026-10-17 (uploaded, Apple processing)

**Version 0.1.0 (10)** was built locally and uploaded to App Store Connect on
2026-10-17; Apple's processing status was not yet confirmed when this was
written. Expo cloud build credits were used up, so the build ran on this Mac
(the same flow as Dayboo): with Homebrew CocoaPods/fastlane on the path,
`npx eas-cli build --profile production --platform ios --local --non-interactive
--output <ipa>` from `mobile/`, then `npx eas-cli submit --platform ios --profile
production --path <ipa> --non-interactive`. Local builds use no cloud build
credits; signing and the App Store Connect key come from EAS credentials.

Contents: content revision 13 (240 levels, 48 journey stops), the journey path,
all 48 stop paintings, the animated Asobana logo, the navy launch splash with
ასობანა, and the Spilo Games studio credit. Existing uncommitted work was included.

- [Submission](https://expo.dev/accounts/gkhunashvili/projects/geowords/submissions/471d7878-0181-4448-b0cd-0f52fb266b40).
- [TestFlight](https://appstoreconnect.apple.com/apps/6822637685/testflight/ios).
- Remote build number incremented from 9 to 10. Xcode 26.6.
- IPA check: display name Asobana, 0.1.0 (10), bundle `dev.geowords.prototype`,
  iOS 16.4 minimum, `SplashScreen` launch storyboard, embedded Hermes bundle,
  96 scene JPEGs (48 stops), four Georgian fonts, studio and splash images, no
  microphone or background-audio keys. Size: 35,701,257 bytes.
- Evidence (git-ignored): `artifacts/asobana-0.1.0-journey.ipa`,
  `artifacts/asobana-journey-local-build.log`, `artifacts/asobana-journey-submit.log`.
- Preflight: root check (177 app tests, all 240 level solves, type/lint/format)
  and 84 generator tests passed. Simulator checks in Expo Go only; the native
  splash and the first native run are untested until this build is installed.

## Previous beta — 2026-10-16

**Version 0.1.0 (9) is VALID / IN_BETA_TESTING.** Apple recorded the upload at
2026-10-16 11:30:22 Asia/Tbilisi. The completed submission targets the existing
internal `Team (Expo)` group. No public App Store release or external beta review
was submitted.

This release contains content revision 12: 50 rebuilt puzzles with 250 unique
everyday required answers, including 74 five-letter and 21 six-letter words.
The everyday allowlist keeps uncommon words bonus-only; pronouns, excluded
verb/action forms and name-only entries remain blocked. Later levels use seven
tiles. Save migration preserves progress, coins, hints, postcards and bonus rewards.

- [Submission](https://expo.dev/accounts/gkhunashvili/projects/geowords/submissions/513ae569-65db-4c35-a33f-8ac1491df5df).
- [TestFlight](https://appstoreconnect.apple.com/apps/6822637685/testflight/ios).
- Signed locally with the existing release toolchain; production build numbering
  incremented from 8 to 9. Existing uncommitted game changes were included.
- Verified 133 source/asset files against the temporary build copy. Only the
  temporary package's iOS/Android scripts changed during Expo prebuild.
- IPA verification confirmed version/build/bundle ID, embedded offline bundle,
  all scene images and four Georgian fonts. Size: 26,926,097 bytes.
- Evidence: `artifacts/testflight-v12-source-checks.json`,
  `artifacts/testflight-v12-ipa-info.json`, `artifacts/testflight-v12-submission.json`
  and `artifacts/apple-testflight-v12-status.json` (git-ignored).
- Preflight: 161 app tests, 80 generator tests, all 50 engine solves, static checks
  and iOS export passed. No new native device run for this content revision.

## Previous beta — revision 10, 2026-10-16

**Version 0.1.0 (8) is VALID / IN_BETA_TESTING.** Apple recorded the upload at
2026-10-16 08:37:01 Asia/Tbilisi. The completed submission targets the existing internal
`Team (Expo)` group. No public App Store release or external beta review was submitted.

This release contains content revision 10: the expanded 1,202-word playable
vocabulary, 250 unique required answers, revised chapter pacing, ten destination
postcards and the persistent bonus meter (ten finds earn one free letter hint).
Existing saves retain progress, earned coins and paid hints.

- [Submission](https://expo.dev/accounts/gkhunashvili/projects/geowords/submissions/684a7bde-13e5-4ca9-8671-4c045f5965a5).
- [TestFlight](https://appstoreconnect.apple.com/apps/6822637685/testflight/ios).
- Signed locally using the existing release toolchain in `artifacts/release-tools/env.sh`.
  The production profile incremented the remote build number from 7 to 8.
- Compared 126 source/asset files with the temporary build copy. Only the temporary
  package's iOS/Android script commands were changed by Expo prebuild; gameplay,
  content and artwork matched. Existing uncommitted work was included and preserved.
- IPA inspection verified version/build/bundle ID, the embedded offline Hermes
  bundle, all scene images and four Georgian fonts. Size: 26,903,375 bytes.
- Evidence: `artifacts/testflight-v10-source-checks.json`,
  `artifacts/testflight-v10-ipa-info.json`, `artifacts/testflight-v10-submission.json`
  and `artifacts/apple-testflight-v10-status.json` (all git-ignored).
- Preflight: 148 app tests, 76 generator tests, all 50 engine solves, type/lint/format
  checks and iOS export pass. The isolated iPhone flow verifies earning/using a
  free hint, chapter completion, postcard viewing and album collection.

## Release configuration

- Expo project: [@gkhunashvili/geowords](https://expo.dev/accounts/gkhunashvili/projects/geowords).
- EAS project ID: `99b3845a-54a7-4cdc-9a58-1fcd9a5ac298`.
- iOS bundle identifier: `dev.geowords.prototype`.
- Apple developer team: Dinein group, LLC (`J5L83L4UNV`).
- App Store Connect app: `6822637685`.
- `mobile/eas.json` defines a production **store** distribution profile,
  the latest iOS build image, remote build numbering and automatic incrementing.
- Apple distribution certificate is reused; a new provisioning profile was
  created for this bundle ID. EAS manages signing and submission credentials;
  private keys and passwords are not stored in this repository.
- `mobile/assets/icon.svg` is the owner-selected concept 01 connected A in gold
  on navy. `icon.png` is 1024 × 1024 RGB with no alpha or pre-rounded corners.
  Regenerate the icon and advertising variants with `node scripts/build-branding.cjs`
  in an environment with `sharp` available. The home screen uses the same icon.
  This logo source change requires a new native build to update installed icons;
  it has not been uploaded to TestFlight.
- Audio is foreground playback only. Unused microphone/recording/background-audio
  permissions are disabled in the Expo plugin configuration.
- Export compliance declares no non-exempt encryption. The game uses local SQLite
  and bundled assets, with no custom encryption implementation.

## First beta — 2026-10-14

Apple confirmed **VALID / READY_FOR_BETA_TESTING** for version **0.1.0 (1)**
on 2026-10-14. EAS build and submission both finished successfully; Apple recorded
the upload at **12:03:19 Asia/Tbilisi**. The build is ready for internal testing.
External beta review has not been submitted.

Version **0.1.0**, build **1** contains the current Claude UI, bundled Georgian
fonts, the store icon and all 50 levels with four or five target answers each.
The build archive includes uncommitted UI files; those source changes were
preserved in the workspace. Archive inspection and selected source hashes are
saved under ignored `artifacts/testflight-source*`.

- [Build](https://expo.dev/accounts/gkhunashvili/projects/geowords/builds/8f129878-20c9-41ea-aa76-26b16c360f39).
- [Submission](https://expo.dev/accounts/gkhunashvili/projects/geowords/submissions/861826ed-f245-4d5c-99dd-1c3565d12541).
- [App Store Connect TestFlight](https://appstoreconnect.apple.com/apps/6822637685/testflight/ios).
- Internal group `Team (Expo)` was created, with the account owner enabled for testing.
- App Store Connect assigned the temporary name **GeoWords (dca1bf)** because
  `GeoWords` was already taken. The installed application name remains `GeoWords`.
  Rename the store record when final branding is chosen.

The initial `--what-to-test` auto-submit attempt was rejected because Expo's
changelog submission feature requires its Enterprise plan. A separate submission
was scheduled for the same build without that optional flag. No second build
or subscription upgrade was required.

The signed IPA was built successfully with **Xcode 26.6 / iOS 26.5 SDK**.
Its manifest confirms version 0.1.0 (1), bundle ID `dev.geowords.prototype` and
iOS 16.4 minimum. Binary inspection verified an embedded Hermes `main.jsbundle`
and all four Georgian font files, with no microphone/background-audio permission.
The archive is 23,781,506 bytes; local verification evidence is under ignored
`artifacts/geowords-0.1.0-build-1.ipa` and `artifacts/ipa-info.json`.

## Second beta — 2026-10-14

Apple confirmed **VALID / IN_BETA_TESTING** for version **0.1.0 (2)**.
Both EAS build and submission finished successfully. Apple recorded the upload
on 2026-10-14 at **19:14:54 Asia/Tbilisi**; availability was verified on 2026-10-15.

Version **0.1.0 (2)** builds source commit `c6eb3d1` with the revision 4 themed
campaign and gradual difficulty progression. It retains the existing app ID,
bundle identifier, signing credentials and TestFlight destination.

- [Build](https://expo.dev/accounts/gkhunashvili/projects/geowords/builds/3de76f78-53f8-4de0-b485-e5a94dacf913).
- [Submission](https://expo.dev/accounts/gkhunashvili/projects/geowords/submissions/ca5e2e3b-d6cd-40e3-9b91-b0f02257ef67).
- Current campaign: 50 themed levels; 35 three-answer, ten four-answer and five
  five-answer boards, 320 reference-checked dictionary entries. This is the
  committed pacing change described in [EXPANDED_CONTENT.md](EXPANDED_CONTENT.md).
- Preflight: 92 Jest tests in ten suites, 56 Python tests, strict TypeScript,
  ESLint, all 50 engine solutions and Prettier passed.
- Archive comparison verified the current content, UI, migration code, fonts,
  app icon and established GeoWords project/bundle IDs. Evidence is under ignored
  `artifacts/testflight-build-2-source*`.
- Signed IPA verification confirmed version 0.1.0 (2), the existing bundle ID,
  embedded offline Hermes bundle and all four Georgian fonts. It uses Xcode 26.6 /
  iOS 26.5 SDK with iOS 16.4 minimum; size is 23,804,015 bytes. Evidence: ignored
  `artifacts/geowords-0.1.0-build-2.ipa` and `artifacts/ipa-build-2-info.json`.
- Additional root-level `app.json` / `eas.json` point to a separate workspace
  project. This release runs from `mobile/` and preserves those existing files.

## Subsequent uploads

Use the local build flow while the owner's Expo cloud build quota is exhausted.
Run from `mobile/`; `--local` is required and no cloud build should be scheduled.
The CLI retrieves the existing signing credentials and build number, then Xcode
compiles on this Mac. EAS Submit only uploads the resulting IPA.

```sh
PATH="/opt/homebrew/bin:$PATH" eas build --platform ios --profile beta --local --non-interactive --output ../artifacts/asobana-next.ipa
eas submit --platform ios --profile production --path ../artifacts/asobana-next.ipa --non-interactive --wait
```

To submit an already built artifact, use its exact build ID:

```sh
eas submit --platform ios --profile production --id BUILD_ID
```

Use `eas submit:status --platform ios --non-interactive` to check Apple's processing
state. A successful EAS upload and Apple's completed processing are separate
states. Internal testing uses the existing group; public/external testing requires
separate group setup and Apple's beta review. Uploading to TestFlight does not
publish an App Store release. See [Expo's TestFlight guide](https://docs.expo.dev/submit/testflight/).

Preflight checks for the first beta passed: 72 Jest tests, all 50 level solutions,
strict TypeScript, ESLint and Prettier. The iOS simulator previously verified
save migration, target/bonus separation, completion, unlock and process restart.
The first physical-device install through TestFlight remains a tester check.
