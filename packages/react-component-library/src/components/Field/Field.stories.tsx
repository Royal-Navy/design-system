import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Field } from './index'
import { TextInputE } from '../TextInputE'

export default {
  component: Field,
  title: 'Forms/Field',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Field>

const Template: ComponentStory<typeof Field> = (args) => (
  <Field {...args}>
    <TextInputE label="Example text input" name="example" />
  </Field>
)

export const Default = Template.bind({})
Default.args = {
  hintText: 'Example hint text.',
  errors: [{ error: 'Required' }],
}
