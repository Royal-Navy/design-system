import { TimelineState } from './types'

const initialState: TimelineState = {
  currentScaleIndex: null,
  currentScaleOption: null,
  days: [],
  hours: [],
  months: [],
  options: null,
  scaleOptions: [],
  today: new Date(),
  weeks: [],
  width: null,
}

export { initialState }
