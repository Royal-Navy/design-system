---
title: Sidebar (Experimental)
description: An application sidebar with icons and indicators, fixed to the left of the screen.
header: true
draft: true
---

import { TabSet, Tab, Link, SidebarE, SidebarNavE, SidebarNavItemE, SidebarUserE, SidebarUserItemE, SidebarWrapperE, Notification, Notifications } from '@royalnavy/react-component-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'
import { IconHome, IconLocalShipping, IconVerifiedUser, IconGrain, IconPerson, IconExitToApp } from '@royalnavy/icon-library'

# Overview

The Sidebar is a navigational component. It is fixed to the left-hand of the screen and extends the full height of the browser. This component stays in place whilst the application scrolls, ensuring top navigational items are always within the user's reach.

## Usage

TBC

<TabSet>
<Tab title="Design">

### Anatomy

TBC

### Sizing & Spacing

TBC

### Hierarchy & Placement

TBC

### States

TBC

### Variations

TBC

</Tab>

<Tab title="Develop">

### Basic usage

<CodeHighlighter source={`<SidebarWrapperE>
  <SidebarE>
    <SidebarNavE>
      <SidebarNavItemE 
        icon={<IconHome />} 
        link={<Link href="/">Dashboard</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconVerifiedUser />} 
        link={<Link href="/reports">Reports</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconLocalShipping />} 
        link={<Link href="/platforms">Platforms</Link>} 
      />
    </SidebarNavE>
  </SidebarE>
  <Main />
</SidebarWrapperE>`} language="javascript">
  <SidebarWrapperE>
    <SidebarE>
      <SidebarNavE>
        <SidebarNavItemE 
          icon={<IconHome />} 
          link={<Link href="/">Dashboard</Link>} 
        />
        <SidebarNavItemE 
          icon={<IconVerifiedUser />} 
          link={<Link href="/reports">Reports</Link>} 
        />
        <SidebarNavItemE 
          icon={<IconLocalShipping />} 
          link={<Link href="/platforms">Platforms</Link>} 
        />
      </SidebarNavE>
    </SidebarE>
    <Main/>
  </SidebarWrapperE>
</CodeHighlighter>

### With header

<CodeHighlighter source={`<SidebarWrapperE>
  <SidebarE icon={<IconGrain />} title="Application Name">
    <SidebarNavE>
      <SidebarNavItemE 
        icon={<IconHome />} 
        link={<Link href="/">Dashboard</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconVerifiedUser />} 
        link={<Link href="/reports">Reports</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconLocalShipping />} 
        link={<Link href="/platforms">Platforms</Link>} 
      />
    </SidebarNavE>
  </SidebarE>
  <Main/>
</SidebarWrapperE>`} language="javascript">
  <SidebarWrapperE>
    <SidebarE icon={<IconGrain />} title="Application Name">
      <SidebarNavE>
        <SidebarNavItemE 
          icon={<IconHome />} 
          link={<Link href="/">Dashboard</Link>} 
        />
        <SidebarNavItemE 
          icon={<IconVerifiedUser />} 
          link={<Link href="/reports">Reports</Link>} 
        />
        <SidebarNavItemE 
          icon={<IconLocalShipping />} 
          link={<Link href="/platforms">Platforms</Link>} 
        />
      </SidebarNavE>
    </SidebarE>
    <Main/>
  </SidebarWrapperE>
</CodeHighlighter>

### With sub-navigation

<CodeHighlighter source={`<SidebarWrapperE>
  <SidebarE icon={<IconGrain />} title="Application Name">
    <SidebarNavE>
      <SidebarNavItemE 
        icon={<IconHome />} 
        link={<Link href="/">Dashboard</Link>} 
      >
        <SidebarNavE>
          <SidebarNavItemE  
            link={<Link href="/sub-nav-item-1">Sub-nav-item 1</Link>} 
          />
        </SidebarNavE>
      </SidebarNavItemE>
      <SidebarNavItemE 
        icon={<IconVerifiedUser />} 
        link={<Link href="/reports">Reports</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconLocalShipping />} 
        link={<Link href="/platforms">Platforms</Link>} 
      />
    </SidebarNavE>
  </SidebarE>
  <Main/>
</SidebarWrapperE>`} language="javascript">
  <SidebarWrapperE>
    <SidebarE icon={<IconGrain />} title="Application Name">
      <SidebarNavE>
        <SidebarNavItemE 
          icon={<IconHome />} 
          link={<Link href="/">Dashboard</Link>} 
        >
          <SidebarNavE>
            <SidebarNavItemE  
              link={<Link href="/sub-nav-item-1">Sub-nav-item 1</Link>} 
            />
          </SidebarNavE>
        </SidebarNavItemE>
        <SidebarNavItemE 
          icon={<IconVerifiedUser />} 
          link={<Link href="/reports">Reports</Link>} 
        />
        <SidebarNavItemE 
          icon={<IconLocalShipping />} 
          link={<Link href="/platforms">Platforms</Link>} 
        />
      </SidebarNavE>
    </SidebarE>
    <Main/>
  </SidebarWrapperE>
</CodeHighlighter>

### With user link

<CodeHighlighter source={`<SidebarWrapperE>
  <SidebarE icon={<IconGrain />} title="Application Name" user={
    <SidebarUserE
      initials="HN"
      name="Horatio Nelson"
      link={<Link href="/user-profile">View profile</Link>}
    />
  }>
    <SidebarNavE>
      <SidebarNavItemE 
        icon={<IconHome />} 
        link={<Link href="/">Dashboard</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconVerifiedUser />} 
        link={<Link href="/reports">Reports</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconLocalShipping />} 
        link={<Link href="/platforms">Platforms</Link>} 
      />
    </SidebarNavE>
  </SidebarE>
  <Main/>
</SidebarWrapperE>`} language="javascript">
  <SidebarWrapperE>
    <SidebarE icon={<IconGrain />} title="Application Name" user={
      <SidebarUserE
        initials="HN"
        name="Horatio Nelson"
        link={<Link href="/user-profile">View profile</Link>}
      />
    }>
      <SidebarNavE>
        <SidebarNavItemE 
          icon={<IconHome />} 
          link={<Link href="/">Dashboard</Link>} 
        />
        <SidebarNavItemE 
          icon={<IconVerifiedUser />} 
          link={<Link href="/reports">Reports</Link>} 
        />
        <SidebarNavItemE 
          icon={<IconLocalShipping />} 
          link={<Link href="/platforms">Platforms</Link>} 
        />
      </SidebarNavE>
    </SidebarE>
    <Main/>
  </SidebarWrapperE>
</CodeHighlighter>

### With user menu

<CodeHighlighter source={`<SidebarWrapperE>
  <SidebarE icon={<IconGrain />} title="Application Name" user={
    <SidebarUserE
      initials="HN"
      name="Horatio Nelson"
      link={<Link href="/user-profile">View profile</Link>}
    >
      <SidebarUserItemE
        icon={<IconPerson />}
        link={<Link href="/user-profile">Profile</Link>}
      />
      <SidebarUserItemE
        icon={<IconExitToApp />}
        link={<Link href="/logout">Logout</Link>}
      />
    </SidebarUserE>
  }>
    <SidebarNavE>
      <SidebarNavItemE 
        icon={<IconHome />} 
        link={<Link href="/">Dashboard</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconVerifiedUser />} 
        link={<Link href="/reports">Reports</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconLocalShipping />} 
        link={<Link href="/platforms">Platforms</Link>} 
      />
    </SidebarNavE>
  </SidebarE>
  <Main/>
</SidebarWrapperE>`} language="javascript" />

### With notifications

<CodeHighlighter source={`<SidebarWrapperE>
  <SidebarE icon={<IconGrain />} title="Application Name" notifications={
    <Notifications link={<Link href="notifications" />}>
      <Notification
        link={<Link href="notifications/1" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
    </Notifications>
  } hasUnreadNotification>
    <SidebarNavE>
      <SidebarNavItemE 
        icon={<IconHome />} 
        link={<Link href="/">Dashboard</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconVerifiedUser />} 
        link={<Link href="/reports">Reports</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconLocalShipping />} 
        link={<Link href="/platforms">Platforms</Link>} 
      />
    </SidebarNavE>
  </SidebarE>
  <Main/>
</SidebarWrapperE>`} language="javascript">
<SidebarWrapperE>
  <SidebarE icon={<IconGrain />} title="Application Name" notifications={
    <Notifications link={<Link href="notifications" />}>
      <Notification
        link={<Link href="notifications/1" />}
        name="Thomas Stephens"
        action="added a new comment to your"
        on="review"
        when={new Date('2019-11-05T14:25:02.178Z')}
        description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
      />
    </Notifications>
  } hasUnreadNotification>
    <SidebarNavE>
      <SidebarNavItemE 
        icon={<IconHome />} 
        link={<Link href="/">Dashboard</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconVerifiedUser />} 
        link={<Link href="/reports">Reports</Link>} 
      />
      <SidebarNavItemE 
        icon={<IconLocalShipping />} 
        link={<Link href="/platforms">Platforms</Link>} 
      />
    </SidebarNavE>
  </SidebarE>
  <Main/>
</SidebarWrapperE>
</CodeHighlighter>

### SidebarE Properties

<DataTable data={[
  {
    Name: 'children',
    Type: 'React.ReactElement<SidebarNavEProps>',
    Required: 'True',
    Default: '',
    Description: 'Supply a menu',
  },
  {
    Name: 'icon',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: '',
    Description: 'Supply an icon to display in the header',
  },
  {
    Name: 'title',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Title text (usually the application name) to display in the header',
  },
  {
    Name: 'hasUnreadNotifications',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'Flag denoting the read status of notifications',
  },
  {
    Name: 'user',
    Type: 'React.ReactElement<SidebarUserEProps>',
    Required: 'False',
    Default: '',
    Description: 'A user object that include a user-profile link and optional collection of sub-menu items as children',
  },
  {
    Name: 'notifications',
    Type: 'React.ReactElement<NotificationsProps>',
    Required: 'True',
    Default: '',
    Description: 'A notification object that includes a collection of notifications as children',
  },
]} />

### SidebarNavE Properties

<DataTable data={[
  {
    Name: 'children',
    Type: 'React.ReactElement<SidebarNavItemE> | React.ReactElement<SidebarNavItemE>[]',
    Required: 'True',
    Default: '',
    Description: 'An array of items for displaying in the navigation',
  },
  {
    Name: 'onItemClick',
    Type: '(e: React.FocusEvent<HTMLElement>) => void',
    Required: 'False',
    Default: '',
    Description: 'A click event handler to apply to all menu items',
  },
]} />

### SidebarNavItemE Properties

<DataTable data={[
  {
    Name: 'icon',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: '',
    Description: 'Supply an icon to display next to the item text',
  },
  {
    Name: 'isActive',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'If the item is active it will render as highlighted',
  },
  {
    Name: 'link',
    Type: 'React.ReactElement<LinkTypes>',
    Required: 'True',
    Default: '',
    Description: 'Link component for creating the link',
  },
  {
    Name: 'onClick',
    Type: '(e: React.MouseEvent<HTMLElement>) => void',
    Required: 'False',
    Default: '',
    Description: 'Handler to be invoked when clicking the nav item',
  },
]} />

### SidebarUserE Properties

<DataTable data={[
  {
    Name: 'children',
    Type: 'React.ReactElement<SidebarUserItemE> | React.ReactElement<SidebarUserItemE>[]',
    Required: 'False',
    Default: '',
    Description: 'An array of items for displaying when clicking the user profile icon when the sidebar is collapsed',
  },
  {
    Name: 'link',
    Type: 'React.ReactElement<LinkTypes>',
    Required: 'True',
    Default: '',
    Description: 'Link component for navigating to the user profile',
  },
  {
    Name: 'initials',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'Intiials to display within the user avatar',
  },
  {
    Name: 'name',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'The full name or username associated with the user',
  },
]} />

### SidebarUserItemE Properties

<DataTable data={[
  {
    Name: 'icon',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: '',
    Description: 'Supply an icon to display next to the item text',
  },
  {
    Name: 'link',
    Type: 'React.ReactElement<LinkTypes>',
    Required: 'True',
    Default: '',
    Description: 'Link component for creating the link',
  }
]} />

</Tab>
</TabSet>
