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

    it('should render the tabs', () => {
      const tabs = wrapper.queryAllByTestId('tab-nav-tab')
      expect(tabs[0]).toHaveTextContent('Thing 1')
      expect(tabs[1]).toHaveTextContent('Thing 2')
      expect(tabs[2]).toHaveTextContent('Thing 3')
      expect(tabs).toHaveLength(3)
    })
  })
})
