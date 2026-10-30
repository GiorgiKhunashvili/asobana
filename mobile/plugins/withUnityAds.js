const { withAppBuildGradle } = require('expo/config-plugins');

/**
 * Unity Ads bidding through AdMob, Android only. The adapter does not bring
 * Unity's SDK with it, so both are listed. 4.21.0.0 is built for Google Mobile
 * Ads 25.5.0: move these with react-native-google-mobile-ads, not on their own.
 * Runtime only: AdMob finds the adapter by name, and as `implementation` it puts
 * the Google SDK on the app's compile path, whose Kotlin is too old to read it.
 */
const UNITY_DEPENDENCIES = [
  'com.unity3d.ads:unity-ads:4.21.0',
  'com.google.ads.mediation:unity:4.21.0.0',
];

function addUnityDependencies(buildGradle) {
  if (buildGradle.includes(UNITY_DEPENDENCIES[0])) return buildGradle;
  const lines = UNITY_DEPENDENCIES.map(
    (dependency) => `    runtimeOnly "${dependency}"\n`,
  ).join('');
  return buildGradle.replace(/^dependencies \{\n/m, (start) => start + lines);
}

module.exports = (config) =>
  withAppBuildGradle(config, (gradle) => {
    gradle.modResults.contents = addUnityDependencies(
      gradle.modResults.contents,
    );
    return gradle;
  });
module.exports.addUnityDependencies = addUnityDependencies;
