import { test as base } from '@playwright/test'

const IGNORED_MESSAGES = [
  // See https://github.com/storybookjs/storybook/issues/18103
  'The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type".',
]

export const test = base.extend<{ saveLogs: void }>({
  saveLogs: [
    async ({ page }, use, testInfo) => {
      const logs = []
      page.on('console', (consoleMessage) => {
        if (consoleMessage.type() === 'error') {
          const text = consoleMessage.text()
          if (!IGNORED_MESSAGES.includes(text)) {
            logs.push(text)
          }
        }
      })

      await use()

      if (logs.length === 0 || testInfo.status !== 'passed') {
        return
      }

      // eslint-disable-next-line no-param-reassign
      testInfo.status = 'failed'
      // eslint-disable-next-line no-param-reassign
      testInfo.error = {
        message: `There were console errors:
${logs.join('\n')}`,
      }
    },
    { auto: true },
  ],
})
export { expect } from '@playwright/test'
