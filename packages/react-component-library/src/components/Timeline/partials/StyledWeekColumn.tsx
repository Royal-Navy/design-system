import styled from 'styled-components'

import { TIMELINE_ALT_BG_COLOR, TIMELINE_BG_COLOR } from '../constants'

interface StyledWeekColumnProps {
  $isOddNumber: boolean
  $marginLeftPx: string
  $widthPx: string
}

export const StyledWeekColumn = styled.div<StyledWeekColumnProps>`
  display: inline-block;
  height: 100vh;
  background-color: ${({ $isOddNumber }) =>
    $isOddNumber ? TIMELINE_ALT_BG_COLOR : TIMELINE_BG_COLOR};
  margin-left: ${({ $marginLeftPx }) => $marginLeftPx};
  width: ${({ $widthPx }) => $widthPx};
`
