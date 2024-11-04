import React, { useEffect, useReducer, useMemo } from 'react'

import {
  areDatesEqual,
  isDateValid,
  formatDatesForInput,
  replaceInvalidDate,
} from './utils'
import { DATEPICKER_ACTION, DatePickerAction, DatePickerState } from './types'

function init({
  startDate,
  endDate,
  datePickerFormat,
  currentMonth,
}: Omit<DatePickerState, 'hasError' | 'inputValue'>) {
  return {
    startDate,
    endDate,
    datePickerFormat,
    hasError: false,
    inputValue: formatDatesForInput(startDate, endDate, datePickerFormat),
    currentMonth,
  }
}

function reducer(
  state: DatePickerState,
  action: DatePickerAction
): DatePickerState {
  switch (action.type) {
    case DATEPICKER_ACTION.RESET:
      return init(action.data)
    case DATEPICKER_ACTION.UPDATE:
      return { ...state, ...action.data }
    case DATEPICKER_ACTION.REFRESH_HAS_ERROR:
      return {
        ...state,
        hasError: Boolean(state.startDate && !isDateValid(state.startDate)),
      }
    case DATEPICKER_ACTION.REFRESH_INPUT_VALUE:
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
  state: DatePickerState,
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

const getEffectiveDate = (
  date: Date | null | undefined,
  initialDate: Date | null
) => (date === undefined ? initialDate : date)

export function useDatePickerReducer(
  startDate: Date | null | undefined,
  endDate: Date | null | undefined,
  initialStartDate: Date | null,
  initialEndDate: Date | null,
  datePickerFormat: string,
  isRange: boolean,
  initialMonth: Date | null | undefined
): [DatePickerState, React.Dispatch<DatePickerAction>] {
  const effectiveStartDate = getEffectiveDate(startDate, initialStartDate)
  const effectiveEndDate = getEffectiveDate(endDate, initialEndDate)

  const currentMonth = useMemo(
    () => replaceInvalidDate(effectiveStartDate) || initialMonth || new Date(),
    [effectiveStartDate, initialMonth]
  )

  const [state, dispatch] = useReducer(
    reducer,
    {
      startDate: effectiveStartDate,
      endDate: effectiveEndDate,
      datePickerFormat,
      currentMonth,
    },
    init
  )

  useEffect(() => {
    if (shouldReset(state, startDate, endDate, datePickerFormat, isRange)) {
      dispatch({
        type: DATEPICKER_ACTION.RESET,
        data: {
          startDate: startDate ?? null,
          endDate: endDate ?? null,
          datePickerFormat,
          currentMonth,
        },
      })
    }
  }, [datePickerFormat, endDate, isRange, startDate, state, currentMonth])

  return [state, dispatch]
}
