import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import toJson from 'enzyme-to-json'

import Nav from './index'

describe('Nav', () => {
  let component: ReactWrapper
  let navItems: any[]
  let navItemsWithChildren: any[]

  describe('Given the nav is supplied navItems prop', () => {
    beforeEach(() => {
      navItems = [
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

      navItemsWithChildren = [
        ...navItems,
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
            },
          ],
        },
      ]
    })

    describe('and navItems is a flat collection of 5 items', () => {
      it('should render the correct number of list items', () => {
        component = mount(<Nav navItems={navItems} />)
        expect(component.find('.rn-nav__list-item').length).toEqual(5)
      })

      it('snapshot: has same HTML structure', () => {
        const wrapper = mount(
          <Nav navItems={navItems} orientation="vertical" />
        )
        expect(toJson(wrapper)).toMatchSnapshot()
      })
    })

    describe('and navItems is a nested collection of 5 items with children', () => {
      it('should render the correct number of list items', () => {
        component = mount(<Nav navItems={navItemsWithChildren} />)
        expect(component.find('.rn-nav__list-item').length).toEqual(8)
      })
    })
  })

  describe('Given the nav is supplied orientation prop', () => {
    describe('and the value of the prop is vertical', () => {
      it('should apply the appropriate modifier class', () => {
        component = mount(<Nav navItems={navItems} orientation="vertical" />)
        expect(component.find('.rn-nav').hasClass('rn-nav--vertical')).toBe(
          true
        )
      })
    })

    describe('and the value of the prop is horizontal', () => {
      it('should apply the appropriate modifier class', () => {
        component = mount(<Nav navItems={navItems} orientation="horizontal" />)
        expect(component.find('.rn-nav').hasClass('rn-nav--horizontal')).toBe(
          true
        )
      })
    })

    describe('Given the nav is supplied size prop', () => {
      describe('and the value of the prop is small', () => {
        it('should apply the appropriate modifier class', () => {
          component = mount(<Nav navItems={navItems} size="small" />)
          expect(component.find('.rn-nav').hasClass('rn-nav--small')).toBe(true)
        })
      })

      describe('and the value of the prop is regular', () => {
        it('should apply the appropriate modifier class', () => {
          component = mount(<Nav navItems={navItems} size="regular" />)
          expect(component.find('.rn-nav').hasClass('rn-nav--regular')).toBe(
            true
          )
        })
      })

      describe('and the value of the prop is large', () => {
        it('should apply the appropriate modifier class', () => {
          component = mount(<Nav navItems={navItems} size="large" />)
          expect(component.find('.rn-nav').hasClass('rn-nav--large')).toBe(true)
        })
      })

      describe('and the value of the prop is xlarge', () => {
        it('should apply the appropriate modifier class', () => {
          component = mount(<Nav navItems={navItems} size="xlarge" />)
          expect(component.find('.rn-nav').hasClass('rn-nav--xlarge')).toBe(
            true
          )
        })
      })
    })
  })
})
