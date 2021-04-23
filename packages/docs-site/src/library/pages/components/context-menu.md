---
title: Context Menu
description: A menu that appears upon user interaction, such as right-click mouse operation.
header: true
---

import { TabSet, Tab, ContextMenu, ContextMenuItem, ContextMenuDivider, Link } from '@royalnavy/react-component-library'
import { IconEdit } from '@royalnavy/icon-library'
import CodeHighlighter from '../../../components/presenters/code-highlighter'
import DataTable from '../../../components/presenters/data-table'

import ContextMenuComponent from '../../images/components/context-menu/Component'
import ContextMenuAnatomy from '../../images/components/context-menu/Anatomy'

# Overview
A menu that appears upon user interaction, such as right-click mouse operation.

<ContextMenuComponent />

## Usage
The Context Menu provides a way to add additional functionality to a component or application. You should only use the Context Menu for supplementary actions, as it is hidden by default.

<TabSet>
<Tab title="Design">

### Anatomy

  <ContextMenuAnatomy />

  1. **Container**. Wraps the entire component.
  1. **Menu Item**. A single menu action.


  ### Sizing & Spacing
  The Context Menu is of a fixed width, so you should keep your menu item names short. We recommend using iconography to supplement a menu item.


  ### Hierarchy & Placement
  The Context Menu can be triggered anywhere in your application. Ensure the actions in the menu apply to the object or component that has triggered it. Only one Context Menu should be visible at any time.

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
