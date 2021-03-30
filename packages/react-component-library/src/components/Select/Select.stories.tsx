import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { IconAnchor } from '@royalnavy/icon-library'

import { Select } from './index'

const options = [
  { value: 'chocolate', label: 'Chocolate', badge: 100 },
  { value: 'melon', label: 'Melon' },
  { value: 'strawberry', label: 'Strawberry' },
]

export default { component: Select, title: 'Select' } as Meta

export const Default = (props: any) => (
  <div style={{ height: '10rem' }}>
    <Select {...props} />
  </div>
)

Default.args = {
  options,
  label: 'Example label',
  onChange: (e: React.SyntheticEvent) => console.log,
  name: 'select-default',
  defaultMenuIsOpen: true,
}

export const Disabled = () => (
  <Select
    options={options}
    label="Example label"
    name="select-disabled"
    onChange={(e: React.SyntheticEvent) => console.log}
    isDisabled
  />
)

Disabled.storyName = 'Disabled'

export const WithIcons = () => {
  const iconOptions = options.map((option) => ({
    ...option,
    icon: <IconAnchor />,
  }))

  return (
    <div style={{ height: '10rem' }}>
      <Select
        options={iconOptions}
        label="Example label"
        name="select-icons"
        onChange={(e: React.SyntheticEvent) => console.log}
      />
    </div>
  )
}

WithIcons.storyName = 'With icons'
