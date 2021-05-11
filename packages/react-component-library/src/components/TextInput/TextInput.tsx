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
type TextInputType =
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

export interface TextInputProps
  extends ComponentWithClass,
    InputValidationProps {
  /**
   * Toggle whether to auto focus the component upon initial render.
   */
  autoFocus?: boolean
  /**
   * Optional adornment to display to the right of the input value.
   */
  endAdornment?: React.ReactNode
  /**
   * Optional text footnote to display below the component.
   */
  footnote?: string
  /**
   * Optional HTML `id` attribute to apply to the component.
   */
  id?: string
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Optional text label to display within the component.
   */
  label?: string
  /**
   * HTML `name` attribute to apply to the component.
   */
  name: string
  /**
   * Optional handler invoked when the `onBlur` event is emitted.
   */
  onBlur?: (event: React.FormEvent) => void
  /**
   * Optional handler invoked when the value of the component changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * Optional handler invoked when the `onKeyDown` event is emitted.
   */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  /**
   * Optional placeholder text to display within the component.
   */
  placeholder?: string
  /**
   * Optional adornment to display to the left of the input value.
   */
  startAdornment?: React.ReactNode
  /**
   * HTML `type` attribute to apply to the component.
   */
  type?: TextInputType
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
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

  const { hasFocus, onLocalBlur, onLocalFocus } = useFocus(onBlur)
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
            onFocus={onLocalFocus}
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
