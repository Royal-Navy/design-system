import { TimelineState } from '../types'

const state: TimelineState = {
  today: new Date(),
  startDate: new Date(),
  months: [],
  weeks: [],
  options: {
    range: 3, // months
  },
}

export const dispatchSpy = jest.fn()

export const context = {
  state,
  dispatch: dispatchSpy,
}

export const TimelineContext = {
  Consumer({ children }: any) {
    return children(context)
  },
}

export const TimelineProvider = ({ children }: any) => {
  return children
}
