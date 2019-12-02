import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderToStaticMarkup } from 'react-dom/server'
import { render, RenderResult, cleanup } from '@testing-library/react'

import { FloatingBox } from '.'
import { FLOATING_BOX_SCHEME, FLOATING_BOX_ARROW_POSITION } from './constants'

describe('FloatingBox', () => {
  let wrapper: RenderResult
  let children: React.ReactElement

  describe('when provided a width, eight, position and arbitrary JSX content', () => {
    beforeEach(() => {
      children = <pre>This is some arbitrary JSX</pre>

      wrapper = render(
        <FloatingBox
          width={100}
          height={200}
          top={100}
          left={100}
          position={FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT}
        >
          {children}
        </FloatingBox>
      )
    })

    it('renders the box', () => {
      expect(wrapper.queryByTestId('floating-box')).toBeTruthy()
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

  describe('when the scheme is provided', () => {
    beforeEach(() => {
      cleanup()

      children = <pre>This is some arbitrary JSX</pre>

      wrapper = render(
        <FloatingBox
          width={100}
          height={200}
          top={100}
          left={100}
          scheme={FLOATING_BOX_SCHEME.DARK}
          position={FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT}
        >
          {children}
        </FloatingBox>
      )
    })

    it('applies the class for the dark colour scheme', () => {
      expect(wrapper.getByTestId('floating-box').classList).toContain(
        'rn-floating-box--dark'
      )
    })
  })

  describe('when the position is provided', () => {
    beforeEach(() => {
      cleanup()

      wrapper = render(
        <FloatingBox
          width={100}
          height={200}
          top={100}
          left={100}
          position={FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT}
        >
          <pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>
        </FloatingBox>
      )
    })

    it('applies the corresponding position modifier class', () => {
      expect(wrapper.getByTestId('floating-box').classList).toContain(
        'rn-floating-box--bottom_right'
      )
    })
  })
})
