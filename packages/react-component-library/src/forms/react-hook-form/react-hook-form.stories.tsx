/* eslint-disable no-console */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form/dist/index.ie11'
import { Story, Meta } from '@storybook/react/types-6-0'

import { TextInputE } from '../../components/TextInputE'
import { TextAreaE } from '../../components/TextAreaE'
import { RadioE } from '../../components/RadioE'
import { CheckboxE } from '../../components/CheckboxE'
import { ButtonE } from '../../components/ButtonE'
import { Fieldset } from '../../components/Fieldset'
import { sleep } from '../../helpers'

export interface FormValues {
  email: string
  password: string
  description: string
  exampleCheckbox: string[]
  exampleRadio: string[]
}

export const ExampleReactHookForm: React.FC<unknown> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      description: '',
      exampleCheckbox: [],
      exampleRadio: [],
    },
  })

  const [formValues, setFormValues] = useState<FormValues>()

  const onSubmit = async (values: FormValues) => {
    await sleep(400)
    setFormValues(values)
  }

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
