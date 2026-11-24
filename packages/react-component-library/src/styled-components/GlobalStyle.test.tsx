import React from 'react'

import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import {
  color,
  darkTheme,
  lightTheme,
  themeColor,
} from '@royalnavy/design-tokens'

import { GlobalStyleProvider } from './GlobalStyle'

const DARK_MODE_BUTTON_RESET =
  'button{color:inherit;background-color:transparent;}'

function hyperlinkRule(value: string): string {
  return `a{color:${value};`.replace(/\s+/g, '')
}

function renderGlobalCss(element: React.ReactElement): string {
  const sheet = new ServerStyleSheet()

  try {
    renderToString(sheet.collectStyles(element))
    return sheet.getStyleTags().replace(/\s+/g, '')
  } finally {
    sheet.seal()
  }
}

describe('GlobalStyleProvider', () => {
  let css: string

  describe.each([
    ['no theme is provided', <GlobalStyleProvider />],
    [
      'the dark theme is provided without enabling colour modes',
      <GlobalStyleProvider theme={darkTheme} />,
    ],
  ])('when %s', (_, element) => {
    beforeEach(() => {
      css = renderGlobalCss(element)
    })

    it('does not declare colour variables', () => {
      expect(css).not.toMatch(/--rn-color-[\w-]+:/)
    })

    it('does not apply the dark mode resets', () => {
      expect(css).not.toContain(DARK_MODE_BUTTON_RESET)
    })

    it('uses the light hyperlink shade', () => {
      expect(css).toContain(hyperlinkRule(themeColor('action', '500')))
    })
  })

  describe('when colour modes are enabled with the light theme', () => {
    beforeEach(() => {
      css = renderGlobalCss(
        <GlobalStyleProvider theme={lightTheme} unstable_colorModes />
      )
    })

    it('declares the light colour variables', () => {
      expect(css).toContain(
        `--rn-color-action-500:${color('action', '500', lightTheme)};`
      )
    })

    it('does not apply the dark mode resets', () => {
      expect(css).not.toContain(DARK_MODE_BUTTON_RESET)
    })
  })

  describe('when colour modes are enabled with the dark theme', () => {
    beforeEach(() => {
      css = renderGlobalCss(
        <GlobalStyleProvider theme={darkTheme} unstable_colorModes />
      )
    })

    it('declares the dark colour variables', () => {
      expect(css).toContain(
        `--rn-color-neutral-white:${color('neutral', 'white', darkTheme)};`
      )
    })

    it('applies the dark mode resets', () => {
      expect(css).toContain(DARK_MODE_BUTTON_RESET)
    })

    it('uses the dark hyperlink shade', () => {
      expect(css).toContain(hyperlinkRule(themeColor('action', '400')))
    })
  })
})
