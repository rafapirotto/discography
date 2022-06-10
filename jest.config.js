module.exports = {
  coveragePathIgnorePatterns: [
    'retry.js',
    'jest.config.js',
    'api.js',
    'constants.js',
    '<rootDir>/index.js',
  ],
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/coverage/**', '!**/logger/**'],
};
