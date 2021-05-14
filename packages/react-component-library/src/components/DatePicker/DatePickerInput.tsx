import React, { forwardRef } from 'react'
import { isString } from 'lodash'
import { DayPickerProps } from 'react-day-picker'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledInput } from './partials/StyledInput'
import { useInputValue } from './useInputValue'
import { useFocus } from '../../hooks/useFocus'
import { useInputKeys } from './useInputKeys'

export interface DatePickerInputProps extends ComponentWithClass {
  disabledDays: DayPickerProps['disabledDays']
  id: string
  isDisabled: boolean
  format: string
  from: Date
  isRange: boolean
  onBlur?: (event: React.FormEvent) => void
  onDayChange: (day?: Date) => void
  onComplete: () => void
  onFocus: React.FocusEventHandler<HTMLInputElement>
  placeholder: string
  setHasError: React.Dispatch<React.SetStateAction<boolean>>
  to: Date
}

export const DatePickerInput = forwardRef<
  HTMLInputElement,
  DatePickerInputProps
>(
  (
    {
      disabledDays,
      from,
      to,
      format: datePickerFormat,
      isDisabled,
      isRange,
      onBlur,
      onComplete,
      onDayChange,
      onFocus,
      setHasError,
      ...rest
    },
    ref
  ) => {
    const { hasFocus, onLocalFocus, onLocalBlur } = useFocus()
    const {
      checkNewDate,
      keyedValue,
      onChange,
      onKeyDown,
      onKeyUp,
      revertKeyedValue,
    } = useInputKeys(
      datePickerFormat,
      disabledDays,
      onComplete,
      onDayChange,
      setHasError
    )

    const { displayValue, inputKey } = useInputValue(
      from,
      to,
      datePickerFormat,
      hasFocus,
      revertKeyedValue
    )

    return (
      <StyledInput
        aria-label="Choose date"
        data-testid="datepicker-input"
        disabled={isDisabled}
        key={inputKey}
        readOnly={isRange}
        onBlur={(e: React.FormEvent) => {
          onLocalBlur(e)

          const { value } = e.target as HTMLInputElement
          checkNewDate(value)

          if (onBlur) {
            onBlur(e)
          }
        }}
        onChange={onChange}
        onFocus={(e) => {
          onLocalFocus()

          onFocus(e)
        }}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        ref={ref}
        type="text"
        defaultValue={isString(keyedValue) ? keyedValue : displayValue}
        {...rest}
      />
    )
  }
)

DatePickerInput.displayName = 'DatePickerInput'
