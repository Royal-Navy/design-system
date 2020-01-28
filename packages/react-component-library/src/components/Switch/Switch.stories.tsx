import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { Field, Formik, Form } from 'formik'
import withFormik from '../../enhancers/withFormik'

import Switch from './Switch'
import ResponsiveSwitch from './index'

const stories = storiesOf('Switch', module)
const examples = storiesOf('Switch/Examples', module)

const options = [
  { label: 'Day', value: '1' },
  { label: 'Week', value: '2' },
  { label: 'Month', value: '3' },
  { label: 'Year', value: '4' },
]

stories.add('Default', () => (
  <Switch
    name="example-switch-field"
    label="Date Range"
    options={options}
    onChange={action('onChange')}
  />
))

examples.add('No legend', () => (
  <Switch
    name="example-switch-field"
    options={options}
    onChange={action('onChange')}
  />
))

examples.add('Responsive', () => (
  <ResponsiveSwitch
    name="example-switch-field"
    label="Date Range"
    options={options}
    onChange={action('onChange')}
  />
))

examples.add('Small', () => (
  <Switch
    name="example-switch-field"
    label="Date Range"
    options={options}
    onChange={action('onChange')}
    size="small"
  />
))

examples.add('Large', () => (
  <Switch
    name="example-switch-field"
    value=""
    label="Date Range"
    options={options}
    onChange={action('onChange')}
    size="large"
  />
))

examples.add('Selected value', () => (
  <Switch
    name="example-switch-field"
    options={options}
    onChange={action('onChange')}
    value="2"
  />
))

examples.add('Formik', () => {
  const SwitchForm = () => {
    interface Data {
      'example-switch-field': string
    }

    const initialValues: Data = {
      'example-switch-field': '3',
    }

    const FormikSwitch = withFormik(ResponsiveSwitch)

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={action('Submitted')}
        render={({ setFieldValue }) => {
          return (
            <Form>
              <Field
                name="example-switch-field"
                label="Date Range"
                component={FormikSwitch}
                options={options}
                onChange={(event: React.FormEvent<HTMLInputElement>) => {
                  setFieldValue(
                    'example-switch-field',
                    event.currentTarget.value
                  )
                  action('onChange')(event)
                }}
              />
            </Form>
          )
        }}
      />
    )
  }

  return <SwitchForm />
})
