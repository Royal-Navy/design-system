import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import {
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
  Badge,
} from '.'

describe('Badge', () => {
  let wrapper: RenderResult

  describe('when provided with additional custom props', () => {
    beforeEach(() => {
      wrapper = render(
        <Badge
          color={BADGE_COLOR.ACTION}
          colorVariant={BADGE_COLOR_VARIANT.SOLID}
          size={BADGE_SIZE.REGULAR}
          variant={BADGE_VARIANT.PILL}
          data-arbitrary="example"
        />
      )
    })

    it('applies the props to the wrapper element', () => {
      expect(wrapper.getByTestId('badge')).toHaveAttribute(
        'data-arbitrary',
        'example'
      )
    })
  })
})
