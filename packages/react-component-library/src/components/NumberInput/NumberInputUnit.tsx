import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { fontSize } = selectors

interface NumberInputUnitProps {
  offset: number
  unit: string
}

interface StyledNumberInputUnitProps {
  offset: number
}

const StyledNumberInputUnit = styled.span<StyledNumberInputUnitProps>`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  font-size: ${fontSize('base')};
  left: ${({ offset }) => `${offset}px`};
`

export const NumberInputUnit: React.FC<NumberInputUnitProps> = ({
  offset,
  unit,
}) => {
  if (!unit) {
    return null
  }

  return (
    <StyledNumberInputUnit
      className="rn-numberinput__unit"
      data-testid="number-input-unit"
      offset={offset}
    >
      {unit}
    </StyledNumberInputUnit>
  )
}

NumberInputUnit.displayName = 'NumberInputUnit'
