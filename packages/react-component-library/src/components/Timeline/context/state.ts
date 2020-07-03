import { getDays, getMonths, getWeeks, calcRange } from './reducer'
import { TimelineOptions, TimelineState } from './types'

const initialState: TimelineState = {
  days: [],
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

  const range = endDate
    ? calcRange(startDate, endDate)
    : state.options.rangeInMonths

  return {
    ...state,
    months: getMonths(startDate, range),
    weeks: getWeeks(startDate, range),
    days: getDays(startDate, range),
  }
}

export { initialState, initialiseState }
