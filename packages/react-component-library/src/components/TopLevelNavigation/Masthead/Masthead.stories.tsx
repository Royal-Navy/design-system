import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
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

const stories = storiesOf('Masthead', module)
const examples = storiesOf('Masthead/Examples', module)

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

stories.add('Default', () => (
  <Masthead
    homeLink={<Link href="#" />}
    nav={(
      <MastheadNav>
        <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
        <MastheadNavItem link={<Link href="#">Styles</Link>} />
        <MastheadNavItem link={<Link href="#">Components</Link>} />
        <MastheadNavItem link={<Link href="#">About</Link>} />
      </MastheadNav>
    )}
    notifications={notifications}
    onSearch={action('onSearch')}
    searchPlaceholder="Search"
    title="Royal Navy Design System"
    hasUnreadNotification
    user={user}
  />
))

examples.add('Custom logo', () => (
  <Masthead title="Royal Navy Design System" Logo={IconHome} />
))

examples.add('Without logo', () => (
  <Masthead title="Royal Navy Design System" hasDefaultLogo={false} />
))

examples.add('With search', () => (
  <Masthead
    onSearch={action('onSearch')}
    searchPlaceholder="Search..."
    title="Royal Navy Design System"
  />
))

examples.add('With avatar links', () => (
  <Masthead title="Royal Navy Design System" user={user} />
))

examples.add('With notifications', () => (
  <Masthead title="Royal Navy Design System" notifications={notifications} />
))

examples.add('With navigation', () => (
  <Masthead
    homeLink={<Link href="#" />}
    title="Royal Navy Design System"
    nav={(
      <MastheadNav>
        <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
        <MastheadNavItem link={<Link href="#">Styles</Link>} />
        <MastheadNavItem link={<Link href="#">Components</Link>} />
        <MastheadNavItem link={<Link href="#">About</Link>} />
      </MastheadNav>
    )}
  />
))

examples.add('With navigation', () => (
  <Masthead
    nav={(
      <MastheadNav>
        <MastheadNavItem link={<Link href="#">Get started</Link>} isActive />
        <MastheadNavItem link={<Link href="#">Styles</Link>} />
        <MastheadNavItem link={<Link href="#">Components</Link>} />
        <MastheadNavItem link={<Link href="#">About</Link>} />
      </MastheadNav>
    )}
    title="Royal Navy Design System"
  />
))
