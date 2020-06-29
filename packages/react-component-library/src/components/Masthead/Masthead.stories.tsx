import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Link } from '../Link'
import { Masthead, MastheadUser } from '.'
import { Notification, Notifications } from '../NotificationPanel'
import { MastheadNav, MastheadNavItem } from './MastheadNav'

const stories = storiesOf('Masthead', module)

const CustomLogo = () => (
  <svg width="21" height="19" viewBox="0 0 21 19">
    <defs>
      <path
        id="app-name-a"
        d="M17.0433594,8.00957031 C17.2230469,8.05898438 17.4162109,8.0859375 17.6138672,8.0859375 C18.1125,8.0859375 18.5707031,7.91523438 18.9345703,7.63222656 L21.5669922,9.3796875 L21.5669922,18.9300781 C21.5669922,19.9857422 20.7044922,20.8482422 19.6488281,20.8482422 L3.35566406,20.8482422 C2.3,20.8482422 1.4375,19.9857422 1.4375,18.9300781 L1.4375,16.3605469 L4.19121094,13.7820313 C4.50566406,13.9572266 4.86503906,14.0605469 5.25136719,14.0605469 C5.83535156,14.0605469 6.3609375,13.8314453 6.74726563,13.4585938 L9.33476563,14.9634766 C9.31230469,15.09375 9.29882813,15.2285156 9.29882813,15.3632813 C9.29882813,16.5537109 10.2646484,17.5195313 11.4550781,17.5195313 C12.6455078,17.5195313 13.6113281,16.5537109 13.6113281,15.3632813 C13.6113281,14.8466797 13.4316406,14.375 13.1261719,14.0021484 L17.0433594,8.00957031 Z M5.25585937,9.74804688 C4.06542969,9.74804688 3.09960937,10.7138672 3.09960937,11.9042969 C3.09960937,12.1693359 3.14902344,12.4208984 3.234375,12.6544922 L1.4375,14.375 L1.4375,4.07441406 C1.4375,3.01875 2.3,2.15625 3.35566406,2.15625 L19.6443359,2.15625 C20.7,2.15625 21.5625,3.01875 21.5625,4.07441406 L21.5625,7.67265625 L19.7072266,6.4328125 C19.7431641,6.27109375 19.765625,6.10039063 19.765625,5.92519531 C19.765625,4.73476563 18.7998047,3.76894531 17.609375,3.76894531 C16.4189453,3.76894531 15.453125,4.73476563 15.453125,5.92519531 C15.453125,6.39238281 15.6013672,6.82363281 15.8529297,7.17402344 L11.9267578,13.2564453 C11.7785156,13.225 11.6212891,13.2070313 11.4595703,13.2070313 C10.9384766,13.2070313 10.4667969,13.3867188 10.0939453,13.6921875 L7.39414063,12.1828125 C7.403125,12.0929688 7.41210937,11.9986328 7.41210937,11.9042969 C7.41210937,10.7138672 6.44628906,9.74804688 5.25585937,9.74804688 Z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(-1 -2)">
      <rect width="23" height="23" />
      <mask id="app-name-b" fill="#000">
        <use href="#app-name-a" />
      </mask>
      <use fill="#ff00ff" href="#app-name-a" />
      <g fill="#00ff00" mask="url(#app-name-b)">
        <rect width="27" height="23" transform="translate(-2)" />
      </g>
    </g>
  </svg>
)

const user = <MastheadUser initials="AT" link={<Link href="/user-profile" />} />

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

stories.add('With search', () => (
  <Masthead
    onSearch={action('onSearch')}
    searchPlaceholder="Search..."
    title="Test"
  />
))

stories.add('With search and Avatar', () => (
  <div>
    <Masthead
      onSearch={action('onSearch')}
      searchPlaceholder="Search..."
      title="Test"
      user={user}
      notifications={null}
      hasUnreadNotification
    />
    <p>More text below to check the dropdown appears below</p>
  </div>
))

stories.add('Without search', () => <Masthead title="Test" />)

stories.add('Custom logo', () => <Masthead title="Test" Logo={CustomLogo} />)

stories.add('Without logo', () => (
  <Masthead title="Test" hasDefaultLogo={false} />
))

stories.add('Without logo, with navigation', () => (
  <Masthead
    title="Test"
    hasDefaultLogo={false}
    nav={(
      <MastheadNav>
        <MastheadNavItem
          link={<Link href="/home">Get started</Link>}
          isActive
        />
        <MastheadNavItem link={<Link href="/styles">Styles</Link>} />
        <MastheadNavItem link={<Link href="/components">Components</Link>} />
        <MastheadNavItem link={<Link href="/about">About</Link>} />
      </MastheadNav>
    )}
  />
))

stories.add('all but navigation', () => (
  <Masthead
    homeLink={<Link href="/" />}
    notifications={notifications}
    onSearch={action('onSearch')}
    searchPlaceholder="Search"
    title="Test"
    hasUnreadNotification
    user={user}
  />
))

stories.add('With navigation', () => (
  <Masthead
    homeLink={<Link href="/" />}
    nav={(
      <MastheadNav>
        <MastheadNavItem
          link={<Link href="/home">Get started</Link>}
          isActive
        />
        <MastheadNavItem link={<Link href="/styles">Styles</Link>} />
        <MastheadNavItem link={<Link href="/components">Components</Link>} />
        <MastheadNavItem link={<Link href="/about">About</Link>} />
      </MastheadNav>
    )}
    notifications={notifications}
    onSearch={action('onSearch')}
    searchPlaceholder="Search"
    title="Test"
    hasUnreadNotification
    user={user}
  />
))
