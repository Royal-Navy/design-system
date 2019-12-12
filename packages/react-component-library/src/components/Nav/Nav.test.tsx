import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Nav, NavItem } from '.'
import { Link } from '../index'

describe('Nav', () => {
  let wrapper: RenderResult

  describe('when there is a flat collection of three items', () => {
    beforeEach(() => {
      wrapper = render(
        <Nav>
          <NavItem link={<Link href="http://test.com/1">Nav 1</Link>} />
          <NavItem
            link={<Link href="http://test.com/2">Nav 2</Link>}
            isActive
          />
          <NavItem link={<Link href="http://test.com/3">Nav 3</Link>} />
        </Nav>
      )
    })

    it('should default the orientation to vertical', () => {
      expect(wrapper.getByTestId('nav').classList).toContain('rn-nav--vertical')
    })

    it('should default the size to regular', () => {
      expect(wrapper.getByTestId('nav').classList).toContain('rn-nav--regular')
    })

    it('should render three items', () => {
      const navItems = wrapper.queryAllByTestId('nav-item')
      expect(navItems).toHaveLength(3)
    })

    it('should set the second item to active', () => {
      const secondNavItem = wrapper.getByText('Nav 2')
      expect(secondNavItem.className).toContain('is-active')
    })

    it('should not set the items to open', () => {
      expect(wrapper.getAllByTestId('nav-item')[0].classList).not.toContain(
        'is-open'
      )
      expect(wrapper.getAllByTestId('nav-item')[1].classList).not.toContain(
        'is-open'
      )
      expect(wrapper.getAllByTestId('nav-item')[2].classList).not.toContain(
        'is-open'
      )
    })

    describe('when the second item is clicked', () => {
      beforeEach(() => {
        const secondNavItem = wrapper.getByText('Nav 2')
        secondNavItem.click()
      })

      it('should not set the second item to open', () => {
        expect(wrapper.getAllByTestId('nav-item')[1].classList).not.toContain(
          'is-open'
        )
      })
    })
  })

  describe('when there is a collection of three items and the first has an active child', () => {
    beforeEach(() => {
      wrapper = render(
        <Nav>
          <NavItem label="Parent 1">
            <NavItem link={<Link href="http://test.com/1.1">Child 1</Link>} />
            <NavItem
              link={<Link href="http://test.com/1.2">Child 2</Link>}
              isActive
            />
          </NavItem>
          <NavItem link={<Link href="http://test.com/2">Nav 2</Link>} />
          <NavItem link={<Link href="http://test.com/3">Nav 3</Link>} />
        </Nav>
      )
    })

    it('should set the first item to open', async () => {
      expect(wrapper.getAllByTestId('nav-item')[0].classList).toContain(
        'is-open'
      )
    })
  })

  describe('when there is a collection of three items and the first has inactive children', () => {
    beforeEach(() => {
      wrapper = render(
        <Nav>
          <NavItem label="Parent 1">
            <NavItem link={<Link href="http://test.com/1.1">Child 1</Link>} />
            <NavItem link={<Link href="http://test.com/1.2">Child 2</Link>} />
          </NavItem>
          <NavItem link={<Link href="http://test.com/2">Nav 2</Link>} />
          <NavItem link={<Link href="http://test.com/3">Nav 3</Link>} />
        </Nav>
      )
    })

    it('should not set the first item to open', async () => {
      expect(wrapper.getAllByTestId('nav-item')[0].classList).not.toContain(
        'is-open'
      )
    })

    describe('when the first item is clicked', () => {
      beforeEach(() => {
        const firstNavItem = wrapper.getByText('Parent 1')
        firstNavItem.click()
      })

      it('should set the first item to open', async () => {
        expect(wrapper.getAllByTestId('nav-item')[0].classList).toContain(
          'is-open'
        )
      })
    })
  })

  describe('when the orientation is specified', () => {
    it.each`
      orientation     | expected
      ${'vertical'}   | ${'rn-nav--vertical'}
      ${'horizontal'} | ${'rn-nav--horizontal'}
    `(
      'sets the modifier when the orientation is $orientation',
      ({ orientation, expected }) => {
        wrapper = render(
          <Nav orientation={orientation}>
            <NavItem link={<Link href="http://test.com/1">Nav 1</Link>} />
            <NavItem link={<Link href="http://test.com/2">Nav 2</Link>} />
            <NavItem link={<Link href="http://test.com/3">Nav 3</Link>} />
          </Nav>
        )

        expect(wrapper.getByTestId('nav').classList).toContain(expected)
      }
    )
  })

  describe('when the size is specified', () => {
    it.each`
      size         | expected
      ${'small'}   | ${'rn-nav--small'}
      ${'regular'} | ${'rn-nav--regular'}
      ${'large'}   | ${'rn-nav--large'}
      ${'xlarge'}  | ${'rn-nav--xlarge'}
    `('sets the modifier when the size is $size', ({ size, expected }) => {
      wrapper = render(
        <Nav size={size}>
          <NavItem link={<Link href="http://test.com/1">Nav 1</Link>} />
          <NavItem link={<Link href="http://test.com/2">Nav 2</Link>} />
          <NavItem link={<Link href="http://test.com/3">Nav 3</Link>} />
        </Nav>
      )

      expect(wrapper.getByTestId('nav').classList).toContain(expected)
    })
  })
})
