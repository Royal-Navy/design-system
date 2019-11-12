---
title: Masthead
description: A top level section displayed at the top of the page
header: true
---

import { Icons, Masthead, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'
import MastheadComponent from '../../images/components/masthead/component.svg'
import MastheadAnatomy from '../../images/components/masthead/anatomy.svg'
import MastheadStates from '../../images/components/masthead/states.svg'


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
<CodeHighlighter source={`<Masthead homeLink={{href:'/'}} title="Test" />`} language="javascript">
  <Masthead homeLink={{href:'/'}} title="Test" />
</CodeHighlighter>

### Masthead with custom logo
<CodeHighlighter source={`<Masthead homeLink={{href:'/'}} title="Test" Logo={CustomLogo} />`} language="javascript">
<Masthead homeLink={{href:'/'}} title="Test" Logo={Icons.Bell} />
</CodeHighlighter>

### Masthead with search
<CodeHighlighter source={`<Masthead homeLink={{href:'/'}} title="Test" onSearch={onSearch} searchPlaceholder="Search" />`} language="javascript">
  <Masthead
    homeLink={{href:'/'}}
    onSearch={term => console.log(`Search for: ${term}`)}
    searchPlaceholder="Search"
    title="Test"
  />
</CodeHighlighter>

### Fully loaded
<CodeHighlighter source={`<Masthead 
  homeLink={{href:'/'}}
  navItems={[
    { label: 'Get started', href: '/get-started', active: true,},
    { label: 'Styles', href: '/styles', },
    { label: 'Components', href: '/components', },
    { label: 'About', href: '/about', },
  ]}
  notifications={notifications}
  onSearch={onSearch} 
  searchPlaceholder="Search" 
  title="Test" 
  unreadNotification={true}
  user={{ initials: 'XT', href: '/userprofile' }}
/>`} language="javascript">
  <Masthead
    homeLink={{href:'/'}}
    navItems={[
      { label: 'Get started', href: '/get-started', active:true, },
      { label: 'Styles', href: '/styles', },
      { label: 'Components', href: '/components' },
      { label: 'About', href: '/about', },
    ]}
    notifications={null}
    onSearch={term => console.log(`Search for: ${term}`)}
    searchPlaceholder="Search"
    title="Test"
    unreadNotification={true}
    user={{ initials: 'XT', href: '/userprofile' }}
  />
</CodeHighlighter>

### Properties
<DataTable data={[
  {
    Name: 'homeLink',
    Type: 'LinkTypes',
    Required: 'True',
    Description: 'An object typically containing a `to` or `href` property to indicate the property LinkComponent to send the user back to the homepage for the service.',
  },
  {
    Name: 'LinkComponent',
    Type: 'Component',
    Required: 'False',
    Description: 'A custom component to render links in the Masthead. If nothing is passed a component requiring a href will be used and will render an anchor tag. If using a library such as React Router, than the ‘Link’ component from that library should be passed as a property.',
  },
  {
    Name: 'Logo',
    Type: 'React. ComponentType',
    Required: 'False',
    Description: 'A 21x19 logo or if none is provided a default is used.',
  },
  {
    Name: 'navItems',
    Type: 'NavItem[] ',
    Required: 'True',
    Description: 'An array of objects that must at least contain a label. If no custom component is provided then provide a href, otherwise provide the required property associated with the LinkComponent',
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
    Name: 'unreadNotification',
    Type: 'boolean',
    Required: 'False',
    Description: 'If there are unread notifications then this will cause a small blue indicator to be displayed to alert the user.',
  },
  {
    Name: 'user',
    Type: 'UserType',
    Required: 'False',
    Description: 'If your application has a User Profile page, pass in the User object to add their initials to the Avatar sub-component. This Avatar provides a link to the User’s profile.',
  },
]} />
<br />
<DataTable caption="NavItem" data={[
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The text for the link.',
  },
  {
    Name: 'active',
    Type: 'boolean',
    Required: 'False',
    Default: 'False',
    Description: 'Is this the current active link?'
  }
]} />
<br />
<DataTable caption="UserType" data={[
  {
    Name: 'initials',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: '',
  },  
  {
    Name: 'to or href',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: "A url to send the user to, if they wish to see their profile.",
  },
]} />
</Tab>
</TabSet>
