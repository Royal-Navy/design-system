import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { withFormik } from '../../enhancers/withFormik'
import { CheckboxE } from '.'
import { FormikGroupE } from '../FormikGroup'

export default {
  component: CheckboxE,
  title: 'Checkbox (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof CheckboxE>

const Template: ComponentStory<typeof CheckboxE> = (props) => (
  <CheckboxE {...props} />
)

export const Default = Template.bind({})
Default.args = {
  id: undefined,
  label: 'Default checkbox',
  name: 'default',
}

export const Checked = Template.bind({})
Checked.args = {
  id: undefined,
  defaultChecked: true,
  label: 'Checked',
  name: 'checked',
}

export const DisabledUnchecked = Template.bind({})
DisabledUnchecked.storyName = 'Disabled, unchecked'
DisabledUnchecked.args = {
  id: undefined,
  isDisabled: true,
  label: 'Disabled, unchecked',
  name: 'disabled',
}

export const DisabledChecked = Template.bind({})
DisabledChecked.storyName = 'Disabled, checked'
DisabledChecked.args = {
  id: undefined,
  defaultChecked: true,
  isDisabled: true,
  label: 'Disabled, checked',
  name: 'disabled',
}

export const Invalid = Template.bind({})
Invalid.args = {
  id: undefined,
  label: 'Invalid checkbox',
  name: 'invalid',
  isInvalid: true,
}

export const WithFormikGroup: ComponentStory<typeof CheckboxE> = () => {
  const CheckboxForm = () => {
    interface Data {
      [key: string]: string[]
    }

    const initialValues: Data = {
      example: [],
      exampleWithError: [],
    }

    const initialTouched = {
      exampleWithError: true,
    }

    const validationSchema = yup.object().shape({
      exampleWithError: yup.array().min(1),
    })

    const FormikCheckbox = withFormik(CheckboxE)

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
        </Form>
      </Formik>
    )
  }

  return <CheckboxForm />
}

WithFormikGroup.storyName = 'Formik Group'
