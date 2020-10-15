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
import { Notification, Notifications } from '../NotificationPanel'

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

const notifications = (
  <Notifications link={<Link href="notifications" />}>
    <Notification
      link={<Link href="notifications/1" />}
      name="User 1"
      action="added a new comment to your"
      on="review"
      when={new Date('2019-11-05T14:25:02.178Z')}
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />
    <Notification
      link={<Link href="notifications/2" />}
      name="User 2"
      action="added a new comment to your"
      on="review"
      when={new Date('2019-11-01T14:25:02.178Z')}
      description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
    />
  </Notifications>
)

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

    describe('and sidebar is collapsed', () => {
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

    describe('and sidebar is expanded', () => {
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

    describe('and sidebar is collapsed', () => {
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

  describe('when composed with notifications and the `hasUnreadNotification` prop is not set', () => {
    beforeEach(() => {
      wrapper = render(
        <Sidebar
          icon={<IconGrain />}
          title="Application Name"
          notifications={notifications}
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

    it('does not display the indicator dot', () => {
      expect(wrapper.queryByTestId('not-read')).not.toBeInTheDocument()
    })
  })

  describe('when composed with notifications and the `hasUnreadNotification prop is set`', () => {
    beforeEach(() => {
      wrapper = render(
        <Sidebar
          icon={<IconGrain />}
          title="Application Name"
          notifications={notifications}
          hasUnreadNotification
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

    describe('and sidebar is collapsed', () => {
      it('does not display the button title', () => {
        expect(wrapper.queryByText('Notifications')).not.toBeInTheDocument()
      })

      it('displays the correct number of unread notifications', () => {
        expect(wrapper.getByTestId('not-read')).toHaveTextContent('2')
      })

      describe('and the notification button is clicked', () => {
        beforeEach(() => {
          wrapper.getByTestId('notification-button').click()
        })

        it('shows the notifications', () => {
          expect(wrapper.getByText('User 1')).toBeInTheDocument()
          expect(wrapper.getByText('User 2')).toBeInTheDocument()
        })

        describe('and the notification button is clicked again', () => {
          beforeEach(() => {
            wrapper.getByTestId('notification-button').click()
          })

          it('should not show the notifications', () => {
            return waitFor(() => {
              expect(wrapper.queryByText('User 1')).toBeNull()
              expect(wrapper.queryByText('User 2')).toBeNull()
            })
          })

          describe('and then elsewhere in the document is clicked', () => {
            beforeEach(() => {
              fireEvent(
                document,
                new MouseEvent('mousedown', {
                  bubbles: true,
                  cancelable: true,
                })
              )
            })

            it('should not show the notifications', () => {
              return waitFor(() => {
                expect(wrapper.queryByText('User 1')).toBeNull()
                expect(wrapper.queryByText('User 2')).toBeNull()
              })
            })
          })
        })
      })
    })

    describe('and sidebar is expanded', () => {
      beforeEach(() => {
        wrapper.getByTestId('sidebar-handle').click()
      })

      it('does display the button title', () => {
        expect(wrapper.queryByText('Notifications')).toBeInTheDocument()
      })

      it('displays the correct number of unread notifications', () => {
        expect(wrapper.getByTestId('not-read')).toHaveTextContent('2')
      })
    })
  })
})
