import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'

import { List, ListItem } from '.'

describe('List', () => {
  let onClickSpy1: (event: React.MouseEvent<HTMLButtonElement>) => void
  let onClickSpy2: (event: React.MouseEvent<HTMLButtonElement>) => void
  let onClickSpy3: (event: React.MouseEvent<HTMLButtonElement>) => void
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      onClickSpy1 = jest.fn()
      onClickSpy2 = jest.fn()
      onClickSpy3 = jest.fn()

      wrapper = render(
        <List>
          <ListItem onClick={onClickSpy1} title="List item">
            This is the description
          </ListItem>
          <ListItem onClick={onClickSpy2} title="List item">
            This is the description
          </ListItem>
          <ListItem onClick={onClickSpy3} title="List item">
            This is the description
          </ListItem>
        </List>
      )
    })

    it('should render the tiles', () => {
      expect(wrapper.getAllByText('List item')).toHaveLength(3)
      expect(wrapper.getAllByText('This is the description')).toHaveLength(3)
    })

    describe('when the first item is clicked', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getAllByText('This is the description')[0],
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should call the `onClick` callback', () => {
        expect(onClickSpy1).toHaveBeenCalledTimes(1)
      })
    })

    describe('when the second item is clicked', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getAllByText('This is the description')[1],
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should call the `onClick` callback', () => {
        expect(onClickSpy2).toHaveBeenCalledTimes(1)
      })
    })

    describe('when the third item is clicked', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getAllByText('This is the description')[2],
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should call the `onClick` callback', () => {
        expect(onClickSpy3).toHaveBeenCalledTimes(1)
      })
    })

    describe('when the mouse pointer enters the first item', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getAllByText('This is the description')[0])
      })

      it('should not give the first item the `is-inactive` class', () => {
        expect(wrapper.getAllByTestId('list-item')[0].classList).not.toContain(
          'is-inactive'
        )
      })

      it('should give the other items the `is-inactive` class', async () => {
        return waitFor(() => {
          expect(wrapper.getAllByTestId('list-item')[1].classList).toContain(
            'is-inactive'
          )
          expect(wrapper.getAllByTestId('list-item')[2].classList).toContain(
            'is-inactive'
          )
        })
      })

      describe('and the mouse pointer enters the second item', () => {
        beforeEach(() => {
          fireEvent.mouseEnter(
            wrapper.getAllByText('This is the description')[1]
          )
        })

        it('should not give the second item the `is-inactive` class', () => {
          expect(
            wrapper.getAllByTestId('list-item')[1].classList
          ).not.toContain('is-inactive')
        })

        it('should give the other items the `is-inactive` class', async () => {
          return waitFor(() => {
            expect(wrapper.getAllByTestId('list-item')[0].classList).toContain(
              'is-inactive'
            )
            expect(wrapper.getAllByTestId('list-item')[2].classList).toContain(
              'is-inactive'
            )
          })
        })
      })

      describe('and the mouse pointer leaves the first item', () => {
        beforeEach(() => {
          fireEvent.mouseLeave(
            wrapper.getAllByText('This is the description')[0]
          )
        })

        it('should not give any items the `is-inactive` class', async () => {
          expect(
            wrapper.getAllByTestId('list-item')[0].classList
          ).not.toContain('is-inactive')
          expect(
            wrapper.getAllByTestId('list-item')[1].classList
          ).not.toContain('is-inactive')
          expect(
            wrapper.getAllByTestId('list-item')[2].classList
          ).not.toContain('is-inactive')
        })
      })
    })
  })
})
