import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { TextArea } from '.'

export default {
  component: TextArea,
  title: 'Components/Text Area',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof TextArea>

export const Default: StoryFn<typeof TextArea> = (props) => (
  <TextArea {...props} />
)

Default.args = {
  name: 'textarea-default',
  label: 'Example label',
}

export const Disabled: StoryFn<typeof TextArea> = (props) => (
  <TextArea {...props} isDisabled label="Example label" />
)

export const WithError: StoryFn<typeof TextArea> = (props) => (
  <TextArea {...props} isInvalid label="Example label" />
)

WithError.storyName = 'Error'

export const WithLongLabel: StoryFn<typeof TextArea> = (props) => (
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

WithLongLabel.storyName = 'Long label'
