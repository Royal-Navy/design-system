import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import TabNav from './index'

describe('TabSet', () => {
  let wrapper: RenderResult
  let navItems: NavItemAnchorType[]

  describe('when the TabSet is generated with tabs and onChangeCallback props', () => {
    beforeEach(() => {
      navItems = [
        {
          label: 'Thing 1',
          href: '/thing1',
        },
        {
          label: 'Thing 2',
          href: '/thing2',
          active: true,
        },
        {
          label: 'Thing 2',
          href: '/thing2',
        },
      ]

      wrapper = render(<TabNav navItems={navItems} />)
    })

    it('should output the correct number of regular tab links', () => {
      expect(wrapper.queryAllByTestId('tab').length).toEqual(2)
    })

    it('should indicate an active tab link', () => {
      expect(wrapper.queryAllByTestId('tab-active').length).toEqual(1)
      expect(wrapper.getByTestId('tab-active')).toHaveTextContent('Thing 2')
    })
  })
})
