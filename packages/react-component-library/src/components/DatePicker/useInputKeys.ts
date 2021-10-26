import { useCallback, useState } from 'react'
import { addHours, isMatch, parse } from 'date-fns'
import { DayPickerProps, ModifiersUtils } from 'react-day-picker'
import { isNil } from 'lodash'

const INPUT_MASK = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/

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

  function checkNewDate(value: string) {
    if (INPUT_MASK.test(value) && isMatch(value, datePickerFormat)) {
      const parsedDate = parse(value, datePickerFormat, new Date())
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
      checkNewDate(value)
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

    if (isReturnKey) {
      checkNewDate(value)

      return onComplete()
    }

    if (INPUT_MASK.test(value) && hasChanged) {
      const newDate = checkNewDate(value)
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
