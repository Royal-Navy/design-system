import { DocsPage } from '@storybook/addon-docs'
import isChromatic from 'chromatic'
import React from 'react'
import '@royalnavy/fonts'
import 'iframe-resizer/js/iframeResizer.contentWindow'
import 'url-search-params-polyfill'

import { GlobalStyleProvider } from '../src/styled-components/GlobalStyle'

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
]

// Preload the body font on Chromatic to avoid problem with
// inconsistent floating box positioning
const fontLoader = async () => ({
  fonts: await Promise.all([
    document.fonts.load('400 1em Lato'),
    document.fonts.load('700 1em Lato'),
  ]),
})

export const loaders = isChromatic() && document.fonts ? [fontLoader] : []
