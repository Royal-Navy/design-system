import React from 'react'
import * as yup from 'yup'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'

import { withFormik } from '../../enhancers/withFormik'
import { DatePickerE, DatePickerEProps } from '.'

import { ButtonE } from '../ButtonE'

export default {
  component: DatePickerE,
  title: 'Date Picker (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    a11y: {
      config: {
        rules: [
          {
            id: 'aria-required-attr',
            enabled: false,
          },
        ],
      },
    },
  },
} as Meta

export const Default: Story<DatePickerEProps> = (props) => (
  <DatePickerE {...props} />
)

Default.args = {
  id: undefined,
  startDate: undefined,
}

export const CustomFormat: Story<DatePickerEProps> = (props) => (
  <DatePickerE
    {...props}
    format="yyyy/MM/dd"
    startDate={new Date(2021, 0, 11)}
  />
)

CustomFormat.storyName = 'Custom format'

export const CustomInitialMonth: Story<DatePickerEProps> = (props) => (
  <DatePickerE {...props} initialMonth={new Date(2021, 1)} />
)

CustomInitialMonth.storyName = 'Custom initial month'

export const CustomLabel: Story<DatePickerEProps> = (props) => (
  <DatePickerE {...props} label="Custom label" />
)

CustomLabel.storyName = 'Custom label'

export const Disabled: Story<DatePickerEProps> = (props) => (
  <DatePickerE {...props} isDisabled />
)

Disabled.storyName = 'Disabled'

export const DisabledDays: Story<DatePickerEProps> = (props) => (
  <DatePickerE
    {...props}
    startDate={new Date(2021, 3, 1)}
    disabledDays={[
      new Date(2021, 3, 12),
      new Date(2021, 3, 2),
      {
        after: new Date(2021, 3, 20),
        before: new Date(2021, 3, 25),
      },
    ]}
  />
)

DisabledDays.storyName = 'Disabled days'

export const Range: Story<DatePickerEProps> = (props) => (
  <DatePickerE {...props} isRange />
)

Range.storyName = 'Range'

export const WithFormik: Story<DatePickerEProps> = (props) => {
  interface Data {
    startDate: Date
    endDate: Date
    anotherStartDate: Date | null
    andAnotherStartDate: Date | null
  }

  const errorText = 'Something went wrong!'

  const validationSchema = yup.object().shape({
    andAnotherStartDate: yup.date().required(errorText),
  })

  const FormikDatePicker = withFormik(DatePickerE)

  const initialValues: Data = {
    startDate: new Date(2020, 0, 1),
    endDate: new Date(2020, 4, 1),
    anotherStartDate: null,
    andAnotherStartDate: null,
  }

  return (
    <Formik
      initialErrors={{ andAnotherStartDate: errorText }}
      initialTouched={{ andAnotherStartDate: true }}
      initialValues={initialValues}
      onSubmit={action('onSubmit')}
      validationSchema={validationSchema}
      render={({ setFieldValue }) => {
        return (
          <Form>
            <Field
              {...props}
              name="date"
              component={FormikDatePicker}
              isRange
              onChange={({ startDate, endDate }: any) => {
                setFieldValue('startDate', startDate)
                setFieldValue('endDate', endDate)
              }}
              startDate={initialValues.startDate}
              endDate={initialValues.endDate}
            />
            <Field
              isValid
              name="anotherDate"
              label="Another date"
              component={FormikDatePicker}
              onChange={({ startDate }: any) => {
                setFieldValue('anotherStartDate', startDate)
              }}
            />
            <Field
              name="andAnotherStartDate"
              label="And another date"
              component={FormikDatePicker}
              onChange={({ startDate }: any) => {
                setFieldValue('andAnotherStartDate', startDate)
              }}
            />
            <ButtonE type="submit">Submit</ButtonE>
          </Form>
        )
      }}
    />
  )
}

WithFormik.storyName = 'Formik'
