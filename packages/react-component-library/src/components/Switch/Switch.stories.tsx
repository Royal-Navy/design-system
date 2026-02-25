import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Switch, SwitchOption, SWITCH_OPTION_VARIANT } from '.'
import { COMPONENT_SIZE } from '../Forms'

export default {
  component: Switch,
  title: 'Components/Switch',
  subcomponents: { SwitchOption },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof Switch>

const Template: StoryFn<typeof Switch> = (props) => (
  <Switch {...props}>
    <SwitchOption label="Day" value="1" />
    <SwitchOption label="Week" value="2" />
    <SwitchOption label="Month" value="3" />
    <SwitchOption label="Year" value="4" />
  </Switch>
)

export const Default = Template.bind({})
Default.args = {
  name: 'switch-default',
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'switch-disabled',
  value: '2',
  isDisabled: true,
}

export const Invalid = Template.bind({})
Invalid.args = {
  name: 'switch-invalid',
  isInvalid: true,
}

export const WithLegend = Template.bind({})
WithLegend.storyName = 'Legend'
WithLegend.args = {
  name: 'switch-legend',
  label: 'Example legend',
}

export const SelectedValue = Template.bind({})
SelectedValue.storyName = 'Value selected'
SelectedValue.args = {
  name: 'switch-selected-value',
  value: '2',
}

export const Small = Template.bind({})
Small.args = {
  name: 'switch-small',
  size: COMPONENT_SIZE.SMALL,
}

export const Variants: StoryFn = () => (
  <Switch key="variants" name="switch-variants" value="2">
    <SwitchOption
      label="Primary"
      value="1"
      variant={SWITCH_OPTION_VARIANT.PRIMARY}
    />
    <SwitchOption
      label="Secondary"
      value="2"
      variant={SWITCH_OPTION_VARIANT.SECONDARY}
    />
    <SwitchOption
      label="Tertiary"
      value="3"
      variant={SWITCH_OPTION_VARIANT.TERTIARY}
    />
    <SwitchOption
      label="Danger"
      value="4"
      variant={SWITCH_OPTION_VARIANT.DANGER}
    />
  </Switch>
)
