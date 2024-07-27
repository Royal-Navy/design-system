import React, { useContext } from 'react'
import { IconNotifications } from '@royalnavy/icon-library'
import { Transition } from 'react-transition-group'

import { SidebarContext } from './context'
import { TRANSITION_TIMEOUT } from './constants'
import { StyledNotificationsSheet } from './partials/StyledNotificationsSheet'
import { StyledNotificationsSheetButton } from './partials/StyledNotificationsSheetButton'
import { StyledNotificationDot } from './partials/StyledNotificationDot'
import { StyledNotificationsLabel } from './partials/StyledNotificationsLabel'
import { SidebarNotificationsProps } from './types'

export const SidebarNotifications = ({
  initialIsOpen,
  notifications,
  hasUnreadNotification,
}: SidebarNotificationsProps) => {
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
