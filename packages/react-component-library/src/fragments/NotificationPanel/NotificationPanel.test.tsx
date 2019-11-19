import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitForElement,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import {
  Notification,
  NOTIFICATION_PLACEMENT,
  NotificationPanel,
  Notifications,
} from '.'

const MOCK_NOTIFICATION = (
  <Notification
    href="notifications/1"
    name="Thomas Stephens"
    action="added a new comment to your"
    on="review"
    when={new Date('2019-11-05T10:57:00.000Z')}
    description="A long description that will be shortened"
  />
)

describe('NotificationPanel', () => {
  let wrapper: RenderResult
  let onShowSpy: jest.SpyInstance
  let onHideSpy: jest.SpyInstance

  describe('when all props are specified, "notificationPlacement" is right', () => {
    beforeEach(() => {
      const props = {
        onHide: () => {},
        onShow: () => {},
      }

      onShowSpy = jest.spyOn(props, 'onShow')
      onHideSpy = jest.spyOn(props, 'onHide')

      wrapper = render(
        <NotificationPanel
          buttonClassName="button-class"
          className="class"
          unreadNotification
          notificationPlacement={NOTIFICATION_PLACEMENT.RIGHT}
          {...props}
        >
          <Notifications href="notifications">
            {MOCK_NOTIFICATION}
            {MOCK_NOTIFICATION}
          </Notifications>
        </NotificationPanel>
      )
    })

    it('should set the button class name', () => {
      expect(wrapper.getByTestId('notification-button').classList).toContain(
        'button-class'
      )
    })

    it('should not show the notifications', () => {
      expect(wrapper.queryAllByText('Thomas Stephens')).toHaveLength(0)
    })

    it('should set the class name', () => {
      expect(wrapper.getByTestId('notification-panel').classList).toContain(
        'class'
      )
    })

    it('should set the not read indicator', () => {
      expect(wrapper.getByTestId('not-read')).toBeInTheDocument()
    })

    describe('when the notification button is clicked', () => {
      let blurSpy: jest.SpyInstance

      beforeEach(() => {
        const button = wrapper.getByTestId('notification-button')
        blurSpy = jest.spyOn(button, 'blur')

        button.click()

        return waitForElement(() => wrapper.queryAllByText('Thomas Stephens'))
      })

      it('should blur the button', () => {
        expect(blurSpy).toHaveBeenCalledTimes(1)
      })

      it('should show the notifications', () => {
        expect(wrapper.queryAllByText('Thomas Stephens')).toHaveLength(2)
      })

      it('should show the notifications on the right', () => {
        expect(wrapper.getByTestId('floating-box').classList).toContain(
          'rn-notification-panel__container--left_bottom'
        )
      })

      it('should call the onShow callback', () => {
        expect(onShowSpy).toHaveBeenCalledTimes(1)
      })

      describe('when the notification button is clicked again', () => {
        beforeEach(() => {
          wrapper.getByTestId('notification-button').click()

          return waitForElementToBeRemoved(() =>
            wrapper.queryAllByText('Thomas Stephens')
          )
        })

        it('should hide the notifications', () => {
          expect(wrapper.queryAllByText('Thomas Stephens')).toHaveLength(0)
        })

        it('should call the onHide callback', () => {
          expect(onHideSpy).toHaveBeenCalledTimes(1)
        })
      })
    })

    describe('when the notifications are shown and then the notification area is clicked', () => {
      beforeEach(async done => {
        wrapper.getByTestId('notification-button').click()

        await waitForElement(() => wrapper.queryAllByText('Thomas Stephens'))

        wrapper.getByText('View all notifications').parentElement.click()

        setTimeout(() => {
          done()
        }, 500)
      })

      it('should continue to show the notifications', () => {
        expect(wrapper.queryAllByText('Thomas Stephens')).toHaveLength(2)
      })
    })
  })

  describe('when optional properties are not specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NotificationPanel>
          <Notifications href="notifications">
            {MOCK_NOTIFICATION}
            {MOCK_NOTIFICATION}
          </Notifications>
        </NotificationPanel>
      )
    })

    it('should not set the button class name', () => {
      expect(
        wrapper.getByTestId('notification-button').classList
      ).not.toContain('button-class')
    })

    it('should not set the class name', () => {
      expect(wrapper.getByTestId('notification-panel').classList).not.toContain(
        'class'
      )
    })

    it('should not set the not read indicator', () => {
      expect(wrapper.queryAllByTestId('notification-indicator')).toHaveLength(0)
    })

    describe('when the notification button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('notification-button').click()

        return waitForElement(() => wrapper.queryAllByText('Thomas Stephens'))
      })

      it('should default to showing notifications on the right', () => {
        expect(wrapper.getByTestId('floating-box').classList).toContain(
          'rn-notification-panel__container--left_bottom'
        )
      })
    })
  })

  describe('when "notificationPlacement" is specified as below', () => {
    beforeEach(() => {
      wrapper = render(
        <NotificationPanel notificationPlacement={NOTIFICATION_PLACEMENT.BELOW}>
          <Notifications href="notifications">
            {MOCK_NOTIFICATION}
            {MOCK_NOTIFICATION}
          </Notifications>
        </NotificationPanel>
      )
    })

    describe('when the notification button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('notification-button').click()

        return waitForElement(() => wrapper.queryAllByText('Thomas Stephens'))
      })

      it('should default to showing notifications on the right', () => {
        expect(wrapper.getByTestId('floating-box').classList).toContain(
          'rn-notification-panel__container--top_right'
        )
      })
    })
  })

  describe('when the notifications are shown and then outside the notification area is clicked', () => {
    beforeEach(async () => {
      wrapper = render(
        <div>
          <p data-testid="outside">Some text outside</p>
          <NotificationPanel>
            <Notifications href="notifications">
              {MOCK_NOTIFICATION}
              {MOCK_NOTIFICATION}
            </Notifications>
          </NotificationPanel>
        </div>
      )

      wrapper.getByTestId('notification-button').click()

      await waitForElement(() => wrapper.queryAllByText('Thomas Stephens'))

      fireEvent(
        document,
        new MouseEvent('mousedown', {
          bubbles: true,
          cancelable: true,
        })
      )

      return waitForElementToBeRemoved(() =>
        wrapper.queryAllByText('Thomas Stephens')
      )
    })

    it('should hide the notifications', () => {
      expect(wrapper.queryAllByText('Thomas Stephens')).toHaveLength(0)
    })
  })
})
