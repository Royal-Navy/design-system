---
title: Tab Nav
description: Displays a tabbed style navigation that can be either horizontal on desktop and change to vertical in mobile
---

import { TabNav, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Tab Nav
Displays a tabbed style navigation displayed as horizontal links in desktop/tablet browsers and changes to vertical when viewed on mobile devices.

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
The `TabNav` component renders links as horizontal links in desktop/tablet browsers and changes to vertical when viewed on mobile devices.

The `TabNav` component accepts an array of links. By default a link expects a `label` and `href` and render an anchor tag. If using the component with a library like `react-router-dom` the component can accept a `LinkComponent` to render a link and the associated required properties must be stored in each `navItem`.

### Basic Usage
<CodeHighlighter source={`const navItems=[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
    active: true,
  },
  {
    href: '/design',
    label: 'Design',
  },
]

<TabNav orientation="vertical" navItems={navItems} />`} language="javascript">
  <TabNav navItems={[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
    active: true,
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
    active: true,
  },
  {
    to: '/design',
    label: 'Design',
  },
]
\n
<TabNav LinkComponent={Link} navItems={navItems}/>`} language="javascript">
  <TabNav navItems={[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
    active: true,
  },
  {
    href: '/design',
    label: 'Design',
  },
]} />
</CodeHighlighter>

### Properties
<DataTable caption="Tab Nav" data={[
  {
    Name: 'classNme',
    Type: 'String',
    Required: 'False',
    Default: '',
    Description: 'A optional additional classname to apply to the wrapper element',
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

</Tab>
</TabSet>
