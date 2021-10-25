import React from 'react'

import { StyledNumberInputUnit } from './partials/StyledNumberInputUnit'

interface NumberInputUnitProps {
  children: string
  left: string
  top: string
}

export const NumberInputUnit: React.FC<NumberInputUnitProps> = ({
  children,
  left,
  top,
}) => {
  if (!children) {
    return null
  }

  return (
    <StyledNumberInputUnit
      data-testid="number-input-unit"
      $left={left}
      $top={top}
    >
      {children}
    </StyledNumberInputUnit>
  )
}

NumberInputUnit.displayName = 'NumberInputUnit'
