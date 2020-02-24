import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import { IconBrightnessHigh } from '@royalnavy/icon-library'

import { Button } from '../Button'
import { NumberInput } from './NumberInput'
import withFormik from '../../enhancers/withFormik'

const stories = storiesOf('Number Input', module)
const examples = storiesOf('Number Input/Examples', module)

stories.add('Default', () => (
  <NumberInput name="number-input" onChange={action('onChange')} />
))

examples.add('Disabled', () => (
  <NumberInput isDisabled name="number-input" onChange={action('onChange')} />
))

examples.add('Footnote', () => (
  <NumberInput
    footnote="Footnote"
    name="number-input"
    onChange={action('onChange')}
  />
))

examples.add('Label', () => (
  <NumberInput
    label="Label"
    name="number-input"
    onChange={action('onChange')}
  />
))

examples.add('Label and value', () => (
  <NumberInput
    label="Label"
    name="number-input"
    onChange={action('onChange')}
    value={10}
  />
))

examples.add('Placeholder', () => (
  <NumberInput
    label="Label"
    name="number-input"
    onChange={action('onChange')}
    placeholder="Placeholder"
  />
))

examples.add('Start adornment icon', () => (
  <NumberInput
    name="example-number-input"
    onChange={action('onChange')}
    startAdornment={<IconBrightnessHigh />}
  />
))

examples.add('Start adornment text', () => (
  <NumberInput
    name="example-number-input"
    onChange={action('onChange')}
    startAdornment="Kts"
  />
))

examples.add('Value', () => (
  <NumberInput
    name="number-input"
    onChange={action('onChange')}
    value={10}
  />
))

examples.add('Formik', () => {
  const NumberInputForm = () => {
    interface Data {
      age: number
      gold: number
    }

    const initialValues: Data = {
      age: 13,
      gold: 1,
    }

    const FormikNumberInput = withFormik(NumberInput)

    return (
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
    )
  }

  return <NumberInputForm />
})
