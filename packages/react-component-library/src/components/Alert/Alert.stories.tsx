import React from 'react'
import { storiesOf } from '@storybook/react'

import { Alert, ALERT_VARIANT } from './index'

const stories = storiesOf('Alert', module)

const TITLE = 'Alert Title'
const DESCRIPTION =
  'This is the alert description. It provides context to the user, bringing attention to information that needs to be consumed.'

stories.add('Default', () => {
  return <Alert title={TITLE}>{DESCRIPTION}</Alert>
})

stories.add('Without title', () => {
  return <Alert>{DESCRIPTION}</Alert>
})

stories.add('Danger', () => {
  return (
    <Alert title={TITLE} variant={ALERT_VARIANT.DANGER}>
      {DESCRIPTION}
    </Alert>
  )
})

stories.add('Success', () => {
  return (
    <Alert title={TITLE} variant={ALERT_VARIANT.SUCCESS}>
      {DESCRIPTION}
    </Alert>
  )
})
