import React, { forwardRef } from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { FLOATING_BOX_SCHEME, FLOATING_BOX_ARROW_POSITION } from './constants'
import { getId } from '../../helpers'
import { PositionType } from '../../common/Position'
import {
  FloatingBoxContent,
  StyledFloatingBoxContent,
} from './FloatingBoxContent'
import { FloatingBoxSchemeType, FloatingBoxPositionType } from './types'

const { breakpoint, color } = selectors

export interface FloatingBoxProps extends PositionType, ComponentWithClass {
  role?: string
  contentId?: string
  width?: number
  height?: number
  top?: number
  right?: number
  bottom?: number
  left?: number
  scheme?: FloatingBoxSchemeType
  position?: FloatingBoxPositionType
  onMouseEnter?: (e: React.MouseEvent) => void
  onMouseLeave?: (e: React.MouseEvent) => void
  children?: React.ReactElement
}

interface StyledFloatingBoxProps {
  $position: FloatingBoxPositionType
  $scheme: FloatingBoxSchemeType
}

function getContentBefore(
  $position: FloatingBoxPositionType,
  $scheme: FloatingBoxSchemeType
) {
  const borderColor =
    $scheme === FLOATING_BOX_SCHEME.LIGHT
      ? color('neutral', '100')
      : color('neutral', '700')

  if (
    $position === FLOATING_BOX_ARROW_POSITION.TOP_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.TOP_RIGHT
  ) {
    return css`
      border-width: 0 5px 5px;
      margin-left: -5px;
      top: -6px;

      border-color: ${borderColor} transparent;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_TOP ||
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
  ) {
    return css`
      border-width: 5px 0 5px 5px;
      right: -6px;
      margin-top: -5px;

      border-color: transparent ${borderColor};
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT
  ) {
    return css`
      border-width: 5px 5px 0;
      bottom: -6px;
      margin-left: -5px;

      border-color: ${borderColor} transparent;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_TOP ||
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM
  ) {
    return css`
      border-width: 5px 5px 5px 0;
      left: -6px;
      margin-top: -5px;

      border-color: transparent ${borderColor};
    `
  }

  return null
}

function getContentAfter(
  $position: FloatingBoxPositionType,
  $scheme: FloatingBoxSchemeType
) {
  const borderColor =
    $scheme === FLOATING_BOX_SCHEME.LIGHT
      ? color('neutral', 'white')
      : color('neutral', '700')

  if (
    $position === FLOATING_BOX_ARROW_POSITION.TOP_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.TOP_RIGHT
  ) {
    return css`
      border-width: 0 5px 5px;
      margin-left: -5px;
      top: -5px;

      border-color: ${borderColor} transparent;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_TOP ||
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
  ) {
    return css`
      border-width: 5px 0 5px 5px;
      right: -5px;
      margin-top: -5px;

      border-color: transparent ${borderColor};
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT
  ) {
    return css`
      border-width: 5px 5px 0;
      bottom: -5px;
      margin-left: -5px;

      border-color: ${borderColor} transparent;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM ||
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_TOP
  ) {
    return css`
      border-width: 5px 5px 5px 0;
      left: -5px;
      margin-top: -5px;

      border-color: transparent ${borderColor};
    `
  }

  return null
}

function getContentTweaks($position: FloatingBoxPositionType) {
  if (
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM ||
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
  ) {
    return css`
      top: auto;
      bottom: 15px;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.LEFT_TOP ||
    $position === FLOATING_BOX_ARROW_POSITION.RIGHT_TOP
  ) {
    return css`
      top: 15px;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.TOP_LEFT ||
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT
  ) {
    return css`
      left: 15px;
    `
  }

  if (
    $position === FLOATING_BOX_ARROW_POSITION.TOP_RIGHT ||
    $position === FLOATING_BOX_ARROW_POSITION.BOTTOM_RIGHT
  ) {
    return css`
      left: auto;
      right: 15px;
    `
  }

  return null
}

export const StyledFloatingBox = styled.div<StyledFloatingBoxProps>`
  @media only screen and (min-width: ${breakpoint('xs').breakpoint}) {
    ${({ $position, $scheme }) =>
      css`
        ${StyledFloatingBoxContent}:before {
          ${getContentBefore($position, $scheme)};
        }

        ${StyledFloatingBoxContent}:after {
          ${getContentAfter($position, $scheme)}
        }

        ${StyledFloatingBoxContent}:before, ${StyledFloatingBoxContent}:after {
          ${getContentTweaks($position)}
        }
      `}
  }
`

export const FloatingBox = forwardRef(
  (props: FloatingBoxProps, ref?: React.Ref<any>) => {
    const {
      contentId = getId('floating-box'),
      width,
      height,
      top,
      right,
      bottom,
      left,
      scheme,
      position,
      onMouseEnter,
      onMouseLeave,
      children,
      ...rest
    } = props

    const style = {
      width,
      height,
      top,
      right,
      bottom,
      left,
    }

    return (
      <StyledFloatingBox
        $position={position}
        $scheme={scheme}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        role="dialog"
        data-testid="floating-box"
        {...rest}
      >
        <FloatingBoxContent contentId={contentId} scheme={scheme}>
          {children}
        </FloatingBoxContent>
      </StyledFloatingBox>
    )
  }
)

FloatingBox.displayName = 'FloatingBox'
