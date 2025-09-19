import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Select, isMulti', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=components-select--multi-select&viewMode=story'
    )
  })

  test('correctly shows the Multiple selected text when multiple options are selected', async ({
    page,
  }) => {
    await page.click(selectors.outerWrapper)

    await page.locator(selectors.option).nth(1).click()
    await page.locator(selectors.option).nth(2).click()
    await page.locator(selectors.option).nth(3).click()

    await expect(page.locator(selectors.input)).toHaveValue(/.*,.*,.*/)

    await page.locator(selectors.option).nth(4).click()
    await page.locator(selectors.option).nth(5).click()

    await expect(page.locator(selectors.input)).toHaveValue('Multiple selected')
  })

  test('allows for navigation using the arrow keys and enter', async ({
    page,
  }) => {
    await page.click(selectors.outerWrapper)

    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await expect(page.locator(selectors.input)).not.toHaveValue('')

    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    const inputValue = await page.locator(selectors.input).inputValue()
    expect(inputValue).toBeTruthy()
    expect(inputValue).not.toBe('')
  })
})
