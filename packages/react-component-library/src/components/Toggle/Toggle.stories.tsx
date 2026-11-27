import React from 'react'
import { StoryFn, Meta } from '@storybook/react-webpack5'

import { Toggle } from '.'
import { COMPONENT_SIZE } from '../Forms'
import { Field } from '../Field'

export default {
  component: Toggle,
  title: 'Components/Toggle',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(COMPONENT_SIZE),
    },
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof Toggle>

const Template: StoryFn<typeof Toggle> = (props) => <Toggle {...props} />

export const Default = Template.bind({})
Default.args = {
  label: 'Default toggle',
  name: 'toggle-default',
}

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
  label: 'Checked',
  name: 'toggle-checked',
}

export const Controlled: StoryFn<typeof Toggle> = () => {
  const [isOn, setIsOn] = React.useState(false)

  return (
    <Toggle
      checked={isOn}
      label="Notifications"
      name="toggle-controlled"
      onChange={(e) => setIsOn(e.currentTarget.checked)}
    />
  )
}

export const DisabledUnchecked = Template.bind({})
DisabledUnchecked.storyName = 'Disabled, unchecked'
DisabledUnchecked.args = {
  isDisabled: true,
  label: 'Disabled, unchecked',
  name: 'toggle-disabled',
}

export const DisabledChecked = Template.bind({})
DisabledChecked.storyName = 'Disabled, checked'
DisabledChecked.args = {
  defaultChecked: true,
  isDisabled: true,
  label: 'Disabled, checked',
  name: 'toggle-disabled-checked',
}

export const Invalid = Template.bind({})
Invalid.args = {
  isInvalid: true,
  label: 'Invalid toggle',
  name: 'toggle-invalid',
}

export const Small = Template.bind({})
Small.args = {
  label: 'Small toggle',
  name: 'toggle-small',
  size: COMPONENT_SIZE.SMALL,
}

export const NoLabel = Template.bind({})
NoLabel.storyName = 'No label'
NoLabel.args = {
  'aria-label': 'No label',
  name: 'toggle-no-label',
}

export const WithField: StoryFn<typeof Toggle> = () => (
  <Field hintText="Example hint text." errors={[{ error: 'Required' }]}>
    <Toggle label="Toggle in a field" name="toggle-field" />
  </Field>
)
WithField.storyName = 'Field'
