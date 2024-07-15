import React, { useRef } from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { IconEdit, IconDelete, IconAdd } from '@royalnavy/icon-library'

import { ContextMenu, ContextMenuItem, ContextMenuDivider } from '.'
import { Link } from '../Link'
import { CLICK_BUTTON } from '../../hooks/useClickMenu'

export default {
  component: ContextMenu,
  subcomponents: { ContextMenuItem, ContextMenuDivider },
  title: 'Components/Context Menu',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    clickType: {
      control: 'select',
      options: Object.values(CLICK_BUTTON),
    },
  },
} as Meta<typeof ContextMenu>

const StyledContainer = styled.div`
  min-height: 14rem;
`

const ClickArea = styled.div`
  display: inline-block;
  padding: 1rem;
  color: ${color('neutral', '700')};
  background-color: ${color('neutral', '100')};
`

export const Default: StoryFn<typeof ContextMenu> = (props) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <StyledContainer>
      <ClickArea ref={ref} data-testid="storybook-context-menu-target">
        {props.clickType === 'left' ? 'Click on me' : 'Right click on me'}
      </ClickArea>
      <ContextMenu {...props} attachedToRef={ref}>
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
          link={
            <Link href="/something-else">
              This is too much text to put into a context menu item
            </Link>
          }
        />
      </ContextMenu>
    </StyledContainer>
  )
}

const WithIconsTemplate: StoryFn<typeof ContextMenu> = (props) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <ClickArea ref={ref}>
        {props.clickType === 'left' ? 'Click on me' : 'Right click on me'}
      </ClickArea>
      <ContextMenu {...props} attachedToRef={ref}>
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
      </ContextMenu>
    </>
  )
}

export const WithIcons = WithIconsTemplate.bind({})
WithIcons.storyName = 'Icons'

export const Open = WithIconsTemplate.bind({})
Open.args = {
  initialIsOpen: true,
}
Open.parameters = {
  docs: { disable: true },
}
