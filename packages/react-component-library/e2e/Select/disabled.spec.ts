import { ColorAction000 } from '@defencedigital/design-tokens'

import { hexToRgb } from '../helpers'
import { expect, test } from '../test'
import selectors from './selectors'

test.describe('Select, disabled', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=select--disabled&viewMode=story')
  })

  test('does not gives the expand icon a hover appearance on hover', async ({
    page,
  }) => {
    await page.hover(selectors.input)
    await expect(page.locator(selectors.toggleIconWrapper)).not.toHaveCSS(
      'background-color',
      hexToRgb(ColorAction000)
    )
  })
})
