import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import TabSet from './index'
import Tab from './Tab'

const stories = storiesOf('TabSet', module)

stories.add('Default', () => (
  <TabSet onChangeCallback={action('onChangeCallback')}>
    <Tab title="Example Tab 1">
      <p>This is some example tab 1 content</p>
    </Tab>
    <Tab title="Example Tab 2">
      <p>This is some example tab 2 content</p>
    </Tab>
  </TabSet>
))
