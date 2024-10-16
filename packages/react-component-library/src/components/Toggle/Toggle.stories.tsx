import React, { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { IconCheck, IconClose } from '@royalnavy/icon-library'
import { Toggle, ToggleProps } from './Toggle'

export default {
  title: 'Experimental/Toggle',
  component: Toggle,
} as Meta

const Template: StoryFn<ToggleProps> = (args) => {
  const [checked, setChecked] = useState(args.defaultChecked)

  return <Toggle {...args} defaultChecked={checked} onChange={setChecked} />
}

export const Default = Template.bind({})
Default.args = {
  defaultChecked: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultChecked: false,
  isDisabled: true,
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  defaultChecked: false,
  OnIcon: IconCheck,
  OffIcon: IconClose,
}
