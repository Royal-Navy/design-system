import { ColorAction500 } from '@royalnavy/design-tokens'

import { hexToRgb } from '../helpers'
import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('TabNav, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=components-tab-nav--default&viewMode=story'
    )
  })

  test('shows the first tab as active', async ({ page }) => {
    const tabItemButtons = page.locator(selectors.tabItemButton)

    await expect(tabItemButtons.nth(0)).toHaveCSS(
      'border-top',
      `6px solid ${hexToRgb(ColorAction500)}`
    )
    await expect(tabItemButtons.nth(1)).toHaveCSS('border-top-style', 'none')
    await expect(tabItemButtons.nth(2)).toHaveCSS('border-top-style', 'none')
  })
})
