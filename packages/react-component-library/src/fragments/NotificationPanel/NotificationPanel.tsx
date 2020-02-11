import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import {
  NOTIFICATION_PLACEMENT,
  NOTIFICATION_PLACEMENT_ARROW_POSITION_MAP,
  NOTIFICATION_CONTAINER_WIDTH,
} from './constants'

import { FloatingBox } from '../../primitives/FloatingBox'
import { Bell } from '../../icons'
import { useNotificationPanel } from './useNotificationPanel'
import { NotificationsProps } from './Notifications'

export interface NotificationPanelProps {
  buttonClassName?: string
  children: React.ReactElement<NotificationsProps>
  className?: string
  notificationPlacement?:
    | typeof NOTIFICATION_PLACEMENT.RIGHT
    | typeof NOTIFICATION_PLACEMENT.BELOW
  onShow?: () => void
  onHide?: () => void
  hasUnreadNotification?: boolean
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({
  buttonClassName = '',
  children,
  className = '',
  notificationPlacement = NOTIFICATION_PLACEMENT.RIGHT,
  onShow,
  onHide,
  hasUnreadNotification = false,
}) => {
  const notificationArrowPosition =
    NOTIFICATION_PLACEMENT_ARROW_POSITION_MAP[notificationPlacement]

  const {
    toggleNotifications,
    showNotifications,
    notificationPosition,
    node,
  } = useNotificationPanel(notificationPlacement, onShow, onHide)

  return (
    <div
      className={`rn-notification-panel ${className}`}
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
        {hasUnreadNotification && (
          <span
            className="rn-notification-panel__not-read"
            data-testid="not-read"
          />
        )}
      </button>

      <TransitionGroup className="rn-notification__transition-wrapper">
        {showNotifications && (
          <CSSTransition
            classNames="rn-notification"
            timeout={{ enter: 300, exit: 300 }}
          >
            <FloatingBox
              className="rn-notification-panel__container"
              {...notificationPosition}
              width={NOTIFICATION_CONTAINER_WIDTH}
              scheme="dark"
              position={notificationArrowPosition}
            >
              {children}
            </FloatingBox>
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  )
}

NotificationPanel.displayName = 'NotificationPanel'
