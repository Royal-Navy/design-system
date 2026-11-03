import { Page } from '@playwright/test'

import { expect, test } from '../fixtures'
import selectors from './selectors'

async function recordActions(page: Page) {
  await page.evaluate(() => {
    const win = window as unknown as {
      recordedActions: string[]
      __STORYBOOK_ADDONS_CHANNEL__: {
        on: (event: string, cb: (e: { data: { name: string } }) => void) => void
      }
    }
    win.recordedActions = []
    // eslint-disable-next-line no-underscore-dangle
    win.__STORYBOOK_ADDONS_CHANNEL__.on(
      'storybook/actions/action-event',
      ({ data }) => win.recordedActions.push(data.name)
    )
  })
}

const closeCount = (page: Page) =>
  page.evaluate(
    () =>
      (
        window as unknown as { recordedActions: string[] }
      ).recordedActions.filter((name) => name === 'onClose').length
  )

test.describe('Modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-modal--default&viewMode=story')
    await expect(page.locator(selectors.dialog)).toBeVisible()
    await recordActions(page)
  })

  test('invokes onClose when Escape is pressed', async ({ page }) => {
    await page.keyboard.press('Escape')

    await expect(page.locator(selectors.dialog)).toBeHidden()
    await expect.poll(() => closeCount(page)).toBe(1)
  })

  test('invokes onClose once when the close button is clicked', async ({
    page,
  }) => {
    await page.locator(selectors.closeButton).click()

    await expect(page.locator(selectors.dialog)).toBeHidden()
    await expect.poll(() => closeCount(page)).toBe(1)
  })
})
