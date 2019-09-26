import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import React from 'react'

import withFormik from '../../enhancers/withFormik'
import { Button } from '../Button'
import { NumberInput } from './NumberInput'

const stories = storiesOf('Number Input', module)

interface Data {
  age: number
  gold: number
}

const initialValues: Data = {
  age: 13,
  gold: 1,
}

const onSubmit = (data: Data): void => {
  console.log(`Form Submit ${JSON.stringify(data)}`)
}

const onCancel = () => {
  console.log('Cancel')
}

const FormikNumberInput = withFormik(NumberInput)

stories.add('Vanilla', () => (
  <div style={{ margin: 50 }}>
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field component={FormikNumberInput} name="gold" label="Gold bars" />
        <Field component={FormikNumberInput} name="age" label="Age" />

        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </Form>
    </Formik>
  </div>
))
