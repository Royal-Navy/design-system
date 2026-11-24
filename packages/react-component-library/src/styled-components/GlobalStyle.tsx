import React, { createContext, useMemo } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import {
  ColorMode,
  lightTheme,
  themeColor,
  colorByMode,
  fontSize,
  getColorVariables,
  Theme,
} from '@royalnavy/design-tokens'

export interface GlobalStyleContextDefaults {
  theme?: Record<string, unknown>
}

export interface GlobalStyleProviderProps {
  children?: React.ReactNode
  theme?: Record<string, unknown>
  /**
   * Experimental: enable colour modes, so passing `darkTheme` switches the
   * components to the dark colour set. This API may change without notice.
   */
  unstable_colorModes?: boolean
}

// Declared on :root so content rendered through portals is themed too.
const ThemeVariables = createGlobalStyle<{
  $variables: Record<string, string>
}>`
  :root {
    ${({ $variables }) =>
      Object.entries($variables)
        .map(([name, value]) => `${name}: ${value};`)
        .join('\n')}
  }
`

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
 * Globally setting anchor styles
 */
const Hyperlinks = createGlobalStyle`
  a {
    color: ${({ theme }) =>
      colorByMode('action', '500', '400', theme as Theme)};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

// Native text and <button> colours default to black and buttonface.
const DarkModeResets = createGlobalStyle`
  html {
    color: ${themeColor('neutral', '600')};
  }

  button {
    color: inherit;
    background-color: transparent;
  }
`

/**
 * Generate base font size
 */
const Fonts = createGlobalStyle`
  html {
    font-family: "lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: ${fontSize('m')};
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
  theme: undefined,
}

export const GlobalStyleContext = createContext(globalStyleContextDefaults)

export const GlobalStyleProvider = ({
  children,
  theme = lightTheme,
  unstable_colorModes: isColorModesEnabled = false,
}: GlobalStyleProviderProps) => {
  const colorMode: ColorMode =
    isColorModesEnabled && (theme as Theme).mode === 'dark' ? 'dark' : 'light'

  const providedTheme = useMemo(
    () => ({ ...theme, colorMode }),
    [theme, colorMode]
  )

  const contextValue = useMemo(
    () => ({
      theme: providedTheme,
    }),
    [providedTheme]
  )

  const colorVariables = useMemo(
    () => (isColorModesEnabled ? getColorVariables(theme as Theme) : null),
    [theme, isColorModesEnabled]
  )

  return (
    <GlobalStyleContext.Provider value={contextValue}>
      <Normalize />
      <BoxSizing />
      {colorVariables && <ThemeVariables $variables={colorVariables} />}
      {colorMode === 'dark' && <DarkModeResets />}
      <Fonts />
      <ThemeProvider theme={providedTheme}>
        <Hyperlinks />
        {children}
      </ThemeProvider>
    </GlobalStyleContext.Provider>
  )
}
