---
title: Masthead
description: A top level section displayed at the top of the page
header: true
---

import { Icons, Masthead, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Overview
The Masthead is a simple section at the top of the page that allows the developer to communicate the service logo, name and offer a search bar.

## Usage

<TabSet>

<Tab title="Design">

  ## Design
  TBD.

</Tab>


<Tab title="Develop">

The masthead is a simple header section for a website that 

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
  NotificationsPopoverContent={notificationContent}
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
    NotificationsPopoverContent={(<p>Notification popover content</p>)}
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
    Description: 'An object typically containing a to or href property to indicate the property to use in the LinkComponent to send the user back to the homepage for the service.',
  },
  {
    Name: 'LinkComponent',
    Type: 'Component',
    Required: 'False',
    Description: 'A custom component to render links in the Masthead. If nothing is passed a component requiring a href will be used and will render an anchor tag. If using a library such as React Router then the `Link` component from that library should be passed as a property.',
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
    Description: 'An array of objects that must least contain a label. If no custom component is provided then provide a href, otherwise provide the the required property associated with the LinkComponent',
  },
  {
    Name: 'NotificationsPopoverContent',
    Type: 'Element ',
    Required: 'False',
    Description: 'If a notification bell should be displayed and a popover with notification content then this property contains the content to show in that popover. Ideally this would contain recent notifications with indication as to if they have been read or not and a link to read them and view others.',
  },
  {
    Name: 'onSearch',
    Type: '(term: string) => void',
    Required: 'False',
    Description: 'If a search function is provided the searchbox is shown and the function called on submission',
  },
  {
    Name: 'searchPlaceholder',
    Type: 'String',
    Required: 'False',
    Description: 'Provide a placeholder attribute for the search text input if desired',
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
    Description: 'If there is a user profile page then pass in a user object detailing the users initials to display a link to profile',
  },
]} />
<br />
<DataTable caption="NavItem" data={[
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The text for the link',
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
    Description: 'A url to send the user to if they wish to see the users profile',
  },
]} />
</Tab>
</TabSet>
