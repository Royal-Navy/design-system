import { POPOVER_PLACEMENT } from './constants'

export const calculate = {
  [POPOVER_PLACEMENT.ABOVE]: (
    target: Element | any,
    popover: Element | any
  ) => {
    const targetRect = target.getBoundingClientRect()
    const popoverRect = popover.current.getBoundingClientRect()

    const left = targetRect.left + (targetRect.width / 2) + window.pageXOffset - 15
    const top = targetRect.bottom - targetRect.height - popoverRect.height - 5

    return { left, top }
  },
  [POPOVER_PLACEMENT.BELOW]: (
    target: Element | any,
  ) => {
    const targetRect = target.getBoundingClientRect()

    const left = targetRect.right - (targetRect.width / 2) + window.pageXOffset - 15
    const top = targetRect.bottom + window.pageYOffset + 5

    return { left, top }
  },
  [POPOVER_PLACEMENT.LEFT]: (
    target: Element | any,
    popover: Element | any
  ) => {
    //
  },
  [POPOVER_PLACEMENT.RIGHT]: (
    target: Element | any,
    popover: Element | any
  ) => {
    //
  },
}
