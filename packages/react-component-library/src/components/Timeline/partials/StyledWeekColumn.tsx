import styled from 'styled-components'

import { TIMELINE_ALT_BG_COLOR, TIMELINE_BG_COLOR } from '../constants'

interface StyledWeekColumnProps {
  isOddNumber: boolean
  marginLeft: string
  width: string
}

export const StyledWeekColumn = styled.div<StyledWeekColumnProps>`
  display: inline-block;
  height: 100vh;
  background-color: ${({ isOddNumber }) =>
  isOddNumber ? TIMELINE_ALT_BG_COLOR : TIMELINE_BG_COLOR};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
`
