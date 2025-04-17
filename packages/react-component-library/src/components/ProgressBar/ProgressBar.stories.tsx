import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { ProgressBar } from '.'

import { getSpacings } from '../../tokens/utils'

export default {
  component: ProgressBar,
  title: 'Components/Progress Bar',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    size: {
      options: [...getSpacings()],
      control: { type: 'select' },
    },
  },
} as Meta<typeof ProgressBar>

const Template: StoryFn<typeof ProgressBar> = (props) => (
  <ProgressBar {...props} />
)

export const Default = Template.bind({})

Default.args = {
  value: 45,
}

export const WithPercentageText = Template.bind({})
WithPercentageText.args = {
  value: 75,
  showPercentage: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
  showPercentage: true,
  value: 75,
}
