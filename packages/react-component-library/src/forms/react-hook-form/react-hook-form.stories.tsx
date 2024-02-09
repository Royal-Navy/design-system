/* eslint-disable no-console */
import { isBefore, isValid, parseISO } from 'date-fns'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form/dist/index.ie11'
import { ComponentMeta, ComponentStory } from '@storybook/react'
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
import { KeysWithValueType, sleep } from '../../helpers'
import { Field } from '../../components/Field'
import { SectionDivider } from '../../components/SectionDivider'
import { EMPTY_FORM_VALUES, PREPOPULATED_FORM_VALUES } from '../constants'
import { FormValues } from '../types'

const MINIMUM_DATE = parseISO('2022-01-01')

const StyledRangeSlider = styled(RangeSlider)`
  margin-top: 3rem;
`

const Example = ({ initialValues }: { initialValues: FormValues }) => {
  const {
    control,
    setValue,
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm({
    defaultValues: initialValues,
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
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
    newValue: number | null
  ) => setValue('exampleNumberInput', newValue)

  const handleCheckboxChange = (value: string, name: string) => {
    const values = getValues()
    const fieldValues = values[name as KeysWithValueType<FormValues, string[]>]

    if (fieldValues.includes(value)) {
      return fieldValues.filter((id: string) => id !== value)
    }

    return [...fieldValues, value]
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit, (err, e) => console.log(err, e))}>
        <SectionDivider title="Example Form" />
        <Field
          hintText="Example hint text."
          errors={[{ error: !!errors.email && 'Required' }]}
        >
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ onChange, value, name, ref }) => (
              <TextInput
                type="email"
                name={name}
                ref={ref}
                onChange={onChange}
                value={value}
                label="Email"
                data-testid="form-example-TextInput-email"
              />
            )}
          />
        </Field>
        <Field hintText="Example hint text.">
          <Controller
            control={control}
            name="password"
            render={({ onChange, value, name, ref }) => (
              <TextInput
                type="password"
                name={name}
                ref={ref}
                onChange={onChange}
                value={value}
                label="Password"
                data-testid="form-example-TextInput-password"
              />
            )}
          />
        </Field>
        <Field hintText="Example hint text.">
          <Controller
            control={control}
            name="description"
            render={({ onChange, value, name, ref }) => (
              <TextArea
                name={name}
                ref={ref}
                onChange={onChange}
                value={value}
                label="Description"
                data-testid="form-example-TextArea-description"
              />
            )}
          />
        </Field>
        <Fieldset legend="Example checkbox selection">
          <Controller
            control={control}
            name="exampleCheckbox"
            render={({ onChange, value, name, ref }) => (
              <Checkbox
                name={name}
                label="Option 1"
                value="Option 1"
                ref={ref}
                onChange={() =>
                  onChange(handleCheckboxChange('Option 1', name))
                }
                checked={Array.isArray(value) && value.includes('Option 1')}
              />
            )}
          />
          <Controller
            control={control}
            name="exampleCheckbox"
            render={({ onChange, value, name, ref }) => (
              <Checkbox
                name={name}
                label="Option 2"
                value="Option 2"
                ref={ref}
                onChange={() =>
                  onChange(handleCheckboxChange('Option 2', name))
                }
                checked={Array.isArray(value) && value.includes('Option 2')}
              />
            )}
          />
          <Controller
            control={control}
            name="exampleCheckbox"
            render={({ onChange, value, name, ref }) => (
              <Checkbox
                name={name}
                label="Option 3"
                value="Option 3"
                ref={ref}
                onChange={() =>
                  onChange(handleCheckboxChange('Option 3', name))
                }
                checked={Array.isArray(value) && value.includes('Option 3')}
              />
            )}
          />
        </Fieldset>
        <Fieldset legend="Example radio selection">
          <Controller
            control={control}
            name="exampleRadio"
            render={({ onChange, value, name, ref }) => (
              <Radio
                name={name}
                label="Option 1"
                value="Option 1"
                ref={ref}
                onChange={() => onChange('Option 1')}
                checked={value === 'Option 1'}
              />
            )}
          />
          <Controller
            control={control}
            name="exampleRadio"
            render={({ onChange, value, name, ref }) => (
              <Radio
                name={name}
                label="Option 2"
                value="Option 2"
                ref={ref}
                onChange={() => onChange('Option 2')}
                checked={value === 'Option 2'}
              />
            )}
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

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />

export const Default = Template.bind({})
Default.args = {
  initialValues: EMPTY_FORM_VALUES,
}

export const Prepopulated = Template.bind({})
Prepopulated.args = {
  initialValues: PREPOPULATED_FORM_VALUES,
}
