import { ComponentMeta, ComponentStory } from '@storybook/react'
import { parseISO } from 'date-fns'
import React from 'react'

import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'
import { DatePicker } from '.'

export default {
  component: DatePicker,
  title: 'Date Picker',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    a11y: {
      config: {
        rules: storyAccessibilityConfig['Date Picker'],
      },
    },
  },
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
)

export const Default = Template.bind({})

export const WithInitialValue = Template.bind({})
WithInitialValue.storyName = 'With initial value'
WithInitialValue.args = {
  initialStartDate: parseISO('2021-12-15'),
}

export const CustomFormat = Template.bind({})
CustomFormat.storyName = 'Custom format'
CustomFormat.args = {
  format: 'yyyy/MM/dd',
  initialStartDate: parseISO('2021-01-11'),
}

export const CustomInitialMonth = Template.bind({})
CustomInitialMonth.storyName = 'Custom initial month'
CustomInitialMonth.args = {
  initialMonth: parseISO('2021-01-01'),
}

export const CustomLabel = Template.bind({})
CustomLabel.storyName = 'Custom label'
CustomLabel.args = {
  label: 'Custom label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const DisabledDays = Template.bind({})
DisabledDays.storyName = 'Disabled days'
DisabledDays.args = {
  initialStartDate: parseISO('2021-04-01'),
  disabledDays: [
    parseISO('2021-04-12'),
    parseISO('2021-04-02'),
    {
      after: parseISO('2021-03-20'),
      before: parseISO('2021-03-25'),
    },
  ],
}

export const Open = Template.bind({})
Open.storyName = 'Open'
Open.args = {
  initialIsOpen: true,
  initialMonth: parseISO('2022-06-01'),
  today: parseISO('2022-06-15'),
}

export const Range = Template.bind({})
Range.args = {
  isRange: true,
}

export const RangeWithInitialValue = Template.bind({})
RangeWithInitialValue.storyName = 'Range, with initial values'
RangeWithInitialValue.args = {
  isRange: true,
  initialStartDate: parseISO('2021-12-05'),
  initialEndDate: parseISO('2021-12-15'),
}
