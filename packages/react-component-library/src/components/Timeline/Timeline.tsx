import React from 'react'
import { isAfter, setHours, startOfToday } from 'date-fns'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { TimelineProvider } from './context'
import logger from '../../utils/logger'

import { extractChildren, timelineChildrenType } from './helpers/children'
import { TimelineHours, TimelineHoursProps } from '.'

import { TimelineOptions } from './context/types'
import { DEFAULTS } from './constants'
import { TimelineGrid } from './TimelineGrid'

export interface TimelineProps extends ComponentWithClass {
  /**
   * Collection of composable Timeline compound components.
   */
  children: timelineChildrenType | timelineChildrenType[]
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
  startDate: Date
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

function getEndDate(startDate: Date, endDate?: Date) {
  if (startDate && endDate && isAfter(startDate, endDate)) {
    logger.error('`startDate` is after `endDate`')
    return null
  }

  return endDate ?? null
}

export const Timeline = ({
  children,
  className,
  hasSide = false,
  hideScaling = false,
  hideToolbar = false,
  isFullWidth = false,
  startDate,
  endDate,
  today = setHours(startOfToday(), 12),
  range = 1,
  unitWidth,
  ...rest
}: TimelineProps) => {
  const options: TimelineOptions = {
    range,
    startDate,
    endDate: getEndDate(startDate, endDate),
    hoursBlockSize: getHoursBlockSize(children),
    unitWidth: unitWidth || DEFAULTS.UNIT_WIDTH,
  }

  return (
    <TimelineProvider hasSide={hasSide} options={options} today={today}>
      <TimelineGrid
        className={className}
        hasSide={hasSide}
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
