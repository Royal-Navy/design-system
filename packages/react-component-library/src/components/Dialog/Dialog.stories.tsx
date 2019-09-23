import { storiesOf } from '@storybook/react'
import React from 'react'

import { Dialog } from './index'
import { ButtonProps } from '../Button'

const stories = storiesOf('Dialog', module)

stories.add('Dialog', () => {
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
    <Dialog
      title="This is a thing"
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      onClose={() => console.log('close')}
    >
      This is a test
    </Dialog>
  )
})
