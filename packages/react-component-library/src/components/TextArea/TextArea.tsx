import React, { TextareaHTMLAttributes } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'

import { useFocus } from '../../hooks/useFocus'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    ComponentWithClass {
  isDisabled?: boolean
  footnote?: string
  label?: string
  onBlur?: (event: React.FormEvent) => void
  value?: string
}

export const TextArea: React.FC<TextAreaInputProps> = (props) => {
  const {
    className = '',
    isDisabled = false,
    footnote,
    id = uuidv4(),
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
