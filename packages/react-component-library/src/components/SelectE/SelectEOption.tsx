import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledOption } from './partials/StyledOption'

export interface SelectEOptionProps extends ComponentWithClass {
  children: string
  isHighlighted?: boolean
  value: string
}

export const SelectEOption: React.FC<SelectEOptionProps> = ({
  children,
  isHighlighted,
  ...rest
}) => (
  <StyledOption
    $isHighlighted={isHighlighted}
    data-testid="select-option"
    {...rest}
  >
    {children}
  </StyledOption>
)

SelectEOption.displayName = 'SelectEOption'
