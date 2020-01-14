---
title: Masthead
description: A top level section displayed at the top of the page
header: true
---

import { Icons, Link, Masthead, MastheadNav, MastheadNavItem, MastheadUser, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'
import MastheadComponent from '../../images/components/masthead/Component'
import MastheadAnatomy from '../../images/components/masthead/Anatomy'
import MastheadStates from '../../images/components/masthead/States'


# Overview
The Masthead is a simple section at the top of the page that allows the developer to communicate the service logo, user profile, notifications, and offer a search bar.

<MastheadComponent />

## Usage

<TabSet>

<Tab title="Design">

  <SketchWidget name="Masthead" href="/standards-toolkit.sketch" />

  The Masthead component is a main navigational component that resides at the top of an application. It is fixed in place and has a higher stacking order than the rest of the page, so content will flow underneath it on scroll. There should only be one Masthead component per page.

  ### Anatomy

  <MastheadAnatomy />

  1. **Container**. The Masthead Container wraps the entire Masthead and ensures it stays pinned to the top of the viewport.
  2. **Search**. This button triggers the appearance of the Search Bar. When clicked, the page links in the Header.
  3. **Notifications**. This icon displays to the user when they have an unread notification. Clicking on the icon will display the Notification Sheet.
  4. **Profile**. This button links to the User's profile, including settings.
  5. **App Nav**. Works similarly to the [Tabset](/components/tab-set/), allowing the user to quickly navigate between multiple application pages.

### States
Aside from the active page links (an example of these states is shown in the [Tabset Docs](/components/tab-set/)), the Masthead component only has two states. When the Search button is clicked in the top row of the Masthead, the page links are replaced with a full width search bar. Clicking on the Search button again will hide the bar.
<MastheadStates />

</Tab>


<Tab title="Develop">

### Basic
<CodeHighlighter source={`<Masthead
  homeLink={<Link href="/" />}
  title="Test"
/>`} language="javascript">
<Masthead
  homeLink={<Link href="/" />}
  title="Test"
/>
</CodeHighlighter>

### Masthead with custom logo
<CodeHighlighter source={`<Masthead
  homeLink={<Link href="/" />}
  title="Test"
  Logo={CustomLogo}
/>`} language="javascript">
<Masthead
  homeLink={<Link href="/" />}
  title="Test"
  Logo={Icons.Bell}
/>
</CodeHighlighter>

### Masthead with search
<CodeHighlighter source={`<Masthead
  homeLink={<Link href="/" />}
  onSearch={() => { /* handle search */ }}
  searchPlaceholder="Search"
  title="test"
/>`} language="javascript">
<Masthead
  homeLink={<Link href="/" />}
  onSearch={() => { /* handle search */ }}
  searchPlaceholder="Search"
  title="test"
/>
</CodeHighlighter>

### Fully loaded
<CodeHighlighter source={`<Masthead
  homeLink={<Link href="/" />}
  nav={(
    <MastheadNav>
      <MastheadNavItem link={<Link href="/home">Get started</Link>} isActive />
      <MastheadNavItem link={<Link href="/styles">Styles</Link>} />
      <MastheadNavItem link={<Link href="/components">Components</Link>} />
      <MastheadNavItem link={<Link href="/about">About</Link>} />
    </MastheadNav>
  )}
  notifications={notifications}
  onSearch={() => { /* handle search */ }}
  searchPlaceholder="Search"
  title="Test"
  hasUnreadNotification
  user={
    <MastheadUser initials="AT" link={<Link href="/user-profile" />} />
  }
/>`} language="javascript">
<Masthead
  homeLink={<Link href="/" />}
  nav={(
    <MastheadNav>
      <MastheadNavItem link={<Link href="/home">Get started</Link>} isActive />
      <MastheadNavItem link={<Link href="/styles">Styles</Link>} />
      <MastheadNavItem link={<Link href="/components">Components</Link>} />
      <MastheadNavItem link={<Link href="/about">About</Link>} />
    </MastheadNav>
  )}
  notifications={null}
  onSearch={() => { /* handle search */ }}
  searchPlaceholder="Search"
  title="Test"
  hasUnreadNotification
  user={
    <MastheadUser initials="AT" link={<Link href="/user-profile" />} />
  }
/>
</CodeHighlighter>

### Properties
<DataTable caption="MastHead" data={[
  {
    Name: 'hasUnreadNotification',
    Type: 'boolean',
    Required: 'False',
    Default: 'False',
    Description: 'If there are unread notifications then this will cause a small blue indicator to be displayed to alert the user.',
  },
  {
    Name: 'homeLink',
    Type: 'React.ReactElement<LinkTypes>',
    Required: 'False',
    Description: 'A `Link` which will contain the `href` for sending the user back to home.',
  },
  {
    Name: 'Logo',
    Type: 'React. ComponentType',
    Required: 'False',
    Description: 'A 21x19 logo or if none is provided a default is used.',
  },
  {
    Name: 'nav',
    Type: 'React.ReactElement<ScrollableNavProps>',
    Required: 'False',
    Description: 'Navigation for the MastHead.',
  },
  {
    Name: 'notifications',
    Type: 'React.ReactElement<NotificationsProps>',
    Required: 'False',
    Description: 'This property contains the content for the Notifications Popover. These are recent notifications, including read status, and a link to read them.',
  },
  {
    Name: 'onSearch',
    Type: '(term: string) => void',
    Required: 'False',
    Description: 'If a search function is provided the searchbox is shown and the function called on submission.',
  },
  {
    Name: 'searchPlaceholder',
    Type: 'String',
    Required: 'False',
    Description: 'Provide a placeholder attribute for the search text input if desired.',
  },
  {
    Name: 'title',
    Type: 'String',
    Required: 'True',
    Description: 'A service name that will be displayed next to the logo',
  },
  {
    Name: 'user',
    Type: 'React.ReactElement<MastheadUserProps>',
    Required: 'False',
    Description: 'If your application has a User Profile page, specify a `MastheadUser` to add their initials to the Avatar sub-component. This Avatar provides a link to the User’s profile.',
  },
]} />
<br />
<DataTable caption="MastheadNav" data={[
  {
    Name: 'children',
    Type: 'React.ReactElement<ScrollableNavItemProps>[]',
    Required: 'True',
    Default: '',
    Description: 'Each child represents a nav item.',
  },
]} />
<br />
<DataTable caption="MastheadNavItem" data={[
  {
    Name: 'isActive',
    Type: 'boolean',
    Required: 'False',
    Default: 'False',
    Description: 'Is this the current active item?'
  },
  {
    Name: 'link',
    Type: 'React.ReactElement<LinkTypes>',
    Required: 'True',
    Default: '',
    Description: 'The `Link` to be rendered.',
  },
]} />
<br />
<DataTable caption="MastheadUser" data={[
  {
    Name: 'initials',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Initials of the user.',
  },  
  {
    Name: 'link',
    Type: 'React.ReactElement<LinkTypes>',
    Required: 'True',
    Default: '',
    Description: "A url to send the user to, if they wish to see their profile.",
  },
]} />
</Tab>
</TabSet>
