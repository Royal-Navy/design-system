import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import {
  IconHome,
  IconLocalShipping,
  IconVerifiedUser,
  IconMessage,
  IconFeedback,
  IconSettings,
  IconGrain,
  IconPerson,
  IconChatBubble,
  IconExitToApp,
} from '@royalnavy/icon-library'

import {
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  SidebarUser,
  SidebarUserItem,
  SidebarWrapper,
} from '.'
import { Link } from '../../Link'
import { Notification, Notifications } from '../NotificationPanel'

export default { component: Sidebar, title: 'SidebarE' } as Meta

const userWithLink = (
  <SidebarUser
    initials="HN"
    name="Horatio Nelson"
    link={<Link href="/user-profile">View profile</Link>}
  />
)

const userWithMenu = (
  <SidebarUser
    initials="HN"
    name="Horatio Nelson"
    link={<Link href="/user-profile">View profile</Link>}
  >
    <SidebarUserItem
      icon={<IconPerson />}
      link={<Link href="/user-profile">Profile</Link>}
    />
    <SidebarUserItem
      icon={<IconSettings />}
      link={<Link href="/settings">Settings</Link>}
    />
    <SidebarUserItem
      icon={<IconChatBubble />}
      link={<Link href="/support">Support</Link>}
    />
    <SidebarUserItem
      icon={<IconExitToApp />}
      link={<Link href="/logout">Logout</Link>}
    />
  </SidebarUser>
)

const sidebarNav = (
  <SidebarNav>
    <SidebarNavItem
      icon={<IconHome />}
      link={<Link href="/dashboard">Dashboard</Link>}
    />
    <SidebarNavItem
      icon={<IconVerifiedUser />}
      link={<Link href="/reports">Reports</Link>}
    />
    <SidebarNavItem
      icon={<IconLocalShipping />}
      link={<Link href="/platforms">Platforms</Link>}
    />
    <SidebarNavItem
      icon={<IconFeedback />}
      link={<Link href="/data-feed">Data&nbsp;Feed</Link>}
    />
    <SidebarNavItem
      icon={<IconMessage />}
      link={<Link href="/messages">Messages</Link>}
    />
    <SidebarNavItem
      icon={<IconSettings />}
      link={<Link href="/settings">Settings</Link>}
    />
  </SidebarNav>
)

const notifications = (
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
)

export const Default = () => {
  return (
    <SidebarWrapper>
      <Sidebar>{sidebarNav}</Sidebar>
      <main>Hello, World!</main>
    </SidebarWrapper>
  )
}

export const WithHeader = () => {
  return (
    <SidebarWrapper>
      <Sidebar icon={<IconGrain />} title="Application Name">
        {sidebarNav}
      </Sidebar>
      <main>Hello, World!</main>
    </SidebarWrapper>
  )
}

WithHeader.storyName = 'With header'

export const WithUserLink = () => {
  return (
    <SidebarWrapper>
      <Sidebar
        icon={<IconGrain />}
        title="Application Name"
        user={userWithLink}
      >
        {sidebarNav}
      </Sidebar>
      <main>Hello, World!</main>
    </SidebarWrapper>
  )
}

WithUserLink.storyName = 'With user link'

export const WithUserMenu = () => {
  return (
    <SidebarWrapper>
      <Sidebar
        icon={<IconGrain />}
        title="Application Name"
        user={userWithMenu}
      >
        {sidebarNav}
      </Sidebar>
      <main>Hello, World!</main>
    </SidebarWrapper>
  )
}

WithUserMenu.storyName = 'With user menu'

export const WithNotifications = () => {
  return (
    <SidebarWrapper>
      <Sidebar
        icon={<IconGrain />}
        title="Application Name"
        user={userWithMenu}
        notifications={notifications}
        hasUnreadNotification
      >
        {sidebarNav}
      </Sidebar>
      <main>Hello, World!</main>
    </SidebarWrapper>
  )
}

WithNotifications.storyName = 'With notifications'
