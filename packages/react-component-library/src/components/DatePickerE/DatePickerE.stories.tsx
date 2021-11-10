import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import { parseISO } from 'date-fns'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'

import { withFormik } from '../../enhancers'
import { ButtonE } from '../ButtonE'
import { DatePickerE, DatePickerEProps } from '.'

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

const Template: Story<DatePickerEProps> = (args) => <DatePickerE {...args} />

export const Default = Template.bind({})

export const CustomFormat = Template.bind({})
CustomFormat.storyName = 'Custom format'
CustomFormat.args = {
  format: 'yyyy/MM/dd',
  startDate: parseISO('2021-01-11'),
}

export const CustomInitialMonth = Template.bind({})
CustomInitialMonth.storyName = 'Custom initial month'
CustomInitialMonth.args = {
  initialMonth: parseISO('2021-01-01'),
}

export const CustomLabel = Template.bind({})
CustomLabel.storyName = 'Custom label'
CustomLabel.args = {
  label: 'Custom label',
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const DisabledDays = Template.bind({})
DisabledDays.storyName = 'Disabled days'
DisabledDays.args = {
  startDate: parseISO('2021-04-01'),
  disabledDays: [
    parseISO('2021-04-12'),
    parseISO('2021-04-02'),
    {
      after: parseISO('2021-03-20'),
      before: parseISO('2021-03-25'),
    },
  ],
}

export const Range = Template.bind({})
Range.args = {
  isRange: true,
}

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
    >
      {({ setFieldValue }) => (
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
            name="andAnotherStartDate"
            label="And another date"
            component={FormikDatePicker}
            onChange={({ startDate }: any) => {
              setFieldValue('andAnotherStartDate', startDate)
            }}
          />
          <ButtonE type="submit">Submit</ButtonE>
        </Form>
      )}
    </Formik>
  )
}

WithFormik.storyName = 'Formik'
