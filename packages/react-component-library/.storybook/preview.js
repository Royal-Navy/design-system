import '@defencedigital/css-framework/index.scss'
import '@defencedigital/fonts'

/**
 * Hacky way of clicking on Docs button on first load of page.
 * https://github.com/storybookjs/storybook/issues/13128
 *
 */
function clickDocsButtonOnFirstLoad() {
  window.removeEventListener('load', clickDocsButtonOnFirstLoad)

  try {
    const docsButtonSelector = window.parent.document.evaluate(
      "//button[contains(., 'Docs')]",
      window.parent.document,
      null,
      XPathResult.ANY_TYPE,
      null
    )

    const button = docsButtonSelector.iterateNext()

    button.click()
  } catch (error) {
    console.warn('Failed to set default Storybook tab', error)
  }
}

window.addEventListener('load', clickDocsButtonOnFirstLoad)

export const parameters = {
  layout: 'fullscreen',
  docs: {
    source: {
      type: 'code',
    },
  },
}
