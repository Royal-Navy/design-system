import React from 'react'
import * as yup from 'yup'
import { Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'

import { withFormik } from '../../enhancers/withFormik'
import { DatePicker, DATEPICKER_PLACEMENT } from '.'

import { Button } from '../Button'

export default { component: DatePicker, title: 'Date Picker' } as Meta

export const Default = (props: any) => <DatePicker {...props} />

Default.args = {
  id: undefined,
  startDate: undefined,
  placement: DATEPICKER_PLACEMENT.BELOW,
}

export const CustomFormat = () => (
  <DatePicker
    format="yyyy/MM/dd"
    startDate={new Date(2021, 0, 11)}
    placement={DATEPICKER_PLACEMENT.BELOW}
  />
)

CustomFormat.storyName = 'Custom format'

export const CustomInitialMonth = () => (
  <DatePicker
    initialMonth={new Date(2021, 1)}
    placement={DATEPICKER_PLACEMENT.BELOW}
  />
)

CustomInitialMonth.storyName = 'Custom initial month'

export const CustomLabel = () => <DatePicker label="Custom label" />

CustomLabel.storyName = 'Custom label'

export const Disabled = () => <DatePicker isDisabled />

Disabled.storyName = 'Disabled'

export const DisabledDays = () => (
  <DatePicker
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

export const Range = () => <DatePicker isRange />

Range.storyName = 'Range'

export const WithFormik = () => {
  interface Data {
    andAnotherStartDate: Date | null
    startDate: Date
    endDate: Date
  }

  const errorText = 'Something went wrong!'

  const validationSchema = yup.object().shape({
    andAnotherStartDate: yup.date().required(errorText),
  })

  const FormikDatePicker = withFormik(DatePicker)

  const initialValues: Data = {
    andAnotherStartDate: null,
    startDate: new Date(2020, 0, 1),
    endDate: new Date(2020, 4, 1),
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
