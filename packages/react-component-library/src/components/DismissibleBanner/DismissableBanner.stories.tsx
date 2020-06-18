import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { DismissibleBanner } from '.'

const stories = storiesOf('DismissibleBanner', module)

const TITLE = 'Dismissible banner'
const DESCRIPTION =
  'This is the dismissible banner description.'

stories.add('Default', () => {
  return (
    <DismissibleBanner title={TITLE} onDismiss={action('onDismiss')}>
      {DESCRIPTION}
    </DismissibleBanner>
  )
})
