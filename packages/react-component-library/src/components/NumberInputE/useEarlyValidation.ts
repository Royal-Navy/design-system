import React, { useCallback } from 'react'

import { isValueValid } from './validation'

/**
 * Given some text that is being entered in an input, work out what the
 * new value will be based on the cursor position ond selection.
 */
function getNewInputValue(input: HTMLInputElement, newText: string): string {
  const textBeforeSelection = input.value.substring(0, input.selectionStart)
  const textAfterSelection = input.value.substring(input.selectionEnd)
  return `${textBeforeSelection}${newText}${textAfterSelection}`
}

export function useEarlyValidation(isNegativeAllowed: boolean): {
  handleBeforeInput: (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.CompositionEvent<HTMLInputElement>
  ) => void
  handlePaste: (event: React.ClipboardEvent<HTMLInputElement>) => void
} {
  /**
   * Block invalid pastes before the DOM is updated (to
   * avoid the cursor jumping).
   *
   * Only needed for Firefox and IE.
   */
  const handlePaste = useCallback(
    (event: React.ClipboardEvent<HTMLInputElement>) => {
      const pastedText = event.clipboardData.getData('text')
      const newValue = getNewInputValue(event.currentTarget, pastedText)

      if (!isValueValid(newValue, isNegativeAllowed)) {
        event.preventDefault()
        event.stopPropagation()
      }
    },
    [isNegativeAllowed]
  )

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

      const newValue = getNewInputValue(event.currentTarget, data)

      if (!isValueValid(newValue, isNegativeAllowed)) {
        event.preventDefault()
        event.stopPropagation()
      }
    },
    [isNegativeAllowed]
  )

  return {
    handleBeforeInput,
    handlePaste,
  }
}
