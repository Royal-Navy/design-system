import { isBefore, isValid, parseISO } from 'date-fns'
import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Formik, Field as FormikField, FieldProps } from 'formik'

import { TextInput } from '../../components/TextInput'
import { TextArea } from '../../components/TextArea'
import { Radio } from '../../components/Radio'
import { Checkbox } from '../../components/Checkbox'
import { Autocomplete, AutocompleteOption } from '../../components/Autocomplete'
import { Button } from '../../components/Button'
import { NumberInput } from '../../components/NumberInput'
import { DatePicker, DatePickerOnChangeData } from '../../components/DatePicker'
import { Select, SelectOption } from '../../components/Select'
import { Switch, SwitchOption } from '../../components/Switch'
import { RangeSlider } from '../../components/RangeSlider'
import { sleep } from '../../helpers'
import { Field } from '../../components/Field'
import { Fieldset } from '../../components/Fieldset'
import { SectionDivider } from '../../components/SectionDivider'
import { EMPTY_FORM_VALUES, PREPOPULATED_FORM_VALUES } from '../constants'
import { FormValues } from '../types'

const MINIMUM_DATE = parseISO('2022-01-01')

const Example: React.FC<{ initialValues: FormValues }> = ({
  initialValues,
}) => {
  const [formValues, setFormValues] = useState<FormValues>()

  return (
    <main>
      <Formik<FormValues>
        initialValues={initialValues}
        validate={({ email, exampleDatePicker }) => {
          const errors: Record<string, unknown> = {}

          if (!email) {
            errors.email = 'Required'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            errors.email = 'Invalid email address'
          }

          if (exampleDatePicker && !isValid(exampleDatePicker)) {
            errors.exampleDatePicker = 'Enter a valid date'
          }

          if (exampleDatePicker && isBefore(exampleDatePicker, MINIMUM_DATE)) {
            errors.exampleDatePicker = 'Enter a date on or after 1 January 2022'
          }

          return errors
        }}
        onSubmit={async (values: FormValues, { setSubmitting }) => {
          await sleep(400)
          setFormValues(values)
          setSubmitting(false)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <SectionDivider title="Example Form" />
            <FormikField name="email">
              {({ field, meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <TextInput
                      label="Email"
                      {...field}
                      data-testid="form-example-TextInput-email"
                    />
                  </Field>
                )
              }}
            </FormikField>
            <FormikField name="password">
              {({ field, meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <TextInput
                      type="password"
                      label="Password"
                      {...field}
                      data-testid="form-example-TextInput-password"
                    />
                  </Field>
                )
              }}
            </FormikField>
            <FormikField name="description">
              {({ field, meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <TextArea
                      label="Description"
                      {...field}
                      data-testid="form-example-TextArea-description"
                    />
                  </Field>
                )
              }}
            </FormikField>
            <Fieldset legend="Example checkbox selection">
              <FormikField
                name="exampleCheckbox"
                value="Option 1"
                type="checkbox"
              >
                {({ field }: FieldProps) => (
                  <Checkbox label="Option 1" {...field} />
                )}
              </FormikField>
              <FormikField
                name="exampleCheckbox"
                value="Option 2"
                type="checkbox"
              >
                {({ field }: FieldProps) => (
                  <Checkbox label="Option 2" {...field} />
                )}
              </FormikField>
              <FormikField
                name="exampleCheckbox"
                value="Option 3"
                type="checkbox"
              >
                {({ field }: FieldProps) => (
                  <Checkbox label="Option 3" {...field} />
                )}
              </FormikField>
            </Fieldset>
            <Fieldset legend="Example radio selection">
              <FormikField name="exampleRadio" value="Option 1" type="radio">
                {({ field }: FieldProps) => (
                  <Radio label="Option 1" {...field} />
                )}
              </FormikField>
              <FormikField name="exampleRadio" value="Option 2" type="radio">
                {({ field }: FieldProps) => (
                  <Radio label="Option 2" {...field} />
                )}
              </FormikField>
            </Fieldset>
            <FormikField name="exampleSwitch">
              {({ field: { name, value }, meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <Switch
                      label="Example switch selection"
                      name={name}
                      value={value}
                      data-testid="form-example-Switch"
                      onChange={(event: React.FormEvent<HTMLInputElement>) => {
                        setFieldValue(
                          'exampleSwitch',
                          event.currentTarget.value
                        )
                      }}
                    >
                      <SwitchOption label="One" value="1" />
                      <SwitchOption label="Two" value="2" />
                      <SwitchOption label="Three" value="3" />
                    </Switch>
                  </Field>
                )
              }}
            </FormikField>
            <FormikField name="exampleNumberInput">
              {({ field: { name, value }, meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <NumberInput
                      label="Example number input"
                      name={name}
                      value={value}
                      onChange={(
                        _:
                          | React.ChangeEvent<HTMLInputElement>
                          | React.MouseEvent<HTMLButtonElement>
                          | React.KeyboardEvent<HTMLInputElement>,
                        newValue: number | null
                      ) => {
                        setFieldValue('exampleNumberInput', newValue)
                      }}
                    />
                  </Field>
                )
              }}
            </FormikField>
            <FormikField name="exampleDatePicker">
              {({ field: { name, value }, meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <DatePicker
                      name={name}
                      disabledDays={{ before: MINIMUM_DATE }}
                      startDate={value}
                      onChange={({ startDate }: DatePickerOnChangeData) => {
                        setFieldValue('exampleDatePicker', startDate)
                      }}
                    />
                  </Field>
                )
              }}
            </FormikField>
            <FormikField name="exampleSelect">
              {({ field: { value }, meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <Select
                      value={value}
                      label="Example select"
                      onChange={(newValue: string | null) => {
                        setFieldValue('exampleSelect', newValue)
                      }}
                    >
                      <SelectOption value="one">One</SelectOption>
                      <SelectOption value="two">Two</SelectOption>
                      <SelectOption value="three">Three</SelectOption>
                      <SelectOption value="four">Four</SelectOption>
                    </Select>
                  </Field>
                )
              }}
            </FormikField>
            <FormikField name="exampleAutocomplete">
              {({ field: { value }, meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <Autocomplete
                      value={value}
                      label="Example autocomplete"
                      onChange={(newValue: string | null) => {
                        setFieldValue('exampleAutocomplete', newValue)
                      }}
                    >
                      <AutocompleteOption value="one">One</AutocompleteOption>
                      <AutocompleteOption value="two">Two</AutocompleteOption>
                      <AutocompleteOption value="three">
                        Three
                      </AutocompleteOption>
                      <AutocompleteOption value="four">Four</AutocompleteOption>
                    </Autocomplete>
                  </Field>
                )
              }}
            </FormikField>
            <FormikField name="exampleRangeSlider">
              {({ meta }: FieldProps) => {
                return (
                  <Field
                    hintText="Example hint text."
                    errors={[{ error: meta.touched && meta.error }]}
                  >
                    <RangeSlider
                      domain={[0, 40]}
                      mode={1}
                      values={values.exampleRangeSlider}
                      tracksLeft
                      step={2}
                      onChange={(newValues: ReadonlyArray<number>) => {
                        setFieldValue('exampleRangeSlider', newValues)
                      }}
                    />
                  </Field>
                )
              }}
            </FormikField>
            <Button
              type="submit"
              isDisabled={isSubmitting}
              data-testid="form-example-submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>

      <pre data-testid="form-example-values">
        {JSON.stringify(formValues, null, 2)}
      </pre>
    </main>
  )
}

export default {
  title: 'Forms/Usage/Formik',
  component: Example,
} as ComponentMeta<typeof Example>

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />

export const Default = Template.bind({})
Default.args = {
  initialValues: EMPTY_FORM_VALUES,
}

export const Prepopulated = Template.bind({})
Prepopulated.args = {
  initialValues: PREPOPULATED_FORM_VALUES,
}
