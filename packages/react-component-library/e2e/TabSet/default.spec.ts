import { ColorAction500 } from '@royalnavy/design-tokens'

import { hexToRgb } from '../helpers'
import { expect, test } from '../fixtures'
import selectors from './selectors'

const ACTIVE_TAB_BORDER_TOP = `6px solid ${hexToRgb(ColorAction500)}`

test.describe('TabSet, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=tab-set--default&viewMode=story')
  })

  test('shows the first tab as active', async ({ page }) => {
    const tab0 = page.locator(selectors.tabItemButton).nth(0)

    await expect(tab0).toHaveCSS('border-top', ACTIVE_TAB_BORDER_TOP)
    await expect(tab0).toHaveCSS('font-weight', '700')
  })

  test('shows the second and third tabs as inactive', async ({ page }) => {
    const tab1 = page.locator(selectors.tabItemButton).nth(1)
    const tab2 = page.locator(selectors.tabItemButton).nth(2)

    await expect(tab1).toHaveCSS('border-top-style', 'none')
    await expect(tab1).toHaveCSS('font-weight', '400')
    await expect(tab2).toHaveCSS('font-weight', '400')
    await expect(tab2).toHaveCSS('border-top-style', 'none')
  })

  test.describe('when the second tab is clicked', () => {
    test.beforeEach(async ({ page }) => {
      await page.locator(selectors.tabItemButton).nth(1).click()
    })

    test('shows the second tab as active', async ({ page }) => {
      const tab1 = page.locator(selectors.tabItemButton).nth(1)

      await expect(tab1).toHaveCSS('border-top', ACTIVE_TAB_BORDER_TOP)
      await expect(tab1).toHaveCSS('font-weight', '700')
    })

    test('shows the first and third tabs as inactive', async ({ page }) => {
      const tab0 = page.locator(selectors.tabItemButton).nth(0)
      const tab2 = page.locator(selectors.tabItemButton).nth(2)

      await expect(tab0).toHaveCSS('border-top-style', 'none')
      await expect(tab0).toHaveCSS('font-weight', '400')
      await expect(tab2).toHaveCSS('font-weight', '400')
      await expect(tab2).toHaveCSS('border-top-style', 'none')
    })
  })
})
