import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import {
  IconChatBubble,
  IconExitToApp,
  IconPerson,
  IconSettings,
  IconHome,
} from '@royalnavy/icon-library'

import { Link } from '../../Link'
import {
  Masthead,
  MastheadNav,
  MastheadNavItem,
  MastheadUser,
  MastheadUserItem,
} from '.'
import { Notification, Notifications } from '../NotificationPanel'

export default {
  component: Masthead,
  subcomponents: {
    MastheadNav,
    MastheadNavItem,
    MastheadUser,
    MastheadUserItem,
    Notifications,
    Notification,
  },
  title: 'Masthead',
} as Meta

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

const user = (
  <MastheadUser initials="RN">
    <MastheadUserItem
      icon={<IconPerson />}
      link={<Link href="#">Profile</Link>}
    />
    <MastheadUserItem
      icon={<IconSettings />}
      link={<Link href="#">Settings</Link>}
    />
    <MastheadUserItem
      icon={<IconChatBubble />}
      link={<Link href="#">Support</Link>}
    />
    <MastheadUserItem
      icon={<IconExitToApp />}
      link={<Link href="#">Logout</Link>}
    />
  </MastheadUser>
)

export const Default = (props: any) => (
  <Masthead
    {...props}
    homeLink={<Link href="#" />}
    nav={
      <MastheadNav>
        <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
        <MastheadNavItem link={<Link href="#">Styles</Link>} />
        <MastheadNavItem link={<Link href="#">Components</Link>} />
        <MastheadNavItem link={<Link href="#">About</Link>} />
      </MastheadNav>
    }
    notifications={notifications}
    user={user}
  />
)

Default.args = {
  onSearch: (e: React.SyntheticEvent) => console.log,
  searchPlaceholder: 'Search',
  title: 'Royal Navy Design System',
  hasUnreadNotification: true,
}

export const CustomLogo = () => (
  <Masthead title="Royal Navy Design System" Logo={IconHome} />
)

CustomLogo.storyName = 'Custom logo'

export const WithoutLogo = () => (
  <Masthead title="Royal Navy Design System" hasDefaultLogo={false} />
)

WithoutLogo.storyName = 'Without logo'

export const WithSearch = () => (
  <Masthead
    onSearch={(term: string) => console.log}
    searchPlaceholder="Search..."
    title="Royal Navy Design System"
  />
)

WithSearch.storyName = 'With search'

export const WithAvatarLinks = () => (
  <Masthead title="Royal Navy Design System" user={user} />
)

WithAvatarLinks.storyName = 'With avatar links'

export const WithNotifications = () => (
  <Masthead title="Royal Navy Design System" notifications={notifications} />
)

WithNotifications.storyName = 'With notifications'

export const WithNavigation = () => (
  <Masthead
    homeLink={<Link href="#" />}
    title="Royal Navy Design System"
    nav={
      <MastheadNav>
        <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
        <MastheadNavItem link={<Link href="#">Styles</Link>} />
        <MastheadNavItem link={<Link href="#">Components</Link>} />
        <MastheadNavItem link={<Link href="#">About</Link>} />
      </MastheadNav>
    }
  />
)

WithNavigation.storyName = 'With navigation'
