import { useEffect, useRef, useState } from 'react'

import { calculate } from './sheetPosition'
import { useDocumentClick, useOpenClose } from '../../../hooks'

export function useSheet(
  placement: string,
  width: number,
  onShow?: () => void,
  onHide?: () => void
) {
  const { open, setOpen, toggle } = useOpenClose(false)
  const [position, setPosition] = useState()
  const ref = useRef()

  useDocumentClick(ref, () => {
    setOpen(false)
  })

  useEffect(() => {
    if (open && onShow) onShow()
    if (!open && onHide) onHide()
  }, [open])

  function toggleSheet(event: React.SyntheticEvent) {
    const element: any = event.currentTarget
    element.blur()

    setPosition(calculate[placement](element, width))

    toggle(event)
  }

  return {
    ref,
    position,
    toggleSheet,
    showSheet: open,
  }
}
