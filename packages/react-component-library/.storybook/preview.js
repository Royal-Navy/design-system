import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks'
import { themes } from 'storybook/theming'
import isChromatic from 'chromatic'
import React from 'react'
import { lightTheme, darkTheme, color } from '@royalnavy/design-tokens'
import '@royalnavy/fonts'
import 'iframe-resizer/js/iframeResizer.contentWindow'
import 'url-search-params-polyfill'

import { GlobalStyleProvider } from '../src/styled-components/GlobalStyle'

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
}

function toThemeMode(globals) {
  return globals?.theme === 'dark' ? 'dark' : 'light'
}

// DocsContext doesn't expose globals publicly
function getDocsThemeMode(context) {
  return toThemeMode(
    context?.store?.userGlobals?.globals ?? context?.store?.globals?.get?.()
  )
}

const ThemedDocsContainer = ({ context, children }) => {
  const mode = getDocsThemeMode(context)

  return (
    <DocsContainer
      context={context}
      theme={mode === 'dark' ? themes.dark : themes.light}
    >
      <GlobalStyleProvider
        theme={THEMES[mode]}
        unstable_colorModes={mode === 'dark'}
      >
        {children}
      </GlobalStyleProvider>
    </DocsContainer>
  )
}

const DarkCanvas = ({ children }) => (
  <GlobalStyleProvider theme={darkTheme} unstable_colorModes>
    <div
      style={{
        background: color('neutral', 'white', darkTheme),
        color: color('neutral', '600', darkTheme),
        minHeight: '100vh',
        padding: '1rem 0',
      }}
    >
      {children}
    </div>
  </GlobalStyleProvider>
)

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Design System token set',
    defaultValue: 'light',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      dynamicTitle: true,
    },
  },
}

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
    container: ThemedDocsContainer,
    page: () => <DocsPage />,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      includeNames: false,
      order: [
        'Getting started',
        'Designers',
        'Tokens',
        'Forms',
        [
          'Introduction',
          'Anatomy',
          'Standards',
          'Layout',
          'Alignment and spacing',
          'Validation',
          '*',
        ],
        'Components',
        '*',
      ],
    },
  },
}

export const decorators = [
  // https://github.com/storybookjs/storybook/issues/15223#issuecomment-1092837912
  (Story, context) => {
    const isDark = toThemeMode(context.globals) === 'dark'
    const queryParams = new URLSearchParams(window.location.search)

    if (queryParams.get('viewMode') === 'docs') {
      if (!isDark) {
        return Story()
      }

      return (
        <div
          style={{
            background: color('neutral', '000', darkTheme),
            color: color('neutral', '600', darkTheme),
          }}
        >
          {Story()}
        </div>
      )
    }

    if (!isDark) {
      return <GlobalStyleProvider>{Story()}</GlobalStyleProvider>
    }

    return <DarkCanvas>{Story()}</DarkCanvas>
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
export const tags = ['autodocs']
