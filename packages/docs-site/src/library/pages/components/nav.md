---
title: Nav
description: A horizontal or vertical navigation component that supports nesting
header: true
---

import { Nav, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'
import NavComponent from '../../images/components/nav/component.svg'
import NavAnatomy from '../../images/components/nav/anatomy.svg'
import NavStates from '../../images/components/nav/states.svg'

# Overview

The Nav component is built to provide a list of navigation links to help people move around a website or application. Navigation links can either be listed vertically or horizontally. Horizontal links will change to vertical on tablet and mobile devices.

Navigation can also be created in different sizes.

In some cases navigation can be combined with other elements. One example of this is a site in which uses a large horizontal navigation as it's primary navigation method and then hides that navigation when it switches to vertical.

The component provides styling for focus, active and hover. The styles for navigation items is near identical to buttons, to keep a consistent look and feel.

The url provided to a navigation link will be used as the 'to' property of a react router link.
<NavComponent />


## Usage

<TabSet>

<Tab title="Design">

<SketchWidget name="Nav" href="/standards-toolkit.sketch" />

  ### Anatomy  

  <NavAnatomy />

1. **Container**. The Nav component is wrapped in an invisible container. This allows it to be placed inside larger composite components without breaking their visual look.
2. **Link**. The Nav links can either be applied vertically or horizontally. These will automatically switch to vertical on Mobile devices to ensure they fit on the screen.

### States

<NavStates />

The Nav Links have three states - `default`, `hover`, and `active`.

### Hierarchy & Placement
The Nav component can be used to link to both top level pages and subpages. Try to keep all the links in the same navigation at the same page level. This makes the mental model of your application structure easier to process for the user.

  </Tab>


<Tab title="Develop">

The `Nav` component renders links in either a horizontal or vertical layout. Horizontal nav will switch to vertical when displayed on mobile.

The `Nav` component accepts an array of links. By default a link expects a `label` and `href` and renders an anchor tag. If using the component with a library like `react-router-dom` the component can accept a `LinkComponent` to render a link and the associated required properties must be stored in each `navItem`.

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
More often than not an application will use a library such as `React Router` to generate links between sections of a site. In this case you can specify the `LinkComponent` that will render the link, along with the properties it needs. In this example the `Link` component will be rendered with the label as it's child.

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

Nav supports rendering navigation in four different sizes.

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
    Description: 'Optional additional css class to associate with the component wrapper.',
  },
    {
    Name: 'LinkComponent',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: 'Link',
    Description: 'The React component to render links. Defaults to a regular anchor using Link.',
  },
  {
    Name: 'navItems',
    Type: 'NavItem[] ',
    Required: 'True',
    Default: '',
    Description: 'If no custom component is provided then provide a href or the required property associated with the LinkComponent.',
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
    Description: 'The font size for items.',
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
<DataTable caption="Link" data={[
  {
    Name: 'children',
    Type: 'string|React.ReactNode',
    Required: 'True',
    Default: '',
    Description: 'The content for the link.',
  },
  {
    Name: 'href',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The url to send the browser to.',
  },
]} />

</Tab>
</TabSet>
