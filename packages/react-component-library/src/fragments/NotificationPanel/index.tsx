import React, { useEffect, useRef, useState } from 'react'

import { Popover } from '../../components'
import { Bell } from '../../icons'

export interface NotificationPanelProps {
  className?: string
  notificationPlacement?: 'right' | 'below'
  scheme?: 'dark' | 'light'
  unreadNotification?: boolean
}

const POPOVER_WIDTH = 335

export function getNotificationPositionOnRight(
  element: Element | any,
  elementWindow: any = window
): PositionType {
  const elemRect = element.getBoundingClientRect()
  const bottom =
    elementWindow.innerHeight - elemRect.bottom - 8 + window.scrollY
  const left = elemRect.left + elemRect.width + 18 + window.scrollX

  return { bottom, left }
}

export function getNotificationPositionBelow(
  element: Element | any
): PositionType {
  const elemRect = element.getBoundingClientRect()

  const left =
    elemRect.left - POPOVER_WIDTH + elemRect.width + 20 + +window.scrollX
  const top = elemRect.bottom + 12 + window.scrollY

  return { left, top }
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  children,
  className = '',
  notificationPlacement = 'right',
  scheme = 'dark',
  unreadNotification = false,
}) => {
  const notificationArrowPosition =
    notificationPlacement === 'right' ? 'left_bottom' : 'top_right'

  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationPosition, setNotificationPosition] = useState()
  const node = useRef()

  function documentClick(event: Event) {
    // workaround for undefined error in typescript
    const current = node.current || {
      contains: (target: any): boolean => target === null,
    }

    if (current.contains(event.target)) {
      return
    }

    setShowNotifications(false)
  }

  function toggleNotifications(event: React.SyntheticEvent) {
    const element: any = event.currentTarget
    element.blur()

    const position =
      notificationPlacement === 'right'
        ? getNotificationPositionOnRight(element)
        : getNotificationPositionBelow(element)

    setNotificationPosition(position)
    setShowNotifications(!showNotifications)
  }

  useEffect(() => {
    document.addEventListener('mousedown', documentClick)

    return () => {
      document.removeEventListener('mousedown', documentClick)
    }
  }, [])

  // if there is no notification content to show, don't show the component
  if (!children) {
    return null
  }

  return (
    <div
      className={`rn-notification-panel--${scheme} ${className}`}
      ref={node}
      data-testid="notification-panel"
    >
      <button
        className="rn-notification-panel__button"
        data-testid="notification-button"
        onClick={toggleNotifications}
        type="button"
      >
        <Bell className="rn-notification-panel__icon" />
        {unreadNotification && (
          <svg
            data-testid="notification-indicator"
            className="rn-notification-panel__indicator"
            width="9px"
            height="9px"
            viewBox="0 0 9 9"
          >
            <circle cx="4.5" cy="4.5" r="4.5" />
          </svg>
        )}
      </button>
      {showNotifications && (
        <Popover
          {...notificationPosition}
          position={notificationArrowPosition}
          scheme={scheme}
          width={POPOVER_WIDTH}
        >
          {children}
        </Popover>
      )}
    </div>
  )
}

NotificationPanel.displayName = 'NotificationPanel'

export default NotificationPanel
