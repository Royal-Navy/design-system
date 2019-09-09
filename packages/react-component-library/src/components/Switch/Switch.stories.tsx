import React from 'react'
import { storiesOf } from '@storybook/react'

import Switch from './index'

const stories = storiesOf('Switch', module)

const options = [
  { name: 'Example 1', value: '1' },
  { name: 'Example 2', value: '2' },
  { name: 'Example 3', value: '3' },
]

stories.add('Default', () => (
  <Switch
    label="Example label"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
))
