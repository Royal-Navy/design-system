---
title: Sidebar
description: An application sidebar with icons and indicators, fixed to the left of the screen.
header: true
---

import { Icons, Sidebar, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'
import SidebarComponent from '../../images/components/sidebar/Component'
import SidebarAnatomy from '../../images/components/sidebar/Anatomy'
import SidebarStates from '../../images/components/sidebar/States'

# Overview
The Sidebar component is a main navigational item for a **NELSON Standards** application. It is fixed to the left-hand of the screen and extends the full height of the browser. This component stays in place whilst the application scrolls, ensuring top navigational items are always within the user's reach.

<SidebarComponent />

## Usage
Only one Sidebar component should be used per page. It should contain your top level navigational items, not sub-navigational items/actions for a single page.


<TabSet>

<Tab title="Design">

<SketchWidget name="Sidebar" href="/standards-toolkit.sketch" />

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

### Sidebar without Notifications
A simple sidebar with no notification section, simply showing the current user and using the default Link component so, a regular anchor tag is used. 

<CodeHighlighter source={`import { Link } from 'react-router-dom'\n
const user = { initials: 'XT', href: '/user-profile' }\n
const navData: NavItemAnchorType[] = [
  {
    to: '/',
    Image: Icons.House,
    label: 'Home',
  },
  {
    active: true,
    to: '/stats',
    Image: Icons.Graph,
    label: 'Stats',
  },
  {
    to: '/tools',
    Image: Icons.Tools,
    label: 'Tools',
  },
]\n
 <Sidebar user={user} navItems={navData} />
`} language="javascript" />


### Sidebar with notifications
This sidebar example indicates that the application supports notifications and that there are pending notifications to see.

<CodeHighlighter source={`import { Link } from 'react-router-dom'\n
const user = { initials: 'XT', href: '/user-profile' }\n
const navData: NavItemAnchorType[] = [
  {
    to: '/',
    Image: Icons.House,
    label: 'Home',
  },
  {
    active: true,
    to: '/stats',
    Image: Icons.Graph,
    label: 'Stats',
  },
  {
    to: '/tools',
    Image: Icons.Tools,
    label: 'Tools',
  },
]\n
 <Sidebar 
   user={user} 
   navItems={navData} 
   notifications={(
     <Notifications href="notifications">
       <Notification
         href="notifications/1"
         name="Thomas Stephens"
         action="added a new comment to your"
         on="review"
         when={new Date('2019-11-05T10:57:00.000Z')}
         description="A long description that will be shortened"
       />
       <Notification
         href="notifications/2"
         name="Thomas Stephens"
         action="added a new comment to your"
         on="review"
         when={new Date('2019-11-04T10:23:00.000Z')}
         description="A long description that will be shortened again"
       />
     </Notifications>
   )}
   unreadNotification
/>
`} language="javascript" />

### Sidebar with React Router link
A simple sidebar with no notification section using the React Router Link component.

<CodeHighlighter source={`import { Link } from 'react-router-dom'\n
const user = { initials: 'XT', to: '/user-profile' }\n
const navData: NavItemAnchorType[] = [
  {
    to: '/',
    Image: Icons.House,
    label: 'Home',
  },
  {
    active: true,
    to: '/stats',
    Image: Icons.Graph,
    label: 'Stats',
  },
  {
    to: '/tools',
    Image: Icons.Tools,
    label: 'Tools',
  },
]\n
 <Sidebar user={user} navItems={navData} LinkComponent={Link} />
`} language="javascript" />

### Properties
<DataTable caption="Sidebar" data={[
  {
    Name: 'navItems',
    Type: 'NavItemAnchorType | NavItemLinkType',
    Required: 'True',
    Default: '',
    Description: 'An array of nav item objects with an image and a label. Requires a property for the link',
  },
  {
    Name: 'notifications',
    Type: 'React.ReactElement<NotificationsProps>',
    Required: 'False',
    Default: '',
    Description: "This property contains the content for the Notifications Popover. These are recent notifications, including read status, and a link to read them.",
  },
    {
    Name: 'hasUnreadNotification',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'If there are unread notifications then this will cause a small blue indicator to be displayed to alert the user.',
  },
  {
    Name: 'user',
    Type: '{initials:string, to/href:string}',
    Required: 'False',
    Default: '',
    Description: "If you wish to show a user profile link, an object must be passed in containing the user's initials and a property to send to the link component, such as `to` or `href`.",
  },
  {
    Name: 'LinkComponent',
    Type: 'Component',
    Required: 'False',
    Default: 'Default to an anchor tag requiring a href',
    Description: 'A custom component to render links in the sidebar. If nothing is passed, a component requiring a href will be used and will render an anchor tag. If using a library such as React Router, then the `Link` component from that library should be passed as a property.',
  },
]} />
<br />
<DataTable caption="NavItemAnchorType" data={[
  {
    Name: 'isActive',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'Indicate if the current nav item is active.',
  },
  {
    Name: 'Image',
    Type: 'Element',
    Required: 'False',
    Default: '',
    Description: 'An optional image to display to the left of the label. Always visible. Must be 18 x 16.',
  },
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The label to show in the nav, only visible when hovered over.',
  },
  {
    Name: 'href',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The url to send the user to.',
  },
]} />
<br />
<DataTable caption="NavItemLinkType" data={[
  {
    Name: 'isActive',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'Indicate if the current nav item is active.',
  },
  {
    Name: 'Image',
    Type: 'Element',
    Required: 'False',
    Default: '',
    Description: 'An optional image to display to the left of the label. Always visible. Must be 18 x 16.',
  },
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The label to show in the nav, only visible when hovered over.',
  },
  {
    Name: 'to',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The url to send the user to.',
  },
]} />

</Tab>
</TabSet>
