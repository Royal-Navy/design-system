import React from 'react'
import styled from 'styled-components'

import { getKey } from '../../helpers'
import { TIMELINE_BLOCK_SIZE } from './constants'
import { TimelineContext } from './context'
import { TimelineHour } from './TimelineHour'
import { TimelineHeaderRow } from './TimelineHeaderRow'

type BlockSizeType =
  | typeof TIMELINE_BLOCK_SIZE.QUARTER_DAY
  | typeof TIMELINE_BLOCK_SIZE.HALF_DAY

export interface TimelineHoursWithRenderContentProps {
  blockSize?: BlockSizeType
  render: (width: number, time: string) => React.ReactElement
}

export interface TimelineHoursWithChildrenProps {
  blockSize?: BlockSizeType
  render?: never
}

export type TimelineHoursProps =
  | TimelineHoursWithRenderContentProps
  | TimelineHoursWithChildrenProps

const StyledTimelineHours = styled.div`
  white-space: nowrap;
`

export const TimelineHours: React.FC<TimelineHoursProps> = ({ render }) => {
  return (
    <TimelineContext.Consumer>
      {({
        state: {
          days,
          hours,
          endDate: timelineEndDate,
          options: { unitWidth },
        },
      }) => (
        <TimelineHeaderRow isShort name="Hours" data-testid="timeline-hours">
          <StyledTimelineHours>
            {days.map(({ date }) => {
              return hours.map(({ hourIndex, time }) => (
                <TimelineHour
                  date={date}
                  key={getKey(
                    'timeline-hour',
                    `${date.toString()}-${hourIndex}`
                  )}
                  render={render}
                  time={time}
                  timelineEndDate={timelineEndDate}
                  width={unitWidth}
                />
              ))
            })}
          </StyledTimelineHours>
        </TimelineHeaderRow>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineHours.displayName = 'TimelineHours'
