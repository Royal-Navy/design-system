import React, { useState, useRef } from 'react'
import classNames from 'classnames'
import TetherComponent from 'react-tether'

import {
  POPOVER_CLOSE_DELAY,
  POPOVER_PLACEMENT,
  POPOVER_PLACEMENTS,
} from './constants'

import {
  FloatingBox,
  FloatingBoxProps,
  FLOATING_BOX_SCHEME,
} from '../../primitives/FloatingBox'

interface PopoverProps
  extends Omit<FloatingBoxProps, 'onMouseEnter' | 'onMouseLeave'> {
  children: React.ReactElement
  content: React.ReactElement
  scheme?: FLOATING_BOX_SCHEME.LIGHT | FLOATING_BOX_SCHEME.DARK
  placement:
    | POPOVER_PLACEMENT.ABOVE
    | POPOVER_PLACEMENT.BELOW
    | POPOVER_PLACEMENT.LEFT
    | POPOVER_PLACEMENT.RIGHT
}

export const Popover: React.FC<PopoverProps> = ({
  className,
  children,
  content,
  scheme = FLOATING_BOX_SCHEME.LIGHT,
  placement = POPOVER_PLACEMENT.BELOW,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef(null)
  const PLACEMENTS = POPOVER_PLACEMENTS[placement]

  const classes = classNames('rn-popover', className, {
    'is-visible': isVisible,
  })

  function handleOnMouseEnter(_: React.MouseEvent) {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    setIsVisible(true)
  }

  function handleOnMouseLeave(_: React.MouseEvent) {
    timerRef.current = setTimeout(() => {
      timerRef.current = null
      setIsVisible(false)
    }, POPOVER_CLOSE_DELAY)
  }

  function renderTarget(ref: React.RefObject<HTMLElement>) {
    return React.Children.map(children, (item: React.ReactElement) =>
      React.cloneElement(item, {
        onMouseEnter: handleOnMouseEnter,
        onMouseLeave: handleOnMouseLeave,
        ref,
      })
    )[0]
  }

  /**
   * Type error in upstream Tether package. Fix submitted.
   * Using createElement allows us to avoid the type error.
   *
   * https://github.com/danreeves/react-tether/issues/218
   * https://github.com/Microsoft/TypeScript/issues/27552
   */
  return (
    <>
      {/*
      // @ts-ignore */}
      {React.createElement(TetherComponent, {
        offset: PLACEMENTS.OFFSET,
        attachment: PLACEMENTS.ATTACHMENT,
        targetAttachment: PLACEMENTS.TARGET_ATTACHMENT,
        renderTarget: (ref: any) => renderTarget(ref),
        renderElement: (ref: any) => (
          <FloatingBox
            ref={ref}
            className={classes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
            position={PLACEMENTS.ARROW_POSITION}
            scheme={scheme}
            {...rest}
          >
            {content}
          </FloatingBox>
        ),
      })}
    </>
  )
}

Popover.displayName = 'Popover'
