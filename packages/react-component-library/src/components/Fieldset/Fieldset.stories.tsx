import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Fieldset } from './index'
import { Field } from '../Field'
import { TextInputE } from '../TextInputE'

export default {
  component: Fieldset,
  title: 'Forms/Fieldset',
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Fieldset>

const Template: ComponentStory<typeof Fieldset> = (args) => (
  <Fieldset {...args}>
    <Field>
      <TextInputE label="Address line 1" name="address1" />
    </Field>
    <Field>
      <TextInputE label="Address line 2" name="address2" />
    </Field>
    <Field>
      <TextInputE label="City" name="city" />
    </Field>
  </Fieldset>
)

export const Default = Template.bind({})
Default.args = {
  legend: 'Example legend',
}

const TemplateHorizontal: ComponentStory<typeof Fieldset> = (_) => (
  <>
    <Fieldset legend="Home address">
      <Field>
        <TextInputE label="Address line 1" name="address1" />
      </Field>
      <Field>
        <TextInputE label="Address line 2" name="address2" />
      </Field>
      <Field>
        <TextInputE label="City" name="city" />
      </Field>
    </Fieldset>
    <Fieldset legend="Work address">
      <Field>
        <TextInputE label="Address line 1" name="address1" />
      </Field>
      <Field>
        <TextInputE label="Address line 2" name="address2" />
      </Field>
      <Field>
        <TextInputE label="City" name="city" />
      </Field>
    </Fieldset>
  </>
)

export const Horizontal = TemplateHorizontal.bind({})

const TemplateVertical: ComponentStory<typeof Fieldset> = (_) => (
  <>
    <Fieldset type="block" legend="Home address">
      <Field>
        <TextInputE label="Address line 1" name="address1" />
      </Field>
      <Field>
        <TextInputE label="Address line 2" name="address2" />
      </Field>
      <Field>
        <TextInputE label="City" name="city" />
      </Field>
    </Fieldset>
    <Fieldset type="block" legend="Work address">
      <Field>
        <TextInputE label="Address line 1" name="address1" />
      </Field>
      <Field>
        <TextInputE label="Address line 2" name="address2" />
      </Field>
      <Field>
        <TextInputE label="City" name="city" />
      </Field>
    </Fieldset>
  </>
)

export const Vertical = TemplateVertical.bind({})
