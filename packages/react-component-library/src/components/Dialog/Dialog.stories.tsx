import { storiesOf } from '@storybook/react'
import React from 'react'

import { Dialog } from './index'
import { ButtonProps } from '../Button'

const stories = storiesOf('Dialog', module)

stories.add('Default', () => {
  return (
    <Dialog
      title="Dialog Title"
      description="Dialog description."
      onConfirm={event => {
        console.log('onConfirm')
      }}
      onCancel={event => {
        console.log('onCancel')
      }}
      isOpen={true}
    ></Dialog>
  )
})

stories.add('Danger', () => {
  return (
    <Dialog
      title="Dialog Title"
      description="Dialog description."
      onConfirm={event => {
        console.log('onConfirm')
      }}
      onCancel={event => {
        console.log('onCancel')
      }}
      danger={true}
      isOpen={true}
    ></Dialog>
  )
})
