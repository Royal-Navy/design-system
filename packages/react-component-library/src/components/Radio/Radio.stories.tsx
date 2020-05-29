import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import withFormik from '../../enhancers/withFormik'
import { Radio } from '.'

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
      <Radio name="example" label="My Label 2" />
      <Radio name="example" label="My Label 3" />
      <button type="submit">Submit</button>
    </form>
  )
})

stories.add('Formik', () => {
  const RadiosForm = () => {
    interface Data {
      [key: string]: boolean
    }

    const initialValues: Data = {
      example1: true,
      example2: false,
      example3: false,
    }

    const validationSchema = yup.object().shape({
      example: yup.string(),
    })

    const FormikRadio = withFormik(Radio)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            className="rn-radio--is-valid"
            id="option1"
            name="example"
            component={FormikRadio}
            label="My Label 1"
          />
          <Field
            className="rn-radio--is-valid"
            id="option2"
            name="example"
            component={FormikRadio}
            label="My Label 2"
          />
          <Field
            className="rn-radio--is-valid"
            id="option3"
            name="example"
            component={FormikRadio}
            label="My Label 3"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
  }

  return <RadiosForm />
})
