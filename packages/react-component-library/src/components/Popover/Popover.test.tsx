import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderToStaticMarkup } from 'react-dom/server'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
  screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Popover } from '.'

const HOVER_ON_ME = 'Hover on me!'
const CONTENT_TEXT = 'This is some arbitrary JSX'

jest.useFakeTimers()

describe('Popover', () => {
  const content: React.ReactElement = <pre>{CONTENT_TEXT}</pre>
  let clickSpy: (e: React.MouseEvent) => void
  let wrapper: RenderResult

  beforeEach(() => {
    jest.spyOn(global, 'setTimeout')
  })

  describe('when provided with arbitrary JSX content', () => {
    beforeEach(() => {
      clickSpy = jest.fn()

      wrapper = render(
        <>
          <Popover content={content} aria-label="Hello, World!">
            <div>{HOVER_ON_ME}</div>
          </Popover>
          <button onClick={clickSpy}>Click me!</button>
        </>
      )
    })

    it('allows button covered by Popover to be clicked when Popover is hidden', () => {
      wrapper.getByText('Click me!').click()
      expect(clickSpy).toHaveBeenCalledTimes(1)
    })

    describe('and the user hovers on the target element', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getByText(HOVER_ON_ME))
      })

      afterEach(() => {
        jest.clearAllTimers()
      })

      it('should set the `aria-label` attribute to the supplied value', () => {
        expect(wrapper.getByTestId('popover')).toHaveAttribute(
          'aria-label',
          'Hello, World!'
        )
      })

      it('should set the `aria-describedby` attribute to the ID of the content', () => {
        const contentId = wrapper
          .getByTestId('floating-box-content')
          .getAttribute('id')

        expect(wrapper.getByTestId('popover')).toHaveAttribute(
          'aria-describedby',
          contentId
        )
      })

      it('to be visible to the end user', () => {
        return waitFor(() => {
          expect(wrapper.getByTestId('floating-box-content')).toBeVisible()
        })
      })

      it('renders the provided arbitrary JSX', () => {
        expect(wrapper.getByTestId('floating-box-content').innerHTML).toContain(
          renderToStaticMarkup(content)
        )
      })

      describe('and the user unhovers from the target element', () => {
        beforeEach(() => {
          fireEvent.mouseOut(wrapper.getByText(HOVER_ON_ME))
        })

        it('hid the `Popover` after 1000ms', () => {
          expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000)
        })

        it('to not be visible to the end user', () => {
          return waitFor(() => {
            expect(wrapper.queryByText(CONTENT_TEXT)).not.toBeVisible()
          })
        })
      })
    })
  })

  describe('when the `Popover` uses the click mouse event', () => {
    beforeEach(() => {
      wrapper = render(
        <Popover content={<pre>This is some arbitrary JSX</pre>} isClick>
          <div>Click on me</div>
        </Popover>
      )
    })

    describe('and the user clicks on the target', () => {
      beforeEach(() => {
        fireEvent(
          wrapper.getByText('Click on me'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('to be visible to the end user', () => {
        return waitFor(() => {
          expect(wrapper.getByTestId('floating-box-content')).toBeVisible()
        })
      })

      it('should set the `aria-label` attribute to the defualt value', () => {
        expect(wrapper.getByTestId('popover')).toHaveAttribute(
          'aria-label',
          'Popover'
        )
      })

      describe('and the user clicks on the target again', () => {
        beforeEach(() => {
          fireEvent(
            wrapper.getByText('Click on me'),
            new MouseEvent('click', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('to not be visible to the end user', () => {
          return waitFor(() => {
            expect(wrapper.queryByText(CONTENT_TEXT)).not.toBeVisible()
          })
        })
      })

      describe('and the user clicks elsewhere in the document', () => {
        beforeEach(() => {
          fireEvent(
            document,
            new MouseEvent('mousedown', {
              bubbles: true,
              cancelable: true,
            })
          )
        })

        it('to not be visible to the end user', () => {
          return waitFor(() => {
            expect(wrapper.queryByText(CONTENT_TEXT)).not.toBeVisible()
          })
        })
      })
    })
  })

  describe('when using a custom `closeDelay`', () => {
    beforeEach(() => {
      wrapper = render(
        <Popover content={content} closeDelay={100}>
          <div>{HOVER_ON_ME}</div>
        </Popover>
      )
    })

    describe('and the user hovers on the target element', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getByText(HOVER_ON_ME))
      })

      describe('and the user unhovers from the target element', () => {
        beforeEach(() => {
          fireEvent.mouseOut(wrapper.getByText(HOVER_ON_ME))
        })

        it('hid the `Popover` after 100ms', () => {
          expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 100)
        })
      })
    })
  })

  describe('when passing arbitrary props', () => {
    beforeEach(() => {
      wrapper = render(
        <Popover content={content} data-arbitrary="arbitrary">
          <div>{HOVER_ON_ME}</div>
        </Popover>
      )
    })

    describe('and the user hovers on the target element', () => {
      beforeEach(() => {
        fireEvent.mouseEnter(wrapper.getByText(HOVER_ON_ME))
      })

      it('should spread arbitrary props', () => {
        return waitFor(() => {
          expect(wrapper.getByTestId('popover')).toHaveAttribute(
            'data-arbitrary',
            'arbitrary'
          )
        })
      })
    })
  })

  describe('when the popover content changes after being hovered', () => {
    let initialContentId: string

    beforeEach(() => {
      wrapper = render(
        <Popover content={<>initial content</>}>
          <div>{HOVER_ON_ME}</div>
        </Popover>
      )

      fireEvent.mouseEnter(wrapper.getByText(HOVER_ON_ME))
      initialContentId = wrapper.getByTestId('floating-box-content').id

      wrapper.rerender(
        <Popover content={<>new content</>}>
          <div>{HOVER_ON_ME}</div>
        </Popover>
      )
    })

    it('does not generate a new content `id`', () => {
      expect(wrapper.getByTestId('floating-box-content')).toHaveAttribute(
        'id',
        initialContentId
      )
    })
  })

  describe('when the target element has `onMouseEnter` and `onMouseLeave` callbacks', () => {
    const onMouseEnterSpy = jest.fn<void, []>()
    const onMouseLeaveSpy = jest.fn<void, []>()

    beforeEach(() => {
      wrapper = render(
        <Popover content={content} aria-label="Hello, World!">
          <div onMouseEnter={onMouseEnterSpy} onMouseLeave={onMouseLeaveSpy}>
            {HOVER_ON_ME}
          </div>
        </Popover>
      )

      fireEvent.mouseEnter(wrapper.getByText(HOVER_ON_ME))
      fireEvent.mouseLeave(wrapper.getByText(HOVER_ON_ME))
    })

    it('appends `onMouseOver` and `onMouseLeave` callbacks', () => {
      expect(onMouseEnterSpy).toHaveBeenCalledTimes(1)
      expect(onMouseLeaveSpy).toHaveBeenCalledTimes(1)
    })
  })

  describe('when the user moves the mouse between adjacent Popover targets quickly', () => {
    it('does not clear the pending timer, leaving the Popover visible', async () => {
      jest.useFakeTimers()

      render(
        <>
          <Popover content={<>foo</>} aria-label="Popover 1">
            <div>Popover 1</div>
          </Popover>
          <Popover content={<>bar</>} aria-label="Popover 2">
            <div>Popover 2</div>
          </Popover>
          <Popover content={<>baz</>} aria-label="Popover 3">
            <div>Popover 3</div>
          </Popover>
          <Popover content={<>qux</>} aria-label="Popover 4">
            <div>Popover 4</div>
          </Popover>
        </>
      )

      userEvent.hover(screen.getByText('Popover 1'))
      userEvent.hover(screen.getByText('Popover 2'))
      userEvent.hover(screen.getByText('Popover 3'))
      userEvent.hover(screen.getByText('Popover 4'))

      jest.runAllTimers()

      expect(screen.queryByText('foo')).not.toBeInTheDocument()
      expect(screen.queryByText('bar')).not.toBeInTheDocument()
      expect(screen.queryByText('baz')).not.toBeInTheDocument()

      expect(await screen.findByText('qux')).toBeVisible()
    })
  })
})
