import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import Checkbox from './index'

const stories = storiesOf('Checkbox', module)

interface Data {
  [key: string]: boolean
}

const initialValues: Data = {
  example1: true,
  example2: false,
  example3: false,
}

const onSubmit = (data: Data): void => {
  action(`Form Submit ${JSON.stringify(data)}`)
}

const validationSchema = yup.object().shape({
  example: yup.string(),
})

stories.add('Formik', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <Form>
      <Field
        className="rn-checkbox--is-valid"
        name="example1"
        component={Checkbox}
        label="My Label 1"
      />
      <Field
        className="rn-checkbox--is-valid"
        name="example2"
        component={Checkbox}
        label="My Label 2"
      />
      <Field
        className="rn-checkbox--is-valid"
        name="example3"
        component={Checkbox}
        label="My Label 3"
      />
    </Form>
  </Formik>
))
