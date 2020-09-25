import React from 'react'
import styled from 'styled-components'

import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { TimelineDay } from './TimelineDay'
import { TimelineHeaderRow } from './TimelineHeaderRow'

export interface TimelineDaysWithRenderContentProps {
  render: (index: number, dayWidth: number, date: Date) => React.ReactElement
}

export interface TimelineDaysWithChildrenProps {
  render?: never
}

export type TimelineDaysProps =
  | TimelineDaysWithRenderContentProps
  | TimelineDaysWithChildrenProps

const StyledTimelineDays = styled.div`
  white-space: nowrap;
`

export const TimelineDays: React.FC<TimelineDaysProps> = ({ render }) => {
  return (
    <TimelineContext.Consumer>
      {({
        state: {
          days,
          endDate: timelineEndDate,
          options: { dayWidth },
        },
      }) => (
        <TimelineHeaderRow
          className="timeline__days"
          isShort
          name="Days"
          data-testid="timeline-days"
        >
          <StyledTimelineDays>
            {days.map(({ date }, index) => (
              <TimelineDay
                date={date}
                dayWidth={dayWidth}
                index={index}
                key={getKey('timeline-day', date.toString())}
                render={render}
                timelineEndDate={timelineEndDate}
              />
            ))}
          </StyledTimelineDays>
        </TimelineHeaderRow>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineDays.displayName = 'TimelineDays'
