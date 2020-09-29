import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { IconEdit, IconDelete, IconAdd } from '@royalnavy/icon-library'

import { ContextMenu, ContextMenuItem, ContextMenuDivider } from '.'
import { Link } from '../Link'

export default { component: ContextMenu, title: 'ContextMenu' } as Meta

export const Default = () => (
  <ContextMenu>
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
    <ContextMenuItem icon={<IconAdd />} link={<Link href="/add">Add</Link>} />
    <ContextMenuDivider />
    <ContextMenuItem
      link={<Link href="/something-else">Do something else</Link>}
    />
    <ContextMenuDivider />
    <ContextMenuItem
      link={(
        <Link href="/something-else">
          This is too much text to put into a context menu item
        </Link>
      )}
    />
  </ContextMenu>
)

Default.storyName = 'Default'
