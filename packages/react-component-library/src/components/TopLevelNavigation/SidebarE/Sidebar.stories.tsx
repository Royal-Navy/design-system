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
