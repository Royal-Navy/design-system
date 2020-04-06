import { isOdd } from '../isOdd'

describe('isOdd', () => {
  let result: boolean

  describe('when provided with an odd number', () => {
    beforeEach(() => {
      result = isOdd(1)
    })

    it('should return true', () => {
      expect(result).toEqual(true)
    })
  })

  describe('when provided with an even number', () => {
    beforeEach(() => {
      result = isOdd(2)
    })

    it('should return false', () => {
      expect(result).toEqual(false)
    })
  })
})
