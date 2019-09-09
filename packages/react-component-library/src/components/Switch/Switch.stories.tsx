import React from 'react'
import { storiesOf } from '@storybook/react'

import Switch from './Switch'
import ResponsiveSwitch from './index'

const stories = storiesOf('Switch', module)

const options = [
  { name: 'Day', value: '1' },
  { name: 'Week', value: '2' },
  { name: 'Month', value: '3' },
  { name: 'Year', value: '4' },
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

stories.add('Responsive', () => (
  <ResponsiveSwitch
    label="Example label"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
))
