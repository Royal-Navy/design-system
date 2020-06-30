// @ts-nocheck
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'

import { Link } from '../Link'
import { Masthead } from './Masthead'
import { Notification, Notifications } from '../NotificationPanel'
import { MastheadUser } from './MastheadUser'
import { MastheadNav, MastheadNavItem } from './MastheadNav'

describe('Masthead', () => {
  let wrapper: RenderResult

  describe('minimal props', () => {
    beforeEach(() => {
      wrapper = render(<Masthead title="title" />)
    })

    it('should render the masthead', () => {
      expect(wrapper.getByTestId('masthead')).toBeInTheDocument()
    })

    it('should render the service name', () => {
      expect(wrapper.getByTestId('masthead-servicename')).toHaveTextContent(
        'title'
      )
    })

    it('should render the default logo', () => {
      expect(wrapper.getByTestId('logo')).toBeInTheDocument()
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
        Logo: () => <svg data-testid="custom-logo" />,
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

    it('should render the masthead', () => {
      expect(wrapper.getByTestId('masthead')).toBeInTheDocument()
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

    it('should not show the search bar', () => {
      expect(wrapper.queryByTestId('searchbar')).toBeNull()
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
})
