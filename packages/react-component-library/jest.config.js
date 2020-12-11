process.env.RNDS_LOG_LEVEL = 'debug'

module.exports = {
  moduleNameMapper: {
    '@royalnavy/fonts': '<rootDir>/jest/__mocks__/fileMock.js',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/__mocks__/fileMock.js',
  },
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
  globalSetup: '<rootDir>/jest/globalSetup.js',
  transformIgnorePatterns: [
    '/node_modules/(?!@royalnavy/design-tokens).+\\.js$',
  ],
}
