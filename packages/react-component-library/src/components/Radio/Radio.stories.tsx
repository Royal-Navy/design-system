import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import withFormik from '../../enhancers/withFormik'
import Radio from './index'

const stories = storiesOf('Radio', module)

stories.add('Vanilla', () => (
  <Form>
    <Radio name="example" value="" label="My Label 1" />
    <Radio name="example" label="My Label 2" />
    <Radio name="example" label="My Label 3" />
  </Form>
))

interface Data {
  example: string
}

const initialValues: Data = {
  example: 'option1',
}

const onSubmit = (data: Data): void => {
  action(`Form Submit ${JSON.stringify(data)}`)
}

const validationSchema = yup.object().shape({
  example: yup.string(),
})

const FormikRadio = withFormik(Radio)

stories.add('Formik', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
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
    </Form>
  </Formik>
))
