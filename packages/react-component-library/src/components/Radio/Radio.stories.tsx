import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import Radio from './index'

const stories = storiesOf('Radio', module)

interface Data {
  example: string
}

const initialValues: Data = {
  example: 'option1',
}

const onSubmit = (data: Data): void => {
  action(`Form Submit ${JSON.stringify(data)}`)
}

const onChange = (event: React.SyntheticEvent): void => {
  const target = event.currentTarget
  initialValues.example = target.id
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
        className="rn-radio--is-valid"
        id="option1"
        name="example"
        component={Radio}
        label="My Label 1"
        onChange={onChange}
      />
      <Field
        className="rn-radio--is-valid"
        id="option2"
        name="example"
        component={Radio}
        label="My Label 2"
        onChange={onChange}
      />
      <Field
        className="rn-radio--is-valid"
        id="option3"
        name="example"
        component={Radio}
        label="My Label 3"
        onChange={onChange}
      />
    </Form>
  </Formik>
))
