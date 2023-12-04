import { ColorAction500, ColorNeutral200 } from '@royalnavy/design-tokens'

import { expect, test } from '../fixtures'
import { hexToRgb } from '../helpers'
import selectors from './selectors'

test.describe('RangeSlider, multiple handles', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=range-slider--multiple-handles&viewMode=story'
    )
  })

  // [- - * * * * * - -]
  const EXPECTED_MARKER_COLORS = [
    ColorNeutral200,
    ColorNeutral200,
    ColorAction500,
    ColorAction500,
    ColorAction500,
    ColorAction500,
    ColorAction500,
    ColorNeutral200,
    ColorNeutral200,
  ]

  EXPECTED_MARKER_COLORS.forEach((expectedColor, index) => {
    test(`correctly sets the marker ${index} active state`, async ({
      page,
    }) => {
      await expect(page.locator(selectors.markers).nth(index)).toHaveCSS(
        'background-color',
        hexToRgb(expectedColor)
      )
    })
  })
})
