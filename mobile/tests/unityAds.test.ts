const { addUnityDependencies } = require('../plugins/withUnityAds');

const gradle = `android {
}

dependencies {
    implementation("com.facebook.react:react-android")
}
`;

test('the Android build gets Unity and its adapter once, inside dependencies', () => {
  const built = addUnityDependencies(gradle);
  expect(built).toContain(
    'dependencies {\n    runtimeOnly "com.unity3d.ads:unity-ads:4.21.0"\n',
  );
  expect(built).toContain(
    'runtimeOnly "com.google.ads.mediation:unity:4.21.0.0"\n',
  );
  expect(addUnityDependencies(built)).toBe(built);
});

test('the Unity adapter stays matched to the Google SDK it was built for', () => {
  // A wrapper upgrade moves this pin: update the adapter pair with it.
  const {
    sdkVersions,
  } = require('react-native-google-mobile-ads/package.json');
  expect(sdkVersions.android.googleMobileAds).toBe('25.5.0');
});

test('the build uses the plugin, and iOS stays without Unity until it is set up', () => {
  const { expo } = require('../app.json');
  expect(expo.plugins).toContain('./plugins/withUnityAds.js');
  expect(JSON.stringify(expo.plugins)).not.toContain(
    'GoogleMobileAdsMediationUnity',
  );
});
