import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'

import { FormikGroup } from '../FormikGroup/FormikGroup'
import { Radio } from '.'
import { withFormik } from '../../enhancers/withFormik'

const stories = storiesOf('Radio', module)

stories.add('Vanilla', () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        action('Submitted')(e)
      }}
    >
      <Radio name="example" value="" label="My Label 1" />
      <Radio name="example" label="My Label 2" isDisabled />
      <Radio name="example" label="My Label 3" />
      <button type="submit">Submit</button>
    </form>
  )
})

stories.add('Formik radio group', () => {
  const RadiosForm = () => {
    interface Data {
      [key: string]: string
    }

    const initialValues: Data = {
      example: '',
      exampleWithError: '',
    }

    const validationSchema = yup.object().shape({
      example: yup.string().required('Field is required'),
      exampleWithError: yup.string().required('Field is required'),
    })

    const FormikRadio = withFormik(Radio)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
          <FormikGroup>
            <Field
              component={FormikRadio}
              name="example"
              label="Option 1"
              value="1"
            />
            <Field
              component={FormikRadio}
              name="example"
              label="Option 2"
              value="2"
            />
            <Field
              component={FormikRadio}
              name="example"
              label="Option 3"
              value="3"
            />
          </FormikGroup>
          <FormikGroup>
            <Field
              component={FormikRadio}
              name="exampleWithError"
              label="Another option 1"
              value="1"
            />
            <Field
              component={FormikRadio}
              name="exampleWithError"
              label="Another option 2"
              value="2"
            />
            <Field
              component={FormikRadio}
              name="exampleWithError"
              label="Another option 3"
              value="3"
            />
          </FormikGroup>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
  }

  return <RadiosForm />
})
