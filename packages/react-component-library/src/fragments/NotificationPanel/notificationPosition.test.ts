import { calculate } from './notificationPosition'
import { NOTIFICATION_PLACEMENT } from './constants'

describe('notificationPosition', () => {
  describe('when the notifications are on the right', () => {
    let result: PositionType

    beforeEach(() => {
      const element = {
        getBoundingClientRect: () => ({
          bottom: 10,
          left: 100,
          width: 200,
        }),
      }

      const fakeWindow = {
        innerHeight: 1000,
      }

      result = calculate[NOTIFICATION_PLACEMENT.RIGHT](element, fakeWindow)
    })

    it('should calculate the position to be on the right of the element', () => {
      expect(result).toHaveProperty('bottom', 982)
      expect(result).toHaveProperty('left', 318)
    })
  })

  describe('when the notifications are below', () => {
    let result: PositionType

    beforeEach(() => {
      const element = {
        getBoundingClientRect: () => ({
          bottom: 200,
          left: 900,
          width: 20,
        }),
      }

      result = calculate[NOTIFICATION_PLACEMENT.BELOW](element)
    })

    it('should calculate the position to be below the element', () => {
      expect(result).toHaveProperty('top', 203)
      expect(result).toHaveProperty('left', 590)
    })
  })
})
