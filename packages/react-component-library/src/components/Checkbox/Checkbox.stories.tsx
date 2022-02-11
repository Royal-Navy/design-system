import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Checkbox } from '.'

export default {
  component: Checkbox,
  title: 'Checkbox',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStory<typeof Checkbox> = (props) => (
  <Checkbox {...props} />
)

Default.args = {
  id: undefined,
  label: 'Default checkbox',
  name: 'default',
  isChecked: true,
}

export const Disabled: ComponentStory<typeof Checkbox> = (props) => (
  <Checkbox {...props} />
)

Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled checkbox',
  name: 'disabled',
}

export const Invalid: ComponentStory<typeof Checkbox> = (props) => (
  <Checkbox {...props} />
)

Invalid.args = {
  id: undefined,
  label: 'Invalid checkbox',
  name: 'invalid',
  isInvalid: true,
}
