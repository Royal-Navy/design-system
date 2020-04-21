import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Event, Events, Row, Rows, Timeline } from '..'

const COMPLETED = 'COMPLETED'

describe('Timeline', () => {
  let wrapper: RenderResult

  describe('no data is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <Timeline>
          <Rows>{}</Rows>
        </Timeline>
      )
    })

    it('should display the no data message', () => {
      expect(wrapper.queryByTestId('timeline-no-data')).toBeInTheDocument()
    })

    it('should not display any rows', () => {
      expect(wrapper.queryAllByTestId('row')).toHaveLength(0)
    })
  })

  describe('when data is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <Timeline startDate={new Date(2020, 3, 1)}>
          <Rows>
            <Row name="Row 1">
              <Events>
                <Event
                  startDate={new Date(2020, 3, 13)}
                  endDate={new Date(2020, 3, 18)}
                  status={COMPLETED}
                >
                  Event 1
                </Event>
                <Event
                  startDate={new Date(2020, 3, 20)}
                  endDate={new Date(2020, 3, 22)}
                >
                  Event 2
                </Event>
              </Events>
            </Row>
            <Row name="Row 2">
              <Events>
                <Event
                  startDate={new Date(2020, 3, 15)}
                  endDate={new Date(2020, 3, 20)}
                >
                  Event 3
                </Event>
                <Event
                  startDate={new Date(2020, 3, 22)}
                  endDate={new Date(2020, 3, 24)}
                >
                  Event 4
                </Event>
              </Events>
            </Row>
          </Rows>
        </Timeline>
      )
    })

    it('does not display the no data message', () => {
      expect(wrapper.queryByTestId('timeline-no-data')).not.toBeInTheDocument()
    })

    it('should display 2 rows', () => {
      expect(wrapper.queryAllByTestId('timeline-row')).toHaveLength(2)
      expect(wrapper.getByText('Row 1')).toBeInTheDocument()
      expect(wrapper.getByText('Row 2')).toBeInTheDocument()
    })

    it('should display 4 events', () => {
      expect(wrapper.queryAllByTestId('timeline-event-wrapper')).toHaveLength(4)
      expect(wrapper.getByText('Event 1')).toBeInTheDocument()
      expect(wrapper.getByText('Event 2')).toBeInTheDocument()
      expect(wrapper.getByText('Event 3')).toBeInTheDocument()
      expect(wrapper.getByText('Event 4')).toBeInTheDocument()
    })

    it('should give the first event the correct modifier class based on status', () => {
      expect(
        wrapper.getAllByTestId('timeline-event-wrapper')[0].classList
      ).toContain(`timeline__event--${COMPLETED.toLowerCase()}`)
    })
  })

  describe('when an event is outside the range', () => {
    beforeEach(() => {
      console.log('starting')

      const EventWithinRange: React.FC = () => (
        <Event
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          endDate={new Date(2020, 1, 10, 0, 0, 0)}
          status={COMPLETED}
        >
          Event 1
        </Event>
      )

      const EventOutsideRange: React.FC = () => (
        <Event
          startDate={new Date(2020, 6, 1, 0, 0, 0)}
          endDate={new Date(2020, 6, 10, 0, 0, 0)}
          status={COMPLETED}
        >
          Event 1
        </Event>
      )

      wrapper = render(
        <Timeline startDate={new Date(2020, 1, 1, 0, 0, 0)}>
          <Rows>
            <Row name="Row 1">
              <Events>
                <EventWithinRange />
                <EventOutsideRange />
              </Events>
            </Row>
          </Rows>
        </Timeline>
      )

    })

    it('renders the correct number of events', () => {
      expect(wrapper.queryAllByTestId('timeline-event-wrapper')).toHaveLength(1)
    })
  })
})
