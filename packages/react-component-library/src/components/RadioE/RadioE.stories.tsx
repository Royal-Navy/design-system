import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RadioE } from '.'

export default {
  component: RadioE,
  title: 'Radio (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof RadioE>

const Template: ComponentStory<typeof RadioE> = (props) => <RadioE {...props} />

export const Default = Template.bind({})
Default.args = {
  id: undefined,
  label: 'Default radio',
  name: 'default',
}

export const Checked = Template.bind({})
Checked.args = {
  id: undefined,
  defaultChecked: true,
  label: 'Checked radio',
  name: 'checked',
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled radio',
  name: 'disabled',
}

export const DisabledChecked = Template.bind({})
DisabledChecked.storyName = 'Disabled, checked'
DisabledChecked.args = {
  id: undefined,
  isDisabled: true,
  defaultChecked: true,
  label: 'Disabled, checked radio',
  name: 'disabled-checked',
}

export const Invalid = Template.bind({})
Invalid.args = {
  id: undefined,
  label: 'Invalid radio',
  name: 'invalid',
  isInvalid: true,
}
