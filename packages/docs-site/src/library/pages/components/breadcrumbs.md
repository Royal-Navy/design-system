---
title: Breadcrumbs
description: The Breadcrumb component is a navigational item
header: true
---

import { Breadcrumbs, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import BreadcrumbComponent from '../../images/components/breadcrumbs/Component'
import BreadcrumbAnatomy from '../../images/components/breadcrumbs/Anatomy'
import BreadcrumbStates from '../../images/components/breadcrumbs/States'

# Overview

The Breadcrumb component is a navigational item that allows users to quickly ascend a page tree.

<BreadcrumbComponent />

## Usage
The Breadcrumb component should sit at the top of the viewport. Visit the Design [Hierarchy & Placement](#hierarchy) section for more information.

<TabSet>

<Tab title="Design">

<SketchWidget name="Breadcrumbs" href="/standards-toolkit.sketch" />

## Anatomy
<BreadcrumbAnatomy />

1. **Parent Link**. The parent link is a clickable action that will navigate the user to the parent page.
2. **Current Page Label**. The current page is a label displaying the current page title. It is not clickable.

## Sizing & Spacing
The Breadcrumb component has one standard text size. Be careful with horizontal placement, as the Breadcrumb can take up a large amount of screen space displaying all the parent links.

## States
<BreadcrumbStates />

When hovering on a Breadcrumb, the active link will change to the primary colour. Every child to the right of the hovered link will fade to help indicate the target page to the user. 

## Hierarchy & Placement
There should only be one Breadcrumb component per page. It should sit at the top of the viewport and be easily accessible for the user. The component is a top level navigational item used to help the user navigate whole pages, rather than a subset section inside another component.

</Tab>


<Tab title="Develop">

The Breadcrumbs component accepts an array of links, including the current page title and `href`. Like the Nav component the Breadcrumbs component will render regular links by default. However, if you pass a Component property with a link you can specify the component to render it and send the properties it needs, such as a Gatsby `Link` component that will require `to` instead of `href`.

### Basic Usage
By default simply passing a `label` and `href` will cause a regular anchor tag to be rendered for a Breadcrumb.

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
    href: '/components/breadcrumb',
    label: 'Breadcrumb',
  },
]

<Breadcrumbs navItems={navItems} />`} language="javascript">
  <Breadcrumbs navItems={[
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
Applications will often use a library such as `React Router` to generate links between sections of a site. In this case you can specify the `Component` that will render the link, along with the properties it needs. In this example the `Link` component will be generated with the label as its child.

<CodeHighlighter source={`import {Link} from "react-router-dom"\n\nconst navItems = [
    to: '/',
    label: 'Home',
  },
  {
    to: '/components',
    label: 'Components',
  },
  {
    to: '/components/breadcrumb',
    label: 'Breadcrumb',
  },
]
\n
<Breadcrumbs navItems={navItems} LinkComponent={Link}/>`} language="javascript">
  <Breadcrumbs navItems={[
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
    Name: 'label',
    Type: 'string ',
    Required: 'False',
    Default: 'neutral',
    Description: 'The label for this part of the Breadcrumb hierarchy',
  },
]} />
<br />
<DataTable caption="Breadcrumbs" data={[
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
    Type: 'Breadcrumb[] ',
    Required: 'True',
    Default: '',
    Description: 'An array of objects that must at least contain a label. If no custom component is provided then provide an href, otherwise provide the Component and the associated property to create a link.',
  },
]} />

</Tab>
</TabSet>
