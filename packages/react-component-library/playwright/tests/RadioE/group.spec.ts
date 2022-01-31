import { expect, test } from '@playwright/test'

import selectors from '../../selectors'

test.describe('RadioE - group', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=radio-experimental--with-formik-group&viewMode=story'
    )
  })

  test.describe('when Tab is pressed', () => {
    test.beforeEach(async ({ page }) => {
      await page.keyboard.press('Tab')
    })

    test('focuses the first item', ({ page }) => {
      const firstInput = page.locator(selectors.radioE.input).first()
      expect(firstInput).toBeFocused()
    })

    test('does not check the first item', ({ page }) => {
      const firstInput = page.locator(selectors.radioE.input).first()
      expect(firstInput).not.toBeChecked()
    })

    test.describe('and Space is pressed', () => {
      test.beforeEach(async ({ page }) => {
        await page.keyboard.press('Space')
      })

      test('checks the first item', ({ page }) => {
        const input = page.locator(selectors.radioE.input).first()
        expect(input).toBeChecked()
      })
    })

    test.describe('and ArrowDown is pressed', () => {
      test.beforeEach(async ({ page }) => {
        await page.keyboard.press('ArrowDown')
      })

      test('focuses the second item', ({ page }) => {
        const input = page.locator(selectors.radioE.input).nth(1)
        expect(input).toBeFocused()
      })

      test('checks the second item', ({ page }) => {
        const input = page.locator(selectors.radioE.input).nth(1)
        expect(input).toBeChecked()
      })

      test.describe('and Tab is pressed again', () => {
        test.beforeEach(async ({ page }) => {
          await page.keyboard.press('Tab')
        })

        test('focuses the first item in the second group', async ({ page }) => {
          const firstInput = page
            .locator('fieldset')
            .nth(1)
            .locator(selectors.radioE.input)
            .first()
          await expect(firstInput).toBeFocused()
        })

        test('deliberately failing test', async ({ page }) => {
          const firstInput = page
            .locator('fieldset')
            .nth(1)
            .locator(selectors.radioE.input)
            .first()
          await expect(firstInput).toBeChecked()
        })
      })
    })
  })
})
