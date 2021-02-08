import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { TIMELINE_BORDER_COLOR, TIMELINE_ROW_HEADER_WIDTH } from '../constants'

const { color, fontSize, spacing, zIndex } = selectors

interface StyledRowHeaderProps {
  isHeader?: boolean
}

export const StyledRowHeader = styled.div<StyledRowHeaderProps>`
  min-width: ${TIMELINE_ROW_HEADER_WIDTH};
  position: absolute;
  left: 0;
  height: inherit;
  background-color: ${color('neutral', 'white')};
  border-right: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  z-index: ${zIndex('body', 3)};
  justify-content: flex-end;
  display: inline-flex;
  align-items: center;
  font-size: ${fontSize('m')};
  font-weight: 600;
  color: ${color('neutral', '600')};
  padding-right: ${spacing('8')};
  ${({ isHeader }) =>
    isHeader &&
    css`
      font-size: ${fontSize('s')};
      font-weight: normal;
      color: ${color('neutral', '400')};
    `}
`
