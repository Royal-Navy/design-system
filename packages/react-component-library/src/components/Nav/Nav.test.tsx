import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import Nav from './index'

describe('Nav', () => {
  let wrapper: RenderResult
  const navItemsMock = [
    {
      href: 'http://test.com/1',
      label: 'Nav 1',
    },
    {
      href: 'http://test.com/2',
      label: 'Nav 2',
      active: true,
    },
    {
      href: 'http://test.com/3',
      label: 'Nav 3',
    },
  ]

  describe('when there is a flat collection of three items', () => {
    beforeEach(() => {
      wrapper = render(<Nav navItems={navItemsMock} />)
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
      expect(wrapper.getAllByTestId('nav-item')[0].classList).not.toContain('is-open')
      expect(wrapper.getAllByTestId('nav-item')[1].classList).not.toContain('is-open')
      expect(wrapper.getAllByTestId('nav-item')[2].classList).not.toContain('is-open')
    })

    describe('when the second item is clicked', () => {
      beforeEach(() => {
        const secondNavItem = wrapper.getByText('Nav 2')
        secondNavItem.click()
      })

      it('should not set the second item to open', () => {
        expect(wrapper.getAllByTestId('nav-item')[1].classList).not.toContain('is-open')
      })
    })
  })

  describe('when there is a collection of three items and the first has an active child', () => {
    beforeEach(() => {
      const navItemsWithChildrenMock = [
        {
          href: 'http://test.com/1',
          label: 'Parent 1',
          children: [
            {
              href: 'http://test.com/1.1',
              label: 'Child 1',
            },
            {
              href: 'http://test.com/1.2',
              label: 'Child 2',
              active: true,
            },
          ],
        },
        {
          href: 'http://test.com/2',
          label: 'Nav 2',
        },
        {
          href: 'http://test.com/3',
          label: 'Nav 3',
        },
      ]

      wrapper = render(<Nav navItems={navItemsWithChildrenMock} />)
    })

    it('should set the first item to open', async () => {
      expect(wrapper.getAllByTestId('nav-item')[0].classList).toContain('is-open')
    })
  })

  describe('when there is a collection of three items and the first has inactive children', () => {
    beforeEach(() => {
      const navItemsWithChildrenMock = [
        {
          href: 'http://test.com/1',
          label: 'Parent 1',
          children: [
            {
              href: 'http://test.com/1.1',
              label: 'Child 1',
            },
            {
              href: 'http://test.com/1.2',
              label: 'Child 2',
            },
          ],
        },
        {
          href: 'http://test.com/2',
          label: 'Nav 2',
        },
        {
          href: 'http://test.com/3',
          label: 'Nav 3',
        },
      ]

      wrapper = render(<Nav navItems={navItemsWithChildrenMock} />)
    })

    it('should not set the first item to open', async () => {
      expect(wrapper.getAllByTestId('nav-item')[0].classList).not.toContain('is-open')
    })

    describe('when the first item is clicked', () => {
      beforeEach(() => {
        const firstNavItem = wrapper.getByText('Parent 1')
        firstNavItem.click()
      })

      it('should set the first item to open', async () => {
        expect(wrapper.getAllByTestId('nav-item')[0].classList).toContain('is-open')
      })
    })
  })

  describe('when the orientation is specified', () => {
    it.each`
      orientation      | expected
      ${'vertical'}    | ${'rn-nav--vertical'}
      ${'horizontal'}  | ${'rn-nav--horizontal'}
    `('sets the modifier when the orientation is $orientation', ({ orientation, expected }) => {
      wrapper = render(<Nav navItems={navItemsMock} orientation={orientation} />)

      expect(wrapper.getByTestId('nav').classList).toContain(expected)
    })
  })

  describe('when the size is specified', () => {
    it.each`
      size         | expected
      ${'small'}   | ${'rn-nav--small'}
      ${'regular'} | ${'rn-nav--regular'}
      ${'large'}   | ${'rn-nav--large'}
      ${'xlarge'}  | ${'rn-nav--xlarge'}
    `('sets the modifier when the size is $size', ({ size, expected }) => {
      wrapper = render(<Nav navItems={navItemsMock} size={size} />)

      expect(wrapper.getByTestId('nav').classList).toContain(expected)
    })
  })
})
