# Asobana TestFlight

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
PATH="/opt/homebrew/bin:$PATH" eas build --platform ios --profile production --local --non-interactive --output ../artifacts/asobana-next.ipa
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
