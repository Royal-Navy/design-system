import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconSearch } from '@defencedigital/icon-library'
import { TextInputE } from '.'

export default {
  component: TextInputE,
  title: 'Text Input (Experimental)',
  parameters: {
    argTypes: { onBlur: { action: 'onBlur' } },
  },
} as ComponentMeta<typeof TextInputE>

export const Default: ComponentStory<typeof TextInputE> = (props) => (
  <TextInputE {...props} />
)

Default.args = {
  name: 'text-input-default',
  label: 'Example label',
}

export const Disabled: ComponentStory<typeof TextInputE> = (props) => (
  <TextInputE
    {...props}
    name="text-input-disabled"
    label="Example label"
    isDisabled
  />
)

Disabled.storyName = 'Disabled'

export const WithStartAdornment: ComponentStory<typeof TextInputE> = (
  props
) => (
  <TextInputE
    {...props}
    name="text-input-start-adornment"
    label="Example label"
    startAdornment={<IconSearch />}
  />
)

WithStartAdornment.storyName = 'With start adornment'

export const WithEndAdornment: ComponentStory<typeof TextInputE> = (props) => (
  <TextInputE
    {...props}
    name="text-input-end-adornment"
    label="Example label"
    endAdornment={<IconSearch />}
  />
)

WithEndAdornment.storyName = 'With end adornment'

export const WithError: ComponentStory<typeof TextInputE> = (props) => (
  <TextInputE
    {...props}
    isInvalid
    label="Example label"
    name="text-input-end-adornment"
  />
)

WithError.storyName = 'With error'
