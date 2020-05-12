---
title: Breadcrumbs
description: The BreadcrumbsItem  component is a navigational item
header: true
---

import { BreadcrumbsItem , Breadcrumbs, Link, Tab, TabSet } from '@royalnavy/react-component-library'
import DataTable from '../../../components/presenters/data-table'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import SketchWidget from '../../../components/presenters/sketch-widget'

import BreadcrumbComponent from '../../images/components/breadcrumbs/Component'
import BreadcrumbAnatomy from '../../images/components/breadcrumbs/Anatomy'
import BreadcrumbStates from '../../images/components/breadcrumbs/States'

# Overview

The BreadcrumbsItem  component is a navigational item that allows users to quickly ascend a page tree.

<BreadcrumbComponent />

## Usage
The BreadcrumbsItem  component should sit at the top of the viewport. Visit the Design [Hierarchy & Placement](#hierarchy) section for more information.

<TabSet>

<Tab title="Design">

<SketchWidget name="Breadcrumbs" href="/design-system.sketch" />

## Anatomy
<BreadcrumbAnatomy />

1. **Parent Link**. The parent link is a clickable action that will navigate the user to the parent page.
2. **Current Page Label**. The current page is a label displaying the current page title. It is not clickable.

## Sizing & Spacing
The BreadcrumbsItem  component has one standard text size. Be careful with horizontal placement, as the BreadcrumbsItem  can take up a large amount of screen space displaying all the parent links.

## States
<BreadcrumbStates />

When hovering on a Breadcrumb, the active link will change to the primary colour. Every child to the right of the hovered link will fade to help indicate the target page to the user. 

## Hierarchy & Placement
There should only be one BreadcrumbsItem  component per page. It should sit at the top of the viewport and be easily accessible for the user. The component is a top level navigational item used to help the user navigate whole pages, rather than a subset section inside another component.

</Tab>


<Tab title="Develop">

The Breadcrumbs component accepts an array of links, including the current page title and `href`. Like the Nav component the Breadcrumbs component will render regular links by default. However, if you pass a Component property with a link you can specify the component to render it and send the properties it needs, such as a Gatsby `Link` component that will require `to` instead of `href`.

### Basic Usage
Simply passing a `Link` with `href` will cause regular anchor tag to be rendered for a Breadcrumb.

<CodeHighlighter source={`<Breadcrumbs>
  <BreadcrumbsItem  link={<Link href="/">Home</Link>} />
  <BreadcrumbsItem  link={<Link href="/components">Components</Link>} />
  <BreadcrumbsItem  link={<Link href="/components/breadcrumb">Breadcrumb</Link>} />
</Breadcrumbs>
`} language="javascript">
<Breadcrumbs>
  <BreadcrumbsItem  link={<Link href="/">Home</Link>} />
  <BreadcrumbsItem  link={<Link href="/components">Components</Link>} />
  <BreadcrumbsItem  link={<Link href="/components/breadcrumb">Breadcrumb</Link>} />
</Breadcrumbs>
</CodeHighlighter>

### Usage with React Router
Applications will often use a library such as `React Router` to generate links between sections of a site. In this case you can specify the `Component` that will render the link, along with the properties it needs. In this example the `Link` component will be generated with the label as its child.

<CodeHighlighter source={`import { Link } from "react-router-dom"\n
<Breadcrumbs>
  <BreadcrumbsItem  link={<Link to="/">Home</Link>} />
  <BreadcrumbsItem  link={<Link to="/components">Components</Link>} />
  <BreadcrumbsItem  link={<Link to="/components/breadcrumb">Breadcrumb</Link>} />
</Breadcrumbs>
`} language="javascript">
<Breadcrumbs>
  <BreadcrumbsItem  link={<Link to="/">Home</Link>} />
  <BreadcrumbsItem  link={<Link to="/components">Components</Link>} />
  <BreadcrumbsItem  link={<Link to="/components/breadcrumb">Breadcrumb</Link>} />
</Breadcrumbs>
</CodeHighlighter>

### Properties
<DataTable caption="Breadcrumbs" data={[
  {
    Name: 'children',
    Type: 'React.ReactElement<BreadcrumbProps>[]',
    Required: 'True',
    Default: '',
    Description: 'An array of BreadcrumbsItem  components.',
  },
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'Optional additional CSS class to associate with the component wrapper',
  },
]} />
<br />
<DataTable caption="Breadcrumb" data={[
  {
    Name: 'link',
    Type: 'React.ReactElement',
    Required: 'True',
    Default: '',
    Description: 'The component to be used for the link. Typically this would be a Link from the component library. It could also be a Link from react-router-dom.',
  },
]} />

</Tab>
</TabSet>
