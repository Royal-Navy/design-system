import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { withFormik } from '../../enhancers/withFormik'
import { Radio } from '.'
import { Button } from '../Button'
import { FormikGroup } from '../FormikGroup'

export default { component: Radio, title: 'Radio' } as Meta

export const Default = (props: any) => <Radio {...props} />

Default.args = {
  id: undefined,
  label: 'Default radio',
  name: 'default',
  isChecked: true,
}

export const Disabled = (props: any) => <Radio {...props} />

Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled radio',
  name: 'disabled',
}

export const Invalid = (props: any) => <Radio {...props} />

Invalid.args = {
  id: undefined,
  label: 'Invalid radio',
  name: 'invalid',
  isInvalid: true,
}

export const WithFormik = () => {
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

    const FormikRadio = withFormik(Radio)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
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
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    )
  }

  return <RadioForm />
}

WithFormik.storyName = 'Formik'

export const WithFormikGroup = () => {
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

    const FormikRadio = withFormik(Radio)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        validationSchema={validationSchema}
      >
        <Form>
          <FormikGroup label="Select an option">
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
          </FormikGroup>
          <br />
          <FormikGroup label="Select another option">
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
          </FormikGroup>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    )
  }

  return <RadioForm />
}

WithFormikGroup.storyName = 'Formik Group'
