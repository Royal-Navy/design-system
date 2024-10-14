import React, { ReactElement } from 'react'
import { IconKeyboardArrowRight } from '@royalnavy/icon-library'

import { LinkProps } from '../../../common/Link'
import { NotificationProps } from './index'
import { StyledNotifications } from './partials/StyledNotifications'
import { StyledList } from './partials/StyledList'
import { StyledViewAll } from './partials/StyledViewAll'

export interface NotificationsProps {
  /**
   * Collection of Notification item components.
   */
  children:
    | React.ReactElement<NotificationProps>
    | React.ReactElement<NotificationProps>[]
  /**
   * Link component for 'View all notifications'.
   */
  link: React.ReactElement<LinkProps>
}

export const Notifications = ({
  children,
  link,
  ...rest
}: NotificationsProps) => (
  <StyledNotifications data-testid="notifications-sheet" {...rest}>
    <StyledList data-testid="notifications">{children}</StyledList>
    <StyledViewAll>
      {React.cloneElement(link as ReactElement, {
        children: (
          <>
            View all notifications
            <IconKeyboardArrowRight />
          </>
        ),
      })}
    </StyledViewAll>
  </StyledNotifications>
)
