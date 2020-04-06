import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { TimelineProvider } from '../context'
import { Timeline } from '../Timeline'

describe('Timeline', () => {
  let wrapper: RenderResult
  let rowData: any[]
  let startDate: Date

  describe('no data is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider>
          <Timeline rowData={[]} />
        </TimelineProvider>
      )
    })

    it('displays the no data message', () => {
      expect(wrapper.queryByTestId('timeline-no-data')).toBeInTheDocument()
    })
  })

  describe('data is provided', () => {
    beforeEach(() => {
      startDate = new Date(2020, 3, 1)

      rowData = [
        {
          name: 'Example Row',
          events: [
            {
              title: 'Example Event',
              startDate: new Date(2020, 3, 10),
              endDate: new Date(2020, 3, 16),
            },
          ],
        },
      ]

      wrapper = render(
        <TimelineProvider startDate={startDate}>
          <Timeline rowData={rowData} />
        </TimelineProvider>
      )
    })

    it('does not display the no data message', () => {
      expect(wrapper.queryByTestId('timeline-no-data')).not.toBeInTheDocument()
    })

    it('renders the event', () => {
      expect(wrapper.queryByText('Example Event')).toBeInTheDocument()
    })
  })
})
