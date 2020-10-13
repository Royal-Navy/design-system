import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import { IconHome, IconGrain, IconExitToApp } from '@royalnavy/icon-library'

import {
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  SidebarUser,
  SidebarUserItem,
} from '.'
import { Link } from '../../Link'

describe('Sidebar', () => {
  let wrapper: RenderResult

  describe('when composed with minimal props', () => {
    beforeEach(() => {
      wrapper = render(<Sidebar />)
    })

    it('does not render the header', () => {
      expect(wrapper.queryByTestId('sidebar-head')).not.toBeInTheDocument()
    })
  })

  describe('when composed with single level of navigaton and header items', () => {
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
      it('should not render the application name', () => {
        expect(wrapper.queryByText('Application Name')).not.toBeInTheDocument()
      })

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

      it('should render the application name', () => {
        expect(wrapper.queryByText('Application Name')).toBeInTheDocument()
      })

      it('should display the text titles for navigation items', () => {
        expect(wrapper.queryByText('Dashboard')).toBeInTheDocument()
      })

      it('should not disply a tooltip on hover', () => {
        expect(wrapper.queryAllByTestId('tooltip')).toHaveLength(0)
      })
    })
  })

  describe('when composed with a user menu', () => {
    beforeEach(() => {
      const userWithMenu = (
        <SidebarUser
          initials="HN"
          name="Horatio Nelson"
          link={<Link href="/user-profile">View profile</Link>}
        >
          <SidebarUserItem link={<Link href="/user-profile">Profile</Link>} />
          <SidebarUserItem
            icon={<IconExitToApp />}
            link={<Link href="/logout">Logout</Link>}
          />
        </SidebarUser>
      )

      wrapper = render(
        <Sidebar
          icon={<IconGrain />}
          title="Application Name"
          user={userWithMenu}
        >
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
      describe('and the avatar is clicked', () => {
        beforeEach(() => {
          wrapper.getByText('HN').click()
        })

        it('should show the links', () => {
          expect(wrapper.getByText('Profile')).toBeInTheDocument()
          expect(wrapper.getByText('Logout')).toBeInTheDocument()
        })

        describe('and the avatar is clicked again', () => {
          beforeEach(() => {
            wrapper.getByText('HN').click()
          })

          it('should not show the links', () => {
            return waitFor(() => {
              expect(wrapper.queryByText('Profile')).toBeNull()
              expect(wrapper.queryByText('Logout')).toBeNull()
            })
          })
        })

        describe('and the elsewhere in the document is clicked', () => {
          beforeEach(() => {
            fireEvent(
              document,
              new MouseEvent('mousedown', {
                bubbles: true,
                cancelable: true,
              })
            )
          })

          it('should not show the links', () => {
            return waitFor(() => {
              expect(wrapper.queryByText('Profile')).toBeNull()
              expect(wrapper.queryByText('Logout')).toBeNull()
            })
          })
        })
      })
    })
  })
})
