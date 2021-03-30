import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Field, Formik, Form } from 'formik'
import { withFormik } from '../../enhancers/withFormik'
import { Button } from '../Button'

import { ResponsiveSwitch, Switch, SWITCH_SIZE } from '.'

export default {
  component: Switch,
  subcomponents: { ResponsiveSwitch },
  title: 'Switch',
} as Meta

const options = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
]

export const Default = (props: any) => <Switch {...props} />

Default.args = {
  name: 'switch-default',
  options,
  onChange: (e: React.SyntheticEvent) => console.log,
}

export const WithLegend = () => (
  <Switch
    name="switch-legend"
    label="Example legend"
    options={options}
    onChange={(e: React.SyntheticEvent) => console.log}
  />
)

WithLegend.storyName = 'With legend'

export const Responsive = () => (
  <ResponsiveSwitch
    name="switch-responsive"
    options={options}
    onChange={(e: React.SyntheticEvent) => console.log}
  />
)

Responsive.storyName = 'Responsive'

export const SelectedValue = () => (
  <Switch
    name="switch-selected-value"
    options={options}
    onChange={(e: React.SyntheticEvent) => console.log}
    value="2"
  />
)

SelectedValue.storyName = 'With value selected'

export const Small = () => (
  <Switch
    name="switch-small"
    options={options}
    onChange={(e: React.SyntheticEvent) => console.log}
    size={SWITCH_SIZE.SMALL}
  />
)

Small.storyName = 'Small'

export const Large = () => (
  <Switch
    name="switch-large"
    options={options}
    onChange={(e: React.SyntheticEvent) => console.log}
    size={SWITCH_SIZE.LARGE}
  />
)

Large.storyName = 'Large'

export const WithFormik = () => {
  interface Data {
    'switch-formik': string
  }

  const initialValues: Data = {
    'switch-formik': '3',
  }

  const FormikSwitch = withFormik(ResponsiveSwitch)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={console.log}
      render={({ setFieldValue }) => {
        return (
          <Form>
            <Field
              name="switch-formik"
              component={FormikSwitch}
              options={options}
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                setFieldValue('example-switch-field', event.currentTarget.value)
                console.log(event)
              }}
            />
            <br />
            <Button type="submit">Submit</Button>
          </Form>
        )
      }}
    />
  )
}

WithFormik.storyName = 'Formik'
