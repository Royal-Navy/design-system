import { Page } from '@playwright/test'

import { expect, test } from '../fixtures'
import selectors from './selectors'

const INITIAL_VIEWPORT_WIDTH = 1400
const VIEWPORT_HEIGHT = 200

async function getTabWidth(page: Page) {
  return (await page.locator(selectors.tabItem).nth(0).boundingBox()).width
}

async function getMaxScrollLeft(page: Page) {
  return page
    .locator(selectors.tabs)
    .evaluate((node) => node.scrollWidth - node.clientWidth)
}

function getScrollLeft(page: Page) {
  return async () =>
    page.locator(selectors.tabs).evaluate((node) => node.scrollLeft)
}

test.describe('TabSet, scrollable', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({
      width: INITIAL_VIEWPORT_WIDTH,
      height: VIEWPORT_HEIGHT,
    })
    await page.goto('/iframe.html?id=tab-set--scrollable&viewMode=story')
  })

  test('scrolls right one tab when the scroll right button is clicked', async ({
    page,
  }) => {
    await page.click(selectors.scrollRight)

    const tabWidth = await getTabWidth(page)
    await expect.poll(getScrollLeft(page)).toBeCloseTo(tabWidth, 0)
  })

  test.describe('when the scroll right button is clicked twice in quick succession', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.scrollRight, { clickCount: 2 })
    })

    test('scrolls right two tabs', async ({ page }) => {
      const tabWidth = await getTabWidth(page)
      await expect.poll(getScrollLeft(page)).toBeCloseTo(tabWidth * 2, 0)
    })

    test('scrolls left one tab when the scroll left button is clicked', async ({
      page,
    }) => {
      await page.click(selectors.scrollLeft)

      const tabWidth = await getTabWidth(page)
      await expect.poll(getScrollLeft(page)).toBeCloseTo(tabWidth, 0)
    })
  })

  test.describe('when the scroll right button is clicked ten time in quick succession', () => {
    test.beforeEach(async ({ page }) => {
      await page.click(selectors.scrollRight, { clickCount: 10 })
    })

    test('scrolls right as far as possible', async ({ page }) => {
      await page.click(selectors.scrollRight)

      const maxScrollLeft = await getMaxScrollLeft(page)
      await expect.poll(getScrollLeft(page)).toBeCloseTo(maxScrollLeft, 0)
    })

    test('scrolls left two and half tabs when the scroll left button is clicked twice', async ({
      page,
    }) => {
      await page.click(selectors.scrollLeft, { clickCount: 2 })

      const tabWidth = await getTabWidth(page)
      await expect.poll(getScrollLeft(page)).toBeCloseTo(tabWidth * 4, 0)
    })

    test('scrolls left all the way when the scroll left button is clicked eight times', async ({
      page,
    }) => {
      await page.click(selectors.scrollLeft, { clickCount: 8 })

      await expect.poll(getScrollLeft(page)).toBeCloseTo(0, 0)
    })
  })

  test.describe('when the tab set is scrolled right fully and the viewport is shrunk by three tab widths', () => {
    test.beforeEach(async ({ page }) => {
      await page.locator(selectors.tabs).evaluate((node) => {
        // eslint-disable-next-line no-param-reassign
        node.scrollLeft = 9999
      })
      const tabWidth = await getTabWidth(page)
      await page.setViewportSize({
        width: INITIAL_VIEWPORT_WIDTH - Math.round(tabWidth * 3),
        height: VIEWPORT_HEIGHT,
      })
    })

    test('scrolls right one tab when the scroll right button is clicked', async ({
      page,
    }) => {
      await page.click(selectors.scrollRight)

      const tabWidth = await getTabWidth(page)
      await expect.poll(getScrollLeft(page)).toBeCloseTo(tabWidth * 7, 0)
    })

    test('scrolls right as far as possible when the scroll right button is clicked four times', async ({
      page,
    }) => {
      await page.click(selectors.scrollRight, { clickCount: 4 })

      const maxScrollLeft = await getMaxScrollLeft(page)
      await expect.poll(getScrollLeft(page)).toBeCloseTo(maxScrollLeft, 0)
    })

    test('scrolls left one tab when the scroll left button is clicked', async ({
      page,
    }) => {
      await page.click(selectors.scrollLeft)

      const tabWidth = await getTabWidth(page)
      await expect.poll(getScrollLeft(page)).toBeCloseTo(tabWidth * 5, 0)
    })

    test('scrolls left all the way when the scroll left button is clicked six times', async ({
      page,
    }) => {
      await page.click(selectors.scrollLeft, { clickCount: 6 })
      await expect.poll(getScrollLeft(page)).toBeCloseTo(0, 0)
    })
  })
})
