import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { Button } from '../Button'
import { TextArea, TextAreaInputProps } from '.'

import { withFormik } from '../../enhancers/withFormik'

export default {
  component: TextArea,
  title: 'Text Area',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<TextAreaInputProps> = (props) => (
  <TextArea {...props} />
)

Default.args = {
  name: 'textarea-default',
}

export const WithLabel: Story<TextAreaInputProps> = (props) => (
  <TextArea {...props} label="Example label" />
)

WithLabel.storyName = 'With label'

export const WithFootnote: Story<TextAreaInputProps> = (props) => (
  <TextArea {...props} label="Example label" footnote="Example footnote" />
)

WithFootnote.storyName = 'With footnote'

export const Disabled: Story<TextAreaInputProps> = (props) => (
  <TextArea {...props} label="Example label" isDisabled />
)

Disabled.storyName = 'Disabled'

export const WithFormik: Story<TextAreaInputProps> = (props) => {
  interface Data {
    'textarea-formik': string
  }

  const initialValues: Data = {
    'textarea-formik': '',
  }

  const validationSchema = yup.object().shape({
    'textarea-formik': yup.string().required('Something went wrong!'),
  })

  const FormikTextArea = withFormik(TextArea)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action('onSubmit')}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          name="textarea-formik"
          component={FormikTextArea}
          label="Example label"
        />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  )
}

WithFormik.storyName = 'Formik'
