import React, { TextareaHTMLAttributes } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledTextArea } from './partials/StyledTextArea'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledInput } from './partials/StyledInput'
import { InputValidationProps } from '../../common/InputValidationProps'
import { useExternalId } from '../../hooks/useExternalId'
import { useFocus } from '../../hooks/useFocus'
import { useInputValue } from '../../hooks/useInputValue'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    Omit<ComponentWithClass, 'children'>,
    InputValidationProps {
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Label to display within the component.
   */
  label: string
  /**
   * Optional handler invoked when the `onBlur` event is emitted.
   */
  onBlur?: (event: React.FormEvent) => void
  /**
   * Optional HTML `value` attribute to apply to the component.
   */
  value?: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      isDisabled,
      isInvalid,
      id: externalId,
      label,
      onBlur,
      onChange,
      value,
      ...rest
    },
    ref
  ) => {
    const id = useExternalId('text-area', externalId)
    const { hasFocus, onLocalBlur, onLocalFocus } = useFocus(onBlur)
    const { committedValue, hasValue, onValueChange } = useInputValue(value)

    return (
      <StyledTextArea className={className} data-testid="textarea-container">
        <StyledOuterWrapper
          $hasFocus={hasFocus}
          $isDisabled={isDisabled}
          $isInvalid={isInvalid}
        >
          <StyledLabel
            $hasContent={hasValue}
            $hasFocus={hasFocus}
            data-testid="textarea-label"
            htmlFor={id}
          >
            {label}
          </StyledLabel>
          <StyledInput
            ref={ref}
            data-testid="textarea-input"
            disabled={isDisabled}
            id={id}
            onBlur={onLocalBlur}
            onChange={(e) => {
              onValueChange(e)
              if (onChange) {
                onChange(e)
              }
            }}
            onFocus={onLocalFocus}
            value={committedValue}
            {...rest}
          />
        </StyledOuterWrapper>
      </StyledTextArea>
    )
  }
)

TextArea.displayName = 'TextArea'
