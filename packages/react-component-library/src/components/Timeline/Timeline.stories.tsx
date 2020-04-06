import React from 'react'
import { storiesOf } from '@storybook/react'

import { Timeline } from '.'

const stories = storiesOf('Timeline', module)

stories.add('No data', () => <Timeline rowData={[]} />)

const rowData = [
  {
    name: 'Example Row',
    events: [
      {
        title: 'Example Event',
        startDate: new Date(2020, 3, 13),
        endDate: new Date(2020, 3, 22),
      },
    ],
  },
]

stories.add('With data', () => (
  <Timeline
    startDate={new Date(2020, 4, 0)}
    today={new Date(2020, 3, 15)}
    rowData={rowData}
  />
))
