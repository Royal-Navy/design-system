import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { Button } from '../Button'
import { TextArea } from '.'

import { withFormik } from '../../enhancers/withFormik'

export default { component: TextArea, title: 'Text Area' } as Meta

export const Default = (props: any) => <TextArea {...props} />

Default.args = {
  name: 'textarea-default',
}

export const WithLabel = () => <TextArea label="Example label" />

WithLabel.storyName = 'With label'

export const WithFootnote = () => (
  <TextArea label="Example label" footnote="Example footnote" />
)

WithFootnote.storyName = 'With footnote'

export const Disabled = () => <TextArea label="Example label" isDisabled />

Disabled.storyName = 'Disabled'

export const WithFormik = () => {
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
      onSubmit={console.log}
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
