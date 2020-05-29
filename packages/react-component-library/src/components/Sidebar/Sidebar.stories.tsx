import React from 'react'
import { storiesOf } from '@storybook/react'

import { CustomLink } from '../CustomLink'
import { Graph, House, Tools } from '../../icons'
import { Link } from '../Link'
import { Notification, Notifications } from '../NotificationPanel'
import { Sidebar, SidebarNav, SidebarNavItem, SidebarUser } from '.'

const stories = storiesOf('Sidebar', module)

const nav = (
  <SidebarNav>
    <SidebarNavItem Image={House} link={<Link href="/">Home</Link>} />
    <SidebarNavItem
      Image={Graph}
      link={<Link href="/stats">Stats</Link>}
      isActive
    />
    <SidebarNavItem Image={Tools} link={<Link href="/tools">Tools</Link>} />
  </SidebarNav>
)

const user = <SidebarUser initials="XT" link={<Link href="/user-profile" />} />

stories.add('With notifications', () => (
  <Sidebar
    nav={nav}
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
    hasUnreadNotification
    user={user}
  />
))

stories.add('Without notifications', () => <Sidebar nav={nav} user={user} />)

stories.add('With custom Link component', () => (
  <Sidebar
    nav={nav}
    notifications={(
      <Notifications link={<CustomLink to="notifications" />}>
        <Notification
          link={<CustomLink to="notifications/1" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <Notification
          link={<CustomLink to="notifications/2" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-01T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
        <Notification
          link={<CustomLink to="notifications/3" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-01T14:25:02.178Z')}
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
        />
      </Notifications>
    )}
    hasUnreadNotification
    user={user}
  />
))
