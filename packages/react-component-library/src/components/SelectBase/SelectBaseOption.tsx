import React from 'react'

import { BADGE_SIZE, BADGE_VARIANT, BadgeProps } from '../Badge'
import { StyledOption } from './partials/StyledOption'
import { StyledOptionBadge } from './partials/StyledOptionBadge'
import { StyledOptionText } from './partials/StyledOptionText'
import { ComponentWithClass } from '../../common/ComponentWithClass'

type CustomBadgeProps = Omit<BadgeProps, 'children'>

export interface SelectBaseOptionProps extends ComponentWithClass {
  badge?: string | number
  badgeProps?: CustomBadgeProps
  icon?: React.ReactNode
  isHighlighted?: boolean
  value: string
  title?: string
  isDisabled?: boolean
}

export interface SelectBaseOptionAsStringProps extends SelectBaseOptionProps {
  children: string
}

export const SelectBaseOption = React.forwardRef<
  HTMLLIElement,
  SelectBaseOptionProps
>(
  (
    {
      badge,
      badgeProps,
      icon,
      children,
      isHighlighted,
      title,
      isDisabled,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledOption
        $isHighlighted={isHighlighted}
        data-testid="select-option"
        ref={ref}
        disabled={isDisabled}
        {...rest}
      >
        {icon}
        <StyledOptionText title={title}>{children}</StyledOptionText>
        {badge && (
          <StyledOptionBadge
            data-testid="select-badge"
            size={BADGE_SIZE.XSMALL}
            variant={BADGE_VARIANT.PILL}
            {...badgeProps}
          >
            {badge}
          </StyledOptionBadge>
        )}
      </StyledOption>
    )
  }
)

SelectBaseOption.displayName = 'SelectBaseOption'
