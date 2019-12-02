import { NOTIFICATION_PLACEMENT, NOTIFICATION_CONTAINER_WIDTH } from './constants'

export const calculate = {
  [NOTIFICATION_PLACEMENT.RIGHT]: (
    element: Element | any,
    elementWindow: any = window
  ) => {
    const elemRect = element.getBoundingClientRect()

    const bottom =
      elementWindow.innerHeight - elemRect.bottom - 8 + window.pageYOffset
    const left = elemRect.left + elemRect.width + 18 + window.pageXOffset

    return { bottom, left }
  },
  [NOTIFICATION_PLACEMENT.BELOW]: (
    element: Element | any,
  ) => {
    const elemRect = element.getBoundingClientRect()

    const left =
      elemRect.left - NOTIFICATION_CONTAINER_WIDTH + elemRect.width + window.pageXOffset - 6
    const top = elemRect.bottom + window.pageYOffset

    return { left, top }
  },
}
