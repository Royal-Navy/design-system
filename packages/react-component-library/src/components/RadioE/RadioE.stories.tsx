import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { withFormik } from '../../enhancers/withFormik'
import { RadioE, RadioEProps } from '.'
import { Button } from '../Button'
import { FormikGroupE } from '../FormikGroup'
import { Fieldset } from '../Fieldset'

export default {
  component: RadioE,
  title: 'RadioE',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<RadioEProps> = (props) => <RadioE {...props} />

Default.args = {
  id: undefined,
  label: 'Default radio',
  name: 'default',
  isChecked: true,
}

export const Disabled: Story<RadioEProps> = (props) => <RadioE {...props} />

Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled radio',
  name: 'disabled',
}

export const Invalid: Story<RadioEProps> = (props) => <RadioE {...props} />

Invalid.args = {
  id: undefined,
  label: 'Invalid radio',
  name: 'invalid',
  isInvalid: true,
}

export const WithFormik: Story<RadioEProps> = () => {
  const RadioForm = () => {
    interface Data {
      [key: string]: string
    }

    const initialValues: Data = {
      example: 'Option 1',
    }

    const validationSchema = yup.object().shape({
      example: yup.string(),
    })

    const FormikRadio = withFormik(RadioE)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('onSubmit')}
        validationSchema={validationSchema}
      >
        <Form>
          <Fieldset>
            <Field
              name="example"
              component={FormikRadio}
              label="Option 1"
              value="Option 1"
            />
            <Field
              name="example"
              component={FormikRadio}
              label="Option 2"
              value="Option 2"
            />
            <Field
              name="example"
              component={FormikRadio}
              label="Option 3"
              value="Option 3"
            />
          </Fieldset>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    )
  }

  return <RadioForm />
}

WithFormik.storyName = 'Formik'

export const WithFormikGroup: Story<RadioEProps> = () => {
  const RadioForm = () => {
    interface Data {
      [key: string]: string
    }

    const initialValues: Data = {
      example: '',
      exampleWithError: '',
    }

    const validationSchema = yup.object().shape({
      exampleWithError: yup.string().required('Field is required'),
    })

    const FormikRadio = withFormik(RadioE)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('onSubmit')}
        validationSchema={validationSchema}
      >
        <Form>
          <FormikGroupE label="Select an option">
            <Field
              component={FormikRadio}
              name="example"
              label="Option 1"
              value="Option 1"
            />
            <Field
              component={FormikRadio}
              name="example"
              label="Option 2"
              value="Option 2"
            />
            <Field
              component={FormikRadio}
              name="example"
              label="Option 3"
              value="Option 3"
            />
          </FormikGroupE>
          <br />
          <FormikGroupE label="Select another option">
            <Field
              component={FormikRadio}
              name="exampleWithError"
              label="Another option 1"
              value="Another option 1"
            />
            <Field
              component={FormikRadio}
              name="exampleWithError"
              label="Another option 2"
              value="Another option 2"
            />
            <Field
              component={FormikRadio}
              name="exampleWithError"
              label="Another option 3"
              value="3"
            />
          </FormikGroupE>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    )
  }

  return <RadioForm />
}

WithFormikGroup.storyName = 'Formik Group'
