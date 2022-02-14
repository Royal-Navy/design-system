import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { withFormik } from '../../enhancers/withFormik'
import { RadioE } from '.'
import { FormikGroupE } from '../FormikGroup'

export default {
  component: RadioE,
  title: 'Radio (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof RadioE>

const Template: ComponentStory<typeof RadioE> = (props) => <RadioE {...props} />

export const Default = Template.bind({})
Default.args = {
  id: undefined,
  label: 'Default radio',
  name: 'default',
}

export const Checked = Template.bind({})
Checked.args = {
  id: undefined,
  defaultChecked: true,
  label: 'Checked radio',
  name: 'checked',
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled radio',
  name: 'disabled',
}

export const DisabledChecked = Template.bind({})
DisabledChecked.storyName = 'Disabled, checked'
DisabledChecked.args = {
  id: undefined,
  isDisabled: true,
  defaultChecked: true,
  label: 'Disabled, checked radio',
  name: 'disabled-checked',
}

export const Invalid = Template.bind({})
Invalid.args = {
  id: undefined,
  label: 'Invalid radio',
  name: 'invalid',
  isInvalid: true,
}

export const WithFormikGroup: ComponentStory<typeof RadioE> = () => {
  interface Data {
    [key: string]: string
  }

  const initialValues: Data = {
    example: '',
    exampleWithError: '',
  }

  const initialTouched = {
    exampleWithError: true,
  }

  const validationSchema = yup.object().shape({
    exampleWithError: yup.string().required(),
  })

  const FormikRadio = withFormik(RadioE)

  return (
    <Formik
      initialValues={initialValues}
      initialTouched={initialTouched}
      validateOnMount
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
      </Form>
    </Formik>
  )
}

WithFormikGroup.storyName = 'Formik Group'
