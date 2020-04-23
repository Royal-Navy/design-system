import React from 'react'
import { storiesOf } from '@storybook/react'

import { Timeline, TimelineEvent, TimelineEvents, TimelineRow, TimelineRows } from '.'

const stories = storiesOf('Timeline', module)

stories.add('No data', () => (
  <Timeline>
    <TimelineRows>{}</TimelineRows>
  </Timeline>
))

stories.add('With data', () => (
  <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
    <TimelineRows>
      <TimelineRow name="Row 1">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 13)}
            endDate={new Date(2020, 3, 18)}
          >
            Event 1
          </TimelineEvent>
          <TimelineEvent
            startDate={new Date(2020, 3, 20)}
            endDate={new Date(2020, 3, 22)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 15)}
            endDate={new Date(2020, 3, 20)}
          >
            Event 3
          </TimelineEvent>
          <TimelineEvent
            startDate={new Date(2020, 3, 22)}
            endDate={new Date(2020, 3, 24)}
          >
            Event 4
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
))
