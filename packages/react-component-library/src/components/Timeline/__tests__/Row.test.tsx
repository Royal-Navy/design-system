import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { TimelineProvider } from '../context'
import { Row } from '../Row'

describe('Event', () => {
  let wrapper: RenderResult
  let events: any[]

  describe('provided with a collection of events', () => {
    beforeEach(() => {
      events = [
        {
          // Within range (should render)
          startDate: new Date(2020, 1, 1, 0, 0, 0),
          endDate: new Date(2020, 1, 10, 0, 0, 0),
          title: 'Example Event',
        },
        {
          // Outside range (should not render)
          startDate: new Date(2020, 6, 1, 0, 0, 0),
          endDate: new Date(2020, 6, 10, 0, 0, 0),
          title: 'Example Event',
        },
      ]

      wrapper = render(
        <TimelineProvider startDate={new Date(2020, 1, 1, 0, 0, 0)}>
          <Row events={events} />
        </TimelineProvider>
      )
    })

    it('renders the correct number of events', () => {
      expect(wrapper.queryAllByTestId('event-wrapper').length).toEqual(1)
    })
  })
})
