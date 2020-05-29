import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { TriangleDown, TriangleUp } from '../../icons'
import { CustomLink } from '../CustomLink'
import { Button } from '../Button'
import { Nav } from '.'

const stories = storiesOf('Nav', module)

stories.addDecorator(withKnobs)

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

stories.add('Vertical', () => <Nav navItems={navItemsWithChildren} />)

stories.add('Horizontal', () => (
  <Nav navItems={navItems} orientation="horizontal" />
))

stories.add('Sizes', () => (
  <div>
    <Nav navItems={navItems} orientation="horizontal" size="small" />
    <br />
    <Nav navItems={navItems} orientation="horizontal" />
    <br />
    <Nav navItems={navItems} orientation="horizontal" size="large" />
    <br />
    <Nav navItems={navItems} orientation="horizontal" size="xlarge" />

    <hr />

    <Nav navItems={navItems} orientation="vertical" size="small" />
    <br />
    <Nav navItems={navItems} orientation="vertical" />
    <br />
    <Nav navItems={navItems} orientation="vertical" size="large" />
    <br />
    <Nav navItems={navItems} orientation="vertical" size="xlarge" />
  </div>
))

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

stories.add('Custom Item', () => <Nav navItems={customNavItems} />)

const PrimaryNav = () => {
  const [open, setOpen] = useState(true)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="primary-nav">
      <Button
        className="primary-nav--button"
        onClick={toggle}
        icon={open ? <TriangleDown /> : <TriangleUp />}
      >
        Menu
      </Button>
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

stories.add('Primary Navigation', () => <PrimaryNav />)
