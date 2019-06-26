import 'jest-dom/extend-expect'
import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import Breadcrumbs from './index'

describe('Breadcrumbs', () => {
  let links: any[]
  let wrapper: RenderResult

  describe('When called with regular links', () => {
    beforeEach(() => {
      links = [
        {
          href: 'http://testurl.test',
          label: 'Home',
        },
        {
          href: 'http://testurl.test',
          label: 'Ships',
        },
        {
          href: 'http://testurl.test',
          label: 'Reports',
        },
        {
          href: 'http://testurl.test',
          label: 'Reports',
        },
        {
          href: 'http://testurl.test',
          label: '22nd April 2019',
        },
      ]

      wrapper = render(<Breadcrumbs links={links} />)
    })

    it('should render a list of breadcrumbs', () => {
      const linkElements = wrapper.queryAllByTestId('breadcrumb')
      expect(linkElements).toHaveLength(5)
    })

    it('should render the first 4 links as anchors', () => {
      const linkElements = wrapper.queryAllByTestId('link')
      expect(linkElements).toHaveLength(4)
    })

    it('should render the last link as a title', () => {
      const endTitle = wrapper.getByTestId('end-title')
      expect(endTitle).toBeInTheDocument()
    })

    it('should only include separators in for all but the first link', () => {
      expect(wrapper.queryAllByTestId('link')).toHaveLength(4)
    })
  })
})
