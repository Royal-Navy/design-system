import { useState, Dispatch, SetStateAction } from 'react'
import { PositioningStrategy, Placement } from '@popperjs/core'
import { usePopper } from 'react-popper'

export const useFloatingElement = (
  placement: Placement = 'bottom',
  strategy: PositioningStrategy = 'fixed'
): {
  targetElementRef: Dispatch<SetStateAction<any>>
  floatingElementRef: Dispatch<SetStateAction<HTMLElement | null>>
  arrowElementRef: Dispatch<SetStateAction<string | HTMLElement | null>>
  styles: { [key: string]: React.CSSProperties }
  attributes: { [key: string]: { [key: string]: string } | undefined }
} => {
  const [targetElement, targetElementRef] = <any>useState(null)

  const [floatingElement, floatingElementRef] =
    useState<HTMLElement | null>(null)

  const [arrowElement, arrowElementRef] =
    useState<string | HTMLElement | null>(null)

  const { styles, attributes } = usePopper(targetElement, floatingElement, {
    modifiers: [
      {
        name: 'arrow',
        options: {
          element: arrowElement,
          padding: 20,
        },
      },
    ],
    placement,
    strategy,
  })

  return {
    targetElementRef,
    floatingElementRef,
    arrowElementRef,
    styles,
    attributes,
  }
}
