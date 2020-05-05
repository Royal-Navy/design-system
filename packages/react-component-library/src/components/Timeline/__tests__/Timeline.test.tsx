import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, cleanup } from '@testing-library/react'
import { renderToStaticMarkup } from 'react-dom/server'

import {
  TimelineTodayMarker,
  TimelineMonths,
  TimelineWeeks,
  TimelineDays,
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
          <TimelineTodayMarker />
          <TimelineMonths />
          <TimelineWeeks />
          <TimelineDays />
          <TimelineRows>{}</TimelineRows>
        </Timeline>
      )
    })

    it('should display the today marker', () => {
      expect(
        wrapper.queryByTestId('timeline-today-marker-wrapper')
      ).toBeInTheDocument()
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
          <TimelineTodayMarker />
          <TimelineMonths />
          <TimelineWeeks />
          <TimelineDays />
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
      expect(
        wrapper.queryByTestId('timeline-today-marker-wrapper')
      ).toBeInTheDocument()
    })

    it('renders the correct number of months', () => {
      expect(wrapper.queryAllByTestId('timeline-month').length).toEqual(3)
    })

    it('renders the month title in correct format', () => {
      expect(
        wrapper.getByTestId('timeline-months').firstChild.textContent
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
      // expect(wrapper.getByText('Row 1')).toBeInTheDocument()
      // expect(wrapper.getByText('Row 2')).toBeInTheDocument()
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
          <TimelineTodayMarker />
          <TimelineMonths />
          <TimelineWeeks />
          <TimelineDays />
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

  describe('when months has `render` specified', () => {
    const CustomMonth = ({
      index,
      dayWidth,
      daysTotal,
      startDate,
    }: {
      index: number
      dayWidth: number
      daysTotal: number
      startDate: Date
    }) => {
      return (
        <span>
          {startDate.toString()} - {index} - {dayWidth} - {daysTotal}
        </span>
      )
    }

    beforeEach(() => {
      wrapper = render(
        <Timeline
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          today={new Date(2020, 1, 7, 0, 0, 0)}
        >
          <TimelineMonths
            render={(index, dayWidth, daysTotal, startDate) => (
              <CustomMonth
                index={index}
                dayWidth={dayWidth}
                daysTotal={daysTotal}
                startDate={startDate}
              />
            )}
          />
          <TimelineRows>{}</TimelineRows>
        </Timeline>
      )
    })

    it('should render the day dates as specified', () => {
      expect(
        wrapper.getByTestId('timeline-months').firstChild.textContent
      ).toEqual(`${new Date(2020, 1, 1, 0, 0, 0).toString()} - 0 - 30 - 29`)
    })
  })

  describe('when weeks has `render` specified', () => {
    const CustomWeek = ({
      index,
      isOddNumber,
      offsetPx,
      widthPx,
      dayWidth,
      daysTotal,
      startDate,
    }: {
      index: number
      isOddNumber: boolean
      offsetPx: string
      widthPx: string
      dayWidth: number
      daysTotal: number
      startDate: Date
    }) => {
      return (
        <span>
          {startDate.toString()} - {index} - {isOddNumber.toString()} -{' '}
          {offsetPx} - {widthPx} - {dayWidth} - {daysTotal}
        </span>
      )
    }

    beforeEach(() => {
      wrapper = render(
        <Timeline
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          today={new Date(2020, 1, 7, 0, 0, 0)}
        >
          <TimelineWeeks
            render={(
              index,
              isOddNumber,
              offsetPx,
              widthPx,
              dayWidth,
              daysTotal,
              startDate
            ) => (
              <CustomWeek
                index={index}
                isOddNumber={isOddNumber}
                offsetPx={offsetPx}
                widthPx={widthPx}
                dayWidth={dayWidth}
                daysTotal={daysTotal}
                startDate={startDate}
              />
            )}
          />
          <TimelineRows>{}</TimelineRows>
        </Timeline>
      )
    })

    it('should render the day dates as specified', () => {
      expect(
        wrapper.getAllByTestId('timeline-weeks')[0].firstChild.textContent
      ).toEqual(
        'Mon Jan 27 2020 00:00:00 GMT+0000 (Coordinated Universal Time) - 0 - false - -150px - 210px - 30 - 7'
      )
    })
  })

  describe('when days has `render` specified', () => {
    const CustomDay = ({
      index,
      dayWidth,
      date,
    }: {
      index: number
      dayWidth: number
      date: Date
    }) => {
      return (
        <span>
          {date.toString()} - {index} - {dayWidth}
        </span>
      )
    }

    beforeEach(() => {
      wrapper = render(
        <Timeline
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          today={new Date(2020, 1, 7, 0, 0, 0)}
        >
          <TimelineDays
            render={(index, dayWidth, date) => (
              <CustomDay index={index} dayWidth={dayWidth} date={date} />
            )}
          />
          <TimelineRows>{}</TimelineRows>
        </Timeline>
      )
    })

    it('should render the day dates as specified', () => {
      expect(
        wrapper.getAllByTestId('timeline-days')[0].firstChild.textContent
      ).toEqual(`${new Date(2020, 1, 1, 0, 0, 0).toString()} - 0 - 30`)
    })
  })

  describe('when rows has `renderColumns` specified', () => {
    const CustomColumn = ({
      index,
      isOddNumber,
      offsetPx,
      widthPx,
    }: {
      index: number
      isOddNumber: boolean
      offsetPx: string
      widthPx: string
    }) => {
      return (
        <span>
          {index} - {isOddNumber.toString()} - {offsetPx} - {widthPx}
        </span>
      )
    }

    beforeEach(() => {
      wrapper = render(
        <Timeline
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          today={new Date(2020, 1, 7, 0, 0, 0)}
        >
          <TimelineTodayMarker />
          <TimelineMonths />
          <TimelineWeeks />
          <TimelineDays />
          <TimelineRows
            renderColumns={(index, isOddNumber, offsetPx, widthPx) => (
              <CustomColumn
                index={index}
                isOddNumber={isOddNumber}
                offsetPx={offsetPx}
                widthPx={widthPx}
              />
            )}
          >
            <TimelineRow name="Row 1">
              <TimelineEvents>
                <TimelineEvent
                  startDate={new Date(2020, 3, 13)}
                  endDate={new Date(2020, 3, 18)}
                  status={COMPLETED}
                >
                  Event 1
                </TimelineEvent>
              </TimelineEvents>
            </TimelineRow>
            <TimelineRow name="Row 2">
              <TimelineEvents>
                <TimelineEvent
                  startDate={new Date(2020, 3, 15)}
                  endDate={new Date(2020, 3, 20)}
                >
                  Event 2
                </TimelineEvent>
              </TimelineEvents>
            </TimelineRow>
          </TimelineRows>
        </Timeline>
      )
    })

    it('should render the row column wrapper', () => {
      expect(wrapper.getByTestId('timeline-columns')).toBeInTheDocument()
    })

    it('should render the correct number of columns', () => {
      expect(wrapper.getByTestId('timeline-columns').childNodes.length).toBe(13)
    })

    it('should render the column content correctly', () => {
      expect(
        wrapper.getByTestId('timeline-columns').childNodes[0].textContent
      ).toBe('0 - false - -150px - 210px')
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
          <TimelineTodayMarker />
          <TimelineMonths />
          <TimelineWeeks />
          <TimelineDays />
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

  describe('when today marker has `render` specified', () => {
    const CustomTodayMarker = ({
      today,
      offset,
    }: {
      today: Date
      offset: string
    }) => {
      return (
        <div>
          {today.toString()} - {offset}
        </div>
      )
    }

    beforeEach(() => {
      wrapper = render(
        <Timeline
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          today={new Date(2020, 1, 7, 0, 0, 0)}
        >
          <TimelineTodayMarker
            render={(today, offset) => (
              <CustomTodayMarker today={today} offset={offset} />
            )}
          />
          <TimelineRows>{}</TimelineRows>
        </Timeline>
      )
    })

    it('should render the today marker as specified', () => {
      expect(
        wrapper.getByTestId('timeline-today-marker-wrapper').innerHTML
      ).toEqual(
        renderToStaticMarkup(
          <CustomTodayMarker
            today={new Date(2020, 1, 7, 0, 0, 0)}
            offset="180px"
          />
        )
      )
    })
  })

  describe('when today is not within range', () => {
    beforeEach(() => {
      wrapper = render(
        <Timeline
          startDate={new Date(2020, 1, 1, 0, 0, 0)}
          today={new Date(2020, 4, 1, 0, 0, 0)}
        >
          <TimelineTodayMarker />
          <TimelineMonths />
          <TimelineWeeks />
          <TimelineDays />
          <TimelineRows>
            <TimelineRow name="Row 1">
              <TimelineEvents>
                <TimelineEvent
                  startDate={new Date(2020, 1, 1, 0, 0, 0)}
                  endDate={new Date(2020, 1, 10, 0, 0, 0)}
                  status={COMPLETED}
                >
                  Event
                </TimelineEvent>
              </TimelineEvents>
            </TimelineRow>
          </TimelineRows>
        </Timeline>
      )
    })

    it('should not display the today marker', () => {
      expect(
        wrapper.queryAllByTestId('timeline-today-marker-wrapper')
      ).toHaveLength(0)
    })
  })
})
