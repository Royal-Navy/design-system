import { useCallback } from 'react'

import { ESCAPE } from '../../utils/keyCodes'

export function useCloseOnEscape(handleOnClose: () => void): {
  handleDayPickerKeyDown: React.KeyboardEventHandler<HTMLDivElement>
} {
  const handleDayPickerKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.keyCode === ESCAPE) {
        handleOnClose()
        event.stopPropagation()
        event.preventDefault()
      }
    },
    [handleOnClose]
  )

  return { handleDayPickerKeyDown }
}
