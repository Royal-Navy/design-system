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
  SidebarE,
  SidebarNavE,
  SidebarNavItemE,
  SidebarUserE,
  SidebarWrapperE,
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
  component: SidebarE,
  subcomponents: {
    SidebarNavE,
    SidebarNavItemE,
    SidebarUserE,
    SidebarWrapperE,
    Notifications,
    Notification,
  },
  title: 'Sidebar (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This API is experimental and may change outside of the typical semver release cycle.',
      },
    },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SidebarE>

const StyledSidebarE = styled(SidebarE)`
  max-height: 30rem;
`

export const Default: ComponentStory<typeof SidebarE> = (props) => {
  const sidebarNav = (
    <SidebarNavE>
      <SidebarNavItemE
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItemE
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItemE
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItemE
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItemE
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItemE
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNavE>
  )

  return (
    <SidebarWrapperE>
      <div style={{ maxHeight: '30rem' }}>
        <StyledSidebarE {...props}>{sidebarNav}</StyledSidebarE>
      </div>
      <main
        style={{
          padding: '2rem',
          backgroundColor: '#c9c9c9',
          width: '100%',
        }}
      >
        Hello, World!
      </main>
    </SidebarWrapperE>
  )
}

Default.args = {}

export const InitiallyOpen: ComponentStory<typeof SidebarE> = (props) => {
  const sidebarNav = (
    <SidebarNavE>
      <SidebarNavItemE
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItemE
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItemE
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItemE
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItemE
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItemE
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNavE>
  )

  return (
    <SidebarWrapperE>
      <div style={{ maxHeight: '30rem' }}>
        <StyledSidebarE {...props} initialIsOpen>
          {sidebarNav}
        </StyledSidebarE>
      </div>
      <main
        style={{
          padding: '2rem',
          backgroundColor: '#c9c9c9',
          width: '100%',
        }}
      >
        Hello, World!
      </main>
    </SidebarWrapperE>
  )
}

InitiallyOpen.args = {}

InitiallyOpen.parameters = disableColorContrastRule

InitiallyOpen.storyName = 'Initially open'

export const WithSubNavigation: ComponentStory<typeof SidebarE> = (props) => {
  const sidebarNavWithSub = (
    <SidebarNavE>
      <SidebarNavItemE
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItemE
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      >
        <SidebarNavE>
          <SidebarNavItemE link={<Link href="#">Sub-nav-item 1</Link>} />
          <SidebarNavItemE link={<Link href="#">Sub-nav-item 2</Link>} />
          <SidebarNavItemE link={<Link href="#">Sub-nav-item 3</Link>} />
        </SidebarNavE>
      </SidebarNavItemE>
      <SidebarNavItemE
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItemE
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      >
        <SidebarNavE>
          <SidebarNavItemE link={<Link href="#">Sub-nav-item 1</Link>} />
          <SidebarNavItemE link={<Link href="#">Sub-nav-item 2</Link>} />
          <SidebarNavItemE link={<Link href="#">Sub-nav-item 3</Link>} />
        </SidebarNavE>
      </SidebarNavItemE>
      <SidebarNavItemE
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      >
        <SidebarNavE>
          <SidebarNavItemE link={<Link href="#">Sub-nav-item 1</Link>} />
          <SidebarNavItemE link={<Link href="#">Sub-nav-item 2</Link>} />
          <SidebarNavItemE
            isActive
            link={<Link href="#">Sub-nav-item 3</Link>}
          />
        </SidebarNavE>
      </SidebarNavItemE>
      <SidebarNavItemE
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNavE>
  )

  return (
    <SidebarWrapperE>
      <div style={{ maxHeight: '30rem' }}>
        <StyledSidebarE {...props}>{sidebarNavWithSub}</StyledSidebarE>
      </div>
      <main
        style={{
          padding: '2rem',
          backgroundColor: '#c9c9c9',
          width: '100%',
        }}
      >
        Hello, World!
      </main>
    </SidebarWrapperE>
  )
}

WithSubNavigation.storyName = 'With sub-navigation'

export const WithHeader: ComponentStory<typeof SidebarE> = (props) => {
  const sidebarNav = (
    <SidebarNavE>
      <SidebarNavItemE
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItemE
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItemE
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItemE
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItemE
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItemE
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNavE>
  )

  return (
    <SidebarWrapperE>
      <div style={{ maxHeight: '30rem' }}>
        <StyledSidebarE
          {...props}
          icon={<IconGrain />}
          title="Application Name"
        >
          {sidebarNav}
        </StyledSidebarE>
      </div>
      <main
        style={{
          padding: '2rem',
          backgroundColor: '#c9c9c9',
          width: '100%',
        }}
      >
        Hello, World!
      </main>
    </SidebarWrapperE>
  )
}

WithHeader.storyName = 'With header'

export const WithUserMenu: ComponentStory<typeof SidebarE> = (props) => {
  const userWithLinks = (
    <SidebarUserE
      initials="HN"
      name="Horatio Nelson"
      userLink={<Link href="#">Profile</Link>}
      exitLink={<Link href="#">Logout</Link>}
    />
  )

  const sidebarNav = (
    <SidebarNavE>
      <SidebarNavItemE
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItemE
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItemE
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItemE
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItemE
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItemE
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNavE>
  )

  return (
    <SidebarWrapperE>
      <div style={{ maxHeight: '30rem' }}>
        <StyledSidebarE {...props} user={userWithLinks}>
          {sidebarNav}
        </StyledSidebarE>
      </div>
      <main
        style={{
          padding: '2rem',
          backgroundColor: '#c9c9c9',
          width: '100%',
        }}
      >
        Hello, World!
      </main>
    </SidebarWrapperE>
  )
}

WithUserMenu.storyName = 'With user menu'

export const WithNotifications: ComponentStory<typeof SidebarE> = (props) => {
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
    <SidebarNavE>
      <SidebarNavItemE
        icon={<IconHome />}
        link={<Link href="#">Dashboard</Link>}
      />
      <SidebarNavItemE
        icon={<IconVerifiedUser />}
        link={<Link href="#">Reports</Link>}
      />
      <SidebarNavItemE
        icon={<IconLocalShipping />}
        link={<Link href="#">Platforms</Link>}
      />
      <SidebarNavItemE
        icon={<IconFeedback />}
        link={<Link href="#">Data&nbsp;Feed</Link>}
      />
      <SidebarNavItemE
        isActive
        icon={<IconMessage />}
        link={<Link href="#">Messages</Link>}
      />
      <SidebarNavItemE
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
      />
    </SidebarNavE>
  )

  return (
    <SidebarWrapperE>
      <div style={{ maxHeight: '30rem' }}>
        <StyledSidebarE
          {...props}
          notifications={notifications}
          hasUnreadNotification
        >
          {sidebarNav}
        </StyledSidebarE>
      </div>
      <main
        style={{
          padding: '2rem',
          backgroundColor: '#c9c9c9',
          width: '100%',
        }}
      >
        Hello, World!
      </main>
    </SidebarWrapperE>
  )
}

WithNotifications.storyName = 'With notifications'
