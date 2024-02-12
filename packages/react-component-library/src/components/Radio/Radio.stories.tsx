import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Radio, RadioProps } from '.'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'

export default {
  argTypes: {
    description: {
      control: false,
    },
  },
  component: Radio,
  title: 'Radio',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof Radio>

const Template: StoryFn<typeof Radio> = (props) => <Radio {...props} />

const MultipleItemsTemplate: StoryFn<typeof Radio> = (props) => {
  function getProps(i: number): RadioProps {
    return {
      ...props,
      variant: CHECKBOX_RADIO_VARIANT.NO_CONTAINER,
      label: `${props.label} ${i}`,
    }
  }

  return (
    <>
      <Radio {...getProps(1)} />
      <Radio {...getProps(2)} />
      <Radio defaultChecked {...getProps(3)} />
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
  checked: true,
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
  checked: true,
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
NoContainer.storyName = 'No container'
NoContainer.args = {
  id: undefined,
  label: 'Item without container',
  name: 'no-container',
}

export const NoContainerDisabled = MultipleItemsTemplate.bind({})
NoContainerDisabled.storyName = 'No container, disabled'
NoContainerDisabled.args = {
  id: undefined,
  label: 'Disabled item without container',
  name: 'no-container-disabled',
  isDisabled: true,
}

export const WithDescription = Template.bind({})
WithDescription.storyName = 'With description'
WithDescription.args = {
  id: undefined,
  description:
    'She must have hidden the plans in the escape pod. Send a detachment down to retrieve them.',
  label: 'With description',
  name: 'with-description',
}
