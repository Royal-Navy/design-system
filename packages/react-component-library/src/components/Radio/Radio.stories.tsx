import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import Radio from './index'

const stories = storiesOf('Radio', module)

interface Data {
  example: boolean
}

const initialValues: Data = {
  example: false,
}

const onSubmit = (data: Data): void => {
  action(`Form Submit ${JSON.stringify(data)}`)
}

const validationSchema = yup.object().shape({
  example: yup.boolean(),
})

stories.add('Formik', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <Form>
      <Field
        className="rn-textinput--is-valid"
        name="example"
        component={Radio}
        label="My Label"
      />
    </Form>
  </Formik>
))
