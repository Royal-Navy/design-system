import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testDir: './e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  maxFailures: process.env.CI ? 10 : undefined,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    [process.env.CI ? 'github' : 'line'],
    ['html', { outputFolder: './e2e-output/html/', open: 'never' }],
  ],
  use: {
    baseURL: 'http://localhost:6006',
    trace: process.env.PLAYWRIGHT_TRACE
      ? 'retain-on-failure'
      : 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: {
          width: 1024,
          height: 768,
        },
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: {
          width: 1024,
          height: 768,
        },
      },
    },
  ],
  outputDir: 'e2e-output/artefacts/',
  webServer: process.env.CI
    ? {
        command:
          'npm exec --no -- http-server .static_storybook --port 6006 --silent',
        url: 'http://localhost:6006',
      }
    : undefined,
}
export default config
