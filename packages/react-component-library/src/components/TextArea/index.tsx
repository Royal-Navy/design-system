import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

import { useFocus } from '../../hooks/useFocus'

export interface InputProps {
  autoFocus?: boolean
  className?: string
  isDisabled?: boolean
  footnote?: string
  id?: string
  label?: string
  name: string
  onBlur?: (event: React.FormEvent) => void
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  value?: string
}

export const TextArea: React.FC<InputProps> = props => {
  const {
    className = '',
    isDisabled = false,
    footnote,
    id = uuid(),
    label,
    name,
    onBlur,
    onChange,
    placeholder = '',
    value,
    ...rest
  } = props

  const { focus, onLocalBlur, onFocus } = useFocus(onBlur)
  const hasContent = value && value.length
  const hasLabel = label && label.length

  const classes = classNames('rn-textinput', {
    'has-focus': focus,
    'has-content': hasContent,
    'no-label': !hasLabel,
  }, className)

  return (
    <div className={classes} data-testid="textarea-container">
      <div className="rn-textarea__wrapper">
        {hasLabel && (
          <label
            className="rn-textarea__label"
            data-testid="textarea-label"
            htmlFor={id}
          >
            <span className="rn-textarea__label-inner">{label}</span>
          </label>
        )}
        <textarea
          className="rn-textarea__input"
          data-testid="textarea-input"
          disabled={isDisabled}
          id={id}
          name={name}
          onBlur={onLocalBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      </div>
      {footnote && (
        <small
          className="rn-textarea__footnote"
          data-testid="textarea-footnote"
        >
          {footnote}
        </small>
      )}
    </div>
  )
}

TextArea.displayName = 'TextArea'
