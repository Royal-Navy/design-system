import React from 'react'
import styled from 'styled-components'
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
  },
} as Meta

const nav = (
  <SidebarNav>
    <SidebarNavItem Image={House} link={<Link href="#">Home</Link>} />
    <SidebarNavItem Image={Graph} link={<Link href="#">Stats</Link>} isActive />
    <SidebarNavItem Image={Tools} link={<Link href="#">Tools</Link>} />
  </SidebarNav>
)

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
      when={new Date('2019-11-01T14:25:02.178Z')}
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />
    <Notification
      link={<Link href="#" />}
      name="Thomas Stephens"
      action="added a new comment to your"
      on="review"
      when={new Date('2019-11-01T14:25:02.178Z')}
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />
  </Notifications>
)

const user = <SidebarUser initials="XT" link={<Link href="#" />} />

const StyledSidebar = styled(Sidebar)``

export const Default: Story<SidebarProps> = (props) => (
  <Sidebar {...props} nav={nav} />
)

Default.args = {}

export const WithNotifications: Story<SidebarProps> = (props) => (
  <Sidebar
    {...props}
    hasUnreadNotification
    nav={nav}
    notifications={notifications}
  />
)

WithNotifications.storyName = 'With notifications'

export const WithUser: Story<SidebarProps> = (props) => (
  <Sidebar {...props} nav={nav} user={user} />
)

WithUser.storyName = 'With user'
