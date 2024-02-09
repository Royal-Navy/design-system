import React from 'react'
import styled from 'styled-components'
import theme from 'styled-theming'

import { lightTheme, darkTheme, selectors } from '@royalnavy/design-tokens'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { GlobalStyleProvider } from '../../styled-components/GlobalStyle'

const { color, spacing } = selectors

const ThemedMain = styled.div`
  background-color: ${(props) => color('neutral', '100', props.theme)};
  color: white;
  padding: ${(props) => spacing('4', props.theme)};
`

export const CustomTokenSets = () => {
  return (
    <>
      <ThemedMain>No Provider - Default Theme (Light)</ThemedMain>
      <GlobalStyleProvider>
        <ThemedMain>Default Theme (Light)</ThemedMain>
      </GlobalStyleProvider>
      <GlobalStyleProvider theme={lightTheme}>
        <ThemedMain>Light Theme</ThemedMain>
      </GlobalStyleProvider>
      <GlobalStyleProvider theme={darkTheme}>
        <ThemedMain>Dark Theme</ThemedMain>
      </GlobalStyleProvider>
    </>
  )
}

const textColor = theme('mode', {
  light: 'white',
  dark: 'black',
})

const backgroundColor = theme('customThemeMode', {
  foo: 'green',
  bar: 'red',
})

const ThemedMain2 = styled.div`
  color: ${textColor};
  background-color: ${backgroundColor};
  padding: ${(props) => spacing('4', props.theme)};
`

export const StyledTheming = () => {
  return (
    <>
      <GlobalStyleProvider theme={{ customThemeMode: 'foo', ...lightTheme }}>
        <ThemedMain2>Styled Theming (Custom Mode Foo)</ThemedMain2>
      </GlobalStyleProvider>
      <GlobalStyleProvider theme={{ customThemeMode: 'bar', ...lightTheme }}>
        <ThemedMain2>Styled Theming (Custom Mode Bar)</ThemedMain2>
      </GlobalStyleProvider>
    </>
  )
}
