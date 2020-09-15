import { addMonths, endOfMonth, startOfMonth } from 'date-fns'

import { buildCalendar } from './reducer'
import { TimelineOptions, TimelineState } from './types'

const initialState: TimelineState = {
  days: [],
  hours: [],
  months: [],
  options: null,
  startDate: null,
  endDate: null,
  today: new Date(),
  weeks: [],
}

function initialiseState(
  startDate: Date = new Date(),
  endDate: Date,
  today: Date = new Date(),
  options: TimelineOptions
): TimelineState {
  const state = {
    ...initialState,
    today,
    startDate,
    endDate,
    options: { ...initialState.options, ...options },
  }

  const firstDateDisplayed = endDate ? startDate : startOfMonth(startDate)
  const lastDateDisplayed =
    endDate ??
    endOfMonth(addMonths(firstDateDisplayed, state.options.rangeInMonths - 1))

  return {
    ...state,
    ...buildCalendar(
      firstDateDisplayed,
      lastDateDisplayed,
      state.options.hoursBlockSize
    ),
  }
}

export { initialState, initialiseState }
