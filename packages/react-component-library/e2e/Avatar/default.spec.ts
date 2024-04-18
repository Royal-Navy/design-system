import { expect, test } from '../fixtures'
import selectors from './selectors'

test.describe('Avatar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=components-avatar--default&viewMode=story')
  })

  test('renders the avatar', async ({ page }) => {
    await expect(page.locator(selectors.content)).toHaveText('AT')
  })
})
