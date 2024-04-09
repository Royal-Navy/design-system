import type { TestRunnerConfig } from '@storybook/test-runner'
import { getStoryContext } from '@storybook/test-runner'
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright'

const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context)

    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    })

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: false,
      },
      verbose: true,
    })
  },
}

export default config
