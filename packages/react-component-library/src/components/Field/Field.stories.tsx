import React from 'react'
import { StoryFn, Meta } from '@storybook/react-webpack5'

import { Field } from './index'
import { TextInput } from '../TextInput'
import { TextArea } from '../TextArea'
import { NumberInput } from '../NumberInput'
import { Select, SelectOption } from '../Select'
import { DatePicker } from '../DatePicker'

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

type ReservedErrorSpaceArgs = React.ComponentProps<typeof Field> & {
  showError: boolean
}

export const ReservedErrorSpace: StoryFn<ReservedErrorSpaceArgs> = ({
  showError,
  ...args
}) => {
  const errors = showError ? [{ error: 'Required' }] : []

  return (
    <>
      <Field {...args} errors={errors}>
        <TextInput label="Text input" name="text-input" />
      </Field>
      <Field {...args} errors={errors}>
        <TextArea label="Text area" name="text-area" />
      </Field>
      <Field {...args} errors={errors}>
        <NumberInput label="Number input" name="number-input" />
      </Field>
      <Field {...args} errors={errors}>
        <Select label="Select">
          <SelectOption value="one">One</SelectOption>
          <SelectOption value="two">Two</SelectOption>
        </Select>
      </Field>
      <Field {...args} errors={errors}>
        <DatePicker label="Date picker" />
      </Field>
      <Field reserveErrorSpace={args.reserveErrorSpace}>
        <TextInput label="Field below" name="below" />
      </Field>
    </>
  )
}
ReservedErrorSpace.args = {
  hintText: 'Example hint text.',
  reserveErrorSpace: true,
  showError: false,
}
ReservedErrorSpace.argTypes = {
  errors: { table: { disable: true } },
  showError: { control: 'boolean' },
}
ReservedErrorSpace.storyName = 'Reserved error space'
