---
title: Nav
description: A horizontal or vertical navigation component that supports nesting
header: true
---

import { Nav, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Overview

The Nav component is built to provide a list of navigation links to help people move around a website or application. Navigation links can either be listed vertically or horizontally. Horizontal links will change to vertical on tablet and mobile devices.

Navigation can also be created in different sizes.

In some cases navigation can be combined with other elements. One example of this is a site in which uses a large horizontal navigation as it's primary navigation method and then hides that navigation when it switches to vertical.

The component provides styling for focus, active and hover. The styles for navigation items is near identical to buttons, to keep a consistent look and feel.

The url provided to a navigation link will be used as the 'to' property of a react router link.

## Usage

<TabSet>

<Tab title="Design">

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

The `Nav` component renders links in either a horizontal or vertical layout. Horizontal nav will switch to vertical when displayed on mobile.

The `Nav` component accepts an array of links. By default a link expects a `label` and `href` and render an anchor tag. If using the component with a library like `react-router-dom` the component can accept a `LinkComponent` to render a link and the associated required properties must be stored in each `navItem`.

### Basic Usage - Vertical
<CodeHighlighter source={`const navItems=[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]

<Nav orientation="vertical" navItems={navItems} />`} language="javascript">
  <Nav orientation="vertical" navItems={[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]}/>
</CodeHighlighter>

### Basic Usage - Horizontal
<CodeHighlighter source={`const navItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]

<Nav orientation="horizontal" items={navItems}/>`} language="javascript">
  <Nav orientation="horizontal" navItems={[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]}/>
</CodeHighlighter>

### Usage with React Router
More often than not an application will use a library such as `React Router` to generate links between sections of a site, in this case you can specify the `LinkComponent` that will render the link, along with the properties it needs. In this example the `Link` component will be rendered with the label as it's child.

<CodeHighlighter source={`import {Link} from "react-router-dom"\n\nconst navItems=[
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/components',
    label: 'Components',
  },
  {
    to: '/design',
    label: 'Design',
  },
]
\n
<Nav LinkComponent={Link} navItems={navItems}/>`} language="javascript">
  <Nav navItems={[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]} />
</CodeHighlighter>

### Sizes

Nav supports rendering navigation in 4 different sizes

<CodeHighlighter source={`const navItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]

<Nav size="small" orientation="horizontal" items={navItems}/>
<Nav size="regular" orientation="horizontal" items={navItems}/>
<Nav size="large" orientation="horizontal" items={navItems}/>
<Nav size="xlarge" orientation="horizontal" items={navItems}/>`} language="javascript">
  <Nav size="small" orientation="horizontal" navItems={[
  {
    href: '/',
    label: 'small',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]}/>
<Nav size="regular" orientation="horizontal" navItems={[
  {
    href: '/',
    label: 'regular',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]}/>
<Nav size="large" orientation="horizontal" navItems={[
  {
    href: '/',
    label: 'large',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]}/>
<Nav size="xlarge" orientation="horizontal" navItems={[
  {
    href: '/',
    label: 'xlarge',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/design',
    label: 'Design',
  },
]}/>
</CodeHighlighter>

### Properties
<DataTable caption="Nav" data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Optional additional css class to associate with the component wrapper',
  },
    {
    Name: 'LinkComponent',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: 'Link',
    Description: 'The React component to render links, defaults to a regular anchor using Link',
  },
  {
    Name: 'navItems',
    Type: 'NavItem[] ',
    Required: 'True',
    Default: '',
    Description: 'An array of objects that must least contain a label. If no custom component is provided then provide a href, otherwise provide the the required property associated with the LinkComponent',
  },
  {
    Name: 'orientation',
    Type: 'string (horizontal / vertical)',
    Required: 'False',
    Default: 'vertical',
    Description: 'The direction to display the items.',
  },
  {
    Name: 'size',
    Type: 'string (small / regular / large / xlarge)',
    Required: 'False',
    Default: 'regular',
    Description: 'The font size for items',
  },
]} />


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

<DataTable caption="Link" data={[
  {
    Name: 'children',
    Type: 'string|React.ReactNode',
    Required: 'True',
    Default: '',
    Description: 'The content for the link',
  },
  {
    Name: 'href',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The url to send the browser to',
  },
]} />

</Tab>
</TabSet>
