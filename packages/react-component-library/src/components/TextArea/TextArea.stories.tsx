import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { Button } from '../Button'
import { TextArea } from '.'

import { withFormik } from '../../enhancers/withFormik'

const stories = storiesOf('TextArea', module)

stories.add('Vanilla', () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        action('Submitted')(e)
      }}
    >
      <TextArea className="is-valid" name="colour" label="My Label" />
      <TextArea name="name" label="Name" />
      <TextArea
        name="description"
        label="Description"
        value="Some content has already been entered"
      />
      <button type="submit">Submit</button>
    </form>
  )
})

stories.add('Formik', () => {
  const TextAreaField = () => {
    interface Data {
      description: string
    }

    const initialValues: Data = {
      description: '',
    }

    const validationSchema = yup.object().shape({
      description: yup.string().required('You must enter a city'),
    })

    const FormikTextArea = withFormik(TextArea)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            name="description"
            component={FormikTextArea}
            label="Description"
          />
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Form>
      </Formik>
    )
  }

  return <TextAreaField />
})
