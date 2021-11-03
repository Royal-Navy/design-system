import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { SwitchE, SwitchEOption, SwitchEProps, SWITCHE_SIZE } from '.'

export default {
  component: SwitchE,
  title: 'SwitchE (Experimental)',
  subcomponents: { SwitchEOption },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const Template: Story<SwitchEProps> = (props) => (
  <SwitchE {...props}>
    <SwitchEOption label="Day" value="1" />
    <SwitchEOption label="Week" value="2" />
    <SwitchEOption label="Month" value="3" />
    <SwitchEOption label="Year" value="4" />
  </SwitchE>
)

export const Default = Template.bind({})
Default.args = {
  name: 'switch-default',
}

export const Disabled = Template.bind({})
Disabled.storyName = 'Disabled'
Disabled.args = {
  name: 'switch-disabled',
  value: '2',
  isDisabled: true,
}

export const Invalid = Template.bind({})
Invalid.storyName = 'Invalid'
Invalid.args = {
  name: 'switch-invalid',
  isInvalid: true,
}

export const WithLegend = Template.bind({})
WithLegend.storyName = 'With legend'
WithLegend.args = {
  name: 'switch-legend',
  label: 'Example legend',
}

export const SelectedValue = Template.bind({})
SelectedValue.storyName = 'With value selected'
SelectedValue.args = {
  name: 'switch-selected-value',
  value: '2',
}

export const Small = Template.bind({})
Small.storyName = 'Small'
Small.args = {
  name: 'switch-small',
  size: SWITCHE_SIZE.SMALL,
}
