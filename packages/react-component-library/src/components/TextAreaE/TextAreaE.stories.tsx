import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TextAreaE, TextAreaEProps } from '.'

export default {
  component: TextAreaE,
  title: 'Text Area (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<TextAreaEProps> = (props) => (
  <TextAreaE {...props} />
)

Default.args = {
  name: 'textarea-default',
  label: 'Example label',
}

export const Disabled: Story<TextAreaEProps> = (props) => (
  <TextAreaE {...props} isDisabled label="Example label" />
)

Disabled.storyName = 'Disabled'

export const WithError: Story<TextAreaEProps> = (props) => (
  <TextAreaE {...props} isInvalid label="Example label" />
)

WithError.storyName = 'With error'
