import React, { forwardRef } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DropdownIndicatorIcon } from '../Dropdown/DropdownIndicatorIcon'
import { StyledButton } from './partials/StyledButton'
import { StyledDatePickerInput } from './partials/StyledDatePickerInput'
import { StyledInput } from './partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledSeparator } from './partials/StyledSeparator'

export interface DatePickerInputProps extends ComponentWithClass {
  dayPickerId?: string
  id?: string
  label?: string
  name?: string
  value?: string
  onBlur?: (event: React.FormEvent<Element>) => void
  onFocus?: (event: React.FormEvent<Element>) => void
  isDisabled?: boolean
  isOpen: boolean
  onClose?: () => void
  hasContent?: boolean
}

export const DatePickerInput = forwardRef(
  (props: DatePickerInputProps, ref?: React.Ref<HTMLDivElement>) => {
    const {
      className,
      dayPickerId,
      id,
      label,
      name,
      value,
      onBlur,
      onFocus,
      isDisabled,
      isOpen,
      onClose,
      hasContent,
      ...rest
    } = props

    return (
      <StyledDatePickerInput
        className={className}
        ref={ref}
        data-testid="datepicker-input-wrapper"
        $isDisabled={isDisabled}
      >
        <StyledOuterWrapper $isOpen={isOpen}>
          <StyledInputWrapper>
            <StyledLabel
              $isOpen={isOpen}
              $hasContent={hasContent}
              htmlFor={id}
              data-testid="datepicker-label"
            >
              {label}
            </StyledLabel>
            <StyledInput
              type="text"
              id={id}
              name={name}
              value={value}
              onBlur={onBlur}
              onFocus={onFocus}
              disabled={isDisabled}
              readOnly
              aria-label="Choose date"
              data-testid="datepicker-input"
              {...rest}
            />
          </StyledInputWrapper>
          <StyledButton
            aria-expanded={!!isOpen}
            aria-label={`${isOpen ? 'Hide' : 'Show'} day picker`}
            aria-owns={dayPickerId}
            type="button"
            onClick={isOpen ? onClose : onFocus}
            disabled={isDisabled}
            data-testid="datepicker-input-button"
          >
            <StyledSeparator />
            <DropdownIndicatorIcon isOpen={isOpen} />
          </StyledButton>
        </StyledOuterWrapper>
      </StyledDatePickerInput>
    )
  }
)

DatePickerInput.displayName = 'DatePickerInput'
