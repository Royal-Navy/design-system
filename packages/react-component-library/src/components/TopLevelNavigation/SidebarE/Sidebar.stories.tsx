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
} from '@royalnavy/icon-library'

import { Sidebar, SidebarNav, SidebarNavItem, SidebarUser } from '.'
import { Link } from '../../Link'

export default { component: Sidebar, title: 'SidebarE' } as Meta

const user = (
  <SidebarUser
    initials="HN"
    name="Horatio Nelson"
    link={<Link href="/user-profile">View profile</Link>}
  />
)

export const Default = () => {
  return (
    <Sidebar icon={<IconGrain />} title="Application Name" user={user}>
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
    </Sidebar>
  )
}

Default.storyName = 'Default'
