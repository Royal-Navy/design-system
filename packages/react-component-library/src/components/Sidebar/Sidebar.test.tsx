import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, RenderResult } from '@testing-library/react'

import { Link } from "../Link"
import { Sidebar, SidebarNav, SidebarNavItem, SidebarUser } from '.'
import { Graph, House, Tools } from '../../icons'
import { Notification, Notifications } from '../NotificationPanel'

describe('Sidebar', () => {
  let wrapper: RenderResult

  describe('when composed with minimal props', () => {
    beforeEach(() => {
      wrapper = render(<Sidebar />)
    })

    it('should render the sidebar', () => {
      expect(wrapper.getByTestId('sidebar')).toBeInTheDocument()
    })

    it('should not render the nav', () => {
      expect(wrapper.queryAllByTestId('sidebar-nav')).toHaveLength(0)
    })

    it('should not render the notifications', () => {
      expect(wrapper.queryAllByTestId('notification-panel')).toHaveLength(0)
    })

    it('should not render the user', () => {
      expect(wrapper.queryAllByTestId('sidebar-user')).toHaveLength(0)
    })
  })

  describe('when composed with all props', () => {
    beforeEach(() => {
      wrapper = render(
        <Sidebar
          hasUnreadNotification
          nav={(
            <SidebarNav>
              <SidebarNavItem Image={House} link={<Link href="/">Home</Link>} />
              <SidebarNavItem
                Image={Graph}
                link={<Link href="/stats">Stats</Link>}
                isActive
              />
              <SidebarNavItem
                Image={Tools}
                link={<Link href="/tools">Tools</Link>}
              />
            </SidebarNav>
          )}
          notifications={(
            <Notifications link={<Link href="notifications" />}>
              <Notification
                link={<Link href="notifications/1" />}
                name="Thomas Stephens"
                action="added a new comment to your"
                on="review"
                when={new Date('2019-11-05T14:25:02.178Z')}
                description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
              />
              <Notification
                link={<Link href="notifications/2" />}
                name="Thomas Stephens"
                action="added a new comment to your"
                on="review"
                when={new Date('2019-11-01T14:25:02.178Z')}
                description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"
              />
            </Notifications>
          )}
          user={
            <SidebarUser initials="XT" link={<Link href="/user-profile" />} />
          }
        />
      )
    })

    it('should render the nav', () => {
      expect(wrapper.getByTestId('sidebar-nav')).toBeInTheDocument()
    })

    it('should render the notifications', () => {
      expect(wrapper.getByTestId('notification-panel')).toBeInTheDocument()
    })

    it('should render the user', () => {
      expect(wrapper.getByTestId('sidebar-user')).toBeInTheDocument()
    })
  })

  describe('when the mouse enters and leaves the nav', () => {
    beforeEach(() => {
      wrapper = render(
        <Sidebar
          nav={(
            <SidebarNav>
              <SidebarNavItem link={<Link href="/">Home</Link>} />
              <SidebarNavItem
                link={<Link href="/stats">Stats</Link>}
                isActive
              />
              <SidebarNavItem link={<Link href="/tools">Tools</Link>} />
            </SidebarNav>
          )}
        />
      )
    })

    it('should not have the `is-open` class', () => {
      expect(wrapper.getByTestId('sidebar').classList).not.toContain('is-open')
    })

    describe('when the mouse pointer is moved over the nav', () => {
      beforeEach(() => {
        fireEvent.mouseOver(wrapper.getByTestId('sidebar-nav'))
      })

      it('should have the `is-open` class', () => {
        expect(wrapper.getByTestId('sidebar').classList).toContain('is-open')
      })

      describe('when the mouse pointer leaves the nav', () => {
        beforeEach(() => {
          fireEvent.mouseLeave(wrapper.getByTestId('sidebar-nav'))
        })

        it('should not have the `is-open` class', () => {
          expect(wrapper.getByTestId('sidebar').classList).not.toContain(
            'is-open'
          )
        })
      })
    })
  })

  describe('when the mouse enters the nav and an item is clicked', () => {
    beforeEach(() => {
      wrapper = render(
        <Sidebar
          nav={(
            <SidebarNav>
              <SidebarNavItem link={<Link href="/">Home</Link>} />
            </SidebarNav>
          )}
        />
      )
    })

    it('should not have the `is-open` class', () => {
      expect(wrapper.getByTestId('sidebar').classList).not.toContain('is-open')
    })

    describe('when the mouse pointer is moved over the nav', () => {
      beforeEach(() => {
        fireEvent.mouseOver(wrapper.getByTestId('sidebar-nav'))
      })

      it('should have the `is-open` class', () => {
        expect(wrapper.getByTestId('sidebar').classList).toContain('is-open')
      })

      describe('when an item is clicked', () => {
        beforeEach(() => {
          wrapper.getByTestId('sidebar-nav-item').click()
        })

        it('should not have the `is-open` class', () => {
          expect(wrapper.getByTestId('sidebar').classList).not.toContain(
            'is-open'
          )
        })
      })
    })
  })

  describe('when the nav is focused and then loses focus', () => {
    beforeEach(() => {
      wrapper = render(
        <Sidebar
          nav={(
            <SidebarNav>
              <SidebarNavItem link={<Link href="/">Home</Link>} />
            </SidebarNav>
          )}
        />
      )
    })

    it('should not have the `is-open` class', () => {
      expect(wrapper.getByTestId('sidebar').classList).not.toContain('is-open')
    })

    describe('when the nav is focused', () => {
      beforeEach(() => {
        fireEvent.focus(wrapper.getByTestId('sidebar-nav'))
      })

      it('should have the `is-open` class', () => {
        expect(wrapper.getByTestId('sidebar').classList).toContain('is-open')
      })

      describe('when the nav loses focus', () => {
        beforeEach(() => {
          fireEvent.blur(wrapper.getByTestId('sidebar-nav'))
        })

        it('should not have the `is-open` class', () => {
          expect(wrapper.getByTestId('sidebar').classList).not.toContain(
            'is-open'
          )
        })
      })
    })
  })

  describe('when specifying `onClick` of a nav item', () => {
    let consoleWarnSpy: jest.SpyInstance

    beforeEach(() => {
      consoleWarnSpy = jest.spyOn(global.console, 'warn')

      wrapper = render(
        <Sidebar
          nav={(
            <SidebarNav>
              <SidebarNavItem
                link={<Link href="/">Home</Link>}
                onClick={() => undefined}
              />
            </SidebarNav>
          )}
        />
      )
    })

    it('should warn the consumer `onClick` will be overwritten', () => {
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Prop `onClick` on `SidebarNavItem` will be overwritten'
      )
    })
  })
})
