import '@defencedigital/fonts'
import { ResizeObserver } from '@juggle/resize-observer'

import { GlobalStyleProvider } from '../src/styled-components/GlobalStyle'

window.ResizeObserver ??= ResizeObserver

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
  jsx: {
    // Filter out callback props injected by the Actions addon
    // from dynamic code snippets on the Docs tab as these are
    // noisy and usually not needed
    filterProps: (value) =>
      value !== undefined && value?.name !== 'actionHandler',
  },
  docs: {
    source: {
      // Avoid breaking IE11 on Chromatic as WeakSet isn't available
      // there
      type: typeof WeakSet === undefined ? 'code' : 'auto',
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      includeNames: false,
    },
  },
}

export const decorators = [
  (Story) => (
    <GlobalStyleProvider>
      <Story />
    </GlobalStyleProvider>
  ),
]
