import React, { useRef } from 'react'
import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react/types-6-0'

import { IconEdit, IconDelete, IconAdd } from '@royalnavy/icon-library'

import { ContextMenu, ContextMenuItem, ContextMenuDivider } from '.'
import { Link } from '../Link'
import {
  CLICK_BUTTON,
  CLICK_MENU_POSITION,
  ClickMenuPositionType,
  ClickType,
} from '../../hooks/useClickMenu'

export default { component: ContextMenu, title: 'ContextMenu' } as Meta

const PirateContent: React.FC = () => (
  <>
    <h3
      style={{
        display: 'block',
        padding: '1rem',
        color: '#fff',
        backgroundColor: '#1c2d39',
      }}
    >
      Yar Pirate Ipsum
    </h3>
    <p
      style={{
        backgroundColor: '#fff',
        padding: '1rem',
      }}
    >
      Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
      yardarm. Pinnace holystone mizzenmast quarter crow&apos;s nest nipperkin
      grog yardarm hempen halter furl. Swab barque interloper chantey doubloon
      starboard grog black jack gangway rutters.
    </p>
    <p
      style={{
        backgroundColor: '#fff',
        padding: '1rem',
      }}
    >
      Deadlights jack lad schooner scallywag dance the hempen jig carouser
      broadside cable strike colors. Bring a spring upon her cable holystone
      blow the man down spanker Shiver me timbers to go on account lookout
      wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm
      spyglass sheet transom heave to.
    </p>
    <p
      style={{
        backgroundColor: '#fff',
        padding: '1rem',
      }}
    >
      Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case
      shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee
      snow crow&apos;s nest rutters. Fluke jib scourge of the seven seas
      boatswain schooner gaff booty Jack Tar transom spirits.
    </p>
  </>
)

interface ContentMenuExampleProps {
  clickType?: ClickType
  hasIcons?: boolean
  position?: ClickMenuPositionType
}

const ContextMenuExample: React.FC<ContentMenuExampleProps> = ({
  hasIcons,
  ...rest
}) => {
  const ref = useRef()

  return (
    <>
      <div
        ref={ref}
        style={{
          display: 'inline-block',
          padding: '3rem',
          backgroundColor: '#12202b',
        }}
      >
        <PirateContent />
      </div>

      <ContextMenu
        attachedToRef={ref}
        onHide={action('onHide')}
        onShow={action('onShow')}
        {...rest}
      >
        <ContextMenuItem
          icon={hasIcons && <IconEdit />}
          link={<Link href="/edit">Edit</Link>}
        />
        <ContextMenuItem
          icon={hasIcons && <IconDelete />}
          link={<Link href="/delete">Delete</Link>}
        />
        <ContextMenuItem link={<Link href="/delete">Action</Link>} />
        <ContextMenuDivider />
        <ContextMenuItem
          icon={hasIcons && <IconAdd />}
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

export const Default = () => <ContextMenuExample hasIcons />
Default.storyName = 'Default'

export const NoIcons = () => <ContextMenuExample />
NoIcons.storyName = 'No icons'

export const LeftClick = () => (
  <ContextMenuExample clickType={CLICK_BUTTON.LEFT} />
)
LeftClick.storyName = 'Left click to open'

export const Above = () => (
  <ContextMenuExample position={CLICK_MENU_POSITION.ABOVE} />
)
Above.storyName = 'Above'
