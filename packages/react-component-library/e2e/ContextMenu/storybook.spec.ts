import { expect, test } from '../fixtures'
import selectors from './selectors'

// https://github.com/storybookjs/storybook/issues/8928
// https://github.com/storybookjs/storybook/issues/18232

test.describe('ContextMenu, Storybook docs mode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=components-context-menu--default&viewMode=docs'
    )

    await page.locator(selectors.target).nth(0).click({ button: 'right' })
  })

  test('shows the Context Menu obscured', async ({ page }) => {
    await expect(
      page
        .locator(selectors.menu)
        .filter({ hasText: 'This is too much text' })
        .nth(0)
    ).toBeVisible()
  })
})
