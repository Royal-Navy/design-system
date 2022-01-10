import React, { useState } from 'react'

import { sleep } from '../../helpers'

interface FormErrors {
  [key: string]: boolean
}

interface SyntheticFormEvent {
  currentTarget: {
    name: string
    value: string | string[] | number | number[]
  }
}

export const useNativeForm = <T>(
  initialState: T,
  initialErrors: FormErrors,
  validation: Record<string, (value: string) => boolean>
) => {
  const [formErrors, setFormErrors] = useState<FormErrors>(initialErrors)
  const [formPayload, setFormPayload] = useState<T | undefined>()
  const [formState, setFormState] = useState<T>(initialState)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | SyntheticFormEvent
  ): void => {
    const { name, value } = e.currentTarget

    if (validation[name]) {
      setFormErrors({
        ...formErrors,
        ...{ [name]: validation[name](String(value)) },
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
    let newValues = [...formState[name]]

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
        value: [value],
      },
    })
  }

  const onSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    e.stopPropagation()

    setIsSubmitting(true)

    await sleep(400) // Simulate stubbed async action e.g. `fetch(...)`

    if (!Object.values(formErrors).includes(true)) {
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
