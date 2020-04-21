import React from 'react'
import { storiesOf } from '@storybook/react'

import { Timeline, Event, Events, Row, Rows } from '.'

const stories = storiesOf('Timeline', module)

stories.add('No data', () => (
  <Timeline>
    <Rows>{}</Rows>
  </Timeline>
))

stories.add('With data', () => (
  <Timeline startDate={new Date(2020, 4, 0)} today={new Date(2020, 3, 15)}>
    <Rows>
      <Row name="Row 1">
        <Events>
          <Event
            startDate={new Date(2020, 3, 13)}
            endDate={new Date(2020, 3, 18)}
          >
            Event 1
          </Event>
          <Event
            startDate={new Date(2020, 3, 20)}
            endDate={new Date(2020, 3, 22)}
          >
            Event 2
          </Event>
        </Events>
      </Row>
      <Row name="Row 2">
        <Events>
          <Event
            startDate={new Date(2020, 3, 15)}
            endDate={new Date(2020, 3, 20)}
          >
            Event 3
          </Event>
          <Event
            startDate={new Date(2020, 3, 22)}
            endDate={new Date(2020, 3, 24)}
          >
            Event 4
          </Event>
        </Events>
      </Row>
    </Rows>
  </Timeline>
))
