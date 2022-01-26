import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { parseISO } from 'date-fns'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'

import { withFormik } from '../../enhancers'
import { ButtonE } from '../ButtonE'
import { DatePickerE, DatePickerEOnChangeData } from '.'

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
} as ComponentMeta<typeof DatePickerE>

const Template: ComponentStory<typeof DatePickerE> = (args) => (
  <DatePickerE {...args} />
)

export const Default = Template.bind({})

export const WithInitialValue = Template.bind({})
WithInitialValue.storyName = 'With initial value'
WithInitialValue.args = {
  initialStartDate: parseISO('2021-12-15'),
}

export const CustomFormat = Template.bind({})
CustomFormat.storyName = 'Custom format'
CustomFormat.args = {
  format: 'yyyy/MM/dd',
  initialStartDate: parseISO('2021-01-11'),
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
  initialStartDate: parseISO('2021-04-01'),
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

export const RangeWithInitialValue = Template.bind({})
RangeWithInitialValue.storyName = 'Range, with initial values'
RangeWithInitialValue.args = {
  isRange: true,
  initialStartDate: parseISO('2021-12-05'),
  initialEndDate: parseISO('2021-12-15'),
}

export const WithFormik: ComponentStory<typeof DatePickerE> = (props) => {
  interface Data {
    startDate: Date
    endDate: Date
    andAnotherStartDate: Date | null
  }

  const errorText = 'Something went wrong!'

  const validationSchema = yup.object().shape({
    andAnotherStartDate: yup.date().nullable().required(errorText),
  })

  const FormikDatePicker = withFormik(DatePickerE)

  const initialValues: Data = {
    startDate: new Date(2020, 0, 1),
    endDate: new Date(2020, 4, 1),
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
      {({ setFieldValue, values }) => (
        <Form>
          <Field
            {...props}
            name="date"
            component={FormikDatePicker}
            isRange
            onChange={({ startDate, endDate }: DatePickerEOnChangeData) => {
              setFieldValue('startDate', startDate)
              setFieldValue('endDate', endDate)
            }}
            startDate={values.startDate}
            endDate={values.endDate}
          />
          <Field
            name="andAnotherStartDate"
            label="And another date"
            component={FormikDatePicker}
            onChange={({ startDate }: DatePickerEOnChangeData) => {
              setFieldValue('andAnotherStartDate', startDate)
            }}
            startDate={values.andAnotherStartDate}
          />
          <ButtonE type="submit">Submit</ButtonE>
        </Form>
      )}
    </Formik>
  )
}

WithFormik.storyName = 'Formik'
