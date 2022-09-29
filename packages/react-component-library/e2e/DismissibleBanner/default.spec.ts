import { expect, test } from '@playwright/test'

import selectors from './selectors'

test.describe('DismissibleBanner', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=dismissible-banner--default&viewMode=story'
    )
  })

  test('renders the dismissible banner', async ({ page }) => {
    await expect(page.locator(selectors.title)).toHaveText('Example Title')
    await expect(page.locator(selectors.description)).toHaveText(
      'Example description'
    )
    await expect(page.locator(selectors.checkbox)).toBeVisible()
    await expect(page.locator(selectors.dismiss)).toBeVisible()
  })
})
