import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, wait } from '@testing-library/react'

import { TimelineProvider, TimelineContext } from '../context'
import { TIMELINE_ACTIONS } from '../context/types'
import { TimelineTodayMarker } from '../TimelineTodayMarker'

describe('TodayMarker', () => {
  let wrapper: RenderResult

  describe('today is within range', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider startDate={new Date(2020, 1, 1, 0, 0, 0)}>
          <TimelineTodayMarker />
        </TimelineProvider>
      )
    })

    it('renders the component', () => {
      expect(wrapper.queryByTestId('timeline-today-marker')).toBeInTheDocument()
    })
  })

  describe('today is not within range', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider startDate={new Date(2020, 1, 1, 0, 0, 0)}>
          <TimelineContext.Consumer>
            {({ dispatch }) => {
              setTimeout(() => {
                dispatch({
                  type: TIMELINE_ACTIONS.SET_DATE,
                  date: new Date(2019, 2, 1, 0, 0, 0),
                })
              }, 0)

              return <TimelineTodayMarker />
            }}
          </TimelineContext.Consumer>
        </TimelineProvider>
      )
    })

    it('does not render the component', async () => {
      await wait(() => {
        expect(wrapper.queryByTestId('timeline-today-marker')).not.toBeInTheDocument()
      })
    })
  })
})
