import React, { useRef, useState } from 'react'

import { calculate } from './notificationPosition'
import { useDocumentClick } from '../../hooks'

function onShowNotificationsChange(
  showNotifications: boolean,
  onShow: () => void,
  onHide: () => void
) {
  if (showNotifications && onShow) {
    onShow()
  }

  if (!showNotifications && onHide) {
    onHide()
  }
}

export function useNotificationPanel(
  notificationPlacement: string,
  onShow: () => void,
  onHide: () => void
) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationPosition, setNotificationPosition] = useState()
  const node = useRef()

  useDocumentClick(node, () => {
    setShowNotifications(false)
  })

  function toggleNotifications(event: React.SyntheticEvent) {
    const element: any = event.currentTarget
    element.blur()

    setNotificationPosition(calculate[notificationPlacement](element))

    const newShowNotifications = !showNotifications
    setShowNotifications(newShowNotifications)

    onShowNotificationsChange(newShowNotifications, onShow, onHide)
  }

  return {
    toggleNotifications,
    showNotifications,
    notificationPosition,
    node,
  }
}
