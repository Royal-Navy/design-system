import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import TetherComponent from 'react-tether'

import { POPOVER_CLOSE_DELAY, POPOVER_PLACEMENT, POPOVER_PLACEMENTS } from './constants'

import { FLOATING_BOX_SCHEME, FloatingBox, FloatingBoxProps } from '../../primitives/FloatingBox'

import { getId } from '../../helpers'

import { useDocumentClick } from '../../hooks'

interface PopoverProps
  extends Omit<FloatingBoxProps, 'onMouseEnter' | 'onMouseLeave'> {
  children: React.ReactElement
  content: React.ReactElement
  isClick?: boolean
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
  isClick,
  placement = POPOVER_PLACEMENT.BELOW,
  scheme = FLOATING_BOX_SCHEME.LIGHT,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef(null)
  const floatingBoxChildrenRef = useRef()
  const PLACEMENTS = POPOVER_PLACEMENTS[placement]

  const classes = classNames('rn-popover', className, {
    'is-visible': isVisible,
  })

  function showPopover() {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    setIsVisible(true)
  }

  function hidePopover() {
    if (isVisible) {
      timerRef.current = setTimeout(() => {
        timerRef.current = null
        setIsVisible(false)
      }, POPOVER_CLOSE_DELAY)
    }
  }

  function togglePopover() {
    if (isVisible) {
      hidePopover()
    } else {
      showPopover()
    }
  }

  function getMouseEvents() {
    if (isClick) {
      return {
        onClick: togglePopover,
      }
    }

    return {
      onMouseEnter: showPopover,
      onMouseLeave: hidePopover,
    }
  }

  if (isClick) {
    useDocumentClick(floatingBoxChildrenRef, () => {
      if (isVisible) {
        hidePopover()
      }
    }, [isVisible])
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
        {React.cloneElement(content, {
          ref: floatingBoxChildrenRef
        })}
      </FloatingBox>
    )
  }

  function renderTarget(ref: React.RefObject<HTMLElement>) {
    return React.Children.map(children, (item: React.ReactElement) =>
      React.cloneElement(item, {
        ref,
        ...getMouseEvents(),
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
