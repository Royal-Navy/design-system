import React from 'react'
import * as yup from 'yup'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'

import { withFormik } from '../../enhancers/withFormik'
import { DatePicker, DatePickerProps } from '.'

import { Button } from '../Button'

export default {
  component: DatePicker,
  title: 'Date Picker',
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

export const Default: Story<DatePickerProps> = (props) => (
  <DatePicker {...props} />
)

Default.args = {
  id: undefined,
  startDate: undefined,
}

export const CustomFormat: Story<DatePickerProps> = (props) => (
  <DatePicker
    {...props}
    format="yyyy/MM/dd"
    startDate={new Date(2021, 0, 11)}
  />
)

CustomFormat.storyName = 'Custom format'

export const CustomInitialMonth: Story<DatePickerProps> = (props) => (
  <DatePicker {...props} initialMonth={new Date(2021, 1)} />
)

CustomInitialMonth.storyName = 'Custom initial month'

export const CustomLabel: Story<DatePickerProps> = (props) => (
  <DatePicker {...props} label="Custom label" />
)

CustomLabel.storyName = 'Custom label'

export const Disabled: Story<DatePickerProps> = (props) => (
  <DatePicker {...props} isDisabled />
)

Disabled.storyName = 'Disabled'

export const DisabledDays: Story<DatePickerProps> = (props) => (
  <DatePicker
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

export const Range: Story<DatePickerProps> = (props) => (
  <DatePicker {...props} isRange />
)

Range.storyName = 'Range'

export const WithFormik: Story<DatePickerProps> = (props) => {
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

  const FormikDatePicker = withFormik(DatePicker)

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
            <Button type="submit">Submit</Button>
          </Form>
        )
      }}
    />
  )
}

WithFormik.storyName = 'Formik'
