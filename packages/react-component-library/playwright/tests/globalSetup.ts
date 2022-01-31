/* eslint-disable no-console */
import { FullConfig } from '@playwright/test'
import waitOn from 'wait-on'

async function globalSetup(config: FullConfig) {
  // Wait for Storybook here to avoid waiting for it in a test (which may time out)
  console.log('[Playwright] Waiting for Storybook to start')
  const { port } = config.webServer
  const url = `http://localhost:${port}`
  await waitOn({ resources: [url], timeout: 120_000 })
  console.log('[Playwright] Finished waiting for Storybook to start')
}

export default globalSetup
