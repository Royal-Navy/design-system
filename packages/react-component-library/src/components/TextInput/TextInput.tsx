import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'

import { useFocus } from '../../hooks/useFocus'

export interface TextInputProps {
  autoFocus?: boolean
  className?: string
  isDisabled?: boolean
  endAdornment?: React.ReactNode
  value?: string
  name: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FormEvent) => void
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

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    className = '',
    isDisabled = false,
    endAdornment,
    value,
    name,
    onChange,
    onBlur,
    footnote,
    id = uuidv4(),
    label,
    placeholder = '',
    startAdornment,
    type = 'text',
    ...rest
  } = props

  const { focus, onLocalBlur, onFocus } = useFocus(onBlur)
  const hasContent = value && value.length
  const hasLabel = label && label.length

  const classes = classNames(
    'rn-textinput',
    {
      'has-focus': focus,
      'has-content': hasContent,
      'no-label': !hasLabel,
    },
    className
  )

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
            disabled={isDisabled}
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
