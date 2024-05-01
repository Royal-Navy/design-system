import React from 'react'
import {
  ColorGroup,
  getColorDescription,
  getColors,
  selectors,
} from '@royalnavy/design-tokens'

import {
  StyledDescription,
  StyledHexValue,
  StyledRow,
  StyledSwatch,
  StyledWeight,
} from './partials'

const { color } = selectors

type PaletteProps = {
  group: ColorGroup
}

export const DesignSystemPalette = ({ group }: PaletteProps) => {
  const colors = getColors(group)

  return (
    <>
      {colors
        .sort((a, b) => a.localeCompare(b))
        .map((value) => (
          <StyledRow>
            <StyledSwatch $backgroundColor={color(group, value)} />
            <StyledWeight>{value}</StyledWeight>
            <StyledHexValue>{color(group, value)}</StyledHexValue>
            <StyledDescription>
              {getColorDescription(group, value)}
            </StyledDescription>
          </StyledRow>
        ))}
    </>
  )
}
