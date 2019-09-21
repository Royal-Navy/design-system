import React from 'react'
import { components } from 'react-select'

import { TriangleDown, TriangleUp } from '../../icons'

export const DropdownIndicator: React.FC<any> = props => {
  const { menuIsOpen } = props.selectProps

  return (
    <components.DropdownIndicator {...props}>
      {!menuIsOpen && (
        <span data-testid="TriangleDown">
          <TriangleDown />
        </span>
      )}
      {menuIsOpen && (
        <span data-testid="TriangleUp">
          <TriangleUp />
        </span>
      )}
    </components.DropdownIndicator>
  )
}

DropdownIndicator.displayName = 'DropdownIndicator'
