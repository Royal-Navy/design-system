import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { IconBrightnessHigh } from '@royalnavy/icon-library'

import { COMPONENT_SIZE } from '../Forms'
import { NumberInput } from './NumberInput'

export default {
  argTypes: {
    icon: {
      control: false,
    },
  },
  component: NumberInput,
  title: 'Number Input',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component leverages a [custom `Decimal` type](https://github.com/MikeMcl/decimal.js) for handling floating point arithmetic.',
      },
    },
  },
} as Meta<typeof NumberInput>

const Template: StoryFn<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
)

export const Default = Template.bind({})

export const SteppedFloats = Template.bind({})
SteppedFloats.args = {
  step: 0.25,
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: 'Example placeholder',
}

export const Small = Template.bind({})
Small.args = {
  size: COMPONENT_SIZE.SMALL,
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const WithFootnote = Template.bind({})
WithFootnote.args = {
  footnote: 'Footnote',
}

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: <IconBrightnessHigh />,
}

export const WithPrefix = Template.bind({})
WithPrefix.args = {
  prefix: String.fromCharCode(163),
  value: 1000,
}

export const WithSuffix = Template.bind({})
WithSuffix.args = {
  suffix: `m${String.fromCharCode(179)}`,
  value: 1000,
}

export const WithError = Template.bind({})
WithError.args = {
  isInvalid: true,
}
