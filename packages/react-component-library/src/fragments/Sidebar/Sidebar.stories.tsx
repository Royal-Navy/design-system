import React from 'react'
import { storiesOf } from '@storybook/react'

import { Link } from '../../components'
import Sidebar from './index'
import { Graph, House, Tools } from '../../icons'
import { Notification, Notifications } from '../NotificationPanel'

const stories = storiesOf('Sidebar', module)

const navData: NavItemAnchorType[] = [
  {
    href: '#',
    Image: House,
    label: 'Home',
  },
  {
    isActive: true,
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

const user = { initials: 'XT', href: '/user-profile' }

stories.add('With notifications', () => (
  <Sidebar
    navItems={navData}
    notifications={(
      <Notifications link={<Link href="notifications" />}>
        <Notification
          link={<Link href="notifications/1" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <Notification
          link={<Link href="notifications/2" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-01T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <Notification
          link={<Link href="notifications/3" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-01T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
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
      <Notifications link={<Link href="notifications" />}>
        <Notification
          link={<Link href="notifications/1" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <Notification
          link={<Link href="notifications/2" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-01T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <Notification
          link={<Link href="notifications/3" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-01T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
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
      <Notifications link={<Link href="notifications" />}>
        <Notification
          link={<Link href="notifications/1" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <Notification
          link={<Link href="notifications/2" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-01T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <Notification
          link={<Link href="notifications/3" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-01T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
      </Notifications>
    )}
    unreadNotification
    user={user}
  />
))
