import React from 'react'
import { components } from 'react-select'
import { InputProps } from 'react-select/src/components/Input'

export interface SelectInputProps extends InputProps {
  id?: string
}

export const Input: React.FC<SelectInputProps> = props => (
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
    <components.Input data-testid="react-select-vendor-input" {...props} />
  </div>
)
