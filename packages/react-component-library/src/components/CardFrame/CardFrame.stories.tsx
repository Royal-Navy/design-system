import React from 'react'
import { storiesOf } from '@storybook/react'

import { CardFrame } from './index'

const stories = storiesOf('CardFrame', module)

stories.add('Default', () => {
  return <CardFrame>Content</CardFrame>
})
