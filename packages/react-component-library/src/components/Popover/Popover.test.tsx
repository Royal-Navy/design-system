import React, { useState } from 'react'

import { renderToStaticMarkup } from 'react-dom/server'
import {
  act,
  fireEvent,
  render,
  RenderResult,
  waitFor,
  screen,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Popover } from '.'

const HOVER_ON_ME = 'Hover on me!'

function stepTimers(milliseconds: number) {
  for (let elapsed = 0; elapsed < milliseconds; elapsed += 1) {
    act(() => {
      jest.advanceTimersByTime(1)
    })
  }
}

function stepUntil(isDone: () => boolean, limit = 5000) {
  for (let elapsed = 1; elapsed <= limit; elapsed += 1) {
    act(() => {
      jest.advanceTimersByTime(1)
    })

    if (isDone()) {
      return elapsed
    }
  }

  return Infinity
}
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

  describe('when the `Popover` re-renders', () => {
    it('keeps the target element and its focus', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

      const { rerender } = render(
        <Popover closeDelay={0} content={<pre>First</pre>} isClick>
          <button type="button">Target</button>
        </Popover>
      )
      const target = screen.getByRole('button', { name: 'Target' })

      await user.click(target)
      expect(screen.getByRole('button', { name: 'Target' })).toBe(target)

      rerender(
        <Popover closeDelay={0} content={<pre>Second</pre>} isClick>
          <button type="button">Target</button>
        </Popover>
      )

      expect(screen.getByRole('button', { name: 'Target' })).toBe(target)
      expect(target).toHaveFocus()
    })
  })

  describe('when the `Popover` uses the click mouse event and the user clicks the target twice', () => {
    it('is hidden after the second click', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

      render(
        <Popover closeDelay={0} content={<pre>{CONTENT_TEXT}</pre>} isClick>
          <button type="button">Click on me</button>
        </Popover>
      )

      await user.click(screen.getByRole('button', { name: 'Click on me' }))
      expect(screen.getByText(CONTENT_TEXT)).toBeVisible()

      await user.click(screen.getByRole('button', { name: 'Click on me' }))
      await waitFor(() => {
        expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument()
      })
    })

    it('still closes on an outside click when an ancestor stops mouse down', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

      render(
        <>
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div onMouseDown={(event) => event.stopPropagation()}>
            <Popover closeDelay={0} content={<pre>{CONTENT_TEXT}</pre>} isClick>
              <button type="button">Click on me</button>
            </Popover>
          </div>
          <button type="button">Elsewhere</button>
        </>
      )

      await user.click(screen.getByRole('button', { name: 'Click on me' }))
      await user.click(screen.getByRole('button', { name: 'Elsewhere' }))

      await waitFor(() => {
        expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument()
      })
    })

    it("keeps the target's own mouse down handler", async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      const onMouseDown = jest.fn()

      render(
        <Popover closeDelay={0} content={<pre>{CONTENT_TEXT}</pre>} isClick>
          <button type="button" onMouseDown={onMouseDown}>
            Click on me
          </button>
        </Popover>
      )

      await user.click(screen.getByRole('button', { name: 'Click on me' }))

      expect(onMouseDown).toHaveBeenCalledTimes(1)
    })
  })

  describe('when the `Popover` is controlled', () => {
    it('shows and hides with `isVisible`', () => {
      const { rerender } = render(
        <Popover content={<pre>{CONTENT_TEXT}</pre>} isClick isVisible>
          <button type="button">Click on me</button>
        </Popover>
      )

      expect(screen.getByText(CONTENT_TEXT)).toBeVisible()

      rerender(
        <Popover content={<pre>{CONTENT_TEXT}</pre>} isClick isVisible={false}>
          <button type="button">Click on me</button>
        </Popover>
      )

      return waitFor(() => {
        expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument()
      })
    })

    it('requests changes through `onVisibleChange` without changing itself', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      const onVisibleChange = jest.fn()

      render(
        <Popover
          closeDelay={0}
          content={<pre>{CONTENT_TEXT}</pre>}
          isClick
          isVisible={false}
          onVisibleChange={onVisibleChange}
        >
          <button type="button">Click on me</button>
        </Popover>
      )

      await user.click(screen.getByRole('button', { name: 'Click on me' }))

      expect(onVisibleChange).toHaveBeenCalledWith(true)
      expect(screen.queryByText(CONTENT_TEXT)).not.toBeInTheDocument()
    })

    it('requests to hide on an outside click', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      const onVisibleChange = jest.fn()

      render(
        <>
          <Popover
            closeDelay={0}
            content={<pre>{CONTENT_TEXT}</pre>}
            isClick
            isVisible
            onVisibleChange={onVisibleChange}
          >
            <button type="button">Click on me</button>
          </Popover>
          <button type="button">Elsewhere</button>
        </>
      )

      await user.click(screen.getByRole('button', { name: 'Elsewhere' }))

      expect(onVisibleChange).toHaveBeenCalledWith(false)
      expect(screen.getByText(CONTENT_TEXT)).toBeVisible()
    })
  })

  describe('when the `Popover` is not controlled and has `onVisibleChange`', () => {
    it('calls it as the visibility changes', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      const onVisibleChange = jest.fn()

      render(
        <Popover
          closeDelay={0}
          content={<pre>{CONTENT_TEXT}</pre>}
          isClick
          onVisibleChange={onVisibleChange}
        >
          <button type="button">Click on me</button>
        </Popover>
      )

      await user.click(screen.getByRole('button', { name: 'Click on me' }))
      await user.click(screen.getByRole('button', { name: 'Click on me' }))

      expect(onVisibleChange.mock.calls).toEqual([[true], [false]])
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

  describe('when a controlled parent refuses a change', () => {
    it('is asked again on the next click', async () => {
      const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
      const onVisibleChange = jest.fn()

      render(
        <Popover
          closeDelay={0}
          content={<pre>{CONTENT_TEXT}</pre>}
          isClick
          isVisible={false}
          onVisibleChange={onVisibleChange}
        >
          <button type="button">Click on me</button>
        </Popover>
      )

      await user.click(screen.getByRole('button', { name: 'Click on me' }))
      await user.click(screen.getByRole('button', { name: 'Click on me' }))

      expect(onVisibleChange.mock.calls).toEqual([[true], [true]])
    })

    it('is asked again on the next hover', () => {
      const onVisibleChange = jest.fn()

      render(
        <Popover
          closeDelay={0}
          content={<pre>{CONTENT_TEXT}</pre>}
          isVisible={false}
          onVisibleChange={onVisibleChange}
        >
          <div>{HOVER_ON_ME}</div>
        </Popover>
      )

      fireEvent.mouseEnter(screen.getByText(HOVER_ON_ME))
      fireEvent.mouseLeave(screen.getByText(HOVER_ON_ME))
      fireEvent.mouseEnter(screen.getByText(HOVER_ON_ME))

      expect(onVisibleChange.mock.calls).toEqual([[true], [true]])
    })
  })

  describe('when a close is pending', () => {
    function renderHoverPopover(onVisibleChange: jest.Mock) {
      return render(
        <Popover
          closeDelay={100}
          content={<pre>{CONTENT_TEXT}</pre>}
          onVisibleChange={onVisibleChange}
        >
          <div>{HOVER_ON_ME}</div>
        </Popover>
      )
    }

    it('cancels it when the user hovers back on the target', () => {
      const onVisibleChange = jest.fn()
      renderHoverPopover(onVisibleChange)

      fireEvent.mouseEnter(screen.getByText(HOVER_ON_ME))
      fireEvent.mouseLeave(screen.getByText(HOVER_ON_ME))
      fireEvent.mouseEnter(screen.getByText(HOVER_ON_ME))
      act(() => {
        jest.advanceTimersByTime(100)
      })

      expect(onVisibleChange.mock.calls).toEqual([[true]])
      expect(screen.getByText(CONTENT_TEXT)).toBeVisible()
    })

    it('keeps the first one rather than restarting it', () => {
      const onVisibleChange = jest.fn()
      renderHoverPopover(onVisibleChange)

      fireEvent.mouseEnter(screen.getByText(HOVER_ON_ME))
      fireEvent.mouseLeave(screen.getByText(HOVER_ON_ME))
      stepTimers(50)
      fireEvent.mouseLeave(screen.getByText(HOVER_ON_ME))

      expect(stepUntil(() => onVisibleChange.mock.calls.length === 2)).toBe(50)
      expect(onVisibleChange.mock.calls).toEqual([[true], [false]])
    })

    it('does not fire after unmounting', () => {
      const onVisibleChange = jest.fn()
      const { unmount } = renderHoverPopover(onVisibleChange)

      fireEvent.mouseEnter(screen.getByText(HOVER_ON_ME))
      fireEvent.mouseLeave(screen.getByText(HOVER_ON_ME))
      unmount()
      act(() => {
        jest.advanceTimersByTime(100)
      })

      expect(onVisibleChange.mock.calls).toEqual([[true]])
    })

    it('does not close a Popover the parent has closed and reopened', () => {
      const onVisibleChange = jest.fn()
      const renderControlled = (isVisible: boolean) => (
        <Popover
          closeDelay={100}
          content={<pre>{CONTENT_TEXT}</pre>}
          isVisible={isVisible}
          onVisibleChange={onVisibleChange}
        >
          <div>{HOVER_ON_ME}</div>
        </Popover>
      )
      const { rerender } = render(renderControlled(true))

      fireEvent.mouseLeave(screen.getByText(HOVER_ON_ME))
      rerender(renderControlled(false))
      rerender(renderControlled(true))
      stepTimers(100)

      expect(onVisibleChange).not.toHaveBeenCalled()
      expect(screen.getByText(CONTENT_TEXT)).toBeVisible()
    })

    it('closes on time when a controlled parent applies each change', () => {
      const onVisibleChange = jest.fn()
      const Parent = () => {
        const [isVisible, setIsVisible] = useState(false)

        return (
          <Popover
            closeDelay={100}
            content={<pre>{CONTENT_TEXT}</pre>}
            isVisible={isVisible}
            onVisibleChange={(nextIsVisible) => {
              onVisibleChange(nextIsVisible)
              setIsVisible(nextIsVisible)
            }}
          >
            <div>{HOVER_ON_ME}</div>
          </Popover>
        )
      }
      render(<Parent />)

      fireEvent.mouseEnter(screen.getByText(HOVER_ON_ME))
      stepTimers(10)
      fireEvent.mouseLeave(screen.getByText(HOVER_ON_ME))

      expect(stepUntil(() => !screen.queryByText(CONTENT_TEXT))).toBe(101)
      expect(onVisibleChange.mock.calls).toEqual([[true], [false]])
    })

    it('hides an uncontrolled click Popover when the first close is due', () => {
      render(
        <Popover closeDelay={1000} content={<pre>{CONTENT_TEXT}</pre>} isClick>
          <button type="button">Click on me</button>
        </Popover>
      )

      fireEvent.click(screen.getByRole('button', { name: 'Click on me' }))
      fireEvent.mouseDown(document)
      stepTimers(500)
      fireEvent.mouseDown(document)

      expect(stepUntil(() => !screen.queryByText(CONTENT_TEXT))).toBe(501)
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
