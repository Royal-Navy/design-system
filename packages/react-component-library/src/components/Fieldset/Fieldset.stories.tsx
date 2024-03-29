import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Fieldset } from './index'
import { Field } from '../Field'
import { TextInput } from '../TextInput'

export default {
  component: Fieldset,
  title: 'Forms/Fieldset',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<typeof Fieldset>

const Template: StoryFn<typeof Fieldset> = (args) => (
  <Fieldset {...args}>
    <Field>
      <TextInput label="Address line 1" name="address1" />
    </Field>
    <Field>
      <TextInput label="Address line 2" name="address2" />
    </Field>
    <Field>
      <TextInput label="City" name="city" />
    </Field>
  </Fieldset>
)

export const Default = Template.bind({})
Default.args = {
  legend: 'Example legend',
}

const TemplateHorizontal: StoryFn<typeof Fieldset> = (_) => (
  <>
    <Fieldset legend="Home address">
      <Field>
        <TextInput label="Address line 1" name="address1" />
      </Field>
      <Field>
        <TextInput label="Address line 2" name="address2" />
      </Field>
      <Field>
        <TextInput label="City" name="city" />
      </Field>
    </Fieldset>
    <Fieldset legend="Work address">
      <Field>
        <TextInput label="Address line 1" name="address1" />
      </Field>
      <Field>
        <TextInput label="Address line 2" name="address2" />
      </Field>
      <Field>
        <TextInput label="City" name="city" />
      </Field>
    </Fieldset>
  </>
)

export const Horizontal = TemplateHorizontal.bind({})

const TemplateVertical: StoryFn<typeof Fieldset> = (_) => (
  <>
    <Fieldset type="block" legend="Home address">
      <Field>
        <TextInput label="Address line 1" name="address1" />
      </Field>
      <Field>
        <TextInput label="Address line 2" name="address2" />
      </Field>
      <Field>
        <TextInput label="City" name="city" />
      </Field>
    </Fieldset>
    <Fieldset type="block" legend="Work address">
      <Field>
        <TextInput label="Address line 1" name="address1" />
      </Field>
      <Field>
        <TextInput label="Address line 2" name="address2" />
      </Field>
      <Field>
        <TextInput label="City" name="city" />
      </Field>
    </Fieldset>
  </>
)

export const Vertical = TemplateVertical.bind({})
