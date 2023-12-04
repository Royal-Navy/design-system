import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import {
  IconChatBubble,
  IconExitToApp,
  IconPerson,
  IconSettings,
  IconHome,
} from '@royalnavy/icon-library'
import { css } from 'styled-components'

import { Link } from '../../Link'
import {
  Masthead,
  MastheadNav,
  MastheadNavItem,
  MastheadUser,
  MastheadUserItem,
} from '.'
import { Notification, Notifications } from '../NotificationPanel'
import { MASTHEAD_SUBCOMPONENT } from './constants'

export default {
  args: {
    title: 'Royal Navy Design System',
  },
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
  hasUnreadNotification: true,
}

export const CustomLogo: ComponentStory<typeof Masthead> = (props) => (
  <Masthead {...props} Logo={IconHome} />
)

CustomLogo.storyName = 'Custom logo'
CustomLogo.args = {
  onSearch: null,
}

export const WithoutLogo: ComponentStory<typeof Masthead> = (props) => (
  <Masthead {...props} hasDefaultLogo={false} />
)

WithoutLogo.storyName = 'Without logo'
WithoutLogo.args = {
  onSearch: null,
}

export const WithSearch: ComponentStory<typeof Masthead> = (props) => (
  <Masthead {...props} />
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

  return <Masthead {...props} user={user} />
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

  return <Masthead {...props} homeLink={<Link href="#" />} nav={nav} />
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

  return <Masthead {...props} notifications={notifications} />
}

WithNotifications.storyName = 'With notifications'
WithNotifications.args = {
  onSearch: null,
}

export const WithSearchOpen = Default.bind({})
WithSearchOpen.args = {
  initialOpenSubcomponent: MASTHEAD_SUBCOMPONENT.SEARCH,
}
WithSearchOpen.storyName = 'With search open'
WithSearchOpen.parameters = {
  docs: { disable: true },
}

export const WithNotificationsOpen: ComponentStory<typeof Masthead> = (
  args
) => (
  <div
    css={css`
      height: 25rem;
    `}
  >
    <Default {...args} />
  </div>
)
WithNotificationsOpen.args = {
  initialOpenSubcomponent: MASTHEAD_SUBCOMPONENT.NOTIFICATIONS,
}
WithNotificationsOpen.storyName = 'With notifications open'
WithNotificationsOpen.parameters = {
  docs: { disable: true },
}

export const WithUserMenuOpen: ComponentStory<typeof Masthead> = (args) => {
  const user = (
    <MastheadUser initials="AB" initialIsOpen>
      <MastheadUserItem
        icon={<IconPerson />}
        link={<Link href="#">Profile</Link>}
      />
      <MastheadUserItem
        icon={<IconSettings />}
        link={<Link href="#">Settings</Link>}
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
    <div
      css={css`
        height: 10rem;
      `}
    >
      <Masthead {...args} homeLink={<Link href="#" />} nav={nav} user={user} />
    </div>
  )
}
WithUserMenuOpen.storyName = 'With user options open'
WithUserMenuOpen.parameters = {
  docs: { disable: true },
}
