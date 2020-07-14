import React, { ReactElement } from 'react'
import { IconKeyboardArrowRight } from '@royalnavy/icon-library'

import { NotificationProps } from './index'

export interface NotificationsProps {
  children:
    | React.ReactElement<NotificationProps>
    | React.ReactElement<NotificationProps>[]
  link: React.ReactElement<LinkTypes>
}

export const Notifications: React.FC<NotificationsProps> = ({
  children,
  link,
  ...rest
}) => (
  <div data-testid="notifications-sheet" role="grid" {...rest}>
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
  </div>
)
