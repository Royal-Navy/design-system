/* eslint-disable */
import React from 'react'
import { render, getByText } from '@testing-library/react'

// import Masthead from './index'
import packageJson from '../../../../package'

describe.skip('Masthead', () => {
  let wrapper

  describe('Given the masthead is called with navigation items', () => {
    beforeEach(() => {
      const navItems = [
        {
          active: true,
          href: '/',
          label: 'Home',
        },
        {
          href: '/get-started',
          label: 'Get started',
        },
        {
          href: '/styles',
          label: 'Styles',
        },
      ]

      wrapper = render(<Masthead navItems={navItems} />)
    })

    it('should render a versions badge', () => {
      expect(wrapper.getByText(`v${packageJson.version}`)).toBeInTheDocument()
    })

    it('should link the versions badge to the versions page', () => {
      const versionBadge = wrapper.getByText(`v${packageJson.version}`)
      expect(versionBadge.parentElement.getAttribute('href')).toEqual(
        '/versions'
      )
    })

    it('should render a navigation section', () => {
      expect(wrapper.getByTestId('primary-nav')).toBeInTheDocument()
    })

    it('should include links for the top level items', () => {
      const navContainer = wrapper.getByTestId('primary-nav')

      expect(getByText(navContainer, 'Home')).toHaveAttribute('href', '/')
      expect(getByText(navContainer, 'Get started')).toHaveAttribute(
        'href',
        '/get-started'
      )
      expect(getByText(navContainer, 'Styles')).toHaveAttribute(
        'href',
        '/styles'
      )
    })

    it('should not include links for the child nav items', () => {
      expect(wrapper.queryByText('-c1c1-')).toBeNull()
    })

    it('should include a menu button to show/hide the nav items', () => {
      expect(wrapper.getByTestId('primary-nav-button')).toBeInTheDocument()
    })
  })

  describe('Given the Masthead is called with no navigation items', () => {
    beforeEach(() => {
      wrapper = render(<Masthead />)
    })

    it('should not include a navigation section', () => {
      expect(wrapper.queryByTestId('primary-nav')).toBeNull()
    })

    it('should not include the menu button', () => {
      expect(wrapper.queryByTestId('primary-nav-button')).toBeNull()
    })
  })
})
