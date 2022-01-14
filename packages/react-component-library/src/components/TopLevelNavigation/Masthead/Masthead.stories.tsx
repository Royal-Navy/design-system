import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  IconChatBubble,
  IconExitToApp,
  IconPerson,
  IconSettings,
  IconHome,
} from '@defencedigital/icon-library'

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
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Masthead>

export const Default: ComponentStory<typeof Masthead> = (props) => {
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

  const nav = (
    <MastheadNav>
      <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
      <MastheadNavItem link={<Link href="#">Styles</Link>} />
      <MastheadNavItem link={<Link href="#">Components</Link>} />
      <MastheadNavItem link={<Link href="#">About</Link>} />
    </MastheadNav>
  )

  return (
    <Masthead
      {...props}
      homeLink={<Link href="#" />}
      nav={nav}
      notifications={notifications}
      user={user}
    />
  )
}

Default.args = {
  searchPlaceholder: null,
  title: 'Defence Digital Design System',
  hasUnreadNotification: true,
}

export const CustomLogo: ComponentStory<typeof Masthead> = (props) => (
  <Masthead {...props} title="Defence Digital Design System" Logo={IconHome} />
)

CustomLogo.storyName = 'Custom logo'
CustomLogo.args = {
  onSearch: null,
}

export const WithoutLogo: ComponentStory<typeof Masthead> = (props) => (
  <Masthead
    {...props}
    title="Defence Digital Design System"
    hasDefaultLogo={false}
  />
)

WithoutLogo.storyName = 'Without logo'
WithoutLogo.args = {
  onSearch: null,
}

export const WithSearch: ComponentStory<typeof Masthead> = (props) => (
  <Masthead
    {...props}
    searchPlaceholder="Search..."
    title="Defence Digital Design System"
  />
)

WithSearch.storyName = 'With search'

export const WithAvatarLinks: ComponentStory<typeof Masthead> = (props) => {
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

  return (
    <Masthead {...props} title="Defence Digital Design System" user={user} />
  )
}

WithAvatarLinks.storyName = 'With avatar links'
WithAvatarLinks.args = {
  onSearch: null,
}

export const WithNavigation: ComponentStory<typeof Masthead> = (props) => {
  const nav = (
    <MastheadNav>
      <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
      <MastheadNavItem link={<Link href="#">Styles</Link>} />
      <MastheadNavItem link={<Link href="#">Components</Link>} />
      <MastheadNavItem link={<Link href="#">About</Link>} />
    </MastheadNav>
  )

  return (
    <Masthead
      {...props}
      homeLink={<Link href="#" />}
      title="Defence Digital Design System"
      nav={nav}
    />
  )
}

WithNavigation.storyName = 'With navigation'
WithNavigation.args = {
  onSearch: null,
}

export const WithNotifications: ComponentStory<typeof Masthead> = (props) => {
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

  return (
    <Masthead
      {...props}
      title="Defence Digital Design System"
      notifications={notifications}
    />
  )
}

WithNotifications.storyName = 'With notifications'
WithNotifications.args = {
  onSearch: null,
}
