import React, { createContext, useMemo } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Normalize } from 'styled-normalize'
import {
  lightTheme,
  color,
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
}

/**
 * Expose the active theme's colour tokens as CSS custom properties on the
 * root, so every `color(...)` reference (which resolves to a `var(--color-*)`)
 * reacts to the theme — including content rendered through portals that sits
 * outside the provider's DOM subtree.
 */
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

/**
 * Generate base font size
 */
/**
 * Dark-mode-only resets. Light mode keeps the original native defaults so it
 * renders exactly as before; these only apply when the dark theme is active.
 *  - Give unstyled text an explicit light colour (native default is black).
 *  - Neutralise the native <button> colour (ButtonText) and background
 *    (buttonface) so currentColor icons inside unstyled icon-buttons stay
 *    legible. Styled buttons set their own colour/background and are unaffected.
 */
const DarkModeResets = createGlobalStyle`
  html {
    color: ${color('neutral', '600')};
  }

  button {
    color: inherit;
    background-color: transparent;
  }
`

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
}: GlobalStyleProviderProps) => {
  const contextValue = useMemo(
    () => ({
      theme,
    }),
    [theme]
  )

  const colorVariables = useMemo(
    () => getColorVariables(theme as Theme),
    [theme]
  )

  const isDark = (theme as Theme)?.mode === 'dark'

  return (
    <GlobalStyleContext.Provider value={contextValue}>
      <Normalize />
      <BoxSizing />
      <ThemeVariables $variables={colorVariables} />
      {isDark && <DarkModeResets />}
      <Hyperlinks />
      <Fonts />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalStyleContext.Provider>
  )
}
