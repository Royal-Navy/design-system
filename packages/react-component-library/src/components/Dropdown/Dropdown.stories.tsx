import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { IconLayers, IconAnchor } from '@defencedigital/icon-library'

import { Dropdown } from './Dropdown'

export default {
  component: Dropdown,
  title: 'Dropdown',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component wraps a popular open-source library. See comprehensive documentation [here](https://github.com/JedWatson/react-select#readme).',
      },
    },
  },
} as ComponentMeta<typeof Dropdown>

const options = [
  { value: 'option', label: 'Option' },
  { value: 'visible', label: 'Visible', isVisible: true },
  { value: 'hidden', label: 'Hidden', isHidden: true },
  { value: 'disabled', label: 'Disabled', isDisabled: true },
]

export const Default: ComponentStory<typeof Dropdown> = (props) => {
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

const iconOptions = options.map((option) => ({
  ...option,
  icon: <IconAnchor />,
}))

export const WithIcons: ComponentStory<typeof Dropdown> = (props) => (
  <div style={{ height: '15rem' }}>
    <Dropdown
      {...props}
      options={iconOptions}
      label="Example label"
      labelIcon={<IconLayers />}
      onSelect={action('onSelect')}
    />
  </div>
)

WithIcons.storyName = 'With icons'
