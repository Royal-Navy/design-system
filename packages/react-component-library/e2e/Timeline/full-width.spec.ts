import { DEFAULTS } from '../../src/components/Timeline/constants'
import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Compound Timeline', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(
      '/iframe.html?id=components-compound-timeline--full-width&viewMode=story'
    )
  })

  test('renders the month', async ({ page }) => {
    await expect(page.locator(selectors.month)).toHaveText('October 2020')
  })

  test('renders the weeks', async ({ page }) => {
    await expect(page.locator(selectors.week)).toHaveText([
      '28/09',
      '05/10',
      '12/10',
      '19/10',
      '26/10',
    ])
  })

  test('renders the days', async ({ page }) => {
    await expect(page.locator(selectors.day)).toHaveCount(31)
  })

  test('does not renders the hours', async ({ page }) => {
    await expect(page.locator(selectors.hour)).toHaveCount(0)
  })

  test('renders the events', async ({ page }) => {
    await expect(page.locator(selectors.event)).toHaveText([
      'Event 1',
      'Event 2',
    ])
  })

  test('fills the width', async ({ page }) => {
    await expect(page.locator(selectors.month)).toHaveCSS('width', '1023px')
  })

  test('still fills the width after resizing the viewport wider', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1500, height: 768 })
    await expect(page.locator(selectors.month)).toHaveCSS('width', '1499px')
  })

  test('is at the minimum width after resizing the viewport smaller', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 800, height: 600 })

    const width = DEFAULTS.UNIT_WIDTH * 31
    await expect(page.locator(selectors.month)).toHaveCSS('width', `${width}px`)
  })

  test.describe('when navigating left', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.toolbar.navigateLeft)
    })

    test('moves to the previous month', async ({ page }) => {
      await expect(page.locator(selectors.month)).toHaveText('September 2020')
    })

    test('stays on the same month after resizing the viewport', async ({
      page,
    }) => {
      await page.setViewportSize({ width: 1500, height: 768 })
      await expect(page.locator(selectors.month)).toHaveCSS('width', '1499px')

      await expect(page.locator(selectors.month)).toHaveText('September 2020')
    })
  })

  test.describe('when navigating right', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.toolbar.navigateRight)
    })

    test('moves to the previous month', async ({ page }) => {
      await expect(page.locator(selectors.month)).toHaveText('November 2020')
    })

    test('stays on the same month after resizing the viewport', async ({
      page,
    }) => {
      await page.setViewportSize({ width: 1500, height: 768 })
      await expect(page.locator(selectors.month)).toHaveCSS('width', '1499px')

      await expect(page.locator(selectors.month)).toHaveText('November 2020')
    })
  })

  const ZOOM_PARAMS = [
    {
      clickCount: 1,
      testDesc: 'once',
      params: {
        weeks: ['28/09', '05/10'],
        days: 7,
        hours: 28,
        events: ['Event 2'],
      },
    },
    {
      clickCount: 2,
      testDesc: 'twice',
      params: {
        weeks: ['28/09', '05/10'],
        days: 5,
        hours: 20,
        events: ['Event 2'],
      },
    },
    {
      clickCount: 3,
      testDesc: 'thrice',
      params: {
        weeks: ['28/09'],
        days: 3,
        hours: 12,
        events: ['Event 2'],
      },
    },
    {
      clickCount: 4,
      testDesc: 'four times',
      params: {
        weeks: ['28/09'],
        days: 1,
        hours: 24,
        events: [],
      },
    },
  ]

  ZOOM_PARAMS.forEach(
    ({ clickCount, testDesc, params: { weeks, days, hours, events } }) => {
      test.describe(`when zooming in ${testDesc}`, () => {
        test.beforeEach(async ({ page }) => {
          await page.click(selectors.toolbar.zoomIn, { clickCount })
        })

        test('renders the month', async ({ page }) => {
          await expect(page.locator(selectors.month)).toHaveText('October 2020')
        })

        test('renders the weeks', async ({ page }) => {
          await expect(page.locator(selectors.week)).toHaveText(weeks)
        })

        test('renders the days', async ({ page }) => {
          await expect(page.locator(selectors.day)).toHaveCount(days)
        })

        test('renders the hours', async ({ page }) => {
          await expect(page.locator(selectors.hour)).toHaveCount(hours)
        })

        test('renders the events', async ({ page }) => {
          await expect(page.locator(selectors.event)).toHaveText(events)
        })

        test('fills the width', async ({ page }) => {
          await expect(page.locator(selectors.month)).toHaveCSS(
            'width',
            '1023px'
          )
        })

        test('is still zoomed in after resizing the viewport', async ({
          page,
        }) => {
          await page.setViewportSize({ width: 1500, height: 768 })
          await expect(page.locator(selectors.month)).toHaveCSS(
            'width',
            '1499px'
          )

          await expect(page.locator(selectors.day)).toHaveCount(days)
          await expect(page.locator(selectors.hour)).toHaveCount(hours)
        })
      })
    }
  )
})
