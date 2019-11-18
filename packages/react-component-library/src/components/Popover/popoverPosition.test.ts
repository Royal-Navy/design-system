import { calculate } from './popoverPosition'
import { FLOATING_BOX_PLACEMENT } from '../../primitives/FloatingBox'

describe('popoverPosition', () => {
  describe('when the popover is above the target', () => {
    let result: PositionType

    beforeEach(() => {
      const target = {
        getBoundingClientRect: () => ({
          bottom: 10,
          left: 100,
          width: 20,
          height: 20
        }),
      }

      const popover = {
        getBoundingClientRect: () => ({
          width: 200,
          height: 200
        }),
      }

      result = calculate[FLOATING_BOX_PLACEMENT.ABOVE](target, popover)
    })

    it('should calculate the position to be on the right of the element', () => {
      expect(result).toHaveProperty('top', -215)
      expect(result).toHaveProperty('left', 95)
    })
  })

  describe('when the popover is below the target', () => {
    let result: PositionType

    beforeEach(() => {
      const target = {
        getBoundingClientRect: () => ({
          bottom: 200,
          right: 200,
          width: 20,
          height: 20
        }),
      }

      result = calculate[FLOATING_BOX_PLACEMENT.BELOW](target)
    })

    it('should calculate the position to be below the element', () => {
      expect(result).toHaveProperty('top', 205)
      expect(result).toHaveProperty('left', 175)
    })
  })
})
