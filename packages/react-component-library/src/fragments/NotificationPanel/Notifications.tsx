import React from 'react'
import { IconKeyboardArrowRight } from '@royalnavy/icon-library'

import { NotificationProps } from './Notification'

export interface NotificationsProps {
  href: string
  children: React.ReactElement<NotificationProps>[]
}

export const Notifications: React.FC<NotificationsProps> = ({
  href,
  children,
}) => (
  <>
    <ol className="rn-notifications">{children}</ol>
    <span className="rn-notifications__view-all">
      <a href={href}>
        View all notifications
        <IconKeyboardArrowRight />
      </a>
    </span>
  </>
)
