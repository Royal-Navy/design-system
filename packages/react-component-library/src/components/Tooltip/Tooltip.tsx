import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { getId } from '../../helpers'
import { PositionType } from '../../common/Position'
import { TOOLTIP_POSITION } from '.'

export interface TooltipProps extends PositionType {
  children: React.ReactNode
  id?: string
  position?:
    | typeof TOOLTIP_POSITION.ABOVE
    | typeof TOOLTIP_POSITION.BELOW
    | typeof TOOLTIP_POSITION.LEFT
    | typeof TOOLTIP_POSITION.RIGHT
  title?: string
  width?: number
}

interface StyledTooltipContentProps {
  position?: string
}

const { zIndex, color, spacing, fontSize } = selectors

const TOOLTIP_BORDER_THICK = 2
const TOOLTIP_INNER = 8
const TOOLTIP_OUTER = TOOLTIP_INNER - 2
const TOOLTIP_OFFSET = TOOLTIP_OUTER + TOOLTIP_BORDER_THICK
const TOOLTIP_DARK_BG = color('neutral', '700')
const TOOLTIP_DARK_BORDER = TOOLTIP_DARK_BG

function getPositionStyles(position: string): string {
  const styles = {
    above: `
      &::before {
        border-color: ${TOOLTIP_DARK_BORDER} transparent;
        border-width: ${TOOLTIP_INNER}px ${TOOLTIP_INNER}px 0;
        margin-left: -${TOOLTIP_OUTER}px;
        bottom: -${TOOLTIP_INNER}px;
        left: 50%;
      }
      &::after {
        border-color: ${TOOLTIP_DARK_BG} transparent;
        border-width: ${TOOLTIP_INNER}px ${TOOLTIP_INNER}px 0;
        margin-left: -${TOOLTIP_OUTER}px;
        bottom: -${TOOLTIP_OUTER}px;
        left: 50%;
      }
    `,
    right: `
      &::before {
        border-color: transparent ${TOOLTIP_DARK_BORDER};
        border-width: ${TOOLTIP_OUTER}px ${TOOLTIP_OUTER}px ${TOOLTIP_OUTER}px 0;
        margin-top: -${TOOLTIP_OUTER}px;
        left: -${TOOLTIP_OFFSET}px;
        top: 50%;
      }
      &::after {
        border-color: transparent ${TOOLTIP_DARK_BG};
        border-width: ${TOOLTIP_INNER}px ${TOOLTIP_INNER}px ${TOOLTIP_INNER}px 0;
        margin-top: -${TOOLTIP_INNER}px;
        left: -${TOOLTIP_INNER}px;
        top: 50%;
      }
    `,
    below: `
      &::before {
        border-color: ${TOOLTIP_DARK_BORDER} transparent;
        border-width: 0 ${TOOLTIP_OUTER}px ${TOOLTIP_OUTER}px;
        margin-left: -${TOOLTIP_OUTER}px;
        top: -${TOOLTIP_OFFSET}px;
        left: 50%;
      }
      &::after {
        border-color: ${TOOLTIP_DARK_BG} transparent;
        border-width: 0 ${TOOLTIP_INNER}px ${TOOLTIP_INNER}px;
        margin-left: -${TOOLTIP_INNER}px;
        top: -${TOOLTIP_INNER}px;
        left: 50%;
      }
    `,
    left: `
      &::before {
        border-color: transparent ${TOOLTIP_DARK_BORDER};
        border-width: ${TOOLTIP_OUTER}px 0 ${TOOLTIP_OUTER}px ${TOOLTIP_OUTER}px;
        margin-top: -${TOOLTIP_OUTER}px;
        right: -${TOOLTIP_OFFSET}px;
        top: 50%;
      }
      &::after {
        border-color: transparent ${TOOLTIP_DARK_BG};
        border-width: ${TOOLTIP_INNER}px 0 ${TOOLTIP_INNER}px ${TOOLTIP_INNER}px;
        margin-top: -${TOOLTIP_INNER}px;
        right: -${TOOLTIP_INNER}px;
        top: 50%;
      }
    `,
  }

  return styles[position]
}

const StyledTooltip = styled.div`
  position: absolute;
`

const StyledTooltipContent = styled.div<StyledTooltipContentProps>`
  z-index: ${zIndex('modal', 1)};
  background: ${TOOLTIP_DARK_BG};
  color: ${color('neutral', 'white')};
  border: ${TOOLTIP_DARK_BORDER} solid ${TOOLTIP_BORDER_THICK};
  border-radius: 5px;
  padding: ${spacing('3')};
  position: relative;
  top: auto;
  left: auto;
  height: auto;
  width: auto;

  &::before {
    border-style: solid;
    content: '';
    display: block;
    position: absolute;
    width: 0;
    z-index: 0;
  }

  &::after {
    border-style: solid;
    content: '';
    display: block;
    position: absolute;
    width: 0;
    z-index: 1;
  }

  ${({ position }) => getPositionStyles(position)}
`

const StyledTooltipTitle = styled.div`
  padding-bottom: ${spacing('1')};
`

const StyledTooltipMessage = styled.div`
  font-size: ${fontSize('base')};
  color: ${color('neutral', '100')};
`

export const Tooltip: React.FC<TooltipProps> = ({
  bottom,
  children,
  id,
  left,
  position = TOOLTIP_POSITION.ABOVE,
  right,
  title,
  top,
  width,
}) => {
  const style = {
    bottom,
    left,
    right,
    top,
    width,
  }

  const contentId = getId('tooltip-content')
  const titleId = title ? getId('tooltip-title') : null

  return (
    <StyledTooltip
      aria-describedby={contentId}
      aria-labelledby={titleId}
      data-testid="tooltip"
      id={id}
      role="tooltip"
      style={style}
    >
      <StyledTooltipContent position={position}>
        {title && <StyledTooltipTitle id={titleId}>{title}</StyledTooltipTitle>}
        <StyledTooltipMessage data-testid="tooltip-content" id={contentId}>
          {children}
        </StyledTooltipMessage>
      </StyledTooltipContent>
    </StyledTooltip>
  )
}

Tooltip.displayName = 'Tooltip'
