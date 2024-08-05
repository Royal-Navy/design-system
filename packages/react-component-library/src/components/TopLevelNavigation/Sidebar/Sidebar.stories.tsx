import React from 'react'
import styled from 'styled-components'
import { Meta, StoryFn } from '@storybook/react'

import { spacing } from '@royalnavy/design-tokens'

import {
  IconFeedback,
  IconGrain,
  IconHome,
  IconLocalShipping,
  IconMessage,
  IconSettings,
  IconVerifiedUser,
} from '@royalnavy/icon-library'

import {
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  SidebarUser,
  SidebarWrapper,
  useSidebar,
} from '.'
import { Link } from '../../Link'
import { Notification, Notifications } from '../NotificationPanel'
import { ClassificationBar } from '../../ClassificationBar'
import { Button } from '../../Button'

const classificationBarArgTypes = {
  classificationBar: {
    control: 'select',
    options: ['None', 'Official', 'Secret'],
    mapping: {
      None: null,
      Official: <ClassificationBar />,
      Secret: <ClassificationBar isSecret />,
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
  title: 'Components/Sidebar',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
  argTypes: classificationBarArgTypes,
} as Meta<typeof Sidebar>

const StyledContainer = styled.div`
  height: 30rem;
`

const StyledSidebar = styled(Sidebar)``
const StyledMain = styled.main`
  flex: 1;
  text-align: right;
`

const StyledHeader = styled.div`
  padding: ${spacing('8')};
  display: flex;
  justify-content: space-between;
`

const SimpleSidebarNav = () => (
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

const ExampleContent = () => {
  const { isOpen, setIsOpen } = useSidebar()!
  return (
    <StyledMain>
      <StyledHeader>
        <span>Hello, World!</span>
        <Button onClick={() => setIsOpen(!isOpen)} size="small">{`${
          isOpen ? 'Close' : 'Open'
        } sidebar`}</Button>
      </StyledHeader>
    </StyledMain>
  )
}

export const Default: StoryFn<typeof Sidebar> = (props) => {
  return (
    <StyledContainer>
      <SidebarWrapper>
        <StyledSidebar {...props}>
          <SimpleSidebarNav />
        </StyledSidebar>
        <ExampleContent />
      </SidebarWrapper>
    </StyledContainer>
  )
}

Default.args = {}

export const WithSubNavigation: StoryFn<typeof Sidebar> = (props) => {
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
    <StyledContainer>
      <SidebarWrapper>
        <StyledSidebar {...props}>{sidebarNavWithSub}</StyledSidebar>
        <ExampleContent />
      </SidebarWrapper>
    </StyledContainer>
  )
}

WithSubNavigation.storyName = 'Sub-navigation'

export const WithHeader: StoryFn<typeof Sidebar> = (props) => {
  return (
    <StyledContainer>
      <SidebarWrapper>
        <StyledSidebar {...props} icon={<IconGrain />} title="Application Name">
          <SimpleSidebarNav />
        </StyledSidebar>
        <ExampleContent />
      </SidebarWrapper>
    </StyledContainer>
  )
}

WithHeader.storyName = 'Header'

export const WithUserMenu: StoryFn<typeof Sidebar> = (props) => {
  const userWithLinks = (
    <SidebarUser
      initials="HN"
      name="Horatio Nelson"
      userLink={<Link href="#">Profile</Link>}
      exitLink={<Link href="#">Logout</Link>}
    />
  )

  return (
    <StyledContainer>
      <SidebarWrapper>
        <StyledSidebar {...props} user={userWithLinks}>
          <SimpleSidebarNav />
        </StyledSidebar>
        <ExampleContent />
      </SidebarWrapper>
    </StyledContainer>
  )
}

WithUserMenu.storyName = 'User menu'

const WithNotificationsTemplate: StoryFn<typeof Sidebar> = (props) => {
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

  return (
    <StyledContainer>
      <SidebarWrapper>
        <StyledSidebar
          {...props}
          notifications={notifications}
          hasUnreadNotification
        >
          <SimpleSidebarNav />
        </StyledSidebar>
        <ExampleContent />
      </SidebarWrapper>
    </StyledContainer>
  )
}

export const WithNotifications = WithNotificationsTemplate.bind({})
WithNotifications.storyName = 'Notifications'

export const WithUserMenuOpen: StoryFn<typeof Sidebar> = (props) => {
  const userWithLinks = (
    <SidebarUser
      initials="HN"
      name="Horatio Nelson"
      userLink={<Link href="#">Profile</Link>}
      exitLink={<Link href="#">Logout</Link>}
      initialIsOpen
    />
  )

  return (
    <StyledContainer>
      <SidebarWrapper>
        <StyledSidebar {...props} user={userWithLinks}>
          <SimpleSidebarNav />
        </StyledSidebar>
        <ExampleContent />
      </SidebarWrapper>
    </StyledContainer>
  )
}
WithUserMenuOpen.parameters = {
  docs: { disable: true },
}
WithUserMenuOpen.storyName = 'User menu open'

export const WithNotificationsOpen = WithNotifications.bind({})
WithNotificationsOpen.args = {
  initialIsNotificationsOpen: true,
}
WithNotificationsOpen.parameters = {
  docs: { disable: true },
}
WithNotificationsOpen.storyName = 'Notifications open'

export const WithClassificationBar = Default.bind({})
WithClassificationBar.args = {
  ...Default.args,
  classificationBar: <ClassificationBar />,
}

WithClassificationBar.argTypes = {
  classificationBar: classificationBarArgTypes,
}

WithClassificationBar.storyName = 'Classification bar'
