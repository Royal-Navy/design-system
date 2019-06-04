import React, { useState } from 'react'
import uuid from 'uuid'

import FieldProps from '../../types/FieldProps'
import FormProps from '../../types/FormProps'

export interface InputProps {
  className?: string
  disabled?: boolean
  endAdornment?: React.ReactNode
  field: FieldProps
  footnote?: string
  form: FormProps
  id?: string
  label?: string
  placeholder?: string
  startAdornment?: React.ReactNode
  type?:
    | 'color'
    | 'date'
    | 'datatime-local'
    | 'email'
    | 'file'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
}

const Input: React.FC<InputProps> = props => {
  const {
    className = '',
    disabled = false,
    endAdornment,
    field: { value, name, onChange, onBlur },
    footnote,
    form: { errors = {}, touched = {} },
    id = uuid(),
    label,
    placeholder = '',
    startAdornment,
    type = 'text',
    ...rest
  } = props

  const [focus, setFocus] = useState(false)

  const hasContent = value && value.length
  const hasError = touched[name] && errors[name]
  const hasLabel = label && label.length

  const classes = `rn-textinput
    ${focus ? 'rn-textinput--has-focus' : ''}
    ${hasContent ? 'rn-textinput--has-content' : ''}
    ${hasError ? 'rn-textinput--is-invalid' : ''}
    ${!hasLabel ? 'rn-textinput--no-label' : ''}
    ${className}
  `

  const onFocus = () => {
    setFocus(true)
  }

  const onLocalBlur = (event: React.SyntheticEvent) => {
    setFocus(false)
    onBlur(event)
  }

  return (
    <div className={classes} data-testid="container">
      <div className="rn-textinput__outer-wrapper">
        {startAdornment && (
          <div
            className="rn-textinput__start-adornment"
            data-testid="start-adornment"
          >
            {startAdornment}
          </div>
        )}
        <div className="rn-textinput__input-wrapper" data-testid="inputwrapper">
          {hasLabel && (
            <label
              className="rn-textinput__label"
              data-testid="label"
              htmlFor={id}
            >
              {label}
            </label>
          )}
          <input
            className={`rn-textinput__input ${hasError ? 'is-invalid' : ''}`}
            data-testid="input"
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onLocalBlur}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            type={type}
            value={value}
            {...rest}
          />
        </div>
        {endAdornment && (
          <div
            className="rn-textinput__end-adornment"
            data-testid="end-adornment"
          >
            {endAdornment}
          </div>
        )}
      </div>
      {footnote && (
        <small className="rn-textinput__footnote" data-testid="footnote">
          {footnote}
        </small>
      )}
      {hasError && (
        <div className="rn-textinput__invalid-feedback" data-testid="error">
          {errors[name]}
        </div>
      )}
    </div>
  )
}

export default Input
