import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import { IconBrightnessHigh } from '@defencedigital/icon-library'
import * as yup from 'yup'

import { Button } from '../Button'
import { NumberInputE, NumberInputProps } from './NumberInputE'
import { withFormik } from '../../enhancers/withFormik'
import { UNIT_POSITION } from './constants'

const chromaticIgnore = { chromatic: { disable: true } }

export default {
  component: NumberInputE,
  title: 'Number Input',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<NumberInputProps> = (props) => (
  <NumberInputE {...props} />
)

Default.args = {
  id: undefined,
  name: 'number-input-default',
}

export const Condensed: Story<NumberInputProps> = (props) => (
  <NumberInputE {...props} isCondensed name="number-input-condensed" />
)

Condensed.storyName = 'Condensed'

export const Disabled: Story<NumberInputProps> = (props) => (
  <NumberInputE {...props} isDisabled name="number-input-disabled" />
)

Disabled.storyName = 'Disabled'

export const WithFootnote: Story<NumberInputProps> = (props) => (
  <NumberInputE
    {...props}
    footnote="Footnote"
    name="number-input-with-footnote"
  />
)

WithFootnote.storyName = 'With footnote'

export const WithLabel: Story<NumberInputProps> = (props) => (
  <NumberInputE {...props} label="Label" name="number-input-label" />
)

WithLabel.storyName = 'With label'

export const StartAdornmentIcon: Story<NumberInputProps> = (props) => (
  <NumberInputE
    {...props}
    name="number-input-start-adornment-icon"
    startAdornment={<IconBrightnessHigh />}
  />
)

StartAdornmentIcon.storyName = 'With start adornment icon'

export const StartAdornmentText: Story<NumberInputProps> = (props) => (
  <NumberInputE
    {...props}
    name="number-input-start-adornment-text"
    startAdornment="Kts"
  />
)

StartAdornmentText.storyName = 'With start adornment text'

export const WithUnit: Story<NumberInputProps> = (props) => (
  <NumberInputE
    {...props}
    name="number-input-unit"
    value={1000}
    unit="m&sup3;"
  />
)

WithUnit.storyName = 'With unit'
WithUnit.parameters = chromaticIgnore

export const WithUnitLabel: Story<NumberInputProps> = (props) => (
  <NumberInputE
    {...props}
    label="Cost"
    name="number-input-unit-label"
    value={1000}
    unit="m&sup3;"
  />
)

WithUnitLabel.storyName = 'With unit and label'
WithUnitLabel.parameters = chromaticIgnore

export const UnitBefore: Story<NumberInputProps> = (props) => (
  <NumberInputE
    {...props}
    name="number-input-unit-before"
    value={1000}
    unit="&pound;"
    unitPosition={UNIT_POSITION.BEFORE}
  />
)

UnitBefore.storyName = 'With unit before'

export const WithFormik: Story<NumberInputProps> = (props) => {
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
        <Field component={FormikNumberInput} name="btc" label="Bitcoins" />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Formik>
  )
}

WithFormik.storyName = 'Formik'
