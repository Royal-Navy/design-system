import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import {
  TIMELINE_ALT_BG_COLOR,
  TIMELINE_BG_COLOR,
  TIMELINE_BORDER_COLOR,
} from '../constants'

const { spacing } = selectors

interface StyledWeekProps {
  isOddNumber: boolean
  marginLeft: string
  width: string
}

export const StyledWeek = styled.div<StyledWeekProps>`
  display: inline-flex;
  align-items: center;
  height: 2.5rem;
  background-color: ${({ isOddNumber }) =>
    isOddNumber ? TIMELINE_ALT_BG_COLOR : TIMELINE_BG_COLOR};
  border-top: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  border-bottom: ${spacing('px')} solid ${TIMELINE_BORDER_COLOR};
  justify-content: unset;
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
`
