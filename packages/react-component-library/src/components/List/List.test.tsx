import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import { selectors } from '@defencedigital/design-tokens'

import { List, ListItem } from '.'

const { color } = selectors

describe('List', () => {
  let consoleWarnSpy: jest.SpyInstance
  let onClickSpy1: (event: React.MouseEvent<HTMLButtonElement>) => void
  let onClickSpy2: (event: React.MouseEvent<HTMLButtonElement>) => void
  let onClickSpy3: (event: React.MouseEvent<HTMLButtonElement>) => void
  let wrapper: RenderResult

  describe('default props', () => {
    beforeEach(() => {
      consoleWarnSpy = jest.spyOn(global.console, 'warn')

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

    it('should apply the group role to the root element', () => {
      expect(wrapper.getByTestId('list')).toHaveAttribute('role', 'group')
    })

    it('should apply the presentation role to the li element', () => {
      wrapper.getAllByTestId('list-item').forEach((item) => {
        expect(item).toHaveAttribute('role', 'presentation')
      })
    })

    it('should set the `aria-labelledby` attribute to the ID of the title', () => {
      const titleId = wrapper
        .getAllByTestId('list-item-heading')[0]
        .getAttribute('id')

      expect(wrapper.getAllByRole('listitem')[0]).toHaveAttribute(
        'aria-labelledby',
        titleId
      )
    })

    it('should not call `console.warn`', () => {
      expect(consoleWarnSpy).toHaveBeenCalledTimes(0)
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
          expect(wrapper.getAllByTestId('list-item')[1]).toHaveStyleRule(
            'background-color',
            color('neutral', '000')
          )
          expect(wrapper.getAllByTestId('list-item')[2]).toHaveStyleRule(
            'background-color',
            color('neutral', '000')
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
            expect(wrapper.getAllByTestId('list-item')[0]).toHaveStyleRule(
              'background-color',
              color('neutral', '000')
            )
            expect(wrapper.getAllByTestId('list-item')[2]).toHaveStyleRule(
              'background-color',
              color('neutral', '000')
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

  describe('when specify properties that will be overwritten', () => {
    beforeEach(() => {
      consoleWarnSpy = jest.spyOn(global.console, 'warn')

      wrapper = render(
        <List>
          <ListItem
            isActive
            onClick={jest.fn()}
            onMouseEnter={jest.fn()}
            onMouseLeave={jest.fn()}
            title="List item"
          >
            This is the description
          </ListItem>
        </List>
      )
    })

    it('should call `console.warn` 4 times', () => {
      expect(consoleWarnSpy).toHaveBeenCalledTimes(3)
    })

    it('should warn the consumer `isActive` will be overwritten', () => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'WARN - RNDS - Prop `isActive` on `ListItem` will be overwritten'
      )
    })

    it('should warn the consumer `onMouseEnter` will be overwritten', () => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'WARN - RNDS - Prop `onMouseEnter` on `ListItem` will be overwritten'
      )
    })

    it('should warn the consumer `onMouseLeave` will be overwritten', () => {
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'WARN - RNDS - Prop `onMouseLeave` on `ListItem` will be overwritten'
      )
    })
  })

  describe('when a list item has multiple children', () => {
    beforeEach(() => {
      const extraItemText = 'extra text'
      wrapper = render(
        <List>
          <ListItem onClick={jest.fn()} title="List item">
            Main text: {extraItemText}
          </ListItem>
        </List>
      )
    })

    it("renders the item's text", () => {
      expect(wrapper.getAllByTestId('list-item')[0]).toHaveTextContent(
        'Main text: extra text'
      )
    })
  })

  describe('when arbitrary props are specified', () => {
    beforeEach(() => {
      onClickSpy1 = jest.fn()
      onClickSpy2 = jest.fn()
      onClickSpy3 = jest.fn()

      wrapper = render(
        <List data-arbitrary="arbitrary-list">
          <ListItem
            data-arbitrary="arbitrary-list-item"
            onClick={onClickSpy1}
            title="List item"
          >
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

    it('should spread arbitrary props to the list', () => {
      expect(wrapper.getByTestId('list')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-list'
      )
    })

    it('should spread arbitrary props to the list item', () => {
      expect(wrapper.getAllByTestId('list-item')[0]).toHaveAttribute(
        'data-arbitrary',
        'arbitrary-list-item'
      )
    })
  })
})
