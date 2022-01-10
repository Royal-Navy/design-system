import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
  IconAgriculture,
  IconAnchor,
  IconBrightnessAuto,
  IconRemove,
} from '@defencedigital/icon-library'

import { SelectBaseProps } from '../SelectBase'
import { SelectE } from './index'
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
    options: {
      enableShortcuts: false,
    },
  },
} as Meta

const Template: Story<SelectBaseProps> = (args) => (
  <div style={{ height: args.isDisabled ? 'initial' : '18rem' }}>
    <SelectE label="Some label" {...args}>
      <SelectEOption value="one">One</SelectEOption>
      <SelectEOption value="two">Two</SelectEOption>
      <SelectEOption value="three">Three</SelectEOption>
      <SelectEOption value="four">Four</SelectEOption>
    </SelectE>
  </div>
)

const TemplateWIthIconsAndBadges: Story<SelectBaseProps> = (args) => (
  <div style={{ height: args.isDisabled ? 'initial' : '18rem' }}>
    <SelectE label="Some label" {...args}>
      <SelectEOption badge={100} icon={<IconAnchor />} value="one">
        One
      </SelectEOption>
      <SelectEOption badge={110} icon={<IconRemove />} value="two">
        Two
      </SelectEOption>
      <SelectEOption badge={111} icon={<IconAgriculture />} value="three">
        Three
      </SelectEOption>
      <SelectEOption badge={112} icon={<IconBrightnessAuto />} value="four">
        Four
      </SelectEOption>
    </SelectE>
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

export const WithIconsAndBadges = TemplateWIthIconsAndBadges.bind({})
