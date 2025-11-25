import React, { Dispatch, SetStateAction } from 'react'
import {
  Strategy,
  Placement,
  VirtualElement,
  useFloating,
  arrow,
  autoUpdate,
  autoPlacement,
  flip,
  shift,
  UseFloatingOptions,
} from '@floating-ui/react'

import { useStatefulRef } from './useStatefulRef'

export const useFloatingElement = (
  placement: Placement | 'auto' = 'bottom',
  strategy: Strategy = 'fixed',
  externalTargetElement: Element | VirtualElement | null = null
): {
  targetElementRef: Dispatch<SetStateAction<Element | null>>
  floatingElement: HTMLElement | null
  floatingElementRef: Dispatch<SetStateAction<HTMLElement | null>>
  forceUpdate: () => void
  arrowElementRef: Dispatch<SetStateAction<HTMLElement | null>>
  styles: { [key: string]: React.CSSProperties }
  attributes: {
    [key: string]: { [key: string]: string | undefined } | undefined
  }
  placement: Placement
} => {
  const [targetElement, targetElementRef] = useStatefulRef()
  const [floatingElement, floatingElementRef] = useStatefulRef<HTMLElement>()
  const [arrowElement, arrowElementRef] = useStatefulRef<HTMLElement>()

  // Handle 'auto' placement (legacy Popper.js feature)
  const isAutoPlacement = placement === 'auto'
  const actualPlacement: Placement = isAutoPlacement ? 'bottom' : placement

  // Build middleware array
  // These middleware replicate Popper.js default behavior:
  // - offset: adds space between reference and floating element
  // - flip: flips to opposite side when there's no space
  // - shift: shifts along the axis to keep in view
  // - arrow: positions the arrow element
  const middleware: UseFloatingOptions['middleware'][] = []

  if (isAutoPlacement) {
    // Use autoPlacement instead of flip when placement is 'auto'
    middleware.push(autoPlacement())
  } else {
    // Use flip to switch sides when there's not enough space
    middleware.push(flip())
  }

  // Shift keeps the floating element in view by sliding it along the axis
  middleware.push(shift({ padding: 5 }))

  if (arrowElement) {
    middleware.push(
      arrow({
        element: arrowElement,
        padding: 20,
      })
    )
  }

  const {
    floatingStyles,
    middlewareData,
    update,
    placement: finalPlacement,
  } = useFloating({
    placement: actualPlacement,
    strategy,
    elements: {
      reference: externalTargetElement || targetElement,
      floating: floatingElement,
    },
    middleware,
    whileElementsMounted: autoUpdate,
  })

  const arrowData = middlewareData.arrow

  // Calculate arrow position based on Floating UI's coordinate system
  const arrowStyle: React.CSSProperties = {}
  if (arrowData) {
    const { x, y } = arrowData

    // Floating UI provides x/y coordinates for positioning the arrow
    // along the edge of the floating element
    if (x != null) {
      arrowStyle.left = `${x}px`
    }
    if (y != null) {
      arrowStyle.top = `${y}px`
    }
  }

  return {
    targetElementRef,
    floatingElement,
    floatingElementRef,
    forceUpdate: update,
    arrowElementRef,
    placement: finalPlacement,
    styles: {
      popper: floatingStyles,
      arrow: arrowStyle,
    },
    attributes: {
      popper: {
        'data-popper-placement': finalPlacement,
      },
      arrow: {},
    },
  }
}
