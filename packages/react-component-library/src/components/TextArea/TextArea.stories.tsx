import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TextArea } from '.'

export default {
  component: TextArea,
  title: 'Text Area',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof TextArea>

export const Default: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} />
)

Default.args = {
  name: 'textarea-default',
  label: 'Example label',
}

export const Disabled: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} isDisabled label="Example label" />
)

Disabled.storyName = 'Disabled'

export const WithError: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} isInvalid label="Example label" />
)

WithError.storyName = 'With error'

export const WithLongLabel: ComponentStory<typeof TextArea> = (props) => (
  <div
    css={`
      max-width: 400px;
    `}
  >
    <TextArea
      {...props}
      label="This text input has a long label that doesn't fit in the container"
    />
  </div>
)

WithLongLabel.storyName = 'With long label'
