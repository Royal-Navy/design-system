/* eslint-disable no-console */
import { isBefore, isValid, parseISO } from 'date-fns'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form/dist/index.ie11'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import {
  AutocompleteE,
  AutocompleteEOption,
} from '../../components/AutocompleteE'
import { CheckboxE } from '../../components/CheckboxE'
import { DatePickerE } from '../../components/DatePickerE'
import { NumberInputE } from '../../components/NumberInputE'
import { SelectE, SelectEOption } from '../../components/SelectE'
import { SwitchE, SwitchEOption } from '../../components/SwitchE'
import { RangeSliderE } from '../../components/RangeSliderE'
import { ButtonE } from '../../components/ButtonE'
import { Fieldset } from '../../components/Fieldset'
import { sleep } from '../../helpers'
import { Field } from '../../components/Field'
import { SectionDivider } from '../../components/SectionDivider'

export interface FormValues {
  email: string
  password: string
  description: string
  exampleCheckbox: string[]
  exampleDatePicker: Date | null
  exampleRadio: string[]
  exampleSwitch: string
  exampleNumberInput: number
  exampleSelect: string | null
  exampleAutocomplete: null
  exampleRangeSlider: number[]
}

const MINIMUM_DATE = parseISO('2022-01-01')

const StyledRangeSliderE = styled(RangeSliderE)`
  margin-top: 3rem;
`

export const Example: React.FC<unknown> = () => {
  const {
    control,
    setValue,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      description: '',
      exampleCheckbox: [],
      exampleDatePicker: null,
      exampleRadio: [],
      exampleSelect: null,
      exampleSwitch: '',
      exampleNumberInput: null,
      exampleRangeSlider: [20],
    },
  })

  const exampleSwitchValue = watch('exampleSwitch')
  const exampleNumberInputValue = watch('exampleNumberInput')

  const [formValues, setFormValues] = useState<FormValues>()

  const onSubmit = async (values: FormValues) => {
    await sleep(400)
    setFormValues(values)
  }

  useEffect(() => {
    register({ name: 'exampleSwitch' })
    register({ name: 'exampleNumberInput' })
  }, [register])

  const handleSwitchEChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue('exampleSwitch', e.currentTarget.value)

  const handleNumberInputEChange = (
    _:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>,
    newValue: number | null
  ) => setValue('exampleNumberInput', newValue)

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit, (err, e) => console.log(err, e))}>
        <SectionDivider title="Example Form" />
        <Field
          hintText="Example hint text."
          errors={[{ error: !!errors.email && 'Required' }]}
        >
          <TextInputE
            type="email"
            name="email"
            ref={register({ required: true })}
            label="Email"
            data-testid="form-example-TextInputE-email"
          />
        </Field>
        <Field hintText="Example hint text.">
          <TextInputE
            type="password"
            name="password"
            ref={register}
            label="Password"
            data-testid="form-example-TextInputE-password"
          />
        </Field>
        <Field hintText="Example hint text.">
          <TextAreaE
            name="description"
            ref={register}
            label="Description"
            data-testid="form-example-TextAreaE-description"
          />
        </Field>
        <Fieldset legend="Example checkbox selection">
          <CheckboxE
            name="exampleCheckbox"
            label="Option 1"
            ref={register}
            value="Option 1"
          />
          <CheckboxE
            name="exampleCheckbox"
            label="Option 2"
            ref={register}
            value="Option 2"
          />
          <CheckboxE
            name="exampleCheckbox"
            label="Option 3"
            ref={register}
            value="Option 3"
          />
        </Fieldset>
        <Fieldset legend="Example radio selection">
          <RadioE
            name="exampleRadio"
            label="Option 1"
            ref={register}
            value="Option 1"
          />
          <RadioE
            name="exampleRadio"
            label="Option 2"
            ref={register}
            value="Option 2"
          />
        </Fieldset>
        <Field hintText="Example hint text.">
          <SwitchE
            name="exampleSwitch"
            label="Example switch selection"
            onChange={handleSwitchEChange}
            value={exampleSwitchValue}
            data-testid="form-example-SwitchE"
          >
            <SwitchEOption label="One" value="1" />
            <SwitchEOption label="Two" value="2" />
            <SwitchEOption label="Three" value="3" />
          </SwitchE>
        </Field>
        <Field hintText="Example hint text.">
          <NumberInputE
            name="exampleNumberInput"
            label="Example number input"
            onChange={handleNumberInputEChange}
            value={exampleNumberInputValue}
            data-testid="form-example-NumberInputE"
          />
        </Field>
        <Field
          hintText="Example hint text."
          errors={[
            {
              error:
                errors.exampleDatePicker && errors.exampleDatePicker.message,
            },
          ]}
        >
          <Controller
            control={control}
            name="exampleDatePicker"
            rules={{
              validate: (value) => {
                if (value && !isValid(value)) {
                  return 'Enter a valid date'
                }

                if (isBefore(value, MINIMUM_DATE)) {
                  return 'Enter a date on or after 1 January 2022'
                }

                return true
              },
            }}
            render={({ onChange, value }) => {
              return (
                <DatePickerE
                  disabledDays={{ before: MINIMUM_DATE }}
                  onChange={({ startDate }) => {
                    onChange(startDate)
                  }}
                  startDate={value}
                />
              )
            }}
          />
        </Field>
        <Field hintText="Example hint text.">
          <Controller
            control={control}
            name="exampleSelect"
            render={({ onChange, value }) => (
              <SelectE label="Example select" onChange={onChange} value={value}>
                <SelectEOption value="one">One</SelectEOption>
                <SelectEOption value="two">Two</SelectEOption>
                <SelectEOption value="three">Three</SelectEOption>
                <SelectEOption value="four">Four</SelectEOption>
              </SelectE>
            )}
          />
        </Field>
        <Field hintText="Example hint text.">
          <Controller
            control={control}
            name="exampleAutocomplete"
            render={({ onChange, value }) => (
              <AutocompleteE
                label="Example autocomplete"
                onChange={onChange}
                value={value}
              >
                <AutocompleteEOption value="one">One</AutocompleteEOption>
                <AutocompleteEOption value="two">Two</AutocompleteEOption>
                <AutocompleteEOption value="three">Three</AutocompleteEOption>
                <AutocompleteEOption value="four">Four</AutocompleteEOption>
              </AutocompleteE>
            )}
          />
        </Field>
        <Field hintText="Example hint text.">
          <Controller
            control={control}
            name="exampleRangeSlider"
            render={({ onChange, value }) => {
              return (
                <StyledRangeSliderE
                  onChange={onChange}
                  values={value}
                  domain={[0, 40]}
                  mode={1}
                  tracksLeft
                  step={2}
                />
              )
            }}
          />
        </Field>
        <ButtonE
          type="submit"
          data-testid="form-example-submit"
          isDisabled={isSubmitting}
        >
          Submit
        </ButtonE>
      </form>

      <pre data-testid="form-example-values">
        {JSON.stringify(formValues, null, 2)}
      </pre>
    </main>
  )
}

export default {
  title: 'Forms/Usage/react-hook-form',
  component: Example,
} as ComponentMeta<typeof Example>
