import React from 'react'
import ReactSelect, { Props as ReactSelectProps } from 'react-select'

import { DropdownIndicator } from '../Dropdown/DropdownIndicator'
import { Input } from './Input'
import { SingleValue } from './SingleValue'
import { Option, SelectOptionWithBadgeType } from './Option'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledMenuList } from './partials/StyledMenuList'
import { StyledMenu } from './partials/StyledMenu'
import { StyledValueContainer } from './partials/StyledValueContainer'
import { StyledIndicatorSeparator } from './partials/StyledIndicatorSeparator'
import { StyledControl } from './partials/StyledControl'

export interface SelectProps
  extends ReactSelectProps<any>,
    ComponentWithClass,
    InputValidationProps {
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

  const selectedOption = options.find((option) => option.value === value)

  return (
    <ReactSelect
      aria-label={label}
      classNamePrefix="rn-select"
      components={{
        DropdownIndicator,
        Input,
        Option,
        SingleValue,
        Control: StyledControl,
        IndicatorSeparator: StyledIndicatorSeparator,
        Menu: StyledMenu,
        MenuList: StyledMenuList,
        ValueContainer: StyledValueContainer,
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
