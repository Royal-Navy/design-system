import { Dispatch } from 'react'

export type TimelineOptions = {
  dayWidth: number,
  rangeInMonths: number
}

export type TimelineDay = {
  dayIndex: number
  date: Date
}

export type TimelineWeek = {
  weekIndex: number
  startDate: Date
}

export type TimelineMonth = {
  monthIndex: number
  startDate: Date
}

export type TimelineState = {
  today: Date
  startDate: null | Date
  endDate: null | Date
  months: TimelineMonth[]
  weeks: TimelineWeek[]
  days: TimelineDay[]
  options: TimelineOptions
}

export const TIMELINE_ACTIONS = {
  GET_NEXT: 'GET_NEXT',
  GET_PREV: 'GET_PREV'
} as const

export type TimelineAction =
  | { type: typeof TIMELINE_ACTIONS.GET_NEXT }
  | { type: typeof TIMELINE_ACTIONS.GET_PREV }

export interface TimelineContextDefault {
  state: TimelineState
  dispatch: Dispatch<TimelineAction>
}

export interface TimelineProviderProps {
  children?: React.ReactNode
  startDate?: Date
  endDate?: Date
  today?: Date
  options?: TimelineOptions
}
