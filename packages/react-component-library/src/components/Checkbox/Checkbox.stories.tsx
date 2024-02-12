import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from '.'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'

export default {
  argTypes: {
    description: {
      control: false,
    },
  },
  component: Checkbox,
  title: 'Checkbox',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (props) => <Checkbox {...props} />

const MultipleItemsTemplate: StoryFn<typeof Checkbox> = (props) => {
  function getProps(i: number): CheckboxProps {
    return {
      ...props,
      variant: CHECKBOX_RADIO_VARIANT.NO_CONTAINER,
      label: `${props.label} ${i}`,
      name: `${props.name}-${i}`,
    }
  }

  return (
    <>
      <Checkbox {...getProps(1)} />
      <Checkbox {...getProps(2)} />
      <Checkbox defaultChecked {...getProps(3)} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  id: undefined,
  label: 'Default checkbox',
  name: 'default',
}

export const Checked = Template.bind({})
Checked.args = {
  id: undefined,
  defaultChecked: true,
  label: 'Checked',
  name: 'checked',
}

export const DisabledUnchecked = Template.bind({})
DisabledUnchecked.storyName = 'Disabled, unchecked'
DisabledUnchecked.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled, unchecked',
  name: 'disabled',
}

export const DisabledChecked = Template.bind({})
DisabledChecked.storyName = 'Disabled, checked'
DisabledChecked.args = {
  id: undefined,
  defaultChecked: true,
  isDisabled: true,
  label: 'Disabled, checked',
  name: 'disabled',
}

export const Invalid = Template.bind({})
Invalid.args = {
  id: undefined,
  label: 'Invalid checkbox',
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
  label: 'Item without container',
  name: 'no-container',
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
