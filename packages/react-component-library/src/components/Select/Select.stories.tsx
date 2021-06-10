import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IconAnchor } from '@royalnavy/icon-library'

import { Select, SelectProps } from './index'

const options = [
  { value: 'chocolate', label: 'Chocolate', badge: 100 },
  { value: 'melon', label: 'Melon' },
  { value: 'strawberry', label: 'Strawberry' },
]

export default {
  component: Select,
  title: 'Select',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component wraps a popular open-source library. See comprehensive documentation [here](https://github.com/JedWatson/react-select#readme).',
      },
    },
  },
} as Meta

export const Default: Story<SelectProps> = (props) => (
  <div style={{ height: '10rem' }}>
    <Select {...props} />
  </div>
)

Default.args = {
  options,
  label: 'Example label',
  name: 'select-default',
  defaultMenuIsOpen: true,
}

export const Disabled: Story<SelectProps> = (props) => (
  <Select
    {...props}
    options={options}
    label="Example label"
    name="select-disabled"
    isDisabled
  />
)

Disabled.storyName = 'Disabled'

export const NotClearable: Story<SelectProps> = (props) => (
  <Select
    {...props}
    options={options}
    label="Example label"
    name="select-disabled"
    isClearable={false}
  />
)

NotClearable.storyName = 'Not clearable'

export const WithIcons: Story<SelectProps> = (props) => {
  const iconOptions = options.map((option) => ({
    ...option,
    icon: <IconAnchor />,
  }))

  return (
    <div style={{ height: '10rem' }}>
      <Select
        {...props}
        options={iconOptions}
        label="Example label"
        name="select-icons"
      />
    </div>
  )
}

WithIcons.storyName = 'With icons'
