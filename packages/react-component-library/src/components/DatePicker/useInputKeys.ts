import { useCallback, useState } from 'react'
import { addHours, isValid, parse } from 'date-fns'
import { DayPickerProps, ModifiersUtils } from 'react-day-picker'
import { isNil } from 'lodash'

type OnCompleteType = () => void

export function useInputKeys(
  datePickerFormat: string,
  disabledDays: DayPickerProps['disabledDays'],
  onComplete: OnCompleteType,
  onDayChange: (day?: Date) => void,
  setHasError: React.Dispatch<React.SetStateAction<boolean>>
): {
  checkNewDate: (value: string) => Date
  keyedValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void
  revertKeyedValue: () => void
} {
  const [keyedValue, setKeyedValue] = useState<string>()
  const revertKeyedValue = useCallback(() => setKeyedValue(null), [])

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyedValue(e.target.value)
  }

  function parseDate(value: string) {
    const date = parse(value, datePickerFormat, new Date())

    if (!isValid(date) || date.getFullYear() <= 999) {
      return null
    }

    return date
  }

  function checkNewDate(value: string | Date | null) {
    const parsedDate = typeof value === 'string' ? parseDate(value) : value

    if (parsedDate) {
      const newDate = addHours(parsedDate, 12)

      if (!ModifiersUtils.dayMatchesModifier(newDate, disabledDays)) {
        return newDate
      }
    }

    setHasError(true)
    return null
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): null => {
    setHasError(false)

    const isTabKey = e.keyCode === 9
    const { value } = e.target as HTMLInputElement

    if (isTabKey) {
      const parsedDate = parseDate(value)
      checkNewDate(parsedDate)
    }

    return null
  }

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setHasError(false)

    const isEscapeKey = e.keyCode === 27
    const isReturnKey = e.keyCode === 13
    const isTabKey = e.keyCode === 9

    if (isTabKey) {
      return null
    }

    if (isEscapeKey) {
      revertKeyedValue()
      return onComplete()
    }

    const { value } = e.target as HTMLInputElement
    const hasChanged = !isNil(keyedValue)
    const parsedDate = parseDate(value)

    if (isReturnKey) {
      checkNewDate(parsedDate)

      return onComplete()
    }

    if (parsedDate && hasChanged) {
      const newDate = checkNewDate(parsedDate)
      if (newDate) {
        onDayChange(newDate)
      }
    }

    return null
  }

  return {
    checkNewDate,
    keyedValue,
    onChange,
    onKeyDown,
    onKeyUp,
    revertKeyedValue,
  }
}
