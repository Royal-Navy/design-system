import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ResponsiveSwitch, Switch, SWITCH_SIZE } from '.'

export default {
  component: Switch,
  subcomponents: { ResponsiveSwitch },
  title: 'Switch',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof Switch>

const options = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
]

export const Default: ComponentStory<typeof Switch> = (props) => (
  <Switch {...props} />
)

Default.args = {
  name: 'switch-default',
  options,
}

export const WithLegend: ComponentStory<typeof Switch> = (props) => (
  <Switch
    {...props}
    name="switch-legend"
    label="Example legend"
    options={options}
  />
)

WithLegend.storyName = 'With legend'

export const Responsive: ComponentStory<typeof Switch> = (props) => (
  <ResponsiveSwitch {...props} name="switch-responsive" options={options} />
)

Responsive.storyName = 'Responsive'

export const SelectedValue: ComponentStory<typeof Switch> = (props) => (
  <Switch {...props} name="switch-selected-value" options={options} value="2" />
)

SelectedValue.storyName = 'With value selected'

export const Small: ComponentStory<typeof Switch> = (props) => (
  <Switch
    {...props}
    name="switch-small"
    options={options}
    size={SWITCH_SIZE.SMALL}
  />
)

Small.storyName = 'Small'

export const Large: ComponentStory<typeof Switch> = (props) => (
  <Switch
    {...props}
    name="switch-large"
    options={options}
    size={SWITCH_SIZE.LARGE}
  />
)

Large.storyName = 'Large'
