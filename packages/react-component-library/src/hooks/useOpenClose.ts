import { useEffect, useState } from 'react'

export function useOpenClose<TEvent>(
  isOpen: boolean,
  onClose?: (event: TEvent) => void
) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  function handleOnClose(event: TEvent) {
    setOpen(false)

    if (onClose) onClose(event)
  }

  function toggle(event: TEvent) {
    const newOpen = !open
    setOpen(newOpen)

    if (!newOpen && onClose) onClose(event)
  }

  function handleOnFocus() {
    setOpen(true)
  }

  return {
    handleOnClose,
    handleOnFocus,
    open,
    setOpen,
    toggle,
  }
}
