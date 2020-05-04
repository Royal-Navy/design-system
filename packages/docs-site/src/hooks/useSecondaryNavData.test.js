import { useStaticQuery } from 'gatsby'

import mockNavData from '../../jest/data/mockNavData'
import useSecondaryNavData from './useSecondaryNavData'

describe('useSecondaryNavData', () => {
  let result

  beforeEach(() => {
    useStaticQuery.mockReturnValue(mockNavData)
  })

  describe('when the user is on the home page', () => {
    beforeEach(() => {
      const location = {
        pathname: '/',
      }

      result = useSecondaryNavData(location)
    })

    it('should return no sub items', () => {
      expect(result).toHaveLength(0)
    })
  })

  describe('when the user is on the getting started page', () => {
    beforeEach(() => {
      const location = {
        pathname: '/get-started',
      }

      result = useSecondaryNavData(location)
    })

    it('should return nested items for sub sections', () => {
      expect(result).toHaveLength(3)

      expect(result[0]).toStrictEqual({
        active: true,
        children: [],
        href: '/get-started',
        index: 0,
        label: 'Overview',
      })

      expect(result[1]).toStrictEqual({
        active: false,
        children: [],
        href: '/get-started/development',
        label: 'Development',
      })
    })
  })

  describe('when the user is on a sub page of getting started', () => {
    beforeEach(() => {
      const location = {
        pathname: '/get-started/development',
      }

      result = useSecondaryNavData(location)
    })

    it('should return nested items for sub sections', () => {
      expect(result).toHaveLength(3)

      expect(result[0]).toStrictEqual({
        active: false,
        children: [],
        href: '/get-started',
        index: 0,
        label: 'Overview',
      })

      expect(result[1]).toStrictEqual({
        active: true,
        children: [],
        href: '/get-started/development',
        label: 'Development',
      })
    })
  })

  describe('when the user is on a sub page of getting started and a trailing slash', () => {
    beforeEach(() => {
      const location = {
        pathname: '/get-started/development/',
      }

      result = useSecondaryNavData(location)
    })

    it('should return nested items for sub sections', () => {
      expect(result).toHaveLength(3)

      expect(result[0]).toStrictEqual({
        active: false,
        children: [],
        href: '/get-started',
        index: 0,
        label: 'Overview',
      })

      expect(result[1]).toStrictEqual({
        active: true,
        children: [],
        href: '/get-started/development',
        label: 'Development',
      })
    })
  })

  describe('when the user is on the component page', () => {
    beforeEach(() => {
      const location = {
        pathname: '/components',
      }

      result = useSecondaryNavData(location)
    })

    it('should return items for section', () => {
      expect(result).toHaveLength(16)
    })

    it('should return nested items within a section', () => {
      const forms = result.find((item) => item.label === 'Forms')
      expect(forms.children).toHaveLength(4)
    })

    it('should sort the items', () => {
      expect(result[0].label).toEqual('Overview')
      expect(result[14].label).toEqual('Progress')
    })

    it('should sort the sub children', () => {
      const { children } = result.find((item) => item.label === 'Forms')
      expect(children[0].label).toEqual('Overview')
      expect(children[2].label).toEqual('Toggle')
    })
  })

  describe('when the user is on the component/input page', () => {
    beforeEach(() => {
      const location = {
        pathname: '/components/forms/input',
      }

      result = useSecondaryNavData(location)
    })

    it('should mark the input page as active', () => {
      const { children } = result.find((item) => item.label === 'Forms')
      expect(children[1].active).toEqual(true)
    })

    it('should not mark the forms page as active', () => {
      const { active } = result.find((item) => item.label === 'Forms')
      expect(active).toEqual(false)
    })
  })
})
