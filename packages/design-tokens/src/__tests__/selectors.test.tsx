import React from 'react'
import styled from 'styled-components'
import { render, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import {
  AnimationTiming,
  BreakpointSize,
  ColorGroup,
  ColorShade,
  selectors,
  ShadowWeight,
  Spacing,
  TypographySize,
  ZIndexGroup,
} from '..'

const {
  mediaQuery,
  mq,
  spacing,
  breakpoint,
  animation,
  color,
  fontSize,
  shadow,
  zIndex,
} = selectors

let wrapper: RenderResult

describe('mediaQuery / mq', () => {
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
        padding: ${spacing('2')};
      `}

      ${mq({ gte: 's', lt: 'm' })`
        background-color: green;
        padding: ${spacing('4')};
      `}

      ${mq({ gte: 'l', lt: 'xl', media: '' })`
        background-color: black;
        padding: ${spacing('6')};
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
        'padding',
        '0.25rem',
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
        'padding',
        '0.5rem',
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

      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'padding',
        '0.75rem',
        {
          media: '(min-width:1200px) and (max-width:1400px)',
        }
      )
    })
  })
})

describe('breakpoint', () => {
  describe('when the breakpoint is invalid', () => {
    it('throws a friendly error', () => {
      expect(() => breakpoint('invalid' as BreakpointSize)).toThrowError(
        'Invalid breakpoint token'
      )
    })
  })

  describe('when the breakpoint is valid', () => {
    const StyledComponent = styled.div`
      @media only screen and (min-width: ${breakpoint('xs').breakpoint}) {
        font-size: 14px;
      }
    `

    beforeEach(() => {
      wrapper = render(<StyledComponent data-testid="test-element" />)
    })

    it('should set styles correctly', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'font-size',
        '14px',
        {
          media: 'only screen and (min-width:576px)',
        }
      )
    })
  })
})

describe('animation', () => {
  describe('when the index is invalid', () => {
    it('throws a friendly error', () => {
      expect(() => animation('invalid' as AnimationTiming)).toThrowError(
        'Invalid animation token'
      )
    })
  })

  describe('when the index is valid', () => {
    const StyledComponent = styled.div`
      transition: opacity ${animation('default')} linear;
    `

    beforeEach(() => {
      wrapper = render(<StyledComponent data-testid="test-element" />)
    })

    it('should set styles correctly', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'transition',
        'opacity 0.2s linear'
      )
    })
  })
})

describe('color', () => {
  describe('when the group is invalid', () => {
    it('throws a friendly error', () => {
      expect(() => color('invalid' as ColorGroup, '400')).toThrowError(
        'Invalid color token'
      )
    })
  })

  describe('when the shade is invalid', () => {
    it('throws a friendly error', () => {
      expect(() => color('action', 'invalid' as ColorShade)).toThrowError(
        'Invalid color token'
      )
    })
  })

  describe('when the group and shade are valid', () => {
    const StyledComponent = styled.div`
      color: ${color('neutral', '100')};
    `

    beforeEach(() => {
      wrapper = render(<StyledComponent data-testid="test-element" />)
    })

    it('should set styles correctly', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'color',
        '#e2e9ee'
      )
    })
  })
})

describe('fontSize', () => {
  describe('when the size is invalid', () => {
    it('throws a friendly error', () => {
      expect(() => fontSize('invalid' as TypographySize)).toThrowError(
        'Invalid typography token'
      )
    })
  })

  describe('when the size is valid', () => {
    const StyledComponent = styled.div`
      font-size: ${fontSize('xs')};
    `

    beforeEach(() => {
      wrapper = render(<StyledComponent data-testid="test-element" />)
    })

    it('should set styles correctly', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'font-size',
        '0.625rem'
      )
    })
  })
})

describe('shadow', () => {
  describe('when the weight is invalid', () => {
    it('throws a friendly error', () => {
      expect(() => shadow('invalid' as ShadowWeight)).toThrowError(
        'Invalid shadow token'
      )
    })
  })

  describe('when the weight is valid', () => {
    const StyledComponent = styled.div`
      box-shadow: ${shadow('0')};
    `

    beforeEach(() => {
      wrapper = render(<StyledComponent data-testid="test-element" />)
    })

    it('should set styles correctly', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'box-shadow',
        '0 0 0 transparent'
      )
    })
  })
})

describe('spacing', () => {
  describe('when the spacing value is invalid', () => {
    it('throws a friendly error', () => {
      expect(() => spacing('invalid' as Spacing)).toThrowError(
        'Invalid spacing token'
      )
    })
  })

  describe('when the value is valid', () => {
    const StyledComponent = styled.div`
      padding: ${spacing('4')};
    `

    beforeEach(() => {
      wrapper = render(<StyledComponent data-testid="test-element" />)
    })

    it('should set styles correctly', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'padding',
        '0.5rem'
      )
    })
  })
})

describe('zIndex', () => {
  describe('when the group is invalid', () => {
    it('throws a friendly error', () => {
      expect(() => zIndex('invalid' as ZIndexGroup, 1)).toThrowError(
        'Invalid z-index token'
      )
    })
  })

  describe('when the group and offset are valid', () => {
    const StyledComponent = styled.div`
      z-index: ${zIndex('overlay', 1)};
    `

    beforeEach(() => {
      wrapper = render(<StyledComponent data-testid="test-element" />)
    })

    it('should set styles correctly', () => {
      expect(wrapper.getByTestId('test-element')).toHaveStyleRule(
        'z-index',
        '6001'
      )
    })
  })
})
