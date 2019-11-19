import React, { useState, useRef } from 'react'
import classNames from 'classnames'

import { POPOVER_SCHEME, POPOVER_CLOSE_DELAY } from './constants'

import {
  FloatingBox,
  FloatingBoxProps,
  FLOATING_BOX_PLACEMENT,
  FLOATING_BOX_PLACEMENT_ARROW_POSITION_MAP,
} from '../../primitives/FloatingBox'

import { calculate } from './popoverPosition'

interface PopoverProps
  extends Omit<FloatingBoxProps, 'onMouseEnter' | 'onMouseLeave'> {
  children: React.ReactElement
  popoverJSX: React.ReactElement
  scheme?: POPOVER_SCHEME.LIGHT | POPOVER_SCHEME.DARK
  placement:
    | FLOATING_BOX_PLACEMENT.ABOVE
    | FLOATING_BOX_PLACEMENT.BELOW
    | FLOATING_BOX_PLACEMENT.LEFT
    | FLOATING_BOX_PLACEMENT.RIGHT
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  popoverJSX,
  scheme = POPOVER_SCHEME.LIGHT,
  placement = FLOATING_BOX_PLACEMENT.BELOW,
  ...rest
}) => {
  const [position, setPosition] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const timerRef = useRef(null)
  const popoverRef = useRef(null)

  const arrowPosition = FLOATING_BOX_PLACEMENT_ARROW_POSITION_MAP[placement]

  const classes = classNames('rn-popover', {
    [`rn-popover--${scheme}`]: true,
    [`rn-popover--${arrowPosition}`]: true,
    'is-visible': isVisible,
  })

  function handleOnMouseEnter(e: React.MouseEvent) {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    if (position === null) {
      const element: Element = e.currentTarget
      setPosition(calculate[placement](element, popoverRef))
    }

    setIsVisible(true)
  }

  function handleOnMouseLeave(_: React.MouseEvent) {
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      setIsVisible(false)
    }, POPOVER_CLOSE_DELAY)
  }

  function renderTarget() {
    return React.Children.map(children, (item: React.ReactElement) =>
      React.cloneElement(item, {
        onMouseEnter: handleOnMouseEnter,
        onMouseLeave: handleOnMouseLeave,
      })
    )[0]
  }

  return (
    <>
      {renderTarget()}
      <FloatingBox
        ref={popoverRef}
        className={classes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        position={arrowPosition}
        {...position}
        {...rest}
      >
        {popoverJSX}
      </FloatingBox>
    </>
  )
}

Popover.displayName = 'Popover'
