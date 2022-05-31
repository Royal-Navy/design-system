import React from 'react'
import { render } from '@testing-library/react'

import { GlobalStyleProvider } from './GlobalStyle'

describe('GlobalStyleProvider', () => {
  describe('when rendered multiple times as siblings', () => {
    beforeEach(() => {
      render(
        <>
          <GlobalStyleProvider />
          <GlobalStyleProvider />
        </>
      )
    })

    it('inserts the styles once', () => {
      expect(
        Array.prototype.filter.call(
          document.styleSheets[0].cssRules,
          (rule) => rule.selectorText === 'h1'
        )
      ).toHaveLength(1)
    })
  })

  describe('when rendered multiple times nested', () => {
    beforeEach(() => {
      render(
        <GlobalStyleProvider>
          <GlobalStyleProvider />
        </GlobalStyleProvider>
      )
    })

    it('inserts the styles once', () => {
      expect(
        Array.prototype.filter.call(
          document.styleSheets[0].cssRules,
          (rule) => rule.selectorText === 'h1'
        )
      ).toHaveLength(1)
    })
  })

  describe('when rerendered', () => {
    beforeEach(() => {
      jest.isolateModules(() => {
        const { rerender } = render(<GlobalStyleProvider />)
        rerender(<GlobalStyleProvider />)
      })
    })

    it('retains the style rules', () => {
      expect(
        Array.prototype.filter.call(
          document.styleSheets[0].cssRules,
          (rule) => rule.selectorText === 'h1'
        )
      ).toHaveLength(1)
    })
  })

  describe('when unmounted', () => {
    beforeEach(() => {
      const { unmount } = render(<GlobalStyleProvider />)
      unmount()
    })

    it('removes the style rules', () => {
      expect(document.styleSheets[0].cssRules).toHaveLength(0)
    })
  })

  describe('when unmounted and remounted', () => {
    beforeEach(() => {
      const { unmount, rerender } = render(<GlobalStyleProvider />)
      unmount()
      rerender(<GlobalStyleProvider />)
    })

    it('retains the style rules', () => {
      expect(
        Array.prototype.filter.call(
          document.styleSheets[0].cssRules,
          (rule) => rule.selectorText === 'h1'
        )
      ).toHaveLength(1)
    })
  })

  describe('when there are two instances and the first instance is removed', () => {
    beforeEach(() => {
      const { rerender } = render(
        <>
          <GlobalStyleProvider key={1} />
          <GlobalStyleProvider key={2} />
        </>
      )
      rerender(
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          <GlobalStyleProvider key={2} />
        </>
      )
    })

    it('the styles are retained', () => {
      expect(
        Array.prototype.filter.call(
          document.styleSheets[0].cssRules,
          (rule) => rule.selectorText === 'h1'
        )
      ).toHaveLength(1)
    })
  })
})
