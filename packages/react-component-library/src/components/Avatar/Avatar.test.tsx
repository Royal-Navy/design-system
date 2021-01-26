import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Avatar } from './Avatar'

describe('Avatar', () => {
  describe('when props are provided', () => {
    let wrapper: RenderResult

    beforeEach(() => {
      wrapper = render(
        <Avatar className="modifier" data-arbitrary="arbitrary" initials="AB" />
      )
    })

    it('should apply the CSS modifier', () => {
      expect(wrapper.getByText('AB').classList).toContain('modifier')
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByText('AB')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })

    it('should render the initials', () => {
      expect(wrapper.getByText('AB')).toBeInTheDocument()
    })
  })
})
