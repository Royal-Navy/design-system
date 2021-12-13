import { addHours, isValid, parse } from 'date-fns'
import { useCallback } from 'react'

import { StateObject } from './types'
import { formatDatesForInput } from './formatDatesForInput'
import { RETURN } from '../../utils/keyCodes'

function parseDate(datePickerFormat: string, value: string) {
  if (!value) {
    return null
  }

  const date = parse(value, datePickerFormat, new Date())

  if (!isValid(date) || date.getFullYear() <= 999) {
    return new Date(NaN)
  }

  return addHours(date, 12)
}

export function useInput(
  datePickerFormat: string,
  isRange: boolean,
  handleDayClick: (date: Date) => void,
  state: StateObject,
  setHasError: React.Dispatch<React.SetStateAction<boolean>>,
  setInputValue: React.Dispatch<React.SetStateAction<string>>
) {
  const { from } = state

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (isRange || event.keyCode !== RETURN) {
        return
      }

      if (isValid(from)) {
        setInputValue(formatDatesForInput(from, null, datePickerFormat))
      }
    },
    [datePickerFormat, from, isRange, setInputValue]
  )

  const handleInputBlur = useCallback(() => {
    if (isRange) {
      return
    }

    if (isValid(from)) {
      setInputValue(formatDatesForInput(from, null, datePickerFormat))
    }

    setHasError(from && !isValid(from))
  }, [datePickerFormat, from, isRange, setHasError, setInputValue])

  const handleInputChange = useCallback(
    (event) => {
      if (isRange) {
        return
      }

      setInputValue(event.currentTarget.value)
      const date = parseDate(datePickerFormat, event.currentTarget.value)
      handleDayClick(date)

      if (isValid(date)) {
        setHasError(false)
      }
    },
    [isRange, datePickerFormat, handleDayClick, setHasError, setInputValue]
  )

  return {
    handleKeyDown,
    handleInputBlur,
    handleInputChange,
  }
}
