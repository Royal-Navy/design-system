import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Breadcrumbs, BreadcrumbsItem } from '.'
import { Link } from '../Link'

describe('Breadcrumbs', () => {
  let wrapper: RenderResult

  describe('when called with regular links', () => {
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

    it('should set the `aria-label` attribute to `breadcrumb`', () => {
      expect(wrapper.getByTestId('breadcrumb-wrapper')).toHaveAttribute(
        'aria-label',
        'Breadcrumb'
      )
    })

    it('should apply the `aria-hidden` attribute to seperators', () => {
      expect(wrapper.getAllByTestId('breadcrumb-separator')[0]).toHaveAttribute(
        'aria-hidden'
      )
    })

    it('should apply the `aria-current` attribute to the last crumb', () => {
      expect(wrapper.getByTestId('breadcrumb-end-title')).toHaveAttribute(
        'aria-current',
        'page'
      )
    })

    it('should render a list of breadcrumbs', () => {
      const linkElements = wrapper.queryAllByTestId('breadcrumb')
      expect(linkElements).toHaveLength(5)
    })

    it('should render four separators', () => {
      const linkElements = wrapper.queryAllByTestId('breadcrumb-separator')
      expect(linkElements).toHaveLength(4)
    })

    it('should render the first 4 links as anchors', () => {
      const linkElements = wrapper.queryAllByTestId('link')
      expect(linkElements).toHaveLength(4)
    })

    it('should render the last link as a title', () => {
      const endTitle = wrapper.getByTestId('breadcrumb-end-title')
      expect(endTitle).toBeInTheDocument()
    })

    it('should only include separators in for all but the first link', () => {
      expect(wrapper.queryAllByTestId('link')).toHaveLength(4)
    })
  })

  describe('when `isFirst` and `isLast` are specified for items', () => {
    let consoleWarnSpy: jest.SpyInstance

    beforeEach(() => {
      consoleWarnSpy = jest.spyOn(global.console, 'warn')

      wrapper = render(
        <Breadcrumbs>
          <BreadcrumbsItem isFirst link={<Link href="#first">First</Link>} />
          <BreadcrumbsItem isLast link={<Link href="#last">Last</Link>} />
        </Breadcrumbs>
      )
    })

    it('should warn the consumer twice about specifying props that will be overwritten', () => {
      expect(consoleWarnSpy).toHaveBeenCalledTimes(2)
    })

    it('should warn the consumer `isFirst` will be overwritten', () => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Prop `isFirst` on `BreadcrumbsItem` will be overwritten'
      )
    })

    it('should warn the consumer `isLast` will be overwritten', () => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Prop `isLast` on `BreadcrumbsItem` will be overwritten'
      )
    })
  })

  describe('when there is only one breadcrumb', () => {
    beforeEach(() => {
      wrapper = render(
        <Breadcrumbs>
          <BreadcrumbsItem link={<Link href="#home">Home</Link>} />
        </Breadcrumbs>
      )
    })

    it('should render one breadcrumb', () => {
      const linkElements = wrapper.queryAllByTestId('breadcrumb')
      expect(linkElements).toHaveLength(1)
    })
  })
})
