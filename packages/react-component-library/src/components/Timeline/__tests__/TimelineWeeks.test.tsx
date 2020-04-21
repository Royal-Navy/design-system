import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { TimelineProvider } from '../context'
import { TimelineWeeks } from '../TimelineWeeks'

describe('Weeks', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider startDate={new Date(2020, 3, 1)}>
          <TimelineWeeks />
        </TimelineProvider>
      )
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
  })
})
