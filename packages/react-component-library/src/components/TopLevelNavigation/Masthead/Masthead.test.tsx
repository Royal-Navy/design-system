// @ts-nocheck
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'

import { Link } from '../../Link'
import { Masthead } from './Masthead'
import { Notification, Notifications } from '../NotificationPanel'
import { MastheadUser } from './MastheadUser'
import { MastheadNav, MastheadNavItem } from './MastheadNav'
import { MastheadUserItem } from './MastheadUserItem'

describe('Masthead', () => {
  let wrapper: RenderResult

  describe('minimal props', () => {
    beforeEach(() => {
      wrapper = render(<Masthead title="title" />)
    })

    it('should render the masthead', () => {
      expect(wrapper.getByTestId('masthead')).toBeInTheDocument()
    })

    it('should set the masthead banner `role` attribute to `banner`', () => {
      expect(wrapper.getByTestId('masthead-banner')).toHaveAttribute(
        'role',
        'banner'
      )
    })

    it('should render the service name', () => {
      expect(wrapper.getByTestId('masthead-servicename')).toHaveTextContent(
        'title'
      )
    })

    it('should render the default logo', () => {
      expect(wrapper.getByTestId('logo')).toBeInTheDocument()
    })

    it('should set the logo `role` to `presentation`', () => {
      expect(wrapper.getByTestId('logo')).toHaveAttribute(
        'role',
        'presentation'
      )
    })

    it('should not render the avatar', () => {
      expect(wrapper.queryAllByTestId('masthead-avatar')).toHaveLength(0)
    })

    it('should not include a search button', () => {
      expect(wrapper.queryAllByTestId('masthead-search-button')).toHaveLength(0)
    })

    it('should not include the notification component', () => {
      expect(wrapper.queryAllByTestId('notification-panel')).toHaveLength(0)
    })

    it('should not render the nav', () => {
      expect(wrapper.queryAllByTestId('scrollable-nav')).toHaveLength(0)
    })
  })

  describe('all props', () => {
    let consoleWarnSpy: jest.SpyInstance
    let onSearchSpy: jest.SpyInstance

    beforeEach(() => {
      consoleWarnSpy = jest.spyOn(global.console, 'warn')

      const notification = (
        <Notification
          link={<Link href="notifications/1" />}
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T10:57:00.000Z')}
          description="A long description that will be shortened"
        />
      )

      const props = {
        hasUnreadNotification: true,
        homeLink: <Link href="/" />,
        Logo: ({ role }) => <svg data-testid="custom-logo" role={role} />,
        nav: (
          <MastheadNav>
            <MastheadNavItem link={<Link href="/first">First</Link>} />
            <MastheadNavItem link={<Link href="/second">Second</Link>} />
          </MastheadNav>
        ),
        notifications: (
          <Notifications link={<Link href="notifications" />}>
            {notification}
            {notification}
          </Notifications>
        ),
        onSearch: () => true,
        searchPlaceholder: 2,
        title: 'title',
        user: (
          <MastheadUser initials="AB" link={<Link href="/user-profile" />} />
        ),
      }

      onSearchSpy = jest.spyOn(props, 'onSearch')

      wrapper = render(<Masthead {...props} />)
    })

    it('should warn the consumer for using the deprecated `link` prop', () => {
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'The `link` prop is deprecated'
      )
    })

    it('should render the masthead', () => {
      expect(wrapper.getByTestId('masthead')).toBeInTheDocument()
    })

    it('should set the masthead banner `role` attribute to `banner`', () => {
      expect(wrapper.getByTestId('masthead-banner')).toHaveAttribute(
        'role',
        'banner'
      )
    })

    it('should render the service name', () => {
      expect(wrapper.getByTestId('masthead-servicename')).toHaveTextContent(
        'title'
      )
    })

    it('should not render the default logo', () => {
      expect(wrapper.queryAllByTestId('logo')).toHaveLength(0)
    })

    it('should render the custom logo', () => {
      expect(wrapper.getByTestId('custom-logo')).toBeInTheDocument()
    })

    it('should set the logo `role` to `presentation`', () => {
      expect(wrapper.getByTestId('custom-logo')).toHaveAttribute(
        'role',
        'presentation'
      )
    })

    it('should render the avatar', () => {
      expect(wrapper.getByText('AB')).toBeInTheDocument()
    })

    it('should link the avatar', () => {
      const avatar = wrapper.getByText('AB')
      const link = avatar.parentElement

      expect(link.getAttribute('href')).toEqual('/user-profile')
    })

    it('should include a search button', () => {
      expect(
        wrapper.queryByTestId('masthead-search-button')
      ).toBeInTheDocument()
    })

    it('should set the `aria-expanded` attribute on the search button to `false`', () => {
      expect(wrapper.queryByTestId('masthead-search-button')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
    })

    it('should set the `aria-label` attribute on the search button to `Show search`', () => {
      expect(wrapper.queryByTestId('masthead-search-button')).toHaveAttribute(
        'aria-label',
        'Show search'
      )
    })

    it('should not show the search bar', () => {
      expect(wrapper.queryByTestId('searchbar')).toBeNull()
    })

    it('should set the `aria-expanded` attribute on the notification button to `false`', () => {
      expect(wrapper.queryByTestId('notification-button')).toHaveAttribute(
        'aria-expanded',
        'false'
      )
    })

    it('should set the `aria-label` attribute on the notification button to `Show notifications`', () => {
      expect(wrapper.queryByTestId('notification-button')).toHaveAttribute(
        'aria-label',
        'Show notifications'
      )
    })

    it('should set the `aria-haspopup` attribute on the notification button to `true`', () => {
      expect(wrapper.queryByTestId('notification-button')).toHaveAttribute(
        'aria-haspopup',
        'true'
      )
    })

    it('should include an unread notification indicator', () => {
      expect(wrapper.queryByTestId('not-read')).toBeInTheDocument()
    })

    it('should render the nav items', () => {
      expect(wrapper.getByText('First').getAttribute('href')).toEqual('/first')
      expect(wrapper.getByText('Second').getAttribute('href')).toEqual(
        '/second'
      )
    })

    describe('when the user clicks on the search option', () => {
      beforeEach(() => {
        wrapper.queryByTestId('masthead-search-button').click()
      })

      it('should set the `aria-expanded` attribute on the search button to `true`', () => {
        expect(wrapper.queryByTestId('masthead-search-button')).toHaveAttribute(
          'aria-expanded',
          'true'
        )
      })

      it('should show the search bar', () => {
        expect(wrapper.queryByTestId('searchbar')).toBeInTheDocument()
      })

      it('should set a rule on the wrapper so mobile scrolling is disabled', () => {
        expect(wrapper.queryByTestId('masthead')).toHaveClass(
          'rn-masthead--show-search'
        )
      })

      describe('and then searches', () => {
        beforeEach(() => {
          const searchbarForm = wrapper.queryByTestId('searchbar-form')

          fireEvent(
            searchbarForm,
            new Event('submit', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('should use the onSearch method passed to the masthead to search', () => {
          expect(onSearchSpy).toHaveBeenCalledTimes(1)
        })

        it('should hide the searchbar from view', () => {
          return waitFor(() =>
            expect(wrapper.queryByTestId('searchbar')).toBeNull()
          )
        })
      })

      describe('and the user clicks on the search button again', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.queryByTestId('masthead-search-button'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('should not show the search bar', () => {
          return waitFor(() =>
            expect(wrapper.queryByTestId('searchbar')).toBeNull()
          )
        })

        it('should remove the rule on the wrapper so mobile scrolling is enabled again', () => {
          expect(wrapper.queryByTestId('masthead')).not.toHaveClass(
            'rn-masthead--show-search'
          )
        })
      })
    })

    describe('when the user opens the notifications', () => {
      beforeEach(() => {
        wrapper.queryByTestId('notification-button').click()
      })

      it('should set the `aria-expanded` attribute on the notification button to `true`', () => {
        expect(wrapper.queryByTestId('notification-button')).toHaveAttribute(
          'aria-expanded',
          'true'
        )
      })

      it('should have set the `aria-owns` attribute on the notification button to the ID of the sheet', () => {
        const sheetId = wrapper
          .getByTestId('notifications-sheet')
          .getAttribute('id')

        expect(wrapper.queryByTestId('notification-button')).toHaveAttribute(
          'aria-owns',
          sheetId
        )
      })

      it('should set a rule on the wrapper so mobile scrolling is disabled', () => {
        expect(wrapper.queryByTestId('masthead')).toHaveClass(
          'rn-masthead--show-notifications'
        )
      })

      describe('when the user clicks the notification button again', () => {
        beforeEach(() => {
          wrapper.queryByTestId('notification-button').click()
        })

        it('should remove the rule on the wrapper so mobile scrolling is enabled again', () => {
          return waitFor(() =>
            expect(wrapper.queryByTestId('masthead')).not.toHaveClass(
              'rn-masthead--show-notifications'
            )
          )
        })
      })
    })
  })

  describe('when the avatar has links', () => {
    beforeEach(() => {
      wrapper = render(
        <>
          <Masthead
            title="title"
            user={
              <MastheadUser initials="AB">
                <MastheadUserItem link={<Link href="/profile">Profile</Link>} />
                <MastheadUserItem
                  link={<Link href="/settings">Settings</Link>}
                />
                <MastheadUserItem link={<Link href="/support">Support</Link>} />
                <MastheadUserItem link={<Link href="/logout">Logout</Link>} />
              </MastheadUser>
            }
          />
          <div>Other content</div>
        </>
      )
    })

    it('should add the avatar', () => {
      expect(wrapper.getByText('AB')).toBeInTheDocument()
    })

    it('should not show the links', () => {
      expect(wrapper.queryByText('Profile')).toBeNull()
      expect(wrapper.queryByText('Settings')).toBeNull()
      expect(wrapper.queryByText('Support')).toBeNull()
      expect(wrapper.queryByText('Logout')).toBeNull()
    })

    describe('and the avatar is clicked', () => {
      beforeEach(() => {
        wrapper.getByText('AB').click()
      })

      it('should show the links', () => {
        expect(wrapper.getByText('Profile')).toBeInTheDocument()
        expect(wrapper.getByText('Settings')).toBeInTheDocument()
        expect(wrapper.getByText('Support')).toBeInTheDocument()
        expect(wrapper.getByText('Logout')).toBeInTheDocument()
      })

      describe('and the avatar is clicked again', () => {
        beforeEach(() => {
          wrapper.getByText('AB').click()
        })

        it('should not show the links', () => {
          return waitFor(() => {
            expect(wrapper.queryByText('Profile')).toBeNull()
            expect(wrapper.queryByText('Settings')).toBeNull()
            expect(wrapper.queryByText('Support')).toBeNull()
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
            expect(wrapper.queryByText('Settings')).toBeNull()
            expect(wrapper.queryByText('Support')).toBeNull()
            expect(wrapper.queryByText('Logout')).toBeNull()
          })
        })
      })
    })
  })
})
