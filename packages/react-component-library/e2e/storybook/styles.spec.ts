import { expect, test } from '../fixtures'

async function getInjectedStyles(page) {
  await page.waitForSelector('style[data-styled]', { state: 'attached' })

  return page.evaluate(() => {
    const styles = [...document.head.querySelectorAll('style')]
    return styles.map((style) => style.innerHTML).join('\n')
  })
}

// eslint-disable-next-line playwright/no-skipped-test
test.describe.skip('Storybook, global styles', () => {
  test.describe('canvas tab', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/iframe.html?args=&id=button--default&viewMode=story')
    })

    test('renders the global styles once', async ({ page }) => {
      expect(await getInjectedStyles(page)).toContain('h1')
    })
  })

  test.describe('docs tab', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/iframe.html?args=&id=button--default&viewMode=docs')
    })

    test('renders the global styles once', async ({ page }) => {
      expect(await getInjectedStyles(page)).toContain('h1')
    })
  })
})
