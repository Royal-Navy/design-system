import React from 'react'

import { renderToStaticMarkup } from 'react-dom/server'
import { render, screen } from '@testing-library/react'

import { FloatingBox } from '.'
import { useStatefulRef } from '../../hooks/useStatefulRef'

it('renders the floating box when provided with a `renderTarget` and arbitrary JSX content', () => {
  render(
    <FloatingBox
      isVisible
      renderTarget={<div>Hello, World!</div>}
      role="dialog"
      aria-modal
    >
      <pre>This is some arbitrary JSX</pre>
    </FloatingBox>
  )

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
