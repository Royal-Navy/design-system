import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { color } from '@royalnavy/design-tokens'

import { Checkbox, IndeterminateCheckbox, CheckboxProps } from '.'
import { CHECKBOX_RADIO_VARIANT } from '../CheckboxRadioBase'

export default {
  argTypes: {
    checked: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: Object.values(CHECKBOX_RADIO_VARIANT),
    },
    isDisabled: {
      control: 'boolean',
    },
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
            Marked up content with <strong>bold typefaces</strong>, <i>italics</i> and <span style={{color: color('action', '400')}}>colour</span>
          </div>
        ),
      },
    },
  },
  component: Checkbox,
  title: 'Components/Checkbox',
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

export const NoLabel = Template.bind({})
NoLabel.storyName = 'No label'
NoLabel.args = {
  id: undefined,
  name: 'no-label',
  'aria-label': 'No label',
}

export const Indeterminate: StoryFn<typeof IndeterminateCheckbox> = (props) => {
  return <IndeterminateCheckbox {...props} />
}
Indeterminate.args = {
  id: undefined,
  name: 'indeterminate',
  indeterminate: true,
  'aria-label': 'Indeterminate',
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
