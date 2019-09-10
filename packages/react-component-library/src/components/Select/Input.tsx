import React from 'react'
import { components } from 'react-select'
import { InputProps } from 'react-select/src/components/Input'

interface SelectInputProps extends InputProps {
  id?: string
}

export const Input: React.FC<SelectInputProps> = props => (
  <div className="rn-select__input-container">
    {props['aria-label'] !== undefined && (
      <label className="rn-select__label" htmlFor={props.id}>
        {props['aria-label']}
      </label>
    )}
    <components.Input {...props} />
  </div>
)
