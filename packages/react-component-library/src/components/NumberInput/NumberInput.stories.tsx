import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import { IconBrightnessHigh } from '@royalnavy/icon-library'
import * as yup from 'yup'

import { Button } from '../Button'
import { NumberInput } from './NumberInput'
import { withFormik } from '../../enhancers/withFormik'
import { UNIT_POSITION } from './constants'

const stories = storiesOf('Number Input', module)
const examples = storiesOf('Number Input/Examples', module)

stories.add('Default', () => (
  <NumberInput name="number-input" onChange={action('onChange')} />
))

examples.add('Condensed', () => (
  <NumberInput isCondensed name="number-input" onChange={action('onChange')} />
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
  <NumberInput name="number-input" onChange={action('onChange')} value={10} />
))

examples.add('Unit', () => (
  <NumberInput
    name="number-input"
    onChange={action('onChange')}
    value={1000}
    unit="m&sup3;"
  />
))

examples.add('Unit before', () => (
  <NumberInput
    name="number-input"
    onChange={action('onChange')}
    value={1000}
    unit="&pound;"
    unitPosition={UNIT_POSITION.BEFORE}
  />
))

examples.add('Formik', () => {
  const NumberInputForm = () => {
    const errorText = 'Something went wrong!'

    const validationSchema = yup.object().shape({
      gold: yup.number().required(errorText),
    })

    const FormikNumberInput = withFormik(NumberInput)

    return (
      <Formik
        initialErrors={{ gold: errorText }}
        initialTouched={{ gold: true }}
        initialValues={{ age: 13, btc: 10 }}
        onSubmit={action('onSubmit')}
        validationSchema={validationSchema}
      >
        <Form>
          <Field component={FormikNumberInput} name="gold" label="Gold bars" />
          <Field component={FormikNumberInput} name="age" label="Age" />
          <Field
            className="is-valid"
            component={FormikNumberInput}
            name="btc"
            label="Bitcoins"
          />
          <Field
            className="is-invalid"
            component={FormikNumberInput}
            name="bottles"
            label="Bottles"
          />
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
