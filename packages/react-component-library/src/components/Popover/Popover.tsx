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

import { getId } from '../../helpers'

interface PopoverProps
  extends Omit<FloatingBoxProps, 'onMouseEnter' | 'onMouseLeave'> {
  children: React.ReactElement
  content: React.ReactElement
  placement:
    | typeof POPOVER_PLACEMENT.ABOVE
    | typeof POPOVER_PLACEMENT.BELOW
    | typeof POPOVER_PLACEMENT.LEFT
    | typeof POPOVER_PLACEMENT.RIGHT
  scheme?: typeof FLOATING_BOX_SCHEME.LIGHT | typeof FLOATING_BOX_SCHEME.DARK
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  className,
  content,
  placement = POPOVER_PLACEMENT.BELOW,
  scheme = FLOATING_BOX_SCHEME.LIGHT,
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

  const contentId = getId('popover-content')

  function renderElement(ref: React.RefObject<HTMLElement>) {
    return (
      <FloatingBox
        ref={ref}
        className={classes}
        position={PLACEMENTS.ARROW_POSITION}
        scheme={scheme}
        aria-describedby={contentId}
        contentId={contentId}
        {...rest}
      >
        {content}
      </FloatingBox>
    )
  }

  function renderTarget(ref: React.RefObject<HTMLElement>) {
    return React.Children.map(children, (item: React.ReactElement) =>
      React.cloneElement(item, {
        ref,
        onMouseEnter: handleOnMouseEnter,
        onMouseLeave: handleOnMouseLeave,
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
      {/* @ts-ignore */}
      {React.createElement(TetherComponent, {
        renderElement,
        renderTarget,
        offset: PLACEMENTS.OFFSET,
        attachment: PLACEMENTS.ATTACHMENT,
        targetAttachment: PLACEMENTS.TARGET_ATTACHMENT,
      })}
    </>
  )
}

Popover.displayName = 'Popover'
