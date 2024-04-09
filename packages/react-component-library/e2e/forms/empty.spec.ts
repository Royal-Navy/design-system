import { expect, test } from '../fixtures'
import selectors from './selectors'

const expectedResult = {
  email: 'hello@world.com',
  password: 'password',
  description: 'Hello, World!',
  exampleCheckbox: ['Option 2'],
  exampleRadio: 'Option 1',
  exampleSwitch: '1',
  exampleNumberInput: 1,
  exampleDatePicker: '2022-01-31T12:00:00.000Z',
  exampleSelect: 'three',
  exampleAutocomplete: 'four',
  exampleRangeSlider: [28],
}

const examples = [
  {
    name: 'Formik',
    uri: '/iframe.html?id=forms-usage-formik--default&viewMode=story',
  },
  {
    name: 'react-hook-form',
    uri: '/iframe.html?id=forms-usage-react-hook-form--default&viewMode=story',
  },
  {
    name: 'Native',
    uri: '/iframe.html?id=forms-usage-native--default&viewMode=story',
  },
]

test.describe('Form examples, empty', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 })
  })

  examples.forEach(({ name, uri }) => {
    test.describe(name, () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(uri, { waitUntil: 'domcontentloaded' })
      })

      test('renders the relevant fields', async ({ page }) => {
        await expect(page.locator(selectors.input.email)).toBeVisible()
        await expect(page.locator(selectors.input.password)).toBeVisible()
        await expect(page.locator(selectors.input.description)).toBeVisible()
        await expect(page.locator(selectors.input.radio).nth(0)).toBeVisible()
        await expect(
          page.locator(selectors.input.checkbox).nth(0)
        ).toBeVisible()
        await expect(page.locator(selectors.input.switch)).toBeVisible()
        await expect(page.locator(selectors.input.numberInput)).toBeVisible()
        await expect(page.locator(selectors.input.datePicker)).toBeVisible()
        await expect(page.locator(selectors.input.select)).toBeVisible()
        await expect(page.locator(selectors.input.autocomplete)).toBeVisible()
        await expect(page.locator(selectors.input.rangeSlider)).toBeVisible()
      })

      test('shows validation errors when an empty form is submitted', async ({
        page,
      }) => {
        await page.click(selectors.submit)

        await expect(page.locator('text=Required')).toBeVisible()
      })

      test.describe('when the form is filled in correctly', () => {
        test.beforeEach(async ({ page }) => {
          await page.fill(selectors.input.email, 'hello@world.com')

          await page.fill(selectors.input.password, 'password')

          await page.fill(selectors.input.description, 'Hello, World!')

          await page.locator(selectors.input.radio).nth(0).click()

          await page.locator(selectors.input.checkbox).nth(1).click()

          await page.locator(selectors.input.switchOption).nth(0).click()

          await page.click(selectors.input.numberInputIncrease)

          await page.fill(selectors.input.datePickerInput, '31/01/2022')

          await page.click(selectors.input.select)
          await page.keyboard.press('t')
          await page.keyboard.press('h')
          await page.keyboard.press('Enter')

          await page.fill(selectors.input.autocomplete, 'fo')
          await page.keyboard.press('Enter')

          await page.click(selectors.input.rangeSliderRail, {
            position: { x: 800, y: 5 },
          })
        })

        test('shows no validation errors', async ({ page }) => {
          await expect(page.locator('text=Required')).toHaveCount(0)
        })

        test.describe('and the form is submitted', () => {
          test.beforeEach(async ({ page }) => {
            await page.click(selectors.submit)
          })

          test('disables the submit button', async ({ page }) => {
            await expect(page.locator(selectors.submit)).toBeDisabled()
          })

          test('submits the form values', async ({ page }) => {
            await page.locator(selectors.values).waitFor({ state: 'visible' })

            const submittedValues = await page
              .locator(selectors.values)
              .textContent()

            await expect(JSON.parse(submittedValues as string)).toEqual(
              expectedResult
            )
          })
        })
      })
    })
  })
})
