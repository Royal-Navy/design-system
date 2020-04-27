import { Dispatch } from 'react'

export type TimelineOptions = {
  dayWidth: number,
  rangeInMonths: number
}

export type TimelineEvent = {
  id: string
  title: string
  startDate: Date
  endDate: Date
  status: string
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
  months: TimelineMonth[]
  weeks: TimelineWeek[]
  days: TimelineDay[]
  options: TimelineOptions
}

export enum TIMELINE_ACTIONS {
  GET_NEXT,
  GET_PREV,
  SET_DATE
}

export type TimelineAction =
  | { type: TIMELINE_ACTIONS.GET_NEXT }
  | { type: TIMELINE_ACTIONS.GET_PREV }
  | { type: TIMELINE_ACTIONS.SET_DATE, date: Date }

export interface TimelineContextDefault {
  state: TimelineState
  dispatch: Dispatch<TimelineAction>
}

export interface TimelineProviderProps {
  children?: React.ReactNode
  startDate?: Date
  today?: Date
  options?: TimelineOptions
  events?: TimelineEvent[]
}
