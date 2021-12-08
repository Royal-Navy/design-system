import { isValid } from 'date-fns'
import { useEffect, useState } from 'react'
import {
  DateUtils,
  DayPickerProps,
  ModifiersUtils,
  RangeModifier,
} from 'react-day-picker'

import {
  DatePickerEDateValidityType,
  DatePickerEOnChangeData,
} from './DatePickerE'
import { DATE_VALIDITY } from './constants'
import { formatDatesForInput } from './formatDatesForInput'
import { StateObject } from './types'

function getNewState(
  isRange: boolean,
  day: Date,
  state: StateObject
): StateObject {
  if (isRange) {
    if (state.from && state.to) {
      return { from: day }
    }

    return DateUtils.addDayToRange(day, state as RangeModifier)
  }

  return { from: day, to: day }
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

export const useSelection = (
  startDate: Date,
  endDate: Date,
  isRange: boolean,
  datePickerFormat: string,
  disabledDays: DayPickerProps['disabledDays'],
  setInputValue: React.Dispatch<React.SetStateAction<string>>,
  onChange?: (data: DatePickerEOnChangeData) => void
): {
  handleDayClick: (day: Date) => StateObject
  state: StateObject
} => {
  const [state, setState] = useState<StateObject>({
    from: startDate,
    to: endDate,
  })

  useEffect(() => {
    setState({
      from: startDate,
      to: endDate,
    })

    setInputValue(formatDatesForInput(startDate, endDate, datePickerFormat))
  }, [startDate, endDate, datePickerFormat, setInputValue])

  function handleDayClick(day: Date): StateObject {
    const newState = getNewState(isRange, day, state)
    setState(newState)

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

  return {
    handleDayClick,
    state,
  }
}
