---
title: Links
description: A simple list of links listed inline separated by a pipe
---

import { Links, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'


# Links
A simple list of links listed inline separated by a pipe

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
The `Links` component renders a list of links inline with a pipe separator, this is most useful for
situations like a page footer with links to give feedback or look at the privacy policy.

Like the Nav component the Links component accepts an array of items. If no Component is specified
for an item then a regular `A` tag is used, otherwise the Component passed will be rendered with
the remaining properties.

### Basic Usage
By default simply passing a `label` and `href` will cause a regular anchor tag to be rendered for a Breadcrumb.

<CodeHighlighter source={`const links=[
  {
    href: '/privacy',
    label: 'Privacy',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/feedback',
    label: 'Feedback',
  },
]\n
<Links links={links} />`} language="javascript">
  <Links links={[
  {
    href: '/privacy',
    label: 'Privacy',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/feedback',
    label: 'Feedback',
  },
]} />
</CodeHighlighter>

### Usage with React Router
More often than not an application will use a library such as `React Router` to generate links between sections of a site, in this case you can specify the `Component` that will render the link, along with the properties it needs. In this example the `Link` component will be generated with the label as it's child.

<CodeHighlighter source={`import {Link} from "react-router-dom"\n\nconst links = [
  {
    to: '/privacy',
    label: 'Privacy',
    Component: Link
  },
  {
    to: '/contact',
    label: 'Contact',
    Component: Link
  },
  {
    to: '/feedback',
    label: 'Feedback',
    component: Link
  },
]\n
<Links links={links} />`} language="javascript">
  <Links links={[
  {
    href: '/privacy',
    label: 'Privacy',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/feedback',
    label: 'Feedback',
  },
]} />
</CodeHighlighter>

### Properties
<DataTable caption="Link" data={[
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
    Description: 'The text for the link',
  },
]} />


<DataTable caption="Links" data={[
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Optional additional css class to associate with the component wrapper',
  },
  {
    Name: 'links',
    Type: 'Link[] ',
    Required: 'True',
    Default: '',
    Description: 'An array of objects that must least contain a label. If no custom component is provided then provide a href, otherwise provide the Component and the associated property to create a link',
  },
]} />

</Tab>
</TabSet>
