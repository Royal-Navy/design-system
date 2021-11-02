import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineProvider } from './context'
import logger from '../../utils/logger'

import { extractChildren, timelineChildrenType } from './helpers/children'
import { TimelineHours, TimelineHoursProps, TimelineSide } from '.'

import { TimelineOptions } from './context/types'
import { DEFAULTS } from './constants'
import { TimelineGrid } from './TimelineGrid'

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
   * Specify whether the `Timeline` should fill the full width.
   */
  isFullWidth?: boolean
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

export const Timeline: React.FC<TimelineProps> = ({
  children,
  className,
  dayWidth,
  hasSide = false,
  hideScaling = false,
  hideToolbar = false,
  isFullWidth = false,
  startDate,
  endDate,
  today,
  range,
  unitWidth,
  ...rest
}) => {
  const options: TimelineOptions = {
    endDate,
    range,
    startDate,
    hoursBlockSize: getHoursBlockSize(children),
    unitWidth: dayWidth || unitWidth || DEFAULTS.UNIT_WIDTH,
  }

  const hasTimelineSide = hasTimelineSideComponent(children)

  return (
    <TimelineProvider
      hasSide={hasSide || hasTimelineSide}
      options={options}
      today={today}
    >
      <TimelineGrid
        className={className}
        hasSide={hasSide || hasTimelineSide}
        hideScaling={hideScaling}
        hideToolbar={hideToolbar}
        isFullWidth={isFullWidth}
        {...rest}
      >
        {children}
      </TimelineGrid>
    </TimelineProvider>
  )
}

Timeline.displayName = 'Timeline'
