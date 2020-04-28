import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Timeline,
  TimelineEvent,
  TimelineEvents,
  TimelineRow,
  TimelineRows,
} from '.'

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
            startDate={new Date(2020, 3, 14)}
            endDate={new Date(2020, 3, 18)}
          >
            Event 1
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
      <TimelineRow name="Row 2">
        <TimelineEvents>
          <TimelineEvent
            startDate={new Date(2020, 3, 3)}
            endDate={new Date(2020, 3, 8)}
          >
            Event 2
          </TimelineEvent>
        </TimelineEvents>
      </TimelineRow>
    </TimelineRows>
  </Timeline>
))

stories.add('With custom event content', () => {
  const render = (text: string) => {
    return () => (
      <div style={{ backgroundColor: '#e5ffd9' }}>
        <span className="rn_text-s">{text}</span>
      </div>
    )
  }

  return (
    <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 16)}
              endDate={new Date(2020, 3, 20)}
              render={render('Custom event 1')}
            />
            <TimelineEvent
              startDate={new Date(2020, 3, 25)}
              endDate={new Date(2020, 3, 28)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 15)}
              endDate={new Date(2020, 3, 19)}
              render={render('Custom event 3')}
            />
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
  )
})

stories.add('With custom day width', () => {
  return (
    <Timeline
      startDate={new Date(2020, 4, 0)}
      today={new Date(2020, 3, 15)}
      dayWidth={75}
    >
      <TimelineRows>
        <TimelineRow name="Row 1">
          <TimelineEvents>
            <TimelineEvent
              startDate={new Date(2020, 3, 25)}
              endDate={new Date(2020, 3, 28)}
            >
              Event 2
            </TimelineEvent>
          </TimelineEvents>
        </TimelineRow>
        <TimelineRow name="Row 2">
          <TimelineEvents>
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
  )
})
