import React, { useContext } from 'react'
import { IconNotifications } from '@royalnavy/icon-library'
import { Transition } from 'react-transition-group'

import { SidebarContext } from './context'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { NotificationsProps } from '../NotificationPanel'
import { TRANSITION_TIMEOUT } from './constants'
import { StyledNotificationsSheet } from './partials/StyledNotificationsSheet'
import { StyledNotificationsSheetButton } from './partials/StyledNotificationsSheetButton'
import { StyledNotificationDot } from './partials/StyledNotificationDot'
import { StyledNotificationsLabel } from './partials/StyledNotificationsLabel'

export interface SidebarNotificationsProps extends ComponentWithClass {
  /**
   * Toggle whether there are unread notifications.
   */
  hasUnreadNotification?: boolean
  /**
   * Whether the sheet is initially open.
   */
  initialIsOpen?: boolean
  /**
   * Collection of Notification item components.
   */
  notifications?: React.ReactElement<NotificationsProps>
}

export const SidebarNotifications: React.FC<SidebarNotificationsProps> = ({
  initialIsOpen,
  notifications,
  hasUnreadNotification,
}) => {
  const { isOpen } = useContext(SidebarContext)

  if (!notifications) {
    return null
  }

  return (
    <StyledNotificationsSheet
      aria-label="Notifications"
      button={
        <StyledNotificationsSheetButton
          aria-label="Show notifications"
          data-testid="notification-button"
          icon={<IconNotifications />}
          isOpen={isOpen}
        >
          {hasUnreadNotification && (
            <StyledNotificationDot data-testid="not-read">
              {React.Children.count(notifications.props.children)}
            </StyledNotificationDot>
          )}
          <Transition in={isOpen} timeout={TRANSITION_TIMEOUT} unmountOnExit>
            {(state) => (
              <StyledNotificationsLabel $transitionStatus={state}>
                Notifications
              </StyledNotificationsLabel>
            )}
          </Transition>
        </StyledNotificationsSheetButton>
      }
      initialIsOpen={initialIsOpen}
      placement="right"
    >
      {notifications}
    </StyledNotificationsSheet>
  )
}

SidebarNotifications.displayName = 'SidebarNotifications'
