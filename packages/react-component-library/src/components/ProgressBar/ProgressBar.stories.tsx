import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import { ProgressBar } from '.'

export default {
  component: ProgressBar,
  title: 'Components/Progress Bar',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    size: {
      options: ['2', '4', '8'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof ProgressBar>

const Template: StoryFn<typeof ProgressBar> = (props) => <ProgressBar {...props} />

export const Default = Template.bind({})

Default.args = {
  value: 45,
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
  value: 75
}
