import { storiesOf } from '@storybook/react'
import React from 'react'

import { Modal } from './index'
import { ButtonProps } from '../Button'

const stories = storiesOf('Modal', module)

stories.add('Modal', () => {
  const primaryButton: ButtonProps = {
    onClick: event => console.log('primary'),
    children: 'Next',
  }

  const secondaryButton: ButtonProps = {
    onClick: event => console.log('secondary'),
    children: 'Cancel',
  }

  const tertiaryButton: ButtonProps = {
    onClick: event => console.log('tertiary'),
    children: 'Back',
  }

  return (
    <Modal
      title="This is a thing"
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      onClose={() => console.log('close')}
    >
      This is a test
    </Modal>
  )
})
