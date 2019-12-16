import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Breadcrumbs, BreadcrumbsItem  } from '.'
import { Link } from '../index'

describe('Breadcrumbs', () => {
  let wrapper: RenderResult

  describe('When called with regular links', () => {
    beforeEach(() => {
      wrapper = render(
        <Breadcrumbs>
          <BreadcrumbsItem link={<Link href="#home">Home</Link>} />
          <BreadcrumbsItem link={<Link href="#ships">Ships</Link>} />
          <BreadcrumbsItem link={<Link href="#reports">Reports</Link>} />
          <BreadcrumbsItem link={<Link href="#stuff">Stuff</Link>} />
          <BreadcrumbsItem link={<Link href="#22">22nd April 2019</Link>} />
        </Breadcrumbs>
      )
    })

    it('should render a list of breadcrumbs', () => {
      const linkElements = wrapper.queryAllByTestId('breadcrumb')
      expect(linkElements).toHaveLength(5)
    })

    it('should render four separators', () => {
      const linkElements = wrapper.queryAllByTestId('separator')
      expect(linkElements).toHaveLength(4)
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
