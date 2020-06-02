import React from 'react'

import {
  Timeline,
  TimelineTodayMarker,
  TimelineSide,
  TimelineMonths,
  TimelineWeeks,
  TimelineDays,
  TimelineRows,
  TimelineRow,
  TimelineEvents,
  TimelineEvent,
} from '@royalnavy/react-component-library'

export const ExampleTimeline = () => {
  return (
    <Timeline
      startDate={new Date(2020, 4, 0)}
      today={new Date(2020, 3, 6)}
      range={3}
      dayWidth={30}
    >
      <TimelineTodayMarker />
      <TimelineSide />
      <TimelineMonths />
      <TimelineWeeks />
      <TimelineDays />
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 2)}
              endDate={new Date(2020, 3, 8)}
            >
              Event 1
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 3)}
              endDate={new Date(2020, 3, 10)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
      </TimelineRows>
    </Timeline>
  )
}
