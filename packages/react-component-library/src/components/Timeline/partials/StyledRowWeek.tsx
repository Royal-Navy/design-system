import styled from 'styled-components'

import { TIMELINE_ALT_BG_COLOR, TIMELINE_BG_COLOR } from '../constants'

interface StyledRowWeekProps {
  isOddNumber: boolean
  marginLeft: string
  width: string
}

export const StyledRowWeek = styled.div<StyledRowWeekProps>`
  display: inline-block;
  height: 100vh;
  background-color: ${({ isOddNumber }) =>
  isOddNumber ? TIMELINE_ALT_BG_COLOR : TIMELINE_BG_COLOR};
  margin-left: ${({ marginLeft }) => marginLeft};
  width: ${({ width }) => width};
`
