import {
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
} from 'date-fns'
import { padStart } from 'lodash'

import {
  TIMELINE_ACTIONS,
  TimelineAction,
  TimelineDay,
  TimelineHour,
  TimelineMonth,
  TimelineOptions,
  TimelineScaleOption,
  TimelineState,
  TimelineWeek,
} from './types'

import { WEEK_START } from '../constants'
import { buildScaleOptions } from './timeline_scales'

const HOURS_IN_DAY = 24

export function getMonths(start: Date, end: Date): TimelineMonth[] {
  return eachMonthOfInterval({ start, end }).map((date) => {
    return {
      monthIndex: date.getMonth(),
      startDate: date,
    }
  })
}

export function getWeeks(start: Date, end: Date): TimelineWeek[] {
  const interval = { start, end }
  return eachWeekOfInterval(interval, { weekStartsOn: WEEK_START }).map(
    (date, weekIndex) => {
      return {
        weekIndex,
        startDate: date,
      }
    }
  )
}

export function getDays(start: Date, end: Date): TimelineDay[] {
  return eachDayOfInterval({ start, end }).map((date) => {
    return {
      dayIndex: date.getDate() - 1,
      date,
    }
  })
}

export function getHours(blockSize: number): TimelineHour[] {
  if (!blockSize) {
    return []
  }

  const numberOfBlocks = HOURS_IN_DAY / blockSize
  return Array.from(Array(numberOfBlocks).keys()).map((blockNumber) => {
    const timeHours = blockNumber * blockSize

    return {
      hourIndex: blockNumber,
      time: `${padStart(timeHours.toString(), 2, '0')}:00`,
    }
  })
}

export function buildCalendar({
  from,
  to,
  hoursBlockSize,
}: TimelineScaleOption): {
  months: TimelineMonth[]
  weeks: TimelineWeek[]
  days: TimelineDay[]
  hours: TimelineHour[]
} {
  return {
    months: getMonths(from, to),
    weeks: getWeeks(from, to),
    days: getDays(from, to),
    hours: getHours(hoursBlockSize),
  }
}

function transformOptions(
  options: TimelineOptions,
  currentScaleOption: TimelineScaleOption
) {
  return {
    ...options,
    endDate: options.endDate ? currentScaleOption.to : null,
    startDate: currentScaleOption.from,
  }
}

export function reducer(
  state: TimelineState,
  action: TimelineAction
): TimelineState | never {
  switch (action.type) {
    case TIMELINE_ACTIONS.CHANGE_WIDTH:
    case TIMELINE_ACTIONS.INITIALISE: {
      const scaleOptions = buildScaleOptions(state.options, action.width)
      const currentScaleIndex =
        state.currentScaleIndex ||
        scaleOptions.findIndex(({ isDefault }) => isDefault)
      return {
        ...state,
        ...buildCalendar(scaleOptions[currentScaleIndex]),
        currentScaleIndex,
        scaleOptions,
        currentScaleOption: scaleOptions[currentScaleIndex],
        width: action.width,
      }
    }
    case TIMELINE_ACTIONS.CHANGE_START_DATE:
    case TIMELINE_ACTIONS.GET_PREV:
    case TIMELINE_ACTIONS.GET_NEXT:
      return {
        ...state,
        ...buildCalendar(action.scaleOptions[state.currentScaleIndex]),
        currentScaleOption: action.scaleOptions[state.currentScaleIndex],
        options: transformOptions(
          state.options,
          action.scaleOptions[state.currentScaleIndex]
        ),
        scaleOptions: action.scaleOptions,
      }
    case TIMELINE_ACTIONS.SCALE:
      return {
        ...state,
        ...buildCalendar(state.scaleOptions[action.scaleIndex]),
        currentScaleIndex: action.scaleIndex,
        currentScaleOption: state.scaleOptions[action.scaleIndex],
        options: transformOptions(
          state.options,
          state.scaleOptions[state.currentScaleIndex]
        ),
      }
    default:
      throw new Error('Unknown action type')
  }
}
