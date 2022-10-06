import { expect, test } from '../test'

function getGlobalStyles(selectorText) {
  return Array.prototype.flatMap
    .call(window.document.styleSheets, (styleSheet) => [...styleSheet.cssRules])
    .filter((rule) => rule.selectorText === selectorText)
}

test.describe('Storybook, global styles', () => {
  test.describe('canvas tab', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/iframe.html?args=&id=button--default&viewMode=story')
    })

    test('renders the global styles once', async ({ page }) => {
      expect(await page.evaluate(getGlobalStyles, 'h1')).toHaveLength(1)
    })
  })

  test.describe('docs tab', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/iframe.html?args=&id=button--default&viewMode=docs')
    })

    test('renders the global styles once', async ({ page }) => {
      expect(await page.evaluate(getGlobalStyles, 'h1')).toHaveLength(1)
    })
  })
})
