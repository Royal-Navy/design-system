import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { IconArrowDropDown, IconArrowDropUp } from '@royalnavy/icon-library'

import { Button } from '../Button'
import { Nav } from '.'
import { useOpenClose } from '../../hooks'

export default { component: Nav, title: 'Nav' } as Meta

const navItems = [
  {
    href: '#',
    label: 'Styles',
  },
  {
    href: '#',
    label: 'Components',
  },
  {
    href: '#',
    label: 'Patterns',
    active: true,
  },
  {
    href: '#',
    label: 'Community',
  },
  {
    href: '#',
    label: 'About',
  },
]

const navItemsWithChildren = [
  {
    href: '#',
    label: 'Parent',
    children: [
      {
        href: '#',
        label: 'Child 1',
      },
      {
        href: '#',
        label: 'Child 2',
        children: [
          {
            href: '#',
            label: 'Child 1',
          },
          {
            href: '#',
            label: 'Child 2',
          },
        ],
      },
    ],
  },
  ...navItems,
]

export const Default = (props: any) => <Nav {...props} />

Default.args = {
  navItems: navItemsWithChildren,
}

export const Horizontal = () => (
  <Nav navItems={navItems} orientation="horizontal" />
)

Horizontal.storyName = 'Horizontal'

export const CustomItem = () => {
  const customNavItems = [
    {
      to: '#',
      label: 'Styles',
    },
    {
      to: '#',
      label: 'Components',
    },
    {
      to: '#',
      label: 'Patterns',
      active: true,
    },
    {
      to: '#',
      label: 'Community',
    },
    {
      to: '#',
      label: 'About',
    },
  ]

  return <Nav navItems={customNavItems} />
}

CustomItem.storyName = 'Custom item'

export const PrimaryNavigation = () => {
  const { open, toggle } = useOpenClose(true)

  interface CustomLink {
    className?: string
    to: string
  }

  const CustomLink: React.FC<CustomLink> = ({ children, className, to }) => (
    <div className={className}>
      <a href={to}>
        <strong>{children}</strong>
      </a>
    </div>
  )

  return (
    <div>
      <Button
        onClick={toggle}
        icon={open ? <IconArrowDropDown /> : <IconArrowDropUp />}
      >
        Menu
      </Button>
      <hr />
      {open && (
        <Nav
          navItems={navItems}
          LinkComponent={CustomLink}
          orientation="horizontal"
        />
      )}
    </div>
  )
}

PrimaryNavigation.storyName = 'Primary navigation with custom link'
