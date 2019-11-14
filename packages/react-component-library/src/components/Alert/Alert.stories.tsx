import React from 'react'
import { storiesOf } from '@storybook/react'

import { Alert } from './index'

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
