import React from 'react'
import ReactSelect from 'react-select'

import { DropdownIndicator } from './DropdownIndicator'
import { Input } from './Input'
import { Option, SelectOptionWithBadgeType } from './Option'
import { SingleValue } from './SingleValue'

export interface SelectProps {
  label?: string
  name?: string
  onChange?: (event: any) => void
  options: SelectOptionWithBadgeType[]
  value?: string
}

export const Select: React.FC<SelectProps> = ({
  label,
  name,
  onChange,
  options,
  value,
}) => {
  const onSelectChange = (option: any) => {
    const selectedValue =
      option && option.value !== undefined ? option.value : null

    onChange({
      target: {
        name,
        value: selectedValue,
      },
    })
  }

  const selectedOption = options.find(option => option.value === value)

  return (
    <ReactSelect
      aria-label={label}
      className="rn-select"
      classNamePrefix="rn-select"
      components={{
        DropdownIndicator,
        Input,
        Option,
        SingleValue,
      }}
      isClearable
      name={name}
      onChange={onSelectChange}
      options={options}
      placeholder={null}
      value={selectedOption}
    />
  )
}

Select.displayName = 'Select'
