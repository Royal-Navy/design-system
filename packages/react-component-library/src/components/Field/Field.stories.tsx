import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Field } from './index'
import { TextInput } from '../TextInput'

export default {
  component: Field,
  title: 'Forms/Field',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<typeof Field>

const Template: StoryFn<typeof Field> = (args) => (
  <Field {...args}>
    <TextInput label="Example text input" name="example" />
  </Field>
)

export const Default = Template.bind({})
Default.args = {
  hintText: 'Example hint text.',
  errors: [{ error: 'Required' }],
}
