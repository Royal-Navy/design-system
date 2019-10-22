import State from '@royalnavy/storybook-react-input-state'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import React from 'react'
import * as yup from 'yup'

import { Button } from '../Button'
import { TextArea } from './index'

import withFormik from '../../enhancers/withFormik'

const stories = storiesOf('TextArea', module)

stories.add('Vanilla', () => (
  <Form>
    <State>
      <TextArea className="is-valid" name="colour" label="My Label" />
      <TextArea name="name" label="Name" />
    </State>
  </Form>
))

interface Data {
  description: string
}

const initialValues: Data = {
  description: '',
}

const onSubmit = (data: Data): void => {
  action(`Form Submit ${JSON.stringify(data)}`)
}

const validationSchema = yup.object().shape({
  description: yup.string().required('You must enter a city'),
})

const FormikTextInput = withFormik(TextArea)

stories.add('Formik', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <Form>
      <Field
        name="description"
        component={FormikTextInput}
        label="Description"
      />
      <Button type="submit" variant="primary">
        Save
      </Button>
    </Form>
  </Formik>
))
