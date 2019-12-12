import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { TriangleDown, TriangleUp } from '../../icons'
import CustomLink from '../CustomLink'
import { Button, Link } from '../index'
import { Nav, NavItem } from '.'

const stories = storiesOf('Nav', module)

stories.addDecorator(withKnobs)

const navItems = [
  <NavItem link={<Link href="#styles">Styles</Link>} />,
  <NavItem link={<Link href="#components">Components</Link>} />,
  <NavItem link={<Link href="#patterns">Patterns</Link>} />,
  <NavItem link={<Link href="#community">Community</Link>} />,
  <NavItem link={<Link href="#about">About</Link>} />,
]

const navItemsWithChildren = [
  <NavItem label="Parent">
    <NavItem label="Child 1" />
    <NavItem label="Child 2">
      <NavItem link={<Link href="#child2a">Child 2 A</Link>} />
      <NavItem link={<Link href="#child2b">Child 2 B</Link>} />
    </NavItem>
  </NavItem>,
  ...navItems,
]

// Horizontal
stories.add('Horizontal', () => <Nav orientation="horizontal">{navItems}</Nav>)
stories.add('Horizontal small', () => (
  <Nav orientation="horizontal" size="small">
    {navItems}
  </Nav>
))
stories.add('Horizontal large', () => (
  <Nav orientation="horizontal" size="large">
    {navItems}
  </Nav>
))
stories.add('Horizontal xlarge', () => (
  <Nav orientation="horizontal" size="xlarge">
    {navItems}
  </Nav>
))

// Vertical
stories.add('Vertical', () => <Nav>{navItemsWithChildren}</Nav>)
stories.add('Vertical small', () => (
  <Nav size="small">{navItemsWithChildren}</Nav>
))
stories.add('Vertical large', () => (
  <Nav size="large">{navItemsWithChildren}</Nav>
))
stories.add('Vertical xlarge', () => (
  <Nav size="xlarge">{navItemsWithChildren}</Nav>
))
stories.add('Vertical nested active child', () => (
  <Nav>
    <NavItem label="Parent">
      <NavItem label="Child 1" />
      <NavItem label="Child 2">
        <NavItem link={<Link href="#child2a">Child 2 A</Link>} />
        <NavItem link={<Link href="#child2b">Child 2 B</Link>} isActive />
      </NavItem>
    </NavItem>
    {navItems[0]}
    {navItems[1]}
    {navItems[2]}
    {navItems[3]}
    {navItems[4]}
  </Nav>
))

// Custom
stories.add('Custom', () => (
  <Nav>
    <NavItem link={<CustomLink to="#styles">Styles</CustomLink>} />
    <NavItem link={<CustomLink to="#components">Components</CustomLink>} />
    <NavItem link={<CustomLink to="#patterns">Patterns</CustomLink>} isActive />
    <NavItem link={<CustomLink to="#community">Community</CustomLink>} />
    <NavItem link={<CustomLink to="#about">About</CustomLink>} />
  </Nav>
))

// Primary
stories.add('Primary navigation', () => {
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
        <Nav orientation="horizontal">
          <NavItem link={<CustomLink to="#styles">Styles</CustomLink>} />
          <NavItem
            link={<CustomLink to="#components">Components</CustomLink>}
          />
          <NavItem
            link={<CustomLink to="#patterns">Patterns</CustomLink>}
            isActive
          />
          <NavItem link={<CustomLink to="#community">Community</CustomLink>} />
          <NavItem link={<CustomLink to="#about">About</CustomLink>} />
        </Nav>
      )}
    </div>
  )
})
