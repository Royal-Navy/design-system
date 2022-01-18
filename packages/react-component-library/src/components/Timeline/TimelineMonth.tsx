import React from 'react'
import { format } from 'date-fns'

import { DATE_MONTH_FORMAT } from './constants'
import { StyledMonth } from './partials/StyledMonth'
import { StyledMonthMedium } from './partials/StyledMonthMedium'
import { StyledMonthSmall } from './partials/StyledMonthSmall'
import { StyledMonthTitle } from './partials/StyledMonthTitle'
import { StyledMonthTitleMedium } from './partials/StyledMonthTitleMedium'
import { StyledMonthTitleSmall } from './partials/StyledMonthTitleSmall'
import { TimelineDay } from './context/types'

const DECEMBER_INDEX = 11

export const MONTH_SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const

export type TimelineMonthSizeType =
  | typeof MONTH_SIZE.SMALL
  | typeof MONTH_SIZE.MEDIUM
  | typeof MONTH_SIZE.LARGE

interface TimelineMonthProps {
  days: TimelineDay[]
  daysTotal: number
  dayWidth: number
  index: number
  render: (props: {
    index: number
    dayWidth: number
    daysTotal: number
    startDate: Date
  }) => React.ReactElement
  size: TimelineMonthSizeType
  startDate: Date
}

const MONTHS_BY_SIZE = {
  [MONTH_SIZE.SMALL]: (startDate: Date, width: number) => (
    <StyledMonthSmall
      $hasThickBorder={startDate.getMonth() === DECEMBER_INDEX}
      $width={width}
      data-testid="timeline-month"
    >
      <StyledMonthTitleSmall>
        {format(startDate, 'MMM')} {format(startDate, 'yyyy')}
      </StyledMonthTitleSmall>
    </StyledMonthSmall>
  ),
  [MONTH_SIZE.MEDIUM]: (startDate: Date, width: number) => (
    <StyledMonthMedium $width={width} data-testid="timeline-month">
      <StyledMonthTitleMedium>
        <span>{format(startDate, 'MMM')}</span>
        <span>{format(startDate, 'yyyy')}</span>
      </StyledMonthTitleMedium>
    </StyledMonthMedium>
  ),
  [MONTH_SIZE.LARGE]: (startDate: Date, width: number) => (
    <StyledMonth $width={width} data-testid="timeline-month">
      <StyledMonthTitle>
        {format(startDate, DATE_MONTH_FORMAT)}
      </StyledMonthTitle>
    </StyledMonth>
  ),
}

function renderDefault({
  dayWidth,
  daysTotal,
  size,
  startDate,
}: {
  dayWidth: number
  daysTotal: number
  size: TimelineMonthSizeType
  startDate: Date
}): React.ReactElement {
  const width = dayWidth * daysTotal

  return MONTHS_BY_SIZE[size](startDate, width)
}

export const TimelineMonth: React.FC<TimelineMonthProps> = ({
  days: _,
  daysTotal,
  dayWidth,
  index,
  render,
  size,
  startDate,
  ...rest
}) => {
  const child = render
    ? render({ index, dayWidth, daysTotal, startDate })
    : renderDefault({ dayWidth, daysTotal, size, startDate })

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineMonth.displayName = 'TimelineMonth'
