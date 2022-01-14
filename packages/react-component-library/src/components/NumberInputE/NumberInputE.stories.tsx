import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconBrightnessHigh } from '@defencedigital/icon-library'

import { COMPONENT_SIZE } from '../Forms'
import { NumberInputE } from './NumberInputE'

export default {
  component: NumberInputE,
  title: 'Number Input (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component leverages a [custom `Decimal` type](https://github.com/MikeMcl/decimal.js) for handling floating point arithmetic.',
      },
    },
  },
} as ComponentMeta<typeof NumberInputE>

const Template: ComponentStory<typeof NumberInputE> = (args) => (
  <NumberInputE {...args} />
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
