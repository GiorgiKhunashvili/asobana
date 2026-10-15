const path = require('node:path');
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
// Versioned JSON lives outside the mobile workspace and must refresh with code.
config.watchFolders = [
  ...config.watchFolders,
  path.resolve(__dirname, '../content'),
];

module.exports = config;
