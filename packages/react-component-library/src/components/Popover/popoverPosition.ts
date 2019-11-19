import { FLOATING_BOX_PLACEMENT } from '../../primitives/FloatingBox'

export const calculate = {
  [FLOATING_BOX_PLACEMENT.ABOVE]: (
    target: Element | any,
    popover: Element | any
  ) => {
    const targetRect = target.getBoundingClientRect()
    const popoverRect = popover.current.getBoundingClientRect()

    const left = targetRect.left + (targetRect.width / 2) + window.pageXOffset - 15
    const top = targetRect.bottom - targetRect.height - popoverRect.height - 5

    return { left, top }
  },
  [FLOATING_BOX_PLACEMENT.BELOW]: (
    target: Element | any,
  ) => {
    const targetRect = target.getBoundingClientRect()

    const left = targetRect.right - (targetRect.width / 2) + window.pageXOffset - 15
    const top = targetRect.bottom + window.pageYOffset + 5

    return { left, top }
  },
  [FLOATING_BOX_PLACEMENT.LEFT]: (
    target: Element | any,
    popover: Element | any
  ) => {
    //
  },
  [FLOATING_BOX_PLACEMENT.RIGHT]: (
    target: Element | any,
    popover: Element | any
  ) => {
    //
  },
}
