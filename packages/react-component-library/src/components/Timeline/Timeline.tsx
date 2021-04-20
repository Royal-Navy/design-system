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
import { TimelineToolbar } from './TimelineToolbar'
import { TimelineWeekColumns } from './TimelineWeekColumns'

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
  /**
   * Collection of composable Timeline compound components.
   */
  children: timelineChildrenType | timelineChildrenType[]
  /**
   * Width of a single day unit (pixels).
   */
  dayWidth?: number
  /**
   * Specify whether or not to output sidebar headings.
   */
  hasSide?: boolean
  /**
   * Specify whether to hide the scaling buttons.
   */
  hideScaling?: boolean
  /**
   * Specify whether to hide the toolbar.
   */
  hideToolbar?: boolean
  /**
   * A month will display either side of this start date.
   */
  startDate?: Date
  /**
   * Bound the timeline by the specified start and end dates.
   */
  endDate?: Date
  /**
   * Today's current date - default is the system date time.
   */
  today?: Date
  /**
   * The number of months to display at any one time.
   */
  range?: number
  /**
   * The fixed width value of a single day (in pixels).
   */
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

function getRenderColumns(
  children: timelineChildrenType | timelineChildrenType[]
) {
  const rowsChildren = extractChildren(children, [TimelineRows])

  if (!rowsChildren.length) {
    return null
  }

  return (rowsChildren[0] as React.ReactElement<TimelineRowsProps>).props
    .renderColumns
}

export const Timeline: React.FC<TimelineProps> = ({
  children,
  className,
  dayWidth,
  hasSide,
  hideScaling = false,
  hideToolbar = false,
  startDate,
  endDate,
  today,
  range,
  unitWidth,
  ...rest
}) => {
  const renderColumns = getRenderColumns(children)
  const options: TimelineOptions = {
    endDate,
    range,
    startDate,
    hoursBlockSize: getHoursBlockSize(children),
    unitWidth: dayWidth || unitWidth || DEFAULTS.UNIT_WIDTH,
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
      hasSide={hasSide || hasTimelineSide}
      options={options}
      today={today}
    >
      {!hideToolbar && <TimelineToolbar hideScaling={hideScaling} />}
      <StyledTimeline
        className={classNames('timeline', className)}
        data-testid="timeline"
        role="grid"
        {...rest}
      >
        <StyledInner
          $hasSide={hasSide || hasTimelineSide}
          className="timeline__inner"
        >
          <TimelineWeekColumns renderColumns={renderColumns} />
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
