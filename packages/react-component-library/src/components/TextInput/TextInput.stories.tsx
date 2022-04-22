import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { css } from 'styled-components'

import { IconSearch } from '@defencedigital/icon-library'
import { TextInput } from '.'

export default {
  argTypes: {
    endAdornment: {
      control: false,
    },
    startAdornment: {
      control: false,
    },
  },
  component: TextInput,
  title: 'Text Input',
  parameters: {
    argTypes: {
      onBlur: { action: 'onBlur' },
    },
  },
} as ComponentMeta<typeof TextInput>

export const Default: ComponentStory<typeof TextInput> = (props) => (
  <TextInput {...props} />
)

Default.args = {
  name: 'text-input-default',
  label: 'Example label',
}

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

export const WithError: ComponentStory<typeof TextInput> = (props) => (
  <TextInput
    {...props}
    isInvalid
    label="Example label"
    name="text-input-end-adornment"
  />
)

WithError.storyName = 'With error'

export const WithLongLabel: ComponentStory<typeof TextInput> = (props) => (
  <div
    css={css`
      max-width: 400px;
    `}
  >
    <TextInput
      {...props}
      label="This text input has a long label that doesn't fit in the container"
      name="text-input-long-label"
    />
  </div>
)

WithLongLabel.storyName = 'With long label'
