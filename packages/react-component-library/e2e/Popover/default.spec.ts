import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Popover', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-popover--default&viewMode=story')
  })

  test('handles rapid mouse movements in and out 100x and confirms popover is closed', async ({
    page,
  }) => {
    const target = page.locator(selectors.target)
    const content = page.locator(selectors.content)

    // Perform 100 rapid mouse in/out movements
    const movements = Array.from({ length: 100 }, async () => {
      await target.hover()
      await page.mouse.move(0, 0)
    })
    await Promise.all(movements)

    // Wait for popover to be hidden after rapid movements
    await expect(content).toBeHidden()
  })
})
