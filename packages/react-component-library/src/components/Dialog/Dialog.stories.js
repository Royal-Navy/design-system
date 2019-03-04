import React from 'react'

import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import Dialog from './index'

const stories = storiesOf('Dialog', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Dialog
    actionText="I Understand"
    onAction={action('action')}
    onCancel={action('cancel')}
    title={text('Title', 'Dialog title')}
    state={text('State', 'neutral')}
  >
    <p>
      Sed posuere consectetur est at lobortis. Curabitur blandit tempus
      porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare
      sem lacinia quam venenatis vestibulum. Donec sed odio dui.
    </p>
  </Dialog>
))

stories.add('Danger', () => (
  <Dialog
    actionText="I Understand"
    onAction={action('action')}
    onCancel={action('cancel')}
    title={text('Title', 'Dialog title')}
    state={text('State', 'danger')}
  >
    <p>
      Sed posuere consectetur est at lobortis. Curabitur blandit tempus
      porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare
      sem lacinia quam venenatis vestibulum. Donec sed odio dui.
    </p>
  </Dialog>
))

stories.add('Success', () => (
  <Dialog
    actionText="I Understand"
    onAction={action('action')}
    onCancel={action('cancel')}
    title={text('Title', 'Dialog title')}
    state={text('State', 'success')}
  >
    <p>
      Sed posuere consectetur est at lobortis. Curabitur blandit tempus
      porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare
      sem lacinia quam venenatis vestibulum. Donec sed odio dui.
    </p>
  </Dialog>
))
