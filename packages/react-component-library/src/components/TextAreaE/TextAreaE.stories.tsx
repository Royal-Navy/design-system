import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextAreaE } from '.'

export default {
  component: TextAreaE,
  title: 'Text Area (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof TextAreaE>

export const Default: ComponentStory<typeof TextAreaE> = (props) => (
  <TextAreaE {...props} />
)

Default.args = {
  name: 'textarea-default',
  label: 'Example label',
}

export const Disabled: ComponentStory<typeof TextAreaE> = (props) => (
  <TextAreaE {...props} isDisabled label="Example label" />
)

Disabled.storyName = 'Disabled'

export const WithError: ComponentStory<typeof TextAreaE> = (props) => (
  <TextAreaE {...props} isInvalid label="Example label" />
)

WithError.storyName = 'With error'
