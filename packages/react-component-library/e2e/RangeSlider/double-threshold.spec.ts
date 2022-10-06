import { expect, test } from '../test'
import selectors from './selectors'

test.describe('RangeSlider, double threshold', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=range-slider--double-threshold&viewMode=story'
    )
  })

  test('renders both thresholds', async ({ page }) => {
    await expect(
      page.locator(selectors.thresholds.betweenThresholds)
    ).toBeVisible()

    await expect(
      page.locator(selectors.thresholds.aboveThresholds)
    ).toBeVisible()
  })

  test('hides the thresholds when clicking on the rail below the thresholds', async ({
    page,
  }) => {
    await page.click(selectors.rail, { position: { x: 0, y: 5 } })

    await expect(
      page.locator(selectors.thresholds.betweenThresholds)
    ).toHaveCSS('width', '0px')

    await expect(page.locator(selectors.thresholds.aboveThresholds)).toHaveCSS(
      'width',
      '0px'
    )
  })
})
