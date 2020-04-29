import React from 'react'
import ReactSelect, { Props as ReactSelectProps } from 'react-select'
import classNames from 'classnames'

import { DropdownIndicator } from './DropdownIndicator'
import { Input } from './Input'
import { SingleValue } from './SingleValue'
import { Option, SelectOptionWithBadgeType } from './Option'

export interface SelectProps extends ReactSelectProps<any> {
  className?: string
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
  className,
  ...rest
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

  const classes = classNames('rn-select', className)

  return (
    <ReactSelect
      aria-label={label}
      className={classes}
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
      {...rest}
    />
  )
}

Select.displayName = 'Select'
