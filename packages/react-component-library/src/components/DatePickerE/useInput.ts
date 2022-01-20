import { addHours, isValid, parse } from 'date-fns'
import React, { useCallback } from 'react'

import { RETURN } from '../../utils/keyCodes'
import {
  DATEPICKER_E_ACTION,
  DatePickerEAction,
  DatePickerEState,
} from './types'

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
  handleDayClick: (date: Date) => void,
  state: DatePickerEState,
  setHasError: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: React.Dispatch<DatePickerEAction>
) {
  const { from } = state

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (isRange || event.keyCode !== RETURN) {
        return
      }

      dispatch({ type: DATEPICKER_E_ACTION.REFRESH_INPUT_VALUE })
    },
    [dispatch, isRange]
  )

  const handleInputBlur = useCallback(() => {
    if (isRange) {
      return
    }

    dispatch({ type: DATEPICKER_E_ACTION.REFRESH_INPUT_VALUE })

    setHasError(from && !isValid(from))
  }, [dispatch, from, isRange, setHasError])

  const handleInputChange = useCallback(
    (event) => {
      if (isRange) {
        return
      }

      dispatch({
        type: DATEPICKER_E_ACTION.UPDATE,
        data: {
          inputValue: event.currentTarget.value,
        },
      })

      const date = parseDate(datePickerFormat, event.currentTarget.value)
      handleDayClick(date)

      if (isValid(date)) {
        setHasError(false)
      }
    },
    [isRange, dispatch, datePickerFormat, handleDayClick, setHasError]
  )

  return {
    handleKeyDown,
    handleInputBlur,
    handleInputChange,
  }
}
