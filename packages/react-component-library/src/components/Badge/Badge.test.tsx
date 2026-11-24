import React from 'react'

import 'jest-styled-components'
import {
  themeColor,
  ColorGroup,
  ColorShade,
  darkTheme,
} from '@royalnavy/design-tokens'
import { render, RenderResult } from '@testing-library/react'

import { GlobalStyleProvider } from '../../styled-components/GlobalStyle'
import {
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
  Badge,
} from '.'

describe('Badge', () => {
  let wrapper: RenderResult

  describe('when provided with additional custom props', () => {
    beforeEach(() => {
      wrapper = render(
        <Badge
          color={BADGE_COLOR.ACTION}
          colorVariant={BADGE_COLOR_VARIANT.SOLID}
          size={BADGE_SIZE.REGULAR}
          variant={BADGE_VARIANT.PILL}
          data-arbitrary="example"
        >
          Hello, World!
        </Badge>
      )
    })

    it('applies the props to the wrapper element', () => {
      expect(wrapper.getByTestId('badge')).toHaveAttribute(
        'data-arbitrary',
        'example'
      )
    })
  })

  describe.each<[keyof typeof BADGE_COLOR, ColorShade, ColorShade]>([
    ['SUCCESS', '800', '900'],
    ['WARNING', '800', '900'],
    ['DANGER', '800', '900'],
    ['SUPA', '600', '900'],
    ['SUPB', '600', '900'],
    ['SUPC', '800', '900'],
    ['SUPD', '800', '900'],
    ['SUPE', '800', '900'],
    ['SUPF', '800', '900'],
  ])('when the colour is %s and faded', (colorKey, lightShade, darkShade) => {
    const group = BADGE_COLOR[colorKey] as ColorGroup

    const renderBadge = () => (
      <Badge
        color={BADGE_COLOR[colorKey]}
        colorVariant={BADGE_COLOR_VARIANT.FADED}
      >
        Hello, World!
      </Badge>
    )

    it('uses the light shade for the text by default', () => {
      wrapper = render(renderBadge())

      expect(wrapper.getByTestId('badge')).toHaveStyleRule(
        'color',
        themeColor(group, lightShade)
      )
    })

    it('keeps the light shade for the dark theme without colour modes', () => {
      wrapper = render(
        <GlobalStyleProvider theme={darkTheme}>
          {renderBadge()}
        </GlobalStyleProvider>
      )

      expect(wrapper.getByTestId('badge')).toHaveStyleRule(
        'color',
        themeColor(group, lightShade)
      )
    })

    it('uses the dark shade for the dark theme with colour modes', () => {
      wrapper = render(
        <GlobalStyleProvider theme={darkTheme} unstable_colorModes>
          {renderBadge()}
        </GlobalStyleProvider>
      )

      expect(wrapper.getByTestId('badge')).toHaveStyleRule(
        'color',
        themeColor(group, darkShade)
      )
    })
  })
})
