import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderToStaticMarkup } from 'react-dom/server'
import { render, RenderResult, cleanup } from '@testing-library/react'

import { FloatingBox } from '.'
import { FLOATING_BOX_ARROW_POSITION } from './constants'

describe('FloatingBox', () => {
  let wrapper: RenderResult
  let children: React.ReactElement

  describe('when provided a width, height, position and arbitrary JSX content', () => {
    beforeEach(() => {
      children = <pre>This is some arbitrary JSX</pre>

      wrapper = render(
        <FloatingBox
          width={100}
          height={200}
          top={100}
          left={100}
          position={FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT}
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

    it('renders the box', () => {
      expect(wrapper.queryByTestId('floating-box')).toBeInTheDocument()
    })

    it('it renders the provided arbitrary JSX', () => {
      expect(wrapper.getByTestId('floating-box-content').innerHTML).toContain(
        renderToStaticMarkup(children)
      )
    })

    it('it applies the appropriate dynamic styles', () => {
      expect(wrapper.getByTestId('floating-box').style).toHaveProperty(
        'width',
        '100px'
      )

      expect(wrapper.getByTestId('floating-box').style).toHaveProperty(
        'height',
        '200px'
      )

      expect(wrapper.getByTestId('floating-box').style).toHaveProperty(
        'top',
        '100px'
      )

      expect(wrapper.getByTestId('floating-box').style).toHaveProperty(
        'left',
        '100px'
      )
    })
  })
})
