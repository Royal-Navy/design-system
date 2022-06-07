import { isNil } from 'lodash'
import React, { useCallback } from 'react'

import { canCommit, isValueValid } from './validation'

export function useChangeHandlers(
  isNegativeAllowed: boolean,
  min: number | undefined,
  max: number | undefined,
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
    newValue: number | null
  ) => void,
  setCommittedValue: React.Dispatch<React.SetStateAction<string | null>>
): {
  handleButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    newValue: string
  ) => void
  handleInputChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
} {
  const handleInputChange = useCallback(
    (
      event:
        | React.ChangeEvent<HTMLInputElement>
        | React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (!isValueValid(event.currentTarget.value, isNegativeAllowed)) {
        return
      }

      const newValue = event.currentTarget.value || null

      if (!newValue || canCommit(newValue, min, max)) {
        setCommittedValue(newValue)
        onChange(event, isNil(newValue) ? null : Number(newValue))
      }
    },
    [isNegativeAllowed, min, max, setCommittedValue, onChange]
  )

  const handleButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, newValue: string) => {
      if (canCommit(newValue, min, max)) {
        setCommittedValue(newValue)
        onChange(event, Number(newValue))
      }
    },
    [min, max, onChange, setCommittedValue]
  )

  return {
    handleButtonClick,
    handleInputChange,
  }
}
