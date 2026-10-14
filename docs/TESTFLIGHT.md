# GeoWords TestFlight

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
- `mobile/assets/icon.svg` adapts the existing seven-arm rosette and theme palette.
  `icon.png` is 1024 × 1024 with no alpha channel. Regenerate from the SVG with
  `npm exec --yes --package sharp-cli -- sharp --input mobile/assets/icon.svg --output mobile/assets/icon.png flatten`.
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

## Subsequent uploads

Run from `mobile/`:

```sh
eas build --platform ios --profile production --auto-submit
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
