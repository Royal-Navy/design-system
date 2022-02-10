import React, { useEffect, useReducer } from 'react'

import { areDatesEqual, isDateValid, formatDatesForInput } from './utils'
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
        hasError: Boolean(state.startDate && !isDateValid(state.startDate)),
      }
    case DATEPICKER_E_ACTION.REFRESH_INPUT_VALUE:
      if (state.startDate && !isDateValid(state.startDate)) {
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

function shouldReset(
  state: DatePickerEState,
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
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
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  initialStartDate: Date | null,
  initialEndDate: Date | null,
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
          startDate: startDate ?? null,
          endDate: endDate ?? null,
          datePickerFormat,
        },
      })
    }
  }, [datePickerFormat, endDate, isRange, startDate, state])

  return [state, dispatch]
}
