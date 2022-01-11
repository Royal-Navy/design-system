import { useEffect } from 'react'
import { isNil } from 'lodash'
import type { VirtualElement, Placement, Strategy } from '@floating-ui/core'
import {
  useFloating,
  shift,
  arrow,
  autoPlacement,
} from '@floating-ui/react-dom'

export const useFloatingElement = (
  strategy: Strategy = 'fixed',
  arrowElementRef?:
    | React.MutableRefObject<HTMLElement | undefined>
    | HTMLElement,
  allowedPlacements?: Placement[]
): {
  placement: Placement
  targetElementRef: (node: Element | VirtualElement | null) => void
  floatingElementRef: (node: HTMLElement | null) => void
  styles: { [key: string]: React.CSSProperties }
} => {
  const {
    x,
    y,
    placement,
    reference: targetElementRef,
    floating: floatingElementRef,
    update,
    refs,
    middlewareData,
  } = useFloating({
    strategy,
    middleware: [
      shift(),
      autoPlacement({ allowedPlacements }),
      arrowElementRef &&
        arrow({
          element: arrowElementRef,
          padding: 20,
        }),
    ],
  })

  const { arrow: { x: arrowX, y: arrowY } = {} } = middlewareData

  useEffect(() => {
    if (!refs.reference.current || !refs.floating.current) {
      return undefined
    }

    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  })

  return {
    placement,
    targetElementRef,
    floatingElementRef,
    styles: {
      float: {
        position: strategy,
        left: isNil(x) ? '' : `${x}px`,
        top: isNil(y) ? '' : `${y}px`,
      },
      arrow: {
        left: isNil(x) ? '' : `${arrowX}px`,
        top: isNil(y) ? '' : `${arrowY}px`,
      },
    },
  }
}
