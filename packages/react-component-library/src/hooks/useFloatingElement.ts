import { Dispatch, SetStateAction } from 'react'
import { PositioningStrategy, Placement, VirtualElement } from '@popperjs/core'
import { usePopper } from 'react-popper'

import { useStatefulRef } from './useStatefulRef'

export const useFloatingElement = (
  placement: Placement = 'bottom',
  strategy: PositioningStrategy = 'fixed',
  externalTargetElement: Element | VirtualElement | null = null
): {
  targetElementRef: Dispatch<SetStateAction<Element | null>>
  floatingElementRef: Dispatch<SetStateAction<HTMLElement | null>>
  arrowElementRef: Dispatch<SetStateAction<HTMLElement | null>>
  styles: { [key: string]: React.CSSProperties }
  attributes: { [key: string]: { [key: string]: string } | undefined }
} => {
  const [targetElement, targetElementRef] = useStatefulRef()
  const [floatingElement, floatingElementRef] = useStatefulRef<HTMLElement>()
  const [arrowElement, arrowElementRef] = useStatefulRef<HTMLElement>()

  const { styles, attributes } = usePopper(
    externalTargetElement || targetElement,
    floatingElement,
    {
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
    }
  )

  return {
    targetElementRef,
    floatingElementRef,
    arrowElementRef,
    styles,
    attributes,
  }
}
