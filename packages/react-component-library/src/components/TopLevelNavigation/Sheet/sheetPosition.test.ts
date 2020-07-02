import { calculate } from './sheetPosition'
import { SHEET_PLACEMENT } from './constants'

describe('sheetPosition', () => {
  describe('when the sheet is on the right', () => {
    let result: PositionType

    beforeEach(() => {
      const element = {
        getBoundingClientRect: () => ({
          bottom: 10,
          left: 100,
          width: 200,
        }),
      }

      global.innerHeight = 1000

      result = calculate[SHEET_PLACEMENT.RIGHT](element)
    })

    it('should calculate the position to be on the right of the element', () => {
      expect(result).toHaveProperty('bottom', 982)
      expect(result).toHaveProperty('left', 318)
    })
  })

  describe('when the sheet is below', () => {
    let result: PositionType

    beforeEach(() => {
      const element = {
        getBoundingClientRect: () => ({
          bottom: 200,
          left: 900,
          width: 20,
        }),
      }

      result = calculate[SHEET_PLACEMENT.BELOW](element, 335)
    })

    it('should calculate the position to be below the element', () => {
      expect(result).toHaveProperty('top', 200)
      expect(result).toHaveProperty('left', 579)
    })
  })
})
