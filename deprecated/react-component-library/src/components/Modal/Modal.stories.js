import React from 'react'

import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Modal from './index'

const stories = storiesOf('Modal', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Modal
    title="Generic Card Content with a long title that wraps multiple rows"
    actionButtonText="I Understand"
    onCancel={action('Cancel')}
    onAction={action('Action')}
  >
    <p>
      Sed posuere consectetur est at lobortis. Curabitur blandit tempus
      porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare
      sem lacinia quam venenatis vestibulum. Donec sed odio dui.
    </p>
  </Modal>
))
