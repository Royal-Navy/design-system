import React from 'react'
import { components } from 'react-select'

import { DropdownIndicatorIcon } from './DropdownIndicatorIcon'

export const DropdownIndicator: React.FC<any> = (props) => {
  const {
    selectProps: { menuIsOpen: isOpen },
  } = props

  return (
    <components.DropdownIndicator {...props}>
      <DropdownIndicatorIcon isOpen={isOpen} />
    </components.DropdownIndicator>
  )
}

DropdownIndicator.displayName = 'DropdownIndicator'
