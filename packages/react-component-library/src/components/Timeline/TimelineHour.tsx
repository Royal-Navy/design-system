import React from 'react'
import { isAfter } from 'date-fns'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { TIMELINE_BORDER_COLOR, TIMELINE_BG_COLOR } from './constants'

interface TimelineHourProps {
  date: Date
  render: (width: number, time: string) => React.ReactElement
  time: string
  timelineEndDate: Date
  width: number
}

const { spacing, color, fontSize, zIndex } = selectors

const StyledTimelineHour = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background-color: ${TIMELINE_BG_COLOR};
  border-top: ${spacing('px')} ${TIMELINE_BORDER_COLOR};
  border-bottom: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  border-right: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
`

const StyledTitle = styled.span`
  font-weight: 600;
  font-size: ${fontSize('xs')};
  color: ${color('neutral', '400')};
  background-color: ${TIMELINE_BG_COLOR};
  z-index: ${zIndex('body', 2)};
`

function renderDefault(width: number, time: string) {
  return (
    <StyledTimelineHour
      data-testid="timeline-hour"
      style={{
        width: `${width}px`,
      }}
    >
      <StyledTitle data-testid="timeline-hour-title">{time}</StyledTitle>
    </StyledTimelineHour>
  )
}

export const TimelineHour: React.FC<TimelineHourProps> = ({
  date,
  render,
  time,
  timelineEndDate,
  width,
  ...rest
}) => {
  if (isAfter(date, timelineEndDate)) return null

  const child = render ? render(width, time) : renderDefault(width, time)

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineHour.displayName = 'TimelineHour'
