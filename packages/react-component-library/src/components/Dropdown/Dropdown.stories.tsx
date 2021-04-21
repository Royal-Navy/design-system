import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { IconLayers, IconAnchor } from '@royalnavy/icon-library'

import { Dropdown, DropdownProps } from './Dropdown'

export default {
  component: Dropdown,
  title: 'Dropdown',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const options = [
  { value: 'option', label: 'Option' },
  { value: 'visible', label: 'Visible', isVisible: true },
  { value: 'hidden', label: 'Hidden', isHidden: true },
  { value: 'disabled', label: 'Disabled', isDisabled: true },
]

export const Default: Story<DropdownProps> = (props) => {
  return (
    <div style={{ height: '15rem' }}>
      <Dropdown {...props} />
    </div>
  )
}

Default.args = {
  options,
  label: 'Example label',
}

export const WithIcons: Story<DropdownProps> = () => {
  const iconOptions = options.map((option) => ({
    ...option,
    icon: <IconAnchor />,
  }))

  return (
    <div style={{ height: '15rem' }}>
      <Dropdown
        options={iconOptions}
        label="Example label"
        labelIcon={<IconLayers />}
        onSelect={action('onSelect')}
      />
    </div>
  )
}

WithIcons.storyName = 'With icons'
