import { isEqual, isValid } from 'date-fns'
import React, { useEffect, useReducer } from 'react'

import { formatDatesForInput } from './formatDatesForInput'
import {
  DATEPICKER_E_ACTION,
  DatePickerEAction,
  DatePickerEState,
} from './types'

function init({
  from,
  to,
  datePickerFormat,
}: Omit<DatePickerEState, 'inputValue'>) {
  return {
    from,
    to,
    datePickerFormat,
    inputValue: formatDatesForInput(from, to, datePickerFormat),
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
    case DATEPICKER_E_ACTION.REFRESH_INPUT_VALUE:
      if (state.from && !isValid(state.from)) {
        return state
      }

      return {
        ...state,
        inputValue: formatDatesForInput(
          state.from,
          state.to,
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
    !areDatesEqual(state.from, startDate) ||
    (isRange && !areDatesEqual(state.to, endDate)) ||
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
      from: startDate === undefined ? initialStartDate : startDate,
      to: endDate === undefined ? initialEndDate : endDate,
      datePickerFormat,
    },
    init
  )

  useEffect(() => {
    if (shouldReset(state, startDate, endDate, datePickerFormat, isRange)) {
      dispatch({
        type: DATEPICKER_E_ACTION.RESET,
        data: {
          from: startDate,
          to: endDate,
          datePickerFormat,
        },
      })
    }
  }, [datePickerFormat, endDate, isRange, startDate, state])

  return [state, dispatch]
}
