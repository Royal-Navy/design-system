import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import { renderToStaticMarkup } from 'react-dom/server'

import {
  TimelineEvent,
  TimelineEvents,
  TimelineRow,
  TimelineRows,
  Timeline,
} from '..'

const COMPLETED = 'COMPLETED'

describe('Timeline', () => {
  let wrapper: RenderResult

  describe('no data is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <Timeline>
          <TimelineRows>{}</TimelineRows>
        </Timeline>
      )
    })

    it('should display the no data message', () => {
      expect(wrapper.queryByTestId('timeline-no-data')).toBeInTheDocument()
    })

    it('should not display any rows', () => {
      expect(wrapper.queryAllByTestId('timeline-row')).toHaveLength(0)
    })
  })

  describe('when data is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <Timeline startDate={new Date(2020, 3, 1)}>
          <TimelineRows>
            <TimelineRow name="Row 1">
              <TimelineEvents>
                <TimelineEvent
                  startDate={new Date(2020, 3, 13)}
                  endDate={new Date(2020, 3, 18)}
                  status={COMPLETED}
                >
                  Event 1
                </TimelineEvent>
                <TimelineEvent
                  startDate={new Date(2020, 3, 20)}
                  endDate={new Date(2020, 3, 22)}
                >
                  Event 2
                </TimelineEvent>
              </TimelineEvents>
            </TimelineRow>
            <TimelineRow name="Row 2">
              <TimelineEvents>
                <TimelineEvent
                  startDate={new Date(2020, 3, 15)}
                  endDate={new Date(2020, 3, 20)}
                >
                  Event 3
                </TimelineEvent>
                <TimelineEvent
                  startDate={new Date(2020, 3, 22)}
                  endDate={new Date(2020, 3, 24)}
                >
                  Event 4
                </TimelineEvent>
              </TimelineEvents>
            </TimelineRow>
          </TimelineRows>
        </Timeline>
      )
    })

    it('should display the today marker', () => {
      expect(wrapper.queryByTestId('timeline-today-marker')).toBeInTheDocument()
    })

    it('renders the correct number of months', () => {
      expect(wrapper.queryAllByTestId('timeline-month').length).toEqual(3)
    })

    it('renders the month title in correct format', () => {
      expect(
        wrapper.getAllByTestId('timeline-month-title')[0].innerHTML
      ).toContain('April 2020')
    })

    it('renders the correct number of weeks', () => {
      expect(wrapper.queryAllByTestId('timeline-week').length).toEqual(13)
    })

    it('applies the --alt modifier class to odd weeks', () => {
      expect(wrapper.getAllByTestId('timeline-week')[1].classList).toContain(
        'timeline__week--alt'
      )
      expect(wrapper.getAllByTestId('timeline-week')[3].classList).toContain(
        'timeline__week--alt'
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
      const EventWithinRange: React.FC = () => (
        <TimelineEvent
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          endDate={new Date(2020, 1, 10, 0, 0, 0)}
          status={COMPLETED}
        >
          Event 1
        </TimelineEvent>
      )

      const EventOutsideRange: React.FC = () => (
        <TimelineEvent
          startDate={new Date(2020, 6, 1, 0, 0, 0)}
          endDate={new Date(2020, 6, 10, 0, 0, 0)}
          status={COMPLETED}
        >
          Event 1
        </TimelineEvent>
      )

      wrapper = render(
        <Timeline startDate={new Date(2020, 1, 1, 0, 0, 0)}>
          <TimelineRows>
            <TimelineRow name="Row 1">
              <TimelineEvents>
                <EventWithinRange />
                <EventOutsideRange />
              </TimelineEvents>
            </TimelineRow>
          </TimelineRows>
        </Timeline>
      )
    })

    it('renders the correct number of events', () => {
      expect(wrapper.queryAllByTestId('timeline-event-wrapper')).toHaveLength(1)
    })
  })

  describe('when an event has `render` specified', () => {
    const CUSTOM_EVENT = <div>custom event</div>

    beforeEach(() => {
      const EventWithRender: React.FC = () => (
        <TimelineEvent
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          endDate={new Date(2020, 1, 10, 0, 0, 0)}
          status={COMPLETED}
          render={() => CUSTOM_EVENT}
        />
      )

      wrapper = render(
        <Timeline startDate={new Date(2020, 1, 1, 0, 0, 0)}>
          <TimelineRows>
            <TimelineRow name="Row 1">
              <TimelineEvents>
                <EventWithRender />
              </TimelineEvents>
            </TimelineRow>
          </TimelineRows>
        </Timeline>
      )
    })

    it('should render the event as specified', () => {
      expect(wrapper.getByTestId('timeline-event-wrapper').innerHTML).toEqual(
        renderToStaticMarkup(CUSTOM_EVENT)
      )
    })
  })
})
