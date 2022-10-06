import { expect, test } from '../test'
import selectors from './selectors'

test.describe('ContextMenu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=context-menu--default&viewMode=story')

    await page
      .locator(selectors.target)
      .nth(0)
      .click({ button: 'right', position: { x: 10, y: 10 } })
  })

  test('positions the context menu correctly', async ({ page }) => {
    const targetBoundingBox = await page.locator(selectors.target).boundingBox()
    const menuBoundingBox = await page.locator(selectors.menu).boundingBox()

    await expect(menuBoundingBox.x).toBe(targetBoundingBox.x + 10)
  })
})
