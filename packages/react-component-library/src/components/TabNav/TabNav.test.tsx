import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Link } from '../Link'
import { TabNav, TabNavItem } from '.'

describe('TabNav', () => {
  let wrapper: RenderResult

  describe('with props', () => {
    beforeEach(() => {
      wrapper = render(
        <TabNav>
          <TabNavItem link={<Link href="/thing1">Thing 1</Link>} />
          <TabNavItem link={<Link href="/thing2">Thing 2</Link>} isActive />
          <TabNavItem link={<Link href="/thing3">Thing 3</Link>} />
        </TabNav>
      )
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
