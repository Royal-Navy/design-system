import React from 'react'
import { components } from 'react-select'
import { OptionProps } from 'react-select/src/components/Option'

import Badge from '../Badge'

export interface SelectOptionWithBadgeType {
  badge?: string | number | undefined
  value: string
}

export const Option: React.FC<
  OptionProps<SelectOptionWithBadgeType>
> = props => {
  const {
    data: { badge, label },
  } = props

  return (
    <components.Option {...props}>
      {label}
      {badge && <Badge className="rn-select__badge">{badge}</Badge>}
    </components.Option>
  )
}
