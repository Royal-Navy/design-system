import React from 'react'

import { storiesOf } from '@storybook/react'

import DateTime from './index'

const stories = storiesOf('DateTime', module)
const date = new Date()

stories.addParameters({
  info: {
    text:
      'Basic implementation of react-datepicker, see https://www.npmjs.com/package/react-datepicker for full instructions on how to use',
    inline: true,
    header: false,
  },
})

stories.add('Default', () => <DateTime />)
stories.add('Disabled', () => <DateTime disabled />)
stories.add('With time', () => <DateTime showTime />)
stories.add('Only show time', () => <DateTime showTime onlyTime />)
stories.add('With custom output', () => <DateTime outputFormat="dd MM YYYY" />)
stories.add('With time and custom output', () => (
  <DateTime showTime outputFormat="dd MM YYYY HH:MM" />
))
stories.add('With time interval set to 15 minutes', () => (
  <DateTime showTime timeIntervals={15} />
))
stories.add('With earlist date locked to today', () => (
  <DateTime minDate={new Date(date)} />
))
stories.add('With latest date locked to today', () => (
  <DateTime maxDate={new Date(date - 1)} />
))
stories.add(
  'With date rescricted to only today, yesterday and tomorrow',
  () => (
    <DateTime
      minDate={new Date(date.setDate(date.getDate() - 1))}
      maxDate={new Date(date.setDate(date.getDate() + 2))}
    />
  )
)
