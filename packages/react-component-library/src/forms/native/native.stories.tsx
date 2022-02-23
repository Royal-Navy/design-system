import { isBefore, isValid, parseISO } from 'date-fns'
import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

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
import { FormErrors, useNativeForm } from './useNativeForm'
import { Field } from '../../components/Field'
import { SectionDivider } from '../../components/SectionDivider'
import { EMPTY_FORM_VALUES, PREPOPULATED_FORM_VALUES } from '../constants'
import { FormValues } from '../types'

const MINIMUM_DATE = parseISO('2022-01-01')

const Example: React.FC<{
  initialValues: FormValues
  initialErrors?: FormErrors<FormValues>
}> = ({ initialValues, initialErrors = {} }) => {
  const {
    formErrors,
    formPayload,
    formState,
    handleChange,
    handleCheckboxGroup,
    handleRadioGroup,
    isSubmitting,
    onSubmit,
  } = useNativeForm<FormValues>(initialValues, initialErrors, {
    email: (value: string): boolean => !value,
    exampleDatePicker: (value) => {
      if (value && !isValid(value)) {
        return 'Enter a valid date'
      }

      if (value && isBefore(value, MINIMUM_DATE)) {
        return 'Enter a date on or after 1 January 2022'
      }

      return false
    },
    // ...
  })

  return (
    <main>
      <form onSubmit={onSubmit}>
        <SectionDivider title="Example Form" />
        <Field
          hintText="Example hint text."
          errors={[{ error: formErrors.email && 'Required' }]}
        >
          <TextInput
            type="email"
            name="email"
            label="Email"
            value={formState.email}
            onChange={handleChange}
            data-testid="form-example-TextInput-email"
          />
        </Field>
        <Field hintText="Example hint text.">
          <TextInput
            type="password"
            name="password"
            label="Password"
            value={formState.password}
            onChange={handleChange}
            data-testid="form-example-TextInput-password"
          />
        </Field>
        <Field hintText="Example hint text.">
          <TextArea
            name="description"
            label="Description"
            value={formState.description}
            onChange={handleChange}
            data-testid="form-example-TextArea-description"
          />
        </Field>
        <Fieldset legend="Example checkbox selection">
          <Checkbox
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 1"
            value="Option 1"
          />
          <Checkbox
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 2"
            value="Option 2"
          />
          <Checkbox
            onChange={handleCheckboxGroup}
            name="exampleCheckbox"
            label="Option 3"
            value="Option 3"
          />
        </Fieldset>
        <Fieldset legend="Example radio selection">
          <Radio
            onChange={handleRadioGroup}
            name="exampleRadio"
            label="Option 1"
            value="Option 1"
          />
          <Radio
            onChange={handleRadioGroup}
            name="exampleRadio"
            label="Option 2"
            value="Option 2"
          />
        </Fieldset>
        <Field hintText="Example hint text.">
          <Switch
            name="exampleSwitch"
            label="Example switch selection"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              handleChange({
                currentTarget: {
                  name: 'exampleSwitch',
                  value: e.currentTarget.value,
                },
              })
            }
            value={formState.exampleSwitch}
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
            onChange={(
              _:
                | React.ChangeEvent<HTMLInputElement>
                | React.MouseEvent<HTMLButtonElement>,
              newValue: number | null
            ) => {
              handleChange({
                currentTarget: {
                  name: 'exampleNumberInput',
                  value: newValue,
                },
              })
            }}
            value={formState.exampleNumberInput}
            data-testid="form-example-NumberInput"
          />
        </Field>
        <Field
          hintText="Example hint text."
          errors={[{ error: formErrors.exampleDatePicker }]}
        >
          <DatePicker
            disabledDays={{ before: MINIMUM_DATE }}
            onChange={({ startDate }) => {
              handleChange({
                currentTarget: {
                  name: 'exampleDatePicker',
                  value: startDate,
                },
              })
            }}
            startDate={formState.exampleDatePicker}
          />
        </Field>
        <Field hintText="Example hint text.">
          <Select
            label="Example select"
            onChange={(value) => {
              handleChange({
                currentTarget: {
                  name: 'exampleSelect',
                  value,
                },
              })
            }}
            value={formState.exampleSelect}
          >
            <SelectOption value="one">One</SelectOption>
            <SelectOption value="two">Two</SelectOption>
            <SelectOption value="three">Three</SelectOption>
            <SelectOption value="four">Four</SelectOption>
          </Select>
        </Field>
        <Field hintText="Example hint text.">
          <Autocomplete
            label="Example autocomplete"
            onChange={(value) => {
              handleChange({
                currentTarget: {
                  name: 'exampleAutocomplete',
                  value,
                },
              })
            }}
            value={formState.exampleAutocomplete}
          >
            <AutocompleteOption value="one">One</AutocompleteOption>
            <AutocompleteOption value="two">Two</AutocompleteOption>
            <AutocompleteOption value="three">Three</AutocompleteOption>
            <AutocompleteOption value="four">Four</AutocompleteOption>
          </Autocomplete>
        </Field>
        <Field hintText="Example hint text.">
          <RangeSlider
            onChange={(values: ReadonlyArray<number>) => {
              handleChange({
                currentTarget: {
                  name: 'exampleRangeSlider',
                  value: values as [],
                },
              })
            }}
            values={formState.exampleRangeSlider}
            domain={[0, 40]}
            mode={1}
            tracksLeft
            step={2}
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
        {JSON.stringify(formPayload, null, 2)}
      </pre>
    </main>
  )
}

export default {
  title: 'Forms/Usage/Native',
  component: Example,
} as ComponentMeta<typeof Example>

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />

export const Default = Template.bind({})
Default.args = {
  initialValues: EMPTY_FORM_VALUES,
  initialErrors: {
    email: true,
  },
}

export const Prepopulated = Template.bind({})
Prepopulated.args = {
  initialValues: PREPOPULATED_FORM_VALUES,
}
