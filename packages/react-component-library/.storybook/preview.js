import { DocsPage } from '@storybook/addon-docs'
import isChromatic from 'chromatic'
import React from 'react'
import '@defencedigital/fonts'
import 'iframe-resizer/js/iframeResizer.contentWindow'
import 'url-search-params-polyfill'
import { withPerformance } from 'storybook-addon-performance/dist/cjs'

import { GlobalStyleProvider } from '../src/styled-components/GlobalStyle'

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

if (window.parent !== window && window.parent.document.evaluate)
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
    page: () => (
      <GlobalStyleProvider>
        <DocsPage />
      </GlobalStyleProvider>
    ),
  },
  options: {
    storySort: {
      method: 'alphabetical',
      includeNames: false,
    },
  },
}

export const decorators = [
  // https://github.com/storybookjs/storybook/issues/15223#issuecomment-1092837912
  (Story) => {
    const queryParams = new URLSearchParams(window.location.search)

    if (queryParams.get('viewMode') === 'docs') {
      return Story()
    }

    return <GlobalStyleProvider>{Story()}</GlobalStyleProvider>
  },
  withPerformance,
]

// Preload the body font on Chromatic to avoid problem with
// inconsistent floating box positioning
const fontLoader = async () => ({
  fonts: await document.fonts.load('400 1em Lato'),
})

export const loaders = isChromatic() && document.fonts ? [fontLoader] : []
