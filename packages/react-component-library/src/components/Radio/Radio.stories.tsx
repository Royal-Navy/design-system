import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio } from '.'

export default {
  component: Radio,
  title: 'Radio',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof Radio>

export const Default: ComponentStory<typeof Radio> = (props) => (
  <Radio {...props} />
)

Default.args = {
  id: undefined,
  label: 'Default radio',
  name: 'default',
  isChecked: true,
}

export const Disabled: ComponentStory<typeof Radio> = (props) => (
  <Radio {...props} />
)

Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled radio',
  name: 'disabled',
}

export const Invalid: ComponentStory<typeof Radio> = (props) => (
  <Radio {...props} />
)

Invalid.args = {
  id: undefined,
  label: 'Invalid radio',
  name: 'invalid',
  isInvalid: true,
}
