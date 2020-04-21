import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Side } from '../Side'

// eslint-disable-next-line
import { dispatchSpy } from '../context/__mocks__'

import { TimelineProvider } from '../context'
import { TIMELINE_ACTIONS } from '../context/types'
import { Event, Events, Row, Rows } from '..'

jest.mock('../context')

describe('Side', () => {
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider>
          <Side>
            <Rows>{}</Rows>
          </Side>
        </TimelineProvider>
      )
    })

    it('does not render any rows', () => {
      expect(wrapper.queryAllByTestId('side-row').length).toEqual(0)
    })

    describe.skip('and the left button is clicked', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByTestId('side-button-left'),
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
          wrapper.getByTestId('side-button-right'),
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
          <Side>
            <Rows>
              <Row name="Row 1">
                <Events>
                  <Event
                    startDate={new Date(2020, 3, 13)}
                    endDate={new Date(2020, 3, 18)}
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
          </Side>
        </TimelineProvider>
      )
    })

    it('renders the rows', () => {
      expect(wrapper.queryAllByTestId('side-row').length).toEqual(2)
    })
  })
})
