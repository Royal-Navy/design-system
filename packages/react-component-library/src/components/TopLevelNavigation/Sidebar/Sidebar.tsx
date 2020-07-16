import React, { useState } from 'react'
import classNames from 'classnames'

import {
  NOTIFICATION_CONTAINER_WIDTH,
  NotificationsProps,
} from '../NotificationPanel'
import { SidebarNavProps, SidebarUserProps } from './index'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { Bell } from '../../../icons'

interface SidebarProps {
  hasUnreadNotification?: boolean
  nav?: React.ReactElement<SidebarNavProps>
  notifications?: React.ReactElement<NotificationsProps>
  user?: React.ReactElement<SidebarUserProps>
}

export const Sidebar: React.FC<SidebarProps> = ({
  nav,
  notifications,
  hasUnreadNotification,
  user,
}) => {
  const [open, setOpen] = useState(false)
  const classes = classNames('rn-sidebar', {
    'is-open': open,
  })

  return (
    <div className={classes} data-testid="sidebar">
      {nav &&
        React.cloneElement(nav, {
          ...nav.props,
          onBlur: () => setOpen(false),
          onFocus: () => setOpen(true),
          onItemClick: () => setOpen(false),
          onMouseOut: () => setOpen(false),
          onMouseOver: () => setOpen(true),
        })}

      <div className="rn-sidebar__bottom">
        {notifications && (
          <Sheet
            button={(
              <SheetButton
                aria-label="Show notifications"
                data-testid="notification-button"
                icon={<Bell className="rn-sheet__icon" />}
              >
                {hasUnreadNotification && (
                  <span
                    className="rn-notification-panel__not-read"
                    data-testid="not-read"
                  />
                )}
              </SheetButton>
            )}
            width={NOTIFICATION_CONTAINER_WIDTH}
          >
            {notifications}
          </Sheet>
        )}
        {user}
      </div>
    </div>
  )
}

Sidebar.displayName = 'Sidebar'
