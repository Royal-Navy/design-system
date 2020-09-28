import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'

import { useFocus } from '../../hooks/useFocus'
import { useInputValue } from '../../hooks/useInputValue'

export interface TextInputProps {
  autoFocus?: boolean
  className?: string
  endAdornment?: React.ReactNode
  footnote?: string
  id?: string
  isDisabled?: boolean
  label?: string
  name: string
  onBlur?: (event: React.FormEvent) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
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
  value?: string
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
  const { committedValue, hasValue, onValueChange } = useInputValue(value)
  const hasLabel = label && label.length

  const classes = classNames(
    'rn-textinput',
    {
      'has-focus': focus,
      'has-content': hasValue,
      'no-label': !hasLabel,
    },
    className
  )

  return (
    <div className={classes} data-testid="container">
      <div className="rn-textinput__outer-wrapper">
        {startAdornment && (
          <div className="rn-textinput__start-adornment">{startAdornment}</div>
        )}
        <div className="rn-textinput__input-wrapper" data-testid="inputwrapper">
          {hasLabel && (
            <label className="rn-textinput__label" htmlFor={id}>
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
            onChange={(e) => {
              onValueChange(e)
              if (onChange) {
                onChange(e)
              }
            }}
            onFocus={onFocus}
            placeholder={placeholder}
            type={type}
            value={committedValue}
            {...rest}
          />
        </div>
        {endAdornment && (
          <div className="rn-textinput__end-adornment">{endAdornment}</div>
        )}
      </div>
      {footnote && <small className="rn-textinput__footnote">{footnote}</small>}
    </div>
  )
}

TextInput.displayName = 'TextInput'
