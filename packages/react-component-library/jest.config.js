module.exports = {
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  setupFiles: ['<rootDir>/jest/setupTests.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupAfterEnv.ts'],
}
