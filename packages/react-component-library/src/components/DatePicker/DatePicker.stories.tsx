import { Meta, StoryFn } from '@storybook/react'
import {
  addDays,
  endOfMonth,
  parseISO,
  startOfMonth,
  subDays,
} from 'date-fns'
import React from 'react'
import styled from 'styled-components'

import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'
import { DatePicker } from '.'

export default {
  component: DatePicker,
  title: 'Components/Date Picker',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    a11y: {
      config: {
        rules: storyAccessibilityConfig['Date Picker'],
      },
    },
  },
} as Meta<typeof DatePicker>

const StyledWrapper = styled.div`
  height: 20rem;
  width: 20rem;
`

const Template: StoryFn<typeof DatePicker> = (args) => (
  <StyledWrapper>
    <DatePicker {...args} />
  </StyledWrapper>
)

export const Default = Template.bind({})

export const WithInitialValue = Template.bind({})
WithInitialValue.storyName = 'Initial value'
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
  disabledDays: [
    // It isn't always obvious that today's date is disabled
    subDays(new Date(), 1),
    addDays(new Date(), 1),
    {
      before: startOfMonth(new Date()),
      after: endOfMonth(new Date()),
    },
  ],
}
DisabledDays.parameters = {
  docs: {
    description: {
      story:
        'Can choose dates from the current month except yesterday and tomorrow.',
    },
  },
}

export const Open = Template.bind({})
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

export const JumpToToday = Template.bind({})
JumpToToday.storyName = 'Jump to today'
JumpToToday.args = {
  jumpToToday: true,
}

export const NavigateMonthYear = Template.bind({})
NavigateMonthYear.storyName = 'Navigate Months and Years'
NavigateMonthYear.args = {
  navigateMonthYear: true,
}
