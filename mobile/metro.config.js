const path = require('node:path');
const { getSentryExpoConfig } = require('@sentry/react-native/metro');

// Expo's default config, plus the debug IDs that tie crashes to source maps.
const config = getSentryExpoConfig(__dirname);
// Versioned JSON lives outside the mobile workspace and must refresh with code.
config.watchFolders = [
  ...config.watchFolders,
  path.resolve(__dirname, '../content'),
];

module.exports = config;
