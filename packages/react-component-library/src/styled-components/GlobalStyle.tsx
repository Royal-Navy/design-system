import React, { createContext } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import { selectors, BreakpointSize, lightTheme } from '@royalnavy/design-tokens'

export interface GlobalStyleContextDefaults {
  theme?: Record<string, any>
}

export interface GlobalStyleProviderProps {
  children?: React.ReactNode
  theme?: Record<string, any>
}

const breakpoints: BreakpointSize[] = ['s', 'xs', 'm', 'l', 'xl', 'xxl']

const { mq, breakpoint, fontSize } = selectors

/**
 * Globally setting `border-box`
 */
const BoxSizing = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
`

/**
 * Generate base font size
 */
const Fonts = createGlobalStyle`
  html {
    font-family: "lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    ${breakpoints
      .map((bp) => {
        return mq({ gte: bp })`
          font-size: ${breakpoint(bp).baseFontSize};
        `
      })
      .join('\n\n')}
  }

  h1,
  .rn-h1 {
    margin: 0;
    font-size: ${fontSize('xxl')};
  }

  h2,
  .rn-h2 {
    margin: 0;
    font-size: ${fontSize('xl')};
  }

  h3,
  .rn-h3 {
    margin: 0;
    font-size: ${fontSize('l')};
  }

  h4,
  .rn-h4 {
    margin: 0;
    font-size: ${fontSize('m')};
  }

  h5,
  .rn-h5 {
    margin: 0;
    font-size: ${fontSize('base')};
  }

  h6,
  .rn-h6 {
    margin: 0;
    font-size: ${fontSize('s')};
  }

  ol, ul, li,
  p, .rn-p {
    margin: 0;
    font-size: ${fontSize('base')};
    line-height: 1.5;
  }
`

const globalStyleContextDefaults: GlobalStyleContextDefaults = {
  theme: null,
}

export const GlobalStyleContext = createContext(globalStyleContextDefaults)

export const GlobalStyleProvider: React.FC<GlobalStyleProviderProps> = ({
  children,
  theme = lightTheme,
}) => {
  return (
    <GlobalStyleContext.Provider value={{ theme }}>
      <Normalize />
      <BoxSizing />
      <Fonts />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalStyleContext.Provider>
  )
}
