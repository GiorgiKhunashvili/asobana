# Reanimated 4.5.1 Android synchronous-props backport

`react-native-reanimated+4.5.1.patch` backports the Android guard from
[upstream PR #10435](https://github.com/software-mansion/react-native-reanimated/pull/10435),
merged as `2665e3a93bf64eb62746d6b94e26522b3d57afa4`. It retains 4.5.1's
React Native version gate. Reanimated is MIT licensed; its license remains in
the installed package.

On RN 0.86 the reflective update path bypasses Fabric's view-existence check.
During navigation, buffered updates for removed views throw and print a full
stack on the UI thread, repeatedly within a draw pass. Check `getViewExists`
before applying each update. Missing views are skipped; the registry/commit
hook still carries props for views that have not mounted yet. Unexpected
failures retain a concise warning, and processing continues for later tags.
The older RN path and iOS are unchanged.

The root `postinstall` applies this patch with `--error-on-fail`, including on
EAS installs. Remove it only after verifying that the Expo-compatible installed
version includes the upstream fix. The checked 4.5.5 package still lacks it.

Run `npm run test:native` with Java 17+ after an Android build has cached Kotlin
2.1.20. The runner compiles the installed `NativeProxy` reflection/update methods
into a JVM harness with fake Fabric mounting and log boundaries. It tests missing
and mounted tags in one batch, unmount/remount, exception isolation, concise
logging, the optional-reflection fallback, and pre-0.86 behavior. It failed on
the unpatched code (200 stale updates) and passed after this patch. This is
separate from `npm run check`, which does not require an Android toolchain.
