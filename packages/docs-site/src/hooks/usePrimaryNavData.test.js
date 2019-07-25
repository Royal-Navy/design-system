import { useStaticQuery } from 'gatsby'

import mockNavData from '../../jest/data/mockNavData'
import usePrimaryNavData from './usePrimaryNavData'

describe('usePrimaryNavData', () => {
  let result

  beforeEach(() => {
    useStaticQuery.mockReturnValue(mockNavData)
  })

  describe("when the user is on the 'Get started' page", () => {
    beforeEach(() => {
      const location = {
        pathname: '/get-started',
      }

      result = usePrimaryNavData(location)
    })

    it('should return nav items for the top level things', () => {
      expect(result).toHaveLength(7)

      expect(result[0]).toHaveProperty('href', '/get-started')
      expect(result[0]).toHaveProperty('label', 'Get started')

      expect(result[1]).toHaveProperty('href', '/styles')
      expect(result[1]).toHaveProperty('label', 'Styles')

      expect(result[2]).toHaveProperty('href', '/components')
      expect(result[2]).toHaveProperty('label', 'Components')

      expect(result[3]).toHaveProperty('href', '/patterns')
      expect(result[3]).toHaveProperty('label', 'Patterns')

      expect(result[4]).toHaveProperty('href', '/nelson-api-documentation')
      expect(result[4]).toHaveProperty('label', 'NELSON API Documentation')

      expect(result[5]).toHaveProperty('href', '/about-the-design-system')
      expect(result[5]).toHaveProperty('label', 'About the design system')

      expect(result[6]).toHaveProperty('href', '/community')
      expect(result[6]).toHaveProperty('label', 'Community')
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
        true,
        false,
        false,
        false,
        false,
      ])
    })
  })
})
