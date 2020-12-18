import React, { useRef } from 'react'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react/types-6-0'

import { IconEdit, IconDelete, IconAdd } from '@royalnavy/icon-library'

import { ContextMenu, ContextMenuItem, ContextMenuDivider } from '.'
import { Link } from '../Link'

export default { component: ContextMenu, title: 'ContextMenu' } as Meta

export const Default = () => {
  const ref = useRef()

  return (
    <>
      <div
        ref={ref}
        style={{
          display: 'inline-block',
          padding: '1rem',
          backgroundColor: '#c9c9c9',
        }}
      >
        Right click me!
      </div>

      <ContextMenu
        attachedToRef={ref}
        onHide={action('onHide')}
        onShow={action('onShow')}
      >
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
          link={(
            <Link href="/something-else">
              This is too much text to put into a context menu item
            </Link>
          )}
        />
      </ContextMenu>
    </>
  )
}

Default.storyName = 'Default'

export const NoIcons = () => {
  const ref = useRef()

  return (
    <>
      <div
        ref={ref}
        style={{
          display: 'inline-block',
          padding: '1rem',
          backgroundColor: '#c9c9c9',
        }}
      >
        Right click me!
      </div>

      <ContextMenu attachedToRef={ref}>
        <ContextMenuItem link={<Link href="/edit">Edit</Link>} />
        <ContextMenuItem link={<Link href="/delete">Delete</Link>} />
        <ContextMenuItem link={<Link href="/delete">Action</Link>} />
        <ContextMenuDivider />
        <ContextMenuItem link={<Link href="/add">Add</Link>} />
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
    </>
  )
}

NoIcons.storyName = 'No icons'

export const LeftClick = () => {
  const ref = useRef()

  return (
    <>
      <div
        ref={ref}
        style={{
          display: 'inline-block',
          padding: '1rem',
          backgroundColor: '#c9c9c9',
        }}
      >
        Left click me!
      </div>

      <ContextMenu attachedToRef={ref} clickType="left">
        <ContextMenuItem link={<Link href="/edit">Edit</Link>} />
        <ContextMenuItem link={<Link href="/delete">Delete</Link>} />
        <ContextMenuItem link={<Link href="/delete">Action</Link>} />
        <ContextMenuDivider />
        <ContextMenuItem link={<Link href="/add">Add</Link>} />
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
    </>
  )
}

LeftClick.storyName = 'Left click to open'
