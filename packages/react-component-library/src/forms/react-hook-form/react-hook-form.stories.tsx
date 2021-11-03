/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form/dist/index.ie11'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import { CheckboxE } from '../../components/CheckboxE'
import { SwitchE, SwitchEOption } from '../../components/SwitchE'
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
}

export const ExampleReactHookForm: React.FC<unknown> = () => {
  const {
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
    },
  })

  const exampleSwitchValue = watch('exampleSwitch')

  const [formValues, setFormValues] = useState<FormValues>()

  const onSubmit = async (values: FormValues) => {
    await sleep(400)
    setFormValues(values)
  }

  useEffect(() => {
    register({ name: 'exampleSwitch' })
  }, [register])

  const handleSwitchEChange = (e: React.FormEvent<HTMLInputElement>) =>
    setValue('exampleSwitch', e.currentTarget.value)

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
