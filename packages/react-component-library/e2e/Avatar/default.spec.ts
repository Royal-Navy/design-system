import { expect, test } from '../test'
import selectors from './selectors'

test.describe('Avatar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/iframe.html?id=avatar--default&viewMode=story')
  })

  test('renders the avatar', async ({ page }) => {
    await expect(page.locator(selectors.content)).toHaveText('AT')
  })
})
