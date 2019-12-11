import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, RenderResult, wait } from '@testing-library/react'

import { Masthead, MastheadProps } from './Masthead'
import { Notification, Notifications } from '../NotificationPanel'

describe('Masthead', () => {
  let wrapper: RenderResult
  let props: MastheadProps

  describe('When the title it provided', () => {
    beforeEach(() => {
      props = {
        title: 'Test masthead',
      }
    })

    describe('and nothing else', () => {
      beforeEach(() => {
        wrapper = render(<Masthead {...props} />)
      })

      it('should render a masthead', () => {
        expect(wrapper.getByTestId('masthead')).toBeInTheDocument()
      })

      it('should render a service name', () => {
        const serviceNameElement = wrapper.getByTestId('masthead-servicename')
        expect(serviceNameElement).toBeInTheDocument()
        expect(serviceNameElement.textContent).toEqual('Test masthead')
      })

      it('should render a default icon', () => {
        expect(wrapper.getByTestId('logo')).toBeInTheDocument()
      })

      it('should not render a search box', () => {
        expect(wrapper.queryByTestId('masthead-search-button')).toBeNull()
        expect(wrapper.queryByTestId('searchbar')).toBeNull()
      })

      it('should not render a nav section', () => {
        expect(wrapper.queryByTestId('scrollable-nav')).toBeNull()
      })

      it('should not include notifications', () => {
        expect(wrapper.queryByTestId('notification-panel')).toBeNull()
      })

      it('should not render a user link', () => {
        expect(wrapper.queryByTestId('userlink')).toBeNull()
      })
    })

    describe('and a user', () => {
      beforeEach(() => {
        const user: UserType = {
          initials: 'zt',
        }

        props.user = user

        wrapper = render(<Masthead {...props} />)
      })

      it('should render the user link', () => {
        expect(wrapper.queryByTestId('userlink')).toBeInTheDocument()
      })
    })

    describe('and a search handler', () => {
      beforeEach(() => {
        props.onSearch = jest.fn()

        wrapper = render(<Masthead {...props} />)
      })

      it('should include a search button', () => {
        expect(
          wrapper.queryByTestId('masthead-search-button')
        ).toBeInTheDocument()
      })

      it('should not show the search bar', () => {
        expect(wrapper.queryByTestId('searchbar')).toBeNull()
      })

      describe('when the user clicks on the search option', () => {
        beforeEach(done => {
          const button = wrapper.queryByTestId('masthead-search-button')

          fireEvent(
            button,
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )

          setTimeout(() => {
            done()
          }, 500)
        })

        it('should show the search bar', () => {
          expect(wrapper.queryByTestId('searchbar')).toBeInTheDocument()
        })

        it('should set a rule on the wrapper so mobile scrolling is disabled', () => {
          expect(wrapper.queryByTestId('masthead')).toHaveClass(
            'rn-masthead--show-search'
          )
        })

        describe('when the user submits a search', () => {
          beforeEach(async () => {
            const searchbarForm = wrapper.queryByTestId('searchbar-form')

            fireEvent(
              searchbarForm,
              new Event('submit', {
                bubbles: true,
                cancelable: true,
              })
            )
          })

          it('should use the onSearch method passed to the masthead to search', async () => {
            await wait(() => expect(props.onSearch).toHaveBeenCalledTimes(1))
          })

          it('should hide the searchbar from view', async () => {
            await wait(() =>
              expect(wrapper.queryByTestId('searchbar')).toBeNull()
            )
          })
        })

        describe('and the user clicks on the search button again', () => {
          beforeEach(done => {
            fireEvent(
              wrapper.queryByTestId('masthead-search-button'),
              new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
              })
            )

            setTimeout(() => {
              done()
            }, 500)
          })

          it('should not show the search bar', () => {
            expect(wrapper.queryByTestId('searchbar')).toBeNull()
          })

          it('should remove the rule on the wrapper so mobile scrolling is enabled again', () => {
            expect(wrapper.queryByTestId('masthead')).not.toHaveClass(
              'rn-masthead--show-search'
            )
          })
        })
      })
    })

    describe('and notifications', () => {
      beforeEach(() => {
        const notification = (
          <Notification
            href="notifications/1"
            name="Thomas Stephens"
            action="added a new comment to your"
            on="review"
            when={new Date('2019-11-05T10:57:00.000Z')}
            description="A long description that will be shortened"
          />
        )

        props.notifications = (
          <Notifications href="notifications">
            {notification}
            {notification}
          </Notifications>
        )

        props.hasUnreadNotification = false

        wrapper = render(<Masthead {...props} />)
      })

      it('should include the notification component', () => {
        expect(wrapper.getByTestId('notification-panel')).toBeInTheDocument()
      })

      it('should not include an unread notification indicator', () => {
        expect(wrapper.queryByTestId('notification-indicator')).toBeNull()
      })

      describe('when the user opens the notifications', () => {
        beforeEach(() => {
          const button = wrapper.queryByTestId('notification-button')

          fireEvent(
            button,
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('should include the notification content sent to it', async () => {
          await wait(() =>
            expect(wrapper.getByTestId('notifications')).toBeInTheDocument()
          )
        })

        it('should set a rule on the wrapper so mobile scrolling is disabled', () => {
          expect(wrapper.queryByTestId('masthead')).toHaveClass(
            'rn-masthead--show-notifications'
          )
        })

        describe('when the user clicks the notification button again', () => {
          beforeEach(async () => {
            const button = wrapper.queryByTestId('notification-button')

            await wait(() => wrapper.getByTestId('notifications'))

            fireEvent(
              button,
              new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
              })
            )
          })

          it('should remove the rule on the wrapper so mobile scrolling is enabled again', async () => {
            await wait(() =>
              expect(wrapper.queryByTestId('masthead')).not.toHaveClass(
                'rn-masthead--show-notifications'
              )
            )
          })
        })
      })

      describe('and unread notifications', () => {
        beforeEach(() => {
          props.hasUnreadNotification = true

          wrapper = render(<Masthead {...props} />)
        })

        it('should include an unread notification indicator', () => {
          expect(
            wrapper.queryByTestId('not-read')
          ).toBeInTheDocument()
        })
      })
    })

    describe('and navigation', () => {
      beforeEach(() => {
        props.navItems = [
          {
            isActive: false,
            label: 'test nav item',
            href: '/',
          },
        ]

        wrapper = render(<Masthead {...props} />)
      })

      it('should render the nav items', () => {
        expect(wrapper.queryByTestId('scrollable-nav')).toBeInTheDocument()
        expect(wrapper.queryByTestId('scrollable-nav')).toContainHTML(
          'test nav item'
        )
      })
    })
  })
})
