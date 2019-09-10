import React from 'react'
import ReactSelect from 'react-select'

import { Input } from './Input'
import { Option, SelectOptionWithBadgeType } from './Option'
import { SingleValue } from './SingleValue'

export interface SelectProps {
  label?: string
  name?: string
  onChange: (value: string) => void
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
    console.log('==', option)
    if (option && option.value !== undefined) {
      onChange(option.value)
    } else {
      onChange(null)
    }
  }

  const selectedOption = options.find(option => option.value === value)

  return (
    <ReactSelect
      aria-label={label}
      className="rn-select"
      classNamePrefix="rn-select"
      components={{
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
