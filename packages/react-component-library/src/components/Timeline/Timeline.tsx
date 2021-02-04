import React from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineProvider } from './context'
import logger from '../../utils/logger'

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
import { StyledTimeline } from './partials/StyledTimeline'
import { StyledInner } from './partials/StyledInner'
import { StyledHeader } from './partials/StyledHeader'

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
  unitWidth?: number
}

function extractChildren(
  children: timelineChildrenType | timelineChildrenType[],
  types: React.ReactElement['type'][],
  inverse?: boolean
) {
  return React.Children.toArray(children).filter((child: React.ReactNode) => {
    const type = (child as React.ReactElement)?.type

    return inverse ? !types.includes(type) : types.includes(type)
  })
}

function hasTimelineSideComponent(
  children: timelineChildrenType | timelineChildrenType[]
) {
  const sideChildren = extractChildren(children, [TimelineSide])

  if (!sideChildren.length) {
    return false
  }

  logger.warn('Component `TimelineSide` is deprecated')
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

function getDayWidth(
  hoursBlockSize: number,
  dayWidth: number,
  unitWidth: number
) {
  const multiplier = hoursBlockSize ? 24 / hoursBlockSize : 1

  if (dayWidth) {
    logger.warn('Prop `dayWidth` is deprecated')
  }

  return (dayWidth || unitWidth || DEFAULTS.UNIT_WIDTH) * multiplier
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  className,
  dayWidth,
  hasSide,
  startDate,
  endDate,
  today,
  range,
  unitWidth,
  ...rest
}) => {
  const hoursBlockSize = getHoursBlockSize(children)
  const options: TimelineOptions = {
    hoursBlockSize,
    dayWidth: getDayWidth(hoursBlockSize, dayWidth, unitWidth),
    unitWidth: unitWidth || DEFAULTS.UNIT_WIDTH,
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

  return (
    <TimelineProvider
      endDate={endDate}
      hasSide={hasSide || hasTimelineSide}
      options={options}
      startDate={startDate}
      today={today}
    >
      <StyledTimeline
        className={classNames('timeline', className)}
        data-testid="timeline"
        role="grid"
        {...rest}
      >
        <StyledInner
          className="timeline__inner"
          hasSide={hasSide || hasTimelineSide}
        >
          {rootChildren}
          <StyledHeader
            className="timeline__header"
            data-testid="timeline-header"
            role="rowgroup"
          >
            {headChildren}
          </StyledHeader>
          {bodyChildren}
        </StyledInner>
      </StyledTimeline>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
