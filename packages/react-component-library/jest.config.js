module.exports = {
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
  },
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  setupFiles: ['<rootDir>/jest/setupTests.js'],
  globalSetup: '<rootDir>/jest/globalSetup.js',
  collectCoverage: true,
  coverageReporters: ['text', 'html'],
  coverageDirectory: '<rootDir>/coverage/',
}
