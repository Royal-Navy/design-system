import React from 'react'
import styled, { css } from 'styled-components'
import TetherComponent from 'react-tether'

import { POPOVER_CLOSE_DELAY, POPOVER_PLACEMENT, POPOVER_PLACEMENTS } from './constants'

import {
  FLOATING_BOX_SCHEME,
  FloatingBox,
  FloatingBoxProps,
} from '../../primitives/FloatingBox'

import { getId } from '../../helpers'

import { useHideShow } from './useHideShow'

interface PopoverProps
  extends Omit<FloatingBoxProps, 'onMouseEnter' | 'onMouseLeave'> {
  children: React.ReactElement
  closeDelay?: number,
  content: React.ReactElement
  isClick?: boolean
  placement:
    | typeof POPOVER_PLACEMENT.ABOVE
    | typeof POPOVER_PLACEMENT.BELOW
    | typeof POPOVER_PLACEMENT.LEFT
    | typeof POPOVER_PLACEMENT.RIGHT
  scheme?: typeof FLOATING_BOX_SCHEME.LIGHT | typeof FLOATING_BOX_SCHEME.DARK
}

interface StyledFloatingBoxProps {
  $isVisible: boolean
}

const StyledFloatingBox = styled(FloatingBox)<StyledFloatingBoxProps>`
  opacity: 0;
  transition: linear opacity 0.3s;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
    `}
`

export const Popover: React.FC<PopoverProps> = ({
  children,
  closeDelay = POPOVER_CLOSE_DELAY,
  content,
  isClick,
  placement = POPOVER_PLACEMENT.BELOW,
  scheme = FLOATING_BOX_SCHEME.LIGHT,
  ...rest
}) => {
  const { floatingBoxChildrenRef, isVisible, mouseEvents } = useHideShow(
    isClick,
    closeDelay
  )
  const PLACEMENTS = POPOVER_PLACEMENTS[placement]

  const contentId = getId('popover-content')

  function renderElement(ref: React.RefObject<HTMLElement>) {
    return (
      <StyledFloatingBox
        $isVisible={isVisible}
        ref={ref}
        position={PLACEMENTS.ARROW_POSITION}
        scheme={scheme}
        aria-describedby={contentId}
        contentId={contentId}
        data-testid="popover"
        {...rest}
      >
        {React.cloneElement(content, {
          ref: floatingBoxChildrenRef,
        })}
      </StyledFloatingBox>
    )
  }

  function renderTarget(ref: React.RefObject<HTMLElement>) {
    return React.Children.map(children, (item: React.ReactElement) =>
      React.cloneElement(item, {
        ref,
        ...mouseEvents,
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
        style: { pointerEvents: isVisible ? 'all' : 'none' },
      })}
    </>
  )
}

Popover.displayName = 'Popover'
