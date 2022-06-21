import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: false,
  video: false,
  viewportWidth: 1024,
  viewportHeight: 768,
  e2e: {
    setupNodeEvents(on, config) {
      // Set up plugins here
    },
    baseUrl: 'http://localhost:6006',
  },
})
