---
title: Breadcrumb
description: Navigation aid to navigate back to a higher level and indicate location in site
---

import { Breadcrumbs, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Breadcrumbs
Navigation aid to navigate back to a higher level and indicate location in site

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
The `Breadcrumbs` component accepts an array of links, including the current page title and href. Like the Nav component the Breadcrumbs component will render regular links by default, but if you pass a `Component` property with a link you can specify the component to render it and send the properties it needs, such as a Gatsby `Link` component that will require `to` instead of `href`.

### Basic Usage
By default simply passing a `label` and `href` will cause a regular anchor tag to be rendered for a Breadcrumb.

<CodeHighlighter source={`const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/components/breadcrumb',
    label: 'Breadcrumb',
  },
]

<Breadcrumbs links={links} />`} language="javascript">
  <Breadcrumbs links={[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/components/breadcrumb',
    label: 'Breadcrumb',
  },
]} />
</CodeHighlighter>

### Usage with React Router
More often than not an application will use a library such as `React Router` to generate links between sections of a site, in this case you can specify the `Component` that will render the link, along with the properties it needs. In this example the `Link` component will be generated with the label as it's child.

<CodeHighlighter source={`import {Link} from "react-router-dom"\n\nconst links = [
    to: '/',
    label: 'Home',
    Component: Link
  },
  {
    to: '/components',
    label: 'Components',
    Component: Link
  },
  {
    to: '/components/breadcrumb',
    label: 'Breadcrumb',
    Component: Link
  },
]
\n
<Breadcrumbs links={links} />`} language="javascript">
  <Breadcrumbs links={[
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/components/breadcrumb',
    label: 'Breadcrumb',
  },
]} />
</CodeHighlighter>

### Properties
<DataTable caption="Breadcrumb" data={[
  {
    Name: 'Component',
    Type: 'React.Component',
    Required: 'False',
    Default: 'Link (<a href>)',
    Description: 'A react component to surround the label and passed all properties',
  },
  {
    Name: 'label',
    Type: 'string ',
    Required: 'False',
    Default: 'neutral',
    Description: 'The label for this part of the Breadcrumb hierarchy',
  },
]} />


<DataTable caption="Breadcrumbs" data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Optional additional css class to associate with the component wrapper',
  },
  {
    Name: 'links',
    Type: 'Breadcrumb[] ',
    Required: 'True',
    Default: '',
    Description: 'An array of objects that must least contain a label. If no custom component is provided then provide a href, otherwise provide the Component and the associated property to create a link',
  },
]} />

</Tab>
</TabSet>
