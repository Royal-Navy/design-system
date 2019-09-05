import React, { useState } from 'react'
import uuid from 'uuid'

export interface InputProps {
  autoFocus?: boolean
  className?: string
  disabled?: boolean
  endAdornment?: React.ReactNode
  value?: string
  name: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FormEvent<Element>) => void
  footnote?: string
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

const TextInput: React.FC<InputProps> = props => {
  const {
    className = '',
    disabled = false,
    endAdornment,
    value,
    name,
    onChange,
    onBlur = () => {},
    footnote,
    id = uuid(),
    label,
    placeholder = '',
    startAdornment,
    type = 'text',
    ...rest
  } = props

  const [focus, setFocus] = useState(false)

  const hasContent = value && value.length
  const hasLabel = label && label.length

  const classes = `rn-textinput
    ${focus ? 'has-focus' : ''}
    ${hasContent ? 'has-content' : ''}
    ${!hasLabel ? 'no-label' : ''}
    ${className}
  `

  const onFocus = () => {
    setFocus(true)
  }

  const onLocalBlur = (event: React.FormEvent) => {
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
            className="rn-textinput__input"
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
    </div>
  )
}

TextInput.displayName = 'TextInput'

export default TextInput
