import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IconBrightnessHigh } from '@defencedigital/icon-library'

import { COMPONENT_SIZE } from '../Forms'
import { NumberInputE, NumberInputEProps } from './NumberInputE'

export default {
  component: NumberInputE,
  title: 'Number Input (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const Template: Story<NumberInputEProps> = (args) => <NumberInputE {...args} />

export const Default = Template.bind({})

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
