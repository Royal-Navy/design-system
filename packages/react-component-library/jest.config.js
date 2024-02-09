process.env.RNDS_LOG_LEVEL = 'debug'

module.exports = {
  moduleNameMapper: {
    '@royalnavy/fonts': '<rootDir>/jest/__mocks__/fileMock.js',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
  },
  resolver: '<rootDir>/jest/resolver.js',
  restoreMocks: true,
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)(test).ts?(x)'],
  testPathIgnorePatterns: ['e2e'],
  setupFilesAfterEnv: [
    '<rootDir>/jest/setupTests.js',
    '<rootDir>/jest/setupPolyfills.js',
  ],
  globalSetup: '<rootDir>/jest/globalSetup.js',
  transformIgnorePatterns: [
    '/node_modules/(?!@royalnavy/design-tokens).+\\.js$',
  ],
}
