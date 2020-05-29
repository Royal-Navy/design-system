import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Nav } from '.'

describe('Nav', () => {
  let wrapper: RenderResult
  let consoleWarnSpy: jest.SpyInstance
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
      consoleWarnSpy = jest.spyOn(global.console, 'warn')
      wrapper = render(<Nav navItems={navItemsMock} />)
    })

    it('should warn the consumer that the component is deprecated', () => {
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        `Component \`Nav\` is deprecated`
      )
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
      expect(wrapper.getAllByTestId('nav-item')[0].classList).toContain(
        'is-open'
      )
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
})
