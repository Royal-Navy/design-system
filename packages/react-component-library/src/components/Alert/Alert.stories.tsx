import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs';

import { Alert, ALERT_VARIANT } from './index'

const stories = storiesOf('Alert', module)
const dangerStories = storiesOf('Alert/Examples/Danger', module)
const successStories = storiesOf('Alert/Examples/Success', module)
const warningStories = storiesOf('Alert/Examples/Warning', module)

stories.addDecorator(withKnobs)

const TITLE = 'Alert Title'
const DESCRIPTION =
  'This is the alert description. It provides context to the user, bringing attention to information that needs to be consumed.'

stories.add('Default', () => {
  return <Alert title={text('Title', TITLE)}>{text('Children', DESCRIPTION)}</Alert>
})

stories.add('Without title', () => {
  return <Alert>{text('Children', DESCRIPTION)}</Alert>
})

dangerStories.add('With title', () => {
  return (
    <Alert title={TITLE} variant={ALERT_VARIANT.DANGER}>
      {DESCRIPTION}
    </Alert>
  )
})

dangerStories.add('Without title', () => {
  return (
    <Alert variant={ALERT_VARIANT.DANGER}>
      {DESCRIPTION}
    </Alert>
  )
})

successStories.add('With title', () => {
  return (
    <Alert title={TITLE} variant={ALERT_VARIANT.SUCCESS}>
      {DESCRIPTION}
    </Alert>
  )
})

successStories.add('Without title', () => {
  return (
    <Alert variant={ALERT_VARIANT.SUCCESS}>
      {DESCRIPTION}
    </Alert>
  )
})

warningStories.add('With title', () => {
  return (
    <Alert title={TITLE} variant={ALERT_VARIANT.WARNING}>
      {DESCRIPTION}
    </Alert>
  )
})

warningStories.add('Without title', () => {
  return (
    <Alert title={TITLE} variant={ALERT_VARIANT.WARNING}>
      {DESCRIPTION}
    </Alert>
  )
})
