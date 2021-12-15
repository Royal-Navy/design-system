import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IconHome, IconBarChart, IconTune } from '@defencedigital/icon-library'

import { Link } from '../../Link'
import { Notification, Notifications } from '../NotificationPanel'
import { Sidebar, SidebarNav, SidebarNavItem, SidebarUser } from './index'

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
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Sidebar>

export const Default: ComponentStory<typeof Sidebar> = (props) => {
  const nav = (
    <SidebarNav>
      <SidebarNavItem Image={IconHome} link={<Link href="#">Home</Link>} />
      <SidebarNavItem
        Image={IconBarChart}
        link={<Link href="#">Stats</Link>}
        isActive
      />
      <SidebarNavItem Image={IconTune} link={<Link href="#">Settings</Link>} />
    </SidebarNav>
  )

  return <Sidebar {...props} className="rn-sidebar--storybook" nav={nav} />
}

Default.args = {}

export const WithUser: ComponentStory<typeof Sidebar> = (props) => {
  const user = <SidebarUser initials="XT" link={<Link href="#" />} />

  const nav = (
    <SidebarNav>
      <SidebarNavItem Image={IconHome} link={<Link href="#">Home</Link>} />
      <SidebarNavItem
        Image={IconBarChart}
        link={<Link href="#">Stats</Link>}
        isActive
      />
      <SidebarNavItem Image={IconTune} link={<Link href="#">Settings</Link>} />
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

export const WithNotifications: ComponentStory<typeof Sidebar> = (props) => {
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
      <SidebarNavItem Image={IconHome} link={<Link href="#">Home</Link>} />
      <SidebarNavItem
        Image={IconBarChart}
        link={<Link href="#">Stats</Link>}
        isActive
      />
      <SidebarNavItem Image={IconTune} link={<Link href="#">Settings</Link>} />
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
