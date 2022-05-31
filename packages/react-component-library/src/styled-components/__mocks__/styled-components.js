// For testing GlobalStyleProvider.
//
// Use the browser build of styled-components instead of the server build
// to get global styles loaded.
module.exports = jest.requireActual(
  'styled-components/dist/styled-components.browser.cjs'
)
