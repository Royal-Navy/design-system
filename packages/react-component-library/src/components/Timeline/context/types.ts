import React, { Dispatch } from 'react'

import { BlockSizeType } from '../TimelineHours'

export type TimelineScaleOption = {
  calculateDate: (d: Date, n: number) => Date
  from: Date
  hoursBlockSize: BlockSizeType | null
  intervalSize: number
  isDefault?: boolean
  to: Date
  widths: {
    hour: number
    day: number
  }
}

export type TimelineOptions = {
  endDate: Date | null
  hoursBlockSize: BlockSizeType | null
  range: number
  startDate: Date
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
  currentScaleIndex: number | null
  currentScaleOption: TimelineScaleOption | null
  days: TimelineDay[]
  getNewEndDate: (intervalMultiplier?: number) => Date | null
  hours: TimelineHour[]
  months: TimelineMonth[]
  options: TimelineOptions
  scaleOptions: TimelineScaleOption[]
  today: Date
  weeks: TimelineWeek[]
  width: number | null
}

export const TIMELINE_ACTIONS = {
  CHANGE_START_DATE: 'CHANGE_START_DATE',
  CHANGE_WIDTH: 'CHANGE_WIDTH',
  GET_NEXT: 'GET_NEXT',
  GET_PREV: 'GET_PREV',
  INITIALISE: 'INITIALISE',
  SCALE: 'SCALE',
} as const

export type TimelineAction =
  | {
      type: typeof TIMELINE_ACTIONS.CHANGE_START_DATE
      scaleOptions: TimelineScaleOption[]
    }
  | {
      type: typeof TIMELINE_ACTIONS.CHANGE_WIDTH
      width: number | null
    }
  | {
      type: typeof TIMELINE_ACTIONS.GET_NEXT
      scaleOptions: TimelineScaleOption[]
    }
  | {
      type: typeof TIMELINE_ACTIONS.GET_PREV
      scaleOptions: TimelineScaleOption[]
    }
  | {
      type: typeof TIMELINE_ACTIONS.INITIALISE
      width: number | null
    }
  | {
      type: typeof TIMELINE_ACTIONS.SCALE
      getScaleIndex: (currentScaleIndex: number) => number
    }

export interface TimelineContextDefault {
  hasSide: boolean
  state: TimelineState
  dispatch: Dispatch<TimelineAction>
}

export interface TimelineProviderProps {
  children?: React.ReactNode
  hasSide: boolean
  today: Date
  options: TimelineOptions
}
