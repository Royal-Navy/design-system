import {
  ColorDanger800,
  ColorNeutral100,
  ColorNeutral200,
  TypographyS,
} from '@royalnavy/design-tokens'
import { remToPx } from 'polished'

import { hexToRgb } from '../helpers'
import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Autocomplete', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=autocomplete--default&viewMode=story', {
      waitUntil: 'domcontentloaded',
    })
  })

  test.describe('when the component is focused', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.outerWrapper)
    })

    test('renders four options', async ({ page }) => {
      await expect(page.locator(selectors.option)).toHaveCount(4)
    })

    test.describe('and `hr` is typed', () => {
      test.beforeEach(async ({ page }) => {
        await page.fill(selectors.input, 'hr')
      })

      test('renders one option', async ({ page }) => {
        const options = page.locator(selectors.option)

        await expect(options).toHaveCount(1)
        expect(await options.innerHTML()).toContain('T<strong>hr</strong>ee')
      })

      test('does not render the `No results for t` text', async ({ page }) => {
        await expect(page.locator(selectors.noResults)).toHaveCount(0)
      })

      test('highlights the first item', async ({ page }) => {
        const firstOption = page.locator(selectors.option).first()

        await expect(firstOption).toHaveCSS(
          'background-color',
          hexToRgb(ColorNeutral100)
        )
      })

      test.describe('and the `Three` option is clicked', () => {
        test.beforeEach(async ({ page }) => {
          await page.click(selectors.option)
        })

        test('it sets the value', async ({ page }) => {
          await expect(page.locator(selectors.input)).toHaveValue('Three')
        })

        test('focuses the toggle button', async ({ page }) => {
          await expect(page.locator(selectors.toggleButton)).toBeFocused()
        })

        test.describe('and the component is focused', () => {
          test.beforeEach(async ({ page }) => {
            await page.click(selectors.outerWrapper)
          })

          test('renders four options', async ({ page }) => {
            await expect(page.locator(selectors.option)).toHaveCount(4)
          })

          test('highlights `Three`', async ({ page }) => {
            const option = await page.locator(selectors.option).nth(2)

            await expect(option).toHaveCSS(
              'background-color',
              hexToRgb(ColorNeutral100)
            )
          })
        })

        test('inserts the text at the correct location when the input is clicked in the middle', async ({
          page,
        }) => {
          await page.click(selectors.input, { position: { x: 20, y: 25 } })
          await page.keyboard.press('m')
          await page.keyboard.press('o')
          await page.keyboard.press('r')
          await page.keyboard.press('e')

          await expect(page.locator(selectors.input)).toHaveValue('Tmorehree')
        })
      })

      test('sets the value to the highlighted item when pressing tab', async ({
        page,
      }) => {
        await page.keyboard.press('Tab')
        await expect(page.locator(selectors.input)).toHaveValue('Three')
      })

      test.describe('and the user escapes out', () => {
        test.beforeEach(async ({ page }) => {
          await page.keyboard.press('Escape')
        })

        test('focuses the toggle button', async ({ page }) => {
          await expect(page.locator(selectors.toggleButton)).toBeFocused()
        })

        test('renders four options when the down arrow is pressed', async ({
          page,
        }) => {
          await page.keyboard.press('ArrowDown')
          await expect(page.locator(selectors.option)).toHaveCount(4)
        })
      })

      test.describe('and the user clicks out', () => {
        test.beforeEach(async ({ page }) => {
          await page.click('body')
        })

        test('shows the field with the entered value in an error state', async ({
          page,
        }) => {
          await expect(page.locator(selectors.input)).toHaveValue('hr')
          await expect(page.locator(selectors.outerWrapper)).toHaveCSS(
            'box-shadow',
            `${hexToRgb(ColorDanger800)} 0px 0px 0px 3px`
          )
        })

        test('clears the value and error state when the clear button is clicked', async ({
          page,
        }) => {
          await page.click(selectors.clearButton)

          await expect(page.locator(selectors.input)).toHaveValue('')
          await expect(page.locator(selectors.outerWrapper)).toHaveCSS(
            'box-shadow',
            `${hexToRgb(ColorNeutral200)} 0px 0px 0px 1px`
          )
        })

        test.describe('and the user clicks back into the component', () => {
          test.beforeEach(async ({ page }) => {
            await page.click(selectors.outerWrapper)
          })

          test('renders one option', async ({ page }) => {
            const options = page.locator(selectors.option)

            await expect(options).toHaveCount(1)
            expect(await options.innerHTML()).toContain(
              'T<strong>hr</strong>ee'
            )
          })

          test('highlights the first item', async ({ page }) => {
            const firstOption = page.locator(selectors.option).first()

            await expect(firstOption).toHaveCSS(
              'background-color',
              hexToRgb(ColorNeutral100)
            )
          })
        })
      })
    })

    test('highlights the first item when the down arrow is pressed', async ({
      page,
    }) => {
      await page.keyboard.press('ArrowDown')
      const firstOption = page.locator(selectors.option).first()

      await expect(firstOption).toHaveCSS(
        'background-color',
        hexToRgb(ColorNeutral100)
      )
    })

    test.describe('and an overflowing option is clicked', () => {
      test.beforeEach(async ({ page }) => {
        await page.click(`${selectors.option}:has-text("This is a really")`)
      })

      test('sets the value', async ({ page }) => {
        await expect(page.locator(selectors.input)).toHaveValue(
          'This is a really, really long select option label that overflows the container when selected'
        )
      })

      test('sets the input `scrollLeft` to 0', async ({ page }) => {
        await expect(page.locator(selectors.input)).toHaveJSProperty(
          'scrollLeft',
          0
        )
      })

      test('displays a tooltip when hovering on the input', async ({
        page,
      }) => {
        await page.hover(selectors.input)
        await expect(page.locator(selectors.tooltip)).toContainText(
          'This is a really'
        )
      })
    })

    test('does not display a tooltip when overflowing text is typed', async ({
      page,
    }) => {
      await page.fill(
        selectors.input,
        'A long piece of text that overflows the input'
      )
      await page.hover(selectors.input)

      await expect(page.locator(selectors.tooltip)).toHaveCount(0)
    })

    test('renders no options when `*` is typed', async ({ page }) => {
      await page.fill(selectors.input, '*')
      await expect(page.locator(selectors.option)).toHaveCount(0)
    })

    test.describe('and `z` is typed', () => {
      test.beforeEach(async ({ page }) => {
        await page.fill(selectors.input, 'z')
      })

      test('renders no options', async ({ page }) => {
        await expect(page.locator(selectors.option)).toHaveCount(0)
      })

      test('renders the `No results for z` text', async ({ page }) => {
        await expect(page.locator(selectors.noResults)).toBeVisible()
      })

      test('keeps the small label when the user clicks away from the component', async ({
        page,
      }) => {
        await page.click('body')

        const label = page.locator(selectors.label)
        await expect(label).toHaveCSS('font-size', remToPx(TypographyS))
      })

      test('renders the component when the tab key is pressed', async ({
        page,
      }) => {
        await page.keyboard.press('Tab')
        await expect(page.locator(selectors.outerWrapper)).toHaveCount(1)
      })
    })
  })
})
