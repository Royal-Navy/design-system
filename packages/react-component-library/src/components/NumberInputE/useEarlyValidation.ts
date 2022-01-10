import React, { useCallback } from 'react'

import { areCharactersValid } from './validation'

export function useEarlyValidation(): {
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  handleBeforeInput: (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.CompositionEvent<HTMLInputElement>
  ) => void
} {
  /**
   * Block invalid input before the DOM is updated where possible (to
   * avoid the cursor jumping).
   *
   * Note: React simulates this event using other native events.
   */
  const handleBeforeInput = useCallback(
    (
      event:
        | React.FormEvent<HTMLInputElement>
        | React.CompositionEvent<HTMLInputElement>
    ) => {
      // Unfortunately, the event seems to be typed incorrectly at present
      // (without the data property)
      if (!('data' in event)) {
        return
      }

      // data could contain a single character, or something longer
      // in case of pasting. The text could be an insertion or a
      // replacement (if existing text was selected).
      const { data } = event

      if (!areCharactersValid(data)) {
        event.preventDefault()
        event.stopPropagation()
      }
    },
    []
  )

  /**
   * Block a second decimal point from being typed (before the DOM is
   * updated, to avoid the cursor jumping).
   */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const currentValue = event.currentTarget.value

      if (event.key === '.' && currentValue.includes('.')) {
        event.preventDefault()
        event.stopPropagation()
      }
    },
    []
  )

  return {
    handleBeforeInput,
    handleKeyDown,
  }
}
