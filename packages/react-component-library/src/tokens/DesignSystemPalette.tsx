import React from 'react'
import { color, ColorGroup } from '@royalnavy/design-tokens'

import {
  StyledDescription,
  StyledHexValue,
  StyledRow,
  StyledSwatch,
  StyledWeight,
} from './partials'
import { getColorDescription, getColors } from './utils'

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
