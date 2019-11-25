import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import {
  NOTIFICATION_PLACEMENT,
  NOTIFICATION_PLACEMENT_ARROW_POSITION_MAP,
  POPOVER_WIDTH,
} from './constants'

import { Popover } from '../../components'
import { Bell } from '../../icons'
import { useNotificationPanel } from './useNotificationPanel'
import { NotificationsProps } from './Notifications'

export interface NotificationPanelProps {
  buttonClassName?: string
  children: React.ReactElement<NotificationsProps>
  className?: string
  notificationPlacement?:
    | NOTIFICATION_PLACEMENT.RIGHT
    | NOTIFICATION_PLACEMENT.BELOW
  onShow?: () => void
  onHide?: () => void
  unreadNotification?: boolean
}

export const NotificationPanel: React.FC<NotificationPanelProps> = ({
  buttonClassName = '',
  children,
  className = '',
  notificationPlacement = NOTIFICATION_PLACEMENT.RIGHT,
  onShow,
  onHide,
  unreadNotification = false,
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
        {unreadNotification && (
          <span
            className="rn-notification-panel__not-read"
            data-testid="not-read"
          />
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
            width={POPOVER_WIDTH}
          >
            {children}
          </Popover>
        )}
      </ReactCSSTransitionGroup>
    </div>
  )
}

NotificationPanel.displayName = 'NotificationPanel'
