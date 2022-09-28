import React from 'react'
import { components, IndicatorComponentType } from 'react-select'

import { DropdownIndicatorIcon } from './DropdownIndicatorIcon'
import { DropdownOption } from './DropdownOption'

export const DropdownIndicator: IndicatorComponentType<DropdownOption, false> = (props) => {
  const {
    selectProps: { menuIsOpen: isOpen },
  } = props

  return (
    <components.DropdownIndicator {...props}>
      <DropdownIndicatorIcon isOpen={Boolean(isOpen)} />
    </components.DropdownIndicator>
  )
}

DropdownIndicator.displayName = 'DropdownIndicator'
