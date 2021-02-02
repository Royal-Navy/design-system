import React from 'react'
import classNames from 'classnames'

import {
  NOTIFICATION_CONTAINER_WIDTH,
  NotificationsProps,
} from '../NotificationPanel'
import { SidebarNavProps, SidebarUserProps } from './index'
import { Sheet } from '../Sheet/Sheet'
import { SheetButton } from '../Sheet/SheetButton'
import { Bell } from '../../../icons'
import { useOpenClose } from '../../../hooks'
import { StyledNotRead } from '../NotificationPanel/partials/StyledNotRead'

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
  ...rest
}) => {
  const { open, setOpen } = useOpenClose(false)
  const classes = classNames('rn-sidebar', {
    'is-open': open,
  })

  return (
    <div className={classes} data-testid="sidebar" {...rest}>
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
                  <StyledNotRead data-testid="not-read" />
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
