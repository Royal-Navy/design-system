import React from 'react'
import styled from 'styled-components'
import { format, isAfter } from 'date-fns'
import {
  SpacingPx,
  ZindexBody,
  TypographyXs,
  ColorNeutral400,
} from '@royalnavy/design-tokens'

import {
  DATE_DAY_FORMAT,
  TIMELINE_BORDER_COLOR,
  TIMELINE_BG_COLOR,
} from './constants'

interface TimelineDayProps {
  date: Date
  dayWidth: number
  index: number
  render: (index: number, dayWidth: number, date: Date) => React.ReactElement
  timelineEndDate: Date
}

const StyledTimelineDay = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background-color: ${TIMELINE_BG_COLOR};
  border-top: ${SpacingPx} solid ${TIMELINE_BORDER_COLOR};
  border-bottom: ${SpacingPx} solid ${TIMELINE_BORDER_COLOR};
  border-right: ${SpacingPx} solid ${TIMELINE_BORDER_COLOR};
`

const StyledTitle = styled.div`
  font-weight: 600;
  font-size: ${TypographyXs};
  color: ${ColorNeutral400};
  background-color: ${TIMELINE_BG_COLOR};
  z-index: ${Number(ZindexBody) + 2};
`

function renderDefault(index: number, dayWidth: number, date: Date) {
  return (
    <StyledTimelineDay
      data-testid="timeline-day"
      style={{
        width: `${dayWidth}px`,
      }}
    >
      <StyledTitle data-testid="timeline-day-title">
        {format(date, DATE_DAY_FORMAT)}
      </StyledTitle>
    </StyledTimelineDay>
  )
}

export const TimelineDay: React.FC<TimelineDayProps> = ({
  date,
  dayWidth,
  index,
  render,
  timelineEndDate,
  ...rest
}) => {
  if (isAfter(date, timelineEndDate)) return null

  const child = render
    ? render(index, dayWidth, date)
    : renderDefault(index, dayWidth, date)

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineDay.displayName = 'TimelineDay'
