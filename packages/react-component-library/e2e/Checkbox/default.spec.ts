import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Checkbox', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=checkbox--default&viewMode=story')
  })

  test('does not check the input by default', async ({ page }) => {
    await expect(page.locator(selectors.input)).toBeChecked({ checked: false })
  })

  test('focuses the input when tab is pressed', async ({ page }) => {
    // Make sure the component has rendered before tabbing
    await page.waitForSelector(selectors.input)
    await page.keyboard.press('Tab')

    await expect(page.locator(selectors.input)).toBeFocused()
  })

  test.describe('when the component is clicked on', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.wrapper)
    })

    test('checks the input', async ({ page }) => {
      await expect(page.locator(selectors.input)).toBeChecked()
    })

    test('unchecks the input when the component is clicked on again', async ({
      page,
    }) => {
      await page.click(selectors.wrapper)
      await expect(page.locator(selectors.input)).toBeChecked({
        checked: false,
      })
    })
  })
})
