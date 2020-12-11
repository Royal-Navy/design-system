import React from 'react'

import {
  Timeline,
  TimelineTodayMarker,
  TimelineMonths,
  TimelineWeeks,
  TimelineDays,
  TimelineHours,
  TimelineRows,
  TimelineRow,
  TimelineEvents,
  TimelineEvent,
} from '@royalnavy/react-component-library'

export const ExampleTimeline = () => (
  <Timeline
    hasSide
    startDate={new Date(2020, 3, 1)}
    today={new Date(2020, 3, 3)}
  >
    <TimelineTodayMarker />
    <TimelineMonths />
    <TimelineWeeks />
    <TimelineDays />
    <TimelineHours />
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 2, 14)}
            endDate={new Date(2020, 3, 4)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 2)}
            endDate={new Date(2020, 3, 5)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
)
