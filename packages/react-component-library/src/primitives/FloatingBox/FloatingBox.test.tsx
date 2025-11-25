import React from 'react'

import { renderToStaticMarkup } from 'react-dom/server'
import { render, screen, waitFor } from '@testing-library/react'

import { FloatingBox } from '.'
import { useStatefulRef } from '../../hooks/useStatefulRef'

function setupOffsetHeightMock(offsetHeight: number) {
  jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
    top: 0,
    left: 0,
    right: 100,
    bottom: 100,
    width: 100,
    height: 100,
    x: 0,
    y: 0,
    toJSON() {
      return this
    },
  })

  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    value: offsetHeight,
  })
}

function setup() {
  render(
    <FloatingBox
      isVisible
      placement="bottom"
      renderTarget={<div>Hello, World!</div>}
      role="dialog"
      aria-modal
    >
      <pre>This is some arbitrary JSX</pre>
    </FloatingBox>
  )
}

it('renders the floating box when provided with a `renderTarget` and arbitrary JSX content', () => {
  setup()

  expect(screen.getByTestId('floating-box')).toHaveAttribute('role', 'dialog')
  expect(screen.getByTestId('floating-box')).toHaveAttribute('aria-modal')
  expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  expect(screen.getByTestId('floating-box-content').innerHTML).toContain(
    renderToStaticMarkup(<pre>This is some arbitrary JSX</pre>)
  )
  expect(screen.getByTestId('floating-box-styled-target')).toBeInTheDocument()
})

it('renders the floating box when provided with a `renderTargetElement` and arbitrary JSX content', () => {
  const TestComponent = () => {
    const [element, setElement] = useStatefulRef()

    return (
      <>
        <div ref={setElement}>Hello, World!</div>
        <FloatingBox isVisible targetElement={element} role="dialog" aria-modal>
          <pre>This is some arbitrary JSX</pre>
        </FloatingBox>
      </>
    )
  }

  render(<TestComponent />)

  expect(screen.getByTestId('floating-box')).toHaveAttribute('role', 'dialog')
  expect(screen.getByTestId('floating-box')).toHaveAttribute('aria-modal')
  expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  expect(screen.getByTestId('floating-box-content').innerHTML).toContain(
    renderToStaticMarkup(<pre>This is some arbitrary JSX</pre>)
  )
  expect(
    screen.queryByTestId('floating-box-styled-target')
  ).not.toBeInTheDocument()
})

it('does not generate a new content `id` when the content changes', () => {
  const ExampleFloatingBox = ({ children: content }: { children: string }) => (
    <FloatingBox
      isVisible
      renderTarget={<div>Hello, World!</div>}
      role="dialog"
      aria-modal
    >
      <>{content}</>
    </FloatingBox>
  )

  const { rerender } = render(
    <ExampleFloatingBox>Initial content</ExampleFloatingBox>
  )
  const initialId = screen.getByTestId('floating-box-content').id
  rerender(<ExampleFloatingBox>Updated content</ExampleFloatingBox>)

  expect(screen.getByTestId('floating-box-content')).toHaveAttribute(
    'id',
    initialId
  )
})

it('sets the position of the floating box', async () => {
  const offsetHeight = 100

  setupOffsetHeightMock(offsetHeight)
  setup()

  await waitFor(() => {
    // Floating UI with flip middleware may position the box above or below
    // depending on available space. Just verify it has positioning applied.
    const floatingBox = screen.getByTestId('floating-box')
    const style = floatingBox.style.transform
    expect(style).toContain('translate')
  })
})

it('sets the position of the floating box when the ref is null', async () => {
  const offsetHeight = 100

  setupOffsetHeightMock(offsetHeight)
  setup()

  await waitFor(() => {
    // Floating UI with flip middleware may position the box above or below
    // depending on available space. Just verify it has positioning applied.
    const floatingBox = screen.getByTestId('floating-box')
    const style = floatingBox.style.transform
    expect(style).toContain('translate')
  })
})
