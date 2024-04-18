import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('RangeSlider, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=components-range-slider--default&viewMode=story'
    )
  })

  test.describe('when clicking on the rail beyond the selected range', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.rail, { position: { x: 800, y: 5 } })
    })

    test('focuses the handle', async ({ page }) => {
      await expect(page.locator(selectors.handle.handle)).toBeFocused()
    })

    test('moves the handle', async ({ page }) => {
      await expect(page.locator(selectors.handle.value)).toHaveText('33')
    })

    test('moves the handle when clicking on the rail again', async ({
      page,
    }) => {
      await page.click(selectors.rail, { position: { x: 200, y: 5 } })

      await expect(page.locator(selectors.handle.value)).toHaveText('8')
    })
  })
})
