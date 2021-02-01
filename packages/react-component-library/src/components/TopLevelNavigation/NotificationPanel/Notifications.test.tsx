import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Notification, Notifications } from './index'
import { Link } from '../../Link'

const MOCK_NOTIFICATION = (
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

describe('Notifications', () => {
  describe('default props', () => {
    let wrapper: RenderResult

    beforeEach(() => {
      wrapper = render(
        <Notifications
          data-arbitrary="arbitrary-notifications"
          link={<Link href="notifications" />}
        >
          {MOCK_NOTIFICATION}
          {MOCK_NOTIFICATION}
        </Notifications>
      )
    })

    it('should spread arbitrary props on the notifications', () => {
      expect(wrapper.getByTestId('notifications-sheet')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-notifications'
      )
    })

    it('should spread arbitrary props on the notifications item', () => {
      expect(
        wrapper.getAllByTestId('notification')[0]
      ).toHaveAttribute('data-arbitrary', 'arbitrary-notification')
    })

    it('should set the `role` attribute on the notification sheet to `grid`', () => {
      expect(wrapper.getByTestId('notifications-sheet')).toHaveAttribute(
        'role',
        'grid'
      )
    })

    it('should render the items', () => {
      const items = wrapper.getAllByTestId('notification')
      expect(items).toHaveLength(2)
    })

    it('should set the `aria-describedby` attribute of each notification row to the ID of the description', () => {
      const contentIds = wrapper
        .getAllByTestId('notification-content')
        .map((content) => content.getAttribute('id'))

      const items = wrapper.getAllByTestId('notification-row')
      items.forEach((item, i) => {
        expect(item).toHaveAttribute('aria-describedby', contentIds[i])
      })
    })

    it('should set the `role` attribute of each notification row to `row`', () => {
      const items = wrapper.getAllByTestId('notification-row')
      items.forEach((item) => {
        expect(item).toHaveAttribute('role', 'row')
      })
    })

    it('should set the `role` attribute of each notification content to `gridcell`', () => {
      const items = wrapper.getAllByTestId('notification-content')
      items.forEach((item) => {
        expect(item).toHaveAttribute('role', 'gridcell')
      })
    })

    it('should render a link to view all', () => {
      const viewAll = wrapper.getByText('View all notifications')
      expect(viewAll).toHaveAttribute('href', 'notifications')
    })
  })
})
