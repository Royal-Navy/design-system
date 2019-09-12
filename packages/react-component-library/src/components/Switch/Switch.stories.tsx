import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Field, Formik, Form } from 'formik'

import { OptionType } from '../../types/Switch'
import Switch from './Switch'
import ResponsiveSwitch from './index'
import FormikSwitch from './adapters/FormikSwitch'

const stories = storiesOf('Switch', module)

const options = [
  { name: 'Day', value: '1' },
  { name: 'Week', value: '2' },
  { name: 'Month', value: '3' },
  { name: 'Year', value: '4' },
]

stories.add('Default', () => (
  <Switch
    label="Date Range"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
))

stories.add('No legend', () => (
  <Switch
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
))

stories.add('Responsive', () => (
  <ResponsiveSwitch
    label="Date Range"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
  />
))

stories.add('Small', () => (
  <Switch
    label="Date Range"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
    size="small"
  />
))

stories.add('Large', () => (
  <Switch
    label="Date Range"
    options={options}
    onChange={(previous, active) => {
      console.log(previous, active)
    }}
    size="large"
  />
))

interface Data {
  'Date Range': string
}

const initialValues: Data = {
  'Date Range': 'Month:3',
}

const onSubmit = (data: Data): void => {
  action(`Form Submit ${JSON.stringify(data)}`)
}

stories.add('Formik', () => (
  <Formik initialValues={initialValues} onSubmit={onSubmit}>
    <Form>
      <Field
        name="Date Range"
        component={FormikSwitch}
        options={options}
        responsive
        onChange={(previous: OptionType, active: OptionType) => {
          console.log(previous, active)
        }}
      />
    </Form>
  </Formik>
))
