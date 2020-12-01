import React, { useContext } from 'react'
import { IconNotifications } from '@royalnavy/icon-library'
import { Transition } from 'react-transition-group'

import { SidebarContext } from './context'
import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SHEET_PLACEMENT } from '../Sheet/constants'
import {
  NotificationsProps,
  NOTIFICATION_CONTAINER_WIDTH,
} from '../NotificationPanel'
import { TRANSITION_STYLES, TRANSITION_TIMEOUT } from './constants'
import { StyledNotificationsSheet } from './partials/StyledNotificationsSheet'
import { StyledNotificationsSheetButton } from './partials/StyledNotificationsSheetButton'
import { StyledNotificationDot } from './partials/StyledNotificationDot'
import { StyledNotificationsLabel } from './partials/StyledNotificationsLabel'

export interface SidebarNotificationsProps extends ComponentWithClass {
  hasUnreadNotification?: boolean
  notifications?: React.ReactElement<NotificationsProps>
}

export const SidebarNotifications: React.FC<SidebarNotificationsProps> = ({
  notifications,
  hasUnreadNotification,
}) => {
  const { isOpen } = useContext(SidebarContext)

  return (
    <>
      {notifications && (
        <StyledNotificationsSheet
          button={(
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
              <Transition
                in={isOpen}
                timeout={TRANSITION_TIMEOUT}
                unmountOnExit
              >
                {(state) => (
                  <StyledNotificationsLabel
                    style={{ ...TRANSITION_STYLES[state] }}
                  >
                    Notifications
                  </StyledNotificationsLabel>
                )}
              </Transition>
            </StyledNotificationsSheetButton>
          )}
          placement={SHEET_PLACEMENT.RIGHT_BOTTOM}
          width={NOTIFICATION_CONTAINER_WIDTH}
        >
          {notifications}
        </StyledNotificationsSheet>
      )}
    </>
  )
}

SidebarNotifications.displayName = 'SidebarNotifications'
