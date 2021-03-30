import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Field, Formik, Form } from 'formik'
import { IconBrightnessHigh } from '@royalnavy/icon-library'
import * as yup from 'yup'

import { Button } from '../Button'
import { NumberInput } from './NumberInput'
import { withFormik } from '../../enhancers/withFormik'
import { UNIT_POSITION } from './constants'

const chromaticIgnore = { chromatic: { disable: true } }

export default { component: NumberInput, title: 'Number Input' } as Meta

export const Default = (props: any) => <NumberInput {...props} />

Default.args = {
  id: undefined,
  name: 'number-input-default',
  onChange: (e: React.SyntheticEvent) => console.log,
}

export const Condensed = () => (
  <NumberInput
    isCondensed
    name="number-input-condensed"
    onChange={(e: React.SyntheticEvent) => console.log}
  />
)

Condensed.storyName = 'Condensed'

export const Clearable = () => (
  <NumberInput
    canClear
    name="number-input-clearable"
    onChange={(e: React.SyntheticEvent) => console.log}
    value={10}
  />
)

Clearable.storyName = 'Clearable'

export const Disabled = () => (
  <NumberInput
    isDisabled
    name="number-input-disabled"
    onChange={(e: React.SyntheticEvent) => console.log}
  />
)

Disabled.storyName = 'Disabled'

export const WithFootnote = () => (
  <NumberInput
    footnote="Footnote"
    name="number-input-with-footnote"
    onChange={(e: React.SyntheticEvent) => console.log}
  />
)

WithFootnote.storyName = 'With footnote'

export const WithLabel = () => (
  <NumberInput
    label="Label"
    name="number-input-label"
    onChange={(e: React.SyntheticEvent) => console.log}
  />
)

WithLabel.storyName = 'With label'

export const Placeholder = () => (
  <NumberInput
    label="Label"
    name="number-input-placeholder"
    onChange={(e: React.SyntheticEvent) => console.log}
    placeholder="Placeholder"
  />
)

Placeholder.storyName = 'With placeholder'

export const StartAdornmentIcon = () => (
  <NumberInput
    name="number-input-start-adornment-icon"
    onChange={(e: React.SyntheticEvent) => console.log}
    startAdornment={<IconBrightnessHigh />}
  />
)

StartAdornmentIcon.storyName = 'With start adornment icon'

export const StartAdornmentText = () => (
  <NumberInput
    name="number-input-start-adornment-text"
    onChange={(e: React.SyntheticEvent) => console.log}
    startAdornment="Kts"
  />
)

StartAdornmentText.storyName = 'With start adornment text'

export const WithUnit = () => (
  <NumberInput
    name="number-input-unit"
    onChange={(e: React.SyntheticEvent) => console.log}
    value={1000}
    unit="m&sup3;"
  />
)

WithUnit.storyName = 'With unit'

export const WithUnitLabel = () => (
  <NumberInput
    label="Cost"
    name="number-input-unit-label"
    onChange={(e: React.SyntheticEvent) => console.log}
    value={1000}
    unit="m&sup3;"
  />
)

WithUnitLabel.storyName = 'With unit and label'

export const UnitBefore = () => (
  <NumberInput
    name="number-input-unit-before"
    onChange={(e: React.SyntheticEvent) => console.log}
    value={1000}
    unit="&pound;"
    unitPosition={UNIT_POSITION.BEFORE}
  />
)

UnitBefore.storyName = 'With unit before'

export const WithFormik = () => {
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
      onSubmit={console.log}
      validationSchema={validationSchema}
    >
      <Form>
        <Field component={FormikNumberInput} name="gold" label="Gold bars" />
        <Field component={FormikNumberInput} name="btc" label="Bitcoins" />
        <Button type="submit" variant="primary">
          Save
        </Button>
      </Form>
    </Formik>
  )
}

WithFormik.storyName = 'Formik'
