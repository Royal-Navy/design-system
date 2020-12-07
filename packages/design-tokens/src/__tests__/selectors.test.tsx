import React from 'react'
import styled from 'styled-components'
import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import { selectors } from '..'

const { mediaQuery, mq } = selectors

describe('mediaQuery / mq', () => {
  let wrapper: RenderResult

  describe('with invalid breakpoints', () => {
    it('throws an error', () => {
      expect(() => {
        // @ts-ignore
        const css = mq({ gte: 'foo', lt: 'bar' })`
          background-color: white;
        `
      }).toThrowError(/Invalid breakpoints/)
    })
  })

  describe('with valid breakpoints', () => {
    const StyledComponent = styled.div`
      background-color: white;
      font-size: initial;

      ${mediaQuery({ gte: 'xs' })`
        background-color: blue;
      `}

      ${mq({ gte: 's', lt: 'm' })`
        background-color: green;
      `}

      ${mq({ gte: 'l', lt: 'xl', media: '' })`
        background-color: black;
      `}
    `

    beforeEach(() => {
      wrapper = render(<StyledComponent data-testid="test-element" />)
    })

    it('snapshot test', () => {
      // NOTE: We usually advise against snapshot testing
      const { container } = wrapper
      expect(container.firstChild).toMatchSnapshot()
    })

    it('should set styles correctly for each breakpoint', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'background-color',
        'white'
      )

      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'background-color',
        'blue',
        {
          media: 'only screen and (min-width:576px)',
        }
      )
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'background-color',
        'green',
        {
          media: 'only screen and (min-width:768px) and (max-width:1024px)',
        }
      )

      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'background-color',
        'black',
        {
          media: '(min-width:1200px) and (max-width:1400px)',
        }
      )
    })

    it('should set the `font-size` css property correctly', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'font-size',
        'initial'
      )

      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'font-size',
        '94%',
        {
          media: 'only screen and (min-width:576px)',
        }
      )

      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'font-size',
        '96%',
        {
          media: 'only screen and (min-width:768px) and (max-width:1024px)',
        }
      )

      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'font-size',
        '100%',
        {
          media: '(min-width:1200px) and (max-width:1400px)',
        }
      )
    })
  })
})
