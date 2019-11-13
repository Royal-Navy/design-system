import React from 'react'
import { storiesOf } from '@storybook/react'

import Link from '../../components/Link'
import Sidebar from './index'
import { Graph, House, Tools } from '../../icons'
import { Notification, Notifications } from '../NotificationPanel'

const notifications = [
  {
    href: 'notifications/1',
    name: 'Thomas Stephens',
    action: 'added a new comment to your',
    on: 'review',
    when: new Date('2019-11-05T14:25:02.178Z'),
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
  },
  {
    href: 'notifications/2',
    name: 'Thomas Stephens',
    action: 'added a new comment to your',
    on: 'review',
    when: new Date('2019-11-01T14:25:02.178Z'),
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
  },
  {
    href: 'notifications/3',
    name: 'Thomas Stephens',
    action: 'added a new comment to your',
    on: 'review',
    when: new Date('2019-11-01T14:25:02.178Z'),
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores',
  },
]

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

stories.add('With notifications', () => (
  <Sidebar
    navItems={navData}
    notifications={(
      <Notifications href="notifications">
        {notifications.map(notification => (
          <Notification {...notification} />
        ))}
      </Notifications>
    )}
    unreadNotification
    user={user}
  />
))

stories.add('No notifications', () => (
  <Sidebar
    user={user}
    navItems={navData}
    notifications={(
      <Notifications href="notifications">
        {notifications.map(notification => (
          <Notification {...notification} />
        ))}
      </Notifications>
    )}
  />
))

stories.add('Without notifications', () => (
  <Sidebar user={user} navItems={navData} />
))

stories.add('With custom Link component', () => (
  <Sidebar
    LinkComponent={Link}
    navItems={navData}
    notifications={(
      <Notifications href="notifications">
        {notifications.map(notification => (
          <Notification {...notification} />
        ))}
      </Notifications>
    )}
    unreadNotification
    user={user}
  />
))
