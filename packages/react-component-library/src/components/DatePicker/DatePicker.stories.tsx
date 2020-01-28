import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { DatePicker, DATEPICKER_PLACEMENT } from '.'

const stories = storiesOf('DatePicker', module)
const examples = storiesOf('DatePicker/Examples', module)

stories.add('Default', () => {
  return (
    <DatePicker
      startDate={new Date('11/01/2018')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placement={DATEPICKER_PLACEMENT.BELOW}
    />
  )
})

examples.add('Custom label', () => {
  return (
    <DatePicker
      startDate={new Date('11/01/2018')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      label="Some other label"
    />
  )
})

examples.add('Disabled', () => {
  return (
    <DatePicker
      startDate={new Date('11/01/2018')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      isDisabled
    />
  )
})

examples.add('Range', () => {
  return (
    <DatePicker
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      isRange
    />
  )
})
