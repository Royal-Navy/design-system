import React from 'react'
import { themeColor } from '@royalnavy/design-tokens'
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
    `4px solid ${themeColor('action', '500')}`
  )
})

describe('when the variant is underline', () => {
  beforeEach(() => {
    render(
      <TabNav variant="underline">
        <TabNavItem link={<Link href="/foo">Foo</Link>} />
        <TabNavItem link={<Link href="/bar">Bar</Link>} isActive />
      </TabNav>
    )
  })

  it('underlines the active tab', () => {
    expect(screen.getByText('Bar')).toHaveStyleRule(
      'border-bottom',
      `3px solid ${themeColor('action', '700')}`
    )
    expect(screen.getByText('Bar')).toHaveStyleRule(
      'color',
      themeColor('action', '700')
    )
    expect(screen.getByText('Foo')).toHaveStyleRule(
      'border-bottom',
      '3px solid transparent'
    )
  })

  it('does not box the active tab', () => {
    expect(screen.getByText('Bar')).not.toHaveStyleRule(
      'border-top',
      `4px solid ${themeColor('action', '500')}`
    )
  })
})
