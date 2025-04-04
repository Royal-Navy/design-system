// @ts-nocheck
import React from 'react'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
  screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Link } from '../../Link'
import {
  Masthead,
  MastheadNav,
  MastheadNavItem,
  MastheadUser,
  MastheadUserItem,
} from '.'
import { Notification, Notifications } from '../NotificationPanel'
import { ACTIVE_TAB_BORDER } from '../../TabBase/partials/StyledTab'

const notification = (
  <Notification
    data-arbitrary="arbitrary-notification"
    link={<Link href="notifications/1" />}
    name="Thomas Stephens"
    action="added a new comment to your"
    on="review"
    when={new Date('2019-11-05T10:57:00.000Z')}
    description="A long description that will be shortened"
  />
)

const props = {
  'data-arbitrary': 'arbitrary-masthead',
  hasUnreadNotification: true,
  homeLink: (
    <Link
      data-arbitrary="arbitrary-home-link"
      data-testid="masthead-home-link"
      href="/"
    />
  ),
  Logo: ({ role }) => <svg data-testid="custom-logo" role={role} />,
  nav: (
    <MastheadNav data-arbitrary="arbitrary-nav">
      <MastheadNavItem
        data-arbitrary="arbitrary-nav-item"
        link={<Link href="/first">First</Link>}
      />
      <MastheadNavItem link={<Link href="/second">Second</Link>} />
    </MastheadNav>
  ),
  notifications: (
    <Notifications
      data-arbitrary="arbitrary-notifications"
      link={<Link href="notifications" />}
    >
      {notification}
      {notification}
    </Notifications>
  ),
  onSearch: () => true,
  title: 'title',
  user: (
    <MastheadUser
      data-arbitrary="arbitrary-user"
      data-testid="masthead-user"
      initials="AB"
      link={<Link href="/user-profile" />}
    />
  ),
  version: '1.0.0',
}

describe('Masthead', () => {
  let wrapper: RenderResult

  afterEach(() => {
    jest.clearAllMocks()
  })

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
      expect(wrapper.queryAllByTestId('masthead-nav')).toHaveLength(0)
    })
  })

  describe('custom client component', () => {
    it('should render custom client component in right slot', () => {
      wrapper = render(
        <Masthead {...props} rightSlot={<div>Hello, World</div>} />
      )
      expect(wrapper.getByText('Hello, World')).toBeInTheDocument()
    })
  })

  describe('inline nav', () => {
    it('should render nav inline', () => {
      wrapper = render(<Masthead {...props} hasInlineNav />)
      expect(wrapper.getByTestId('masthead-inline-nav')).toBeInTheDocument()
    })

    it('should add bottom borders when nav is inline', () => {
      wrapper = render(<Masthead {...props} hasInlineNav />)

      expect(wrapper.getByTestId('masthead-banner')).toHaveStyleRule(
        'border-bottom',
        ACTIVE_TAB_BORDER
      )

      expect(wrapper.getByTestId('masthead-options')).toHaveStyleRule(
        'border-bottom',
        ACTIVE_TAB_BORDER
      )
    })

    it('should render nav below the masthead', () => {
      wrapper = render(<Masthead {...props} />)
      expect(
        wrapper.queryByTestId('masthead-inline-nav')
      ).not.toBeInTheDocument()
    })
  })

  describe('all props', () => {
    let consoleWarnSpy: jest.SpyInstance
    let onSearchSpy: jest.SpyInstance

    beforeEach(() => {
      consoleWarnSpy = jest.spyOn(global.console, 'warn')

      onSearchSpy = jest.spyOn(props, 'onSearch')

      wrapper = render(<Masthead {...props} />)
    })

    it('should spread arbitrary props on the masthead', () => {
      expect(wrapper.getByTestId('masthead')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-masthead'
      )
    })

    it('should spread arbitrary props on the home link', () => {
      expect(wrapper.getByTestId('masthead-home-link')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-home-link'
      )
    })

    it('should spread arbitrary props on the nav', () => {
      expect(wrapper.getByTestId('masthead-nav')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-nav'
      )
    })

    it('should spread arbitrary props on the nav item', () => {
      expect(wrapper.getAllByTestId('masthead-nav-item')[0]).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-nav-item'
      )
    })

    it('should spread arbitrary props on the user', () => {
      expect(wrapper.getByTestId('masthead-user')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-user'
      )
    })

    it('should warn the consumer for using the deprecated `link` prop', () => {
      expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'WARN - RNDS - The `link` prop is deprecated'
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

    it('should render the version', () => {
      expect(wrapper.getByText('1.0.0')).toBeInTheDocument()
    })

    it('should render the avatar', () => {
      expect(wrapper.getByText('AB')).toBeInTheDocument()
    })

    it('should link the avatar', () => {
      const avatar = wrapper.getByText('AB')
      const link = avatar.parentElement.parentElement

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
      expect(
        screen.getByText('First').closest('a').getAttribute('href')
      ).toEqual('/first')
      expect(
        screen.getByText('Second').closest('a').getAttribute('href')
      ).toEqual('/second')
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
          expect(onSearchSpy).toHaveBeenCalledWith(
            expect.objectContaining({ _reactName: 'onSubmit' }),
            ''
          )
        })

        it('should hide the searchbar from view', () => {
          waitFor(() => expect(wrapper.queryByTestId('searchbar')).toBeNull())
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
          waitFor(() => expect(wrapper.queryByTestId('searchbar')).toBeNull())
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

      it('should spread arbitrary props on the notifications', () => {
        expect(wrapper.getByTestId('notifications-sheet')).toHaveAttribute(
          'data-arbitrary',
          'arbitrary-notifications'
        )
      })

      it('should spread arbitrary props on the notifications item', () => {
        expect(wrapper.getAllByTestId('notification')[0]).toHaveAttribute(
          'data-arbitrary',
          'arbitrary-notification'
        )
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

      describe('when the user clicks the notification button again', () => {
        beforeEach(() => {
          wrapper.queryByTestId('notification-button').click()
        })

        it('should remove the rule on the wrapper so mobile scrolling is enabled again', () => {
          waitFor(() =>
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
                <MastheadUserItem
                  data-arbitrary="arbitrary-user-item"
                  link={<Link href="/profile">Profile</Link>}
                />
                <MastheadUserItem
                  link={<Link href="/settings">Settings</Link>}
                />
                <MastheadUserItem link={<Link href="/support">Support</Link>} />
                <MastheadUserItem link={<Link href="/logout">Logout</Link>} />
                <MastheadUserItem
                  link={
                    <form action="#">
                      <button type="submit">Form action</button>
                    </form>
                  }
                />
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

    it('should set the `aria-label` attribute on the search button to `Show search`', () => {
      expect(wrapper.queryByTestId('user-button')).toHaveAttribute(
        'aria-label',
        'Show user options'
      )
    })

    it('should not show the links', () => {
      expect(wrapper.queryByText('Profile')).not.toBeInTheDocument()
      expect(wrapper.queryByText('Settings')).not.toBeInTheDocument()
      expect(wrapper.queryByText('Support')).not.toBeInTheDocument()
      expect(wrapper.queryByText('Logout')).not.toBeInTheDocument()
    })

    describe('and the avatar is clicked', () => {
      beforeEach(async () => {
        await userEvent.click(
          screen.getByRole('button', { name: 'Show user options' })
        )
      })

      it('should show the links', () => {
        expect(wrapper.getByText('Profile')).toBeVisible()
        expect(wrapper.getByText('Settings')).toBeVisible()
        expect(wrapper.getByText('Support')).toBeVisible()
        expect(wrapper.getByText('Logout')).toBeVisible()
      })

      it('should spread arbitrary props on the user item', () => {
        expect(wrapper.getAllByTestId('masthead-user-item')[0]).toHaveAttribute(
          'data-arbitrary',
          'arbitrary-user-item'
        )
      })

      it('clicking to the left of the MastheadUserItem with a form button should submit the form', async () => {
        const button = screen.getByRole('button', { name: 'Form action' })
        expect(button).toHaveAttribute('type', 'submit')
        expect(button).toBeEnabled()
        expect(button).toBeVisible()

        const form = button.closest('form')
        expect(form).not.toBeNull()

        const mockSubmit = jest.fn((e) => {
          e.preventDefault()
        })
        form.addEventListener('submit', mockSubmit)

        const rect = button.getBoundingClientRect()

        // Click 5 pixels to the left of the button's left edge
        await userEvent.click(button, {
          clientX: rect.left - 5,
          clientY: rect.top + rect.height / 2,
        })

        expect(mockSubmit).toHaveBeenCalledTimes(1)
      })

      describe('and the avatar is clicked again', () => {
        beforeEach(() => {
          wrapper.getByText('AB').click()
        })

        it('should not show the links', () => {
          waitFor(() => {
            expect(wrapper.queryByText('Profile')).not.toBeVisible()
            expect(wrapper.queryByText('Settings')).not.toBeVisible()
            expect(wrapper.queryByText('Support')).not.toBeVisible()
            expect(wrapper.queryByText('Logout')).not.toBeVisible()
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
          waitFor(() => {
            expect(wrapper.queryByText('Profile')).not.toBeInTheDocument()
            expect(wrapper.queryByText('Settings')).not.toBeInTheDocument()
            expect(wrapper.queryByText('Support')).not.toBeInTheDocument()
            expect(wrapper.queryByText('Logout')).not.toBeInTheDocument()
          })
        })
      })
    })
  })
})
