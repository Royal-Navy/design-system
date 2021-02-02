import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useFocus } from '../../hooks/useFocus'
import { useInputValue } from '../../hooks/useInputValue'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledTextInput } from './partials/StyledTextInput'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledAdornment } from './partials/StyledAdornment'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledInput } from './partials/StyledInput'

export interface TextInputProps
  extends ComponentWithClass,
    InputValidationProps {
  autoFocus?: boolean
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
    isInvalid,
    ...rest
  } = props

  const { hasFocus, onLocalBlur, onFocus } = useFocus(onBlur)
  const { committedValue, hasValue, onValueChange } = useInputValue(value)
  const hasLabel = label && label.length

  return (
    <StyledTextInput
      className={className}
      $hasFocus={hasFocus}
      $hasContent={hasValue}
      $noLabel={!hasLabel}
      data-testid="text-input-container"
    >
      <StyledOuterWrapper>
        {startAdornment && (
          <StyledAdornment $position="start">{startAdornment}</StyledAdornment>
        )}
        <StyledInputWrapper data-testid="text-input-input-wrapper">
          {hasLabel && (
            <StyledLabel htmlFor={id} data-testid="text-input-label">
              {label}
            </StyledLabel>
          )}
          <StyledInput
            data-testid="text-input-input"
            disabled={isDisabled}
            id={id}
            name={name}
            onBlur={onLocalBlur}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
        </StyledInputWrapper>
        {endAdornment && (
          <StyledAdornment $position="end">{endAdornment}</StyledAdornment>
        )}
      </StyledOuterWrapper>
      {footnote && <small>{footnote}</small>}
    </StyledTextInput>
  )
}

TextInput.displayName = 'TextInput'
