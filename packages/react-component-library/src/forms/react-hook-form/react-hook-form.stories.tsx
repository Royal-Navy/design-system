/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form/dist/index.ie11'
import { Story, Meta } from '@storybook/react'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import { CheckboxE } from '../../components/CheckboxE'
import { NumberInputE } from '../../components/NumberInputE'
import { SwitchE, SwitchEOption } from '../../components/SwitchE'
import { RangeSliderE } from '../../components/RangeSliderE'
import { ButtonE } from '../../components/ButtonE'
import { Fieldset } from '../../components/Fieldset'
import { sleep } from '../../helpers'

export interface FormValues {
  email: string
  password: string
  description: string
  exampleCheckbox: string[]
  exampleRadio: string[]
  exampleSwitch: string
  exampleNumberInput: number
  exampleRangeSlider: number[]
}

export const ExampleReactHookForm: React.FC<unknown> = () => {
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
      exampleRadio: [],
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
    register({ name: 'exampleRangeSlider' })
  }, [register])

  const handleSwitchEChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue('exampleSwitch', e.currentTarget.value)

  const handleNumberInputEChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>,
    newValue: number
  ) => setValue('exampleNumberInput', newValue)

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit, (err, e) => console.log(err, e))}>
        <TextInputE
          type="email"
          name="email"
          ref={register({ required: true })}
          label="Email"
          isInvalid={!!errors.email}
          data-testid="form-example-TextInputE-email"
        />
        {errors.email && <span>Required</span>}
        <TextInputE
          type="password"
          name="password"
          ref={register}
          label="Password"
          data-testid="form-example-TextInputE-password"
        />
        <TextAreaE
          name="description"
          ref={register}
          label="Description"
          data-testid="form-example-TextAreaE-description"
        />
        <Fieldset>
          <legend>Example checkbox selection</legend>
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
        <Fieldset>
          <legend>Example radio selection</legend>
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
        <NumberInputE
          name="exampleNumberInput"
          label="Example number input"
          onChange={handleNumberInputEChange}
          value={exampleNumberInputValue}
          data-testid="form-example-NumberInputE"
        />
        <Controller
          control={control}
          name="exampleRangeSlider"
          render={({ onChange, value }) => {
            return (
              <RangeSliderE
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
  title: 'Forms/react-hook-form',
  component: ExampleReactHookForm,
} as Meta

export const Default: Story<unknown> = () => <ExampleReactHookForm />
