import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from '../../components/Link'
import Sidebar from './index'
import { Graph, House, Tools } from '../../icons'

const NotificationsPopoverContent: React.FC = () => {
  return (
    <div>
      <ul className="rn-list">
        <li>Message one</li>
        <li>Message Two</li>
      </ul>
      <hr />
      <a href="more">more &gt;</a>
    </div>
  )
}

const UserLink: React.FC = ({ children, ...rest }) => (
  <Link href="/user" {...rest}>
    {children}
  </Link>
)

const stories = storiesOf('Sidebar', module)

const navData: NavItemAnchorType[] = [
  {
    href: '#',
    Image: House,
    label: 'Home',
  },
  {
    active: true,
    href: '/stats',
    Image: Graph,
    label: 'Stats',
  },
  {
    href: '/tools',
    Image: Tools,
    label: 'Tools',
  },
]

const user = { initials: 'XT', href: '/userprofile' }
const popoverContent = <NotificationsPopoverContent />

stories.add('With notifications', () => (
  <Sidebar
    navItems={navData}
    NotificationsPopoverContent={popoverContent}
    unreadNotification
    user={user}
  />
))

stories.add('No notifications', () => (
  <Sidebar
    user={user}
    navItems={navData}
    NotificationsPopoverContent={popoverContent}
  />
))

stories.add('Without notifications', () => (
  <Sidebar user={user} navItems={navData} />
))

stories.add('With custom Link component', () => (
  <Sidebar
    LinkComponent={Link}
    navItems={navData}
    NotificationsPopoverContent={popoverContent}
    unreadNotification
    user={user}
  />
))
