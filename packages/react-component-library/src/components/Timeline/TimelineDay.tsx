import React from 'react'
import styled from 'styled-components'
import { format, isAfter } from 'date-fns'
import { selectors } from '@royalnavy/design-tokens'

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

const { spacing, zIndex, fontSize, color } = selectors

const StyledTimelineDay = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background-color: ${TIMELINE_BG_COLOR};
  border-top: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  border-bottom: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  border-right: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
`

const StyledTitle = styled.div`
  font-weight: 600;
  font-size: ${fontSize('xs')};
  color: ${color('neutral', '400')};
  background-color: ${TIMELINE_BG_COLOR};
  z-index: ${zIndex('body', 2)};
`

function renderDefault({ dayWidth, date }: { dayWidth: number; date: Date }) {
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
    : renderDefault({ dayWidth, date })

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineDay.displayName = 'TimelineDay'
