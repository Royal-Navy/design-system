import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Graph, House, Tools } from '../../../icons'
import { Link } from '../../Link'
import { Notification, Notifications } from '../NotificationPanel'
import {
  Sidebar,
  SidebarProps,
  SidebarNav,
  SidebarNavItem,
  SidebarUser,
} from './index'

export default {
  component: Sidebar,
  subcomponents: {
    SidebarNav,
    SidebarNavItem,
    SidebarUser,
    Notifications,
    Notification,
  },
  title: 'Sidebar (Deprecated)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This API has been marked as deprecated. Consider using the new experimental Sidebar implementation.',
      },
    },
  },
} as Meta

export const Default: Story<SidebarProps> = (props) => {
  const nav = (
    <SidebarNav>
      <SidebarNavItem Image={House} link={<Link href="#">Home</Link>} />
      <SidebarNavItem
        Image={Graph}
        link={<Link href="#">Stats</Link>}
        isActive
      />
      <SidebarNavItem Image={Tools} link={<Link href="#">Tools</Link>} />
    </SidebarNav>
  )

  return <Sidebar {...props} className="rn-sidebar--storybook" nav={nav} />
}

Default.args = {}

export const WithUser: Story<SidebarProps> = (props) => {
  const user = <SidebarUser initials="XT" link={<Link href="#" />} />

  const nav = (
    <SidebarNav>
      <SidebarNavItem Image={House} link={<Link href="#">Home</Link>} />
      <SidebarNavItem
        Image={Graph}
        link={<Link href="#">Stats</Link>}
        isActive
      />
      <SidebarNavItem Image={Tools} link={<Link href="#">Tools</Link>} />
    </SidebarNav>
  )

  return (
    <Sidebar
      {...props}
      className="rn-sidebar--storybook"
      nav={nav}
      user={user}
    />
  )
}

WithUser.storyName = 'With user'

export const WithNotifications: Story<SidebarProps> = (props) => {
  const notifications = (
    <Notifications link={<Link href="#" />}>
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
      <Notification
        link={<Link href="#" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
    </Notifications>
  )

  const nav = (
    <SidebarNav>
      <SidebarNavItem Image={House} link={<Link href="#">Home</Link>} />
      <SidebarNavItem
        Image={Graph}
        link={<Link href="#">Stats</Link>}
        isActive
      />
      <SidebarNavItem Image={Tools} link={<Link href="#">Tools</Link>} />
    </SidebarNav>
  )

  return (
    <Sidebar
      {...props}
      className="rn-sidebar--storybook"
      hasUnreadNotification
      nav={nav}
      notifications={notifications}
    />
  )
}

WithNotifications.storyName = 'With notifications'
