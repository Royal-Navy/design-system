import { ColorAction000, ColorNeutral100 } from '@royalnavy/design-tokens'

import { hexToRgb } from '../helpers'
import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Select, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-select--default&viewMode=story')
  })

  test('does not gives the expand icon a hover appearance', async ({
    page,
  }) => {
    await expect(page.locator(selectors.toggleIconWrapper)).not.toHaveCSS(
      'background-color',
      hexToRgb(ColorAction000)
    )
  })

  test.describe('when the component is clicked', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.outerWrapper)
    })

    test('renders four options', async ({ page }) => {
      await expect(page.locator(selectors.option)).toHaveCount(4)
    })

    test('focuses the toggle button when tabbing', async ({ page }) => {
      await page.keyboard.press('Tab')
      await expect(page.locator(selectors.toggleButton)).toBeFocused()
    })

    test.describe('and "t" is typed', () => {
      test.beforeEach(async ({ page }) => {
        await page.type(selectors.listBox, 't')
        await page.press(selectors.listBox, 'Enter')
      })

      test('sets the value as the item', async ({ page }) => {
        await expect(page.locator(selectors.input)).toHaveValue(
          'This is a really, really long select option label that overflows the container when selected'
        )
      })

      test.describe('and the input is hovered', () => {
        test.beforeEach(async ({ page }) => {
          await page.hover(selectors.input)
        })

        test('displays a tooltip', async ({ page }) => {
          await expect(page.locator(selectors.tooltip)).toContainText(
            'This is a really'
          )
        })

        test('gives the expand icon a hover appearance', async ({ page }) => {
          await expect(page.locator(selectors.toggleIconWrapper)).toHaveCSS(
            'background-color',
            hexToRgb(ColorAction000)
          )
        })
      })
    })

    test.describe('and ArrowUp is pressed', () => {
      test.beforeEach(async ({ page }) => {
        await page.keyboard.press('ArrowUp')
      })

      test('highlights the third option', async ({ page }) => {
        await expect(page.locator(selectors.option).nth(2)).toHaveCSS(
          'background-color',
          hexToRgb(ColorNeutral100)
        )
      })
    })

    test.describe('and the disabled option is clicked', () => {
      test.beforeEach(async ({ page }) => {
        await page.locator(selectors.option, { hasText: 'disabled' }).click()
      })

      test('does not close the menu', async ({ page }) => {
        await expect(page.locator(selectors.listBox)).toBeVisible()
      })

      test('does not update the input value', async ({ page }) => {
        await expect(page.locator(selectors.input)).toHaveValue('')
      })
    })
  })
})
