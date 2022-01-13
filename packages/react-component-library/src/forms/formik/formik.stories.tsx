import { isBefore, isValid, parseISO } from 'date-fns'
import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Formik, Field } from 'formik'
import styled from 'styled-components'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import { CheckboxE } from '../../components/CheckboxE'
import { ButtonE } from '../../components/ButtonE'
import { NumberInputE } from '../../components/NumberInputE'
import {
  DatePickerE,
  DatePickerEOnChangeData,
} from '../../components/DatePickerE'
import { SelectE, SelectEOption } from '../../components/SelectE'
import { SwitchE, SwitchEOption, SwitchEProps } from '../../components/SwitchE'
import { RangeSliderE } from '../../components/RangeSliderE'
import { FormikGroupE } from '../../components/FormikGroup'
import { withFormik } from '../../enhancers/withFormik'
import { sleep } from '../../helpers'

export interface FormValues {
  email: string
  password: string
  description: string
  exampleCheckbox: string[]
  exampleRadio: string[]
  exampleSwitch: string
  exampleNumberInput: number
  exampleDatePicker: Date | null
  exampleSelect: string | null
  exampleRangeSlider: number[]
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

const StyledRangeSliderE = styled(RangeSliderE)`
  margin-top: 3rem;
`

const FormikTextInputE = withFormik(TextInputE)
const FormikTextAreaE = withFormik(TextAreaE)
const FormikCheckboxE = withFormik(CheckboxE)
const FormikRadioE = withFormik(RadioE)
const FormikSwitchE = withFormik(SwitchEFormed)
const FormikDatePickerE = withFormik(DatePickerE)
const FormikNumberInputE = withFormik(NumberInputE)
const FormikSelectE = withFormik(SelectE)
const FormikRangeSliderE = withFormik(StyledRangeSliderE)

const MINIMUM_DATE = parseISO('2022-01-01')

export const Example: React.FC<unknown> = () => {
  const [formValues, setFormValues] = useState<FormValues>()

  return (
    <main>
      <Formik<FormValues>
        initialValues={{
          email: '',
          password: '',
          description: '',
          exampleCheckbox: [],
          exampleRadio: [],
          exampleSwitch: '',
          exampleNumberInput: null,
          exampleDatePicker: null,
          exampleSelect: null,
          exampleRangeSlider: [20],
        }}
        validate={({ email, exampleDatePicker }) => {
          const errors: Record<string, unknown> = {}

          if (!email) {
            errors.email = 'Required'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Invalid email address'
          }

          if (exampleDatePicker && !isValid(exampleDatePicker)) {
            errors.exampleDatePicker = 'Enter a valid date'
          }

          if (isBefore(exampleDatePicker, MINIMUM_DATE)) {
            errors.exampleDatePicker = 'Enter a date on or after 1 January 2022'
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
            <Field
              name="exampleNumberInput"
              component={FormikNumberInputE}
              onChange={(
                _:
                  | React.ChangeEvent<HTMLInputElement>
                  | React.MouseEvent<HTMLButtonElement>,
                newValue: number
              ) => {
                setFieldValue('exampleNumberInput', newValue)
              }}
            />
            <Field
              name="exampleDatePicker"
              component={FormikDatePickerE}
              disabledDays={{ before: MINIMUM_DATE }}
              onChange={({ startDate }: DatePickerEOnChangeData) => {
                setFieldValue('exampleDatePicker', startDate)
              }}
            />
            <Field
              name="exampleSelect"
              component={FormikSelectE}
              label="Example select"
              value={values.exampleSelect}
              onChange={(value: string | null) => {
                setFieldValue('exampleSelect', value)
              }}
            >
              <SelectEOption value="one">One</SelectEOption>
              <SelectEOption value="two">Two</SelectEOption>
              <SelectEOption value="three">Three</SelectEOption>
              <SelectEOption value="four">Four</SelectEOption>
            </Field>
            <Field
              name="exampleRangeSlider"
              component={FormikRangeSliderE}
              onChange={(newValues: ReadonlyArray<number>) => {
                setFieldValue('exampleRangeSlider', newValues)
              }}
              domain={[0, 40]}
              mode={1}
              values={[20]}
              tracksLeft
              step={2}
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
  component: Example,
} as ComponentMeta<typeof Example>
