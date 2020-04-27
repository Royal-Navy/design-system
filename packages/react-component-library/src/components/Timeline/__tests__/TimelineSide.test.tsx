import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { TimelineSide } from '../TimelineSide'

// eslint-disable-next-line
import { dispatchSpy } from '../context/__mocks__'

import { TimelineProvider } from '../context'
import { TIMELINE_ACTIONS } from '../context/types'
import { TimelineEvent, TimelineEvents, TimelineRow, TimelineRows } from '..'

jest.mock('../context')

describe('TimelineSide', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider>
          <TimelineSide>
            <TimelineRows>{}</TimelineRows>
          </TimelineSide>
        </TimelineProvider>
      )
    })

    it('does not render any rows', () => {
      expect(wrapper.queryAllByTestId('timeline-side-row').length).toEqual(0)
    })

    describe.skip('and the left button is clicked', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('timeline-side-button-left'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('dispatches the GET_PREV timeline context action', () => {
        expect(dispatchSpy).toHaveBeenCalledWith({
          type: TIMELINE_ACTIONS.GET_PREV,
        })
      })
    })

    describe.skip('and the right button is clicked', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('timeline-side-button-right'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('dispatches the GET_NEXT timeline context action', () => {
        expect(dispatchSpy).toHaveBeenCalledWith({
          type: TIMELINE_ACTIONS.GET_NEXT,
        })
      })
    })
  })

  describe('with rowData', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider>
          <TimelineSide>
            <TimelineRows>
              <TimelineRow name="Row 1">
                <TimelineEvents>
                  <TimelineEvent
                    startDate={new Date(2020, 3, 13)}
                    endDate={new Date(2020, 3, 18)}
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
          </TimelineSide>
        </TimelineProvider>
      )
    })

    it('renders the rows', () => {
      expect(wrapper.queryAllByTestId('timeline-side-row').length).toEqual(2)
    })
  })
})
