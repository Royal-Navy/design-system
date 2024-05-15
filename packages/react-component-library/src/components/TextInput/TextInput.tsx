import React, { memo, useRef } from 'react'
import mergeRefs from 'react-merge-refs'

import { Input } from './Input'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledAdornment } from './partials/StyledAdornment'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledTextInput } from './partials/StyledTextInput'
import { useFocus } from '../../hooks/useFocus'

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
   * Optional HTML `id` attribute to apply to the component.
   */
  id?: string
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Toggles whether the component is invalid or not.
   */
  isInvalid?: boolean
  /**
   * Label to display within the component.
   */
  label: string
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

const Component = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      endAdornment,
      isDisabled,
      isInvalid,
      onBlur,
      startAdornment,
      ...rest
    },
    ref
  ) => {
    const { hasFocus, onLocalBlur, onLocalFocus } = useFocus(onBlur)

    const localRef = useRef<HTMLInputElement>(null)

    const handleAdornmentClick = () => {
      localRef.current?.focus()
    }

    return (
      <StyledTextInput className={className} data-testid="text-input-container">
        <StyledOuterWrapper
          $hasFocus={hasFocus}
          $isDisabled={isDisabled}
          $isInvalid={isInvalid}
        >
          {startAdornment && (
            <StyledAdornment $position="start" onClick={handleAdornmentClick}>
              {startAdornment}
            </StyledAdornment>
          )}
          <StyledInputWrapper data-testid="text-input-input-wrapper">
            <Input
              ref={mergeRefs([localRef, ref])}
              hasFocus={hasFocus}
              isDisabled={isDisabled}
              onBlur={onLocalBlur}
              onFocus={onLocalFocus}
              {...rest}
            />
          </StyledInputWrapper>
          {endAdornment && (
            <StyledAdornment $position="end" onClick={handleAdornmentClick}>
              {endAdornment}
            </StyledAdornment>
          )}
        </StyledOuterWrapper>
      </StyledTextInput>
    )
  }
)

export const TextInput = memo(Component)

TextInput.displayName = 'TextInput'
// TextInput.whyDidYouRender = true
