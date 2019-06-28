import React from 'react'
import { storiesOf } from '@storybook/react'

import TabSet from './index'
import Tab from './tab'

const stories = storiesOf('TabSet', module)

stories.add('Default', () => (
  <TabSet
    onChangeCallback={(id, name) => {
      console.log(id, name)
    }}
  >
    <Tab title="Example Tab 1">
      <p>This is some example tab 1 content</p>
    </Tab>
    <Tab title="Example Tab 2">
      <p>This is some example tab 2 content</p>
    </Tab>
  </TabSet>
))
