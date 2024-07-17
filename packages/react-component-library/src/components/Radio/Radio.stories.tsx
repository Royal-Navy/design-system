import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { color } from '@royalnavy/design-tokens'
import { Radio, RadioProps } from '.'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'

export default {
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(CHECKBOX_RADIO_VARIANT),
    },
    isInvalid: { control: 'boolean' },
    description: {
      control: 'select',
      options: ['None', 'Plain text', 'Rich text'],
      mapping: {
        None: null,
        'Plain text':
          'She must have hidden the plans in the escape pod. Send a detachment down to retrieve them.',
        // prettier-ignore
        'Rich text': (
          <div>
            Marked up content with <strong>bold typefaces</strong>, <i>italics</i> and <span
            style={{ color: color('action', '400') }}>colour</span>
          </div>
        ),
      },
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  component: Radio,
  title: 'Components/Radio',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof Radio>

const Template: StoryFn<typeof Radio> = (props) => <Radio {...props} />

const MultipleItemsTemplate: StoryFn<typeof Radio> = (props) => {
  function getProps(i: number): RadioProps {
    return {
      variant: CHECKBOX_RADIO_VARIANT.NO_CONTAINER,
      ...props,
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
WithDescription.storyName = 'Description'
WithDescription.args = {
  id: undefined,
  description:
    'She must have hidden the plans in the escape pod. Send a detachment down to retrieve them.',
  label: 'Description',
  name: 'with-description',
}
