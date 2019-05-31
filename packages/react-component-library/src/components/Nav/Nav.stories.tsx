import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { TriangleDown, TriangleUp } from '../../icons'
import CustomLink from '../CustomLink'
import Button from '../Button'
import Nav from './index'

const stories = storiesOf('Nav', module)

stories.addDecorator(withKnobs)

const navItems = [
  {
    href: 'http://testurl.test',
    label: 'Styles',
  },
  {
    href: 'http://testurl.test',
    label: 'Components',
  },
  {
    href: 'http://testurl.test',
    label: 'Patterns',
    active: true,
  },
  {
    href: 'http://testurl.test',
    label: 'Community',
  },
  {
    href: 'http://testurl.test',
    label: 'About',
  },
]

const navItemsWithChildren = [
  {
    href: 'http://testurl.test',
    label: 'Parent',
    children: [
      {
        href: 'http://testurl.test',
        label: 'Child 1',
      },
      {
        href: 'http://testurl.test',
        label: 'Child 2',
        children: [
          {
            href: 'http://testurl.test',
            label: 'Child 1',
          },
          {
            href: 'http://testurl.test',
            label: 'Child 2'
          },
        ]
      },
    ]
  },
  ...navItems
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
    Component: CustomLink,
    to: 'http://testurl.test',
    label: 'Styles',
  },
  {
    Component: CustomLink,
    to: 'http://testurl.test',
    label: 'Components',
  },
  {
    Component: CustomLink,
    to: 'http://testurl.test',
    label: 'Patterns',
    active: true,
  },
  {
    Component: CustomLink,
    to: 'http://testurl.test',
    label: 'Community',
  },
  {
    Component: CustomLink,
    to: 'http://testurl.test',
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
      {open && <Nav navItems={navItems} orientation="horizontal" />}
    </div>
  )
}

stories.add('Primary Navigation', () => <PrimaryNav />)
