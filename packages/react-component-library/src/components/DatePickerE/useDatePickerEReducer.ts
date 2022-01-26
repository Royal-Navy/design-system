import { isEqual, isValid } from 'date-fns'
import React, { useEffect, useReducer } from 'react'

import { formatDatesForInput } from './formatDatesForInput'
import {
  DATEPICKER_E_ACTION,
  DatePickerEAction,
  DatePickerEState,
} from './types'

function init({
  startDate,
  endDate,
  datePickerFormat,
}: Omit<DatePickerEState, 'hasError' | 'inputValue'>) {
  return {
    startDate,
    endDate,
    datePickerFormat,
    hasError: false,
    inputValue: formatDatesForInput(startDate, endDate, datePickerFormat),
  }
}

function reducer(
  state: DatePickerEState,
  action: DatePickerEAction
): DatePickerEState {
  switch (action.type) {
    case DATEPICKER_E_ACTION.RESET:
      return init(action.data)
    case DATEPICKER_E_ACTION.UPDATE:
      return { ...state, ...action.data }
    case DATEPICKER_E_ACTION.REFRESH_HAS_ERROR:
      return {
        ...state,
        hasError: state.startDate && !isValid(state.startDate),
      }
    case DATEPICKER_E_ACTION.REFRESH_INPUT_VALUE:
      if (state.startDate && !isValid(state.startDate)) {
        return state
      }

      return {
        ...state,
        inputValue: formatDatesForInput(
          state.startDate,
          state.endDate,
          state.datePickerFormat
        ),
      }
    default:
      throw new Error('Unknown reducer action type')
  }
}

function areDatesEqual(dateLeft: Date | null, dateRight: Date | null): boolean {
  const bothDatesInvalid =
    dateLeft && dateRight && !isValid(dateLeft) && !isValid(dateRight)

  return (
    dateLeft === dateRight || bothDatesInvalid || isEqual(dateLeft, dateRight)
  )
}

function shouldReset(
  state: DatePickerEState,
  startDate: Date | undefined,
  endDate: Date | undefined,
  datePickerFormat: string,
  isRange: boolean
): boolean {
  if (startDate === undefined && endDate === undefined) {
    return false
  }

  return (
    !areDatesEqual(state.startDate, startDate) ||
    (isRange && !areDatesEqual(state.endDate, endDate)) ||
    datePickerFormat !== state.datePickerFormat
  )
}

export function useDatePickerEReducer(
  startDate: Date | undefined,
  endDate: Date | undefined,
  initialStartDate: Date | undefined,
  initialEndDate: Date | undefined,
  datePickerFormat: string,
  isRange: boolean
): [DatePickerEState, React.Dispatch<DatePickerEAction>] {
  const [state, dispatch] = useReducer(
    reducer,
    {
      startDate: startDate === undefined ? initialStartDate : startDate,
      endDate: endDate === undefined ? initialEndDate : endDate,
      datePickerFormat,
    },
    init
  )

  useEffect(() => {
    if (shouldReset(state, startDate, endDate, datePickerFormat, isRange)) {
      dispatch({
        type: DATEPICKER_E_ACTION.RESET,
        data: {
          startDate,
          endDate,
          datePickerFormat,
        },
      })
    }
  }, [datePickerFormat, endDate, isRange, startDate, state])

  return [state, dispatch]
}
