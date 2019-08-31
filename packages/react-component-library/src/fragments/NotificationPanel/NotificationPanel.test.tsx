import 'jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'

import NotificationPanel, {
  getNotificationPositionBelow,
  getNotificationPositionOnRight,
  NotificationPanelProps,
} from './index'

const globalAny: any = global

describe('NotificationPanel', () => {
  let wrapper: RenderResult
  let props: NotificationPanelProps

  beforeEach(() => {
    const dom = new JSDOM()
    globalAny.document = dom.window.document
    globalAny.window = dom.window
    props = {}
  })

  describe('When there is no notification content', () => {
    beforeEach(() => {
      props = {
        notificationPlacement: 'right',
        scheme: 'dark',
      }

      wrapper = render(<NotificationPanel {...props} />)
    })

    it('should not render a notification panel', () => {
      expect(wrapper.queryByTestId('notification-panel')).toBeNull()
    })
  })

  describe('when there is notification content to show', () => {
    beforeEach(() => {
      wrapper = render(
        <NotificationPanel {...props}>
          <p data-testid="content">Test content</p>
        </NotificationPanel>
      )
    })

    it('should render a notification panel', () => {
      expect(wrapper.getByTestId('notification-panel')).toBeInTheDocument()
    })

    it('should not initially show the notification content', () => {
      expect(wrapper.queryByTestId('popover')).toBeNull()
    })

    describe('when the user clicks on the notification button', () => {
      let blurSpy: jest.Mock

      beforeEach(done => {
        const button = wrapper.getByTestId('notification-button')
        blurSpy = jest.fn()
        button.blur = blurSpy

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

      it('should show the notification content', () => {
        const popover = wrapper.getByTestId('popover')
        expect(popover).toBeInTheDocument()
        expect(popover).toContainHTML(
          '<p data-testid="content">Test content</p>'
        )
      })

      it('should blur the notification button', () => {
        expect(blurSpy).toHaveBeenCalled()
      })

      describe('when the user clicks on the button again', () => {
        beforeEach(done => {
          fireEvent(
            wrapper.getByTestId('notification-button'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )

          setTimeout(() => {
            done()
          }, 500)
        })

        it('should not show the notification content', () => {
          expect(wrapper.queryByTestId('popover')).toBeNull()
        })
      })

      describe('when the user clicks elsewhere on the page', () => {
        beforeEach(done => {
          fireEvent(
            document,
            new MouseEvent('mousedown', {
              bubbles: true,
              cancelable: true,
            })
          )

          setTimeout(() => {
            done()
          }, 500)
        })

        it('should not show the notification content', () => {
          expect(wrapper.queryByTestId('popover')).toBeNull()
        })
      })

      describe('when the user clicks within the notification content area', () => {
        beforeEach(done => {
          fireEvent(
            wrapper.getByTestId('content'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )

          setTimeout(() => {
            done()
          }, 500)
        })

        it('should continue to show the notification content', () => {
          const popover = wrapper.getByTestId('popover')
          expect(popover).toBeInTheDocument()
          expect(popover).toContainHTML(
            '<p data-testid="content">Test content</p>'
          )
        })
      })
    })

    describe('and there are unread notifications', () => {
      beforeEach(() => {
        props.unreadNotification = true
        wrapper = render(
          <NotificationPanel {...props}>
            <p data-testid="content">Test content</p>
          </NotificationPanel>
        )
      })

      it('should show the unread notification', () => {
        expect(
          wrapper.getByTestId('notification-indicator')
        ).toBeInTheDocument()
      })
    })

    describe('and there are no unread notifications', () => {
      beforeEach(() => {
        props.unreadNotification = false

        wrapper = render(
          <NotificationPanel {...props}>
            <p data-testid="content">Test content</p>
          </NotificationPanel>
        )
      })

      it('should not show the unread notification', () => {
        expect(wrapper.queryByTestId('notification-indicator')).toBeNull()
      })
    })
  })

  describe('when the notification panel needs to be dark and show the notification popover on its right', () => {
    beforeEach(() => {
      props.notificationPlacement = 'right'
      props.scheme = 'dark'

      wrapper = render(
        <NotificationPanel {...props}>
          <p data-testid="content">Test content</p>
        </NotificationPanel>
      )
    })

    it('should render a dark notification panel', () => {
      expect(wrapper.getByTestId('notification-panel').classList).toContain(
        'rn-notification-panel--dark'
      )
    })

    describe('when the user clicks on the notification button', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('notification-button'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should show the notification content on the right of the button', () => {
        expect(wrapper.getByTestId('popover').classList).toContain(
          'rn-popover--left_bottom'
        )
      })

      it('should show the notication content using the dark theme', () => {
        expect(wrapper.getByTestId('popover').classList).toContain(
          'rn-popover--dark'
        )
      })
    })
  })

  describe('when the notification panel needs to be light and show the notification popover below it', () => {
    beforeEach(() => {
      props.notificationPlacement = 'below'
      props.scheme = 'light'

      wrapper = render(
        <NotificationPanel {...props}>
          <p data-testid="content">Test content</p>
        </NotificationPanel>
      )
    })

    it('should render a dark notification panel', () => {
      expect(wrapper.getByTestId('notification-panel').classList).toContain(
        'rn-notification-panel--light'
      )
    })

    describe('when the user clicks on the notification button', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('notification-button'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should show the notification content on the right of the button', () => {
        expect(wrapper.getByTestId('popover').classList).toContain(
          'rn-popover--top_right'
        )
      })

      it('should show the notication content using the dark theme', () => {
        expect(wrapper.getByTestId('popover').classList).toContain(
          'rn-popover--light'
        )
      })
    })
  })

  describe('getNotificationPositionOnRight', () => {
    let result: PositionType

    beforeEach(() => {
      const element = {
        getBoundingClientRect: () => ({
          bottom: 10,
          left: 100,
          width: 200,
        }),
      }

      const fakeWindow = {
        innerHeight: 1000,
      }

      result = getNotificationPositionOnRight(element, fakeWindow)
    })

    it('should calculate the position to be to the right of the element', () => {
      expect(result).toHaveProperty('bottom', 982)
      expect(result).toHaveProperty('left', 318)
    })
  })

  describe('getNotificationPositionBelow', () => {
    let result: PositionType

    beforeEach(() => {
      const element = {
        getBoundingClientRect: () => ({
          bottom: 200,
          left: 900,
          width: 20,
        }),
      }

      result = getNotificationPositionBelow(element)
    })

    it('should calculate the position to be below the element', () => {
      expect(result).toHaveProperty('top', 203)
      expect(result).toHaveProperty('left', 590)
    })
  })
})
