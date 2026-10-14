const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
module.exports = defineConfig([
  expoConfig,
  { ignores: ['dist/*', '.expo/*'] },
  {
    files: ['tests/**/*'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
]);
