import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Alert from './index'

const stories = storiesOf('Alert', module)

stories.addDecorator(withKnobs)

stories.add('With title', () => (
  <div>
    <Alert
      className="h_mb-4"
      title={text('title', 'Alert Title')}
      onClick={action('clicked')}
      state="neutral"
    >
      {text('body', 'This is some text')}
    </Alert>
  </div>
))

stories.add('Event Alert', () => (
  <Alert state="neutral" className="event" onClick={action('clicked')}>
    {text('body', 'This is some text')}
  </Alert>
))
