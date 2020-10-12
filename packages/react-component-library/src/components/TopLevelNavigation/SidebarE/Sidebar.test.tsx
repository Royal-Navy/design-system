import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import { IconHome, IconGrain } from '@royalnavy/icon-library'

import { Sidebar, SidebarNav, SidebarNavItem } from '.'
import { Link } from '../../Link'

describe('Sidebar', () => {
  let wrapper: RenderResult

  describe('when composed with minimal props', () => {
    beforeEach(() => {
      wrapper = render(<Sidebar />)
    })
  })

  describe('when composed with single level of navigaton', () => {
    beforeEach(() => {
      wrapper = render(
        <Sidebar icon={<IconGrain />} title="Application Name">
          <SidebarNav>
            <SidebarNavItem
              icon={<IconHome />}
              link={<Link href="/dashboard">Dashboard</Link>}
            />
            <SidebarNavItem link={<Link href="/reports">Reports</Link>} />
          </SidebarNav>
        </Sidebar>
      )
    })

    describe('and is collapsed', () => {
      it('should not display the text titles for navigation items', () => {
        expect(wrapper.queryByText('Dashboard')).not.toBeInTheDocument()
      })

      describe('and we hover over a top level nav item', () => {
        beforeEach(() => {
          fireEvent.mouseEnter(wrapper.getAllByTestId('sidebar-nav-item')[0])
        })
      })

      // it('should display a tooltip on hover', () => {
      //   expect(wrapper.queryAllByTestId('tooltip')).toHaveLength(1)
      // })
    })

    describe('and is expanded', () => {
      beforeEach(() => {
        wrapper.getByTestId('sidebar-handle').click()
      })

      it('should display the text titles for navigation items', () => {
        expect(wrapper.queryByText('Dashboard')).toBeInTheDocument()
      })

      it('should not disply a tooltip on hover', () => {
        expect(wrapper.queryAllByTestId('tooltip')).toHaveLength(0)
      })
    })
  })
})
