import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Notification } from '.'

const NOW = '2019-11-05T11:00:00.000Z'

describe('Notification', () => {
  let wrapper: RenderResult
  let dateSpy: jest.SpyInstance

  beforeAll(() => {
    dateSpy = jest
      .spyOn(Date, 'now')
      .mockImplementation(() => new Date(NOW).valueOf())
  })

  afterAll(() => {
    dateSpy.mockRestore()
  })

  describe('when the notification happened less than five minutes ago', () => {
    beforeEach(() => {
      wrapper = render(
        <Notification
          href="notifications/1"
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T10:57:00.000Z')}
          description="A long description that will be shortened"
        />
      )
    })

    it('should render the notification as a list item', () => {
      const listItem = wrapper.container.firstElementChild
      expect(listItem.tagName).toEqual('LI')
    })

    it('should set the href of the entire notification item', () => {
      const listItem = wrapper.container.firstElementChild
      const itemWrapper = listItem.firstElementChild
      const link = itemWrapper.firstElementChild
      expect(link.getAttribute('href')).toEqual('notifications/1')
    })

    it('should render the initials as an avatar', () => {
      expect(wrapper.getByText('TS')).toBeTruthy()
    })

    it('should render the not-read indicator', () => {
      expect(wrapper.getByTestId('not-read-item')).toBeTruthy()
    })

    it('should render the name', () => {
      expect(wrapper.getByText('Thomas Stephens')).toBeTruthy()
    })

    it('should render the action', () => {
      expect(wrapper.getByText('added a new comment to your')).toBeTruthy()
    })

    it('should render the on value', () => {
      expect(wrapper.getByText('review')).toBeTruthy()
    })

    it('should render the circle', () => {
      expect(wrapper.getByTestId('circle')).toBeTruthy()
    })

    it('should render the when as "Just now"', () => {
      expect(wrapper.getByText('Just now')).toBeTruthy()
    })

    it('should render the shortened description', () => {
      expect(
        wrapper.getByText('A long description that will be shorte...')
      ).toBeTruthy()
    })
  })

  describe('when the notification happened an hour ago', () => {
    beforeEach(() => {
      wrapper = render(
        <Notification
          href="notifications/1"
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T09:57:00.000Z')}
          description="A long description that will be shortened"
        />
      )
    })

    it('should render the when as "1 hour ago"', () => {
      expect(wrapper.getByText('1 hour ago')).toBeTruthy()
    })
  })

  describe('when the notification happened over 24 hours ago', () => {
    beforeEach(() => {
      wrapper = render(
        <Notification
          href="notifications/1"
          name="Thomas Stephens"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-04T09:57:00.000Z')}
          description="A long description that will be shortened"
        />
      )
    })

    it('should render the when as "dd MMM yyyy"', () => {
      expect(wrapper.getByText('04 Nov 2019')).toBeTruthy()
    })
  })

  describe('when the name has a double barrelled surname', () => {
    beforeEach(() => {
      wrapper = render(
        <Notification
          href="notifications/1"
          name="Thomas Double-Barrelled"
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T10:57:00.000Z')}
          description="A long description that will be shortened"
        />
      )
    })

    it('should render the initials as an avatar', () => {
      expect(wrapper.getByText('TDB')).toBeTruthy()
    })
  })

  describe('when the notification has been read', () => {
    beforeEach(() => {
      wrapper = render(
        <Notification
          href="notifications/1"
          name="Thomas Stephens"
          read
          action="added a new comment to your"
          on="review"
          when={new Date('2019-11-05T10:57:00.000Z')}
          description="A long description that will be shortened"
        />
      )
    })

    it('should not render the not-read indicator', () => {
      expect(wrapper.queryAllByTestId('not-read')).toHaveLength(0)
    })
  })
})
