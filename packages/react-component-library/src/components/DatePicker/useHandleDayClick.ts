import { isValid, max, min } from 'date-fns'
import React from 'react'
import { DayPickerProps, ModifiersUtils } from 'react-day-picker'

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

function calculateDateValidity(
  date: Date | null,
  disabledDays: DayPickerProps['disabledDays']
): DatePickerDateValidityType | null {
  if (!date) {
    return null
  }

  if (!isValid(date)) {
    return DATE_VALIDITY.INVALID
  }

  if (ModifiersUtils.dayMatchesModifier(date, disabledDays)) {
    return DATE_VALIDITY.DISABLED
  }

  return DATE_VALIDITY.VALID
}

export const useHandleDayClick = (
  state: DatePickerState,
  dispatch: React.Dispatch<DatePickerAction>,
  isRange: boolean,
  disabledDays: DayPickerProps['disabledDays'],
  onChange?: (data: DatePickerOnChangeData) => void
): ((day: Date | null) => { startDate: Date | null; endDate: Date | null }) => {
  function handleDayClick(day: Date | null) {
    const newState = getNewState(isRange, day, state)

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

  return handleDayClick
}
