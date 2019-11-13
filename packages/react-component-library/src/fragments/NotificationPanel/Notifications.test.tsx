import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Notification, Notifications } from '.'

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

describe('Notifications', () => {
  describe('default props', () => {
    let wrapper: RenderResult

    beforeEach(() => {
      wrapper = render(
        <Notifications href="notifications">
          {MOCK_NOTIFICATION}
          {MOCK_NOTIFICATION}
        </Notifications>
      )
    })

    it('should render as an ordered list', () => {
      const orderedList = wrapper.container.firstElementChild
      expect(orderedList.tagName).toEqual('OL')
    })

    it('should render the items', () => {
      const items = wrapper.container.firstElementChild.children
      expect(items.length).toEqual(2)
    })

    it('should render a link to view all', () => {
      const viewAll = wrapper.getByText('View all notifications')
      expect(viewAll.getAttribute('href')).toEqual('notifications')
    })
  })
})
