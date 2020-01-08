import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import React from 'react'
import { IconBrightnessHigh } from '@royalnavy/icon-library'
import withFormik from '../../enhancers/withFormik'
import { Button } from '../Button'
import { NumberInput } from './NumberInput'

const stories = storiesOf('Number Input', module)

interface Data {
  age: number
  gold: number
}

const initialValues: Data = {
  age: 13,
  gold: 1,
}

const FormikNumberInput = withFormik(NumberInput)

stories.add('Vanilla', () => (
  <div style={{ margin: 50 }}>
    <Formik initialValues={initialValues} onSubmit={action('onSubmit')}>
      <Form>
        <Field component={FormikNumberInput} name="gold" label="Gold bars" />
        <Field component={FormikNumberInput} name="age" label="Age" />
        <Field component={FormikNumberInput} name="age" label="Age" />

        <Button variant="secondary" onClick={action('Cancel')}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </Form>
    </Formik>
  </div>
))

stories.add('With start adornment icon', () => (
  <NumberInput
    name="example-number-input"
    label="Example"
    value={1}
    onChange={action('onChange')}
    startAdornment={<IconBrightnessHigh />}
  />
))

stories.add('With start adornment text', () => (
  <NumberInput
    name="example-number-input"
    label="Example"
    value={1}
    onChange={action('onChange')}
    startAdornment="Kts"
  />
))
