import React, { forwardRef } from 'react'
import { isNil, isString } from 'lodash'
import { addHours, isMatch, parse } from 'date-fns'
import { DayPickerProps, ModifiersUtils } from 'react-day-picker'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledInput } from './partials/StyledInput'
import { useInputValue } from './useInputValue'
import { useFocus } from '../../hooks/useFocus'

const INPUT_MASK = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/

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
      displayValue,
      inputKey,
      keyedValue,
      onChange,
      revert,
    } = useInputValue(from, to, datePickerFormat, hasFocus)

    function checkNewDate(value: string) {
      if (INPUT_MASK.test(value) && isMatch(value, datePickerFormat)) {
        const parsedDate = parse(value, datePickerFormat, new Date())
        const newDate = addHours(parsedDate, 12)

        if (!ModifiersUtils.dayMatchesModifier(newDate, disabledDays)) {
          return newDate
        }
      }

      setHasError(true)
      return null
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      setHasError(false)

      const isTabKey = e.keyCode === 9
      const { value } = e.target as HTMLInputElement

      if (isTabKey) {
        checkNewDate(value)

        return onComplete()
      }

      return null
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      setHasError(false)

      const isEscapeKey = e.keyCode === 27
      const isReturnKey = e.keyCode === 13
      const isTabKey = e.keyCode === 9

      if (isTabKey) {
        return null
      }

      if (isEscapeKey) {
        revert()
        return onComplete()
      }

      const { value } = e.target as HTMLInputElement
      const hasChanged = !isNil(keyedValue)

      if (isReturnKey) {
        checkNewDate(value)

        return onComplete()
      }

      if (INPUT_MASK.test(value) && hasChanged) {
        const newDate = checkNewDate(value)
        if (newDate) {
          onDayChange(newDate)
        }
      }

      return null
    }

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
