import AxeBuilder from '@axe-core/playwright'
import { TestRunnerConfig } from '@storybook/test-runner'
import { red } from 'chalk'

import { storyAccessibilityConfig } from '../src/a11y/storyAccessibilityConfig'
import { ValueOf } from '../src/helpers'

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(
        config?: ValueOf<typeof storyAccessibilityConfig>
      ): CustomMatcherResult
    }
  }
}

expect.extend({
  toHaveNoViolations: async (
    page: Parameters<TestRunnerConfig['postRender']>[0],
    config?: ValueOf<typeof storyAccessibilityConfig>
  ) => {
    const axeResults = await new AxeBuilder({ page })
      .include('#storybook-root')
      .disableRules(config?.map((entry) => entry.id) || [])
      .analyze()

    const pass = axeResults.violations.length === 0
    if (pass) {
      return {
        message: () => `expected violations`,
        pass: true,
      }
    } else {
      const messages = axeResults.violations.map((violation) =>
        [
          `${violation.impact}(${violation.id}): ${violation.help}`,
          ...violation.nodes.map((node) => node.html),
        ].join('\n')
      )
      return {
        message: () => red(messages.join('\n')),
        pass: false,
      }
    }
  },
})

const config: TestRunnerConfig = {
  async postRender(page, context) {
    const config = storyAccessibilityConfig[context.title]

    await expect(page).toHaveNoViolations(config)
  },
}

export default config
