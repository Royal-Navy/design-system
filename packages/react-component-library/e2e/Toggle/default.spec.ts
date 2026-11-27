import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-toggle--default&viewMode=story')
  })

  test('is off by default', async ({ page }) => {
    await expect(page.locator(selectors.input)).not.toBeChecked()
  })

  test('can be switched on and off with the mouse', async ({ page }) => {
    await page.click(selectors.wrapper)
    await expect(page.locator(selectors.input)).toBeChecked()

    await page.click(selectors.wrapper)
    await expect(page.locator(selectors.input)).not.toBeChecked()
  })

  test('can be switched on and off with the keyboard', async ({ page }) => {
    await page.waitForSelector(selectors.input)
    await page.keyboard.press('Tab')
    await expect(page.locator(selectors.input)).toBeFocused()

    await page.keyboard.press('Space')
    await expect(page.locator(selectors.input)).toBeChecked()

    await page.keyboard.press('Space')
    await expect(page.locator(selectors.input)).not.toBeChecked()
  })
})

test('Toggle cannot be switched on when disabled', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=components-toggle--disabled-unchecked&viewMode=story'
  )
  await page.hover(selectors.wrapper)
  await page.mouse.down()
  await page.mouse.up()

  await expect(page.locator(selectors.input)).not.toBeChecked()
})
