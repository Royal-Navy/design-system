import React from 'react'
import { format, endOfMonth, differenceInDays, min, max } from 'date-fns'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { DATE_MONTH_FORMAT } from './constants'
import { formatPx } from './helpers'
import { TimelineDay } from './context/types'

interface TimelineMonthProps {
  days: TimelineDay[]
  dayWidth: number
  index: number
  render: (
    index: number,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => React.ReactElement
  startDate: Date
}

const { spacing, color, zIndex, fontSize } = selectors

const StyledTimelineMonth = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 4rem;

  &:last-of-type {
    border-right: none;
  }

  &::after {
    position: absolute;
    right: 0;
    top: 0;
    content: '';
    display: inline-block;
    width: 1rem;
    height: 100vh;
    border-right: ${spacing('px')} dashed ${color('neutral', '200')};
    z-index ${zIndex('body', 1)}
  }
`

const StyledTitle = styled.span`
  font-size: ${fontSize('xl')};
  font-weight: 600;
  color: ${color('neutral', '600')};
  padding-left: ${spacing('8')};
`

function renderDefault(
  index: number,
  dayWidth: number,
  daysTotal: number,
  startDate: Date
): React.ReactElement {
  return (
    <StyledTimelineMonth
      style={{
        width: formatPx(dayWidth, daysTotal),
      }}
      data-testid="timeline-month"
    >
      <StyledTitle>{format(startDate, DATE_MONTH_FORMAT)}</StyledTitle>
    </StyledTimelineMonth>
  )
}

export const TimelineMonth: React.FC<TimelineMonthProps> = ({
  days,
  dayWidth,
  index,
  render,
  startDate,
  ...rest
}) => {
  const firstDateDisplayed = max([startDate, days[0].date])
  const lastDateDisplayed = min([
    endOfMonth(startDate),
    days[days.length - 1].date,
  ])
  const daysTotal = differenceInDays(lastDateDisplayed, firstDateDisplayed) + 1

  const child = render
    ? render(index, dayWidth, daysTotal, startDate)
    : renderDefault(index, dayWidth, daysTotal, startDate)

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineMonth.displayName = 'TimelineMonth'
