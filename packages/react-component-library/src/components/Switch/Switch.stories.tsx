import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Field, Formik, Form } from 'formik'
import useFormik from '../../enhancers/withFormik'

import { OptionType } from '../../types/Switch'
import Switch from './Switch'
import ResponsiveSwitch from './index'

const stories = storiesOf('Switch', module)

const options = [
  { label: 'Day', value: '1' },
  { label: 'Week', value: '2' },
  { label: 'Month', value: '3' },
  { label: 'Year', value: '4' },
]

stories.add('Default', () => (
  <Switch
    name="example-switch-field"
    value=""
    label="Date Range"
    options={options}
    onChange={event => {
      console.log(event)
    }}
  />
))

stories.add('No legend', () => (
  <Switch
    name="example-switch-field"
    value=""
    options={options}
    onChange={event => {
      console.log(event)
    }}
  />
))

stories.add('Responsive', () => (
  <ResponsiveSwitch
    name="example-switch-field"
    value=""
    label="Date Range"
    options={options}
    onChange={event => {
      console.log(event)
    }}
  />
))

stories.add('Small', () => (
  <Switch
    name="example-switch-field"
    value=""
    label="Date Range"
    options={options}
    onChange={event => {
      console.log(event)
    }}
    size="small"
  />
))

stories.add('Large', () => (
  <Switch
    name="example-switch-field"
    value=""
    label="Date Range"
    options={options}
    onChange={event => {
      console.log(event)
    }}
    size="large"
  />
))

interface Data {
  'example-switch-field': string
}

const initialValues: Data = {
  'example-switch-field': '3',
}

const onSubmit = (data: Data): void => {
  action(`Form Submit ${JSON.stringify(data)}`)
}

const FormikSwitch = useFormik(ResponsiveSwitch)

stories.add('Formik', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    render={({ setFieldValue }) => {
      return (
        <Form>
          <Field
            name="example-switch-field"
            label="Date Range"
            component={FormikSwitch}
            options={options}
            onChange={(event: any) => {
              setFieldValue('example-switch-field', event.target.value)
              console.log(event)
            }}
          />
        </Form>
      )
    }}
  />
))
