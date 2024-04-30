import React from 'react'
import { ColorGroup, getColors, selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { color, spacing, fontSize } = selectors

type PaletteProps = {
  group: ColorGroup
  subtitle?: string
}

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

const Swatch = styled.div<{ $backgroundColor: string }>`
  min-width: ${spacing('15')};
  height: 100%;
  background-color: ${(props) => props.$backgroundColor};
`

const HexValue = styled.div`
  min-width: ${spacing('15')};
  font-family: Menlo, Consolas, 'Liberation Mono', monospace !important;
`

const ColorWeight = styled.div`
  font-family: Menlo, Consolas, 'Liberation Mono', monospace !important;
  min-width: ${spacing('13')};
`

const Description = styled.div`
  flex: 1;
`

export const DesignSystemPalette = (props: PaletteProps) => {
  const { group, subtitle = '' } = props

  const colors = getColors(group)

  return (
    <div>
      <strong>{group}</strong> - {subtitle}
      <br />
      {colors.sort().map((value) => (
        <StyledRow>
          <Swatch $backgroundColor={color(group, value)} />
          <ColorWeight>{value}</ColorWeight>
          <HexValue>{color(group, value)}</HexValue>
          <Description>...</Description>
        </StyledRow>
      ))}
    </div>
  )
}
