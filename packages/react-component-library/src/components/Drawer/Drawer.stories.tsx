import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Drawer } from '.'

const stories = storiesOf('Drawer', module)

stories.add('Default', () => {
  return (
    <Drawer onClose={action('onClose')} isOpen>
      <h1>Arbitrary JSX</h1>
    </Drawer>
  )
})
