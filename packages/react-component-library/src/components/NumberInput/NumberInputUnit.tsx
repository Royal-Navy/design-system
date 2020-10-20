import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

const { fontSize } = selectors

interface NumberInputUnitProps {
  children: string
  left: string
  top: string
}

interface StyledNumberInputUnitProps {
  left: string
  top: string
}

const StyledNumberInputUnit = styled.span<StyledNumberInputUnitProps>`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  font-size: ${fontSize('base')};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
`

export const NumberInputUnit: React.FC<NumberInputUnitProps> = (props) => {
  if (!props.children) {
    return null
  }

  return <StyledNumberInputUnit data-testid="number-input-unit" {...props} />
}

NumberInputUnit.displayName = 'NumberInputUnit'
