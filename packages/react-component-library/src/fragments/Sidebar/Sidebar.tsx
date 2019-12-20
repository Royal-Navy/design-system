import React, { useState } from 'react'
import classNames from 'classnames'

import { NotificationPanel, NotificationsProps } from '../NotificationPanel'
import { SidebarNavProps, SidebarUserProps } from '.'

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
  const [open, setOpen] = useState()
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
          <NotificationPanel
            data-testid="sidebar-notifications"
            hasUnreadNotification={hasUnreadNotification}
          >
            {notifications}
          </NotificationPanel>
        )}
        {user}
      </div>
    </div>
  )
}

Sidebar.displayName = 'Sidebar'
