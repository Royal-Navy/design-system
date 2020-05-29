import React from 'react'
import get from 'lodash/get'
import { components, InputProps } from 'react-select'

export interface SelectInputProps extends InputProps {
  id?: string
}

export const Input: React.FC<SelectInputProps> = (props) => (
  <div className="rn-select__input-container">
    {props['aria-label'] !== undefined && (
      <label
        className="rn-select__label"
        htmlFor={props.id}
        data-testid="select-label"
      >
        {props['aria-label']}
      </label>
    )}
    <components.Input
      data-testid={get(
        props,
        'selectProps.data-testid',
        'react-select-vendor-input'
      )}
      {...props}
    />
  </div>
)
