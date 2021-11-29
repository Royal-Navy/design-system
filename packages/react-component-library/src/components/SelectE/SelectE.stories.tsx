import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { SelectE, SelectEProps } from './index'
import { SelectEOption } from './SelectEOption'

export default {
  component: SelectE,
  title: 'Select (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component wraps a popular open-source library. See comprehensive documentation [here](https://www.downshift-js.com/downshift/).',
      },
    },
  },
} as Meta

const Template: Story<SelectEProps> = (args) => (
  <div style={{ height: args.isDisabled ? 'initial' : '18rem' }}>
    <SelectE label="Some label" {...args}>
      <SelectEOption value="one">One</SelectEOption>
      <SelectEOption value="two">Two</SelectEOption>
      <SelectEOption value="three">Three</SelectEOption>
      <SelectEOption value="four">Four</SelectEOption>
    </SelectE>
  </div>
)

export const Default = Template.bind({})
