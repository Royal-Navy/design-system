import { Dispatch } from 'react'

import { BlockSizeType } from '../TimelineHours'

export type TimelineScaleOption = {
  calculateDate: (d: Date, n: number) => Date
  from: Date
  hoursBlockSize?: BlockSizeType
  intervalSize: number
  isDefault?: boolean
  to: Date
  widths: {
    hour: number
    day: number
  }
}

export type TimelineOptions = {
  hoursBlockSize: BlockSizeType
  unitWidth: number
}

export type TimelineDay = {
  dayIndex: number
  date: Date
}

export type TimelineHour = {
  hourIndex: number
  time: string
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
  months: TimelineMonth[]
  weeks: TimelineWeek[]
  days: TimelineDay[]
  hours: TimelineHour[]
  options: TimelineOptions
  scaleOptions: TimelineScaleOption[]
  currentScaleOption: TimelineScaleOption
}

export const TIMELINE_ACTIONS = {
  GET_NEXT: 'GET_NEXT',
  GET_PREV: 'GET_PREV',
  SCALE: 'SCALE',
} as const

export type TimelineAction =
  | { type: typeof TIMELINE_ACTIONS.GET_NEXT; scale: TimelineScaleOption }
  | { type: typeof TIMELINE_ACTIONS.GET_PREV; scale: TimelineScaleOption }
  | { type: typeof TIMELINE_ACTIONS.SCALE; scale: TimelineScaleOption }

export interface TimelineContextDefault {
  hasSide: boolean
  state: TimelineState
  dispatch: Dispatch<TimelineAction>
}

export interface TimelineProviderProps {
  children?: React.ReactNode
  hasSide?: boolean
  startDate?: Date
  endDate?: Date
  today?: Date
  options?: TimelineOptions
}
