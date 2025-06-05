module.exports = {
  verbose: true,
  testEnvironment: 'node',
  // Hanya menjalankan test di folder jest
  testMatch: ['**/tests/jest/**/*.test.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage/jest',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/calculator.js',
    '!**/node_modules/**'
  ]
};