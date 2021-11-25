import { useEffect, useState } from 'react'
import { DateUtils, DayModifiers, RangeModifier } from 'react-day-picker'

import { StateObject } from './types'
import { DATEPICKER_AUTO_CLOSE_DELAY } from './constants'

function getNewState(
  isRange: boolean,
  day: Date,
  state: StateObject
): StateObject {
  if (isRange) {
    if (state.from && (state.to || state.from > day)) {
      return { from: day }
    }

    return DateUtils.addDayToRange(day, state as RangeModifier)
  }

  return { from: day, to: day }
}

export const useSelection = (
  startDate: Date,
  endDate: Date,
  isRange: boolean,
  onChange?: (data: { startDate: Date; endDate: Date }) => void,
  handleOnClose?: () => void
): {
  handleDayClick: (day: Date, dayModifiers?: DayModifiers) => void
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
  }, [startDate, endDate])

  function handleDayClick(day: Date, dayModifiers?: DayModifiers) {
    if (dayModifiers && dayModifiers.disabled) {
      return
    }

    const newState = getNewState(isRange, day, state)
    setState(newState)

    if (onChange) {
      onChange({
        startDate: newState.from,
        endDate: newState.to,
      })
    }

    ;(function closeOnSelection() {
      if (isRange && !newState.to) {
        return
      }

      setTimeout(() => {
        handleOnClose()
      }, DATEPICKER_AUTO_CLOSE_DELAY)
    })()
  }

  return {
    handleDayClick,
    state,
  }
}
