import React from 'react'
import { components } from 'react-select'
import { SingleValueProps } from 'react-select/src/components/SingleValue'

import { Badge } from '../Badge'
import { SelectOptionWithBadgeType } from './Option'

export const SingleValue: React.FC<SingleValueProps<
  SelectOptionWithBadgeType
>> = ({ children, ...props }) => {
  return (
    <components.SingleValue {...props} data-testid="select-single-value">
      <span data-testid="select-single-value-label">{children}</span>
      {props.data.badge && (
        <Badge className="rn-select__badge rn_ml-2" size="xsmall">
          {props.data.badge}
        </Badge>
      )}
    </components.SingleValue>
  )
}
