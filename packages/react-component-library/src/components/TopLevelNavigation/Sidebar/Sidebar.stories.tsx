import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  IconHome,
  IconLocalShipping,
  IconVerifiedUser,
  IconMessage,
  IconFeedback,
  IconSettings,
  IconGrain,
} from '@defencedigital/icon-library'

import {
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  SidebarUser,
  SidebarWrapper,
} from '.'
import { Link } from '../../Link'
import { Notification, Notifications } from '../NotificationPanel'

const disableColorContrastRule = {
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export default {
  component: Sidebar,
  subcomponents: {
    SidebarNav,
    SidebarNavItem,
    SidebarUser,
    SidebarWrapper,
    Notifications,
    Notification,
  },
  title: 'Sidebar',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Sidebar>

const StyledSidebar = styled(Sidebar)`
  max-height: 30rem;
`

const StyledMain = styled.main`
  padding: 2rem;
  background-color: #c9c9c9;
  width: 100%;
`

export const Default: ComponentStory<typeof Sidebar> = (props) => {
  const sidebarNav = (
    <SidebarNav>
      <SidebarNavItem
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItem
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItem
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItem
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItem
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNav>
  )

  return (
    <SidebarWrapper>
      <StyledSidebar {...props}>{sidebarNav}</StyledSidebar>
      <StyledMain>Hello, World!</StyledMain>
    </SidebarWrapper>
  )
}

Default.args = {}

export const InitiallyOpen: ComponentStory<typeof Sidebar> = (props) => {
  const sidebarNav = (
    <SidebarNav>
      <SidebarNavItem
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItem
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItem
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItem
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItem
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNav>
  )

  return (
    <SidebarWrapper>
      <StyledSidebar {...props} initialIsOpen>
        {sidebarNav}
      </StyledSidebar>
      <StyledMain>Hello, World!</StyledMain>
    </SidebarWrapper>
  )
}

InitiallyOpen.args = {}

InitiallyOpen.parameters = disableColorContrastRule

InitiallyOpen.storyName = 'Initially open'

export const WithSubNavigation: ComponentStory<typeof Sidebar> = (props) => {
  const sidebarNavWithSub = (
    <SidebarNav>
      <SidebarNavItem
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItem
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      >
        <SidebarNav>
          <SidebarNavItem link={<Link href="#">Sub-nav-item 1</Link>} />
          <SidebarNavItem link={<Link href="#">Sub-nav-item 2</Link>} />
          <SidebarNavItem link={<Link href="#">Sub-nav-item 3</Link>} />
        </SidebarNav>
      </SidebarNavItem>
      <SidebarNavItem
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItem
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      >
        <SidebarNav>
          <SidebarNavItem link={<Link href="#">Sub-nav-item 1</Link>} />
          <SidebarNavItem link={<Link href="#">Sub-nav-item 2</Link>} />
          <SidebarNavItem link={<Link href="#">Sub-nav-item 3</Link>} />
        </SidebarNav>
      </SidebarNavItem>
      <SidebarNavItem
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      >
        <SidebarNav>
          <SidebarNavItem link={<Link href="#">Sub-nav-item 1</Link>} />
          <SidebarNavItem link={<Link href="#">Sub-nav-item 2</Link>} />
          <SidebarNavItem
            isActive
            link={<Link href="#">Sub-nav-item 3</Link>}
          />
        </SidebarNav>
      </SidebarNavItem>
      <SidebarNavItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNav>
  )

  return (
    <SidebarWrapper>
      <StyledSidebar {...props}>{sidebarNavWithSub}</StyledSidebar>
      <StyledMain>Hello, World!</StyledMain>
    </SidebarWrapper>
  )
}

WithSubNavigation.storyName = 'With sub-navigation'

export const WithHeader: ComponentStory<typeof Sidebar> = (props) => {
  const sidebarNav = (
    <SidebarNav>
      <SidebarNavItem
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItem
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItem
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItem
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItem
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNav>
  )

  return (
    <SidebarWrapper>
      <StyledSidebar {...props} icon={<IconGrain />} title="Application Name">
        {sidebarNav}
      </StyledSidebar>
      <StyledMain>Hello, World!</StyledMain>
    </SidebarWrapper>
  )
}

WithHeader.storyName = 'With header'

export const WithUserMenu: ComponentStory<typeof Sidebar> = (props) => {
  const userWithLinks = (
    <SidebarUser
      initials="HN"
      name="Horatio Nelson"
      userLink={<Link href="#">Profile</Link>}
      exitLink={<Link href="#">Logout</Link>}
    />
  )

  const sidebarNav = (
    <SidebarNav>
      <SidebarNavItem
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItem
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItem
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItem
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItem
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNav>
  )

  return (
    <SidebarWrapper>
      <StyledSidebar {...props} user={userWithLinks}>
        {sidebarNav}
      </StyledSidebar>
      <StyledMain>Hello, World!</StyledMain>
    </SidebarWrapper>
  )
}

WithUserMenu.storyName = 'With user menu'

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

  const sidebarNav = (
    <SidebarNav>
      <SidebarNavItem
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItem
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItem
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItem
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItem
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNav>
  )

  return (
    <SidebarWrapper>
      <StyledSidebar
        {...props}
        notifications={notifications}
        hasUnreadNotification
      >
        {sidebarNav}
      </StyledSidebar>
      <StyledMain>Hello, World!</StyledMain>
    </SidebarWrapper>
  )
}

WithNotifications.storyName = 'With notifications'
