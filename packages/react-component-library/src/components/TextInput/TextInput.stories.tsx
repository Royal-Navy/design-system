import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconSearch } from '@defencedigital/icon-library'
import { TextInput } from '.'

export default {
  component: TextInput,
  title: 'Text Input',
  argTypes: { onBlur: { action: 'onBlur' } },
} as ComponentMeta<typeof TextInput>

export const Default: ComponentStory<typeof TextInput> = (props) => (
  <TextInput {...props} />
)

Default.args = {
  name: 'text-input-default',
  label: 'Example label',
}

export const WithLabel: ComponentStory<typeof TextInput> = (props) => (
  <TextInput {...props} name="text-input-label" label="Example label" />
)

WithLabel.storyName = 'With label'

export const Disabled: ComponentStory<typeof TextInput> = (props) => (
  <TextInput
    {...props}
    name="text-input-disabled"
    label="Example label"
    isDisabled
  />
)

Disabled.storyName = 'Disabled'

export const WithStartAdornment: ComponentStory<typeof TextInput> = (props) => (
  <TextInput
    {...props}
    name="text-input-start-adornment"
    label="Example label"
    startAdornment={<IconSearch />}
  />
)

WithStartAdornment.storyName = 'With start adornment'

export const WithEndAdornment: ComponentStory<typeof TextInput> = (props) => (
  <TextInput
    {...props}
    name="text-input-end-adornment"
    label="Example label"
    endAdornment={<IconSearch />}
  />
)

WithEndAdornment.storyName = 'With end adornment'
