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
    label="Date Range"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
))

stories.add('No legend', () => (
  <Switch
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
))

stories.add('Responsive', () => (
  <ResponsiveSwitch
    label="Date Range"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
))

stories.add('Small', () => (
  <Switch
    label="Date Range"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
    size="small"
  />
))

stories.add('Large', () => (
  <Switch
    label="Date Range"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
    size="large"
  />
))
