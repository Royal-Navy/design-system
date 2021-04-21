import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import {
  TIMELINE_ALT_BG_COLOR,
  TIMELINE_BG_COLOR,
  TIMELINE_BORDER_COLOR,
} from '../constants'

const { spacing } = selectors

interface StyledWeekProps {
  $isOddNumber: boolean
  $marginLeftPx: string
  $widthPx: string
}

export const StyledWeek = styled.div<StyledWeekProps>`
  display: inline-flex;
  align-items: center;
  height: 2.5rem;
  background-color: ${({ $isOddNumber }) =>
    $isOddNumber ? TIMELINE_ALT_BG_COLOR : TIMELINE_BG_COLOR};
  border-bottom: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  justify-content: unset;
  margin-left: ${({ $marginLeftPx }) => $marginLeftPx};
  width: ${({ $widthPx }) => $widthPx};
`
