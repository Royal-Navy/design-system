import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import React from 'react'

import { withFormik } from '../../enhancers/withFormik'
import { DatePicker, DATEPICKER_PLACEMENT } from '.'

import { TextInput } from '../TextInput'
import { Button } from '../Button'

const stories = storiesOf('DatePicker', module)
const examples = storiesOf('DatePicker/Examples', module)

stories.add('Default', () => {
  return (
    <DatePicker
      startDate={new Date('11/01/2018')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      placement={DATEPICKER_PLACEMENT.BELOW}
    />
  )
})

examples.add('Custom label', () => {
  return (
    <DatePicker
      startDate={new Date('11/01/2018')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      label="Some other label"
    />
  )
})

examples.add('Disabled', () => {
  return (
    <DatePicker
      startDate={new Date('11/01/2018')}
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      isDisabled
    />
  )
})

examples.add('Range', () => {
  return (
    <DatePicker
      onBlur={action('onBlur')}
      onChange={action('onChange')}
      isRange
    />
  )
})

const DatePickerForm = () => {
  interface Data {
    foo: string
    startDate: Date
    endDate: Date
  }

  const initialValues: Data = {
    foo: '',
    startDate: new Date('01/01/2020'),
    endDate: new Date('01/05/2020'),
  }

  const FormikTextInput = withFormik(TextInput)
  const FormikDatePicker = withFormik(DatePicker)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action('onSubmit')}
      render={({ setFieldValue }) => {
        return (
          <Form>
            <Field name="foo" label="Foo" component={FormikTextInput} />
            <Field
              name="date"
              label="Date"
              component={FormikDatePicker}
              isRange
              onChange={({ startDate, endDate }: any) => {
                setFieldValue('startDate', startDate)
                setFieldValue('endDate', endDate)
              }}
              startDate={initialValues.startDate}
              endDate={initialValues.endDate}
            />
            <Button type="submit">Submit</Button>
          </Form>
        )
      }}
    />
  )
}

examples.add('Formik', () => {
  return <DatePickerForm />
})
