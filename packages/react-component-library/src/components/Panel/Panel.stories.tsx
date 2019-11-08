import React from 'react'
import { storiesOf } from '@storybook/react'

import { Panel } from './index'

const stories = storiesOf('Panel', module)

stories.add('Default', () => {
  return <Panel>Content</Panel>
})
