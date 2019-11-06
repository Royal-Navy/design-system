import React from 'react'
import { IconKeyboardArrowRight } from '@royalnavy/icon-library'

import { NotificationProps } from '.'

export interface NotificationsProps {
  href: string
  children: React.ReactElement<NotificationProps>[]
}

export const Notifications: React.FC<NotificationsProps> = ({
  href,
  children,
}) => (
  <>
    <ol className="rn-notifications" data-testid="notifications">{children}</ol>
    <span className="rn-notifications__view-all">
      <a href={href}>
        View all notifications
        <IconKeyboardArrowRight />
      </a>
    </span>
  </>
)
