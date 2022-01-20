import { isValid, max, min } from 'date-fns'
import React from 'react'
import { DayPickerProps, ModifiersUtils } from 'react-day-picker'

import {
  DatePickerEDateValidityType,
  DatePickerEOnChangeData,
} from './DatePickerE'
import { DATE_VALIDITY } from './constants'
import {
  DATEPICKER_E_ACTION,
  DatePickerEAction,
  DatePickerEState,
} from './types'

function getNewState(
  isRange: boolean,
  day: Date,
  { startDate, endDate }: DatePickerEState
) {
  if (!isRange) {
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
  date: Date,
  disabledDays: DayPickerProps['disabledDays']
): DatePickerEDateValidityType {
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
  state: DatePickerEState,
  dispatch: React.Dispatch<DatePickerEAction>,
  isRange: boolean,
  disabledDays: DayPickerProps['disabledDays'],
  onChange?: (data: DatePickerEOnChangeData) => void
): ((day: Date) => { startDate: Date; endDate: Date }) => {
  function handleDayClick(day: Date) {
    const newState = getNewState(isRange, day, state)

    dispatch({
      type: DATEPICKER_E_ACTION.UPDATE,
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
