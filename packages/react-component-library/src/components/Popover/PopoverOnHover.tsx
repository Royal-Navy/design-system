import React, { useState, useRef } from 'react'
import classNames from 'classnames'

import {
  POPOVER_PLACEMENT,
  POPOVER_PLACEMENT_ARROW_POSITION_MAP,
  POPOVER_CLOSE_DELAY,
} from './constants'

import { Popover, PopoverProps } from './Popover'
import { calculate } from './popoverPosition'

interface PopoverOnHoverProps
  extends Omit<PopoverProps, 'onMouseEnter' | 'onMouseLeave'> {
  children: React.ReactElement
  popoverJSX: React.ReactElement
  placement:
    | POPOVER_PLACEMENT.ABOVE
    | POPOVER_PLACEMENT.BELOW
    | POPOVER_PLACEMENT.LEFT
    | POPOVER_PLACEMENT.RIGHT
}

export const PopoverOnHover: React.FC<PopoverOnHoverProps> = ({
  children,
  popoverJSX,
  placement = POPOVER_PLACEMENT.BELOW,
  ...rest
}) => {
  const [position, setPosition] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  const timerRef = useRef(null)
  const popoverRef = useRef(null)

  const arrowPosition = POPOVER_PLACEMENT_ARROW_POSITION_MAP[placement]

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

  const child = React.Children.map(children, (item: React.ReactElement) =>
    React.cloneElement(item, {
      onMouseEnter: handleOnMouseEnter,
      onMouseLeave: handleOnMouseLeave,
    })
  )[0]

  const classes = classNames('rn-popover--on-hover', {
    'is-visible': isVisible,
  })

  return (
    <>
      {child}
      <Popover
        ref={popoverRef}
        className={classes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        position={arrowPosition}
        {...position}
        {...rest}
      >
        {popoverJSX}
      </Popover>
    </>
  )
}

PopoverOnHover.displayName = 'PopoverOnHover'
