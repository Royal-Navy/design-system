import React from 'react'
import { OptionProps } from 'react-select/src/components/Option'

import { BADGE_SIZE } from '../Badge'
import { StyledBadge } from './partials/StyledBadge'
import { StyledOption } from './partials/StyledOption'
import { StyledOptionEndAdornment } from './partials/StyledOptionEndAdornment'
import { StyledOptionLabel } from './partials/StyledOptionLabel'

export interface SelectOptionWithBadgeType {
  badge?: string | number
  icon?: React.ReactNode
  label: string
  value: string
}

export const Option: React.FC<
  OptionProps<SelectOptionWithBadgeType, boolean>
> = (props) => {
  const {
    data: { badge, icon, label },
  } = props

  return (
    <StyledOption data-testid="select-option" {...props}>
      <StyledOptionLabel data-testid="select-option-label">
        {label}
      </StyledOptionLabel>
      {badge && <StyledBadge size={BADGE_SIZE.SMALL}>{badge}</StyledBadge>}
      {icon && <StyledOptionEndAdornment>{icon}</StyledOptionEndAdornment>}
    </StyledOption>
  )
}
