import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { IconLayers, IconAnchor } from '@royalnavy/icon-library'
import styled from 'styled-components'

import { Dropdown } from './Dropdown'

export default {
  argTypes: {
    labelIcon: {
      control: false,
    },
  },
  component: Dropdown,
  title: 'Deprecated/Dropdown',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component wraps a popular open-source library. See comprehensive documentation [here](https://github.com/JedWatson/react-select#readme).',
      },
    },
  },
} as Meta<typeof Dropdown>

const options = [
  { value: 'option', label: 'Option' },
  { value: 'visible', label: 'Visible', isVisible: true },
  { value: 'hidden', label: 'Hidden', isHidden: true },
  { value: 'disabled', label: 'Disabled', isDisabled: true },
]

const StyledWrapper = styled.div`
  height: 15rem;
`

const Template: StoryFn<typeof Dropdown> = (props) => {
  return (
    <StyledWrapper>
      <Dropdown {...props} />
    </StyledWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  options,
  label: 'Example label',
}

export const Open = Template.bind({})
Open.args = {
  options,
  initialIsOpen: true,
  label: 'Example label',
}

const iconOptions = options.map((option) => ({
  ...option,
  icon: <IconAnchor />,
}))

export const WithIcons: StoryFn<typeof Dropdown> = (props) => (
  <StyledWrapper>
    <Dropdown
      {...props}
      options={iconOptions}
      label="Example label"
      labelIcon={<IconLayers />}
      onSelect={action('onSelect')}
    />
  </StyledWrapper>
)

WithIcons.storyName = 'With icons'
