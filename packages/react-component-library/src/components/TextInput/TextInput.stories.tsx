import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { IconSearch } from '@royalnavy/icon-library'
import { Button } from '../Button'
import { TextInput } from '.'

import { withFormik } from '../../enhancers/withFormik'

export default { component: TextInput, title: 'Text Input' } as Meta

export const Default = (props: any) => <TextInput {...props} />

Default.args = {
  name: 'text-input-default',
}

export const WithLabel = () => (
  <TextInput name="text-input-label" label="Example label" />
)

WithLabel.storyName = 'With label'

export const Disabled = () => (
  <TextInput name="text-input-disabled" label="Example label" isDisabled />
)

Disabled.storyName = 'Disabled'

export const WithStartAdornment = () => (
  <TextInput
    name="text-input-start-adornment"
    label="Example label"
    startAdornment={<IconSearch />}
  />
)

WithStartAdornment.storyName = 'With start adornment'

export const WithEndAdornment = () => (
  <TextInput
    name="text-input-end-adornment"
    label="Example label"
    endAdornment={<IconSearch />}
  />
)

WithEndAdornment.storyName = 'With end adornment'

export const WithFormik = () => {
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
      onSubmit={console.log}
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
