import { find } from 'lodash'

import { buildCalendar } from './reducer'
import { TimelineOptions, TimelineState } from './types'
import { initialiseScaleOptions } from './timeline_scales'

const initialState: TimelineState = {
  days: [],
  hours: [],
  months: [],
  options: null,
  scaleOptions: [],
  currentScaleOption: null,
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
    options,
  }

  const scaleOptions = initialiseScaleOptions(startDate, endDate, options)
  const defaultScaleOption = find(scaleOptions, ({ isDefault }) => isDefault)

  return {
    ...state,
    ...buildCalendar(defaultScaleOption),
    scaleOptions,
    currentScaleOption: defaultScaleOption,
  }
}

export { initialState, initialiseState }
