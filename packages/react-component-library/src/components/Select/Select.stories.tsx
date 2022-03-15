import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
  IconAgriculture,
  IconAnchor,
  IconBrightnessAuto,
  IconRemove,
} from '@defencedigital/icon-library'

import { Select } from './index'
import { SelectOption } from './SelectOption'

export default {
  component: Select,
  title: 'Select',
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
  args: {
    label: 'Some label',
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => (
  <div
    style={{ height: args.isDisabled ? 'initial' : '18rem', maxWidth: '20rem' }}
  >
    <Select {...args}>
      <SelectOption value="one">
        This is a really, really long select option label that overflows the
        container when selected
      </SelectOption>
      <SelectOption value="two">Two</SelectOption>
      <SelectOption value="three">Three</SelectOption>
      <SelectOption value="four">Four</SelectOption>
    </Select>
  </div>
)

const TemplateWithIconsAndBadges: ComponentStory<typeof Select> = (args) => (
  <div
    style={{ height: args.isDisabled ? 'initial' : '18rem', maxWidth: '20rem' }}
  >
    <Select {...args}>
      <SelectOption badge={100} icon={<IconAnchor />} value="one">
        One
      </SelectOption>
      <SelectOption badge={110} icon={<IconRemove />} value="two">
        Two
      </SelectOption>
      <SelectOption badge={111} icon={<IconAgriculture />} value="three">
        Three
      </SelectOption>
      <SelectOption badge={112} icon={<IconBrightnessAuto />} value="four">
        Four
      </SelectOption>
    </Select>
  </div>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const NoClearButton = Template.bind({})
NoClearButton.args = {
  hideClearButton: true,
  value: 'two',
}

export const WithError = Template.bind({})
WithError.args = {
  isInvalid: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'two',
}

export const WithIconsAndBadges = TemplateWithIconsAndBadges.bind({})
