import { storiesOf } from '@storybook/react'
import React from 'react'

import { Modal } from './index'
import { ButtonProps } from '../Button'

const stories = storiesOf('Modal', module)

const primaryButton: ButtonProps = {
  onClick: event => console.log('primary'),
  children: 'Primary',
}

const secondaryButton: ButtonProps = {
  onClick: event => console.log('secondary'),
  children: 'Secondary',
}

const tertiaryButton: ButtonProps = {
  onClick: event => console.log('tertiary'),
  children: 'Tertiary',
}

stories.add('Default', () => {
  return (
    <Modal
      title="Modal Header"
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      onClose={() => console.log('close')}
      isOpen={true}
    >
      <pre style={{ padding: '1rem' }}>// Arbitrary JSX content</pre>
    </Modal>
  )
})

stories.add('No header', () => {
  return (
    <Modal
      primaryButton={primaryButton}
      secondaryButton={secondaryButton}
      tertiaryButton={tertiaryButton}
      onClose={() => console.log('close')}
      isOpen={true}
    >
      <pre style={{ padding: '1rem' }}>// Arbitrary JSX content</pre>
    </Modal>
  )
})

stories.add('No buttons', () => {
  return (
    <Modal
      title="Modal Header"
      onClose={() => console.log('close')}
      isOpen={true}
    >
      <pre style={{ padding: '1rem' }}>// Arbitrary JSX content</pre>
    </Modal>
  )
})

stories.add('Blank', () => {
  return (
    <Modal isOpen={true}>
      <pre style={{ padding: '1rem' }}>// Arbitrary JSX content</pre>
    </Modal>
  )
})
