import React from 'react'

import { BADGE_SIZE, BADGE_VARIANT } from '../Badge'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledOption } from './partials/StyledOption'
import { StyledOptionBadge } from './partials/StyledOptionBadge'
import { StyledOptionText } from './partials/StyledOptionText'

export interface SelectEOptionProps extends ComponentWithClass {
  badge?: string | number
  icon?: React.ReactNode
  children: string
  isHighlighted?: boolean
  value: string
}

export const SelectEOption = React.forwardRef<
  HTMLLIElement,
  SelectEOptionProps
>(({ badge, icon, children, isHighlighted, ...rest }, ref) => {
  return (
    <StyledOption
      $isHighlighted={isHighlighted}
      data-testid="select-option"
      ref={ref}
      {...rest}
    >
      {icon}
      <StyledOptionText>{children}</StyledOptionText>
      {badge && (
        <StyledOptionBadge
          data-testid="select-badge"
          size={BADGE_SIZE.XSMALL}
          variant={BADGE_VARIANT.PILL}
        >
          {badge}
        </StyledOptionBadge>
      )}
    </StyledOption>
  )
})

SelectEOption.displayName = 'SelectEOption'
