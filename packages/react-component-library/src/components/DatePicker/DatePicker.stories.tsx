import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { DatePicker } from '.'

export default {
  component: DatePicker,
  title: 'Date Picker',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-required-attr',
            enabled: false,
          },
        ],
      },
    },
  },
} as ComponentMeta<typeof DatePicker>

export const Default: ComponentStory<typeof DatePicker> = (props) => (
  <DatePicker {...props} />
)

Default.args = {
  id: undefined,
  startDate: undefined,
}

export const CustomFormat: ComponentStory<typeof DatePicker> = (props) => (
  <DatePicker
    {...props}
    format="yyyy/MM/dd"
    startDate={new Date(2021, 0, 11)}
  />
)

CustomFormat.storyName = 'Custom format'

export const CustomInitialMonth: ComponentStory<typeof DatePicker> = (
  props
) => <DatePicker {...props} initialMonth={new Date(2021, 1)} />

CustomInitialMonth.storyName = 'Custom initial month'

export const CustomLabel: ComponentStory<typeof DatePicker> = (props) => (
  <DatePicker {...props} label="Custom label" />
)

CustomLabel.storyName = 'Custom label'

export const Disabled: ComponentStory<typeof DatePicker> = (props) => (
  <DatePicker {...props} isDisabled />
)

Disabled.storyName = 'Disabled'

export const DisabledDays: ComponentStory<typeof DatePicker> = (props) => (
  <DatePicker
    {...props}
    startDate={new Date(2021, 3, 1)}
    disabledDays={[
      new Date(2021, 3, 12),
      new Date(2021, 3, 2),
      {
        after: new Date(2021, 3, 20),
        before: new Date(2021, 3, 25),
      },
    ]}
  />
)

DisabledDays.storyName = 'Disabled days'

export const Range: ComponentStory<typeof DatePicker> = (props) => (
  <DatePicker {...props} isRange />
)

Range.storyName = 'Range'
