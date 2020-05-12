---
title: Sidebar
description: An application sidebar with icons and indicators, fixed to the left of the screen.
header: true
---

import { Icons, Link, Sidebar, SidebarNav, SidebarNavItem, SidebarUser, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'
import SidebarComponent from '../../images/components/sidebar/Component'
import SidebarAnatomy from '../../images/components/sidebar/Anatomy'
import SidebarStates from '../../images/components/sidebar/States'

# Overview
The Sidebar is a navigational component for NELSON applications. It is fixed to the left-hand of the screen and extends the full height of the browser. This component stays in place whilst the application scrolls, ensuring top navigational items are always within the user's reach.

<SidebarComponent />

## Usage
Only one Sidebar component should be used per page. It should contain your top level navigational items, not sub-navigational items/actions for a single page.


<TabSet>

<Tab title="Design">

<SketchWidget name="Sidebar" href="/design-system.sketch" />

  ### Anatomy
  <SidebarAnatomy />

  The sidebar component has two main sections - the main navigational area at the top of the bar, and the fixed area at the bottom of the bar.

  1. **Container**. This is a fixed width and places the component on the left-hand edge of the application.
  2. **App Nav**. This section contains navigational items for the current application. This can be customised to meet the application's requirements.
  3. **Indicators**. The Indicator sections are fixed throughout all **NELSON** applications. This section (optionally) contains a profile button and a notification sheet.
  
### Sizing & Spacing
The Sidebar is only available in one size. As this is a top-level component, customisation is limited (outside of link destinations).

### States
<SidebarStates />

The sidebar has two states - `collapsed` and `expanded`. By default, the sidebar is collapsed to the left of the screen. Hovering on any of the App Nav link icons will expand the sidebar to show the associated labels.

### Hierarchy & Placement
As the Sidebar is a top-level component, only one should be used per application. It is fixed to the left-hand edge of the application.

</Tab>


<Tab title="Develop">

The `Sidebar` is a fragment, made up of multiple components combined to render a bar down the left of the screen with two main sections - The App Nav and the Indicators. The Indicators should display the current user's Avatar, with a link to their profile and an optional notifications button. The notification button can indicate if there are any unread notifications and toggle the display of recent ones.

The sidebar must be able to integrate with a number of different routing frameworks, as such it cannot simply rely on using an anchor tag to navigate. For this reason, the a `LinkComponent` component must be passed in as a property to the `Sidebar`. If no component is provided, a regular anchor will be used and will expect a href property in each of the navItems.

The top half of the `Sidebar` requires a collection of navigation items. The `navItems` property passed to the component must include a collection of objects containing an Image and a Label. The Image is displayed next to the Label as an icon.  If the link is associated with the current page then an 'active' property should be set. The link for each of the navigation items will be generated using the `LinkComponent` property sent to the sidebar, which by default will use a regular anchor tag.

The bottom half of the Sidebar has two optional items, the notification indicator and the user indicator.

If the application wishes to display the user's name in the form of their initials, then an object must be provided to the `user` property. This must include an `initials` property and a url property expected by the `LinkComponent`, e.g. 'to'.

If notifications are supported by an application, the Notification section will display an Icon. This can be used to toggle the display of the Notification Popover.

### Sidebar without notifications
A simple sidebar with no notification section, simply showing the current user and using the default Link component so, a regular anchor tag is used. 

<CodeHighlighter source={`<Sidebar
  nav={(
    <SidebarNav>
      <SidebarNavItem Image={Icons.House} link={<Link href="/">Home</Link>} />
      <SidebarNavItem
        Image={Icons.Graph}
        link={<Link href="/stats">Stats</Link>}
        isActive
      />
      <SidebarNavItem Image={Icons.Tools} link={<Link href="/tools">Tools</Link>} />
    </SidebarNav>
  )}
  user={<SidebarUser initials="XT" link={<Link href="/user-profile" />} />}
/>`} language="javascript" />

### Sidebar with notifications
This sidebar example indicates that the application supports notifications and that there are pending notifications to see.

<CodeHighlighter source={`<Sidebar
  nav={(
    <SidebarNav>
      <SidebarNavItem Image={Icons.House} link={<Link href="/">Home</Link>} />
      <SidebarNavItem
        Image={Icons.Graph}
        link={<Link href="/stats">Stats</Link>}
        isActive
      />
      <SidebarNavItem Image={Icons.Tools} link={<Link href="/tools">Tools</Link>} />
    </SidebarNav>
  )}
  notifications={(
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
  )}
  hasUnreadNotification
  user={<SidebarUser initials="XT" link={<Link href="/user-profile" />} />}
/>`} language="javascript" />

### Sidebar with React Router link
A simple sidebar with no notification section using the React Router Link component.

<CodeHighlighter source={`import { Link as ReactRouterLink } from 'react-router-dom'\n
<Sidebar
  nav={(
    <SidebarNav>
      <SidebarNavItem Image={Icons.House} link={<ReactRouterLink href="/">Home</ReactRouterLink>} />
      <SidebarNavItem
        Image={Icons.Graph}
        link={<ReactRouterLink href="/stats">Stats</ReactRouterLink>}
        isActive
      />
      <SidebarNavItem Image={Icons.Tools} link={<ReactRouterLink href="/tools">Tools</ReactRouterLink>} />
    </SidebarNav>
  )}
  user={<SidebarUser initials="XT" link={<ReactRouterLink href="/user-profile" />} />}
/>`} language="javascript" />

### Properties
<DataTable caption="Sidebar" data={[
  {
    Name: 'hasUnreadNotification',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'If there is an unread notification then display indicator',
  },
  {
    Name: 'nav',
    Type: 'React.ReactElement<SidebarNavProps>',
    Required: 'False',
    Default: '',
    Description: 'Component prop for the navigation',
  },
  {
    Name: 'notifications',
    Type: 'React.ReactElement<NotificationsProps>',
    Required: 'False',
    Default: '',
    Description: 'Component prop for the notifications.',
  },
  {
    Name: 'user',
    Type: 'React.ReactElement<SidebarUserProps>',
    Required: 'False',
    Default: '',
    Description: 'Component prop for display information about the current user',
  },
]} />
<br />
<DataTable caption="SidebarNav" data={[
  {
    Name: 'children',
    Type: 'React.ReactElement<NavItem> | React.ReactElement<NavItem>[]',
    Required: 'True',
    Default: '',
    Description: 'An array of items for displaying in the navigation',
  },
]} />
<br />
<DataTable caption="SidebarNavItem" data={[
  {
    Name: 'Image',
    Type: 'React.ComponentType',
    Required: 'False',
    Default: '',
    Description: 'Image to be displayed for the navigation item',
  },
  {
    Name: 'isActive',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'If the item is active then the is-active CSS class will be applied',
  },
  {
    Name: 'link',
    Type: 'React.ReactElement<LinkTypes>',
    Required: 'True',
    Default: '',
    Description: 'Link component for creating the link',
  },
]} />
<br />
<DataTable caption="SidebarUser" data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'For passing a CSS modifier',
  },
  {
    Name: 'initials',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Initials for the user to be displayed inside an avatar',
  },
  {
    Name: 'link',
    Type: 'React.ReactElement<LinkTypes>',
    Required: 'False',
    Default: '',
    Description: 'Link component for creating the link',
  },
]} />
<br />

</Tab>
</TabSet>
