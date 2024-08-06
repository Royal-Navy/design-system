import React from 'react'

import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import { IconHome, IconGrain } from '@royalnavy/icon-library'

import {
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  SidebarUser,
  SidebarWrapper,
  useSidebar,
} from '.'
import { Link } from '../../Link'
import { Notification, Notifications } from '../NotificationPanel'

const user = <SidebarUser initials="HN" name="Horatio Nelson" />

const userWithLinks = (
  <SidebarUser
    initials="HN"
    name="Horatio Nelson"
    userLink={<Link href="/user-profile">Profile</Link>}
    exitLink={<Link href="/logout">Logout</Link>}
  />
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

  describe('when rendered in React strict mode', () => {
    it('should not throw deprecation warning about findDOMNode', () => {
      expect(() => {
        wrapper = render(
          <React.StrictMode>
            <Sidebar />
          </React.StrictMode>
        )

        fireEvent.mouseOver(wrapper.getByTestId('sidebar'))
      }).not.toThrow(/findDOMNode is deprecated in StrictMode/)
    })
  })

  describe('when composed with minimal props', () => {
    beforeEach(() => {
      wrapper = render(<Sidebar />)
    })

    it('does not render the header', () => {
      expect(wrapper.queryByTestId('sidebar-head')).not.toBeInTheDocument()
    })
  })

  describe('when composed with single level of navigation and header items', () => {
    beforeEach(() => {
      wrapper = render(
        <SidebarWrapper>
          <Sidebar icon={<IconGrain />} title="Application Name">
            <SidebarNav>
              <SidebarNavItem
                icon={<IconHome />}
                link={<Link href="/dashboard">Dashboard</Link>}
              />
              <SidebarNavItem link={<Link href="/reports">Reports</Link>} />
            </SidebarNav>
          </Sidebar>
          <main>Hello, World!</main>
        </SidebarWrapper>
      )
    })

    describe('and sidebar is collapsed', () => {
      it('should not render any user information', () => {
        expect(
          wrapper.queryByTestId('sidebar-user-open')
        ).not.toBeInTheDocument()
        expect(
          wrapper.queryByTestId('sidebar-user-closed')
        ).not.toBeInTheDocument()
        expect(
          wrapper.queryByTestId('sidebar-user-closed-children')
        ).not.toBeInTheDocument()
      })

      it('should not display the sidebar handle', () => {
        expect(wrapper.queryByTestId('sidebar-handle')).not.toBeInTheDocument()
      })

      it('should apply the correct `aria-label` attribute to the navigation links', () => {
        expect(wrapper.getAllByTestId('sidebar-nav-item')[0]).toHaveAttribute(
          'aria-label',
          'Dashboard'
        )
      })

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

        it('should display the sidebar handle', () => {
          expect(wrapper.queryByTestId('sidebar-handle')).toBeInTheDocument()
        })

        it('should apply the correct `aria-label` value to the handle', () => {
          expect(wrapper.getByTestId('sidebar-handle')).toHaveAttribute(
            'aria-label',
            'Expand sidebar'
          )
        })

        it('should display a tooltip on hover', () => {
          expect(wrapper.queryAllByTestId('tooltip')).toHaveLength(1)
        })

        describe('and we move the mouse away', () => {
          beforeEach(() => {
            fireEvent.mouseLeave(wrapper.getAllByTestId('sidebar-nav-item')[0])
          })

          it('should display a tooltip on hover', () => {
            expect(wrapper.queryAllByTestId('tooltip')).toHaveLength(0)
          })
        })
      })
    })

    describe('and sidebar is expanded', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getAllByTestId('sidebar-nav-item')[0])
        wrapper.getByTestId('sidebar-handle').click()
      })

      it('should apply the correct `aria-label` value to the handle', () => {
        expect(wrapper.getByTestId('sidebar-handle')).toHaveAttribute(
          'aria-label',
          'Collapse sidebar'
        )
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

      describe('and we hover over a top level nav item', () => {
        beforeEach(() => {
          fireEvent.mouseEnter(wrapper.getAllByTestId('sidebar-nav-item')[0])
        })

        it('should not display a tooltip on hover', () => {
          expect(wrapper.queryAllByTestId('tooltip')).toHaveLength(0)
        })
      })
    })
  })

  describe('when composed with a user with user or exit links', () => {
    beforeEach(() => {
      wrapper = render(
        <SidebarWrapper>
          <Sidebar icon={<IconGrain />} title="Application Name" user={user}>
            <SidebarNav>
              <SidebarNavItem
                icon={<IconHome />}
                link={<Link href="/dashboard">Dashboard</Link>}
              />
              <SidebarNavItem link={<Link href="/reports">Reports</Link>} />
            </SidebarNav>
          </Sidebar>
          <main>Hello, World!</main>
        </SidebarWrapper>
      )
    })

    describe('and the sidebar is collapsed', () => {
      it('should render the correct user information', () => {
        expect(
          wrapper.queryByTestId('sidebar-user-closed')
        ).not.toBeInTheDocument()

        expect(
          wrapper.queryByTestId('sidebar-user-open')
        ).not.toBeInTheDocument()

        expect(
          wrapper.queryByTestId('sidebar-user-closed-children')
        ).toBeInTheDocument()
      })
    })

    describe('and the sidebar is expanded', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getAllByTestId('sidebar-nav-item')[0])
        wrapper.getByTestId('sidebar-handle').click()
      })

      it('should not render the exit link', () => {
        expect(
          wrapper.queryByTestId('sidebar-exit-link')
        ).not.toBeInTheDocument()
      })

      it('should not render the user profile link', () => {
        expect(
          wrapper.queryByTestId('sidebar-user-link')
        ).not.toBeInTheDocument()
      })
    })
  })

  describe('when composed with a user menu, user link and exit link', () => {
    beforeEach(() => {
      wrapper = render(
        <SidebarWrapper>
          <Sidebar
            icon={<IconGrain />}
            title="Application Name"
            user={userWithLinks}
          >
            <SidebarNav>
              <SidebarNavItem
                icon={<IconHome />}
                link={<Link href="/dashboard">Dashboard</Link>}
              />
              <SidebarNavItem link={<Link href="/reports">Reports</Link>} />
            </SidebarNav>
          </Sidebar>
          <main>Hello, World!</main>
        </SidebarWrapper>
      )
    })

    describe('and sidebar is collapsed', () => {
      it('should render the correct user information', () => {
        expect(
          wrapper.queryByTestId('sidebar-user-closed-children')
        ).toBeInTheDocument()

        expect(
          wrapper.queryByTestId('sidebar-user-closed')
        ).not.toBeInTheDocument()

        expect(
          wrapper.queryByTestId('sidebar-user-open')
        ).not.toBeInTheDocument()
      })

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
              expect(wrapper.queryByText('Profile')).not.toBeVisible()
              expect(wrapper.queryByText('Logout')).not.toBeVisible()
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
                expect(wrapper.queryByText('Profile')).not.toBeVisible()
                expect(wrapper.queryByText('Logout')).not.toBeVisible()
              })
            })
          })
        })
      })
    })

    describe('and the sidebar is expanded', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getAllByTestId('sidebar-nav-item')[0])
        wrapper.getByTestId('sidebar-handle').click()
      })

      it('should render the correct user information', () => {
        expect(wrapper.queryByTestId('sidebar-user-open')).toBeInTheDocument()

        expect(
          wrapper.queryByTestId('sidebar-user-closed')
        ).not.toBeInTheDocument()
        expect(
          wrapper.queryByTestId('sidebar-user-closed-children')
        ).not.toBeInTheDocument()
      })

      it('should render the exit link', () => {
        expect(wrapper.queryByTestId('sidebar-exit-link')).toBeInTheDocument()
      })
    })
  })

  describe('when composed with notifications and the `hasUnreadNotification` prop is not set', () => {
    beforeEach(() => {
      wrapper = render(
        <SidebarWrapper>
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
          <main>Hello, World!</main>
        </SidebarWrapper>
      )
    })

    it('does not display the indicator dot', () => {
      expect(wrapper.queryByTestId('not-read')).not.toBeInTheDocument()
    })
  })

  describe('when composed with notifications and the `hasUnreadNotification prop is set`', () => {
    beforeEach(() => {
      wrapper = render(
        <SidebarWrapper>
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
          <main>Hello, World!</main>
        </SidebarWrapper>
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
              expect(wrapper.queryByText('User 1')).not.toBeVisible()
              expect(wrapper.queryByText('User 2')).not.toBeVisible()
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
                expect(wrapper.queryByText('User 1')).not.toBeVisible()
                expect(wrapper.queryByText('User 2')).not.toBeVisible()
              })
            })
          })
        })
      })
    })

    describe('and sidebar is expanded', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getAllByTestId('sidebar-nav-item')[0])
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

  describe('when composed with nested navigation', () => {
    beforeEach(() => {
      wrapper = render(
        <SidebarWrapper>
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
              >
                <SidebarNavItem
                  link={<Link href="/sub-nav-item-1">Sub-nav-item 1</Link>}
                />
                <SidebarNavItem
                  link={<Link href="/sub-nav-item-2">Sub-nav-item 2</Link>}
                />
              </SidebarNavItem>
              <SidebarNavItem link={<Link href="/reports">Reports</Link>} />
            </SidebarNav>
          </Sidebar>
          <main>Hello, World!</main>
        </SidebarWrapper>
      )
    })

    describe('and the sidebar is collapsed', () => {
      it('does not render the sub nav', () => {
        expect(wrapper.queryAllByTestId('sidebar-sub-nav')).toHaveLength(0)
      })
    })

    describe('and the sidebar is expanded', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getAllByTestId('sidebar-nav-item')[0])
        wrapper.getByTestId('sidebar-handle').click()
      })

      it('renders the expand button for the correct top-level menu item', () => {
        expect(
          wrapper.getByTestId('sub-menu-expand-button')
        ).toBeInTheDocument()
      })

      describe('and the expand button is clicked', () => {
        beforeEach(() => {
          wrapper.getByTestId('sub-menu-expand-button').click()
        })

        it('renders the sub nav', () => {
          expect(wrapper.getByText('Sub-nav-item 1')).toBeInTheDocument()
          expect(wrapper.getByText('Sub-nav-item 2')).toBeInTheDocument()
        })

        describe('and the expand button is clicked again', () => {
          beforeEach(() => {
            wrapper.getByTestId('sub-menu-expand-button').click()
          })

          it('should not show the sub nav', () => {
            return waitFor(() => {
              expect(wrapper.queryByText('Sub-nav-item 1')).not.toBeVisible()
              expect(wrapper.queryByText('Sub-nav-item 2')).not.toBeVisible()
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

            it('should not show the sub nav', () => {
              return waitFor(() => {
                expect(wrapper.queryByText('Sub-nav-item 1')).not.toBeVisible()
                expect(wrapper.queryByText('Sub-nav-item 2')).not.toBeVisible()
              })
            })
          })
        })
      })
    })
  })

  describe('when testing context', () => {
    const MainComponent = () => {
      const { isOpen } = useSidebar()!
      return <main>isOpen{isOpen}</main>
    }

    beforeEach(() => {
      wrapper = render(
        <SidebarWrapper>
          <Sidebar />
          <MainComponent />
        </SidebarWrapper>
      )
    })

    it('renders whether the sidebar is open', () => {
      expect(wrapper.getByText('isOpen')).toBeInTheDocument()
    })
  })

  describe('when composed with arbitrary props', () => {
    beforeEach(() => {
      wrapper = render(
        <SidebarWrapper data-arbitrary="arbitrary-wrapper">
          <Sidebar
            data-arbitrary="arbitrary-sidebar"
            notifications={notifications}
          >
            <SidebarNav data-arbitrary="arbitrary-nav">
              <SidebarNavItem
                data-arbitrary="arbitrary-nav-item"
                icon={<IconHome />}
                link={<Link href="/dashboard">Dashboard</Link>}
              >
                <SidebarNavItem
                  link={<Link href="/sub-nav-item-1">Sub-nav-item 1</Link>}
                />
                <SidebarNavItem
                  link={<Link href="/sub-nav-item-2">Sub-nav-item 2</Link>}
                />
              </SidebarNavItem>
              <SidebarNavItem link={<Link href="/reports">Reports</Link>} />
            </SidebarNav>
          </Sidebar>
          <main>Hello, World!</main>
        </SidebarWrapper>
      )
    })

    it('should spread arbitrary props on the sidebar wrapper', () => {
      expect(wrapper.getByTestId('sidebar-wrapper')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-wrapper'
      )
    })

    it('should spread arbitrary props on the sidebar', () => {
      expect(wrapper.getByTestId('sidebar')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-sidebar'
      )
    })

    it('should spread arbitrary props on the sidebar nav', () => {
      expect(wrapper.getByTestId('sidebar-nav')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-nav'
      )
    })

    it('should spread arbitrary props on the sidebar nav item', () => {
      expect(wrapper.getAllByTestId('sidebar-nav-item')[0]).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-nav-item'
      )
    })
  })
})
