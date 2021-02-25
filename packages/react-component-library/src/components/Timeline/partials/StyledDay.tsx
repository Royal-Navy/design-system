import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { TIMELINE_BG_COLOR, TIMELINE_BORDER_COLOR } from '../constants'

const { spacing } = selectors

interface StyledDayProps {
  $width: number
}

export const StyledDay = styled.div<StyledDayProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background-color: ${TIMELINE_BG_COLOR};
  border-top: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  border-bottom: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  border-right: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  width: ${({ $width }) => `${$width}px`};
`
