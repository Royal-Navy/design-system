import React, { useState } from 'react'

import { Avatar, Link } from '../../components'
import { NotificationPanel, NotificationsProps } from '../NotificationPanel'

interface SidebarProps {
  LinkComponent?: any
  navItems: NavItemTypes[]
  notifications?: React.ReactElement<NotificationsProps>
  unreadNotification?: boolean
  user?: UserType
}

const Sidebar: React.FC<SidebarProps> = ({
  LinkComponent = Link,
  navItems,
  notifications,
  unreadNotification = false,
  user,
}) => {
  const [open, setOpen] = useState()

  const renderUserLink = ({ initials, ...rest }: UserType): JSX.Element => (
    <LinkComponent className="rn-sidebar__nav-link" {...rest}>
      <Avatar
        className="rn-sidebar__avatar rn-sidebar__nav-label"
        initials={initials}
      />
    </LinkComponent>
  )

  const renderSidebarNavItem = ({
    active = false,
    Image,
    label,
    ...rest
  }: NavItemTypes): JSX.Element => (
    <LinkComponent
      {...rest}
      key={label}
      className={`rn-sidebar__nav-link${active ? ' is-active' : ''}`}
      onClick={() => setOpen(false)}
    >
      <span className="rn-sidebar__nav-icon">{Image && <Image />}</span>
      <span className="rn-sidebar__nav-label">{label}</span>
    </LinkComponent>
  )

  const sideBarNavItemElements = navItems.map(renderSidebarNavItem)
  const userElement = user ? renderUserLink(user) : null

  return (
    <div className={`rn-sidebar ${open ? 'is-open' : 'is-closed'}`}>
      <nav
        className="rn-sidebar__top"
        onMouseOver={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onMouseOut={() => {
          setOpen(false)
        }}
        onBlur={() => {
          setOpen(false)
        }}
      >
        {sideBarNavItemElements}
      </nav>

      <div className="rn-sidebar__bottom">
        {notifications && (
          <NotificationPanel unreadNotification={unreadNotification}>
            {notifications}
          </NotificationPanel>
        )}
        {userElement}
      </div>
    </div>
  )
}

Sidebar.displayName = 'Sidebar'

export default Sidebar
