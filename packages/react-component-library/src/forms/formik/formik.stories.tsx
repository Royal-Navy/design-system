import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import { Formik, Field } from 'formik'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import { CheckboxE } from '../../components/CheckboxE'
import { ButtonE } from '../../components/ButtonE'
import { SwitchE, SwitchEOption, SwitchEProps } from '../../components/SwitchE'
import { FormikGroupE } from '../../components/FormikGroup'
import { withFormik } from '../../enhancers/withFormik'
import { sleep } from '../../helpers'

export interface FormValues {
  email?: string
  password?: string
  description?: string
  exampleCheckbox: string[]
  exampleRadio: string[]
  exampleSwitch: string
}

const SwitchEFormed: React.FC<SwitchEProps> = (props) => (
  <SwitchE
    {...props}
    label="Example switch selection"
    data-testid="form-example-SwitchE"
  >
    <SwitchEOption label="One" value="1" />
    <SwitchEOption label="Two" value="2" />
    <SwitchEOption label="Three" value="3" />
  </SwitchE>
)

const FormikTextInputE = withFormik(TextInputE)
const FormikTextAreaE = withFormik(TextAreaE)
const FormikCheckboxE = withFormik(CheckboxE)
const FormikRadioE = withFormik(RadioE)
const FormikSwitchE = withFormik(SwitchEFormed)

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
          exampleSwitch: '',
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
          setFieldValue,
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
            <Field
              name="exampleSwitch"
              component={FormikSwitchE}
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                setFieldValue('exampleSwitch', event.currentTarget.value)
              }}
            />
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
