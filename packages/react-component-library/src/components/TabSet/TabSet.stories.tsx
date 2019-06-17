import React from 'react'
import { storiesOf } from '@storybook/react'

import TabSet from './index'

const tabData = [
  {
    title: 'Example Tab 1',
    content: 'This is some example tab 1 content',
  },
  {
    title: 'Example Tab 2',
    content: 'This is some example tab 2 content',
  },
]

const stories = storiesOf('TabSet', module)

stories.add('Default', () => <TabSet tabs={tabData} />)
