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

export const WithLabel: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} label="Example label" />
)

WithLabel.storyName = 'With label'

export const WithFootnote: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} label="Example label" footnote="Example footnote" />
)

WithFootnote.storyName = 'With footnote'

export const Disabled: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} label="Example label" isDisabled />
)

Disabled.storyName = 'Disabled'
