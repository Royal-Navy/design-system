import { useCallback, useState } from 'react'
import { addHours, isValid, parse } from 'date-fns'
import { DayPickerProps, ModifiersUtils } from 'react-day-picker'
import { isNil } from 'lodash'
import { ESCAPE, RETURN, TAB } from '../../utils/keyCodes'

export function useInputKeys(
  datePickerFormat: string,
  disabledDays: DayPickerProps['disabledDays'],
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

    const { value } = e.target as HTMLInputElement

    if (e.keyCode === TAB) {
      const parsedDate = parseDate(value)
      checkNewDate(parsedDate)
    }

    return null
  }

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setHasError(false)

    if (e.keyCode === TAB) {
      return
    }

    if (e.keyCode === ESCAPE) {
      revertKeyedValue()
      return
    }

    const { value } = e.target as HTMLInputElement
    const hasChanged = !isNil(keyedValue)
    const parsedDate = parseDate(value)

    if (e.keyCode === RETURN) {
      checkNewDate(parsedDate)
      return
    }

    if (parsedDate && hasChanged) {
      const newDate = checkNewDate(parsedDate)
      if (newDate) {
        onDayChange(newDate)
      }
    }
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
