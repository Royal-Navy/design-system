import React, { useRef, useState } from 'react'

import { calculate } from './sheetPosition'
import { useDocumentClick } from '../../../hooks'

function onShowSheetChange(
  showSheet: boolean,
  onShow: () => void,
  onHide: () => void
) {
  if (showSheet && onShow) {
    onShow()
  }

  if (!showSheet && onHide) {
    onHide()
  }
}

export function useSheet(
  placement: string,
  width: number,
  onShow?: () => void,
  onHide?: () => void
) {
  const [showSheet, setShowSheet] = useState(false)
  const [position, setPosition] = useState()
  const ref = useRef()

  useDocumentClick(ref, () => {
    setShowSheet(false)
  })

  function toggleSheet(event: React.SyntheticEvent) {
    const element: any = event.currentTarget
    element.blur()

    setPosition(calculate[placement](element, width))

    const newShowSheet = !showSheet
    setShowSheet(newShowSheet)

    onShowSheetChange(newShowSheet, onShow, onHide)
  }

  return {
    ref,
    position,
    showSheet,
    toggleSheet,
  }
}
