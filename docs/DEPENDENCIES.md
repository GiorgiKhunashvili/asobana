# Dependency compatibility and advisory review

Checked 2026-10-14 using official SDK release notes, Expo's bundled native-module
map, `expo install --check`, Expo Doctor, native exports and automated tests.

- [Expo SDK 57](https://expo.dev/changelog/sdk-57): stable registry tag was 57.0.28.
- [Skia for SDK 57](https://docs.expo.dev/versions/v57.0.0/sdk/skia/): 2.6.2.
- [Reanimated for SDK 57](https://docs.expo.dev/versions/v57.0.0/sdk/reanimated/): 4.5.1;
  accompanying Worklets 0.10.1 and Gesture Handler ~2.32.0 are from Expo's map.
- React 19.2.3, RN 0.86.3, Expo Router ~57.0.26 and SQLite ~57.0.4 are from that map.
- React and React DOM are overridden to 19.2.3 at workspace root to prevent npm's
  broad transitive peer ranges from installing duplicate newer React copies.
- Jest 29 with jest-expo ~57.0.6 and react-test-renderer 19.2.3; Testing Library
  13.3.3 uses that matching renderer. The renderer is pinned exactly.

`npm audit` reported transitive advisories through braces, node-forge, sprintf-js,
uuid and decode-uri-component. Non-breaking `npm audit fix` did not eliminate them.
The audit's suggested forced changes include SDK downgrades or unsupported native
version changes, so no forced upgrade/downgrade was applied. Audit totals include
many propagated dependent packages, not that many independent vulnerabilities.
This is a release-readiness follow-up; passing functional checks is not a claim of
zero known advisories. Recheck patched releases and Expo compatibility before shipping.

The Python generator uses a lockfile and no runtime dependencies. Development tools
are Pytest, Ruff, Mypy and jsonschema. Font assets preserve their OFL license;
vocabulary data preserves its separate CC BY-SA attribution.
