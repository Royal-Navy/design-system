import { test, expect } from '@playwright/test'
import {
  ColorDanger800,
  ColorNeutral100,
  ColorNeutral200,
} from '@defencedigital/design-tokens'

import selectors from '../../selectors'
import { hexToRgb } from '../../helpers'

test.describe('AutocompleteE', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=autocomplete-experimental--default&viewMode=story'
    )
  })

  test.describe('when the component is focused', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.selectE.outerWrapper)
    })

    test('renders four options', async ({ page }) => {
      const options = page.locator(selectors.selectE.option)
      await expect(options).toHaveCount(4)
    })

    test.describe('and `hr` is typed', () => {
      test.beforeEach(async ({ page }) => {
        await page.type(selectors.selectE.input, 'hr')
      })

      test('renders one option', async ({ page }) => {
        const options = page.locator(selectors.selectE.option)

        await expect(options).toHaveCount(1)
        expect(await options.innerHTML()).toContain('T<strong>hr</strong>ee')
      })

      test('does not render the `No results for t` text', async ({ page }) => {
        const noResults = page.locator(selectors.autocompleteE.noResults)
        await expect(noResults).toHaveCount(0)
      })

      test('highlights the first item', async ({ page }) => {
        const firstOption = page.locator(selectors.selectE.option).first()

        await expect(firstOption).toHaveCSS(
          'background-color',
          hexToRgb(ColorNeutral100)
        )
      })

      test.describe('and the `Three` option is clicked', () => {
        test.beforeEach(async ({ page }) => {
          await page.click(selectors.selectE.option)
          // Alternative:
          // await page
          //   .locator(selectors.selectE.option, { hasText: 'Three' })
          //   .click()
        })

        test('it sets the value', async ({ page }) => {
          await expect(page.locator(selectors.selectE.input)).toHaveValue(
            'Three'
          )
        })

        test.describe('and the component is focused', () => {
          test.beforeEach(async ({ page }) => {
            await page.click(selectors.selectE.outerWrapper)
          })

          test('renders four options', async ({ page }) => {
            await expect(page.locator(selectors.selectE.option)).toHaveCount(4)
          })

          test('highlights `Three`', async ({ page }) => {
            const option = await page.locator(selectors.selectE.option).nth(2)

            await expect(option).toHaveCSS(
              'background-color',
              hexToRgb(ColorNeutral100)
            )
          })
        })
      })

      test.describe('and the user tabs out', () => {
        test.beforeEach(async ({ page }) => {
          await page.keyboard.press('Tab')
        })

        test('sets the value to the highlighted item', async ({ page }) => {
          const input = page.locator(selectors.selectE.input)
          await expect(input).toHaveValue('Three')
        })
      })

      test.describe('and the user clicks out', () => {
        test.beforeEach(async ({ page }) => {
          await page.click('body')
        })

        test('shows the field with the entered value in an error state', async ({
          page,
        }) => {
          await expect(page.locator(selectors.selectE.input)).toHaveValue('hr')
          await expect(page.locator(selectors.selectE.outerWrapper)).toHaveCSS(
            'box-shadow',
            `${hexToRgb(ColorDanger800)} 0px 0px 0px 3px`
          )
        })

        test.describe('and the clear button is clicked', () => {
          test.beforeEach(async ({ page }) => {
            await page.click(selectors.selectE.clearButton)
          })

          test('shows the field without a value not in an error state', async ({
            page,
          }) => {
            await expect(page.locator(selectors.selectE.input)).toHaveValue('')
            await expect(
              page.locator(selectors.selectE.outerWrapper)
            ).toHaveCSS(
              'box-shadow',
              `${hexToRgb(ColorNeutral200)} 0px 0px 0px 1px`
            )
          })
        })

        test.describe('and the user clicks back into the component', () => {
          test.beforeEach(async ({ page }) => {
            await page.click(selectors.selectE.outerWrapper)
          })

          test('renders one option', async ({ page }) => {
            const options = page.locator(selectors.selectE.option)

            await expect(options).toHaveCount(1)
            expect(await options.innerHTML()).toContain(
              'T<strong>hr</strong>ee'
            )
          })

          test('highlights the first item', async ({ page }) => {
            const firstOption = page.locator(selectors.selectE.option).first()

            await expect(firstOption).toHaveCSS(
              'background-color',
              hexToRgb(ColorNeutral100)
            )
          })
        })
      })
    })

    test.describe('and `*` is typed', () => {
      test.beforeEach(async ({ page }) => {
        await page.type(selectors.selectE.input, '*')
      })

      test('renders no options', async ({ page }) => {
        const options = page.locator(selectors.selectE.option)
        await expect(options).toHaveCount(0)
      })
    })

    test.describe('and `z` is typed', () => {
      test.beforeEach(async ({ page }) => {
        await page.type(selectors.selectE.input, 'z')
      })

      test('renders no options', async ({ page }) => {
        const options = page.locator(selectors.selectE.option)
        await expect(options).toHaveCount(0)
      })

      test('renders the `No results for z` text', async ({ page }) => {
        const noResults = page.locator(selectors.autocompleteE.noResults)
        await expect(noResults).toBeVisible()
      })

      test.describe('and the user clicks away from the component', () => {
        test.beforeEach(async ({ page }) => {
          await page.click('body')
        })

        test('keeps the small label', async ({ page }) => {
          const label = page.locator(selectors.selectE.label)
          await expect(label).toHaveCSS(
            'transform',
            'matrix(0.75, 0, 0, 0.75, 11, 6)'
          )
        })
      })

      test.describe('and the tab key is pressed', () => {
        test.beforeEach(async ({ page }) => {
          await page.keyboard.press('Tab')
        })

        test('renders the component', async ({ page }) => {
          const wrapper = page.locator(selectors.selectE.outerWrapper)
          await expect(wrapper).toHaveCount(1)
        })
      })
    })
  })
})
