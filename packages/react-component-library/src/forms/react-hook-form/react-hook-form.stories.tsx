/* eslint-disable no-console */
import { isBefore, isValid, parseISO } from 'date-fns'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form/dist/index.ie11'
import { ComponentMeta } from '@storybook/react'
import styled from 'styled-components'

import { TextInput } from '../../components/TextInput'
import { TextArea } from '../../components/TextArea'
import { Radio } from '../../components/Radio'
import { Autocomplete, AutocompleteOption } from '../../components/Autocomplete'
import { Checkbox } from '../../components/Checkbox'
import { DatePicker } from '../../components/DatePicker'
import { NumberInput } from '../../components/NumberInput'
import { Select, SelectOption } from '../../components/Select'
import { Switch, SwitchOption } from '../../components/Switch'
import { RangeSlider } from '../../components/RangeSlider'
import { Button } from '../../components/Button'
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

const StyledRangeSlider = styled(RangeSlider)`
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

  const handleSwitchChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue('exampleSwitch', e.currentTarget.value)

  const handleNumberInputChange = (
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
          <TextInput
            type="email"
            name="email"
            ref={register({ required: true })}
            label="Email"
            data-testid="form-example-TextInput-email"
          />
        </Field>
        <Field hintText="Example hint text.">
          <TextInput
            type="password"
            name="password"
            ref={register}
            label="Password"
            data-testid="form-example-TextInput-password"
          />
        </Field>
        <Field hintText="Example hint text.">
          <TextArea
            name="description"
            ref={register}
            label="Description"
            data-testid="form-example-TextArea-description"
          />
        </Field>
        <Fieldset legend="Example checkbox selection">
          <Checkbox
            name="exampleCheckbox"
            label="Option 1"
            ref={register}
            value="Option 1"
          />
          <Checkbox
            name="exampleCheckbox"
            label="Option 2"
            ref={register}
            value="Option 2"
          />
          <Checkbox
            name="exampleCheckbox"
            label="Option 3"
            ref={register}
            value="Option 3"
          />
        </Fieldset>
        <Fieldset legend="Example radio selection">
          <Radio
            name="exampleRadio"
            label="Option 1"
            ref={register}
            value="Option 1"
          />
          <Radio
            name="exampleRadio"
            label="Option 2"
            ref={register}
            value="Option 2"
          />
        </Fieldset>
        <Field hintText="Example hint text.">
          <Switch
            name="exampleSwitch"
            label="Example switch selection"
            onChange={handleSwitchChange}
            value={exampleSwitchValue}
            data-testid="form-example-Switch"
          >
            <SwitchOption label="One" value="1" />
            <SwitchOption label="Two" value="2" />
            <SwitchOption label="Three" value="3" />
          </Switch>
        </Field>
        <Field hintText="Example hint text.">
          <NumberInput
            name="exampleNumberInput"
            label="Example number input"
            onChange={handleNumberInputChange}
            value={exampleNumberInputValue}
            data-testid="form-example-NumberInput"
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
                <DatePicker
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
              <Select label="Example select" onChange={onChange} value={value}>
                <SelectOption value="one">One</SelectOption>
                <SelectOption value="two">Two</SelectOption>
                <SelectOption value="three">Three</SelectOption>
                <SelectOption value="four">Four</SelectOption>
              </Select>
            )}
          />
        </Field>
        <Field hintText="Example hint text.">
          <Controller
            control={control}
            name="exampleAutocomplete"
            render={({ onChange, value }) => (
              <Autocomplete
                label="Example autocomplete"
                onChange={onChange}
                value={value}
              >
                <AutocompleteOption value="one">One</AutocompleteOption>
                <AutocompleteOption value="two">Two</AutocompleteOption>
                <AutocompleteOption value="three">Three</AutocompleteOption>
                <AutocompleteOption value="four">Four</AutocompleteOption>
              </Autocomplete>
            )}
          />
        </Field>
        <Field hintText="Example hint text.">
          <Controller
            control={control}
            name="exampleRangeSlider"
            render={({ onChange, value }) => {
              return (
                <StyledRangeSlider
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
        <Button
          type="submit"
          data-testid="form-example-submit"
          isDisabled={isSubmitting}
        >
          Submit
        </Button>
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
