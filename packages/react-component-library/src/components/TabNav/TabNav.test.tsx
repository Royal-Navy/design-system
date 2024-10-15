import React from 'react'
import { color } from '@royalnavy/design-tokens'
import { render, screen } from '@testing-library/react'

import { Link } from '../Link'
import { TabNav, TabNavItem } from '.'

function setup() {
  render(
    <TabNav>
      <TabNavItem link={<Link href="/foo">Foo</Link>} />
      <TabNavItem link={<Link href="/bar">Bar</Link>} isActive />
      <TabNavItem link={<Link href="/baz">Baz</Link>} />
    </TabNav>
  )
}

it('correctly renders the links', () => {
  setup()

  expect(screen.getAllByRole('link')).toHaveLength(3)

  expect(screen.getByRole('link', { name: 'Foo' })).toHaveAttribute(
    'href',
    '/foo'
  )
  expect(screen.getByRole('link', { name: 'Bar' })).toHaveAttribute(
    'href',
    '/bar'
  )
  expect(screen.getByRole('link', { name: 'Baz' })).toHaveAttribute(
    'href',
    '/baz'
  )
})

it('anchor takes up full space of tab', () => {
  setup()

  expect(screen.getByRole('link', { name: 'Foo' })).toHaveStyle({
    display: 'block',
    width: '100%',
    height: '100%',
  })
})

it('applies styles to indicate an active tab', () => {
  setup()

  const activeTab = screen.getByText('Bar')

  expect(activeTab).toHaveStyleRule(
    'border-top',
    `6px solid ${color('action', '500')}`
  )
})
