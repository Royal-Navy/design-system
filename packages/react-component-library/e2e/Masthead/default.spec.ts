import { ColorAction500 } from '@royalnavy/design-tokens'

import { hexToRgb } from '../helpers'
import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Masthead', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=components-masthead--default&viewMode=story'
    )
  })

  test('shows the banner', async ({ page }) => {
    await expect(page.locator(selectors.banner)).toBeVisible()
  })

  // eslint-disable-next-line playwright/no-skipped-test
  test.skip('shows the buttons', async ({ page }) => {
    await expect(page.locator(selectors.buttons.search)).toBeVisible()
    await expect(page.locator(selectors.buttons.notifications)).toBeVisible()
    await expect(page.locator(selectors.buttons.user)).toBeVisible()
  })

  test('shows the navigation', async ({ page }) => {
    const navigationButtons = page.locator(selectors.navigation.button)

    await expect(navigationButtons.nth(0)).toHaveCSS(
      'border-top',
      `6px solid ${hexToRgb(ColorAction500)}`
    )
    await expect(navigationButtons.nth(1)).toHaveCSS('border-top-style', 'none')
    await expect(navigationButtons.nth(2)).toHaveCSS('border-top-style', 'none')
    await expect(navigationButtons.nth(3)).toHaveCSS('border-top-style', 'none')
  })
})
