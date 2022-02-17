import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { RADIO_VARIANT, RadioE, RadioEProps } from '.'

export default {
  component: RadioE,
  title: 'Radio (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof RadioE>

const Template: ComponentStory<typeof RadioE> = (props) => <RadioE {...props} />

const MultipleItemsTemplate: ComponentStory<typeof RadioE> = (props) => {
  function getProps(i: number): RadioEProps {
    return {
      ...props,
      label: `${props.label} ${i}`,
    }
  }

  return (
    <>
      <RadioE {...getProps(1)} />
      <RadioE {...getProps(2)} />
      <RadioE {...getProps(3)} />
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
  variant: RADIO_VARIANT.NO_CONTAINER,
}

export const WithDescription = Template.bind({})
WithDescription.args = {
  id: undefined,
  description:
    'She must have hidden the plans in the escape pod. Send a detachment down to retrieve them.',
  label: 'With description',
  name: 'with-description',
}
