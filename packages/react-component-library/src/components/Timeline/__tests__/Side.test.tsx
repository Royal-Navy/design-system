import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { Side } from '../Side'

// eslint-disable-next-line
import { dispatchSpy } from '../context/__mocks__'

import { TimelineProvider } from '../context'
import { TIMELINE_ACTIONS } from '../context/types'

jest.mock('../context')

describe('Side', () => {
  let wrapper: RenderResult
  let rowData: any[]

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(
        <TimelineProvider>
          <Side rowData={[]} />
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
      rowData = [
        {
          name: 'Example Row',
          events: [
            //
          ],
        },
        {
          name: 'Example Row',
          events: [
            //
          ],
        },
      ]

      wrapper = render(
        <TimelineProvider>
          <Side rowData={rowData} />
        </TimelineProvider>
      )
    })

    it('renders the rows', () => {
      expect(wrapper.queryAllByTestId('side-row').length).toEqual(2)
    })
  })
})
