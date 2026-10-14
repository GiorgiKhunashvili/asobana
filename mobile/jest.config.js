module.exports = {
  preset: 'jest-expo',
  testMatch: ['<rootDir>/tests/**/*.test.ts', '<rootDir>/tests/**/*.test.tsx'],
  clearMocks: true,
  collectCoverageFrom: [
    'src/engine/**/*.ts',
    'src/storage/repository.ts',
    'src/state/createGameStore.ts',
  ],
};
