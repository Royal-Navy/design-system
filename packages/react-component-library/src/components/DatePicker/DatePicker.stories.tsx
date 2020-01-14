import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { DatePicker } from '.'
import { DATEPICKER_PLACEMENT } from './constants'

const stories = storiesOf('DatePicker', module)

stories.add('Default', () => {
  return (
    <DatePicker
      startDate={new Date('11/01/2018')}
      onChange={action('onChange')}
      placement={DATEPICKER_PLACEMENT.BELOW}
    />
  )
})

stories.add('Range', () => {
  return (
    <DatePicker
      onChange={action('onChange')}
      placement={DATEPICKER_PLACEMENT.BELOW}
      isRange
    />
  )
})
