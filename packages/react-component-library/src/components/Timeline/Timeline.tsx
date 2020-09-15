import React from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineProvider } from './context'

import {
  TimelineDays,
  TimelineDaysProps,
  TimelineHours,
  TimelineHoursProps,
  TimelineMonths,
  TimelineMonthsProps,
  TimelineRows,
  TimelineRowsProps,
  TimelineSide,
  TimelineSideProps,
  TimelineTodayMarker,
  TimelineTodayMarkerProps,
  TimelineWeeks,
  TimelineWeeksProps,
} from '.'

import { TimelineOptions } from './context/types'
import { DEFAULTS } from './constants'

type timelineRootChildrenType = React.ReactElement<TimelineSideProps>

type timelineHeadChildrenType =
  | React.ReactElement<TimelineTodayMarkerProps>
  | React.ReactElement<TimelineMonthsProps>
  | React.ReactElement<TimelineWeeksProps>
  | React.ReactElement<TimelineDaysProps>

type timelineBodyChildrenType = React.ReactElement<TimelineRowsProps>

type timelineChildrenType =
  | timelineRootChildrenType
  | timelineHeadChildrenType
  | timelineBodyChildrenType

export interface TimelineProps extends ComponentWithClass {
  children: timelineChildrenType | timelineChildrenType[]
  dayWidth?: number
  hasSide?: boolean
  startDate?: Date
  endDate?: Date
  today?: Date
  range?: number
}

function extractChildren(
  children: timelineChildrenType | timelineChildrenType[],
  types: React.ReactElement['type'][],
  inverse?: boolean
) {
  return (children as []).filter((child: React.ReactElement) => {
    return inverse ? !types.includes(child?.type) : types.includes(child?.type)
  })
}

function hasTimelineSideComponent(
  children: timelineChildrenType | timelineChildrenType[]
) {
  const sideChildren = extractChildren(children, [TimelineSide])

  if (!sideChildren.length) {
    return false
  }

  console.warn('Component `TimelineSide` is deprecated')
  return true
}

function getHoursBlockSize(
  children: timelineChildrenType | timelineChildrenType[]
) {
  const hoursChildren = extractChildren(children, [TimelineHours])

  if (!hoursChildren.length) {
    return null
  }

  return (
    (hoursChildren[0] as React.ReactElement<TimelineHoursProps>).props
      .blockSize || DEFAULTS.HOURS_BLOCK_SIZE
  )
}

function getDayWith(dayWidth: number, hoursBlockSize: number) {
  const multiplier = hoursBlockSize ? 24 / hoursBlockSize : 1

  return (dayWidth || DEFAULTS.DAY_WIDTH) * multiplier
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  dayWidth,
  hasSide,
  startDate,
  endDate,
  today,
  range,
}) => {
  const hoursBlockSize = getHoursBlockSize(children)

  const options: TimelineOptions = {
    hoursBlockSize,
    dayWidth: getDayWith(dayWidth, hoursBlockSize),
    hourWidth: DEFAULTS.DAY_WIDTH,
    rangeInMonths: range || DEFAULTS.RANGE_IN_MONTHS,
  }

  const rootChildren = extractChildren(
    children,
    [
      TimelineDays,
      TimelineHours,
      TimelineMonths,
      TimelineRows,
      TimelineSide,
      TimelineTodayMarker,
      TimelineWeeks,
    ],
    true
  )

  const hasTimelineSide = hasTimelineSideComponent(children)

  const headChildren = extractChildren(children, [
    TimelineDays,
    TimelineHours,
    TimelineWeeks,
    TimelineMonths,
    TimelineTodayMarker,
  ])

  const bodyChildren = extractChildren(children, [TimelineRows])

  const innerClasses = classNames('timeline__inner', {
    'timeline__inner--has-side': hasSide || hasTimelineSide,
  })

  return (
    <TimelineProvider
      endDate={endDate}
      hasSide={hasSide || hasTimelineSide}
      options={options}
      startDate={startDate}
      today={today}
    >
      <div className="timeline" data-testid="timeline" role="grid">
        <div className={innerClasses}>
          {rootChildren}
          <div
            className="timeline__header" // Kept for backwards compatibility in downstream applications
            data-testid="timeline-header"
            role="rowgroup"
          >
            {headChildren}
          </div>
          {bodyChildren}
        </div>
      </div>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
