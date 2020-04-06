import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { TimelineProvider } from '../context'
import { Event } from '../Event'

describe('Event', () => {
  let wrapper: RenderResult
  let status: string
  let title: string

  describe('and the status and title props are provided', () => {
    beforeEach(() => {
      status = 'COMPLETED'
      title = 'Example Title'

      wrapper = render(
        <TimelineProvider>
          <Event
            startDate={new Date()}
            endDate={new Date()}
            status={status}
            title={title}
          />
        </TimelineProvider>
      )
    })

    it('applies the appropriate modifier class', () => {
      expect(wrapper.getByTestId('event-wrapper').classList).toContain(
        `timeline__event--${status.toLowerCase()}`
      )
    })

    it('renders the title element', () => {
      expect(wrapper.queryByTestId('event-title')).toBeInTheDocument()

      expect(wrapper.getByTestId('event-title').innerHTML).toBe(title)
    })
  })
})
