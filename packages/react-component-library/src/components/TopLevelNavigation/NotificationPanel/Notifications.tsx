import React, { ReactElement } from 'react'
import { IconKeyboardArrowRight } from '@royalnavy/icon-library'

import { NotificationProps } from './index'

export interface NotificationsProps {
  link: React.ReactElement<LinkTypes>
  children:
    | React.ReactElement<NotificationProps>
    | React.ReactElement<NotificationProps>[]
}

export const Notifications: React.FC<NotificationsProps> = ({
  link,
  children,
}) => (
  <>
    <ol className="rn-notifications" data-testid="notifications">
      {children}
    </ol>
    <span className="rn-notifications__view-all">
      {React.cloneElement(link as ReactElement, {
        children: (
          <>
            View all notifications
            <IconKeyboardArrowRight />
          </>
        ),
      })}
    </span>
  </>
)
