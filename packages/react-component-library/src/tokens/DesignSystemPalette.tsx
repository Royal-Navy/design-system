import React from 'react'
import {
  ColorGroup,
  getColorDescription,
  getColors,
  selectors,
} from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing, fontSize } = selectors

const StyledRow = styled.div`
  border-bottom: solid 1px ${color('neutral', '100')};
  padding: ${spacing('2')} 0;
  display: flex;
  gap: ${spacing('8')};
  height: ${spacing('12')};
  color: ${color('neutral', '400')};

  align-items: center;

  div {
    font-size: ${fontSize('base')} !important;
  }
`

const StyledSwatch = styled.div<{ $backgroundColor: string }>`
  min-width: ${spacing('15')};
  height: 100%;
  background-color: ${(props) => props.$backgroundColor};
`

const StyledHexValue = styled.div`
  min-width: ${spacing('15')};
  font-family: Menlo, Consolas, 'Liberation Mono', monospace !important;
`

const StyledColorWeight = styled.div`
  font-family: Menlo, Consolas, 'Liberation Mono', monospace !important;
  min-width: ${spacing('13')};
`

const StyledDescription = styled.div`
  flex: 1;
`

type PaletteProps = {
  group: ColorGroup
}

export const DesignSystemPalette = ({ group }: PaletteProps) => {
  const colors = getColors(group)

  return (
    <>
      {colors.sort().map((value) => (
        <StyledRow>
          <StyledSwatch $backgroundColor={color(group, value)} />
          <StyledColorWeight>{value}</StyledColorWeight>
          <StyledHexValue>{color(group, value)}</StyledHexValue>
          <StyledDescription>
            {getColorDescription(group, value)}
          </StyledDescription>
        </StyledRow>
      ))}
    </>
  )
}
