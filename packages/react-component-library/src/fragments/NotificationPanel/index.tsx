import React, { useEffect, useRef, useState } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { Popover } from '../../components'
import { Bell } from '../../icons'

export interface NotificationPanelProps {
  buttonClassName?: string
  className?: string
  notificationPlacement?: 'right' | 'below'
  onShow?: () => void
  onHide?: () => void
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
    elementWindow.innerHeight - elemRect.bottom - 8 + window.pageYOffset
  const left = elemRect.left + elemRect.width + 18 + window.pageXOffset

  return { bottom, left }
}

export function getNotificationPositionBelow(
  element: Element | any
): PositionType {
  const elemRect = element.getBoundingClientRect()

  const left =
    elemRect.left - POPOVER_WIDTH + elemRect.width + window.pageXOffset + 5
  const top = elemRect.bottom + 3 + window.pageYOffset

  return { left, top }
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  buttonClassName = '',
  children,
  className = '',
  notificationPlacement = 'right',
  onShow,
  onHide,
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

    const newShowState = !showNotifications

    if (newShowState === true && onShow) onShow()
    if (newShowState === false && onHide) onHide()

    setShowNotifications(newShowState)
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
      className={`rn-notification-panel rn-notification-panel--${scheme} ${className}`}
      ref={node}
      data-testid="notification-panel"
    >
      <button
        className={`rn-notification-panel__button ${buttonClassName}`}
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
      <ReactCSSTransitionGroup
        className="rn-notification__transition-wrapper"
        transitionName="rn-notification"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {showNotifications && (
          <Popover
            {...notificationPosition}
            position={notificationArrowPosition}
            scheme={scheme}
            width={POPOVER_WIDTH}
          >
            <>
              <header className="rn-notification-panel__header">
                <h2 className="rn-notification-panel__heading">
                  Notifications
                </h2>
                <button
                  type="button"
                  onClick={() => setShowNotifications(false)}
                  className="rn-notification-panel__close"
                >
                  <strong>X</strong> Close
                </button>
              </header>
              {children}
            </>
          </Popover>
        )}
      </ReactCSSTransitionGroup>
    </div>
  )
}

NotificationPanel.displayName = 'NotificationPanel'

export default NotificationPanel
