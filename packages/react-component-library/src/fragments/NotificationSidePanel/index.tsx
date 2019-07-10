import React, { useEffect, useRef, useState } from 'react'

import { Popover } from '../../components'
import { Bell } from '../../icons'

interface NotificationSidePanelProps {
  className?: string
  unreadNotification?: boolean
}

const BAR_WIDTH = 60
const POPOVER_WIDTH = 335

const NotificationSidePanel: React.FC<NotificationSidePanelProps> = ({
  children,
  className = '',
  unreadNotification,
}) => {
  const hasNotifications = children !== null
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationPos, setNotificationPos] = useState(0)
  const node = useRef()

  function documentClick(e: Event) {
    // workaround for undefined error in typescript
    const current = node.current || {
      contains: (target: any): boolean => target === null,
    }

    if (current.contains(e.target)) {
      return
    }

    setShowNotifications(false)
  }

  function toggleNotifications(e: React.SyntheticEvent) {
    const element: any = e.currentTarget
    element.blur()
    const elemRect = element.getBoundingClientRect()
    const y = window.innerHeight - elemRect.bottom

    setNotificationPos(y)
    setShowNotifications(!showNotifications)
  }

  useEffect(() => {
    document.addEventListener('mousedown', documentClick)

    return () => {
      document.removeEventListener('mousedown', documentClick)
    }
  }, [])

  return (
    <div ref={node}>
      <button
        className={`rn-notification-side__button ${className}`}
        onClick={toggleNotifications}
        type="button"
      >
        <Bell className="rn-notification-side__icon" />
        {hasNotifications && (
          <svg
            className="rn-notification-side__indicator"
            width="9px"
            height="9px"
            viewBox="0 0 9 9"
          >
            {unreadNotification && <circle cx="4.5" cy="4.5" r="4.5" />}
          </svg>
        )}
      </button>
      {showNotifications && (
        <Popover
          width={POPOVER_WIDTH}
          left={BAR_WIDTH - 8}
          bottom={notificationPos}
        >
          {children}
        </Popover>
      )}
    </div>
  )
}

NotificationSidePanel.displayName = 'NotificationSidePanel'

export default NotificationSidePanel
