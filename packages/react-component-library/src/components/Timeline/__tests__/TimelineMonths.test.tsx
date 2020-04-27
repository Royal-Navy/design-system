import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { TimelineProvider } from '../context'
import { TimelineMonths } from '../TimelineMonths'

describe('TimelineMonths', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider startDate={new Date(2020, 3, 1)}>
          <TimelineMonths />
        </TimelineProvider>
      )
    })

    it('renders the correct number of months', () => {
      expect(wrapper.queryAllByTestId('timeline-month').length).toEqual(3)
    })

    it('renders the month title in correct format', () => {
      expect(
        wrapper.getAllByTestId('timeline-month-title')[0].innerHTML
      ).toContain('April 2020')
    })
  })
})
