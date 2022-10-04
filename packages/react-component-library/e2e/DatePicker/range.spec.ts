import { ColorNeutral200 } from '@defencedigital/design-tokens'
import { addDays, startOfMonth, format } from 'date-fns'

import { formatDatesForInput } from '../../src/components/DatePicker/utils'
import { DATE_FORMAT } from '../../src/constants'
import { hexToRgb } from '../helpers'
import { expect, test } from '../test'
import selectors from './selectors'

test.describe('DatePicker, range', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=date-picker--range&viewMode=story')
  })

  test.describe('when the expand button is clicked', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.button)
    })

    test('shows the days', async ({ page }) => {
      await expect(page.locator(selectors.floatingBox)).toBeVisible()
    })

    test.describe('and a day is clicked', () => {
      test.beforeEach(async ({ page }) => {
        await page.click(`${selectors.day.inside}:has-text("1")`)
      })

      test('sets the value of the input to the date', async ({ page }) => {
        const expected = format(startOfMonth(new Date()), DATE_FORMAT.SHORT)

        await expect(page.locator(selectors.input)).toHaveValue(expected)
      })

      test.describe('and another day is clicked', () => {
        test.beforeEach(async ({ page }) => {
          await page.click(`${selectors.day.inside}:has-text("10")`)
        })

        test('sets the value of the input to the date range', async ({
          page,
        }) => {
          const from = startOfMonth(new Date())
          const to = addDays(from, 9)
          const expected = formatDatesForInput(from, to, DATE_FORMAT.SHORT)

          await expect(page.locator(selectors.input)).toHaveValue(expected)
        })

        test('is not in an error state', async ({ page }) => {
          await expect(page.locator(selectors.outerWrapper)).toHaveCSS(
            'box-shadow',
            `${hexToRgb(ColorNeutral200)} 0px 0px 0px 1px`
          )
        })
      })
    })
  })
})
