import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

import { Field, Formik, Form } from 'formik'
import { withFormik } from '../../enhancers/withFormik'
import { Button } from '../Button'

import { ResponsiveSwitch, Switch, SwitchProps, SWITCH_SIZE } from '.'

export default {
  component: Switch,
  subcomponents: { ResponsiveSwitch },
  title: 'Switch',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const options = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
]

export const Default: Story<SwitchProps> = (props) => <Switch {...props} />

Default.args = {
  name: 'switch-default',
  options,
}

export const WithLegend: Story<SwitchProps> = (props) => (
  <Switch
    {...props}
    name="switch-legend"
    label="Example legend"
    options={options}
  />
)

WithLegend.storyName = 'With legend'

export const Responsive: Story<SwitchProps> = (props) => (
  <ResponsiveSwitch {...props} name="switch-responsive" options={options} />
)

Responsive.storyName = 'Responsive'

export const SelectedValue: Story<SwitchProps> = (props) => (
  <Switch {...props} name="switch-selected-value" options={options} value="2" />
)

SelectedValue.storyName = 'With value selected'

export const Small: Story<SwitchProps> = (props) => (
  <Switch
    {...props}
    name="switch-small"
    options={options}
    size={SWITCH_SIZE.SMALL}
  />
)

Small.storyName = 'Small'

export const Large: Story<SwitchProps> = (props) => (
  <Switch
    {...props}
    name="switch-large"
    options={options}
    size={SWITCH_SIZE.LARGE}
  />
)

Large.storyName = 'Large'

export const WithFormik: Story<SwitchProps> = (props) => {
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
      onSubmit={action('onSubmit')}
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
