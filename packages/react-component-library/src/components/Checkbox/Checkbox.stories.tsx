import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { withFormik } from '../../enhancers/withFormik'
import { Checkbox } from '.'
import { FormikGroup } from '../FormikGroup'

const stories = storiesOf('Checkbox', module)

stories.add('Vanilla', () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        action('Submitted')(e)
      }}
    >
      <Checkbox name="example1" label="My Label 1" value="true" isChecked />
      <Checkbox name="example2" label="My Label 2" isDisabled />
      <Checkbox name="example3" label="My Label 3" />
      <button type="submit">Submit</button>
    </form>
  )
})

stories.add('Formik', () => {
  const CheckboxForm = () => {
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

    const FormikCheckbox = withFormik(Checkbox)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            className="rn-checkbox--is-valid"
            name="example1"
            component={FormikCheckbox}
            label="My Label 1"
            type="checkbox"
          />
          <Field
            className="rn-checkbox--is-valid"
            name="example2"
            component={FormikCheckbox}
            label="My Label 2"
            type="checkbox"
          />
          <Field
            className="rn-checkbox--is-valid"
            name="example3"
            component={FormikCheckbox}
            label="My Label 3"
            type="checkbox"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
  }

  return <CheckboxForm />
})

stories.add('Formik checkbox group', () => {
  const CheckboxForm = () => {
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

    const FormikCheckbox = withFormik(Checkbox)

    return (
      <Formik
        initialErrors={{ exampleWithError: 'Field is required' }}
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
          <FormikGroup label="Select an option">
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 1"
              value="1"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 2"
              value="2"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 3"
              value="3"
              type="checkbox"
            />
          </FormikGroup>
          <FormikGroup label="Select another option">
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 1"
              value="1"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 2"
              value="2"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 3"
              value="3"
              type="checkbox"
            />
          </FormikGroup>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    )
  }

  return <CheckboxForm />
})
