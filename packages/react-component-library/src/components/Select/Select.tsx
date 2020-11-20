import React from 'react'
import ReactSelect, { Props as ReactSelectProps } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { DropdownIndicator } from '../Dropdown/DropdownIndicator'
import { Input, StyledLabel } from './Input'
import { SingleValue } from './SingleValue'
import { Option, SelectOptionWithBadgeType } from './Option'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'

const { color, spacing } = selectors

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

const StyledReactSelect = styled(ReactSelect)`
  .rn-select__control {
    padding: 0;
    margin: 0;
    height: 44px;
  }

  .rn-select__control--is-focused,
  .rn-select__control:hover {
    border-color: ${color('action', '600')};
    box-shadow: 0 0 0 1px ${color('action', '600')},
      0 0 0 4px ${color('action', '100')};
  }

  .rn-select__control--is-focused
    ${StyledLabel},
    .rn-select__value-container--has-value
    ${StyledLabel} {
    transform: translate(${spacing('6')}, ${spacing('2')}) scale(0.8);
  }

  .rn-select__control--menu-is-open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: transparent;
  }

  .rn-select__indicator-separator {
    margin-right: ${spacing('3')};
  }

  .rn-select__menu {
    margin-top: -${spacing('px')};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: 0 0 0 1px ${color('action', '600')},
      -2px 2px 0 2px ${color('action', '100')},
      2px 2px 0 2px ${color('action', '100')};
    border: 1px solid ${color('action', '600')};
    border-top: 0;
    background: ${color('neutral', 'white')};
    
    &::after {
      position: absolute;
      top: -1px;
      right: 0;
      left: 0;
      height: 1px;
      background: ${color('neutral', 'white')};
      content: '';
    }
  }

  .rn-select__menu-list {
    padding-left: ${spacing('2')};
    padding-right: ${spacing('2')};
  }

  .rn-select__value-container {
    padding: 0 0 0 ${spacing('6')};
    height: inherit;
  }
`

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
    <StyledReactSelect
      aria-label={label}
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
