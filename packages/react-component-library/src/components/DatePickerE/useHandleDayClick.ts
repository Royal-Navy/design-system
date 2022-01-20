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

function getNewState(isRange: boolean, day: Date, state: DatePickerEState) {
  if (!isRange) {
    return { from: day, to: day }
  }

  if (state.from && !state.to) {
    return {
      from: min([state.from, day]),
      to: max([state.from, day]),
    }
  }

  return { from: day, to: null }
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
): ((day: Date) => { from: Date; to: Date }) => {
  function handleDayClick(day: Date) {
    const newState = getNewState(isRange, day, state)

    dispatch({
      type: DATEPICKER_E_ACTION.UPDATE,
      data: newState,
    })

    const { from: newFrom, to: newTo } = newState

    if (onChange) {
      onChange({
        startDate: newFrom,
        startDateValidity: calculateDateValidity(newFrom, disabledDays),
        endDate: newTo,
        endDateValidity: calculateDateValidity(newTo, disabledDays),
      })
    }

    return newState
  }

  return handleDayClick
}
