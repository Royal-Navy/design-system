export const calculate = {
  right: (element: Element | any) => {
    const elemRect = element.getBoundingClientRect()

    const bottom = window.innerHeight - elemRect.bottom - 8 + window.pageYOffset
    const left = elemRect.left + elemRect.width + 18 + window.pageXOffset

    return { bottom, left }
  },
  below: (element: Element | any, sheetWidth: number) => {
    const elemRect = element.getBoundingClientRect()

    const left =
      elemRect.left - sheetWidth + elemRect.width + window.pageXOffset - 6
    const top = elemRect.bottom + window.pageYOffset

    return { left, top }
  },
}
