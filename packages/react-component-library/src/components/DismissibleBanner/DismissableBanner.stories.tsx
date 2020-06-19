import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { DismissibleBanner } from '.'

const stories = storiesOf('DismissibleBanner', module)
const examples = storiesOf('DismissibleBanner/Examples', module)

const TITLE = 'Dismissible banner'
const DESCRIPTION = 'This is the dismissible banner description.'

stories.add('Default', () => {
  return (
    <DismissibleBanner title={TITLE} onDismiss={action('onDismiss')}>
      {DESCRIPTION}
    </DismissibleBanner>
  )
})

examples.add('Arbitrary', () => {
  return (
    <DismissibleBanner onDismiss={action('onDismiss')}>
      <p>Arbitrary content</p>
    </DismissibleBanner>
  )
})

examples.add('Hide checkbox', () => {
  return (
    <DismissibleBanner
      hasCheckbox={false}
      onDismiss={action('onDismiss')}
      title={TITLE}
    >
      {DESCRIPTION}
    </DismissibleBanner>
  )
})
