import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import {
  IconAnchor,
  IconBrightnessHigh,
  IconWeb,
  IconWifi,
} from '@royalnavy/icon-library'
import { COMPONENT_SIZE } from '../Forms'
import { NumberInput } from './NumberInput'

export default {
  argTypes: {
    icon: {
      type: 'select',
      options: ['None', 'Wifi', 'Web', 'Anchor'],
      mapping: {
        None: null,
        Wifi: <IconWifi />,
        Web: <IconWeb />,
        Anchor: <IconAnchor />,
      },
    },
    footnote: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    max: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: Object.values(COMPONENT_SIZE),
    },
    step: {
      control: 'number',
    },
  },
  component: NumberInput,
  title: 'Components/Number Input',
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

export const Footnote = Template.bind({})
Footnote.args = {
  footnote: 'Footnote',
}

export const Label = Template.bind({})
Label.args = {
  label: 'Label',
}

export const Icon = Template.bind({})
Icon.args = {
  icon: <IconBrightnessHigh />,
}

export const Prefix = Template.bind({})
Prefix.args = {
  prefix: String.fromCharCode(163),
  value: 1000,
}

export const Suffix = Template.bind({})
Suffix.args = {
  suffix: `m${String.fromCharCode(179)}`,
  value: 1000,
}

export const Error = Template.bind({})
Error.args = {
  isInvalid: true,
}
