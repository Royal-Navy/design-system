import React, { useState } from 'react'

import { sleep } from '../../helpers'

type Validators<FormValues> = Partial<{
  [key in keyof FormValues]: (value: FormValues[key]) => boolean | string
}>

export type FormErrors<FormValues> = Partial<{
  [key in keyof FormValues]: boolean | string
}>

interface SyntheticFormEvent {
  currentTarget: {
    name: string
    value: string | string[] | number | number[] | Date | null
  }
}

export const useNativeForm = <FormValues>(
  initialState: FormValues,
  initialErrors: FormErrors<FormValues>,
  validation: Validators<FormValues>
) => {
  const [formErrors, setFormErrors] =
    useState<FormErrors<FormValues>>(initialErrors)
  const [formPayload, setFormPayload] = useState<FormValues | undefined>()
  const [formState, setFormState] = useState<FormValues>(initialState)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | SyntheticFormEvent
  ): void => {
    const { name, value } = e.currentTarget
    const validator = validation[name as keyof Validators<FormValues>]

    if (validator) {
      setFormErrors({
        ...formErrors,
        ...{ [name]: validator(value as FormValues[keyof FormValues]) },
      })
    }

    setFormState({
      ...formState,
      ...{
        [name]: value,
      },
    })
  }

  const handleCheckboxGroup = ({
    currentTarget: { name, value, checked },
  }: React.FormEvent<HTMLInputElement>): void => {
    let newValues = [...(formState[name as keyof FormValues] as string[])]

    if (checked && !newValues.includes(value)) {
      newValues.push(value)
    } else {
      newValues = newValues.filter((item: string) => item !== value)
    }

    handleChange({
      currentTarget: {
        name,
        value: newValues,
      },
    })
  }

  const handleRadioGroup = ({
    currentTarget: { name, value },
  }: React.FormEvent<HTMLInputElement>): void => {
    handleChange({
      currentTarget: {
        name,
        value,
      },
    })
  }

  const onSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    e.stopPropagation()

    setIsSubmitting(true)

    await sleep(400) // Simulate stubbed async action e.g. `fetch(...)`

    if (!Object.values(formErrors).some((error) => error)) {
      setFormPayload(formState)
    }

    setIsSubmitting(false)
  }

  return {
    formErrors,
    formPayload,
    formState,
    handleChange,
    handleCheckboxGroup,
    handleRadioGroup,
    isSubmitting,
    onSubmit,
  }
}
