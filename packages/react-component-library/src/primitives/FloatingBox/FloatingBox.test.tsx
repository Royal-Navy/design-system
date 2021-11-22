import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderToStaticMarkup } from 'react-dom/server'
import { render, RenderResult } from '@testing-library/react'

import { FloatingBox } from '.'
import { useStatefulRef } from '../../hooks/useStatefulRef'

describe('FloatingBox', () => {
  let wrapper: RenderResult
  let children: React.ReactElement

  describe('when provided a `renderTarget` and arbitrary JSX content', () => {
    beforeEach(() => {
      children = <pre>This is some arbitrary JSX</pre>

      wrapper = render(
        <FloatingBox
          isVisible
          renderTarget={<div>Hello, World!</div>}
          role="dialog"
          aria-modal
        >
          {children}
        </FloatingBox>
      )
    })

    it('applies the supplied `role`', () => {
      expect(wrapper.queryByTestId('floating-box')).toHaveAttribute(
        'role',
        'dialog'
      )
    })

    it('applies additional arbitrary props to wrapper', () => {
      expect(wrapper.queryByTestId('floating-box')).toHaveAttribute(
        'aria-modal'
      )
    })

    it('applies the `role` attribute', () => {
      expect(wrapper.getByTestId('floating-box')).toHaveAttribute(
        'role',
        'dialog'
      )
    })

    it('renders an embedded target', () => {
      expect(
        wrapper.getByTestId('floating-box-styled-target')
      ).toBeInTheDocument()
    })

    it('renders the box', () => {
      expect(wrapper.getByTestId('floating-box')).toBeInTheDocument()
    })

    it('renders the provided renderTarget JSX', () => {
      expect(wrapper.getByText('Hello, World!')).toBeInTheDocument()
    })

    it('renders the provided arbitrary JSX', () => {
      expect(wrapper.getByTestId('floating-box-content').innerHTML).toContain(
        renderToStaticMarkup(children)
      )
    })
  })

  describe('when provided a `renderTargetElement` and arbitrary JSX content', () => {
    beforeEach(() => {
      children = <pre>This is some arbitrary JSX</pre>

      const TestComponent = () => {
        const [element, setElement] = useStatefulRef()

        return (
          <>
            <div ref={setElement}>Hello, World!</div>
            <FloatingBox
              isVisible
              targetElement={element}
              role="dialog"
              aria-modal
            >
              {children}
            </FloatingBox>
          </>
        )
      }
      wrapper = render(<TestComponent />)
    })

    it('renders the box', () => {
      expect(wrapper.queryByTestId('floating-box')).toBeInTheDocument()
    })

    it('does not render an embedded target', () => {
      expect(
        wrapper.queryByTestId('floating-box-styled-target')
      ).not.toBeInTheDocument()
    })

    it('renders the provided arbitrary JSX', () => {
      expect(wrapper.getByTestId('floating-box-content').innerHTML).toContain(
        renderToStaticMarkup(children)
      )
    })
  })
})
