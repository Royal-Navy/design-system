import React, { KeyboardEventHandler, useCallback } from 'react'
import { Decimal } from 'decimal.js'
import { cloneDeep, set } from 'lodash'

const KEY_ARROW_UP = 'ArrowUp'
const KEY_ARROW_DOWN = 'ArrowDown'

export const useInputKeys = (
  step: number,
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void
): {
  handleKeyDown: KeyboardEventHandler<HTMLInputElement>
} => {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const {
        key,
        currentTarget: { value },
      } = event

      if (![KEY_ARROW_UP, KEY_ARROW_DOWN].includes(key)) {
        return
      }

      event.preventDefault()

      if (value && !Number.isFinite(parseFloat(value))) {
        return
      }

      const decimal = new Decimal(value || 0)

      const newEvent = cloneDeep(event)

      set(
        newEvent,
        'currentTarget.value',
        String(key === KEY_ARROW_UP ? decimal.plus(step) : decimal.minus(step))
      )

      onChange(newEvent)
    },
    [step, onChange]
  )

  return {
    handleKeyDown,
  }
}
