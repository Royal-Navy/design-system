import React from 'react'
import { components } from 'react-select'

import { TriangleDown } from '../../icons'

export const DropdownIndicator: React.FC<any> = props => {
  return (
    <components.DropdownIndicator {...props}>
      <TriangleDown />
    </components.DropdownIndicator>
  )
}

DropdownIndicator.displayName = 'DropdownIndicator'
