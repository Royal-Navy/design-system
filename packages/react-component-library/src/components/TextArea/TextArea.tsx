import React, { TextareaHTMLAttributes } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { hasClass } from '../../helpers'
import { useFocus } from '../../hooks/useFocus'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledTextArea } from './partials/StyledTextArea'
import { StyledTextAreaWrapper } from './partials/StyledTextAreaWrapperProps'
import { StyledTextAreaLabel } from './partials/StyledTextAreaLabel'
import { StyledTextAreaLabelInner } from './partials/StyledTextAreaLabelInner'
import { StyledTextAreaInput } from './partials/StyledTextAreaInput'
import { useInputValue } from '../../hooks/useInputValue'

export interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<ComponentWithClass, 'children'>,
    InputValidationProps {
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Optional text footnote to display below the component.
   */
  footnote?: string
  /**
   * Optional text label to display within the component.
   */
  label?: string
  /**
   * Optional handler invoked when the `onBlur` event is emitted.
   */
  onBlur?: (event: React.FormEvent) => void
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
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

  const { hasFocus, onLocalBlur, onLocalFocus } = useFocus(onBlur)
  const { committedValue, hasValue, onValueChange } = useInputValue(value)
  const hasLabel = !!(label && label.length)

  return (
    <StyledTextArea className={className} data-testid="textarea-container">
      <StyledTextAreaWrapper
        $hasFocus={hasFocus}
        $hasLabel={hasLabel}
        $isInvalid={hasClass(className, 'is-invalid')}
      >
        {hasLabel && (
          <StyledTextAreaLabel
            $hasContent={hasValue}
            $hasFocus={hasFocus}
            data-testid="textarea-label"
            htmlFor={id}
          >
            <StyledTextAreaLabelInner
              $hasContent={hasValue}
              $hasFocus={hasFocus}
            >
              {label}
            </StyledTextAreaLabelInner>
          </StyledTextAreaLabel>
        )}
        <StyledTextAreaInput
          $hasLabel={hasLabel}
          data-testid="textarea-input"
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
          onFocus={onLocalFocus}
          placeholder={placeholder}
          value={committedValue}
          {...rest}
        />
      </StyledTextAreaWrapper>
      {footnote && <small data-testid="textarea-footnote">{footnote}</small>}
    </StyledTextArea>
  )
}

TextArea.displayName = 'TextArea'
