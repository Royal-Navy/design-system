import styled, { css, CSSProp } from 'styled-components'
import { color, spacing, zIndex } from '@royalnavy/design-tokens'

import { TooltipPositionType } from '../Tooltip'

const TOOLTIP_BORDER_THICK = 1
const TOOLTIP_INNER = 4
const TOOLTIP_OUTER = TOOLTIP_INNER - 4
const TOOLTIP_OFFSET = TOOLTIP_OUTER + TOOLTIP_BORDER_THICK
const TOOLTIP_DARK_BG = color('neutral', '700')
const TOOLTIP_DARK_BORDER = TOOLTIP_DARK_BG

interface StyledContentProps {
  /**
   * Where to position the tooltip relative to the target element.
   */
  $position: TooltipPositionType
}

function getPositionStyles(position: TooltipPositionType): CSSProp {
  const styles = {
    above: css`
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
    right: css`
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
    below: css`
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
    left: css`
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

export const StyledContent = styled.div<StyledContentProps>`
  z-index: ${zIndex('modal', 1)};
  background: ${TOOLTIP_DARK_BG};
  color: ${color('neutral', 'white')};
  border: ${TOOLTIP_DARK_BORDER} solid ${TOOLTIP_BORDER_THICK}px;
  border-radius: 5px;
  padding: ${spacing('6')} ${spacing('8')};
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

  ${({ $position }) => getPositionStyles($position)}
`
