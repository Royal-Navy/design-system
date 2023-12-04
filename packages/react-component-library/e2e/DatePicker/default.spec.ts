import { ColorNeutral200 } from '@royalnavy/design-tokens'
import { startOfMonth } from 'date-fns'

import { formatDatesForInput } from '../../src/components/DatePicker/utils'
import { DATE_FORMAT } from '../../src/constants'
import { expect, test } from '../fixtures'
import { hexToRgb } from '../helpers'
import selectors from './selectors'

test.describe('DatePicker, default', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=date-picker--default&viewMode=story')
  })

  test.describe('when the expand button is clicked', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.button)
    })

    test('shows the days', async ({ page }) => {
      await expect(page.locator(selectors.floatingBox)).toBeVisible()
    })

    test.describe('and the first day is clicked', () => {
      test.beforeEach(async ({ page }) => {
        await page.click(`${selectors.day.inside}:has-text("1")`)
      })

      test('sets the value of the input to the date', async ({ page }) => {
        const from = startOfMonth(new Date())
        const expected = formatDatesForInput(from, null, DATE_FORMAT.SHORT)

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
