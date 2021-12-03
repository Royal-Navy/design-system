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
    <SelectE
      /* eslint-disable react/no-children-prop */
      children={[
        <SelectEOption value="one">One</SelectEOption>,
        <SelectEOption value="two">Two</SelectEOption>,
        <SelectEOption value="three">Three</SelectEOption>,
        <SelectEOption value="four">Four</SelectEOption>,
      ]}
      label="Some label"
      {...args}
    />
  </div>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const WithError = Template.bind({})
WithError.args = {
  isInvalid: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'two',
}

export const WithBadges = Template.bind({})
WithBadges.args = {
  children: [
    <SelectEOption badge={100} value="one">
      One
    </SelectEOption>,
    <SelectEOption badge={110} value="two">
      Two
    </SelectEOption>,
    <SelectEOption badge={111} value="three">
      Three
    </SelectEOption>,
    <SelectEOption badge={112} value="four">
      Four
    </SelectEOption>,
  ],
}
