import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Modal } from './index'
import { BUTTON_COLOR, ButtonProps } from '../Button'

const stories = storiesOf('Modal', module)
const examples = storiesOf('Modal/Examples', module)

const primaryButton: ButtonProps = {
  onClick: action('Clicked primary'),
  children: 'Primary',
}

const secondaryButton: ButtonProps = {
  onClick: action('Clicked secondary'),
  children: 'Secondary',
}

const tertiaryButton: ButtonProps = {
  onClick: action('Clicked tertiary'),
  children: 'Tertiary',
}

stories.add('Default', () => {
  return (
    <Modal
      title="Modal Header"
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      onClose={action('onClose')}
      isOpen
    >
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </Modal>
  )
})

examples.add('No header', () => {
  return (
    <Modal
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      onClose={action('onClose')}
      isOpen
    >
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </Modal>
  )
})

examples.add('No buttons', () => {
  return (
    <Modal title="Modal Header" onClose={action('onClose')} isOpen>
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </Modal>
  )
})

examples.add('Danger primary button without icon', () => {
  const primaryButtonWithoutIcon: ButtonProps = {
    ...primaryButton,
    color: BUTTON_COLOR.DANGER,
    icon: undefined,
  }

  return (
    <Modal
      title="Modal Header"
      primaryButton={primaryButtonWithoutIcon}
      secondaryButton={secondaryButton}
      onClose={action('onClose')}
      isOpen
    >
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </Modal>
  )
})

examples.add('No Tertiary Button', () => {
  return (
    <Modal
      title="Modal Header"
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      onClose={action('onClose')}
      isOpen
    >
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </Modal>
  )
})

examples.add('Blank', () => {
  return (
    <Modal isOpen>
      <pre style={{ padding: '1rem' }}>Arbitrary JSX content</pre>
    </Modal>
  )
})
