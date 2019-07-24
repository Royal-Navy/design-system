---
title: Sidebar
description: An application sidebar using icons and indicators on the left of the screen
---

import { Icons, Sidebar, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

# Sidebar 
An application Sidebar using icons and indicators on the left of the screen

## Usage

<TabSet>

<Tab title="Design">

<SketchWidget name="Sidebar" href="/standards-toolkit.sketch" />

  ## Design
  Introduction to the design section.

  ### Anatomy
  The Anatomy is the breakdown of the component.

  [ Image breaking down the component’s anatomy ]

  Each part of the component in the image should be labelled with a number. Underneath, create a list of each of the labeled items, explaining what they are. This list should also indicate to the reader whenever an item is an optional include.

  Any specific notes on a part of the anatomy breakdown should be included here. This includes dos and don’ts with accompanying image examples.

  ### Sizing & Spacing
  Much like the Anatomy section, the Sizing & Spacing section should be a breakdown of the construction of the component. Red line guides should be added to the component, showing the spacing between the different anatomy parts.

  ### States (if applicable) 
  This section covers all the different component states including its default state, hover, active, and disabled.
  [ Image / interactive example of component states ]

  ### Hierarchy & Placement
  This section covers how a component should sit within an application’s hierarchy. It also provides insight as when to use the different variations listed below.

  ### Variation [ Repeatable Section ] 
  Introduction to the component variation. For each sub heading, outline any differences between the default component and this variation. 

  [ Image / interactive example of Component ]

  #### Usage

  #### Anatomy
  [ Image breaking down the component’s anatomy ]

  #### Sizing & Spacing
  [ Image of component with red guide lines overlaid ]

  #### States (if applicable)
  [ Image / interactive example of component states ]

  #### Hierarchy & Placement

  ### Adornments [ Repeatable Section ]
  Include any component adornments here. Much like the variations section above, this section is repeatable.

  [ Image / interactive example of Component ]

  #### Usage

  #### Anatomy
  [ Image breaking down the component’s anatomy ]

  ### Sizing & Spacing
  [ Image of component with red guide lines overlaid ]

  ### States (if applicable)
  [ Image / interactive example of component states ]

</Tab>


<Tab title="Develop">

The `Sidebar` is a fragment, made up of multiple components combined to render a bar down the left of the screen with 2 main sections, the top navigation part and the bottom application part used to indicate the current user, with a link to their profile and an optional notifications button. The notification button can indicate if there are any unread notifications and toggle the display of recent notifications.

The sidebar must be able to integrate with a number of different routing frameworks, as such it cannot simply rely on using an anchor tag to navigate, for this reason the a `LinkComponent` component must be passed in as a property to the `Sidebar`. if no component is provided, a regular anchor will be used and will expect a href property in each of the navItems.

The top half of the `Sidebar` requires a collection of navigation items. The navitems property passed to the component must include a collection of objects containing an Image and a label. The Image is displayed next to the label as an icon.  If the link is associated with the current page then a 'active' property should be set. The link for each of the navigation items will generated using the `LinkComponent` property sent to the sidebar, which by default will use a regular anchor tag.

The bottom half of the Sidebar has 2 optional items, the notification indicator and the user indicator.

If the application wishes to display the users name, in the form of their initials then an object must be provided to the `user` property, this must include an `initials` property plus a url property expected by the `LinkComponent`, e.g. 'to'.

The Notification section is responsible for displaying a notification icon if notifications are supported by the application, indicating if there are any unread notifications  and toggling the display of a notification popover containing content passed into it. The host application is responsible for generating the markup and styles used within the notification popover.

### Sidebar without notifications
A simple sidebar with no notification section, simply showing the current user and using the default Link component so a regular anchor tag is used. 

<CodeHighlighter source={`import { Link } from 'react-router-dom'\n
const user = { initials: 'XT', href: '/userprofile' }\n
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
This sidebar example indicates that the application supports notifications and that there are pending notifications to see

<CodeHighlighter source={`import { Link } from 'react-router-dom'\n
const user = { initials: 'XT', href: '/userprofile' }\n
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
const popoverContent = <PopoverContent notifications={notifications} />\n
 <Sidebar 
   user={user} 
   navItems={navData} 
   NotificationsPopoverContent={popoverContent}
   unreadNotification
/>
`} language="javascript" />

### Sidebar with React Router link
A simple sidebar with no notification section using the React Router Link component.

<CodeHighlighter source={`import { Link } from 'react-router-dom'\n
const user = { initials: 'XT', to: '/userprofile' }\n
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
    Description: 'An array of nav item objects with an image and label, requires a property for the link',
  },
  {
    Name: 'NotificationsPopoverContent',
    Type: 'Element ',
    Required: 'False',
    Default: '',
    Description: 'If a notification bell should be displayed and a popover with notification content then this property contains the content to show in that popover. Ideally this would contain recent notifications with indication as to if they have been read or not and a link to read them and view others.',
  },
    {
    Name: 'unreadNotification',
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
    Description: 'If you wish to show a user profile link an object must be passed in containing the users initials and a property to send to the link component, such as `to` or `href`.',
  },
  {
    Name: 'LinkComponent',
    Type: 'Component',
    Required: 'False',
    Default: 'Default to an anchor tag requiring a href',
    Description: 'A custom component to render links in the sidebar. If nothing is passed a component requiring a href will be used and will render an anchor tag. If using a library such as React Router then the `Link` component from that library should be passed as a property.',
  },
]} />
<br />
<DataTable caption="NavItemAnchorType" data={[
  {
    Name: 'active',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'Indicate if the current nav item is active',
  },
  {
    Name: 'Image',
    Type: 'Element',
    Required: 'False',
    Default: '',
    Description: 'An optional image to display to the left of the label. Always visible. Must be 18 x 16',
  },
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The label to show in the nav, only visible when hovered over',
  },
  {
    Name: 'href',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The url to send the user to',
  },
]} />
<br />
<DataTable caption="NavItemLinkType" data={[
  {
    Name: 'active',
    Type: 'boolean',
    Required: 'False',
    Default: 'false',
    Description: 'Indicate if the current nav item is active',
  },
  {
    Name: 'Image',
    Type: 'Element',
    Required: 'False',
    Default: '',
    Description: 'An optional image to display to the left of the label. Always visible. Must be 18 x 16',
  },
  {
    Name: 'label',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The label to show in the nav, only visible when hovered over',
  },
  {
    Name: 'to',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The url to send the user to',
  },
]} />

</Tab>
</TabSet>
