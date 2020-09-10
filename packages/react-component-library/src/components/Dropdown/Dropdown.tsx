import React from 'react'
import Select from 'react-select'
import { ValueType } from 'react-select/src/types'

import { DropdownIndicator } from './DropdownIndicator'
import { DropdownLabel } from './DropdownLabel'
import { DropdownOption } from './DropdownOption'

export interface DropdownProps {
  onSelect: (value: string) => void
  options: DropdownOption[]
  label: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  onSelect,
  options,
  label,
}) => {
  const onChange = (option: ValueType<DropdownOption>) => {
    const dropdownOption = option as DropdownOption
    onSelect(dropdownOption.value)
  }

  return (
    <Select
      aria-label={label}
      className="rn-dropdown"
      classNamePrefix="rn-dropdown"
      components={{ DropdownIndicator }}
      controlShouldRenderValue={false}
      formatOptionLabel={DropdownLabel}
      isSearchable={false}
      options={options}
      onChange={onChange}
      placeholder={label}
    />
  )
}
