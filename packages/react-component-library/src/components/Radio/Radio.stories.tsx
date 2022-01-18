import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { withFormik } from '../../enhancers/withFormik'
import { Radio } from '.'
import { Button } from '../Button'
import { FormikGroup } from '../FormikGroup'

export default {
  component: Radio,
  title: 'Radio',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof Radio>

export const Default: ComponentStory<typeof Radio> = (props) => (
  <Radio {...props} />
)

Default.args = {
  id: undefined,
  label: 'Default radio',
  name: 'default',
  isChecked: true,
}

export const Disabled: ComponentStory<typeof Radio> = (props) => (
  <Radio {...props} />
)

Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled radio',
  name: 'disabled',
}

export const Invalid: ComponentStory<typeof Radio> = (props) => (
  <Radio {...props} />
)

Invalid.args = {
  id: undefined,
  label: 'Invalid radio',
  name: 'invalid',
  isInvalid: true,
}

export const WithFormik: ComponentStory<typeof Radio> = () => {
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
        onSubmit={action('onSubmit')}
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

export const WithFormikGroup: ComponentStory<typeof Radio> = () => {
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
        onSubmit={action('onSubmit')}
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
