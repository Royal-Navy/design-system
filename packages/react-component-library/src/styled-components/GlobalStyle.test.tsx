import React from 'react'

import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { colorValue, darkTheme, lightTheme } from '@royalnavy/design-tokens'

import { GlobalStyleProvider } from './GlobalStyle'

const DARK_MODE_BUTTON_RESET =
  'button{color:inherit;background-color:transparent;}'

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

  describe('when no theme is provided', () => {
    beforeEach(() => {
      css = renderGlobalCss(<GlobalStyleProvider />)
    })

    it('exposes the light colour tokens as CSS variables', () => {
      expect(css).toContain(
        `--rn-color-action-500:${colorValue('action', '500', lightTheme)};`
      )
    })

    it('does not apply the dark mode resets', () => {
      expect(css).not.toContain(DARK_MODE_BUTTON_RESET)
    })

    it('uses the light hyperlink shade', () => {
      expect(css).toContain(
        `a{color:${colorValue('action', '500', lightTheme)};`
      )
    })
  })

  describe('when the dark theme is provided', () => {
    beforeEach(() => {
      css = renderGlobalCss(<GlobalStyleProvider theme={darkTheme} />)
    })

    it('exposes the dark colour tokens as CSS variables', () => {
      expect(css).toContain(
        `--rn-color-neutral-white:${colorValue('neutral', 'white', darkTheme)};`
      )
    })

    it('applies the dark mode resets', () => {
      expect(css).toContain(DARK_MODE_BUTTON_RESET)
    })

    it('uses the dark hyperlink shade', () => {
      expect(css).toContain(
        `a{color:${colorValue('action', '400', darkTheme)};`
      )
    })
  })
})
