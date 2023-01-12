import React from 'react'

import { BADGE_SIZE, BADGE_VARIANT } from '../Badge'
import { StyledOption } from './partials/StyledOption'
import { StyledOptionBadge } from './partials/StyledOptionBadge'
import { StyledOptionText } from './partials/StyledOptionText'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export interface SelectBaseOptionProps extends ComponentWithClass {
  badge?: string | number
  icon?: React.ReactNode
  isHighlighted?: boolean
  value: string
  title?: string
}

export interface SelectBaseOptionAsStringProps extends SelectBaseOptionProps {
  children: string
}

export const SelectBaseOption = React.forwardRef<
  HTMLLIElement,
  SelectBaseOptionProps
>(({ badge, icon, children, isHighlighted, title, ...rest }, ref) => {
  return (
    <StyledOption
      $isHighlighted={isHighlighted}
      data-testid="select-option"
      ref={ref}
      {...rest}
    >
      {icon}
      <StyledOptionText title={title}>{children}</StyledOptionText>
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

SelectBaseOption.displayName = 'SelectBaseOption'
