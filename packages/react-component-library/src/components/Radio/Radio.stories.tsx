import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Radio, RadioProps } from '.'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'

export default {
  component: Radio,
  title: 'Radio',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (props) => <Radio {...props} />

const MultipleItemsTemplate: ComponentStory<typeof Radio> = (props) => {
  function getProps(i: number): RadioProps {
    return {
      ...props,
      label: `${props.label} ${i}`,
    }
  }

  return (
    <>
      <Radio {...getProps(1)} />
      <Radio {...getProps(2)} />
      <Radio {...getProps(3)} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: undefined,
  label: 'Default radio',
  name: 'default',
}

export const Checked = Template.bind({})
Checked.args = {
  id: undefined,
  defaultChecked: true,
  label: 'Checked radio',
  name: 'checked',
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled radio',
  name: 'disabled',
}

export const DisabledChecked = Template.bind({})
DisabledChecked.storyName = 'Disabled, checked'
DisabledChecked.args = {
  id: undefined,
  isDisabled: true,
  defaultChecked: true,
  label: 'Disabled, checked radio',
  name: 'disabled-checked',
}

export const Invalid = Template.bind({})
Invalid.args = {
  id: undefined,
  label: 'Invalid radio',
  name: 'invalid',
  isInvalid: true,
}

export const NoContainer = MultipleItemsTemplate.bind({})
NoContainer.args = {
  id: undefined,
  label: 'Item without container',
  name: 'no-container',
  variant: CHECKBOX_RADIO_VARIANT.NO_CONTAINER,
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  id: undefined,
  description:
    'She must have hidden the plans in the escape pod. Send a detachment down to retrieve them.',
  label: 'With description',
  name: 'with-description',
}
