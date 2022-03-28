import { addHours, isValid, parse } from 'date-fns'
import React, { useCallback } from 'react'

import { RETURN } from '../../utils/keyCodes'
import { DATEPICKER_ACTION, DatePickerAction } from './types'

function parseDate(datePickerFormat: string, value: string) {
  if (!value) {
    return null
  }

  const date = parse(value, datePickerFormat, new Date())

  if (!isValid(date) || date.getFullYear() <= 999) {
    return new Date(NaN)
  }

  return addHours(date, 12)
}

export function useInput(
  datePickerFormat: string,
  isRange: boolean,
  handleDayClick: (date: Date | null) => void,
  dispatch: React.Dispatch<DatePickerAction>
) {
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (isRange || event.keyCode !== RETURN) {
        return
      }

      dispatch({ type: DATEPICKER_ACTION.REFRESH_INPUT_VALUE })
    },
    [dispatch, isRange]
  )

  const handleInputBlur = useCallback(() => {
    if (isRange) {
      return
    }

    dispatch({ type: DATEPICKER_ACTION.REFRESH_HAS_ERROR })
    dispatch({ type: DATEPICKER_ACTION.REFRESH_INPUT_VALUE })
  }, [dispatch, isRange])

  const handleInputChange = useCallback(
    (event) => {
      if (isRange) {
        return
      }

      dispatch({
        type: DATEPICKER_ACTION.UPDATE,
        data: {
          inputValue: event.currentTarget.value,
        },
      })

      const date = parseDate(datePickerFormat, event.currentTarget.value)
      handleDayClick(date)
    },
    [isRange, dispatch, datePickerFormat, handleDayClick]
  )

  return {
    handleKeyDown,
    handleInputBlur,
    handleInputChange,
  }
}
