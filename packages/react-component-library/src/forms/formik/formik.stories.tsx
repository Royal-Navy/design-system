import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Formik, Field } from 'formik'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import { CheckboxE } from '../../components/CheckboxE'
import { ButtonE } from '../../components/ButtonE'
import { FormikGroupE } from '../../components/FormikGroup'
import { withFormik } from '../../enhancers/withFormik'
import { sleep } from '../../helpers'

export interface FormValues {
  email?: string
  password?: string
  description?: string
  exampleCheckbox: string[]
  exampleRadio: string[]
}

const FormikTextInputE = withFormik(TextInputE)
const FormikTextAreaE = withFormik(TextAreaE)
const FormikCheckboxE = withFormik(CheckboxE)
const FormikRadioE = withFormik(RadioE)

export const ExampleFormik: React.FC<unknown> = () => {
  const [formValues, setFormValues] = useState<FormValues>()

  return (
    <main>
      <Formik
        initialValues={{
          email: '',
          password: '',
          description: '',
          exampleCheckbox: [],
          exampleRadio: [],
        }}
        validate={(values) => {
          const errors: Record<string, unknown> = {}

          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }

          return errors
        }}
        onSubmit={async (values: FormValues, { setSubmitting }) => {
          await sleep(400)
          setFormValues(values)
          setSubmitting(false)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              label="Email"
              component={FormikTextInputE}
              data-testid="form-example-TextInputE-email"
            />
            <Field
              type="password"
              name="password"
              label="Password"
              component={FormikTextInputE}
              data-testid="form-example-TextInputE-password"
            />
            <Field
              name="description"
              label="Description"
              component={FormikTextAreaE}
              data-testid="form-example-TextAreaE-description"
            />
            <FormikGroupE label="Example checkbox selection">
              <Field
                component={FormikCheckboxE}
                name="exampleCheckbox"
                label="Option 1"
                value="Option 1"
                type="checkbox"
              />
              <Field
                component={FormikCheckboxE}
                name="exampleCheckbox"
                label="Option 2"
                value="Option 2"
                type="checkbox"
              />
              <Field
                component={FormikCheckboxE}
                name="exampleCheckbox"
                label="Option 3"
                value="Option 3"
                type="checkbox"
              />
            </FormikGroupE>
            <FormikGroupE label="Example radio selection">
              <Field
                component={FormikRadioE}
                name="exampleRadio"
                label="Option 1"
                value="Option 1"
              />
              <Field
                component={FormikRadioE}
                name="exampleRadio"
                label="Option 2"
                value="Option 2"
              />
            </FormikGroupE>
            <ButtonE
              type="submit"
              isDisabled={isSubmitting}
              data-testid="form-example-submit"
            >
              Submit
            </ButtonE>
          </form>
        )}
      </Formik>

      <pre data-testid="form-example-values">
        {JSON.stringify(formValues, null, 2)}
      </pre>
    </main>
  )
}

export default {
  title: 'Forms/Formik',
  component: ExampleFormik,
} as Meta

export const Default: Story<unknown> = () => <ExampleFormik />
