---
title: Context Menu
description: A menu that appears upon user interaction, such as right-click mouse operation.
header: true
draft: true
---

import { TabSet, Tab, ContextMenu, ContextMenuItem, ContextMenuDivider, Link } from '@royalnavy/react-component-library'
import { IconEdit } from '@royalnavy/icon-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'

# Overview
A menu that appears upon user interaction, such as right-click mouse operation.

## Usage

TBC

<TabSet>
<Tab title="Design">

### Anatomy

TBC

### Sizing & Spacing

TBC

### Hierarchy & Placement

TBC

### States

TBC

### Variations

TBC

</Tab>

<Tab title="Develop">

### Basic Usage
Supply a ref object associated with the element or component that you would like to associate the context menu with via the `attachedToRef` prop.

Right clicking on this component will open the context menu in place of the default system context menu at the position of the mouse pointer.

<CodeHighlighter source={
`<div ref={ref}>Right click me!</div>\n
<ContextMenu attachedToRef={ref}>
  <ContextMenuItem
    icon={<IconEdit />}
    link={<Link href="/edit">Edit</Link>}
  />
  <ContextMenuItem
    icon={<IconDelete />}
    link={<Link href="/delete">Delete</Link>}
  />
  <ContextMenuItem link={<Link href="/delete">Action</Link>} />
  <ContextMenuDivider />
  <ContextMenuItem
    icon={<IconAdd />}
    link={<Link href="/add">Add</Link>}
  />
  <ContextMenuDivider />
  <ContextMenuItem
    link={<Link href="/something-else">Do something else</Link>}
  />
  <ContextMenuDivider />
  <ContextMenuItem
    link={
      <Link href="/something-else">
        This is too much text to put into a context menu item
      </Link>
    }
  />
</ContextMenu>`} language="javascript">

</CodeHighlighter>

### ContextMenu Properties
<DataTable data={[
  {
    Name: 'attachedToRef',
    Type: 'React.RefObject<HTMLElement>',
    Required: 'True',
    Default: '',
    Description: 'A ref object associated with the component or element the context menu is attached to',
  },
  {
    Name: 'children',
    Type: 'React.ReactElement<ContextMenuItemProps>[]',
    Required: 'True',
    Default: '',
    Description: 'Supply menu items and dividers as children',
  },
  {
    Name: 'className',
    Type: 'string',
    Required: 'False',
    Default: '',
    Description: 'CSS class name to modify properties',
  },
  {
    Name: 'clickType',
    Type: 'left | right',
    Required: 'False',
    Default: 'right',
    Description: 'Button to be clicked to show menu',
  },
  {
    Name: 'onHide',
    Type: '() => void',
    Required: 'False',
    Default: '',
    Description: 'Callback for when the menu is hidden',
  },
  {
    Name: 'onShow',
    Type: '() => void',
    Required: 'False',
    Default: '',
    Description: 'Callback for when the menu is shown',
  },
  {
    Name: 'position',
    Type: 'above | below',
    Required: 'False',
    Default: 'below',
    Description: 'Where the menu is positioned',
  },
]} />

### ContextMenuItem Properties
<DataTable data={[
  {
    Name: 'children',
    Type: 'string',
    Required: 'True',
    Default: '',
    Description: 'The label text associated with the menu item',
  },
  {
    Name: 'icon',
    Type: 'React.ReactNode',
    Required: 'False',
    Default: '',
    Description: 'An icon to display next to the label text',
  },
  {
    Name: 'link',
    Type: 'React.ReactNode',
    Required: 'True',
    Default: '',
    Description: 'A link object to provide the onClick behaviour (the icon and label text will be injected into this components children)',
  },
]} />

</Tab>
</TabSet>
