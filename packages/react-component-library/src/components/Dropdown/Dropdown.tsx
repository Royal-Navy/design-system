import React from 'react'
import Select from 'react-select'
import { ValueType } from 'react-select/src/types'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { DropdownIndicator } from './DropdownIndicator'
import { DropdownLabel } from './DropdownLabel'
import { DropdownOption } from './DropdownOption'
import { DropdownPlaceholder } from './DropdownPlaceholder'

const { color, spacing } = selectors

export interface DropdownProps {
  onSelect: (value: string) => void
  options: DropdownOption[]
  label: string
  labelIcon?: React.ReactNode
}

const StyledSelect = styled(Select)`
  .rn-dropdown__control {
    border-color: ${color('neutral', '200')};
  }

  // ie 11 fix: https://github.com/philipwalton/flexbugs/issues/231#issuecomment-362790042
  .rn-dropdown__control:after {
    content: '';
    min-height: inherit;
    font-size: 0;
  }

  .rn-dropdown__placeholder {
    color: ${color('neutral', '500')};
  }

  .rn-dropdown__control--is-focused {
    border-color: ${color('action', '600')};
    box-shadow: 0 0 0 1px ${color('action', '600')};
  }

  .rn-dropdown__control--menu-is-open {
    .rn-arrow {
      transform: rotate(180deg) translateY(1px);
    }

    .rn-arrow__fill {
      fill: ${color('action', '600')};
    }
  }

  .rn-dropdown__dropdown-indicator {
    padding-left: (40px - 11px)/2;
    padding-right: (40px - 11px)/2;
  }

  .rn-dropdown__indicator-separator {
    display: none;
  }

  .rn-dropdown__menu {
    @include m.shadow('1');
    top: 102%;
    margin: ${spacing('6')} 0 0 5%;
    width: 95%;
  }

  .rn-dropdown__menu-list {
    border: 2px solid ${color('action', '600')};
    border-radius: 4px;
    padding: ${spacing('2')};
  }

  .rn-dropdown__menu:before {
    display: block;
    border-style: solid;
    border-width: 0 7px 7px;
    border-color: ${color('action', '600')} transparent;
    position: absolute;
    top: -7px;
    right: 0.9rem;
    width: 0;
    z-index: 0;
    content: '';
  }

  .rn-dropdown__menu:after {
    display: block;
    border-style: solid;
    border-width: 0 6px 6px;
    border-color: ${color('neutral', 'white')} transparent;
    position: absolute;
    top: -3px;
    right: 0.9rem;
    width: 0;
    z-index: 1;
    content: '';
    transform: translateX(-1px);
  }

  .rn-dropdown__option,
  .rn-dropdown__option--is-selected,
  .rn-dropdown__option--is-focused {
    color: ${color('neutral', '500')};
  }

  .rn-dropdown__option {
    border-radius: 4px;
    padding: ${spacing('6')} ${spacing('4')};
  }

  .rn-dropdown__option--is-selected {
    background-color: ${color('neutral', 'white')};
  }

  .rn-dropdown__option--is-focused,
  .rn-dropdown__option--is-focused.rn-dropdown__option--is-selected {
    background-color: ${color('neutral', '100')};
  }

  .rn-dropdown__single-value
    .rn-dropdownlabel
    .rn-dropdownlabel__end-adornment {
    display: none;
  }
`

export const Dropdown: React.FC<DropdownProps> = ({
  onSelect,
  options,
  label,
  ...rest
}) => {
  const onChange = (option: ValueType<DropdownOption>) => {
    const dropdownOption = option as DropdownOption
    onSelect(dropdownOption.value)
  }

  return (
    <StyledSelect
      aria-label={label}
      classNamePrefix="rn-dropdown"
      components={{ DropdownIndicator, Placeholder: DropdownPlaceholder }}
      controlShouldRenderValue={false}
      formatOptionLabel={DropdownLabel}
      isSearchable={false}
      options={options}
      onChange={onChange}
      placeholder={label}
      {...rest}
    />
  )
}
