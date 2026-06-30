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

function getThemeMode(context) {
  const globals =
    context?.store?.userGlobals?.globals ??
    context?.store?.globals?.get?.() ??
    context?.globals ??
    {}

  return globals.theme === 'dark' ? 'dark' : 'light'
}

function getThemeFromContext(context) {
  return THEMES[getThemeMode(context)] ?? lightTheme
}

const ThemedDocsContainer = ({ context, children }) => {
  const mode = getThemeMode(context)

  return (
    <DocsContainer
      context={context}
      theme={mode === 'dark' ? themes.dark : themes.light}
    >
      <GlobalStyleProvider theme={THEMES[mode]}>{children}</GlobalStyleProvider>
    </DocsContainer>
  )
}

const ThemedCanvas = ({ theme, children }) => (
  <GlobalStyleProvider theme={theme}>
    <div
      style={{
        background: color('neutral', 'white', theme),
        color: color('neutral', '600', theme),
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
    const theme = getThemeFromContext(context)
    const queryParams = new URLSearchParams(window.location.search)

    if (queryParams.get('viewMode') === 'docs') {
      // In docs, the surrounding GlobalStyleProvider is supplied by the
      // themed docs container; only give each embedded preview a themed
      // background so it doesn't sit on Storybook's default light canvas.
      return (
        <div
          style={{
            background: color('neutral', '000', theme),
            color: color('neutral', '600', theme),
          }}
        >
          {Story()}
        </div>
      )
    }

    return <ThemedCanvas theme={theme}>{Story()}</ThemedCanvas>
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
