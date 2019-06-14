import { useStaticQuery } from 'gatsby'

import mockNavData from '../../jest/data/mockNavData'
import usePrimaryNavData from './usePrimaryNavData'

describe.only('usePrimaryNavData', () => {
  let result

  beforeEach(() => {
    useStaticQuery.mockReturnValue(mockNavData)
  })

  describe('when the user is on the home page', () => {
    beforeEach(() => {
      const location = {
        pathname: '/',
      }

      result = usePrimaryNavData(location)
    })

    it('should return nav items for the top level things', () => {
      expect(result).toHaveLength(8)
      expect(result[0]).toHaveProperty('href', '/')
      expect(result[0]).toHaveProperty('label', 'Home')

      expect(result[1]).toHaveProperty('href', '/get-started')
      expect(result[1]).toHaveProperty('label', 'Get started')

      expect(result[2]).toHaveProperty('href', '/styles')
      expect(result[2]).toHaveProperty('label', 'Styles')

      expect(result[3]).toHaveProperty('href', '/components')
      expect(result[3]).toHaveProperty('label', 'Components')

      expect(result[4]).toHaveProperty('href', '/patterns')
      expect(result[4]).toHaveProperty('label', 'Patterns')

      expect(result[5]).toHaveProperty('href', '/nelson-api-documentation')
      expect(result[5]).toHaveProperty('label', 'NELSON API Documentation')

      expect(result[6]).toHaveProperty('href', '/about-the-design-system')
      expect(result[6]).toHaveProperty('label', 'About the design system')

      expect(result[7]).toHaveProperty('href', '/community')
      expect(result[7]).toHaveProperty('label', 'Community')
    })

    it('should indicate that only the homepage link is active', () => {
      const activeItems = result.map(({ active }) => active)
      expect(activeItems).toEqual([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ])
    })
  })

  describe('when the user is on the component page', () => {
    beforeEach(() => {
      const location = {
        pathname: '/components',
      }

      result = usePrimaryNavData(location)
    })

    it('should indicate that only the component link is active', () => {
      const activeItems = result.map(({ active }) => active)

      expect(activeItems).toEqual([
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
      ])
    })
  })

  describe('when the user is on the components button sub page', () => {
    beforeEach(() => {
      const location = {
        pathname: '/components/button',
      }

      result = usePrimaryNavData(location)
    })

    it('should indicate that only the component link is active', () => {
      const activeItems = result.map(({ active }) => active)

      expect(activeItems).toEqual([
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
      ])
    })
  })
})
