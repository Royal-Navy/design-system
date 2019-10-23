import React from 'react'
import { components } from 'react-select'
import { OptionProps } from 'react-select/src/components/Option'

import Badge from '../Badge'

export interface SelectOptionWithBadgeType {
  badge?: string | number | undefined
  label: string
  value: string
}

export const Option: React.FC<
  OptionProps<SelectOptionWithBadgeType>
> = props => {
  const {
    data: { badge, label },
  } = props

  return (
    <components.Option {...props} data-testid="select-option">
      <span data-testid="select-option-label">{label}</span>
      {badge && <Badge className="rn-select__badge">{badge}</Badge>}
    </components.Option>
  )
}
