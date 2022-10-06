import { expect, test } from '../test'
import selectors from './selectors'

test.describe('NumberInput', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=number-input--default&viewMode=story')
  })

  test('renders the number input without a value', async ({ page }) => {
    await expect(page.locator(selectors.input)).toHaveValue('')
  })

  test('increments the value when the increase button is clicked', async ({
    page,
  }) => {
    await page.click(selectors.increase)
    await expect(page.locator(selectors.input)).toHaveValue('1')
  })

  test('decrements the value when the decrease button is clicked', async ({
    page,
  }) => {
    await page.click(selectors.decrease)
    await expect(page.locator(selectors.input)).toHaveValue('-1')
  })

  const TYPED_VALUE_CASES = [
    ['100.123.456', '100.123456'],
    ['100.123', '100.123'],
    ['100.invalid456', '100.456'],
    ['-100.123', '-100.123'],
    ['-100.1-23', '-100.123'],
    ['100.1-23', '100.123'],
  ]

  TYPED_VALUE_CASES.forEach(([textToType, expectedValue]) => {
    test(`sets the value to "${expectedValue}" when typing "${textToType}"`, async ({
      page,
    }) => {
      await page.type(selectors.input, textToType)
      await expect(page.locator(selectors.input)).toHaveValue(expectedValue)
    })
  })

  test('does not move the cursor when typing an invalid value', async ({
    page,
  }) => {
    await page.type(selectors.input, '100.25')
    await page.press(selectors.input, 'Home')
    await page.type(selectors.input, '.25')

    await expect(page.locator(selectors.input)).toHaveValue('25100.25')
  })

  test('allows overtyping a positive value', async ({ page }) => {
    await page.type(selectors.input, '12.34')
    await page.locator(selectors.input).selectText()
    await page.type(selectors.input, '56.78')

    await expect(page.locator(selectors.input)).toHaveValue('56.78')
  })

  test('allows overtyping a negative value', async ({ page }) => {
    await page.type(selectors.input, '-12.34')
    await page.locator(selectors.input).selectText()
    await page.type(selectors.input, '-56.78')

    await expect(page.locator(selectors.input)).toHaveValue('-56.78')
  })
})
