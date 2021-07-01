import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { IconSearch } from '@royalnavy/icon-library'
import { Button } from '../Button'
import { TextInput, TextInputProps } from '.'

import { withFormik } from '../../enhancers/withFormik'

export default {
  component: TextInput,
  title: 'Text Input',
  argTypes: { onBlur: { action: 'onBlur' } },
} as Meta

export const Default: Story<TextInputProps> = (props) => (
  <TextInput {...props} />
)

Default.args = {
  name: 'text-input-default',
  label: 'Example label',
}

export const WithLabel: Story<TextInputProps> = (props) => (
  <TextInput {...props} name="text-input-label" label="Example label" />
)

WithLabel.storyName = 'With label'

export const Disabled: Story<TextInputProps> = (props) => (
  <TextInput
    {...props}
    name="text-input-disabled"
    label="Example label"
    isDisabled
  />
)

Disabled.storyName = 'Disabled'

export const WithStartAdornment: Story<TextInputProps> = (props) => (
  <TextInput
    {...props}
    name="text-input-start-adornment"
    label="Example label"
    startAdornment={<IconSearch />}
  />
)

WithStartAdornment.storyName = 'With start adornment'

export const WithEndAdornment: Story<TextInputProps> = (props) => (
  <TextInput
    {...props}
    name="text-input-end-adornment"
    label="Example label"
    endAdornment={<IconSearch />}
  />
)

WithEndAdornment.storyName = 'With end adornment'

export const WithFormik: Story<TextInputProps> = (props) => {
  interface Data {
    'text-input-formik': string
  }

  const initialValues: Data = {
    'text-input-formik': '',
  }

  const validationSchema = yup.object().shape({
    'text-input-formik': yup.string().required('Something went wrong!'),
  })

  const FormikTextInput = withFormik(TextInput)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={action('onSubmit')}
    >
      <Form>
        <Field
          name="text-input-formik"
          label="Example label"
          component={FormikTextInput}
        />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  )
}

WithFormik.storyName = 'Formik'
