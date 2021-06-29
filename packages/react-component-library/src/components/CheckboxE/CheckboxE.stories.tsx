import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { withFormik } from '../../enhancers/withFormik'
import { CheckboxE, CheckboxEProps } from '.'
import { Button } from '../Button'
import { FormikGroupE } from '../FormikGroup'
import { Fieldset } from '../Fieldset'

export default {
  component: CheckboxE,
  title: 'CheckboxE',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<CheckboxEProps> = (props) => (
  <CheckboxE {...props} />
)

Default.args = {
  id: undefined,
  label: 'Default checkbox',
  name: 'default',
}

export const Disabled: Story<CheckboxEProps> = (props) => (
  <CheckboxE {...props} />
)

Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled checkbox',
  name: 'disabled',
  checked: true,
}

export const Invalid: Story<CheckboxEProps> = (props) => (
  <CheckboxE {...props} />
)

Invalid.args = {
  id: undefined,
  label: 'Invalid checkbox',
  name: 'invalid',
  isInvalid: true,
}

export const WithFormik: Story<CheckboxEProps> = () => {
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

    const FormikCheckbox = withFormik(CheckboxE)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('onSubmit')}
        validationSchema={validationSchema}
      >
        <Form>
          <Fieldset>
            <Field
              name="example1"
              component={FormikCheckbox}
              label="Option 1"
              type="checkbox"
            />
            <Field
              name="example2"
              component={FormikCheckbox}
              label="Option 2"
              type="checkbox"
            />
            <Field
              name="example3"
              component={FormikCheckbox}
              label="Option 3"
              type="checkbox"
            />
          </Fieldset>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    )
  }

  return <CheckboxForm />
}

WithFormik.storyName = 'Formik'

export const WithFormikGroup: Story<CheckboxEProps> = () => {
  const CheckboxForm = () => {
    interface Data {
      [key: string]: string
    }

    const initialValues: Data = {
      example: '',
      exampleWithError: '',
    }

    const validationSchema = yup.object().shape({
      exampleWithError: yup.array().min(0).required('Field is required'),
    })

    const FormikCheckbox = withFormik(CheckboxE)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('onSubmit')}
        validationSchema={validationSchema}
      >
        <Form>
          <FormikGroupE label="Select an option">
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 1"
              value="Option 1"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 2"
              value="Option 2"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="example"
              label="Option 3"
              value="Option 3"
              type="checkbox"
            />
          </FormikGroupE>
          <br />
          <FormikGroupE label="Select another option">
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 1"
              value="Another option 1"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 2"
              value="Another option 2"
              type="checkbox"
            />
            <Field
              component={FormikCheckbox}
              name="exampleWithError"
              label="Another option 3"
              value="3"
              type="checkbox"
            />
          </FormikGroupE>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    )
  }

  return <CheckboxForm />
}

WithFormikGroup.storyName = 'Formik Group'
