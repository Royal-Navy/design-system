import { addHours, isValid, max, min, startOfDay } from 'date-fns'
import { DayPickerProps, isMatch, Matcher } from 'react-day-picker'
import React from 'react'

import {
  DatePickerDateValidityType,
  DatePickerOnChangeData,
} from './DatePicker'
import { DATE_VALIDITY } from './constants'
import { DATEPICKER_ACTION, DatePickerAction, DatePickerState } from './types'

function getNewState(
  isRange: boolean,
  day: Date | null,
  { startDate, endDate }: DatePickerState
) {
  if (!isRange || !day) {
    return { startDate: day, endDate: day }
  }

  if (startDate && !endDate) {
    return {
      startDate: min([startDate, day]),
      endDate: max([startDate, day]),
    }
  }

  return { startDate: day, endDate: null }
}

export function isDateInMatcher(
  date: Date,
  matcher: Matcher | Matcher[] | undefined
) {
  if (!matcher) {
    return false
  }

  if (Array.isArray(matcher)) {
    return isMatch(date, matcher)
  }

  return isMatch(date, [matcher])
}

export function calculateDateValidity(
  date: Date | null,
  disabledDays: DayPickerProps['disabled']
): DatePickerDateValidityType | null {
  if (!date) {
    return null
  }

  if (!isValid(date)) {
    return DATE_VALIDITY.INVALID
  }

  if (disabledDays && isDateInMatcher(date, disabledDays)) {
    return DATE_VALIDITY.DISABLED
  }

  return DATE_VALIDITY.VALID
}

function normaliseDate(date: Date | null): Date | null {
  if (!date) {
    return date
  }

  return addHours(startOfDay(date), 12)
}

export const useProcessDayClick = (
  state: DatePickerState,
  dispatch: React.Dispatch<DatePickerAction>,
  isRange: boolean,
  disabledDays: DayPickerProps['disabled'],
  onChange?: (data: DatePickerOnChangeData) => void
): ((day: Date | null) => { startDate: Date | null; endDate: Date | null }) => {
  function processDayClick(day: Date | null) {
    const newState = getNewState(isRange, normaliseDate(day), state)

    dispatch({
      type: DATEPICKER_ACTION.UPDATE,
      data: newState,
    })

    const { startDate, endDate } = newState

    if (onChange) {
      onChange({
        startDate,
        startDateValidity: calculateDateValidity(startDate, disabledDays),
        endDate,
        endDateValidity: calculateDateValidity(endDate, disabledDays),
      })
    }

    return newState
  }

  return processDayClick
}
